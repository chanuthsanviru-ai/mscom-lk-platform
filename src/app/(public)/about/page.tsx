import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollRevealWrapper } from "@/components/ui/scroll-reveal-wrapper";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const items = [
    "B.Com / Business Management academic background",
    "12+ years A/L Commerce teaching experience",
    "Specialized in Business Studies answer structure"
  ];

  return (
    <section className="section">
      <SectionHeading
        eyebrow="About the Teacher"
        title="Disciplined teaching for ambitious Sri Lankan students"
        description="A clear teaching philosophy: simplify concepts, train answer structure, repeat past-paper logic, and keep every student accountable."
      />

      <div className="mx-auto grid max-w-6xl gap-5 px-2 lg:grid-cols-[1fr_1.1fr]">
        <ScrollRevealWrapper>
          <div className="rounded-3xl bg-emerald-950 p-8 text-white shadow-glow">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-100">
              Biography
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Commerce education with care, standards, and measurable progress.
            </h2>

            <p className="mt-5 text-white/70">
              Led by Mr. Mihiraj Shanthapriya, MScom.lk brings classroom discipline into a modern platform so online and physical students receive the same high-quality guidance.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-gold-100">Teaching style</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Focus on clear theory notes, answer structure, repeated revision, and practical feedback that helps students improve steadily.
              </p>
            </div>
          </div>
        </ScrollRevealWrapper>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <ScrollRevealWrapper key={item}>
              <Card className="transition-transform hover:scale-105 hover:shadow-lg">
                <p className="text-sm font-semibold text-gold-500">Highlight</p>
                <p className="mt-3 text-base font-semibold">{item}</p>
              </Card>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
