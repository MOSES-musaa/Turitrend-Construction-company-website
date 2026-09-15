import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta";
import { navItems } from "@/lib/navigation";

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
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Turiend Construction Limited — home"
        >
          <img
            src={logo}
            alt="Turiend Construction Limited"
            width={280}
            height={82}
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-10 md:h-11" : "h-12 md:h-14",
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
          className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-background shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-2">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline border-b border-line py-5 text-2xl font-semibold tracking-tight [&.active]:text-accent"
                activeOptions={{ exact: item.to === "/" }}
              >
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
