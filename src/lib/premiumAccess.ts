import type { PremiumSeriesSlug } from "@/i18n/dictionaries";

/**
 * Whether a signed-in user has purchased access to a premium series.
 *
 * TODO: no purchases exist yet — there's no payment provider or database
 * wired up. Once Stripe checkout + a database of paid access records exist,
 * replace this with a real lookup (e.g. by `userId` + `slug`).
 */
export function hasSeriesAccess(
  _userId: string | null | undefined,
  _slug: PremiumSeriesSlug
): boolean {
  return false;
}
