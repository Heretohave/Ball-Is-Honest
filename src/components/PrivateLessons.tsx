import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

type Dict = (typeof dictionaries)[Locale];

const WHATSAPP_NUMBER = "421917471085";

export default function PrivateLessons({ locale, dict }: { locale: Locale; dict: Dict }) {
  const message =
    locale === "en"
      ? "Hi Juraj, I'd like to book a private lesson."
      : "Dobrý deň Juraj, mám záujem o súkromnú lekciu.";
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-sand-50 border-t border-sand-200">
      <div aria-hidden="true" className="fairway-stripes absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white ring-1 ring-sand-200 shadow-soft mb-6">
          <GolfBallMark className="h-6 w-6 text-fairway-700" />
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-fairway-900">{dict.lessons.title}</h2>
        <p className="mt-3 text-fairway-700 max-w-2xl mx-auto text-balance">{dict.lessons.subtitle}</p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 shadow-soft transition-all hover:bg-fairway-800 hover:shadow-lift hover:-translate-y-0.5"
        >
          {dict.lessons.cta}
        </a>
      </div>
    </section>
  );
}
