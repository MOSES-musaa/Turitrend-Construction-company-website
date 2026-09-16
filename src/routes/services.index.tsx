import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/company";
import { serviceImages } from "@/lib/placeholders";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Construction Services in Kenya | Turiend Construction Limited",
      },
      {
        name: "description",
        content:
          "Six service areas: home improvements and renovations, building works, fences and gate automation, biodigesters, road, electrical and water works, and project management.",
      },
      {
        property: "og:title",
        content: "Construction Services | Turiend Construction Limited",
      },
      {
        property: "og:description",
        content:
          "Building, renovation, civil, water, electrical, perimeter and project management services.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six core service areas."
        intro="Take one on its own, or combine several into a single scope with one team responsible for the result."
      />

      <section className="container-x section-y">
        <div className="mb-12 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-tech text-accent">Our capabilities</p>
            <h2 className="display-3 mt-3 max-w-2xl">
              Practical construction work, properly coordinated.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            From individual works to broader project scopes, we coordinate the people, materials and
            sequence needed to move the work forward.
          </p>
        </div>

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60} className="bg-background">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group block h-full transition-colors duration-300 hover:bg-ink hover:text-ink-foreground"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={serviceImages[service.slug].src}
                    alt={serviceImages[service.slug].alt}
                    width={1200}
                    height={800}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-70" />
                </div>

                <div className="flex min-h-64 flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <h2 className="max-w-lg text-xl font-semibold tracking-tight md:text-2xl">
                      {service.title}
                    </h2>

                    <span className="flex size-9 shrink-0 items-center justify-center border border-line transition-colors group-hover:border-ink-line">
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                    {service.summary}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                      {service.includes
                        .flatMap((group) => group.items)
                        .slice(0, 3)
                        .map((item) => (
                          <span
                            key={item}
                            className="label-tech text-muted-foreground group-hover:text-ink-muted"
                          >
                            {item}
                          </span>
                        ))}
                    </div>

                    <span className="label-tech shrink-0 text-accent">View service</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="relative h-14 overflow-hidden bg-ink md:h-20" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-ink-line" />
      </div>

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem rather than the trade — we will tell you what the work involves and who needs to be on site."
        context="services_index"
      />
    </>
  );
}
