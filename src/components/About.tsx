import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function About({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0 text-fairway-800/[0.04]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-fairway-500">
            {dict.about.eyebrow}
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-fairway-900 leading-tight">
            {dict.about.heading}
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-10 lg:gap-16 items-start">
          <div className="mx-auto lg:mx-0 w-full max-w-xs">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lift">
              <Image
                src="/images/juraj-profile.jpg"
                alt={dict.about.photoAlt}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>

            <ul className="mt-6 space-y-2">
              {dict.about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-medium text-fairway-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-fairway-500" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <a
              href={`/${locale}#private-lessons`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-fairway-700 text-white font-medium px-6 py-3 shadow-soft transition-all hover:bg-fairway-800 hover:shadow-lift hover:-translate-y-0.5"
            >
              {dict.about.cta}
            </a>
          </div>

          <div className="space-y-5 text-fairway-700 leading-relaxed">
            {dict.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fairway-100">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-fairway-600 hover:text-fairway-900 transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            {locale === "en" ? "Back to home" : "Späť domov"}
          </Link>
        </div>
      </div>
    </section>
  );
}
