import { cva, type VariantProps } from "class-variance-authority";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-200 min-h-11 disabled:pointer-events-none disabled:opacity-50 rounded-xs",
  {
    variants: {
      variant: {
        ink: "bg-ink text-ink-foreground hover:bg-primary",
        accent: "bg-accent text-accent-foreground hover:brightness-108",
        outline:
          "border border-ink/25 text-foreground hover:border-ink hover:bg-ink hover:text-ink-foreground",
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

export type CtaVariants = VariantProps<typeof ctaVariants>;
