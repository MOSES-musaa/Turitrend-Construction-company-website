import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-200 min-h-11 disabled:pointer-events-none disabled:opacity-50 rounded-xs",
  {
    variants: {
      variant: {
        ink: "bg-ink text-ink-foreground hover:bg-primary",
        accent: "bg-accent text-accent-foreground hover:brightness-108",
        outline: "border border-ink/25 text-foreground hover:border-ink hover:bg-ink hover:text-ink-foreground",
        outlineLight:
          "border border-ink-foreground/35 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
        quiet: "text-foreground underline-offset-4 hover:text-accent hover:underline px-0",
      },
      size: {
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        sm: "px-4 py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "ink", size: "md" },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> & {
  className?: string | undefined;
  children: ReactNode;
};

export function CtaLink({
  variant,
  size,
  className,
  children,
  ...props
}: CtaProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  variant,
  size,
  className,
  children,
  ...props
}: CtaProps & ComponentProps<"a">) {
  return (
    <a className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant,
  size,
  className,
  children,
  ...props
}: CtaProps & ComponentProps<"button">) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
