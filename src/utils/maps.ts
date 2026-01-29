/**
 * Petit Souvenir — Maps URL helper
 * Single source for Google Maps search links.
 */

export function buildGoogleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
