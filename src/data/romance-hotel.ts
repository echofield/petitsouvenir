/**
 * Petit Souvenir — Romance Hotel Edition (coffret world page)
 * Curated content for /coffret/romance-hotel. Not in main Profiles list.
 * x, y are normalized map coords (800×600) for Paris map overlay.
 */

export interface RomanceHotelPlace {
  id: string;
  name: string;
  arrondissement: string;
  address: string;
  bookingUrl?: string;
  note: string;
  x: number;
  y: number;
}

export interface RomanceHotelReadingCompanion {
  title: string;
  moment: string;
}

export interface RomanceHotelSection {
  id: string;
  title: string;
  items: RomanceHotelPlace[];
}

export interface RomanceHotelReadingSection {
  id: 'reading';
  title: string;
  items: RomanceHotelReadingCompanion[];
}

export interface RomanceHotelItinerary {
  title: string;
  day1: string[];
  day2: string[];
}

const ANCHOR_HOTELS: RomanceHotelPlace[] = [
  { id: 'maison-souquet', name: 'Maison Souquet', arrondissement: '9e', address: '10 Rue de Bruxelles, 75009 Paris', bookingUrl: 'https://www.maisonsouquet.com/en/', note: 'Seduction. Private water salon.', x: 400, y: 280 },
  { id: 'hotel-grand-amour', name: 'Hôtel Grand Amour', arrondissement: '10e', address: '18 Rue de la Fidélité, 75010 Paris', bookingUrl: 'https://www.hotelamourparis.fr/', note: 'Cultural cool. Courtyard.', x: 510, y: 260 },
  { id: 'hotel-providence', name: 'Hôtel Providence', arrondissement: '10e', address: '90 Rue René Boulanger, 75010 Paris', bookingUrl: 'https://hotelprovidenceparis.com/en/', note: 'Bohemian chic. In-room cocktails.', x: 505, y: 265 },
];

const TABLES: RomanceHotelPlace[] = [
  { id: 'petrelle', name: 'Pétrelle', arrondissement: '9e', address: '34 Rue Pétrelle, 75009 Paris', bookingUrl: 'https://petrelle.fr', note: 'Candlelit boudoir.', x: 395, y: 285 },
  { id: 'racines', name: 'Racines', arrondissement: '2e', address: '8 Passage des Panoramas, 75002 Paris', bookingUrl: 'https://www.racinesparis.com', note: 'A secret inside the Passage.', x: 455, y: 318 },
  { id: 'parcelles', name: 'Parcelles', arrondissement: '3e', address: '13 Rue Chapon, 75003 Paris', bookingUrl: 'https://parcelles-paris.com/', note: 'Grounded Marais romance.', x: 478, y: 372 },
];

const CAFES: RomanceHotelPlace[] = [
  { id: 'violetta-et-alfredo', name: 'Violetta et Alfredo', arrondissement: '9e', address: '30 Rue de Trévise, 75009 Paris', bookingUrl: 'http://www.violettaetalfredo.fr', note: 'Operatic tea room.', x: 398, y: 278 },
  { id: 'peonies', name: 'Peonies', arrondissement: '10e', address: '81 Rue du Faubourg Saint-Denis, 75010 Paris', note: 'Coffee and flowers.', x: 508, y: 268 },
];

const CULTURE: RomanceHotelPlace[] = [
  { id: 'musee-carnavalet', name: 'Musée Carnavalet', arrondissement: '3e', address: '23 Rue de Sévigné, 75003 Paris', bookingUrl: 'https://www.carnavalet.paris.fr', note: 'The domestic memory of Paris.', x: 480, y: 375 },
  { id: 'maison-victor-hugo', name: 'Maison de Victor Hugo', arrondissement: '4e', address: '6 Place des Vosges, 75004 Paris', bookingUrl: 'http://maisonsvictorhugo.paris.fr/en', note: 'Romantic core at Place des Vosges.', x: 492, y: 395 },
];

const CINEMA: RomanceHotelPlace[] = [
  { id: 'le-louxor', name: 'Le Louxor', arrondissement: '10e', address: '170 Boulevard de Magenta, 75010 Paris', bookingUrl: 'https://www.cinemalouxor.fr/', note: 'Neo-Egyptian jewel. Rooftop view.', x: 502, y: 255 },
  { id: 'le-grand-rex', name: 'Le Grand Rex', arrondissement: '2e', address: '1 Boulevard Poissonnière, 75002 Paris', bookingUrl: 'https://www.legrandrex.com', note: 'A starry night ceiling.', x: 458, y: 315 },
];

const CARE: RomanceHotelPlace[] = [
  { id: 'spa-clemens', name: 'Spa Clēmēns', arrondissement: '1er', address: '18 Rue de Montpensier, 75001 Paris', bookingUrl: 'https://www.spaclemens.com/', note: 'Floating ritual in vaulted cellars.', x: 418, y: 352 },
];

const READING_COMPANIONS: RomanceHotelReadingCompanion[] = [
  { title: 'Rainer Maria Rilke — Letters to a Young Poet', moment: 'Café, quiet morning.' },
  { title: 'Paul Éluard — Capitale de la douleur', moment: 'Before dinner, one poem only.' },
  { title: 'Victor Hugo — fragments / letters', moment: 'Place des Vosges.' },
  { title: 'Colette — fragments', moment: 'Between walks.' },
  { title: 'A small blank notebook', moment: 'To keep the trip.' },
];

export const ROMANCE_HOTEL_SECTIONS: RomanceHotelSection[] = [
  { id: 'anchor', title: 'Anchor Hotels', items: ANCHOR_HOTELS },
  { id: 'tables', title: 'Tables', items: TABLES },
  { id: 'cafes', title: 'Cafés', items: CAFES },
  { id: 'culture', title: 'Culture', items: CULTURE },
  { id: 'cinema', title: 'Cinema', items: CINEMA },
  { id: 'care', title: 'Care', items: CARE },
];

export const ROMANCE_HOTEL_READING: RomanceHotelReadingSection = {
  id: 'reading',
  title: 'Reading Companions',
  items: READING_COMPANIONS,
};

export const ROMANCE_HOTEL_ITINERARY: RomanceHotelItinerary = {
  title: 'Hotel Edition — 2 days',
  day1: [
    'Peonies + Canal walk',
    'Musée Carnavalet',
    'Dinner at Pétrelle',
    'Le Louxor',
  ],
  day2: [
    'Passage des Panoramas',
    'Lunch at Racines',
    'Maison de Victor Hugo + Place des Vosges',
    'Parcelles (or Grand Rex)',
  ],
};

export const ROMANCE_HOTEL_PREFACE = [
  'Paris has a cliché of romance. The real movement has shifted north — to the Right Bank.',
  'Here, romance is atmospheric density: corridors, courtyards, velvet nights, canal mornings.',
  'This Coffret is built for couples who want texture over postcard.',
];

/** All places with map coords, for Paris map overlay. */
export function getRomanceHotelMapPlaces(): RomanceHotelPlace[] {
  return ROMANCE_HOTEL_SECTIONS.flatMap((s) => s.items);
}
