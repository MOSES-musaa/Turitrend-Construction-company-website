import { Link } from "@tanstack/react-router";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { company, whatsappLink, defaultWhatsappMessage } from "@/lib/company";
import { track } from "@/lib/analytics";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-ink-line bg-ink text-ink-foreground md:hidden">
      <a
        href={company.phoneHref}
        onClick={() => track("phone_click", { context: "mobile_bar" })}
        className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-ink-line text-[0.7rem] font-medium"
      >
        <Phone className="size-4.5" aria-hidden="true" />
        Call
      </a>
      <a
        href={whatsappLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { context: "mobile_bar" })}
        className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-ink-line text-[0.7rem] font-medium"
      >
        <MessageCircle className="size-4.5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        to="/quote"
        onClick={() => track("cta_click", { context: "mobile_bar", cta: "quote" })}
        className="flex min-h-14 flex-col items-center justify-center gap-1 bg-accent text-[0.7rem] font-semibold text-accent-foreground"
      >
        <FileText className="size-4.5" aria-hidden="true" />
        Get a Quote
      </Link>
    </div>
  );
}
