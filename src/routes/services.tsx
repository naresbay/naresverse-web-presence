import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan & Produk — Naresverse" },
      {
        name: "description",
        content:
          "Brand identity, web premium, strategi konten, dan konsultasi brand — semua yang brand kamu butuhkan untuk naik kelas.",
      },
      { property: "og:title", content: "Layanan Naresverse" },
      {
        property: "og:description",
        content:
          "Layanan kreatif premium: branding, website, dan konten.",
      },
    ],
  }),
  component: ServicesPage,
});

const packages = [
  {
    name: "Brand Starter",
    price: "Rp 4.9jt",
    tagline: "Untuk brand baru yang siap tampil meyakinkan.",
    features: [
      "Logo utama + variasi",
      "Color palette & tipografi",
      "3 template sosial media",
      "Brand guideline ringkas",
    ],
  },
  {
    name: "Brand Premium",
    price: "Rp 12jt",
    tagline: "Paling populer untuk brand serius berkembang.",
    features: [
      "Full brand identity system",
      "Website 5 halaman premium",
      "10 template konten",
      "Strategi konten 1 bulan",
      "Revisi tanpa batas",
    ],
    featured: true,
  },
  {
    name: "Brand Empire",
    price: "Custom",
    tagline: "Solusi end-to-end untuk brand skala besar.",
    features: [
      "Brand strategy lengkap",
      "Website unlimited halaman",
      "Manajemen konten bulanan",
      "Iklan & growth strategy",
      "Dedicated team & support",
    ],
  },
];

const productCategories = [
  {
    title: "Brand Identity",
    desc: "Pondasi visual brand kamu — dari logo, warna, tipografi, hingga sistem desain lengkap.",
    items: ["Logo Design", "Brand Guideline", "Visual System", "Naming"],
  },
  {
    title: "Web & Digital",
    desc: "Website cepat, premium, dan dirancang untuk konversi tinggi di semua perangkat.",
    items: ["Landing Page", "Company Profile", "E-commerce", "UI/UX Design"],
  },
  {
    title: "Konten & Sosial",
    desc: "Konten konsisten yang membangun trust dan menumbuhkan komunitas brand kamu.",
    items: ["Content Strategy", "Feed Design", "Copywriting", "Video Editing"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan & Produk"
        title={
          <>
            Semua yang brand kamu butuhkan,{" "}
            <span className="text-gradient-gold italic">di satu tempat.</span>
          </>
        }
        description="Dari nol sampai naik kelas. Pilih layanan satuan atau paket lengkap — kami sesuaikan dengan tahap pertumbuhan brand kamu."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {productCategories.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-card/60 p-8 transition-all hover:border-gold/40"
            >
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              <ul className="mt-6 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Paket Pilihan"
        title={<>Pilih paket yang pas dengan brand kamu.</>}
        description="Harga transparan. Tidak ada biaya tersembunyi. Semua paket bisa disesuaikan."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.featured
                  ? "border-gold/60 bg-gradient-to-b from-gold/10 to-transparent shadow-gold"
                  : "border-border bg-card/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
                  Paling Populer
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-6">
                <span className="font-display text-4xl text-gradient-gold">
                  {p.price}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-gold text-ink shadow-gold"
                    : "border border-border text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                Mulai Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
