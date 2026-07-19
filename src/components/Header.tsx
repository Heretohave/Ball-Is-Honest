import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

type Dict = (typeof dictionaries)[Locale];

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const otherLocale: Locale = locale === "en" ? "sk" : "en";

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-fairway-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-2.5 font-display font-semibold text-lg text-fairway-900"
        >
          <GolfBallMark className="h-7 w-7 text-fairway-700 transition-transform duration-300 group-hover:rotate-45" />
          <span>Ball Is Honest</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-fairway-700">
          <Link href={`/${locale}#lessons`} className="relative py-1 transition-colors hover:text-fairway-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-fairway-600 after:transition-transform after:duration-300 hover:after:scale-x-100">
            {dict.nav.lessons}
          </Link>
          <Link href={`/${locale}#premium`} className="relative py-1 transition-colors hover:text-fairway-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-fairway-600 after:transition-transform after:duration-300 hover:after:scale-x-100">
            {dict.nav.premium}
          </Link>
          <Link href={`/${locale}#book`} className="relative py-1 transition-colors hover:text-fairway-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-fairway-600 after:transition-transform after:duration-300 hover:after:scale-x-100">
            {dict.nav.book}
          </Link>
          <Link href={`/${locale}#private-lessons`} className="relative py-1 transition-colors hover:text-fairway-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-fairway-600 after:transition-transform after:duration-300 hover:after:scale-x-100">
            {dict.nav.private}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="text-sm font-medium text-fairway-600 border border-fairway-200 rounded-full px-3 py-1 transition-colors hover:bg-fairway-50 hover:border-fairway-300"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            type="button"
            className="hidden sm:inline-flex items-center rounded-full bg-fairway-700 text-white text-sm font-medium px-4 py-2 shadow-soft transition-all hover:bg-fairway-800 hover:shadow-lift hover:-translate-y-0.5"
          >
            {dict.nav.signIn}
          </button>
        </div>
      </div>
    </header>
  );
}
