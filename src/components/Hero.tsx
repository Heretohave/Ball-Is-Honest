import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function Hero({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-fairway-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-fairway-600 mb-4">
          {dict.hero.eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-fairway-900 leading-tight max-w-3xl mx-auto">
          {dict.hero.title}
        </h1>
        <p className="mt-6 text-lg text-fairway-700 max-w-2xl mx-auto">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#lessons"
            className="inline-flex items-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 hover:bg-fairway-800 transition"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href="#premium"
            className="inline-flex items-center rounded-full border border-fairway-300 text-fairway-800 font-medium px-6 py-3 hover:bg-fairway-50 transition"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
