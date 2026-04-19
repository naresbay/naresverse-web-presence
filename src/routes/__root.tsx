import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Naresverse — Studio Kreatif Premium untuk Brand Modern" },
      {
        name: "description",
        content:
          "Naresverse membantu brand muda tampil profesional lewat desain, web, dan strategi konten kelas premium dengan sentuhan emas.",
      },
      { name: "author", content: "Naresverse" },
      { property: "og:title", content: "Naresverse — Studio Kreatif Premium" },
      {
        property: "og:description",
        content:
          "Desain, web, dan strategi konten premium untuk brand modern.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sepertinya kamu tersesat di semesta yang lain.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
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
    <div className="relative min-h-screen">
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
