/**
 * Ball Is Honest logomark.
 *
 * Reads two ways on purpose: the contour lines you read on a green before a
 * putt, and the growth rings of a tree — steady improvement over time. The
 * rings sit slightly off-centre so they feel surveyed rather than geometric.
 */
export default function Logomark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12.8" stroke="currentColor" strokeWidth="2.1" />
      <ellipse cx="16.7" cy="15.6" rx="9.1" ry="8.6" stroke="currentColor" strokeWidth="2.1" />
      <ellipse cx="17.3" cy="15.2" rx="5.5" ry="5.1" stroke="currentColor" strokeWidth="2.1" />
      <ellipse cx="17.8" cy="14.9" rx="2.1" ry="1.9" fill="currentColor" />
    </svg>
  );
}
