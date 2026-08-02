import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import SectionTeaser from "@/components/SectionTeaser";

type Dict = (typeof dictionaries)[Locale];

export default function LandingTeasers({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.landingTeasers;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SectionTeaser
          href={`/${locale}/lessons`}
          eyebrow={t.lessons.eyebrow}
          heading={t.lessons.heading}
          blurb={t.lessons.blurb}
          cta={t.lessons.cta}
        />
        <SectionTeaser
          href={`/${locale}/book`}
          eyebrow={t.book.eyebrow}
          heading={t.book.heading}
          blurb={t.book.blurb}
          cta={t.book.cta}
        />
        <SectionTeaser
          href={`/${locale}/private-lessons`}
          eyebrow={t.privateLessons.eyebrow}
          heading={t.privateLessons.heading}
          blurb={t.privateLessons.blurb}
          cta={t.privateLessons.cta}
        />
      </div>
    </section>
  );
}
