import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const items = ["B.Com / Business Management academic background", "12+ years A/L Commerce teaching experience", "Specialized in Business Studies answer structure", "Island and district rank mentoring programs"];
  return (
    <section className="section">
      <SectionHeading eyebrow="About the Teacher" title="Disciplined teaching for ambitious Sri Lankan students" description="A clear teaching philosophy: simplify concepts, train answer structure, repeat past-paper logic, and keep every student accountable." />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-lg bg-emerald-950 p-8 text-white"><p className="text-gold-100">Biography</p><h2 className="mt-3 text-3xl font-bold">Commerce education with care, standards, and measurable progress.</h2><p className="mt-5 text-white/70">MScom.lk brings classroom discipline into a modern platform so online and physical students receive the same high-quality guidance.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{items.map((item) => <Card key={item}><p className="font-semibold">{item}</p></Card>)}</div>
      </div>
    </section>
  );
}
