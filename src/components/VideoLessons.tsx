import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import VideoCard from "@/components/VideoCard";

type Dict = (typeof dictionaries)[Locale];

// TODO: replace these placeholders with your real YouTube lesson videos —
// set `id` to a real YouTube video ID to enable the embed for that card.
const PLACEHOLDER_VIDEOS = [
  { id: null, titleEn: "Grip Basics", titleSk: "Základy úchopu" },
  { id: null, titleEn: "The Setup", titleSk: "Postavenie" },
  { id: null, titleEn: "Reading the Green", titleSk: "Čítanie greenu" },
];

export default function VideoLessons({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-fairway-500">
          {locale === "en" ? "Free" : "Zadarmo"}
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-fairway-900">
          {dict.videos.title}
        </h2>
        <p className="mt-3 text-fairway-700">{dict.videos.subtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLACEHOLDER_VIDEOS.map((video, i) => (
          <VideoCard
            key={video.titleEn}
            id={video.id}
            title={locale === "en" ? video.titleEn : video.titleSk}
            index={i + 1}
            comingSoonLabel={locale === "en" ? "Video coming soon" : "Video čoskoro"}
            completedLabel={dict.videos.completedBadge}
            continueLabel={dict.videos.continueBadge}
          />
        ))}
      </div>

      <p className="mt-6 text-xs text-fairway-400">{dict.videos.placeholderNote}</p>
    </section>
  );
}
