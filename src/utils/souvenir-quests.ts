/**
 * Petit Souvenir — Quest storage utilities
 * Saved quest state must come only from localStorage (not JSON).
 */

const STORAGE_KEY = 'petit-souvenir-saved-quests';

export function loadSavedQuests(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isQuestSaved(questId: string): boolean {
  return loadSavedQuests().includes(questId);
}

export function saveQuest(questId: string): void {
  const saved = loadSavedQuests();
  if (!saved.includes(questId)) {
    saved.push(questId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }
}

export function unsaveQuest(questId: string): void {
  const saved = loadSavedQuests();
  const filtered = saved.filter((id) => id !== questId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
