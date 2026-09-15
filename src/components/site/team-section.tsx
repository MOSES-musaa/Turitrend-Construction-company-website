import { Reveal } from "@/components/site/reveal";
import { teamMembers } from "@/lib/team";

function TeamAvatar({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      className="relative aspect-square w-full overflow-hidden bg-surface"
      aria-label={`${name} photo placeholder`}
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--line) / 0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--line) / 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Placeholder portrait */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-background text-xl font-semibold tracking-tight text-muted-foreground">
          {initials}
        </div>
      </div>

      {/* Technical corner accent */}
      <div className="absolute bottom-0 right-0 h-10 w-10 bg-accent" aria-hidden="true" />

      {/* Initials marker */}
      <span className="absolute bottom-2 right-2 z-10 text-xs font-semibold tracking-widest text-accent-foreground">
        {initials}
      </span>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Architectural background detail */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] lg:block"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 h-80 w-full bg-linear-to-bl from-surface via-background to-transparent" />

        <div className="absolute right-12 top-16 h-64 w-48 border-l border-t border-line/70" />

        <div className="absolute right-24 top-28 h-56 w-40 border-l border-t border-line/50" />

        <div className="absolute right-0 top-48 h-px w-72 rotate-[-28deg] bg-accent/30" />
      </div>

      <div className="container-x pb-20 pt-8 md:pb-24 md:pt-10 relative">
        {/* Section introduction */}
        <Reveal>
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-line" aria-hidden="true" />

              <span className="label-tech text-muted-foreground">Our team</span>
            </div>

            <div className="mt-8 max-w-4xl">
              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-tight md:text-5xl lg:text-6xl">
                The People Behind
                <br />
                Our Work.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Our team brings together experience, professionalism and a shared commitment to
                delivering quality construction solutions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Team cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 70} className="group">
              <article className="h-full overflow-hidden border border-line bg-background transition-colors duration-300 hover:border-accent/40">
                {/* Profile header */}
                <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-5 p-5 md:grid-cols-[8rem_minmax(0,1fr)] md:p-6">
                  <TeamAvatar initials={member.initials} name={member.name} />

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    </div>

                    <h3 className="mt-4 text-xl font-semibold uppercase leading-tight tracking-tight md:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-accent">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="border-t border-line px-5 py-6 md:px-6">
                  <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Team principles */}
        <Reveal delay={180}>
          <div className="mt-12 grid border-y border-line md:grid-cols-3">
            <div className="border-b border-line py-6 md:border-b-0 md:border-r md:px-8 md:first:pl-0">
              <h3 className="mt-3 text-lg font-semibold tracking-tight">A Collaborative Team</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                We work together towards shared goals and better project outcomes.
              </p>
            </div>

            <div className="border-b border-line py-6 md:border-b-0 md:border-r md:px-8">
              <h3 className="mt-3 text-lg font-semibold tracking-tight">Professional Standards</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                We uphold high standards in planning, coordination and delivery.
              </p>
            </div>

            <div className="py-6 md:px-8 md:pr-0">
              <h3 className="mt-3 text-lg font-semibold tracking-tight">Results Driven</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                We focus on practical solutions and quality delivery from start to completion.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
