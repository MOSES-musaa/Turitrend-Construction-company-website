import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
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
import { track } from "@/lib/analytics";
import { serviceBySlug, services } from "@/lib/company";
import { serviceImages } from "@/lib/placeholders";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);

    if (!service) {
      throw notFound();
    }

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
    track("service_view", {
      service: service.slug,
    });
  }, [service.slug]);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} intro={service.summary}>
        <div className="flex flex-col gap-5">
          <Link
            to="/services"
            className="label-tech inline-flex w-fit items-center gap-2 text-ink-muted transition-colors hover:text-ink-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Services
          </Link>

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
        </div>
      </PageHero>

      <div className="relative h-12 overflow-hidden bg-background" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/50 to-background" />
      </div>

      <section className="container-x pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-7">
            <div className="relative overflow-hidden bg-muted">
              <img
                src={serviceImages[service.slug].src}
                alt={serviceImages[service.slug].alt}
                width={1600}
                height={1000}
                loading="eager"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="label-tech bg-background/90 px-3 py-2 text-foreground backdrop-blur-sm">
                  {service.shortTitle}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center md:col-span-5">
            <p className="label-tech text-accent">The service</p>

            <h2 className="display-3 mt-5">What this service covers.</h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-5">
              <p className="label-tech text-muted-foreground">
                Scope is agreed around the property, existing conditions and the work required.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Scope"
              title="What the work can include"
              intro="The exact scope depends on the property and project requirements. Typical work may include the following."
            />
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {service.includes.map((group, i) => (
              <Reveal key={group.heading ?? i} delay={i * 70} className="bg-background p-7 md:p-8">
                <div className="flex items-start justify-between gap-5">
                  {group.heading && (
                    <h3 className="max-w-14rem text-right text-sm font-semibold tracking-tight">
                      {group.heading}
                    </h3>
                  )}
                </div>

                <ul className="mt-7 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading eyebrow="Typical needs" title="When clients call us." />
            </Reveal>

            <ul className="mt-9 space-y-5">
              {service.needs.map((need, i) => (
                <Reveal
                  key={need}
                  as="li"
                  delay={i * 60}
                  className="border-l-2 border-accent pl-5 text-base leading-relaxed"
                >
                  {need}
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="Our approach" title="How we handle the work." />
            </Reveal>

            <div className="mt-9">
              {service.approach.map((item, i) => (
                <Reveal
                  key={item.step}
                  as="div"
                  delay={i * 60}
                  className="border-t border-line py-6 last:border-b"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{item.step}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading eyebrow="FAQs" title="Questions we are asked." />
          </Reveal>

          <Reveal delay={100} className="mt-9 max-w-3xl">
            <Accordion type="single" collapsible>
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
              className="label-tech mt-8 inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-70"
            >
              All FAQs
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading eyebrow="Related" title="Other services." />
        </Reveal>

        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {related.map((relatedService, i) => (
            <Reveal key={relatedService.slug} delay={i * 60} className="bg-background">
              <Link
                to="/services/$slug"
                params={{ slug: relatedService.slug }}
                className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-ink hover:text-ink-foreground md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="label-tech text-accent">{relatedService.number}</span>

                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold tracking-tight">
                  {relatedService.shortTitle}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                  {relatedService.summary}
                </p>

                <span className="label-tech mt-8 text-accent">View service</span>
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
