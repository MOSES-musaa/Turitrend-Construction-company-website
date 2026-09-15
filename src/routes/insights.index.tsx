/* eslint-disable prettier/prettier */
import { Link, createFileRoute } from "@tanstack/react-router";
import { insights } from "@/lib/insights";
import { PageHero } from "@/components/site/page-hero";
export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
});

function InsightsPage() {
  const featuredInsight = insights.find(
    (insight) => insight.featured,
  );

  const otherInsights = insights.filter(
    (insight) => insight.slug !== featuredInsight?.slug,
  );

  return (
    <main>
      {/* Page introduction */}
      <PageHero
  eyebrow="Insights"
  title={
    <>
      Perspectives on construction,
      <br />
      property and better building.
    </>
  }
  intro={
    <>
      Practical ideas, project knowledge and perspectives
      from Turitrend Construction Limited.
    </>
  }
/>

      {/* Featured insight */}
      {featuredInsight && (
        <section className="container-x">
          <article className="grid overflow-hidden border border-line bg-card lg:grid-cols-2">
            <div className="aspect-16/10 overflow-hidden bg-muted lg:aspect-auto">
              <img
                src={featuredInsight.image}
                alt={featuredInsight.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="label-tech text-accent">
                Featured insight
              </p>

              <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                {featuredInsight.category}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {featuredInsight.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {featuredInsight.excerpt}
              </p>

              <div className="mt-6 text-xs text-muted-foreground">
                {featuredInsight.date} · {featuredInsight.readTime}
              </div>

              <Link
                to="/insights/$slug"
                params={{ slug: featuredInsight.slug }}
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </section>
      )}

      {/* All insights */}
      <section className="container-x section-y">
        <div>
          <p className="label-tech text-accent">
            All insights
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Ideas worth exploring.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {otherInsights.map((insight) => (
            <article
              key={insight.slug}
              className="group overflow-hidden border border-line bg-card"
            >
              <div className="aspect-16/10 overflow-hidden bg-muted">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="label-tech text-accent">
                  {insight.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {insight.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {insight.excerpt}
                </p>

                <div className="mt-5 text-xs text-muted-foreground">
                  {insight.date} · {insight.readTime}
                </div>

                <Link
                  to="/insights/$slug"
                  params={{ slug: insight.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}