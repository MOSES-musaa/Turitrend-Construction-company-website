/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";
import { projects, projectCategories, type Project } from "@/lib/project";
import { ProjectCard } from "@/components/site/project-card";

export const Route = createFileRoute("/projects/")({
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

function Projects() {
  const [filter, setFilter] = useState<string>("All");
 const categories = projectCategories;
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project showcases are being documented."
        intro="Rather than fill this page with images that are not ours, we are preparing proper documentation and photography of completed Turiend works. It will be published here as it is ready."
      />

      <section className="container-x section-y">
        <Reveal>
          <SectionHeading
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

       <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {visible.map((project) => (
    <ProjectCard key={project.slug}
     project={project} />
  ))}
</div>
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
