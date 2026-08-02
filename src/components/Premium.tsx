import type { Locale } from "@/i18n/config";
import { premiumPrice, premiumSeriesSlugs, type dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";
import GoogleAuthButton from "@/components/GoogleAuthButton";

type Dict = (typeof dictionaries)[Locale];

export default function Premium({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <>
      <section id="premium" className="relative overflow-hidden bg-fairway-900 text-white scroll-mt-16">
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
          <div className="mt-8 flex justify-center">
            <GoogleAuthButton
              locale={locale}
              signInLabel={dict.premium.cta}
              signOutLabel={dict.nav.signOut}
              lessonsLabel={dict.nav.lessons}
              theme="dark"
              buttonClassName="inline-flex items-center rounded-full bg-white text-fairway-900 font-medium px-6 py-3 shadow-lift transition-all hover:bg-sand-50 hover:-translate-y-0.5"
            />
          </div>
          <p className="mt-6 text-xs text-fairway-300/80 max-w-md mx-auto">{dict.premium.note}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-fairway-500">
            {dict.premium.seriesEyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-fairway-900">
            {dict.premium.seriesHeading}
          </h2>
          <p className="mt-3 text-fairway-700">{dict.premium.seriesSubtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumSeriesSlugs.map((slug) => (
            <div
              key={slug}
              className="group rounded-2xl overflow-hidden border border-fairway-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-fairway-200"
            >
              <div className="dot-grid relative flex aspect-[4/3] items-center justify-center bg-fairway-50 text-fairway-800/[0.08]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-fairway-100">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-fairway-500" aria-hidden="true">
                    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-sand-100 border border-sand-200 text-fairway-800 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 shadow-soft">
                  {dict.premium.comingSoon}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-fairway-900">{dict.premium.series[slug]}</p>
                <p className="mt-1 text-xs font-medium text-fairway-500">
                  {premiumPrice[locale]} <span className="text-fairway-400">{dict.premium.perSeries}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
