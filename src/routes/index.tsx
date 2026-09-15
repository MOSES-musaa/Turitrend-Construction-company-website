/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import heroImage from "@/assets/hero-architecture.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import blueprint from "@/assets/blueprint-lines.jpg";
import { CtaLink } from "@/components/site/cta";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppCta } from "@/components/site/whatsapp-button";
import { aboutImage } from "@/lib/placeholders";
import {
  clientTypes,
  company,
  processSteps,
  projectFinder,
  services,
  whyTuritrend,
} from "@/lib/company";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Turitrend Construction Limited | Construction Company in Kenya" },
      {
        name: "description",
        content:
          "Building works, renovations, fencing and gate automation, biodigesters, road, electrical and water works, and project management across Kenya. Request a quote from Turitrend.",
      },
      { property: "og:title", content: "Turitrend Construction Limited | Construction in Kenya" },
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
        <HeroCarousel />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
        <div className="container-x relative grid gap-12 pt-16 pb-16 md:min-h-[82vh] md:grid-cols-12 md:content-center md:pt-24 md:pb-24">
          <div className="md:col-span-8">
            <p className="label-tech flex items-center gap-3 text-ink-muted">
              <span>{company.location}</span>
            </p>
            <h1 className="display-1 mt-6">
              Turitrend Construction
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
      {/* INTRODUCTION */}
<section className="container-x section-y">
  <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

    {/* Introduction copy */}
    <Reveal className="lg:col-span-5">
      <div>
        <p className="label-tech flex items-center gap-3 text-muted-foreground">
          <span className="h-px w-8 bg-line" />
          <span>Who we are</span>
        </p>

        <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Construction work, coordinated properly.
        </h2>

        <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Turitrend Construction Limited is a Kenyan construction company.
            We take on building and civil works, water and electrical
            installations, perimeter and access works, biodigesters, and
            the management of projects and properties.
          </p>

          <p>
            We work the other way round — agree the scope, agree the
            sequence, then keep you informed while the work is carried out.
          </p>
        </div>

        {/* Approach */}
        <div className="mt-9 border-t border-line pt-5">
          <p className="label-tech text-accent">
            Our approach
          </p>

          <p className="mt-2 text-sm font-medium">
            Clear scope. Proper supervision. Accountable delivery.
          </p>
        </div>

        {/* About link */}
        <Link
          to="/about"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
        >
          More about Turitrend
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Reveal>

    {/* Image */}
    <Reveal
      delay={100}
      className="relative lg:col-span-7"
    >
      <div className="relative">

        {/* Technical frame */}
        <div
          className="pointer-events-none absolute -inset-3 border border-line/60"
          aria-hidden="true"
        />

        {/* Image */}
        <div className="relative overflow-hidden bg-muted">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-4/3 w-full object-cover transition-transform duration-1200ms ease-out hover:scale-[1.02]"
          />

          {/* Image gradient */}
          <div
            className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent"
            aria-hidden="true"
          />

          {/* Image label */}
          <div className="absolute bottom-4 left-4">
            <span className="label-tech bg-ink/85 px-3 py-2 text-ink-foreground">
              Turitrend Construction
            </span>
          </div>

          {/* Image index */}
          <div className="absolute right-4 top-4">
            <span className="label-tech bg-background/90 px-3 py-2">
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-5 flex items-start justify-between gap-6">
          <p className="max-w-md text-xs leading-5 text-muted-foreground">
            Coordinated construction services across building,
            infrastructure and property works.
          </p>

          <span className="label-tech shrink-0 text-muted-foreground">
            Nairobi · Kenya
          </span>
        </div>
      </div>
    </Reveal>

  </div>
</section>

      {/* SERVICES */}
      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
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
              eyebrow="How we work"
              tone="dark"
              align="split"
              title="Six steps from first conversation to handover"
              intro="The same sequence applies whether the job is a single room or a full build. It is what keeps scope, cost and programme in one place."
            />
          </Reveal>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              {processSteps.map((step, i) => (
                <Reveal
                  key={step.number}
                  as="div"
                  delay={i * 60}
                  className="border-t border-ink-line py-6 last:border-b"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
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
          <SectionHeading eyebrow="Who we work with" title="Clients we can serve" />
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
              message="Hello Turitrend, I would like to discuss a construction project."
              label="Ask us on WhatsApp"
              variant="quiet"
              size="sm"
              context="home_clients"
              className="mt-3"
            />
          </div>
        </div>
      </section>

      {/* WHY TURITREND */}
      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Why Turitrend"
              align="split"
              title="What working with us actually gives you"
              intro="FROM CONCEPT TO CREATION."
            />
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {whyTuritrend.map((item, i) => (
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

const heroSlides = [
  {
    src: heroImage,
    alt: "Abstract architectural line drawing over a dark concrete surface",
    caption: "Building & civil works",
  },
  {
    src: heroConstruction,
    alt: "A building under construction at dusk, scaffolding and crane silhouetted",
    caption: "Groundworks to finishes",
  },
  {
    src: blueprint,
    alt: "Technical isometric line drawing of a timber roof structure",
    caption: "Planned before it is built",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => 
    {
    setIndex((next + heroSlides.length) % heroSlides.length);
    },
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Turitrend Construction highlights"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-1800 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            width={1920}
            height={1280}
            fetchPriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
            className={`size-full object-cover will-change-transform ${
              i === index ? "hero-carousel-image" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Slide information + controls */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-x pb-6 md:pb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            
            {/* Slide caption */}
            <div>
              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-ink-line" />

                <span className="label-tech text-ink-muted">
                  {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>

              <p
                className="mt-3 max-w-md text-sm font-medium tracking-wide text-ink-foreground md:text-base"
                aria-live="polite"
              >
                {heroSlides[index]!.caption}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Progress indicators */}
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Hero slides"
              >
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}: ${slide.caption}`}
                    onClick={() => go(i)}
                    className="group flex h-6 items-center"
                  >
                    <span
                      className={`block h-px transition-all duration-500 ${
                        i === index
                          ? "w-10 bg-accent"
                          : "w-5 bg-ink-foreground/30 group-hover:w-7 group-hover:bg-ink-foreground/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Previous / next */}
              <div className="flex">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous slide"
                  className="flex size-10 items-center justify-center border border-ink-line text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
                >
                  <ArrowLeft
                    className="size-4"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next slide"
                  className="flex size-10 items-center justify-center border-y border-r border-ink-line text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
                >
                  <ArrowRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}