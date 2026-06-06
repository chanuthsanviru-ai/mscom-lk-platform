import { createSchedule } from "../actions";
import { requireAdmin } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";

export default async function AdminSchedulesPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("schedules").select("*").order("class_date", { ascending: true });
  return (
    <section className="section"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Card><h1 className="text-2xl font-black">Manage Schedule</h1><form action={createSchedule} className="mt-5 grid gap-3"><Input name="title" placeholder="Class title" required /><Input name="subject" placeholder="Subject" required /><Select name="mode"><option>Online</option><option>Physical</option><option>Hybrid</option></Select><Input name="class_date" type="datetime-local" required /><Input name="fee" placeholder="Fee" required /><label className="flex gap-2 text-sm"><input name="is_active" type="checkbox" defaultChecked /> Active</label><Button>Save Class</Button></form></Card><Card><h2 className="font-bold">Schedule</h2>{data?.map((item) => <div className="grid gap-2 border-t py-3 md:grid-cols-4" key={item.id}><p className="font-semibold">{item.title}</p><p>{item.subject}</p><p>{item.mode}</p><p>{item.fee}</p></div>)}</Card></div></section>
  );
}
