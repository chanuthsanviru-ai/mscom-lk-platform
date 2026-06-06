import { ArrowRight, MessageCircle } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { faqs, features, testimonials, upcomingClasses } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <SectionHeading eyebrow="Why MScom.lk" title="A sharper class experience for Commerce students" description="Built around Sri Lankan A/L expectations, with premium class delivery and practical student support." />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((feature) => <Card key={feature.title}><feature.icon className="text-gold-500" /><h3 className="mt-4 text-xl font-bold">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-emerald-950/60 dark:text-white/60">{feature.description}</p></Card>)}
        </div>
      </section>
      <section className="section bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-gold-100">Teacher Introduction</p><h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold">Guidance that turns theory into exam performance.</h2><p className="mt-5 text-white/70">MScom.lk is led by an experienced Commerce educator focused on structured notes, clear examples, marking discipline, and continuous revision.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{upcomingClasses.map((item) => <Card className="bg-white/10 text-white" key={item.title}><p className="text-sm text-gold-100">{item.type}</p><h3 className="mt-3 font-bold">{item.title}</h3><p className="mt-3 text-sm text-white/60">{item.time}</p><p className="mt-4 font-semibold">{item.price}</p></Card>)}</div>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Student Voices" title="Results built through consistency" />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">{testimonials.map((item) => <Card key={item.name}><p className="text-sm leading-6 text-emerald-950/70 dark:text-white/70">&ldquo;{item.quote}&rdquo;</p><p className="mt-5 font-bold">{item.name}</p><p className="text-xs text-gold-500">{item.meta}</p></Card>)}</div>
      </section>
      <section className="section">
        <div className="mx-auto max-w-4xl rounded-lg bg-emerald-800 p-8 text-center text-white shadow-glow">
          <h2 className="font-[var(--font-display)] text-3xl font-bold">Ready to join the next batch?</h2>
          <p className="mt-3 text-white/70">Register online or message the class hotline for guidance.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/register" className="bg-gold-400 text-emerald-950 hover:bg-gold-100">Register Now <ArrowRight className="ml-2" size={18} /></ButtonLink>
            <a href={whatsappLink()} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold"><MessageCircle className="mr-2" size={18} /> WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <SectionHeading eyebrow="FAQ" title="Questions students ask first" />
        <div className="mx-auto grid max-w-4xl gap-3">{faqs.map((faq) => <Card key={faq.q}><h3 className="font-bold">{faq.q}</h3><p className="mt-2 text-sm text-emerald-950/60 dark:text-white/60">{faq.a}</p></Card>)}</div>
      </section>
    </>
  );
}
