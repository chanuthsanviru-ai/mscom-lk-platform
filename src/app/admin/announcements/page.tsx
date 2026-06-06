import { createAnnouncement } from "../actions";
import { requireAdmin } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

export default async function AdminAnnouncementsPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("announcements").select("*").order("created_at", { ascending: false });
  return (
    <section className="section"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Card><h1 className="text-2xl font-black">Create Announcement</h1><form action={createAnnouncement} className="mt-5 grid gap-3"><Input name="title" placeholder="Title" required /><Textarea name="body" placeholder="Announcement" required /><label className="flex gap-2 text-sm"><input name="is_published" type="checkbox" defaultChecked /> Published</label><Button>Publish</Button></form></Card><Card><h2 className="font-bold">Announcements</h2>{data?.map((item) => <div className="border-t py-3" key={item.id}><p className="font-semibold">{item.title}</p><p className="text-sm text-emerald-950/60 dark:text-white/60">{item.body}</p></div>)}</Card></div></section>
  );
}
