import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, SubmitEvent } from "react";
import { CtaButton, CtaLink } from "@/components/site/cta";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { company } from "@/lib/company";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Turitrend Construction Limited | Nairobi, Kenya",
      },
      {
        name: "description",
        content: `Contact Turitrend Construction Limited — call ${company.phone}, message on WhatsApp, or email ${company.email}. Based in Nairobi, Kenya.`,
      },
      {
        property: "og:title",
        content: "Contact Turitrend Construction Limited",
      },
      {
        property: "og:description",
        content: "Phone, WhatsApp and email contact details for Turitrend Construction Limited.",
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "min-h-11 w-full border border-input bg-card px-3.5 py-3 text-sm outline-none transition-colors focus:border-ink";

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const data = new FormData(event.currentTarget);

    try {
      await submitEnquiry({
        data: {
          type: "contact",
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        },
      });

      track("contact_submitted", {
        context: "contact_page",
      });

      setSent(true);
    } catch (submissionError) {
      console.error("Contact form submission failed:", submissionError);

      setError(
        "We couldn't send your message right now. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Turitrend Construction Limited."
        intro="Call, message on WhatsApp or send the details of your project. We respond during working hours."
      />

      <section className="container-x section-y grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="Details" title={company.name} />

          <address className="mt-8 not-italic">
            <ul className="space-y-6">
              <li>
                <a
                  href={company.phoneHref}
                  onClick={() =>
                    track("phone_click", {
                      context: "contact_page",
                    })
                  }
                  className="group flex items-start gap-4"
                >
                  <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />

                  <span>
                    <span className="label-tech block text-muted-foreground">Phone</span>

                    <span className="text-lg font-semibold group-hover:text-accent">
                      {company.phone}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={company.emailHref}
                  onClick={() =>
                    track("email_click", {
                      context: "contact_page",
                    })
                  }
                  className="group flex items-start gap-4"
                >
                  <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />

                  <span>
                    <span className="label-tech block text-muted-foreground">Email</span>

                    <span className="text-lg font-semibold break-all group-hover:text-accent">
                      {company.email}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />

                <span>
                  <span className="label-tech block text-muted-foreground">Location</span>

                  <span className="text-lg font-semibold">{company.location}</span>

                  <span className="mt-1 block text-sm text-muted-foreground">{company.postal}</span>
                </span>
              </li>
            </ul>
          </address>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta
              message="Hello Turitrend, I would like to discuss a construction project."
              variant="ink"
              context="contact_page"
            />

            <CtaLink to="/quote" variant="outline">
              Request a Quote
            </CtaLink>
          </div>
        </div>

        <Reveal className="md:col-span-7">
          <SectionHeading eyebrow="Message" title="Send us a message" />

          {sent ? (
            <div className="mt-8 border border-line bg-card p-8 md:p-10">
              <p className="label-tech text-accent">Message sent</p>

              <h3 className="display-3 mt-4">Thank you, we have received your message.</h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your enquiry has been sent to the Turitrend team. We will review the details and get
                back to you during working hours.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppCta
                  message="Hello Turitrend, I just sent a message through your website and would like to follow up."
                  variant="ink"
                  context="contact_confirmation"
                />

                <CtaButton
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setError("");
                  }}
                >
                  Write another message
                </CtaButton>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-tech text-muted-foreground">
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    autoComplete="name"
                    className={`mt-2 ${fieldClass}`}
                    disabled={sending}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="label-tech text-muted-foreground">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    minLength={7}
                    autoComplete="tel"
                    className={`mt-2 ${fieldClass}`}
                    disabled={sending}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="label-tech text-muted-foreground">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`mt-2 ${fieldClass}`}
                  disabled={sending}
                />
              </div>

              <div>
                <label htmlFor="message" className="label-tech text-muted-foreground">
                  About the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  placeholder="Location, what you want done, and where the project currently stands."
                  className={`mt-2 ${fieldClass}`}
                  disabled={sending}
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="border border-destructive/30 bg-destructive/5 p-4 text-sm leading-relaxed text-destructive"
                >
                  {error}
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                Your message is sent securely through the website. You do not need an email
                application installed on your device.
              </p>

              <CtaButton
                type="submit"
                variant="ink"
                size="lg"
                disabled={sending}
                className="justify-self-start"
              >
                <Send className="size-4" aria-hidden="true" />

                {sending ? "Sending message..." : "Send message"}
              </CtaButton>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
