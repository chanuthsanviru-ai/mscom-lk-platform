import { redirect } from "next/navigation";
import { BookOpen, Bell, CalendarDays, Download, UserRound } from "lucide-react";
import { signOut } from "@/app/auth/actions";
import { requireUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function DashboardPage() {
  const { supabase, user } = await requireUser();
  const [{ data: profile }, { data: registrations }, { data: announcements }, { data: resources }, { data: schedules }] = await Promise.all([
    supabase.from("students").select("*").eq("user_id", user.id).maybeSingle(),
    supabase.from("registrations").select("*").eq("email", user.email).order("created_at", { ascending: false }),
    supabase.from("announcements").select("*").eq("is_published", true).order("created_at", { ascending: false }).limit(5),
    supabase.from("resources").select("*").eq("is_published", true).order("created_at", { ascending: false }).limit(6),
    supabase.from("schedules").select("*").eq("is_active", true).order("class_date", { ascending: true }).limit(5)
  ]);

  if (!user.email) redirect("/auth/login");

  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div><p className="text-sm font-bold uppercase text-gold-500">Student Dashboard</p><h1 className="text-3xl font-black">Welcome, {profile?.full_name ?? user.email}</h1></div>
          <form action={signOut}><Button variant="secondary">Logout</Button></form>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card><UserRound className="text-gold-500" /><h2 className="mt-3 font-bold">Profile</h2><p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">{user.email}</p><p className="text-sm text-emerald-950/60 dark:text-white/60">{profile?.school ?? "School details pending"}</p></Card>
          <Card><BookOpen className="text-gold-500" /><h2 className="mt-3 font-bold">Registered Classes</h2><p className="mt-2 text-3xl font-black">{registrations?.length ?? 0}</p></Card>
          <Card><CalendarDays className="text-gold-500" /><h2 className="mt-3 font-bold">Future LMS</h2><p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">Lesson recordings, quizzes, and progress tracking placeholders are ready.</p></Card>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card><h2 className="mb-4 flex items-center gap-2 font-bold"><Bell size={18} /> Announcements</h2>{announcements?.map((item) => <div className="border-t py-3" key={item.id}><p className="font-semibold">{item.title}</p><p className="text-sm text-emerald-950/60 dark:text-white/60">{item.body}</p></div>)}</Card>
          <Card><h2 className="mb-4 flex items-center gap-2 font-bold"><Download size={18} /> Resources</h2>{resources?.map((item) => <a className="block border-t py-3 font-semibold text-emerald-700 dark:text-gold-100" href={item.file_url} key={item.id}>{item.title}</a>)}</Card>
          <Card className="lg:col-span-2"><h2 className="mb-4 font-bold">Seminar Notices</h2>{schedules?.map((item) => <div className="grid gap-2 border-t py-3 md:grid-cols-4" key={item.id}><p className="font-semibold">{item.title}</p><p>{item.mode}</p><p>{item.class_date}</p><p>{item.fee}</p></div>)}</Card>
        </div>
      </div>
    </section>
  );
}
