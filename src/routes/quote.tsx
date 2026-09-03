import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { CtaButton } from "@/components/site/cta";
import { PageHero } from "@/components/site/page-hero";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
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
      { title: "Request a Quote | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Tell Turiend Construction about your project — building, renovations, fencing, biodigesters, road, electrical or water works — and receive a considered response.",
      },
      { property: "og:title", content: "Request a Quote | Turiend Construction Limited" },
      {
        property: "og:description",
        content:
          "A short guided enquiry that helps us understand your project before we respond.",
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

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

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
        return (
          form.name.trim().length > 1 &&
          (form.phone.trim().length > 6 || form.email.includes("@"))
        );
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

  const mailtoHref = useMemo(
    () =>
      `${company.emailHref}?subject=${encodeURIComponent(
        `Quote request — ${form.service || "Project enquiry"}`,
      )}&body=${encodeURIComponent(summary)}`,
    [summary, form.service],
  );

  const next = () => {
    track("quote_step_completed", { step: steps[step] });
    if (step === 0) track("quote_started", { service: form.service });
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    track("quote_submitted", { service: form.service, stage: form.stage });
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        index="08"
        eyebrow="Request a quote"
        title="Tell us about your project."
        intro="Six short steps. The more specific you are, the more useful our first response will be."
      />

      <section className="container-x section-y">
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <div className="border border-line bg-surface p-8 md:p-12">
              <p className="label-tech text-accent">Enquiry ready</p>
              <h2 className="display-3 mt-4">Thank you, {form.name.split(" ")[0]}.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your enquiry is summarised below. Send it to us by email or WhatsApp and we will
                respond — usually within one working day.
              </p>
              <pre className="mt-6 overflow-x-auto border border-line bg-background p-5 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                {summary}
              </pre>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoHref}
                  onClick={() => track("email_click", { context: "quote_confirmation" })}
                  className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xs bg-ink px-6 py-3 text-sm font-medium tracking-tight text-ink-foreground transition-all hover:bg-primary"
                >
                  Send by email
                </a>
                <a
                  href={whatsappLink(`Hello Turiend, I would like a quote.\n\n${summary}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { context: "quote_confirmation" })}
                  className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xs bg-accent px-6 py-3 text-sm font-medium tracking-tight text-accent-foreground transition-all hover:brightness-108"
                >
                  Send on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Stepper */}
              <ol className="grid grid-cols-6 gap-px border border-line bg-line">
                {steps.map((label, i) => (
                  <li
                    key={label}
                    className={cn(
                      "bg-background px-2 py-3 text-center text-[0.65rem] font-medium tracking-wider uppercase",
                      i === step && "bg-ink text-ink-foreground",
                      i < step && "bg-surface text-muted-foreground",
                    )}
                  >
                    <span className="mr-1 font-mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </li>
                ))}
              </ol>

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
                      onChange={(e) => set("location", e.target.value)}
                      placeholder="e.g. Ruiru, Kiambu County"
                      className={cn(fieldClass, "mt-5")}
                      autoFocus
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
                      onChange={(e) => set("details", e.target.value)}
                      placeholder="e.g. A three-bedroom house on a 40×80 plot, foundation already cast…"
                      className={cn(fieldClass, "mt-5 resize-y")}
                      autoFocus
                    />
                  </div>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="text-xl font-semibold tracking-tight">
                      What stage is the project at?
                    </legend>
                    <div className="mt-6 grid gap-2">
                      {projectStages.map((stage) => (
                        <label
                          key={stage}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 border border-line px-4 py-3 text-sm transition-colors hover:border-ink",
                            form.stage === stage && "border-ink bg-ink text-ink-foreground",
                          )}
                        >
                          <input
                            type="radio"
                            name="stage"
                            value={stage}
                            checked={form.stage === stage}
                            onChange={() => set("stage", stage)}
                            className="sr-only"
                          />
                          {form.stage === stage && (
                            <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                          )}
                          {stage}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 4 && (
                  <div>
                    <p className="text-xl font-semibold tracking-tight">
                      How do we reach you?
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Give at least a phone number or an email address.
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
                          onChange={(e) => set("name", e.target.value)}
                          className={fieldClass}
                          autoFocus
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
                            onChange={(e) => set("phone", e.target.value)}
                            placeholder="07XX XXX XXX"
                            className={fieldClass}
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
                            onChange={(e) => set("email", e.target.value)}
                            placeholder="you@example.com"
                            className={fieldClass}
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
                      Check the summary below before sending it to us.
                    </p>
                    <pre className="mt-5 overflow-x-auto border border-line bg-surface p-5 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                      {summary}
                    </pre>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
                      disabled={!canContinue}
                      onClick={next}
                    >
                      Continue
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </CtaButton>
                  ) : (
                    <CtaButton variant="accent" size="md" onClick={submit}>
                      Review & prepare to send
                      <ArrowRight className="size-4" aria-hidden="true" />
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
                  onClick={() => track("phone_click", { context: "quote_page" })}
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
