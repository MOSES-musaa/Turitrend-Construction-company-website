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
      { title: "Construction Services in Kenya | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Six service areas: home improvements and renovations, building works, fences and gate automation, biodigesters, road, electrical and water works, and project management.",
      },
      { property: "og:title", content: "Construction Services | Turiend Construction Limited" },
      {
        property: "og:description",
        content:
          "Building, renovation, civil, water, electrical, perimeter and project management services across Kenya.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Services"
        title="Six core service areas."
        intro="Take one on its own, or combine several into a single scope with one team responsible for the result."
      />

      <section className="container-x section-y">
        <div className="grid gap-px border border-line bg-line">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50} className="bg-background">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group grid gap-6 p-7 transition-colors hover:bg-ink hover:text-ink-foreground md:grid-cols-12 md:gap-10 md:p-10"
              >
                <div className="md:col-span-4">
                  <div className="relative mb-6 overflow-hidden">
                    <img
                      src={serviceImages[service.slug].src}
                      alt={serviceImages[service.slug].alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="label-tech absolute right-3 bottom-3 bg-ink/85 px-2 py-1 text-ink-foreground">
                      Illustrative image
                    </span>
                  </div>
                  <span className="label-tech text-accent">{service.number}</span>
                  <h2 className="display-3 mt-4">{service.title}</h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-base leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground group-hover:text-ink-muted">
                    {service.includes
                      .flatMap((group) => group.items)
                      .slice(0, 5)
                      .map((item) => (
                        <li key={item} className="label-tech">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="flex items-end md:col-span-3 md:justify-end">
                  <span className="label-tech inline-flex items-center gap-2">
                    Discuss this service
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem rather than the trade — we will tell you what the work involves and who needs to be on site."
        context="services_index"
      />
    </>
  );
}
