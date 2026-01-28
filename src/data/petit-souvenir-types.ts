/**
 * Petit Souvenir v0 — Type definitions matching petit-souvenir.v0.json
 */

export type SouvenirProfileId = 'bohemian' | 'family' | 'night';

export interface SignatureCard {
  type: 'intent' | 'micro_quest' | 'proof' | 'token';
  title: string;
  directive: string;
  rationale: string;
}

export interface SouvenirPlace {
  id: string;
  name: string;
  address: string;
  area: string;
  why_it_fits: string;
  micro_quest: string;
  proof_of_wonder: string;
  best_time: string;
  avoid: string;
  official_link: string;
  map_link: string;
  x: number;
  y: number;
}

export interface SouvenirProfile {
  id: SouvenirProfileId;
  name: string;
  promise: string;
  rules: string[];
  anti_rules: string[];
  signature_cards: SignatureCard[];
  places: SouvenirPlace[];
}

export interface PetitSouvenirData {
  profiles: SouvenirProfile[];
}

// Load the JSON data
import dataJson from './petit-souvenir.v0.json';

export const PETIT_SOUVENIR_DATA: PetitSouvenirData = dataJson as PetitSouvenirData;

// Helper functions
export function getProfileById(id: string): SouvenirProfile | undefined {
  return PETIT_SOUVENIR_DATA.profiles.find((p) => p.id === id);
}

export function getPlaceById(id: string): SouvenirPlace | undefined {
  for (const profile of PETIT_SOUVENIR_DATA.profiles) {
    const place = profile.places.find((p) => p.id === id);
    if (place) return place;
  }
  return undefined;
}

export function getPlacesByProfile(profileId: SouvenirProfileId): SouvenirPlace[] {
  const profile = getProfileById(profileId);
  return profile?.places ?? [];
}
