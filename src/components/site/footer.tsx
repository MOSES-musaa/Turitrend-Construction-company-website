import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { company, services } from "@/lib/company";
import { track } from "@/lib/analytics";
import { navItems } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-px bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <img
            src={logo}
            alt="Turitrend Construction Limited"
            width={220}
            height={64}
            loading="lazy"
            className="h-11 w-auto bg-ink-foreground px-2 py-1"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
            {company.name} is a Kenyan construction company covering building works, renovations,
            civil works, water and electrical installations, perimeter and access works,
            biodigesters, and project and property management.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <h2 className="label-tech text-ink-muted">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="label-tech text-ink-muted">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic md:col-span-2">
          <h2 className="label-tech text-ink-muted">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={company.phoneHref}
                onClick={() => track("phone_click", { context: "footer" })}
                className="flex items-start gap-2.5 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={company.emailHref}
                onClick={() => track("email_click", { context: "footer" })}
                className="flex items-start gap-2.5 break-all transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-ink-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {company.location}
                <br />
                {company.postal}
              </span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="label-tech">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
