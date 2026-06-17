import { ArrowRight, MessageCircle, PlayCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { stats } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-[-160px] top-[20%] h-[320px] w-[320px] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex rounded-full border border-gold-400/35 bg-gold-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-500 dark:bg-gold-400/10">
            A/L Business Studies and O/L Commerce Sri Lanka
          </p>

          <h1 className="font-[var(--font-display)] text-4xl font-black leading-tight text-emerald-950 dark:text-white md:text-6xl animate-typing">
            MScom.one
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-950/70 dark:text-white/70">
            A/L Commerce and Business Studies classes designed for Sri Lankan students who want structure, confidence, and exam-ready results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/register" className="bg-gold-400 text-emerald-950 hover:bg-gold-300">
              Register for Classes <ArrowRight className="ml-2" size={18} />
            </ButtonLink>

            <a
              href={whatsappLink()}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-700/20 bg-white/80 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-gold-50 dark:bg-white/10 dark:text-white"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="animate-scale-in rounded-lg border border-emerald-900/10 bg-white/70 p-4 transition-transform hover:scale-105 dark:border-white/10 dark:bg-white/10"
              >
                <p className="text-2xl font-black text-emerald-800 dark:text-gold-100">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-emerald-950/60 dark:text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass relative animate-fade-in rounded-2xl p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl text-white">
            <Image
              src="/images/image1.png"
              alt="MScom.one teacher portrait"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />

            
          </div>
        </div>
      </div>
    </section>
  );
}
