import { createFileRoute } from "@tanstack/react-router";
import blueprint from "@/assets/blueprint-lines.jpg";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { processSteps } from "@/lib/company";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Our six-step project journey: understand, assess, plan and cost, mobilise, execute and supervise, complete and hand over.",
      },
      { property: "og:title", content: "How We Work | Turiend Construction Limited" },
      {
        property: "og:description",
        content: "The six steps a Turiend project moves through, from first conversation to handover.",
      },
    ],
  }),
  component: HowWeWork,
});

const detail: Record<string, string[]> = {
  "01": [
    "A first conversation about what you want to achieve, the property, and any constraints you already know about.",
    "We ask about budget range and timing early — it changes what we would recommend.",
  ],
  "02": [
    "A site visit where the works require it. We look at existing conditions, access, services and anything that will affect sequencing.",
    "Drawings, specifications or an existing bill of quantities are reviewed at this stage.",
  ],
  "03": [
    "We set out the approach and the cost information against a defined scope.",
    "Where there are options — materials, phasing, specification — we put the cost difference in front of you rather than deciding for you.",
  ],
  "04": [
    "Resources, materials and the trades required are organised before work starts on site.",
    "Site setup and any temporary arrangements are agreed with you.",
  ],
  "05": [
    "Work proceeds to the agreed scope with supervision on site.",
    "Progress, workmanship and coordination between trades are monitored, and you are kept informed as the work moves.",
  ],
  "06": [
    "Completed works are reviewed against the agreed scope.",
    "Outstanding items are tracked to completion before the project is closed out and handed over.",
  ],
};

function HowWeWork() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="How we work"
        title="Six steps, in the same order, every time."
        intro="Whether the job is a set of repairs or a full building, the sequence is what keeps scope, cost and programme under control."
      />

      <section className="container-x section-y">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <ol>
              {processSteps.map((step, i) => (
                <Reveal
                  key={step.number}
                  as="li"
                  delay={i * 50}
                  className="grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-[6rem_1fr] md:gap-8"
                >
                  <span className="label-tech pt-2 text-accent">{step.number}</span>
                  <div>
                    <h2 className="display-3">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
                      {step.text}
                    </p>
                    <ul className="mt-5 max-w-2xl space-y-2.5">
                      {(detail[step.number] ?? []).map((d) => (
                        <li
                          key={d}
                          className="border-l-2 border-line pl-4 text-sm leading-relaxed text-muted-foreground"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="md:col-span-4">
            <div className="sticky top-28">
              <img
                src={blueprint}
                alt="Isometric technical drawing of a building frame and roof structure"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full border border-line object-cover"
              />
              <SectionHeading
                className="mt-10"
                eyebrow="Reporting"
                title="You always know where the project stands"
                as="h2"
              />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Reporting frequency and format are agreed at the start of the engagement, so there
                is no ambiguity about when you will hear from us or what will be covered.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Start at step one."
        text="Tell us what you are planning and we will take it from understanding the requirement."
        context="how_we_work"
      />
    </>
  );
}
