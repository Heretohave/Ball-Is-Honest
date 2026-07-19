import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const otherLocale: Locale = locale === "en" ? "sk" : "en";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-fairway-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="font-semibold text-lg text-fairway-800">
          Ball Is Honest
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-fairway-700">
          <Link href={`/${locale}#lessons`}>{dict.nav.lessons}</Link>
          <Link href={`/${locale}#premium`}>{dict.nav.premium}</Link>
          <Link href={`/${locale}#book`}>{dict.nav.book}</Link>
          <Link href={`/${locale}#private-lessons`}>{dict.nav.private}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="text-sm font-medium text-fairway-600 border border-fairway-200 rounded-full px-3 py-1 hover:bg-fairway-50"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            type="button"
            className="hidden sm:inline-flex items-center rounded-full bg-fairway-700 text-white text-sm font-medium px-4 py-2 hover:bg-fairway-800 transition"
          >
            {dict.nav.signIn}
          </button>
        </div>
      </div>
    </header>
  );
}
