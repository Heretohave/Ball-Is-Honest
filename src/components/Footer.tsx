import type { Locale } from "@/i18n/config";
import type { dictionaries } from "@/i18n/dictionaries";
import Logomark from "@/components/Logomark";

type Dict = (typeof dictionaries)[Locale];

export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <footer className="border-t border-fairway-100 bg-fairway-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-fairway-700">
        <p className="flex items-center gap-2">
          <Logomark className="h-4 w-4 text-fairway-500" />
          &copy; {new Date().getFullYear()} Ball Is Honest. {dict.footer.rights}
        </p>
        <p className="text-fairway-500">{locale === "en" ? "Made with care, on and off the course." : "Vytvorené so starostlivosťou, na ihrisku aj mimo neho."}</p>
      </div>
    </footer>
  );
}
