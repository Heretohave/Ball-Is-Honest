import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

type Dict = (typeof dictionaries)[Locale];

export default function BookSection({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="book" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative max-w-sm mx-auto w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-fairway-100"
          />
          <div className="relative aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-fairway-700 via-fairway-800 to-fairway-900 shadow-lift overflow-hidden flex flex-col justify-between p-7 text-white">
            <div aria-hidden="true" className="dot-grid absolute inset-0 text-white/[0.06]" />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-3 bg-black/20"
            />
            <div className="relative flex justify-between items-start">
              <GolfBallMark className="h-8 w-8 text-white/90" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-fairway-200">
                Vol. 1
              </span>
            </div>
            <div className="relative text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fairway-200 mb-2">
                {dict.book.title}
              </p>
              <p className="font-display text-3xl font-semibold leading-snug">
                Ball Is Honest
              </p>
            </div>
            <div className="relative h-px bg-white/15" />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-fairway-500">
            {dict.book.title}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-fairway-900">
            {dict.book.title}
          </h2>
          <p className="mt-3 text-fairway-700">{dict.book.subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 shadow-soft transition-all hover:bg-fairway-800 hover:shadow-lift hover:-translate-y-0.5"
            >
              {dict.book.buyPdf}
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-fairway-300 text-fairway-800 font-medium px-6 py-3 transition-all hover:bg-fairway-50 hover:-translate-y-0.5"
            >
              {dict.book.buyPrint}
            </a>
          </div>

          <p className="mt-6 text-xs text-fairway-400">{dict.book.note}</p>
        </div>
      </div>
    </section>
  );
}
