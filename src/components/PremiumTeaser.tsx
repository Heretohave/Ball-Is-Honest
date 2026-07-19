import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function PremiumTeaser({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="premium" className="bg-fairway-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold">{dict.premium.title}</h2>
        <p className="mt-3 text-fairway-100 max-w-2xl mx-auto">{dict.premium.subtitle}</p>
        <button
          type="button"
          className="mt-8 inline-flex items-center rounded-full bg-white text-fairway-900 font-medium px-6 py-3 hover:bg-fairway-50 transition"
        >
          {dict.premium.cta}
        </button>
        <p className="mt-6 text-xs text-fairway-300 max-w-md mx-auto">{dict.premium.note}</p>
      </div>
    </section>
  );
}
