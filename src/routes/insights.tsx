import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { projectPlaceholderImages } from "@/lib/placeholders";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Construction Insights | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Practical construction guidance for homeowners and property owners in Kenya, written by the Turiend team. First articles in preparation.",
      },
      { property: "og:title", content: "Construction Insights | Turiend Construction Limited" },
      {
        property: "og:description",
        content: "Practical construction guidance for property owners in Kenya.",
      },
    ],
  }),
  component: Insights,
});

/**
 * Article records are written by the Turiend team, not generated.
 * Adding an entry here renders it in the grid; the article route can then be
 * added without changing this page's structure.
 */
export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  excerpt: string;
  image?: { src: string; alt: string };
  body: string[];
};

const articles: Article[] = [];

const planned = [
  {
    category: "Building works",
    title: "Things to consider before starting a house construction project",
  },
  { category: "Renovations", title: "Planning a home renovation" },
  { category: "Perimeter works", title: "Choosing the right perimeter solution" },
  { category: "Biodigesters", title: "Biodigester considerations for property owners" },
  { category: "Project management", title: "Construction project planning basics" },
  {
    category: "Building works",
    title: "Common issues to consider before starting construction",
  },
];

function Insights() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Insights"
        title="Practical construction guidance."
        intro="Short, useful notes on the decisions property owners actually face — written by our team, based on work we have carried out."
      />

      <section className="container-x section-y">
        {articles.length === 0 ? (
          <>
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="In preparation"
                title="The first articles are being written."
                intro="We are not publishing filler. Each article below is being written by the team from real project experience, and will appear here once it is ready."
              />
            </Reveal>
            <ul className="mt-10 grid gap-px border border-line bg-line md:mt-14 md:grid-cols-2 lg:grid-cols-3">
              {planned.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 50} className="bg-background">
                  <div className="relative overflow-hidden">
                    <img
                      src={projectPlaceholderImages[i % projectPlaceholderImages.length].src}
                      alt=""
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-16/9 w-full object-cover"
                    />
                    <span className="label-tech absolute right-3 bottom-3 bg-ink/85 px-2 py-1 text-ink-foreground">
                      Illustrative image
                    </span>
                  </div>
                  <div className="p-7">
                  <span className="label-tech text-accent">{item.category}</span>
                  <h2 className="mt-5 text-lg leading-snug font-semibold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="label-tech mt-6 text-muted-foreground">In preparation</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </>
        ) : (
          <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.slug} className="bg-background p-7">
                <span className="label-tech text-accent">{article.category}</span>
                <h2 className="mt-5 text-lg font-semibold tracking-tight">{article.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <p className="label-tech mt-6 text-muted-foreground">
                  {article.date} · {article.readingTime}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        title="Have a question we haven't covered?"
        text="Ask us directly — we would rather answer your specific situation than write around it."
        whatsappMessage="Hello Turiend, I have a question about a construction project."
        context="insights"
      />
    </>
  );
}
