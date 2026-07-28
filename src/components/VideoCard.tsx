"use client";

import { useEffect, useRef, useState } from "react";
import GolfBallMark from "@/components/GolfBallMark";
import { getWatchStatus, setWatchStatus, type WatchStatus } from "@/lib/watchProgress";

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: { events: { onStateChange: (event: { data: number }) => void } }
      ) => { destroy: () => void };
      PlayerState: { PLAYING: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiLoadPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiLoadPromise) return apiLoadPromise;

  apiLoadPromise = new Promise((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });

  return apiLoadPromise;
}

export default function VideoCard({
  id,
  title,
  index,
  comingSoonLabel,
  completedLabel,
  continueLabel,
}: {
  id: string | null;
  title: string;
  index: number;
  comingSoonLabel: string;
  completedLabel: string;
  continueLabel: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<WatchStatus | null>(null);

  useEffect(() => {
    if (!id) return;
    setStatus(getWatchStatus(id));

    let cancelled = false;
    let player: { destroy: () => void } | undefined;

    loadYouTubeApi().then(() => {
      if (cancelled || !iframeRef.current || !window.YT) return;
      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            if (!window.YT) return;
            if (event.data === window.YT.PlayerState.PLAYING) {
              setWatchStatus(id, "in-progress");
              setStatus(getWatchStatus(id));
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setWatchStatus(id, "completed");
              setStatus("completed");
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, [id]);

  return (
    <div className="group rounded-2xl overflow-hidden border border-fairway-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-fairway-200">
      <div className="aspect-video relative">
        <span className="absolute top-3 left-3 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-fairway-800 shadow-soft">
          {index}
        </span>

        {status === "completed" && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-fairway-700 text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 shadow-soft">
            ✓ {completedLabel}
          </span>
        )}
        {status === "in-progress" && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-sand-100 border border-sand-200 text-fairway-800 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 shadow-soft">
            {continueLabel}
          </span>
        )}

        {id ? (
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="dot-grid relative flex h-full w-full items-center justify-center bg-fairway-50 text-fairway-800/[0.08]">
            <GolfBallMark className="h-10 w-10 text-fairway-300" />
            <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-wide text-fairway-400">
              {comingSoonLabel}
            </span>
          </div>
        )}
      </div>
      <p className="p-4 text-sm font-medium text-fairway-800 transition-colors group-hover:text-fairway-900">
        {title}
      </p>
    </div>
  );
}
