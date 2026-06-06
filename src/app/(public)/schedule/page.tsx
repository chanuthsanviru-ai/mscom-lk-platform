import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { schedules } from "@/lib/data";

export const metadata: Metadata = { title: "Class Schedule" };

export default function SchedulePage() {
  return (
    <section className="section">
      <SectionHeading eyebrow="Class Schedule" title="Online and physical A/L Commerce classes" description="Choose theory, revision, or paper classes with pricing and mode clearly shown." />
      <div className="mx-auto grid max-w-7xl gap-4">
        {schedules.map((item) => (
          <Card key={`${item.subject}-${item.batch}`} className="grid gap-4 md:grid-cols-6 md:items-center">
            <div className="md:col-span-2"><p className="text-xs font-bold uppercase text-gold-500">{item.mode}</p><h2 className="text-xl font-bold">{item.subject}</h2><p className="text-sm text-emerald-950/60 dark:text-white/60">{item.batch}</p></div>
            <p>{item.day}</p><p>{item.time}</p><p className="font-bold">{item.fee}</p><ButtonLink href="/register" className="w-full">Join</ButtonLink>
          </Card>
        ))}
      </div>
    </section>
  );
}
