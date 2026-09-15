import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/company";
import { track } from "@/lib/analytics";
import { CtaAnchor } from "./cta";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { ctaVariants } from "@/lib/cta-variants";

export function WhatsAppCta({
  message,
  label = "Chat on WhatsApp",
  context,
  variant = "outline",
  size = "md",
  className,
}: {
  message: string;
  label?: string;
  context?: string | undefined;
  className?: string | undefined;
} & VariantProps<typeof ctaVariants>) {
  return (
    <CtaAnchor
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      onClick={() => track("whatsapp_click", { context })}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </CtaAnchor>
  );
}

export function WhatsAppFloat({ message }: { message: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { context: "floating_button" })}
      aria-label="Chat with Turitrend Construction on WhatsApp"
      className={cn(
        "fixed right-4 bottom-20 z-40 flex size-13 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-lg shadow-ink/25 transition-transform hover:scale-105 md:bottom-6 md:size-14",
      )}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
