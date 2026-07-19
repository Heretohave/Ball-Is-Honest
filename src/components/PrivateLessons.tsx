import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function PrivateLessons({ dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="private-lessons" className="bg-sand-50 border-t border-sand-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-fairway-900">{dict.lessons.title}</h2>
        <p className="mt-3 text-fairway-700 max-w-2xl mx-auto">{dict.lessons.subtitle}</p>
        <a
          href="#"
          className="mt-8 inline-flex items-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 hover:bg-fairway-800 transition"
        >
          {dict.lessons.cta}
        </a>
      </div>
    </section>
  );
}
