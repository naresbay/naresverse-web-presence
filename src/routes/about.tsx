import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import aboutImg from "@/assets/about-team.jpg";
import { Award, Heart, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Naresverse" },
      {
        name: "description",
        content:
          "Kenali Naresverse — studio kreatif yang membangun brand premium untuk generasi muda Indonesia.",
      },
      { property: "og:title", content: "Tentang Naresverse" },
      {
        property: "og:description",
        content: "Cerita di balik studio kreatif Naresverse.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Penuh Hati", desc: "Setiap project kami kerjakan seperti project sendiri." },
  { icon: Target, title: "Fokus Hasil", desc: "Bukan hanya cantik — harus terukur dan menjual." },
  { icon: Award, title: "Standar Tinggi", desc: "Kami menolak hasil yang biasa-biasa saja." },
  { icon: Users, title: "Kolaboratif", desc: "Kami dengar dulu, baru bicara solusi." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title={
          <>
            Studio kreatif untuk{" "}
            <span className="text-gradient-gold italic">generasi berani</span>.
          </>
        }
        description="Naresverse lahir dari obsesi untuk membuat brand muda Indonesia tampil setara dengan brand global. Kami bukan agensi besar — kami tim kecil yang fokus, cepat, dan selalu ada untuk kamu."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20">
            <img
              src={aboutImg}
              alt="Tim Naresverse di studio"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Cerita Kami
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Bermula dari satu keyakinan sederhana.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Bahwa setiap brand muda — sekecil apa pun — pantas tampil
              meyakinkan. Naresverse dibangun oleh tim desainer, developer,
              dan strategist muda yang lelah melihat ide-ide brilian gagal
              hanya karena eksekusi visual yang lemah.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sejak 2022, kami sudah membantu lebih dari 120 brand untuk
              menemukan suara visualnya, membangun kehadiran online yang
              kuat, dan mengubah pengikut menjadi pelanggan loyal.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold"
            >
              Ngobrol Bareng Kami
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Nilai Kami"
        title={<>Empat hal yang tidak pernah kami kompromikan.</>}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-border bg-card/60 p-7"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-ink">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
