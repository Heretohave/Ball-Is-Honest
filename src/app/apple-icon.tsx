import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same artwork as icon.svg — keep the two in sync when the mark changes.
// iOS applies its own rounded mask, so this one is full-bleed (no rx).
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180">
  <rect width="32" height="32" fill="#1d3729"/>
  <g fill="none" stroke="#ffffff" stroke-width="2.1">
    <circle cx="16" cy="16" r="11.6"/>
    <ellipse cx="16.7" cy="15.6" rx="8.2" ry="7.7"/>
    <ellipse cx="17.3" cy="15.2" rx="4.8" ry="4.4"/>
  </g>
  <ellipse cx="17.8" cy="14.9" rx="1.9" ry="1.7" fill="#ffffff"/>
</svg>`;

export default function AppleIcon() {
  const src = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={180} height={180} alt="" />
      </div>
    ),
    size
  );
}
