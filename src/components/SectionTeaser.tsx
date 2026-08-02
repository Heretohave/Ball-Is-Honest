import Link from "next/link";
import Logomark from "@/components/Logomark";

export default function SectionTeaser({
  href,
  eyebrow,
  heading,
  blurb,
  cta,
}: {
  href: string;
  eyebrow: string;
  heading: string;
  blurb: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-fairway-100 bg-white shadow-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-fairway-200"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fairway-50 ring-1 ring-fairway-100">
        <Logomark className="h-5 w-5 text-fairway-600" />
      </span>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-fairway-500">
        {eyebrow}
      </span>
      <h3 className="mt-1 font-display text-xl font-semibold text-fairway-900">{heading}</h3>
      <p className="mt-2 text-sm text-fairway-700 flex-1">{blurb}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fairway-700 transition-colors group-hover:text-fairway-900">
        {cta}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
