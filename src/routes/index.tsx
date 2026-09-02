import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import blueprint from "@/assets/blueprint-lines.jpg";
import { CtaLink } from "@/components/site/cta";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
import {
  clientTypes,
  company,
  processSteps,
  projectFinder,
  services,
  whyTuriend,
} from "@/lib/company";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Turiend Construction Limited | Construction Company in Kenya" },
      {
        name: "description",
        content:
          "Building works, renovations, fencing and gate automation, biodigesters, road, electrical and water works, and project management across Kenya. Request a quote from Turiend.",
      },
      { property: "og:title", content: "Turiend Construction Limited | Construction in Kenya" },
      {
        property: "og:description",
        content:
          "A Kenyan construction company covering building, renovations, civil, water and electrical works, perimeter and access works, and project management.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="Abstract architectural line drawing over a dark concrete surface"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="container-x relative grid gap-12 pt-16 pb-16 md:min-h-[82vh] md:grid-cols-12 md:content-center md:pt-24 md:pb-24">
          <div className="md:col-span-8">
            <p className="label-tech flex items-center gap-3 text-ink-muted">
              <span className="text-accent">01</span>
              <span>{company.location}</span>
            </p>
            <h1 className="display-1 mt-6">
              Turiend Construction
              <span className="block text-accent">Limited</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/85 md:text-xl">
              Building, renovations, infrastructure, electrical, water, fencing and project
              management — handled by one team, so you are not left coordinating six different
              contractors on your own site.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                to="/quote"
                variant="accent"
                size="lg"
                onClick={() => track("cta_click", { context: "hero", cta: "quote" })}
              >
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink to="/services" variant="outlineLight" size="lg">
                Explore our services
              </CtaLink>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px self-end border border-ink-line bg-ink-line md:col-span-4 md:grid-cols-1">
            {[
              ["Building & civil", "Groundworks to finishes"],
              ["Water & electrical", "Installations and maintenance"],
              ["Perimeter & access", "Fences, gates, automation"],
              ["Management", "Project and property oversight"],
            ].map(([term, desc]) => (
              <div key={term} className="bg-ink p-5">
                <dt className="text-sm font-semibold">{term}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Who we are"
            align="split"
            title="A construction company that works through the detail before the first block is laid."
            intro={
              <div className="space-y-4">
                <p>
                  Turiend Construction Limited is a Kenyan construction company. We take on
                  building and civil works, water and electrical installations, perimeter and
                  access works, biodigesters, and the management of projects and properties.
                </p>
                <p>
                  Most projects go wrong for the same reasons: an unclear scope, trades arriving in
                  the wrong order, and decisions made on site without the owner. We work the other
                  way round — agree the scope, agree the sequence, then keep you informed while the
                  work is carried out.
                </p>
              </div>
            }
          />
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="What we do"
              title="Six core service areas"
              intro="Each area can be a project on its own, or one part of a larger scope we deliver together."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60} className="bg-background">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-ink hover:text-ink-foreground md:p-9"
                >
                  <span className="label-tech text-accent">{service.number}</span>
                  <h3 className="mt-6 text-xl leading-tight font-semibold tracking-tight md:text-2xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                    {service.summary}
                  </p>
                  <span className="label-tech mt-8 inline-flex items-center gap-2">
                    Discuss this service
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TYPE FINDER */}
      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Project finder"
            title="What are you planning?"
            intro="Pick the closest description and we will take you to the right place."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2">
          {projectFinder.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <Link
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="group flex min-h-16 items-center justify-between gap-4 border border-line bg-card px-6 py-5 text-base font-medium transition-all hover:border-ink hover:bg-ink hover:text-ink-foreground md:text-lg"
              >
                {item.label}
                <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="How we work"
              tone="dark"
              align="split"
              title="Six steps from first conversation to handover"
              intro="The same sequence applies whether the job is a single room or a full build. It is what keeps scope, cost and programme in one place."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-start">
            <ol className="md:col-span-7">
              {processSteps.map((step, i) => (
                <Reveal
                  key={step.number}
                  as="li"
                  delay={i * 60}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink-line py-6 last:border-b"
                >
                  <span className="label-tech pt-1 text-accent">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="md:col-span-5">
              <img
                src={blueprint}
                alt="Technical isometric line drawing of a timber roof structure"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full border border-ink-line bg-ink-foreground object-cover"
              />
              <CtaLink to="/how-we-work" variant="outlineLight" size="md" className="mt-6 w-full">
                See the full process
              </CtaLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="container-x section-y">
        <Reveal>
          <SectionHeading index="06" eyebrow="Who we work with" title="Clients we can serve" />
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line md:mt-14 md:grid-cols-3">
          {clientTypes.map((client, i) => (
            <Reveal key={client.title} delay={i * 50} className="bg-background p-7 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight">{client.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{client.text}</p>
            </Reveal>
          ))}
          <div className="hidden bg-surface p-8 md:block lg:col-span-1">
            <p className="label-tech text-muted-foreground">Not sure where you fit?</p>
            <WhatsAppCta
              message="Hello Turiend, I would like to discuss a construction project."
              label="Ask us on WhatsApp"
              variant="quiet"
              size="sm"
              context="home_clients"
              className="mt-3"
            />
          </div>
        </div>
      </section>

      {/* WHY TURIEND */}
      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
              index="07"
              eyebrow="Why Turiend"
              align="split"
              title="What working with us actually gives you"
              intro="No slogans — these are the practical differences clients notice on a running project."
            />
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {whyTuriend.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="border-t border-line pt-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
