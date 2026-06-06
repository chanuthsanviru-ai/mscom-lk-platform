import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievementCards, testimonials } from "@/lib/data";

export const metadata: Metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Results" title="Student achievements and exam confidence" description="A results-focused culture with district ranks, A/B pass statistics, and student feedback." />
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{achievementCards.map((item) => <Card key={item.title}><item.icon className="text-gold-500" /><p className="mt-4 text-3xl font-black">{item.value}</p><p className="text-sm text-emerald-950/60 dark:text-white/60">{item.title}</p></Card>)}</div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">{testimonials.map((item) => <Card key={item.name}><p className="text-sm leading-6">&ldquo;{item.quote}&rdquo;</p><p className="mt-5 font-bold">{item.name}</p><p className="text-xs text-gold-500">{item.meta}</p></Card>)}</div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3">{["District Rank Gallery", "Seminar Moments", "A/B Pass Wall"].map((item) => <div key={item} className="grid aspect-[4/3] place-items-center rounded-lg bg-gradient-to-br from-emerald-950 via-emerald-800 to-gold-400 p-6 text-center text-xl font-black text-white">{item}</div>)}</div>
    </section>
  );
}
