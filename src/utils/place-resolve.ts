/**
 * Petit Souvenir — Place resolution for shares
 * Map share: resolve by id (souvenir-places then bohemian). Quest trace: resolve by step label (exact match on bohemian title).
 * Never invent venues.
 */

import { getSouvenirPlaceById } from '../data/souvenir-places';
import { getBohemianPlaceById, getBohemianProfile } from '../data/bohemian-types';
import { buildGoogleMapsUrl } from './maps';
import type { QuestStep } from '../data/bohemian-types';

export type ResolvedPlace = {
  id?: string;
  title: string;
  address?: string;
  maps?: string;
  categoryId?: string;
};

/** Resolve place by id for map share. Try souvenir-places, then bohemian. */
export function resolvePlaceForShare(id: string): ResolvedPlace | null {
  const sp = getSouvenirPlaceById(id);
  if (sp) {
    const address = `${sp.name}, Paris`;
    return {
      id: sp.id,
      title: sp.name,
      address,
      maps: buildGoogleMapsUrl(address),
      categoryId: sp.profile,
    };
  }
  const bp = getBohemianPlaceById(id);
  if (bp) {
    const maps = bp.actions?.maps ?? buildGoogleMapsUrl(`${bp.title}, ${bp.address}`);
    return {
      id: bp.id,
      title: bp.title,
      address: bp.address,
      maps,
      categoryId: bp.categoryId,
    };
  }
  return null;
}

/** Resolve step to place for quest trace. Exact match of step.label to bohemian place title; else label as-is, no id. */
export function resolveStepToPlace(step: QuestStep): ResolvedPlace {
  const profile = getBohemianProfile();
  const place = profile.places.find((p) => p.title === step.label);
  if (place) {
    const maps = place.actions?.maps ?? buildGoogleMapsUrl(`${place.title}, ${place.address}`);
    return {
      id: place.id,
      title: place.title,
      address: place.address,
      maps,
      categoryId: place.categoryId,
    };
  }
  return { title: step.label };
}

/** Map place shape for MapSection (id, name, description, x, y). */
export type MapPlaceForShare = {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
};

/** Resolve place by id for map display. Souvenir-places then bohemian. Only returns places with coords. */
export function resolvePlaceForMap(id: string): MapPlaceForShare | null {
  const sp = getSouvenirPlaceById(id);
  if (sp) return { id: sp.id, name: sp.name, description: sp.description, x: sp.x, y: sp.y };
  const bp = getBohemianPlaceById(id);
  if (bp && bp.x !== undefined && bp.y !== undefined)
    return { id: bp.id, name: bp.title, description: bp.why, x: bp.x, y: bp.y };
  return null;
}
