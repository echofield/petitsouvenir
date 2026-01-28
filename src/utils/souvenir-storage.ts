/**
 * Petit Souvenir — My Paris localStorage
 * Shape: { savedIds, note? } — easier export/import, share URLs, future sync.
 */

const KEY_IDS = 'ps_saved_place_ids';
const KEY_NOTE = 'ps_note';

export interface MyParisData {
  savedIds: string[];
  note?: string;
}

export function loadMyParis(): MyParisData {
  try {
    const rawIds = localStorage.getItem(KEY_IDS);
    const savedIds = rawIds ? JSON.parse(rawIds) : [];
    const rawNote = localStorage.getItem(KEY_NOTE);
    const note = rawNote && rawNote !== '' ? rawNote : undefined;
    return { savedIds: Array.isArray(savedIds) ? savedIds : [], note };
  } catch {
    return { savedIds: [], note: undefined };
  }
}

export function saveSavedIds(savedIds: string[]): void {
  try {
    localStorage.setItem(KEY_IDS, JSON.stringify(savedIds));
  } catch (e) {
    console.error('souvenir-storage saveSavedIds', e);
  }
}

export function saveNote(note: string): void {
  try {
    localStorage.setItem(KEY_NOTE, note);
  } catch (e) {
    console.error('souvenir-storage saveNote', e);
  }
}

export function addPlace(id: string): void {
  const { savedIds } = loadMyParis();
  const deduped = [...new Set([...savedIds, id])];
  saveSavedIds(deduped);
}

export function removePlace(id: string): void {
  const { savedIds } = loadMyParis();
  saveSavedIds(savedIds.filter((x) => x !== id));
}
