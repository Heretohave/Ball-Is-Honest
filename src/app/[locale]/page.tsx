import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/Hero";
import VideoLessons from "@/components/VideoLessons";
import PremiumTeaser from "@/components/PremiumTeaser";
import BookSection from "@/components/BookSection";
import PrivateLessons from "@/components/PrivateLessons";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <VideoLessons locale={locale} dict={dict} />
      <PremiumTeaser locale={locale} dict={dict} />
      <BookSection locale={locale} dict={dict} />
      <PrivateLessons locale={locale} dict={dict} />
    </>
  );
}
