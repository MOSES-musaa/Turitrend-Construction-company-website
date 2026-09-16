import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Lightbulb,
  MessageSquareText,
  Ruler,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import concrete from "@/assets/texture-concrete.jpg";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { clientTypes, company, services, whyTuriend } from "@/lib/company";
import { aboutImage } from "@/lib/placeholders";
import { TeamSection } from "@/components/site/team-section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Turiend Construction Limited | Nairobi, Kenya" },
      {
        name: "description",
        content:
          "Turiend Construction Limited is a Kenyan construction company covering building, civil, water and electrical works, perimeter works, biodigesters and project management.",
      },
      { property: "og:title", content: "About Turiend Construction Limited" },
      {
        property: "og:description",
        content:
          "Who Turiend is, how we work with clients, and the disciplines we cover across Kenya.",
      },
    ],
  }),
  component: About,
});

const values = [
  "Integrity",
  "Professionalism",
  "Quality workmanship",
  "Accountability",
  "Innovation",
  "Customer satisfaction",
  "Teamwork",
  "Safety",
];

const valueIcons = [
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  ClipboardCheck,
  Lightbulb,
  UsersRound,
  MessageSquareText,
  HardHat,
];

const serviceIcons = [Building2, Ruler, Wrench, ShieldCheck, HardHat, ClipboardCheck];
const clientIcons = [Building2, UsersRound, Ruler, BriefcaseBusiness, ClipboardCheck];
const principleIcons = [UsersRound, BadgeCheck, CheckCircle2];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Kenyan construction company built around clear scope and proper supervision."
        intro="Turiend Construction Limited delivers building, civil, water and electrical works, perimeter and access works, biodigesters, and project and property management."
      />

      <section className="container-x pt-16 pb-10 md:pt-24 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Text */}
          <Reveal className="lg:col-span-5">
            <div>
              <p className="label-tech flex items-center gap-3 text-muted-foreground">
                <span className="h-px w-8 bg-line" />
                <span>Who we are</span>
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Construction work, coordinated properly.
              </h2>

              <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  We work with homeowners, landlords, developers, businesses, institutions and
                  property managers on projects that range from a single set of repairs to a
                  complete building.
                </p>

                <p>
                  Because we cover several disciplines in-house, a project that needs structure,
                  plumbing, power and external works does not have to be split across separate
                  contracts that nobody is holding together.
                </p>

                <p>
                  We are based in {company.location} and take on work in Nairobi and the surrounding
                  counties.
                </p>
              </div>

              {/* Approach marker */}
              <div className="mt-10 border-t border-line pt-5">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="label-tech text-accent">Our approach</p>

                    <p className="mt-2 text-sm font-medium">
                      Clear scope. Proper supervision. Accountable delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={100} className="relative lg:col-span-7">
            <div className="relative">
              {/* Blueprint frame */}
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
                  className="aspect-16/10 w-full object-cover transition-transform duration-1200 ease-out hover:scale-[1.02]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-4 left-4">
                  <span className="label-tech bg-ink/85 px-3 py-2 text-ink-foreground">
                    Turiend Construction
                  </span>
                </div>

                {/* Image index */}
                <div className="absolute right-4 top-4"></div>
              </div>

              {/* Technical caption */}
              <div className="mt-5 flex items-start justify-between gap-6">
                <p className="max-w-md text-xs leading-5 text-muted-foreground">
                  Coordinated construction services across building, infrastructure and property
                  works.
                </p>

                <span className="label-tech shrink-0 text-muted-foreground" aria-hidden="true">
                  Nairobi · Kenya
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <TeamSection />

      <section className="bg-ink text-ink-foreground">
        <div className="container-x section-y grid gap-12 md:grid-cols-2">
          <Reveal className="border-t border-ink-line pt-6">
            <p className="label-tech text-accent">Vision</p>
            <p className="display-3 mt-5">
              To become a leading construction and project management company in Kenya by delivering
              high-quality, innovative and sustainable construction solutions.
            </p>
          </Reveal>
          <Reveal delay={80} className="border-t border-ink-line pt-6">
            <p className="label-tech text-accent">Mission</p>
            <p className="display-3 mt-5">
              To provide reliable, cost-effective and professional construction services while
              maintaining the highest standards of quality, safety and client satisfaction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading eyebrow="Core values" title="What we hold ourselves to" />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              key={value}
              as="li"
              delay={i * 40}
              className="group relative overflow-hidden rounded-sm border border-line bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="absolute -right-8 -bottom-8 size-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative">
                {(() => {
                  const Icon = valueIcons[i];
                  return (
                    <div className="mb-7 flex size-10 items-center justify-center border border-accent/25 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon
                        className="size-4.5 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                    </div>
                  );
                })()}
                <p className="text-lg font-semibold tracking-tight">{value}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <img
              src={concrete}
              alt="Close detail of a fair-faced concrete wall surface"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="Health & safety" title="Safe sites, every day" />
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Turiend Construction Limited maintains safe working environments for employees,
                clients and the public. We follow safety regulations, use proper personal protective
                equipment and keep safety awareness active throughout project operations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading eyebrow="Capability" title="Disciplines we cover" />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 40}
              className="group relative overflow-hidden rounded-sm border border-line bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="absolute -right-8 -bottom-8 size-28 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative">
                {(() => {
                  const Icon = serviceIcons[i];
                  return (
                    <div className="mb-7 flex size-11 items-center justify-center border border-accent/25 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon
                        className="size-5 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                    </div>
                  );
                })()}
                <h3 className="text-lg font-semibold tracking-tight">{s.shortTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading eyebrow="Clients" title="Who we work with" />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 40}
                className="group relative overflow-hidden rounded-sm border border-line bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -bottom-8 size-28 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150"
                />
                <div className="relative">
                  {(() => {
                    const Icon = clientIcons[i];
                    return (
                      <div className="mb-7 flex size-11 items-center justify-center border border-accent/25 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon
                          className="size-5 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.8}
                        />
                      </div>
                    );
                  })()}
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-3">
            {whyTuriend.slice(0, 3).map((w, i) => {
              const Icon = principleIcons[i];

              return (
                <div
                  key={w.title}
                  className="group relative overflow-hidden border border-line bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -bottom-8 size-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150"
                  />
                  <div className="relative">
                    <div className="flex size-10 items-center justify-center border border-accent/25 bg-accent/10 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon
                        className="size-4.5 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        text="Tell us what you are planning and we will let you know what the works would involve."
        whatsappMessage="Hello Turiend, I would like to discuss a construction project."
        context="about"
      />
    </>
  );
}
