import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { generalFaqs } from "@/lib/company";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Answers on quotations, building works, renovations, fencing and gates, biodigesters, road, electrical and water works, and project management in Kenya.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Turiend Construction" },
      {
        property: "og:description",
        content: "Common questions about working with Turiend Construction Limited in Kenya.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(generalFaqs.map((f) => f.category)))],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return generalFaqs.filter((faq) => {
      const inCategory = category === "All" || faq.category === category;
      const inQuery = !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        index="01"
        eyebrow="FAQs"
        title="Questions clients ask us."
        intro="Straight answers on scope, quotations and what each service actually involves."
      />

      <section className="container-x section-y">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <label htmlFor="faq-search" className="label-tech text-muted-foreground">
                Search FAQs
              </label>
              <div className="relative mt-3">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. quotation, gate, biodigester"
                  className="min-h-11 w-full border border-input bg-card py-3 pr-3 pl-9 text-sm outline-none focus:border-ink"
                />
              </div>

              <p className="label-tech mt-8 text-muted-foreground">Categories</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={cn(
                      "min-h-11 border px-3.5 py-2 text-xs font-medium transition-colors",
                      category === c
                        ? "border-ink bg-ink text-ink-foreground"
                        : "border-line hover:border-ink",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="label-tech text-muted-foreground" aria-live="polite">
              {results.length} {results.length === 1 ? "question" : "questions"}
            </p>
            {results.length === 0 ? (
              <p className="mt-8 border border-line bg-card p-8 text-sm leading-relaxed text-muted-foreground">
                Nothing matches that search. Try a different word, or ask us directly on WhatsApp —
                we answer questions that are not listed here.
              </p>
            ) : (
              <Accordion type="single" collapsible className="mt-4">
                {results.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`faq-${i}`} className="border-line">
                    <AccordionTrigger className="py-5 text-left text-base font-semibold tracking-tight hover:no-underline">
                      <span>
                        <span className="label-tech mb-1.5 block text-accent">{faq.category}</span>
                        {faq.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Still need an answer?"
        text="Send us the question with a little detail about the property and we will respond."
        whatsappMessage="Hello Turiend, I have a question about your construction services."
        context="faqs"
      />
    </>
  );
}
