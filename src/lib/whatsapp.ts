import type { Locale } from "@/i18n/config";

// Juraj's booking number, in international format without "+" (wa.me requirement).
export const WHATSAPP_NUMBER = "421917471085";

const BOOKING_MESSAGE: Record<Locale, string> = {
  en: "Hi Juraj, I'd like to book a private lesson.",
  sk: "Dobrý deň Juraj, mám záujem o súkromnú lekciu.",
};

/** Deep link that opens WhatsApp with a prefilled booking message. */
export function bookingWhatsAppHref(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE[locale])}`;
}
