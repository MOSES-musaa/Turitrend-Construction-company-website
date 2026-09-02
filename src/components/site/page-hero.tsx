import type { ReactNode } from "react";

export function PageHero({
  index,
  eyebrow,
  title,
  intro,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="grid-blueprint-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] hidden size-[34rem] rotate-12 border border-ink-line md:block"
        aria-hidden="true"
      />
      <div className="container-x relative pt-16 pb-16 md:pt-24 md:pb-24">
        <p className="label-tech flex items-center gap-3 text-ink-muted">
          {index && <span className="text-accent">{index}</span>}
          <span>{eyebrow}</span>
        </p>
        <h1 className="display-1 mt-6 max-w-5xl">{title}</h1>
        {intro && (
          <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</div>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
