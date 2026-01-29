/**
 * Petit Souvenir — Coffret packs config
 * Pack ids map to included profile ids and optional presets.
 * Romance is coffret-only (not in main Profiles list).
 */

import type { SouvenirProfileId } from '../utils/souvenir-lock';
import { PETIT_SOUVENIR_DATA } from './petit-souvenir-types';

export type CoffretTier = 'one' | 'weekend' | 'complete';

/** Main list (Profiles page) + Romance (coffret-only) */
export type CoffretProfileId = SouvenirProfileId | 'romance';

export interface CoffretPreset {
  tier: CoffretTier;
  profiles: CoffretProfileId[];
  presets?: string[];
}

/** Single source of truth: main Profiles list only (bohemian, family, night). Romance is coffret-only. */
export function getAllProfileIds(): SouvenirProfileId[] {
  return PETIT_SOUVENIR_DATA.profiles.map((p) => p.id as SouvenirProfileId);
}

const ALL_IDS = getAllProfileIds();

export const COFFRET_PRESETS: Record<string, CoffretPreset> = {
  /** One Coffret = Romance only (Hotel Edition). Not on main Profiles list. */
  romance_one: {
    tier: 'one',
    profiles: ['romance'],
    presets: ['grand_amour_2d'],
  },
  weekend_bohemian_family: {
    tier: 'weekend',
    profiles: ['bohemian', 'family'],
  },
  complete: {
    tier: 'complete',
    profiles: [...ALL_IDS],
  },
};

export function getCoffretPack(packId: string): CoffretPreset | undefined {
  return COFFRET_PRESETS[packId];
}

export function getAllCoffretPackIds(): string[] {
  return Object.keys(COFFRET_PRESETS);
}
