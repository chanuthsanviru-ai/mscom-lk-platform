create index if not exists registrations_user_id_idx on public.registrations (user_id);
create index if not exists announcements_created_by_idx on public.announcements (created_by);
create index if not exists resources_created_by_idx on public.resources (created_by);

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users
    where id = (select auth.uid())
      and role = 'admin'
  );
$$;

drop policy if exists "Users can view own profile" on public.users;
create policy "Users can view own profile"
on public.users for select to authenticated
using ((select auth.uid()) = id or private.is_admin());

drop policy if exists "Students can view own student row" on public.students;
drop policy if exists "Students can update own student row" on public.students;
drop policy if exists "Admins can manage students" on public.students;
create policy "Students or admins can view student rows"
on public.students for select to authenticated
using ((select auth.uid()) = user_id or private.is_admin());
create policy "Students or admins can update student rows"
on public.students for update to authenticated
using ((select auth.uid()) = user_id or private.is_admin())
with check ((select auth.uid()) = user_id or private.is_admin());
create policy "Admins can insert students"
on public.students for insert to authenticated
with check (private.is_admin());
create policy "Admins can delete students"
on public.students for delete to authenticated
using (private.is_admin());

drop policy if exists "Anyone can register" on public.registrations;
drop policy if exists "Students can view own registrations" on public.registrations;
drop policy if exists "Admins can manage registrations" on public.registrations;
create policy "Valid public registrations can be submitted"
on public.registrations for insert to anon, authenticated
with check (
  char_length(trim(full_name)) between 2 and 120
  and char_length(trim(school)) between 2 and 160
  and char_length(trim(district)) between 2 and 80
  and char_length(trim(phone)) between 7 and 20
  and char_length(trim(parent_phone)) between 7 and 20
  and position('@' in email) > 1
  and char_length(stream) between 2 and 80
  and class_type in ('Online', 'Physical', 'Hybrid')
  and char_length(coalesce(notes, '')) <= 2000
  and status = 'new'
  and (user_id is null or user_id = (select auth.uid()))
);
create policy "Students or admins can view registrations"
on public.registrations for select to authenticated
using (
  (select auth.uid()) = user_id
  or lower(email) = lower((select auth.jwt() ->> 'email'))
  or private.is_admin()
);
create policy "Admins can update registrations"
on public.registrations for update to authenticated
using (private.is_admin())
with check (private.is_admin());
create policy "Admins can delete registrations"
on public.registrations for delete to authenticated
using (private.is_admin());

drop policy if exists "Admins manage announcements" on public.announcements;
create policy "Admins can insert announcements"
on public.announcements for insert to authenticated
with check (private.is_admin());
create policy "Admins can update announcements"
on public.announcements for update to authenticated
using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete announcements"
on public.announcements for delete to authenticated
using (private.is_admin());

drop policy if exists "Admins manage resources" on public.resources;
create policy "Admins can insert resources"
on public.resources for insert to authenticated
with check (private.is_admin());
create policy "Admins can update resources"
on public.resources for update to authenticated
using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete resources"
on public.resources for delete to authenticated
using (private.is_admin());

drop policy if exists "Public testimonials are readable" on public.testimonials;
drop policy if exists "Admins manage testimonials" on public.testimonials;
create policy "Published testimonials or admins can read"
on public.testimonials for select to anon, authenticated
using (is_published or private.is_admin());
create policy "Admins can insert testimonials"
on public.testimonials for insert to authenticated
with check (private.is_admin());
create policy "Admins can update testimonials"
on public.testimonials for update to authenticated
using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete testimonials"
on public.testimonials for delete to authenticated
using (private.is_admin());

drop policy if exists "Admins manage schedules" on public.schedules;
create policy "Admins can insert schedules"
on public.schedules for insert to authenticated
with check (private.is_admin());
create policy "Admins can update schedules"
on public.schedules for update to authenticated
using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete schedules"
on public.schedules for delete to authenticated
using (private.is_admin());

drop policy if exists "Anyone can send contact message" on public.contact_messages;
create policy "Valid contact messages can be submitted"
on public.contact_messages for insert to anon, authenticated
with check (
  char_length(trim(name)) between 2 and 120
  and char_length(trim(phone)) between 7 and 20
  and char_length(trim(message)) between 5 and 3000
  and (email is null or email = '' or position('@' in email) > 1)
);
