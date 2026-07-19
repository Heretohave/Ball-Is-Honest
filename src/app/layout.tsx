import type { ReactNode } from "react";

// Root layout is intentionally minimal — the <html>/<body> tags live in
// src/app/[locale]/layout.tsx so the `lang` attribute can be set per locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
