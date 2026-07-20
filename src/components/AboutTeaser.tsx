import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function AboutTeaser({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row items-center gap-8 rounded-2xl border border-fairway-100 bg-white shadow-soft p-6 sm:p-8">
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-fairway-50 shadow-soft">
          <Image
            src="/images/juraj-profile.jpg"
            alt={dict.about.photoAlt}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-fairway-500">
            {dict.aboutTeaser.eyebrow}
          </span>
          <h2 className="mt-1 font-display text-2xl font-semibold text-fairway-900">
            {dict.aboutTeaser.name}
          </h2>
          <p className="mt-2 text-fairway-700 max-w-2xl">{dict.aboutTeaser.blurb}</p>
          <Link
            href={`/${locale}/about`}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fairway-700 hover:text-fairway-900 transition-colors"
          >
            {dict.aboutTeaser.cta}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
