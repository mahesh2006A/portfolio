import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That route is off the circuit board.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-[var(--neon-cyan)] px-4 py-2 text-sm font-medium text-primary-foreground glow-hover">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kotamahanti Mahesh — ECE | IoT & Embedded Systems" },
      { name: "description", content: "Portfolio of Kotamahanti Mahesh, an ECE student specializing in IoT and embedded systems. Explore projects, skills, and services." },
      { name: "author", content: "Kotamahanti Mahesh" },
      { property: "og:title", content: "Kotamahanti Mahesh — ECE | IoT & Embedded Systems" },
      { property: "og:description", content: "Portfolio of Kotamahanti Mahesh, an ECE student specializing in IoT and embedded systems. Explore projects, skills, and services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kotamahanti Mahesh — ECE | IoT & Embedded Systems" },
      { name: "twitter:description", content: "Portfolio of Kotamahanti Mahesh, an ECE student specializing in IoT and embedded systems. Explore projects, skills, and services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/430132e8-9cac-47e8-a145-d4d162ac4b07/id-preview-ecdfcbf2--25645444-5bcd-42e9-97df-551a888c0bd8.lovable.app-1777791917842.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/430132e8-9cac-47e8-a145-d4d162ac4b07/id-preview-ecdfcbf2--25645444-5bcd-42e9-97df-551a888c0bd8.lovable.app-1777791917842.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
