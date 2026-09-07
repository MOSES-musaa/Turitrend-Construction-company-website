import { createFileRoute } from "@tanstack/react-router";
import concrete from "@/assets/texture-concrete.jpg";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { clientTypes, company, services, whyTuriend } from "@/lib/company";
import { aboutImage } from "@/lib/placeholders";

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

function About() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="About"
        title="A Kenyan construction company built around clear scope and proper supervision."
        intro="Turiend Construction Limited delivers building, civil, water and electrical works, perimeter and access works, biodigesters, and project and property management."
      />

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Who we are"
            align="split"
            title="Construction work, coordinated properly."
            intro={
              <div className="space-y-4">
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
                  We are based in {company.location} and take on work in Nairobi and the
                  surrounding counties.
                </p>
              </div>
            }
          />
        </Reveal>
      </section>

      <section className="container-x pb-12 md:pb-20">
        <Reveal className="relative overflow-hidden">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={1600}
            height={900}
            loading="lazy"
            className="aspect-16/7 w-full object-cover"
          />
          <span className="label-tech absolute right-4 bottom-4 bg-ink/85 px-3 py-2 text-ink-foreground">
            Illustrative image
          </span>
        </Reveal>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-x section-y grid gap-12 md:grid-cols-2">
          <Reveal className="border-t border-ink-line pt-6">
            <p className="label-tech text-accent">Vision</p>
            <p className="display-3 mt-5">
              To become a leading construction and project management company in Kenya by
              delivering high-quality, innovative and sustainable construction solutions.
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
          <SectionHeading index="03" eyebrow="Core values" title="What we hold ourselves to" />
        </Reveal>
        <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value} as="li" delay={i * 40} className="bg-background px-6 py-7">
              <span className="label-tech text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg font-semibold tracking-tight">{value}</p>
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
              <SectionHeading index="04" eyebrow="Health & safety" title="Safe sites, every day" />
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Turiend Construction Limited maintains safe working environments for employees,
                clients and the public. We follow safety regulations, use proper personal
                protective equipment and keep safety awareness active throughout project
                operations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading index="05" eyebrow="Capability" title="Disciplines we cover" />
        </Reveal>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40} className="border-t border-line pt-5">
              <span className="label-tech text-accent">{s.number}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.shortTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x section-y">
          <Reveal>
            <SectionHeading index="06" eyebrow="Clients" title="Who we work with" />
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((c, i) => (
              <Reveal key={c.title} delay={i * 40} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-3">
            {whyTuriend.slice(0, 3).map((w) => (
              <div key={w.title} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            ))}
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
