export type WatchStatus = "in-progress" | "completed";

const STORAGE_PREFIX = "bih:watch:";

export function getWatchStatus(videoId: string): WatchStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + videoId);
    return raw === "in-progress" || raw === "completed" ? raw : null;
  } catch {
    return null;
  }
}

export function setWatchStatus(videoId: string, status: WatchStatus): void {
  if (typeof window === "undefined") return;
  try {
    // A completed video never regresses back to "in progress" (e.g. on replay).
    if (getWatchStatus(videoId) === "completed" && status === "in-progress") return;
    window.localStorage.setItem(STORAGE_PREFIX + videoId, status);
  } catch {
    // localStorage unavailable (private browsing, storage full, etc.) — no-op.
  }
}
