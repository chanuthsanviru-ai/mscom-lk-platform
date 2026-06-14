export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl px-2 text-center">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-500">{eyebrow}</p> : null}
      <h2 className="font-[var(--font-display)] text-2xl font-bold leading-tight text-emerald-950 dark:text-white sm:text-3xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-balance text-sm leading-6 text-emerald-950/70 dark:text-white/70 sm:text-base">{description}</p> : null}
    </div>
  );
}
