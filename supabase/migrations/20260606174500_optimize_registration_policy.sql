drop policy if exists "Students or admins can view registrations" on public.registrations;

create policy "Students or admins can view registrations"
on public.registrations for select to authenticated
using (
  (select auth.uid()) = user_id
  or lower(email) = lower((select auth.jwt()) ->> 'email')
  or private.is_admin()
);
