import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ctaVariants } from "@/lib/cta-variants";

import { CtaVariants } from "@/lib/cta-variants";
type CtaProps = CtaVariants & {
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
