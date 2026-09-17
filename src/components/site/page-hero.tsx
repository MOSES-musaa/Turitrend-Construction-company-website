/* eslint-disable prettier/prettier */
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";

export function PageHero({
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
      {/* Blueprint background */}
      <div
        className="grid-blueprint-dark pointer-events-none absolute inset-0 opacity-60 motion-safe:animate-[blueprint-drift_18s_linear_infinite]"
        aria-hidden="true"
      />

      {/* Architectural geometry */}
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] hidden size-136 rotate-12 border border-ink-line motion-safe:animate-[hero-orbit_24s_linear_infinite] md:block"
        aria-hidden="true"
      />

      {/* Secondary geometry */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 hidden size-64 rounded-full border border-ink-line opacity-40 motion-safe:animate-[hero-pulse_8s_ease-in-out_infinite] lg:block"
        aria-hidden="true"
      />

      {/* Accent architectural line */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-1/3 origin-left bg-accent motion-safe:animate-[hero-line_1.2s_ease-out]"
        aria-hidden="true"
      />

      <div className="container-x relative pt-14 pb-14 md:pt-20 md:pb-20">
        {/* Eyebrow */}
        <Reveal delay={0}>
          <p className="label-tech flex items-center gap-3 text-ink-muted">
            <span>{eyebrow}</span>
          </p>
        </Reveal>

        {/* Title */}
        <Reveal delay={120}>
          <h1 className="display-1 mt-6 max-w-5xl">
            {title}
          </h1>
        </Reveal>

        {/* Intro */}
        {intro && (
          <Reveal delay={240}>
            <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {intro}
            </div>
          </Reveal>
        )}

        {/* CTA / children */}
        {children && (
          <Reveal delay={360}>
            <div className="mt-10">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}