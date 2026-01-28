/**
 * Petit Souvenir — Curated places (standalone, ~12 items).
 * Coords in normalized 800×600; filter by profile in pages.
 */

export type SouvenirProfileId = 'bohemian' | 'family' | 'night';

export interface SouvenirPlace {
  id: string;
  name: string;
  description: string;
  profile: SouvenirProfileId;
  x: number;
  y: number;
}

export const SOUVENIR_PLACES: SouvenirPlace[] = [
  { id: 'p1', name: 'Passage des Panoramas', description: 'Glass and iron arcade. First gas-lit passage in Paris.', profile: 'bohemian', x: 420, y: 265 },
  { id: 'p2', name: 'Galerie Vivienne', description: 'Mosaics and rotunda. A stone salon under the sky.', profile: 'bohemian', x: 410, y: 275 },
  { id: 'p3', name: 'Rue Crémieux', description: 'Painted facades. A village strip in the city.', profile: 'bohemian', x: 435, y: 310 },
  { id: 'p4', name: 'Jardin du Luxembourg', description: 'Chairs, ponds, and shade. A place to sit and watch.', profile: 'family', x: 380, y: 340 },
  { id: 'p5', name: 'Place des Vosges', description: 'Symmetrical square. Laid-back grandeur.', profile: 'family', x: 440, y: 295 },
  { id: 'p6', name: 'Parc de Belleville', description: 'Hills and views. Quiet above the bustle.', profile: 'family', x: 460, y: 240 },
  { id: 'p7', name: 'Square du Vert-Galant', description: 'Tip of the island. River at your feet.', profile: 'family', x: 390, y: 320 },
  { id: 'p8', name: 'La Dernière Goutte', description: 'Wine bar in the 6th. Evenings and conversation.', profile: 'night', x: 370, y: 345 },
  { id: 'p9', name: 'Le Verre Volé', description: 'Canal-side wine and plates. Low-key and warm.', profile: 'night', x: 450, y: 255 },
  { id: 'p10', name: 'Parvis du Sacré-Cœur', description: 'Steps and dusk. The city folds below.', profile: 'night', x: 355, y: 218 },
  { id: 'p11', name: 'Butte Bergeyre', description: 'Secret hill. Vineyard and silence.', profile: 'night', x: 395, y: 235 },
  { id: 'p12', name: 'Jardins du Palais-Royal', description: 'Colonnades and gravel. Day or night, it holds.', profile: 'bohemian', x: 400, y: 285 },
];

export function getSouvenirPlaceById(id: string): SouvenirPlace | undefined {
  return SOUVENIR_PLACES.find((p) => p.id === id);
}

export function getSouvenirPlacesByProfile(profile: SouvenirProfileId): SouvenirPlace[] {
  return SOUVENIR_PLACES.filter((p) => p.profile === profile);
}
