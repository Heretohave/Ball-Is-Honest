export default function GolfBallMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" className="fill-current" />
      <g className="fill-white/70">
        <circle cx="8" cy="8" r="1" />
        <circle cx="12" cy="7" r="1" />
        <circle cx="16" cy="8" r="1" />
        <circle cx="6.5" cy="12" r="1" />
        <circle cx="10.5" cy="11.5" r="1" />
        <circle cx="14.5" cy="11.5" r="1" />
        <circle cx="17.5" cy="12" r="1" />
        <circle cx="8.5" cy="15.5" r="1" />
        <circle cx="12.5" cy="15" r="1" />
        <circle cx="16" cy="15.5" r="1" />
        <circle cx="10" cy="18.5" r="1" />
        <circle cx="14" cy="18.5" r="1" />
      </g>
    </svg>
  );
}
