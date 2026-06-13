import { ArrowRight, MessageCircle } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { faqs, features, upcomingClasses } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <SectionHeading
          eyebrow="Why MScom.one"
          title="A sharper class experience for Commerce students"
          description="Built around Sri Lankan A/L expectations, with premium class delivery and practical student support."
        />

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="animate-scale-in transition-transform hover:scale-105 hover:shadow-lg">
              <feature.icon className="text-gold-500" />
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-950/60 dark:text-white/60">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-100">
              Teacher Introduction
            </p>

            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight">
              Guidance that turns theory into exam performance.
            </h2>

            <p className="mt-5 max-w-2xl text-white/70">
              MScom.lk is led by an experienced Commerce educator focused on structured notes, clear examples, marking discipline, and continuous revision.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-gold-100">Theory</p>
                <p className="mt-2 text-sm text-white/65">Step-by-step explanations that are easy to revise.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-gold-100">Revision</p>
                <p className="mt-2 text-sm text-white/65">Focused paper discussions and last-minute recall support.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-gold-100">Feedback</p>
                <p className="mt-2 text-sm text-white/65">Clear marking discipline and progress tracking.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {upcomingClasses.map((item) => (
              <Card key={item.title} className="animate-scale-in border-white/10 bg-white/10 text-white transition-transform hover:scale-105 hover:shadow-lg">
                <p className="text-sm font-semibold text-gold-100">{item.type}</p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60">{item.time}</p>
                <p className="mt-4 text-base font-semibold">{item.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-800 p-8 text-center text-white shadow-glow md:p-10">
          <h2 className="font-[var(--font-display)] text-3xl font-bold">
            Ready to join the next batch?
          </h2>
          <p className="mt-3 text-white/70">
            Register online or message the class hotline for guidance.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/register" className="bg-gold-400 text-emerald-950 hover:bg-gold-100">
              Register Now <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
            <a
              href={whatsappLink()}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="FAQ" title="Questions students ask first" />
        <div className="mx-auto grid max-w-4xl gap-3">
          {faqs.map((faq) => (
            <Card key={faq.q} className="animate-slide-up transition-all hover:shadow-lg">
              <h3 className="font-bold">{faq.q}</h3>
              <p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
