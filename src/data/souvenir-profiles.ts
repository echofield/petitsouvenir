/**
 * Petit Souvenir — Profile selection for /souvenir
 */

export type SouvenirProfileId = 'bohemian' | 'family' | 'night';

export interface SouvenirProfile {
  id: SouvenirProfileId;
  name: string;
  intro?: string;
}

export const SOUVENIR_PROFILES: SouvenirProfile[] = [
  { id: 'bohemian', name: 'Bohemian', intro: 'Artists, cafes, and quiet corners.' },
  { id: 'family', name: 'Family', intro: 'Parks, gentle walks, and shared moments.' },
  { id: 'night', name: 'Night', intro: 'Evening light, terraces, and hidden spots.' },
];

export function getSouvenirProfileById(id: string): SouvenirProfile | undefined {
  return SOUVENIR_PROFILES.find((p) => p.id === id);
}
