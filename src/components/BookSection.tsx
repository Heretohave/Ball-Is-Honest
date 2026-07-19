import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function BookSection({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="book" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] max-w-sm mx-auto w-full rounded-xl bg-sand-100 border border-sand-200 flex items-center justify-center text-sand-600 text-sm">
          {/* TODO: replace with real book cover image in /public */}
          Book cover placeholder
        </div>

        <div>
          <h2 className="text-3xl font-bold text-fairway-900">{dict.book.title}</h2>
          <p className="mt-3 text-fairway-700">{dict.book.subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 hover:bg-fairway-800 transition"
            >
              {dict.book.buyPdf}
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-fairway-300 text-fairway-800 font-medium px-6 py-3 hover:bg-fairway-50 transition"
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
