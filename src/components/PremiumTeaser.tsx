import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

type Dict = (typeof dictionaries)[Locale];

export default function PremiumTeaser({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="premium" className="relative overflow-hidden bg-fairway-900 text-white">
      <div aria-hidden="true" className="dot-grid absolute inset-0 text-white/[0.04]" />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-fairway-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 mb-6">
          <GolfBallMark className="h-6 w-6 text-white" />
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">{dict.premium.title}</h2>
        <p className="mt-3 text-fairway-100/90 max-w-2xl mx-auto text-balance">{dict.premium.subtitle}</p>
        <button
          type="button"
          className="mt-8 inline-flex items-center rounded-full bg-white text-fairway-900 font-medium px-6 py-3 shadow-lift transition-all hover:bg-sand-50 hover:-translate-y-0.5"
        >
          {dict.premium.cta}
        </button>
        <p className="mt-6 text-xs text-fairway-300/80 max-w-md mx-auto">{dict.premium.note}</p>
      </div>
    </section>
  );
}
