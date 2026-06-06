export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold-500">{eyebrow}</p> : null}
      <h2 className="font-[var(--font-display)] text-3xl font-bold text-emerald-950 dark:text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-balance text-base text-emerald-950/70 dark:text-white/70">{description}</p> : null}
    </div>
  );
}
