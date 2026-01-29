/**
 * Petit Souvenir — Romance profile (coffret-only)
 * Not in the main Profiles list; only reachable via Coffret.
 */

export interface RomancePresetStep {
  type: 'place' | 'slot' | 'companion';
  label: string;
}

export interface RomancePreset {
  id: string;
  title: string;
  feel: string;
  steps: RomancePresetStep[];
  mapsDirections: string;
}

export interface RomanceProfileData {
  id: 'romance';
  name: string;
  essence: string;
  presets: RomancePreset[];
}

const ROMANCE_PROFILE: RomanceProfileData = {
  id: 'romance',
  name: 'Grand Amour',
  essence: 'Two days in Paris — one world, one itinerary.',
  presets: [
    {
      id: 'grand_amour_2d',
      title: 'Hotel Edition',
      feel: 'A single route for two: the same quest, the same archetype, kept in one coffret.',
      steps: [
        { type: 'place', label: 'Day 1 — your chosen profile’s first steps.' },
        { type: 'slot', label: 'Evening — same world.' },
        { type: 'place', label: 'Day 2 — continue the thread.' },
      ],
      mapsDirections: 'https://www.google.com/maps',
    },
  ],
};

export function getRomanceProfile(): RomanceProfileData {
  return ROMANCE_PROFILE;
}

export function getRomancePreset(presetId: string): RomancePreset | undefined {
  return ROMANCE_PROFILE.presets.find((p) => p.id === presetId);
}
