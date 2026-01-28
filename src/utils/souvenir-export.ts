/**
 * Petit Souvenir — Export utilities (v0.1)
 * Minimal export function for resonance trace.
 * Silent, no prompts, no analytics language.
 */

import { loadResonance } from './souvenir-resonance';
import { loadSavedQuests } from './souvenir-quests';

const APP_VERSION = '0.1.0';

/**
 * Download JSON file
 */
export function downloadJson(filename: string, payload: unknown): void {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export trace data (resonance + saved quests + metadata)
 */
export function exportTrace(): void {
  const resonance = loadResonance();
  const savedQuests = loadSavedQuests();
  
  // Determine archetype IDs from resonance events
  const archetypeIds = [...new Set(resonance.map((e) => e.archetypeId))];
  
  const payload = {
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    archetypeIds,
    resonance,
    savedQuests,
  };
  
  const filename = `petit-souvenir-trace-${new Date().toISOString().split('T')[0]}.json`;
  downloadJson(filename, payload);
}
