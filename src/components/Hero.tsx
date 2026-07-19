import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

type Dict = (typeof dictionaries)[Locale];

export default function Hero({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-fairway-50 via-fairway-50/60 to-white">
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 text-fairway-800/[0.05]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fairway-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-sand-200/40 blur-3xl"
      />

      <GolfBallMark
        aria-hidden="true"
        className="hidden lg:block absolute top-28 left-[8%] h-16 w-16 text-fairway-200/70 drop-shadow-sm animate-fade-up"
      />
      <GolfBallMark
        aria-hidden="true"
        className="hidden lg:block absolute bottom-20 right-[10%] h-10 w-10 text-sand-200/80 drop-shadow-sm animate-fade-up"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <p className="animate-fade-up inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-fairway-600 mb-5 rounded-full border border-fairway-200 bg-white/70 px-4 py-1.5 shadow-soft">
          <GolfBallMark className="h-3.5 w-3.5 text-fairway-600" />
          {dict.hero.eyebrow}
        </p>
        <h1 className="animate-fade-up [animation-delay:80ms] text-balance font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-fairway-900 leading-[1.1] max-w-3xl mx-auto">
          {dict.hero.title}
        </h1>
        <p className="animate-fade-up [animation-delay:160ms] mt-6 text-lg text-fairway-700 max-w-2xl mx-auto text-balance">
          {dict.hero.subtitle}
        </p>
        <div className="animate-fade-up [animation-delay:240ms] mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#lessons"
            className="inline-flex items-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 shadow-soft transition-all hover:bg-fairway-800 hover:shadow-lift hover:-translate-y-0.5"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href="#premium"
            className="inline-flex items-center rounded-full border border-fairway-300 bg-white/60 text-fairway-800 font-medium px-6 py-3 transition-all hover:bg-white hover:border-fairway-400 hover:-translate-y-0.5"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fairway-200 to-transparent"
      />
    </section>
  );
}
