import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import GolfBallMark from "@/components/GolfBallMark";

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
        {PLACEHOLDER_VIDEOS.map((video, i) => {
          const title = locale === "en" ? video.titleEn : video.titleSk;
          return (
            <div
              key={video.titleEn}
              className="group rounded-2xl overflow-hidden border border-fairway-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-fairway-200"
            >
              <div className="aspect-video relative">
                <span className="absolute top-3 left-3 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-fairway-800 shadow-soft">
                  {i + 1}
                </span>
                {video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="dot-grid relative flex h-full w-full items-center justify-center bg-fairway-50 text-fairway-800/[0.08]">
                    <GolfBallMark className="h-10 w-10 text-fairway-300" />
                    <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-wide text-fairway-400">
                      {locale === "en" ? "Video coming soon" : "Video čoskoro"}
                    </span>
                  </div>
                )}
              </div>
              <p className="p-4 text-sm font-medium text-fairway-800 transition-colors group-hover:text-fairway-900">
                {title}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-fairway-400">{dict.videos.placeholderNote}</p>
    </section>
  );
}
