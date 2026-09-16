import { CtaLink } from "./cta";
import { WhatsAppCta } from "./whatsapp-button";

export function CtaBand({
  title = "Tell us what you are planning.",
  text = "Send us the details of your project and we will come back to you on scope, next steps and what a quotation would need.",
  whatsappMessage = "Hello Turiend, I would like to discuss a construction project.",
  context = "cta_band",
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
  context?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-x section-y grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="label-tech text-accent">Next step</p>
          <h2 className="display-2 mt-5">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <CtaLink to="/quote" variant="accent" size="lg">
            Request a Quote
          </CtaLink>
          <WhatsAppCta
            message={whatsappMessage}
            variant="outlineLight"
            size="lg"
            context={context}
          />
        </div>
      </div>
    </section>
  );
}
