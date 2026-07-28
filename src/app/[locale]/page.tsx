import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import LandingTeasers from "@/components/LandingTeasers";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <AboutTeaser locale={locale} dict={dict} />
      <LandingTeasers locale={locale} dict={dict} />
    </>
  );
}
