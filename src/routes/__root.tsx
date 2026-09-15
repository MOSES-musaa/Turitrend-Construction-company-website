import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { WhatsAppFloat } from "@/components/site/whatsapp-button";
import { company, defaultWhatsappMessage } from "@/lib/company";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label-tech text-accent">Error 404</p>
        <h1 className="display-2 mt-4">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary"
          >
            Go home
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center justify-center border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            View services
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-3">This page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something went wrong on our end. Try again, or call us on {company.phone}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Turitrend Construction Limited | Building & Civil Works, Kenya" },
      {
        name: "description",
        content:
          "Turitrend Construction Limited — building works, renovations, fencing and gates, biodigesters, road, electrical and water works, and project management in Kenya.",
      },
      { name: "author", content: "Turitrend Construction Limited" },
      { property: "og:site_name", content: "Turitrend Construction Limited" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1d2027" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: company.name,
          description:
            "Kenyan construction company providing building works, renovations, civil works, water works, electrical works, perimeter and access works, biodigester works and project management.",
          telephone: company.phone,
          email: company.email,
          areaServed: "Kenya",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
            postOfficeBoxNumber: "317 – 10106, Othaya",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="pb-14 md:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat message={defaultWhatsappMessage} />
      <MobileActionBar />
    </QueryClientProvider>
  );
}
