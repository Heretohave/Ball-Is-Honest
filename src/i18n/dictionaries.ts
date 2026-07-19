import type { Locale } from "./config";

export const dictionaries = {
  en: {
    meta: {
      title: "Ball Is Honest — Golf Coaching",
      description:
        "Golf video lessons, premium coaching content, and a technique book — in English and Slovak. The ball doesn't lie about your swing.",
    },
    nav: {
      lessons: "Lessons",
      premium: "Premium",
      book: "Book",
      private: "Private Lessons",
      signIn: "Sign in with Google",
    },
    hero: {
      eyebrow: "Golf coaching that tells you the truth",
      title: "The ball is honest. Your swing can be too.",
      subtitle:
        "Free video lessons, premium in-depth courses, a complete technique book, and private coaching on the course — in English and Slovak.",
      ctaPrimary: "Watch free lessons",
      ctaSecondary: "See premium content",
    },
    videos: {
      title: "Free Video Lessons",
      subtitle: "Start here. New lessons added regularly on YouTube.",
      placeholderNote:
        "Replace these placeholder video IDs with your real YouTube lesson links.",
    },
    premium: {
      title: "Premium Lessons",
      subtitle:
        "Sign in with Google to unlock in-depth technique breakdowns, course-management lessons, and full training programs.",
      cta: "Sign in with Google",
      note: "Premium access setup (Google login + subscription gating) comes next — this section is a placeholder for now.",
    },
    book: {
      title: "The Book",
      subtitle:
        "Everything from the lessons, organized into one complete guide to an honest, repeatable swing.",
      buyPdf: "Buy the PDF",
      buyPrint: "Buy the printed book on Amazon (KDP)",
      note: "Connect Stripe and your KDP link here when ready.",
    },
    lessons: {
      title: "Private Lessons",
      subtitle:
        "One-on-one coaching, in person on the course or via video review. Available in English and Slovak.",
      cta: "Book a lesson",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  sk: {
    meta: {
      title: "Ball Is Honest — Golfový Koučing",
      description:
        "Videolekcie golfu, prémiový obsah a kniha o technike — v angličtine aj slovenčine. Loptička nikdy neluže o vašom švihu.",
    },
    nav: {
      lessons: "Lekcie",
      premium: "Prémium",
      book: "Kniha",
      private: "Súkromné lekcie",
      signIn: "Prihlásiť sa cez Google",
    },
    hero: {
      eyebrow: "Golfový koučing, ktorý hovorí pravdu",
      title: "Loptička je úprimná. Váš švih môže byť tiež.",
      subtitle:
        "Bezplatné videolekcie, prémiové kurzy, kompletná kniha o technike a súkromné lekcie priamo na ihrisku — v angličtine aj slovenčine.",
      ctaPrimary: "Pozrieť bezplatné lekcie",
      ctaSecondary: "Zobraziť prémiový obsah",
    },
    videos: {
      title: "Bezplatné videolekcie",
      subtitle: "Začnite tu. Nové lekcie pravidelne pridávame na YouTube.",
      placeholderNote:
        "Nahraďte tieto ukážkové video ID vašimi skutočnými odkazmi na lekcie z YouTube.",
    },
    premium: {
      title: "Prémiové lekcie",
      subtitle:
        "Prihláste sa cez Google a odomknite podrobné rozbory techniky, lekcie manažmentu ihriska a kompletné tréningové programy.",
      cta: "Prihlásiť sa cez Google",
      note: "Nastavenie prémiového prístupu (Google prihlásenie + predplatné) príde neskôr — táto sekcia je zatiaľ len ukážka.",
    },
    book: {
      title: "Kniha",
      subtitle:
        "Všetko z lekcií usporiadané do jedného kompletného sprievodcu úprimným a opakovateľným švihom.",
      buyPdf: "Kúpiť PDF",
      buyPrint: "Kúpiť tlačenú knihu na Amazone (KDP)",
      note: "Sem neskôr pripojíte Stripe a odkaz na KDP.",
    },
    lessons: {
      title: "Súkromné lekcie",
      subtitle:
        "Individuálny koučing, osobne na ihrisku alebo formou video rozboru. Dostupné v angličtine aj slovenčine.",
      cta: "Rezervovať lekciu",
    },
    footer: {
      rights: "Všetky práva vyhradené.",
    },
  },
} satisfies Record<Locale, unknown>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
