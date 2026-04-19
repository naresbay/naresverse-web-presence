import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Rocket,
  ShieldCheck,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-gold.jpg";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naresverse — Studio Kreatif Premium untuk Brand Modern" },
      {
        name: "description",
        content:
          "Bangun brand premium yang dipercaya generasi muda. Naresverse menghadirkan desain, web, dan strategi konten kelas atas dengan hasil terukur.",
      },
      { property: "og:title", content: "Naresverse — Studio Kreatif Premium" },
      {
        property: "og:description",
        content:
          "Desain, web, dan strategi konten premium untuk brand modern.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Logo, tipografi, warna, dan sistem visual yang konsisten dan memorable.",
  },
  {
    icon: Layers,
    title: "Web & UI Design",
    desc: "Website premium yang cepat, responsif, dan dirancang untuk konversi.",
  },
  {
    icon: Rocket,
    title: "Konten & Sosial Media",
    desc: "Strategi konten harian yang membangun audiens dan menumbuhkan brand.",
  },
  {
    icon: ShieldCheck,
    title: "Konsultasi Brand",
    desc: "Pendampingan strategi agar brand kamu siap bersaing di level nasional.",
  },
];

const usps = [
  { num: "120+", label: "Brand muda dipercaya" },
  { num: "98%", label: "Klien puas & merekomendasikan" },
  { num: "5x", label: "Rata-rata peningkatan engagement" },
  { num: "24/7", label: "Dukungan tim responsif" },
];

const testimonials = [
  {
    name: "Alya Pranata",
    role: "Founder, Lumière Studio",
    quote:
      "Naresverse mengubah brand kami jadi terasa premium dalam waktu singkat. Hasilnya konsisten dan benar-benar menjual.",
  },
  {
    name: "Raka Wijaya",
    role: "CEO, Northwave Apparel",
    quote:
      "Tim yang sangat profesional, responsif, dan punya selera desain di atas rata-rata. Worth setiap rupiahnya.",
  },
  {
    name: "Sasha Mahendra",
    role: "Marketing Lead, Glow.id",
    quote:
      "Dari strategi konten sampai web, semuanya dieksekusi rapi. Konversi naik 3x dalam 2 bulan pertama.",
  },
];

const faqs = [
  {
    q: "Apa saja layanan yang ditawarkan Naresverse?",
    a: "Kami fokus pada brand identity, desain web premium, strategi konten, dan konsultasi brand untuk bisnis muda yang serius berkembang.",
  },
  {
    q: "Berapa lama waktu pengerjaan project?",
    a: "Tergantung skala project. Branding mini 7–10 hari kerja, website premium 14–21 hari kerja. Setiap timeline akan didiskusikan di awal.",
  },
  {
    q: "Apakah cocok untuk brand baru atau startup kecil?",
    a: "Sangat cocok. Justru di fase awal inilah pondasi brand harus dibangun premium agar tampil meyakinkan sejak hari pertama.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Sistem 50% di awal sebagai komitmen, 50% setelah project selesai dan kamu puas dengan hasilnya.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1536}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3 w-3" /> Studio Kreatif Premium
          </span>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl">
            Brand kamu pantas tampil <br className="hidden sm:block" />
            <span className="text-gradient-gold italic">seberkilau emas.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Naresverse membantu brand muda tampil profesional lewat desain,
            web, dan strategi konten kelas premium yang membuat audiens
            percaya sejak detik pertama.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
            >
              Konsultasi Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Lihat Portofolio
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>★ 4.9 / 5 dari 80+ ulasan</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>Dipercaya 120+ brand muda</span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>Berbasis di Jakarta</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <Section
      eyebrow="Tentang Naresverse"
      title={
        <>
          Studio kecil dengan{" "}
          <span className="text-gradient-gold italic">visi besar</span>.
        </>
      }
      description="Kami percaya brand muda berhak tampil sekelas brand global. Naresverse hadir untuk merapikan visual, memperjelas pesan, dan mempercepat pertumbuhan kamu lewat eksekusi yang presisi."
    />
  );
}

function Services() {
  return (
    <Section
      eyebrow="Layanan Kami"
      title={<>Solusi lengkap untuk brand modern.</>}
      description="Dari nol sampai naik kelas — semua tahapan brand kamu kami bantu kerjakan dengan standar tinggi."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-ink">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold" />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
        >
          Lihat semua layanan <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-ink/70 p-10 lg:p-16">
          <div className="absolute inset-0 -z-10 grid-noise opacity-10" />
          <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Kenapa Naresverse
              </span>
              <h2 className="mt-4 text-balance font-display text-4xl leading-tight sm:text-5xl">
                Bukan sekadar agensi —{" "}
                <span className="text-gradient-gold italic">partner brand</span>{" "}
                jangka panjang kamu.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Kami kerja seperti tim internal kamu sendiri: cepat, transparan,
                dan obsesif soal detail. Setiap output kami rancang agar bukan
                hanya cantik, tetapi juga menjual.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {usps.map((u) => (
                <div
                  key={u.label}
                  className="rounded-2xl border border-border bg-card/60 p-6"
                >
                  <div className="text-gradient-gold font-display text-4xl font-semibold">
                    {u.num}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{u.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <Section
      eyebrow="Testimoni"
      title={<>Cerita dari brand yang sudah naik kelas.</>}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7"
          >
            <div className="mb-4 flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-balance text-base leading-relaxed text-foreground/90">
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
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      eyebrow="FAQ"
      title={<>Pertanyaan yang sering diajukan.</>}
      align="center"
    >
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card/40">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
              >
                <span className="font-medium">{f.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className="px-6 pb-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/30 p-10 text-center lg:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-90" />
        <div className="absolute inset-0 -z-10 grid-noise opacity-20 mix-blend-overlay" />
        <h2 className="font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
          Siap membuat brand kamu <br className="hidden sm:block" />
          <span className="italic">terlihat juga terasa premium?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink/80">
          Konsultasi awal gratis. Tanpa tekanan, tanpa biaya tersembunyi —
          hanya diskusi jujur tentang masa depan brand kamu.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-gold shadow-elevated transition-transform hover:scale-105"
        >
          Mulai Konsultasi <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
