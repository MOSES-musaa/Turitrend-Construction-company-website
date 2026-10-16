import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/page-hero";
import { company } from "@/lib/company";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "data-controller", label: "Who is responsible for your data" },
  { id: "data-collected", label: "Personal data we collect" },
  { id: "collection", label: "How we collect your data" },
  { id: "purposes", label: "Why we use your data" },
  { id: "sharing", label: "Who we share your data with" },
  { id: "transfers", label: "International transfers" },
  { id: "cookies", label: "Cookies and website analytics" },
  { id: "retention", label: "How long we keep your data" },
  { id: "security", label: "How we protect your data" },
  { id: "rights", label: "Your rights" },
  { id: "complaints", label: "Complaints" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
] as const;

const processingPurposes = [
  {
    purpose: "Responding to enquiries and quote requests",
    basis: "Steps taken at your request before entering a contract; our legitimate interests.",
  },
  {
    purpose: "Preparing quotations and contracts, and delivering works",
    basis: "Performance of a contract.",
  },
  {
    purpose: "Project and property management, supervision and reporting",
    basis: "Performance of a contract.",
  },
  {
    purpose: "Invoicing, accounting, tax and record keeping",
    basis: "Legal obligation.",
  },
  {
    purpose: "Meeting health, safety, building and regulatory requirements",
    basis: "Legal obligation.",
  },
  {
    purpose: "Keeping you updated about your project",
    basis: "Performance of a contract; our legitimate interests.",
  },
  {
    purpose: "Improving our website and services",
    basis: "Our legitimate interests; consent where cookies require it.",
  },
  {
    purpose: "Sending news or promotional material, if any",
    basis: "Your consent, which you may withdraw at any time.",
  },
  {
    purpose: "Protecting our rights and handling disputes or claims",
    basis: "Our legitimate interests; legal obligation.",
  },
] as const;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Turiend Construction Limited" },
      {
        name: "description",
        content:
          "Learn how Turiend Construction Limited collects, uses, protects and retains personal data in accordance with Kenya's Data Protection Act, 2019.",
      },
      { property: "og:title", content: "Privacy Policy | Turiend Construction Limited" },
      {
        property: "og:description",
        content:
          "How Turiend Construction Limited handles personal data and the rights available to you.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This policy explains what personal data we collect, why we collect it, how we protect it, and the rights you have."
      >
        <p className="text-sm text-ink-muted">
          Turiend Construction Limited <span aria-hidden="true">·</span> Effective date: October 16,
          2026
        </p>
      </PageHero>

      <div className="container-x grid gap-12 py-14 md:grid-cols-12 md:gap-16 md:py-20">
        <aside className="md:col-span-4 lg:col-span-3">
          <nav
            aria-label="Privacy policy sections"
            className="top-24 border-y border-line py-5 md:sticky md:border-t-0"
          >
            <p className="label-tech text-muted-foreground">On this page</p>
            <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex gap-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="label-tech text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 space-y-12 md:col-span-8 lg:col-span-9">
          <PolicySection id="introduction" number="01" title="Introduction">
            <p>
              Turiend Construction Limited (&ldquo;Turiend&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a Kenyan construction company providing
              building works, renovations, civil works, water and electrical installations,
              perimeter and access works, biodigester works, and project and property management.
            </p>
            <p>
              We respect your privacy and are committed to protecting your personal data. This
              policy explains what personal data we collect, why we collect it, how we use and
              protect it, and the rights you have. It is intended to comply with the Data Protection
              Act, 2019 of Kenya and the regulations made under it.
            </p>
            <p>
              By using our website, requesting a quote, or contacting us, you acknowledge that you
              have read this policy.
            </p>
          </PolicySection>

          <PolicySection id="data-controller" number="02" title="Who is responsible for your data">
            <p>
              For the purposes of the Data Protection Act, Turiend Construction Limited is the data
              controller of the personal data described in this policy.
            </p>
            <dl className="mt-5 grid overflow-hidden border border-line sm:grid-cols-2">
              <Detail label="Company">{company.name}</Detail>
              <Detail label="Location">{company.location}</Detail>
              <Detail label="Postal address">{company.postal}</Detail>
              <Detail label="Telephone / WhatsApp">
                <a className="hover:text-accent" href={company.phoneHref}>
                  {company.phone}
                </a>
              </Detail>
              <Detail label="Email">
                <a
                  className="break-all hover:text-accent"
                  href="mailto:info@turiendconstruction.co.ke"
                >
                  info@turiendconstruction.co.ke
                </a>
              </Detail>
              <Detail label="Website">turiendconstruction.co.ke</Detail>
            </dl>
          </PolicySection>

          <PolicySection id="data-collected" number="03" title="Personal data we collect">
            <p>
              We collect only the information we need to respond to you and deliver our services.
              Depending on how you deal with us, this may include:
            </p>
            <ul>
              <li>
                <strong>Identity and contact details:</strong> your name, telephone number, email
                address and postal address.
              </li>
              <li>
                <strong>Project information:</strong> the location and description of your site or
                property, the type of work you need, budget ranges, timelines, plans, drawings and
                photographs you share with us.
              </li>
              <li>
                <strong>Communications:</strong> the content of messages, emails, WhatsApp chats and
                call notes exchanged with us.
              </li>
              <li>
                <strong>Contract and payment details:</strong> information needed to prepare
                quotations, agreements, invoices and receipts, and records of payments made to or by
                us.
              </li>
              <li>
                <strong>Technical information:</strong> where our website uses cookies or analytics
                tools, data such as your IP address, browser type, device, pages visited and the
                date and time of your visit.
              </li>
            </ul>
            <p>
              We do not knowingly collect sensitive personal data, such as health, religious or
              political information. Please do not include it in your messages. We do not knowingly
              collect data from children under 18.
            </p>
          </PolicySection>

          <PolicySection id="collection" number="04" title="How we collect your data">
            <ul>
              <li>
                Directly from you when you complete the quote request form, call us, email us or
                message us on WhatsApp.
              </li>
              <li>During site visits, assessments, meetings and the course of a project.</li>
              <li>Automatically through our website, via cookies and similar technologies.</li>
              <li>
                From third parties, such as your architect, engineer, property manager or other
                representative, where you have asked them to deal with us on your behalf.
              </li>
            </ul>
          </PolicySection>

          <PolicySection
            id="purposes"
            number="05"
            title="Why we use your data and our lawful basis"
          >
            <p>
              We use personal data for the purposes below and rely on the lawful bases shown. We
              will not use your personal data for an incompatible purpose without informing you and,
              where required, obtaining your consent.
            </p>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {processingPurposes.map((item) => (
                <div key={item.purpose} className="grid gap-2 py-4 sm:grid-cols-2 sm:gap-6">
                  <dt className="font-medium text-foreground">{item.purpose}</dt>
                  <dd className="text-sm">{item.basis}</dd>
                </div>
              ))}
            </dl>
          </PolicySection>

          <PolicySection id="sharing" number="06" title="Who we share your data with">
            <p>
              We do not sell your personal data. We share it only where necessary, and only with:
            </p>
            <ul>
              <li>
                Subcontractors, suppliers, engineers, surveyors and other professionals working with
                us on your project, limited to what they need to do their work.
              </li>
              <li>
                Service providers that support our business, such as website hosting, email,
                messaging (including WhatsApp), accounting and IT providers.
              </li>
              <li>Professional advisers, such as lawyers, auditors and insurers.</li>
              <li>
                Government and regulatory bodies, county authorities, courts and law enforcement,
                where the law requires or permits us to do so.
              </li>
              <li>
                A buyer or successor if our business is restructured or sold, subject to this policy
                continuing to protect your data.
              </li>
            </ul>
            <p>
              Where we engage third parties to process data on our behalf, we require them to
              protect it and use it only on our instructions.
            </p>
          </PolicySection>

          <PolicySection id="transfers" number="07" title="International transfers">
            <p>
              Some of our service providers, such as email, messaging and hosting platforms, may
              store or process data outside Kenya. Where this happens, we will take reasonable steps
              to ensure that your data is transferred only where adequate safeguards are in place,
              as required by the Data Protection Act, 2019.
            </p>
          </PolicySection>

          <PolicySection id="cookies" number="08" title="Cookies and website analytics">
            <p>
              Our website may use cookies and similar technologies to make the site work, remember
              your preferences and understand how it is used. You can control or delete cookies
              through your browser settings. Disabling some cookies may affect how the website
              works. If we introduce non-essential cookies or analytics tools, we will update this
              policy and seek your consent where required.
            </p>
            <p>
              Our website contains links to WhatsApp and other third-party services. Those services
              have their own privacy policies, and we are not responsible for their practices.
            </p>
          </PolicySection>

          <PolicySection id="retention" number="09" title="How long we keep your data">
            <p>
              We keep personal data only for as long as needed for the purposes in this policy,
              including to meet legal, accounting and reporting requirements. As a general guide:
            </p>
            <ul>
              <li>
                Enquiries that do not lead to a project: up to 12 months from our last contact.
              </li>
              <li>
                Client and project records, contracts and payment records: for the duration of the
                project and for at least seven years afterwards, or longer where the law requires.
              </li>
              <li>Marketing preferences: until you withdraw your consent.</li>
            </ul>
            <p>When data is no longer needed, we will securely delete or anonymise it.</p>
          </PolicySection>

          <PolicySection id="security" number="10" title="How we protect your data">
            <p>
              We use reasonable organisational and technical measures to protect personal data
              against loss, misuse, unauthorised access, disclosure and alteration. These include
              restricting access to those who need it, using password-protected devices and
              accounts, and choosing service providers with appropriate security. No method of
              transmission or storage is completely secure, so we cannot guarantee absolute
              security.
            </p>
            <p>
              If a data breach is likely to put your rights and freedoms at risk, we will notify the
              Office of the Data Protection Commissioner and, where required, affected individuals,
              within the timelines set by law.
            </p>
          </PolicySection>

          <PolicySection id="rights" number="11" title="Your rights">
            <p>Under the Data Protection Act, 2019, you have the right to:</p>
            <ul>
              <li>be informed of how your personal data is used;</li>
              <li>access the personal data we hold about you;</li>
              <li>object to the processing of all or part of your personal data;</li>
              <li>ask us to correct inaccurate or incomplete data;</li>
              <li>
                ask us to delete data that is false, misleading or no longer needed, subject to our
                legal obligations;
              </li>
              <li>
                receive your data in a structured, commonly used format, where applicable (data
                portability); and
              </li>
              <li>
                withdraw your consent at any time where we rely on consent. This will not affect
                processing already carried out.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us using the details in section 14. We may
              need to verify your identity before acting on a request, and we will respond within
              the period set by law.
            </p>
          </PolicySection>

          <PolicySection id="complaints" number="12" title="Complaints">
            <p>
              If you have a concern about how we handle your data, please contact us first so we can
              try to resolve it. You also have the right to lodge a complaint with the{" "}
              <a
                href="https://www.odpc.go.ke/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline decoration-accent underline-offset-4"
              >
                Office of the Data Protection Commissioner of Kenya
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection id="changes" number="13" title="Changes to this policy">
            <p>
              We may update this policy from time to time. The latest version will always be
              available on our website with its effective date. If we make significant changes, we
              will take reasonable steps to let you know.
            </p>
          </PolicySection>

          <PolicySection id="contact" number="14" title="Contact us">
            <p>
              For questions about this policy or to exercise your rights, contact Turiend
              Construction Limited:
            </p>
            <address className="mt-5 not-italic">
              <p className="font-semibold text-foreground">{company.name}</p>
              <ul className="policy-contact-list mt-3 space-y-2">
                <li>
                  Email:{" "}
                  <a
                    className="font-medium text-foreground underline decoration-accent underline-offset-4"
                    href="mailto:info@turiendconstruction.co.ke"
                  >
                    info@turiendconstruction.co.ke
                  </a>
                </li>
                <li>
                  Telephone / WhatsApp:{" "}
                  <a className="font-medium text-foreground" href={company.phoneHref}>
                    {company.phone}
                  </a>
                </li>
                <li>Postal address: {company.postal}</li>
              </ul>
            </address>
          </PolicySection>
        </article>
      </div>
    </>
  );
}

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <div className="border-t border-line pt-5">
        <p className="label-tech text-accent">Section {number}</p>
        <h2
          id={`${id}-heading`}
          className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </h2>
        <div className="policy-copy mt-5 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
          {children}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-b border-line p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
      <dt className="label-tech text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-sm font-medium text-foreground">{children}</dd>
    </div>
  );
}
