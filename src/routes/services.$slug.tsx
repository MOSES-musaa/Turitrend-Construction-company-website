import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaLink } from "@/components/site/cta";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
import { serviceBySlug, services } from "@/lib/company";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    const title = service
      ? `${service.title} | Turiend Construction Limited`
      : "Service | Turiend Construction Limited";
    const description = service?.summary ?? "Construction services in Kenya.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const whatsappMessage = `Hello Turiend, I am interested in your ${service.shortTitle} services and would like to discuss my project.`;

  useEffect(() => {
    track("service_view", { service: service.slug });
  }, [service.slug]);

  return (
    <>
      <PageHero
        index={service.number}
        eyebrow="Service"
        title={service.title}
        intro={service.summary}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink to="/quote" variant="accent" size="lg">
            Request a Quote
          </CtaLink>
          <WhatsAppCta
            message={whatsappMessage}
            label="Discuss this service"
            variant="outlineLight"
            size="lg"
            context={`service_${service.slug}`}
          />
        </div>
      </PageHero>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
            index="A"
            eyebrow="The service"
            align="split"
            title="What this covers"
            intro={
              <div className="space-y-4">
                {service.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            }
          />
        </Reveal>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading index="B" eyebrow="Scope" title="What the work can include" />
          </Reveal>
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3">
            {service.includes.map((group, i) => (
              <Reveal key={group.heading ?? i} delay={i * 60} className="border-t border-line pt-6">
                {group.heading && (
                  <h3 className="label-tech mb-5 text-accent">{group.heading}</h3>
                )}
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <SectionHeading index="C" eyebrow="Typical needs" title="When clients call us" />
          </Reveal>
          <ul className="mt-8 space-y-4">
            {service.needs.map((need, i) => (
              <Reveal
                key={need}
                as="li"
                delay={i * 50}
                className="border-l-2 border-accent pl-4 text-base leading-relaxed"
              >
                {need}
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <SectionHeading index="D" eyebrow="Our approach" title="How we handle it" />
          </Reveal>
          <ol className="mt-8">
            {service.approach.map((item, i) => (
              <Reveal
                key={item.step}
                as="li"
                delay={i * 50}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="label-tech pt-1 text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{item.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading index="E" eyebrow="FAQs" title="Questions we are asked" />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-line">
                <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            to="/faqs"
            className="label-tech mt-8 inline-flex items-center gap-2 text-accent hover:underline"
          >
            All FAQs <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading index="F" eyebrow="Related" title="Other services" />
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50} className="bg-background">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col p-7 transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <span className="label-tech text-accent">{s.number}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.shortTitle}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                  {s.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={`Planning ${service.shortTitle.toLowerCase()}?`}
        text="Send the details and we will come back to you on scope, sequence and what a quotation would need."
        whatsappMessage={whatsappMessage}
        context={`service_band_${service.slug}`}
      />
    </>
  );
}
