import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send, Check } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Naresverse" },
      {
        name: "description",
        content:
          "Hubungi tim Naresverse untuk konsultasi gratis tentang brand, website, dan strategi konten kamu.",
      },
      { property: "og:title", content: "Kontak Naresverse" },
      {
        property: "og:description",
        content: "Konsultasi gratis dengan tim Naresverse.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().trim().email("Email tidak valid").max(255),
  subject: z.string().trim().min(2, "Subjek wajib diisi").max(150),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title={
          <>
            Mari ngobrol soal{" "}
            <span className="text-gradient-gold italic">brand kamu</span>.
          </>
        }
        description="Konsultasi awal gratis. Ceritakan visi kamu — kami akan bantu eksekusinya jadi nyata."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-card/60 p-8 lg:p-10"
            noValidate
          >
            <h2 className="font-display text-2xl">Kirim Pesan</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tim kami akan membalas dalam 1×24 jam.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field
                label="Nama Lengkap"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Nama kamu"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="kamu@email.com"
              />
            </div>

            <div className="mt-5">
              <Field
                label="Subjek"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Saya butuh bantuan untuk..."
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Ceritakan brand & kebutuhan kamu..."
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Pesan Terkirim
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Kirim Pesan
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-border bg-card/60 p-8">
              <h3 className="font-display text-xl">Informasi Kontak</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <ContactItem icon={Mail} label="Email" value="halo@naresverse.id" />
                <ContactItem icon={Phone} label="Telepon" value="+62 812-3456-7890" />
                <ContactItem icon={MapPin} label="Lokasi" value="Jakarta, Indonesia" />
              </ul>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent p-6 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-ink">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-medium">Chat WhatsApp</div>
                <div className="text-xs text-muted-foreground">
                  Respon tercepat — biasanya dalam hitungan menit.
                </div>
              </div>
            </a>

            <div className="rounded-3xl border border-border bg-card/60 p-8">
              <h3 className="font-display text-xl">Jam Operasional</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Senin – Jumat</span><span>09.00 – 18.00</span></li>
                <li className="flex justify-between"><span>Sabtu</span><span>10.00 – 15.00</span></li>
                <li className="flex justify-between"><span>Minggu</span><span>Tutup</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/40 text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 font-medium">{value}</div>
      </div>
    </li>
  );
}
