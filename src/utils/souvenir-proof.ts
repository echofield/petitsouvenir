/**
 * Petit Souvenir — Proof tracking system
 * localStorage key: "petit-souvenir-proofs"
 */

const STORAGE_KEY = 'petit-souvenir-proofs';

export interface PlaceProof {
  done: boolean;
  note?: string;
  photo?: string; // URL or base64 (future)
}

export interface ProofsData {
  [placeId: string]: PlaceProof;
}

export function loadProofs(): ProofsData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

export function getProof(placeId: string): PlaceProof | undefined {
  return loadProofs()[placeId];
}

export function hasProof(placeId: string): boolean {
  const proof = getProof(placeId);
  return proof?.done === true;
}

export function saveProof(placeId: string, proof: PlaceProof): void {
  const proofs = loadProofs();
  proofs[placeId] = proof;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(proofs));
}

export function markProofDone(placeId: string, note?: string): void {
  saveProof(placeId, { done: true, note });
}

export function clearProof(placeId: string): void {
  const proofs = loadProofs();
  delete proofs[placeId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(proofs));
}
