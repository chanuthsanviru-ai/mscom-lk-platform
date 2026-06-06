import { createResource } from "../actions";
import { requireAdmin } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

export default async function AdminResourcesPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("resources").select("*").order("created_at", { ascending: false });
  return (
    <section className="section"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Card><h1 className="text-2xl font-black">Upload Resource</h1><form action={createResource} className="mt-5 grid gap-3"><Input name="title" placeholder="Title" required /><Textarea name="description" placeholder="Description" /><Input name="file" type="file" /><Input name="file_url" placeholder="External file URL fallback" /><Button>Save Resource</Button></form></Card><Card><h2 className="font-bold">Resources</h2>{data?.map((item) => <a href={item.file_url} className="block border-t py-3" key={item.id}><p className="font-semibold">{item.title}</p><p className="text-sm text-emerald-950/60 dark:text-white/60">{item.description}</p></a>)}</Card></div></section>
  );
}
