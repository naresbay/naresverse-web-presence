import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo Naresverse, saya tertarik dengan layanan kalian.",
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-gradient-gold px-4 py-3 text-ink shadow-gold transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat Kami</span>
    </a>
  );
}
