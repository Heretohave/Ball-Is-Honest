import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import BookSection from "@/components/BookSection";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.book.title} — ${dict.meta.title}`,
    description: dict.book.subtitle,
  };
}

export default function BookPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return <BookSection locale={locale} dict={dict} />;
}
