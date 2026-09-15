import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { CtaButton } from "@/components/site/cta";
import { PageHero } from "@/components/site/page-hero";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
import { submitEnquiry } from "@/lib/enquiry.functions";
import {
  company,
  defaultWhatsappMessage,
  projectStages,
  quoteServiceOptions,
  whatsappLink,
} from "@/lib/company";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Turitrend Construction Limited" },
      {
        name: "description",
        content:
          "Tell Turitrend Construction about your project — building, renovations, fencing, biodigesters, road, electrical or water works — and receive a considered response.",
      },
      {
        property: "og:title",
        content: "Request a Quote | Turitrend Construction Limited",
      },
      {
        property: "og:description",
        content: "A short guided enquiry that helps us understand your project before we respond.",
      },
    ],
  }),
  component: QuotePage,
});

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ink placeholder:text-muted-foreground/60";

const steps = ["Service", "Location", "Details", "Stage", "Contact", "Review"] as const;

type FormState = {
  service: string;
  location: string;
  details: string;
  stage: string;
  name: string;
  phone: string;
  email: string;
};

const initialState: FormState = {
  service: "",
  location: "",
  details: "",
  stage: "",
  name: "",
  phone: "",
  email: "",
};

function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const canContinue = useMemo(() => {
    switch (step) {
      case 0:
        return form.service !== "";

      case 1:
        return form.location.trim().length > 1;

      case 2:
        return form.details.trim().length > 10;

      case 3:
        return form.stage !== "";

      case 4:
        return form.name.trim().length > 1 && form.phone.trim().length > 6;

      default:
        return true;
    }
  }, [step, form]);

  const summary = useMemo(
    () =>
      [
        `Service: ${form.service}`,
        `Location: ${form.location}`,
        `Stage: ${form.stage}`,
        "",
        form.details,
        "",
        `— ${form.name}`,
        form.phone,
        form.email,
      ]
        .filter(Boolean)
        .join("\n"),
    [form],
  );

  const next = () => {
    track("quote_step_completed", {
      step: steps[step],
    });

    if (step === 0) {
      track("quote_started", {
        service: form.service,
      });
    }

    setError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const back = () => {
    if (sending) return;

    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  async function onSubmit() {
    if (sending) return;

    setSending(true);
    setError("");

    try {
      await submitEnquiry({
        data: {
          type: "quote",
          service: form.service,
          location: form.location,
          details: form.details,
          stage: form.stage,
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
      });

      track("quote_submitted", {
        service: form.service,
        location: form.location,
        stage: form.stage,
      });

      setSubmitted(true);
    } catch (submissionError) {
      console.error("Quote form submission failed:", submissionError);

      setError(
        "We couldn't send your quote request right now. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about your project."
        intro="Six short steps. The more specific you are, the more useful our first response will be."
      />

      <section className="container-x section-y">
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <div className="border border-line bg-surface p-8 md:p-12">
              <p className="label-tech text-accent">Enquiry sent</p>

              <h2 className="display-3 mt-4">Thank you, {form.name.split(" ")[0]}.</h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your quote request has been sent successfully to the Turitrend team. We have the
                project details below and will review them before getting back to you.
              </p>

              <pre className="mt-6 overflow-x-auto border border-line bg-background p-5 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                {summary}
              </pre>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    `Hello Turitrend, I have just submitted a quote request through your website.\n\n${summary}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track("whatsapp_click", {
                      context: "quote_confirmation",
                    })
                  }
                  className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xs bg-accent px-6 py-3 text-sm font-medium tracking-tight text-accent-foreground transition-all hover:brightness-108"
                >
                  Follow up on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Stepper */}
              <div className="grid grid-cols-6 gap-px border border-line bg-line">
                {steps.map((label, i) => (
                  <div
                    key={label}
                    className={cn(
                      "bg-background px-2 py-3 text-center text-[0.65rem] font-medium tracking-wider uppercase",
                      i === step && "bg-ink text-ink-foreground",
                      i < step && "bg-surface text-muted-foreground",
                    )}
                  >
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border border-line bg-card p-6 md:p-10">
                {step === 0 && (
                  <fieldset>
                    <legend className="text-xl font-semibold tracking-tight">
                      Which service does your project fall under?
                    </legend>

                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {quoteServiceOptions.map((option) => (
                        <label
                          key={option}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 border border-line px-4 py-3 text-sm transition-colors hover:border-ink",
                            form.service === option && "border-ink bg-ink text-ink-foreground",
                          )}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            checked={form.service === option}
                            onChange={() => set("service", option)}
                            className="sr-only"
                          />

                          {form.service === option && (
                            <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                          )}

                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <div>
                    <label htmlFor="location" className="text-xl font-semibold tracking-tight">
                      Where is the project located?
                    </label>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Town, county, or the nearest landmark is enough at this stage.
                    </p>

                    <input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(event) => set("location", event.target.value)}
                      placeholder="e.g. Ruiru, Kiambu County"
                      className={cn(fieldClass, "mt-5")}
                      autoFocus
                      disabled={sending}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label htmlFor="details" className="text-xl font-semibold tracking-tight">
                      Describe the work you have in mind.
                    </label>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Size, current condition, what you want to end up with. If you have drawings,
                      photos or a bill of quantities, mention it here — you can share files with us
                      on WhatsApp or email after submitting.
                    </p>

                    <textarea
                      id="details"
                      rows={6}
                      value={form.details}
                      onChange={(event) => set("details", event.target.value)}
                      placeholder="e.g. A three-bedroom house on a 40×80 plot, foundation already cast…"
                      className={cn(fieldClass, "mt-5 resize-y")}
                      autoFocus
                      disabled={sending}
                    />
                  </div>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="text-xl font-semibold tracking-tight">
                      What stage is the project at?
                    </legend>

                    <div className="mt-6 grid gap-2">
                      {projectStages.map((stageOption) => (
                        <label
                          key={stageOption}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 border border-line px-4 py-3 text-sm transition-colors hover:border-ink",
                            form.stage === stageOption && "border-ink bg-ink text-ink-foreground",
                          )}
                        >
                          <input
                            type="radio"
                            name="stage"
                            value={stageOption}
                            checked={form.stage === stageOption}
                            onChange={() => set("stage", stageOption)}
                            className="sr-only"
                          />

                          {form.stage === stageOption && (
                            <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                          )}

                          {stageOption}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 4 && (
                  <div>
                    <p className="text-xl font-semibold tracking-tight">How do we reach you?</p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Please provide your phone or WhatsApp number. You can also add an email
                      address.
                    </p>

                    <div className="mt-5 grid gap-4">
                      <div>
                        <label htmlFor="name" className="label-tech mb-2 block">
                          Full name
                        </label>

                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) => set("name", event.target.value)}
                          className={fieldClass}
                          autoFocus
                          disabled={sending}
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="label-tech mb-2 block">
                            Phone / WhatsApp
                          </label>

                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(event) => set("phone", event.target.value)}
                            placeholder="07XX XXX XXX"
                            className={fieldClass}
                            disabled={sending}
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="label-tech mb-2 block">
                            Email
                          </label>

                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(event) => set("email", event.target.value)}
                            placeholder="you@example.com"
                            className={fieldClass}
                            disabled={sending}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <p className="text-xl font-semibold tracking-tight">Review your enquiry.</p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Check the summary below before sending it to the Turitrend team.
                    </p>

                    <pre className="mt-5 overflow-x-auto border border-line bg-surface p-5 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                      {summary}
                    </pre>

                    {error && (
                      <div
                        role="alert"
                        className="mt-5 border border-destructive/30 bg-destructive/5 p-4 text-sm leading-relaxed text-destructive"
                      >
                        {error}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      disabled={sending}
                      className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < steps.length - 1 ? (
                    <CtaButton
                      variant="ink"
                      size="md"
                      disabled={!canContinue || sending}
                      onClick={next}
                    >
                      Continue
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </CtaButton>
                  ) : (
                    <CtaButton variant="accent" size="md" disabled={sending} onClick={onSubmit}>
                      {sending ? "Sending request..." : "Send quote request"}

                      {!sending && <ArrowRight className="size-4" aria-hidden="true" />}
                    </CtaButton>
                  )}
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Prefer to talk it through first?{" "}
                <WhatsAppCta
                  message={defaultWhatsappMessage}
                  label="Message us on WhatsApp"
                  variant="quiet"
                  size="sm"
                  context="quote_page"
                />{" "}
                or call{" "}
                <a
                  href={company.phoneHref}
                  onClick={() =>
                    track("phone_click", {
                      context: "quote_page",
                    })
                  }
                  className="underline underline-offset-4 hover:text-accent"
                >
                  {company.phone}
                </a>
                .
              </p>

              <p className="mt-2 text-center text-xs text-muted-foreground">
                Looking for general contact details instead?{" "}
                <Link to="/contact" className="underline underline-offset-4 hover:text-accent">
                  Visit the contact page
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
