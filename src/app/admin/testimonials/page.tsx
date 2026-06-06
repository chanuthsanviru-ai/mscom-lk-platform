import { createTestimonial } from "../actions";
import { requireAdmin } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

export default async function AdminTestimonialsPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
  return (
    <section className="section"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]"><Card><h1 className="text-2xl font-black">Add Testimonial</h1><form action={createTestimonial} className="mt-5 grid gap-3"><Input name="name" placeholder="Student name" required /><Input name="meta" placeholder="Rank / result" required /><Textarea name="quote" placeholder="Testimonial" required /><Button>Save Testimonial</Button></form></Card><Card><h2 className="font-bold">Testimonials</h2>{data?.map((item) => <div className="border-t py-3" key={item.id}><p className="font-semibold">{item.name}</p><p className="text-sm text-gold-500">{item.meta}</p><p className="text-sm">&ldquo;{item.quote}&rdquo;</p></div>)}</Card></div></section>
  );
}
