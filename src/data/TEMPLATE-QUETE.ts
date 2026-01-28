/**
 * 📋 TEMPLATE DE QUÊTE — COPIE-COLLE RAPIDE
 * 
 * Instructions :
 * 1. Copie ce template
 * 2. Remplace tous les [PLACEHOLDER]
 * 3. Colle dans /data/seeds.ts
 * 4. Ajoute à ALL_QUETES et QUETES_BY_ID
 */

export const QUETE_[NOM]: QueteSeed = {
  // ─────────────────────────────────────────────────────────────────────
  // INFORMATIONS GÉNÉRALES
  // ─────────────────────────────────────────────────────────────────────
  
  id: '[slug-unique]',                    // Ex: 'lutece', 'revolution', 'seine'
  
  title: '[TITRE — THÈME]',               // Ex: 'LUTÈCE — ORIGINE'
  
  registre: '[MOT · MOT · MOT]',          // Ex: 'FONDATION · GESTE · MESURE'
  
  theme: '[Phrase d\'accroche courte]',   // Ex: 'Paris commence comme un passage.'
  
  // ─────────────────────────────────────────────────────────────────────
  // DESCRIPTIONS
  // ─────────────────────────────────────────────────────────────────────
  
  shortDescription: '[Description courte pour la carte (2-3 lignes max)]',
  
  fullDescription: `[Description longue pour la page détail]

[Peut contenir plusieurs paragraphes]

[Raconte l'histoire complète de la quête]`,
  
  // ─────────────────────────────────────────────────────────────────────
  // MÉTADONNÉES
  // ─────────────────────────────────────────────────────────────────────
  
  duree: '≈ [X]h–[Y]h',                   // Ex: '≈ 2h–3h'
  
  image: 'https://i.imgur.com/[ID].jpeg', // URL Imgur de l'image de la carte
  
  // ─────────────────────────────────────────────────────────────────────
  // NODES (POINTS D'INTÉRÊT)
  // ─────────────────────────────────────────────────────────────────────
  
  nodes: [
    {
      id: '[node-1]',
      titre: '[Nom du premier lieu]',
      adresse: '[Adresse complète]',
      latitude: 0.0000,                    // ← Coordonnée GPS (nombre)
      longitude: 0.0000,                   // ← Coordonnée GPS (nombre)
      theme: '[Catégorie]',                // Ex: 'Architecture', 'Histoire'
      texte: '[Description narrative du lieu et de son importance]',
      imageUrl: 'https://i.imgur.com/[ID].jpeg' // Optionnel
    },
    
    {
      id: '[node-2]',
      titre: '[Nom du deuxième lieu]',
      adresse: '[Adresse complète]',
      latitude: 0.0000,
      longitude: 0.0000,
      theme: '[Catégorie]',
      texte: '[Description narrative]',
      imageUrl: 'https://i.imgur.com/[ID].jpeg' // Optionnel
    },
    
    {
      id: '[node-3]',
      titre: '[Nom du troisième lieu]',
      adresse: '[Adresse complète]',
      latitude: 0.0000,
      longitude: 0.0000,
      theme: '[Catégorie]',
      texte: '[Description narrative]',
      imageUrl: 'https://i.imgur.com/[ID].jpeg' // Optionnel
    }
    
    // Ajoute autant de nodes que nécessaire
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 📦 ENREGISTREMENT
// ═══════════════════════════════════════════════════════════════════════

/*

APRÈS AVOIR CRÉÉ TA QUÊTE, AJOUTE-LA ICI :

export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  QUETE_[NOM]  // ← Ajoute ta nouvelle quête
];

export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE,
  '[slug-unique]': QUETE_[NOM]  // ← Ajoute ta nouvelle quête
};

*/

// ═══════════════════════════════════════════════════════════════════════
// 🔍 EXEMPLE COMPLET
// ═══════════════════════════════════════════════════════════════════════

/*

export const QUETE_SEINE: QueteSeed = {
  id: 'seine',
  title: 'LA SEINE — CIRCULATION',
  registre: 'EAU · FLUX · TRANSPORT',
  theme: 'Paris existe parce que la Seine accepte d\'être navigable.',
  shortDescription: 'Avant d\'être une ville de monuments, Paris fut un port. La Seine était une route.',
  fullDescription: `Paris n'a pas été construite sur la Seine par hasard.

La Seine est navigable, lente, large. Elle accepte les bateaux, les marchandises, les corps.

Cette quête suit le fleuve d'est en ouest, révélant comment l'eau a façonné la ville.`,
  duree: '≈ 3h',
  image: 'https://i.imgur.com/ABC123.jpeg',
  nodes: [
    {
      id: 'ile-saint-louis',
      titre: 'Île Saint-Louis',
      adresse: 'Île Saint-Louis, 75004 Paris',
      latitude: 48.8517,
      longitude: 2.3558,
      theme: 'Architecture',
      texte: 'L\'île qui n\'était rien. Saint-Louis fut longtemps un terrain vague, un endroit où rien ne se passait. Puis la ville l\'a colonisée.',
      imageUrl: 'https://i.imgur.com/XYZ.jpeg'
    },
    {
      id: 'pont-neuf',
      titre: 'Pont Neuf',
      adresse: 'Pont Neuf, 75001 Paris',
      latitude: 48.8583,
      longitude: 2.3414,
      theme: 'Infrastructure',
      texte: 'Le premier pont sans maisons. Paris accepte enfin que traverser soit un événement.'
    }
  ]
};

*/
