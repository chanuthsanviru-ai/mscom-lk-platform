create extension if not exists pgcrypto;

create schema if not exists private;

create type public.user_role as enum ('student', 'admin');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role public.user_role not null default 'student',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.students (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  full_name text not null,
  school text,
  district text,
  phone text,
  parent_phone text,
  stream text default 'Commerce',
  created_at timestamptz not null default now()
);

create table public.registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  full_name text not null,
  school text not null,
  district text not null,
  phone text not null,
  parent_phone text not null,
  email text not null,
  stream text not null,
  class_type text not null,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  is_published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_url text not null,
  is_published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  meta text not null,
  quote text not null,
  image_url text,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.schedules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text not null,
  mode text not null,
  class_date timestamptz not null,
  fee text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text not null,
  created_at timestamptz not null default now()
);

create or replace function private.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;

  insert into public.students (user_id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function private.handle_new_user();

alter table public.users enable row level security;
alter table public.students enable row level security;
alter table public.registrations enable row level security;
alter table public.announcements enable row level security;
alter table public.resources enable row level security;
alter table public.testimonials enable row level security;
alter table public.schedules enable row level security;
alter table public.contact_messages enable row level security;

create policy "Users can view own profile" on public.users for select to authenticated using (auth.uid() = id or private.is_admin());
create policy "Admins can update users" on public.users for update to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Students can view own student row" on public.students for select to authenticated using (auth.uid() = user_id or private.is_admin());
create policy "Students can update own student row" on public.students for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Admins can manage students" on public.students for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Anyone can register" on public.registrations for insert to anon, authenticated with check (true);
create policy "Students can view own registrations" on public.registrations for select to authenticated using (auth.uid() = user_id or lower(email) = lower(auth.jwt() ->> 'email') or private.is_admin());
create policy "Admins can manage registrations" on public.registrations for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Published announcements are readable" on public.announcements for select to authenticated using (is_published or private.is_admin());
create policy "Admins manage announcements" on public.announcements for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Published resources are readable" on public.resources for select to authenticated using (is_published or private.is_admin());
create policy "Admins manage resources" on public.resources for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Public testimonials are readable" on public.testimonials for select to anon, authenticated using (is_published);
create policy "Admins manage testimonials" on public.testimonials for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Active schedules are readable" on public.schedules for select to anon, authenticated using (is_active or private.is_admin());
create policy "Admins manage schedules" on public.schedules for all to authenticated using (private.is_admin()) with check (private.is_admin());

create policy "Anyone can send contact message" on public.contact_messages for insert to anon, authenticated with check (true);
create policy "Admins can view contact messages" on public.contact_messages for select to authenticated using (private.is_admin());

insert into storage.buckets (id, name, public)
values ('resources', 'resources', true), ('result-gallery', 'result-gallery', true)
on conflict (id) do nothing;

create policy "Public can read resource files" on storage.objects for select to anon, authenticated using (bucket_id in ('resources', 'result-gallery'));
create policy "Admins can upload resource files" on storage.objects for insert to authenticated with check (bucket_id in ('resources', 'result-gallery') and private.is_admin());
create policy "Admins can update resource files" on storage.objects for update to authenticated using (bucket_id in ('resources', 'result-gallery') and private.is_admin()) with check (bucket_id in ('resources', 'result-gallery') and private.is_admin());
create policy "Admins can delete resource files" on storage.objects for delete to authenticated using (bucket_id in ('resources', 'result-gallery') and private.is_admin());

grant usage on schema public to anon, authenticated;
grant select, insert on public.registrations to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
grant select on public.testimonials, public.schedules to anon, authenticated;
grant select, update on public.users, public.students to authenticated;
grant select on public.announcements, public.resources to authenticated;
grant all on public.registrations, public.announcements, public.resources, public.testimonials, public.schedules, public.contact_messages, public.students to authenticated;
revoke all on function private.is_admin() from public;
grant usage on schema private to anon, authenticated;
grant execute on function private.is_admin() to anon, authenticated;
