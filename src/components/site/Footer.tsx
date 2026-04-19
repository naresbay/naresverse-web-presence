import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-ink/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-ink font-display text-lg font-bold">
              N
            </span>
            <span className="font-display text-2xl tracking-tight">
              Nares<span className="text-gradient-gold">verse</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Studio kreatif yang membantu brand muda tampil profesional, modern,
            dan siap mendominasi era digital.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">
            Navigasi
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-foreground">Tentang</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Layanan</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portofolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">
            Kontak
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Jakarta, Indonesia</li>
            <li>halo@naresverse.id</li>
            <li>+62 812-3456-7890</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Naresverse. Hak cipta dilindungi.</p>
          <p>Dibuat dengan presisi & sentuhan emas.</p>
        </div>
      </div>
    </footer>
  );
}
