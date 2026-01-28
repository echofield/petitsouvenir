/**
 * Petit Souvenir — Resonance tracking (v0)
 * Silent, private trace of presence for places and quests.
 * No UI prompts, no counts, no social features.
 * Local only — stored in localStorage.
 */

export type ResonanceTargetType = 'place' | 'quest';

export interface ResonanceEvent {
  id: string;               // uuid
  type: ResonanceTargetType;
  targetId: string;         // place.id or quest.id
  archetypeId: string;      // "bohemian" (future: others)
  createdAt: string;       // ISO timestamp
  dwellMs?: number;         // optional: time spent, for internal use only
}

const STORAGE_KEY = 'souvenir:resonance:v0';
const DEDUP_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Generate a simple UUID v4-like string
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Load all resonance events from localStorage
 */
export function loadResonance(): ResonanceEvent[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Add a resonance event.
 * Dedup: ignore if last event for same type+targetId is within 10 minutes.
 */
export function addResonance(
  event: Omit<ResonanceEvent, 'id' | 'createdAt'> & { dwellMs?: number }
): void {
  const existing = loadResonance();
  
  // Check for recent duplicate (within 10 minutes)
  const now = Date.now();
  const recentDuplicate = existing
    .filter((e) => e.type === event.type && e.targetId === event.targetId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
  
  if (recentDuplicate) {
    const lastEventTime = new Date(recentDuplicate.createdAt).getTime();
    const timeSinceLastEvent = now - lastEventTime;
    if (timeSinceLastEvent < DEDUP_WINDOW_MS) {
      // Ignore duplicate within dedup window
      return;
    }
  }
  
  // Create new event
  const newEvent: ResonanceEvent = {
    id: generateId(),
    type: event.type,
    targetId: event.targetId,
    archetypeId: event.archetypeId,
    createdAt: new Date().toISOString(),
    dwellMs: event.dwellMs,
  };
  
  existing.push(newEvent);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

/**
 * Check if a resonance event exists for a given target
 */
export function hasResonance(type: ResonanceTargetType, targetId: string): boolean {
  const events = loadResonance();
  return events.some((e) => e.type === type && e.targetId === targetId);
}

/**
 * Count resonance events for a given target (for internal dev only, no UI)
 */
export function countResonance(type: ResonanceTargetType, targetId: string): number {
  const events = loadResonance();
  return events.filter((e) => e.type === type && e.targetId === targetId).length;
}

/**
 * Clear all resonance events (dev only, no UI)
 */
export function clearResonance(): void {
  localStorage.removeItem(STORAGE_KEY);
}
