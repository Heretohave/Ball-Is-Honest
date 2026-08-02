import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",").map((part) => part.split(";")[0].trim().toLowerCase());

  for (const lang of preferred) {
    const short = lang.slice(0, 2);
    if ((locales as readonly string[]).includes(short)) {
      return short;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip internals, the API, and Next.js metadata routes. The trailing
  // `.*\..*` covers anything with a file extension; the named entries cover
  // extensionless metadata routes (e.g. /apple-icon) that would otherwise be
  // redirected into a locale and 404.
  matcher: [
    "/((?!_next|api|favicon.ico|icon|apple-icon|opengraph-image|twitter-image|.*\\..*).*)",
  ],
};
