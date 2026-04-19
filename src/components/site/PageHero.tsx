import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 -z-10 grid-noise opacity-[0.07]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[image:var(--gradient-radial-gold)]" />
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
