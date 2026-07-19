import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";

type Dict = (typeof dictionaries)[Locale];

// TODO: replace these placeholder YouTube video IDs with your real lesson videos.
const PLACEHOLDER_VIDEOS = [
  { id: "5Q3sV3xfMLM", titleEn: "Grip Basics", titleSk: "Základy úchopu" },
  { id: "2vB2s5x5x5A", titleEn: "The Setup", titleSk: "Postavenie" },
  { id: "9bZkp7q19f0", titleEn: "Reading the Green", titleSk: "Čítanie greenu" },
];

export default function VideoLessons({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="lessons" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
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
          <div
            key={video.id}
            className="group rounded-2xl overflow-hidden border border-fairway-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-fairway-200"
          >
            <div className="aspect-video relative">
              <span className="absolute top-3 left-3 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-fairway-800 shadow-soft">
                {i + 1}
              </span>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={locale === "en" ? video.titleEn : video.titleSk}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="p-4 text-sm font-medium text-fairway-800 transition-colors group-hover:text-fairway-900">
              {locale === "en" ? video.titleEn : video.titleSk}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-fairway-400">{dict.videos.placeholderNote}</p>
    </section>
  );
}
