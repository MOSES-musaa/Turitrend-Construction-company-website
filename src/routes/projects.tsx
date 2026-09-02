import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/company";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Turiend Construction project showcases are being documented. In the meantime, tell us about your project and we will discuss comparable work directly.",
      },
      { property: "og:title", content: "Projects | Turiend Construction Limited" },
      {
        property: "og:description",
        content: "Project showcases from Turiend Construction Limited, currently being documented.",
      },
    ],
  }),
  component: Projects,
});

/**
 * Project records are intentionally empty until genuine Turiend project
 * documentation and photography are supplied. The filter and grid structure
 * below is production-ready: adding entries to `projects` renders them without
 * any further design work.
 */
export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  scope: string[];
  servicesProvided: string[];
  status: "Completed" | "In progress";
  images: { src: string; alt: string }[];
  before?: { src: string; alt: string };
  after?: { src: string; alt: string };
};

const projects: Project[] = [];

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...services.map((s) => s.shortTitle)];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        index="01"
        eyebrow="Projects"
        title="Project showcases are being documented."
        intro="Rather than fill this page with images that are not ours, we are preparing proper documentation and photography of completed Turiend works. It will be published here as it is ready."
      />

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Filter"
            title="Browse by service area"
            intro="Filters are live — project entries will appear under the relevant service area as they are published."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cn(
                "label-tech min-h-11 border px-4 py-2.5 transition-colors",
                filter === category
                  ? "border-ink bg-ink text-ink-foreground"
                  : "border-line hover:border-ink",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <Reveal className="mt-10 grid-blueprint border border-line bg-card p-10 text-center md:p-20">
            <p className="label-tech text-accent">Coming soon</p>
            <h3 className="display-3 mx-auto mt-5 max-w-2xl">
              No project entries are published yet.
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We would rather show nothing than show work that is not ours. If you would like to
              discuss comparable work we have carried out, ask us directly — we will talk you
              through it and, where the client permits, arrange a site reference.
            </p>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <article key={project.slug} className="bg-background p-7">
                <p className="label-tech text-accent">{project.category}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        title="Ask about work we have done."
        text="Tell us the kind of project you are planning and we will discuss relevant experience with you directly."
        whatsappMessage="Hello Turiend, I would like to ask about projects you have completed."
        context="projects"
      />
    </>
  );
}
