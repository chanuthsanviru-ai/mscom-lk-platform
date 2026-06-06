import Link from "next/link";
import { Bell, CalendarDays, Download, GraduationCap, Users } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { Card } from "@/components/ui/card";

export default async function AdminPage() {
  const { supabase } = await requireAdmin();
  const [registrations, announcements, resources, schedules] = await Promise.all([
    supabase.from("registrations").select("id", { count: "exact", head: true }),
    supabase.from("announcements").select("id", { count: "exact", head: true }),
    supabase.from("resources").select("id", { count: "exact", head: true }),
    supabase.from("schedules").select("id", { count: "exact", head: true })
  ]);
  const metrics = [
    { label: "Registrations", value: registrations.count ?? 0, icon: Users, href: "/admin/registrations" },
    { label: "Announcements", value: announcements.count ?? 0, icon: Bell, href: "/admin/announcements" },
    { label: "Resources", value: resources.count ?? 0, icon: Download, href: "/admin/resources" },
    { label: "Schedules", value: schedules.count ?? 0, icon: CalendarDays, href: "/admin/schedules" }
  ];
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase text-gold-500">Admin</p><h1 className="text-3xl font-black">MScom.lk Control Center</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((item) => <Link key={item.label} href={item.href}><Card><item.icon className="text-gold-500" /><p className="mt-4 text-3xl font-black">{item.value}</p><p className="text-sm">{item.label}</p></Card></Link>)}</div>
        <Card className="mt-8"><GraduationCap className="text-gold-500" /><h2 className="mt-3 font-bold">Analytics Overview</h2><p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">Track lead volume, published content, schedule activity, and resource usage from one dashboard.</p></Card>
      </div>
    </section>
  );
}
