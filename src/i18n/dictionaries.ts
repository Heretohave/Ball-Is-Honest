import type { Locale } from "./config";

// Target launch window for the book — update this when a firm date is set.
export const bookLaunch: Record<Locale, string> = {
  en: "Fall 2026",
  sk: "jeseň 2026",
};

export const dictionaries = {
  en: {
    meta: {
      title: "Ball Is Honest — Golf Coaching",
      description:
        "Golf video lessons, premium coaching content, and a technique book — in English and Slovak. The ball doesn't lie about your swing.",
    },
    nav: {
      about: "About",
      lessons: "Lessons",
      premium: "Premium",
      book: "Book",
      private: "Private Lessons",
      signIn: "Sign in with Google",
      signOut: "Sign out",
    },
    hero: {
      eyebrow: "Golf coaching that tells you the truth",
      title: "The ball is honest. Your swing can be too.",
      subtitle:
        "Free video lessons, premium in-depth courses, a complete technique book, and private coaching on the course — in English and Slovak.",
      ctaPrimary: "Watch free lessons",
      ctaSecondary: "See premium content",
    },
    aboutTeaser: {
      eyebrow: "Your coach",
      name: "Juraj Pavle",
      blurb:
        "PGA-certified with 12+ years coaching across Europe — from St Andrews to Costa del Sol — and a former Slovak national swimming champion. He believes performance comes from honest feedback and repeatable fundamentals.",
      cta: "Read the full story",
    },
    about: {
      eyebrow: "About your coach",
      heading: "Meet Your Coach",
      photoAlt: "Juraj Pavle lining up a putt on the green",
      paragraphs: [
        "Juraj Pavle is a PGA-certified golf professional with over 12 years of coaching experience across Europe. He grew up in Prievidza, Slovakia, before setting out to build his career on some of golf's most storied ground — training at SRUC Elmwood in Scotland, where he graduated as Student of the Year, and later working within the St Andrews Links Trust, helping maintain the Old Course itself, and caddying at Kingsbarns Golf Links.",
        "Since 2019 he's coached out of Costa del Sol, Spain — first as PGA Professional at Calanova Golf Club, and since 2021 as an independent coach working with players of every level, from complete beginners to competitive amateurs. Along the way he's also had a hand in tournament operations, club fitting, and even helped build a golf course from scratch in Slovakia.",
        "Before golf, Juraj was a Slovak national swimming champion — a background that shaped how he thinks about coaching: performance comes from repeatable fundamentals, honest feedback, and paying attention to what the data actually shows. That's the whole idea behind Ball Is Honest. The ball doesn't flatter you and it doesn't lie — it just shows you exactly what your swing did. Juraj's job is to help you read that feedback and turn it into real, lasting improvement.",
        "He speaks Slovak, Czech, English, and Spanish, and coaches lessons in English and Slovak.",
      ],
      highlights: [
        "PGA Professional",
        "12+ years coaching",
        "St Andrews & Costa del Sol",
        "Lessons in English & Slovak",
      ],
      cta: "Book a lesson",
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
      comingSoonPrefix: "Coming soon",
      note: "Pre-order and Amazon links go live at launch.",
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
      about: "O mne",
      lessons: "Lekcie",
      premium: "Prémium",
      book: "Kniha",
      private: "Súkromné lekcie",
      signIn: "Prihlásiť sa cez Google",
      signOut: "Odhlásiť sa",
    },
    hero: {
      eyebrow: "Golfový koučing, ktorý hovorí pravdu",
      title: "Loptička je úprimná. Váš švih môže byť tiež.",
      subtitle:
        "Bezplatné videolekcie, prémiové kurzy, kompletná kniha o technike a súkromné lekcie priamo na ihrisku — v angličtine aj slovenčine.",
      ctaPrimary: "Pozrieť bezplatné lekcie",
      ctaSecondary: "Zobraziť prémiový obsah",
    },
    // NOTE: machine-assisted draft translation — please have a native speaker
    // review this before it goes live (flagged in the original content plan).
    aboutTeaser: {
      eyebrow: "Váš tréner",
      name: "Juraj Pavle",
      blurb:
        "PGA certifikovaný tréner s viac ako 12-ročnou praxou naprieč Európou — od St Andrews po Costa del Sol — a bývalý slovenský národný šampión v plávaní. Verí, že výkon stavia na úprimnej spätnej väzbe a opakovateľných základoch.",
      cta: "Prečítať celý príbeh",
    },
    // NOTE: machine-assisted draft translation — please have a native speaker
    // review this before it goes live (flagged in the original content plan).
    about: {
      eyebrow: "O vašom trénerovi",
      heading: "Spoznajte svojho trénera",
      photoAlt: "Juraj Pavle si na greene meria líniu puttu",
      paragraphs: [
        "Juraj Pavle je PGA certifikovaný golfový profesionál s viac ako 12-ročnými skúsenosťami s koučovaním v Európe. Vyrastal v Prievidzi na Slovensku, kým sa vydal budovať kariéru na jednej z najslávnejších golfových pôd — trénoval na SRUC Elmwood v Škótsku, kde sa stal Študentom roka, neskôr pôsobil v St Andrews Links Trust, kde sa podieľal na údržbe samotného Old Course, a caddyoval na Kingsbarns Golf Links.",
        "Od roku 2019 koučuje na Costa del Sol v Španielsku — najprv ako PGA profesionál v Calanova Golf Club a od roku 2021 ako nezávislý tréner, ktorý pracuje s hráčmi na všetkých úrovniach, od úplných začiatočníkov po súťažných amatérov. Popri tom sa venoval aj organizácii turnajov, fittingu palíc a dokonca pomáhal od základov vybudovať golfové ihrisko na Slovensku.",
        "Pred golfom bol Juraj slovenským národným šampiónom v plávaní — táto skúsenosť formovala jeho prístup ku koučovaniu: výkon vychádza z opakovateľných základov, úprimnej spätnej väzby a pozornosti k tomu, čo naozaj hovoria dáta. Presne to je podstata Ball Is Honest. Loptička vám nelichotí a neluže — jednoducho vám ukáže presne to, čo urobil váš švih. Jurajovou úlohou je pomôcť vám túto spätnú väzbu čítať a premeniť ju na skutočné, trvalé zlepšenie.",
        "Hovorí po slovensky, česky, anglicky a španielsky a lekcie vedie v angličtine a slovenčine.",
      ],
      highlights: [
        "PGA profesionál",
        "12+ rokov koučovania",
        "St Andrews a Costa del Sol",
        "Lekcie v angličtine a slovenčine",
      ],
      cta: "Rezervovať lekciu",
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
      comingSoonPrefix: "Čoskoro",
      note: "Odkazy na predobjednávku a Amazon budú dostupné pri vydaní.",
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
