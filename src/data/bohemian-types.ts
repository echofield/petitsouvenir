/**
 * Bohemian Profile — Type definitions matching bohemian-profile.json
 * Do not invent or modify venue data. Render strictly from JSON.
 */

export interface Category {
  id: string;
  label: string;
  mapped: boolean;
}

export interface PlaceTags {
  price: '€' | '€€' | '€€€' | '€€€€';
  time: '30 min' | '1h' | '2–3h';
  solo: 'very' | 'yes' | 'conditional';
  bestMoment: 'morning' | 'afternoon' | 'late' | 'evening';
}

export interface PlaceActions {
  maps: string;
  schedule?: string;
  booking?: string;
}

export interface BohemianPlace {
  id: string;
  categoryId: string;
  title: string; // French venue name
  address: string;
  neighborhood?: string;
  x?: number; // Optional - if missing, render in list only (no map pin)
  y?: number; // Optional - if missing, render in list only (no map pin)
  lat?: number; // Optional - not used for rendering in v1
  lng?: number; // Optional - not used for rendering in v1
  why: string; // 1-line "why it fits"
  microQuest: string; // 1-line action
  tags: PlaceTags;
  actions: PlaceActions;
}

export interface Companion {
  id: string;
  title: string;
  author: string;
  moment: string;
  why: string;
  microQuest: string;
  actions: {
    buy: string;
    findInParis?: string;
  };
}

export interface QuestStep {
  type: 'place' | 'slot' | 'companion';
  label: string;
}

export interface Quest {
  id: string;
  title: string;
  feel: string; // 1 sentence
  steps: QuestStep[];
  mapsDirections: string;
}

export interface BohemianProfileData {
  profile: {
    id: string;
    name: string;
    essence: string;
    rules: string[];
  };
  categories: Category[];
  places: BohemianPlace[];
  companions: Companion[];
  quests: Quest[];
}

// Load the JSON data
import dataJson from './bohemian-profile.json';

export const BOHEMIAN_PROFILE_DATA: BohemianProfileData = dataJson as BohemianProfileData;

// Helper functions
export function getBohemianProfile(): BohemianProfileData {
  return BOHEMIAN_PROFILE_DATA;
}

export function getBohemianPlaceById(id: string): BohemianPlace | undefined {
  return BOHEMIAN_PROFILE_DATA.places.find((p) => p.id === id);
}

export function getBohemianCompanionById(id: string): Companion | undefined {
  return BOHEMIAN_PROFILE_DATA.companions.find((c) => c.id === id);
}

export function getBohemianQuestById(id: string): Quest | undefined {
  return BOHEMIAN_PROFILE_DATA.quests.find((q) => q.id === id);
}
