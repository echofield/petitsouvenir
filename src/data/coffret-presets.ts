/**
 * Petit Souvenir — Coffret packs config
 * Pack ids map to included profile ids and optional presets.
 * Single source of truth: complete pack derives from PETIT_SOUVENIR_DATA.
 */

import type { SouvenirProfileId } from '../utils/souvenir-lock';
import { PETIT_SOUVENIR_DATA } from './petit-souvenir-types';

export type CoffretTier = 'one' | 'weekend' | 'complete';

export interface CoffretPreset {
  tier: CoffretTier;
  profiles: SouvenirProfileId[];
  presets?: string[];
}

/** Single source of truth: same as Profiles list */
export function getAllProfileIds(): SouvenirProfileId[] {
  return PETIT_SOUVENIR_DATA.profiles.map((p) => p.id as SouvenirProfileId);
}

const ALL_IDS = getAllProfileIds();

export const COFFRET_PRESETS: Record<string, CoffretPreset> = {
  bohemian_one: {
    tier: 'one',
    profiles: ['bohemian'],
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
