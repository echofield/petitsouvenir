/**
 * Petit Souvenir — Lock/unlock system for profiles
 * localStorage key: "petit-souvenir-unlocked"
 */

const STORAGE_KEY = 'petit-souvenir-unlocked';

export type SouvenirProfileId = 'bohemian' | 'family' | 'night';

export function getUnlockedProfiles(): SouvenirProfileId[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isProfileUnlocked(profileId: SouvenirProfileId): boolean {
  return getUnlockedProfiles().includes(profileId);
}

export function unlockProfile(profileId: SouvenirProfileId): void {
  const unlocked = getUnlockedProfiles();
  if (!unlocked.includes(profileId)) {
    unlocked.push(profileId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
  }
}

export function lockProfile(profileId: SouvenirProfileId): void {
  const unlocked = getUnlockedProfiles();
  const filtered = unlocked.filter((id) => id !== profileId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

// Stripe payment link (hardcoded for v0)
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test'; // Replace with actual link
