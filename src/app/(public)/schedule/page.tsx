import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { schedules } from "@/lib/data";
import { ScrollRevealWrapper } from "@/components/ui/scroll-reveal-wrapper";

export const metadata: Metadata = { title: "Class Schedule" };

export default function SchedulePage() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Class Schedule"
        title="Online and physical A/L , O/L Commerce classes"
        description="Choose classes with pricing and mode clearly shown."
      />

      <div className="mx-auto mb-8 grid max-w-7xl gap-5 px-2 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollRevealWrapper>
          <div className="rounded-3xl bg-emerald-950 p-8 text-white shadow-glow">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-100">
              Class types
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Structured batches with clear times, modes, and fees.
            </h2>
            <p className="mt-5 text-white/70">
              The schedule is designed for students who need a clear weekly plan and an easy way to choose the right batch.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-gold-100">Theory</p>
                <p className="mt-2 text-sm text-white/65">Build foundations with step-by-step lessons.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-gold-100">Revision</p>
                <p className="mt-2 text-sm text-white/65">Sharp last-minute practice and exam focus.</p>
              </div>
            </div>
          </div>
        </ScrollRevealWrapper>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-2">
        {schedules.map((item) => (
          <ScrollRevealWrapper key={`${item.subject}-${item.batch}`}>
            <Card
              className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-6 sm:items-center transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="col-span-2 sm:col-span-2">
                <p className="text-xs font-bold uppercase text-gold-500">{item.mode}</p>
                <h2 className="text-lg sm:text-xl font-bold">{item.subject}</h2>
                <p className="text-xs sm:text-sm text-emerald-950/60 dark:text-white/60">{item.batch}</p>
              </div>

              <p className="text-xs sm:text-base">{item.day}</p>
              <p className="text-xs sm:text-base">{item.time}</p>
              <p className="font-bold text-xs sm:text-base">{item.fee}</p>

              <ButtonLink
                 href={`/register?subject=${encodeURIComponent(item.subject)}&batch=${encodeURIComponent(item.batch)}`}
                 className="col-span-2 sm:col-span-1 sm:w-auto text-xs sm:text-base py-2 sm:py-auto"
              >
                  Join
             </ButtonLink>
            </Card>
          </ScrollRevealWrapper>
        ))}
      </div>
    </section>
  );
}
