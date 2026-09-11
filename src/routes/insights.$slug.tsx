/* eslint-disable prettier/prettier */
import { Link, createFileRoute } from "@tanstack/react-router";
import { insights } from "@/lib/insights";

export const Route = createFileRoute("/insights/$slug")({
  component: InsightDetail,
});

function InsightDetail() {
  const { slug } = Route.useParams();

  const insight = insights.find(
    (item) => item.slug === slug,
  );

  if (!insight) {
    return (
      <main className="container-x section-y">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-tech text-accent">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Insight not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            The insight you are looking for could not be found.
          </p>

          <Link
            to="/insights"
            className="mt-8 inline-flex border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            ← Back to insights
          </Link>
        </div>
      </main>
    );
  }

  const relatedInsights = insights
    .filter(
      (item) =>
        item.category === insight.category &&
        item.slug !== insight.slug,
    )
    .slice(0, 3);

  return (
    <main>
      {/* Article header */}
      <section className="container-x section-y">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/insights"
            className="label-tech text-muted-foreground transition-colors hover:text-accent"
          >
            ← Insights
          </Link>

          <div className="mt-10">
            <p className="label-tech text-accent">
              {insight.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              {insight.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {insight.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span>{insight.date}</span>
              <span aria-hidden="true">·</span>
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="container-x">
        <div className="overflow-hidden bg-muted">
          <img
            src={insight.image}
            alt={insight.title}
            className="aspect-16/8 w-full object-cover"
          />
        </div>
      </section>

      {/* Article content */}
      <section className="container-x section-y">
        <article className="mx-auto max-w-3xl">
          {insight.content.map((section, index) => (
            <section
              key={`${section.heading ?? "section"}-${index}`}
              className={index === 0 ? "" : "mt-12"}
            >
              {section.heading && (
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
              )}

              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-muted-foreground md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </section>

      {/* Related insights */}
      {relatedInsights.length > 0 && (
        <section className="container-x section-y border-t border-line">
          <div>
            <p className="label-tech text-accent">
              Continue reading
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              More insights
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedInsights.map((related) => (
              <article
                key={related.slug}
                className="group overflow-hidden border border-line bg-card"
              >
                <div className="aspect-16/10 overflow-hidden bg-muted">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <p className="label-tech text-accent">
                    {related.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {related.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {related.excerpt}
                  </p>

                  <Link
                    to="/insights/$slug"
                    params={{ slug: related.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}