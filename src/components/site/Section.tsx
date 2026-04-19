import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "center",
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      {(eyebrow || title || description) && (
        <div className={`max-w-3xl ${alignCls}`}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-pretty text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      <div className={title ? "mt-14" : ""}>{children}</div>
    </section>
  );
}
