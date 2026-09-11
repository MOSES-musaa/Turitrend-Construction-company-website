/* eslint-disable prettier/prettier */
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.images[0];

  return (
    <article className="group overflow-hidden border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        {coverImage ? (
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="label-tech text-muted-foreground">
              Project photography
            </span>
          </div>
        )}

        {/* Category */}
        <span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
          {project.category}
        </span>

        {/* Image count */}
        {project.images.length > 0 && (
          <span className="absolute bottom-4 right-4 bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background">
            {project.images.length}{" "}
            {project.images.length === 1 ? "photo" : "photos"}
          </span>
        )}
      </div>

      {/* Information */}
      <div className="p-6">
        <p className="label-tech text-accent">
          {project.location}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {project.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
        >
          View project
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}