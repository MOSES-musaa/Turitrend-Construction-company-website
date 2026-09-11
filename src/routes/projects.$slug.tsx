/* eslint-disable prettier/prettier */
import { Link, createFileRoute } from "@tanstack/react-router";
import { ProjectGallery } from "@/components/site/project-gallery";
import { projects } from "@/lib/project";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <main className="container-x section-y">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-tech text-accent">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Project not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            The project you are looking for could not be found.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.category === project.category &&
        item.slug !== project.slug,
    )
    .slice(0, 3);

  return (
    <main>
      {/* Header */}
      <section className="container-x section-y">
        <div className="max-w-4xl">
          <Link
            to="/projects"
            className="label-tech text-muted-foreground transition-colors hover:text-accent"
          >
            ← Projects
          </Link>

          <p className="mt-10 label-tech text-accent">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            {project.name}
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            {project.location}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x">
        <ProjectGallery
          images={project.images}
          projectName={project.name}
        />
      </section>

      {/* Project information */}
      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="label-tech text-accent">
              Project overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {project.name}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
              {project.description}
            </p>

            {project.scope.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold">
                  Scope of work
                </h3>

                <ul className="mt-4 space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-accent">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Project details */}
          <aside className="border border-line bg-card p-6">
            <p className="label-tech text-accent">
              Project details
            </p>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Category
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  {project.category}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Location
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  {project.location}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Status
                </dt>
                <dd className="mt-1 text-sm font-medium">
                  {project.status}
                </dd>
              </div>

              {project.servicesProvided.length > 0 && (
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Services
                  </dt>

                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.servicesProvided.map((service) => (
                      <span
                        key={service}
                        className="border border-line px-2.5 py-1 text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="container-x section-y border-t border-line">
          <div>
            <p className="label-tech text-accent">
              More projects
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              More from {project.category}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related) => (
              <div key={related.slug} className="border border-line p-6">
                <p className="label-tech text-accent">
                  {related.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {related.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {related.location}
                </p>

                <Link to="/projects/$slug"
                  params={{ slug: related.slug }}
                  className="mt-6 inline-flex text-sm font-medium hover:text-accent"
                >
                  View project →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}