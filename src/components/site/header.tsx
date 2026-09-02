import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/turiend-logo.jpg.asset.json";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/insights", label: "Insights" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Link to="/" className="flex items-center" aria-label="Turiend Construction Limited — home">
          <img
            src={logo.url}
            alt="Turiend Construction Limited"
            width={220}
            height={64}
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-8 md:h-9" : "h-10 md:h-12",
            )}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-accent [&.active]:text-accent"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaLink to="/quote" variant="ink" size="sm" className="hidden sm:inline-flex">
            Request a Quote
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center border border-line lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-line bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-2">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-5 text-2xl font-semibold tracking-tight [&.active]:text-accent"
                activeOptions={{ exact: item.to === "/" }}
              >
                <span className="label-tech text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            ))}
            <CtaLink
              to="/quote"
              variant="accent"
              size="lg"
              className="mt-6 mb-28"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </CtaLink>
          </nav>
        </div>
      )}
    </header>
  );
}
