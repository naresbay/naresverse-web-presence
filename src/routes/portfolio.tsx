import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Star } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portofolio — Naresverse" },
      {
        name: "description",
        content:
          "Kumpulan project terbaik Naresverse — brand muda yang sudah naik kelas bersama kami.",
      },
      { property: "og:title", content: "Portofolio Naresverse" },
      {
        property: "og:description",
        content: "Brand muda yang sudah naik kelas bersama Naresverse.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Lumière Studio",
    category: "Brand Identity & Web",
    color: "from-amber-500/30 to-yellow-700/10",
    desc: "Rebranding studio fotografi premium dengan kenaikan booking 4x.",
  },
  {
    title: "Northwave Apparel",
    category: "E-commerce Premium",
    color: "from-yellow-600/30 to-amber-900/10",
    desc: "Toko fashion streetwear dengan konversi 3.2% di bulan pertama.",
  },
  {
    title: "Glow.id",
    category: "Konten & Sosial Media",
    color: "from-amber-400/30 to-orange-700/10",
    desc: "Strategi konten skincare yang menambah 40rb followers organik.",
  },
  {
    title: "Mara Coffee",
    category: "Brand Identity",
    color: "from-yellow-700/30 to-amber-500/10",
    desc: "Identitas baru kedai kopi spesialti dengan estetika earthy modern.",
  },
  {
    title: "Velora Fit",
    category: "Web & UI Design",
    color: "from-amber-600/30 to-yellow-500/10",
    desc: "Platform fitness app dengan UI premium dan retensi tinggi.",
  },
  {
    title: "Aurum Jewelry",
    category: "Brand Empire",
    color: "from-yellow-500/30 to-amber-800/10",
    desc: "Brand perhiasan modern dengan ekosistem konten dan e-commerce.",
  },
];

const testimonials = [
  {
    name: "Alya Pranata",
    role: "Founder, Lumière Studio",
    quote:
      "Naresverse mengerti apa yang kami butuhkan bahkan sebelum kami selesai menjelaskan. Hasilnya jauh melebihi ekspektasi.",
  },
  {
    name: "Raka Wijaya",
    role: "CEO, Northwave Apparel",
    quote:
      "Tim yang sangat profesional. Eksekusi cepat, kualitas tetap premium. Worth setiap rupiahnya.",
  },
  {
    name: "Sasha Mahendra",
    role: "Marketing Lead, Glow.id",
    quote:
      "Strategi konten mereka membuat brand kami jadi terasa hidup. Engagement naik drastis.",
  },
  {
    name: "Dimas Aryasatya",
    role: "Owner, Mara Coffee",
    quote:
      "Branding yang mereka buat benar-benar menangkap jiwa kedai kami. Pelanggan langsung relate.",
  },
];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title={
          <>
            Setiap project adalah{" "}
            <span className="text-gradient-gold italic">cerita kemenangan</span>.
          </>
        }
        description="Inilah sebagian brand muda yang sudah mempercayakan visualnya kepada Naresverse."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
            >
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 grid-noise opacity-30" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-display text-7xl text-gradient-gold opacity-30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Testimoni Klien"
        title={<>Mereka yang sudah merasakan hasilnya.</>}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card/60 p-8"
            >
              <div className="mb-4 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-balance text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
