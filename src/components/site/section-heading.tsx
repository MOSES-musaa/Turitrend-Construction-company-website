import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "split";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const muted = tone === "dark" ? "text-ink-muted" : "text-muted-foreground";
  const line = tone === "dark" ? "border-ink-line" : "border-line";

  return (
    <div className={cn("border-t pt-6", line, className)}>
      <div
        className={cn(
          "gap-8 md:gap-16",
          align === "split" ? "grid md:grid-cols-12" : "flex flex-col",
        )}
      >
        <div className={align === "split" ? "md:col-span-7" : undefined}>
          {eyebrow && (
            <p className={cn("label-tech mb-5 flex items-center gap-3", muted)}>
              <span>{eyebrow}</span>
            </p>
          )}
          <Tag className="display-2 max-w-3xl">{title}</Tag>
        </div>
        {intro && (
          <div
            className={cn(
              align === "split" ? "md:col-span-5 md:pt-14" : "mt-6 max-w-2xl",
              "text-base leading-relaxed md:text-lg",
              muted,
            )}
          >
            {intro}
          </div>
        )}
      </div>
    </div>
  );
}
