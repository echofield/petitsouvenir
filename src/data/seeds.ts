/**
 * 🌱 SEEDS — PETIT SOUVENIR CITYNODES
 * 
 * Format standardisé pour créer de nouvelles quêtes, thèmes et contenus.
 * 
 * INSTRUCTIONS :
 * 1. Upload tes images sur Imgur (https://imgur.com/upload)
 * 2. Copie les URLs (format: https://i.imgur.com/XXXXXX.jpeg)
 * 3. Remplace les valeurs ci-dessous
 * 4. Les composants vont automatiquement utiliser ces données
 * 
 * STRUCTURE :
 * - HERO : Image principale de la homepage
 * - QUETES : Liste des 3 quêtes principales
 * - NODES : Points d'intérêt pour chaque quête (avec coordonnées GPS)
 */

// ═══════════════════════════════════════════════════════════════════════
// 🏠 HOMEPAGE — IMAGE HERO
// ═══════════════════════════════════════════════════════════════════════

export const HERO_IMAGE = {
  url: 'https://i.imgur.com/woVnvZ9.jpeg',
  alt: 'Paris — Geste fondateur',
  credit: 'Image par...' // Optionnel
};

// ═══════════════════════════════════════════════════════════════════════
// 🗺️ QUÊTES — Les 3 portes d'entrée
// ═══════════════════════════════════════════════════════════════════════

export interface QueteSeed {
  id: string;                    // Identifiant unique (slug)
  title: string;                 // Titre affiché (ex: "LUTÈCE — ORIGINE")
  registre: string;              // Sous-titre en petites capitales
  theme: string;                 // Phrase d'accroche courte
  shortDescription: string;      // Description pour la carte
  fullDescription: string;       // Description longue pour la page détail
  duree: string;                 // Durée estimée (ex: "≈ 1h30–2h")
  image: string;                 // URL Imgur
  nodes: NodeSeed[];             // Points d'intérêt de la quête
}

export interface NodeSeed {
  id: string;                    // Identifiant unique
  titre: string;                 // Nom du lieu
  adresse: string;               // Adresse complète
  latitude: number;              // Coordonnée GPS
  longitude: number;             // Coordonnée GPS
  theme: string;                 // Catégorie (ex: "Architecture", "Gastronomie")
  texte: string;                 // Description narrative
  imageUrl?: string;             // URL Imgur (optionnel)
  ordre?: number;                // Ordre dans la quête (optionnel)
}

// ───────────────────────────────────────────────────────────────────────
// 📚 QUÊTE 1 : LUTÈCE — ORIGINE
// ───────────────────────────────────────────────────────────────────────

export const QUETE_LUTECE: QueteSeed = {
  id: 'lutece',
  title: 'LUTÈCE — ORIGINE',
  registre: 'FONDATION · GESTE · MESURE',
  theme: 'Paris commence comme un passage : une île, un pont, un axe.',
  shortDescription: 'Avant les palais, avant les façades, Paris fut une solution. Un endroit où l\'eau accepte d\'être franchie.',
  fullDescription: `Paris commence comme un passage : une île, un pont, un axe.

Avant les palais, avant les façades, Paris fut une solution. Un endroit où l'eau accepte d'être franchie.

Cette quête suit les trois gestes fondateurs : l'île, le pont, l'alignement. Elle traverse la ville comme un axe de symétrie, révélant ce qui précède toute fondation.`,
  duree: '≈ 1h30–2h',
  image: 'https://i.imgur.com/1uLhXia.jpeg',
  nodes: [
    {
      id: 'ile-cite',
      titre: 'Île de la Cité',
      adresse: 'Parvis Notre-Dame, 75004 Paris',
      latitude: 48.8534,
      longitude: 2.3488,
      theme: 'Fondation',
      texte: 'Avant d\'être une ville, Paris fut une île. Un lieu où l\'eau peut être franchie. C\'est ici que tout commence : non pas par un palais, mais par un geste — celui de traverser.'
    },
    {
      id: 'pont-neuf',
      titre: 'Pont Neuf',
      adresse: 'Pont Neuf, 75001 Paris',
      latitude: 48.8583,
      longitude: 2.3414,
      theme: 'Passage',
      texte: 'Le premier pont sans maisons. Paris accepte enfin que le passage soit visible, que la traversée soit un événement en soi. Le pont devient monument.'
    },
    {
      id: 'louvre',
      titre: 'Le Louvre',
      adresse: 'Musée du Louvre, 75001 Paris',
      latitude: 48.8606,
      longitude: 2.3376,
      theme: 'Axe',
      texte: 'Le Louvre n\'est pas un musée : c\'est un principe. L\'alignement, la symétrie, l\'axe qui traverse Paris d\'est en ouest. La ville comme géométrie.'
    },
    {
      id: 'tuileries',
      titre: 'Jardin des Tuileries',
      adresse: 'Jardin des Tuileries, 75001 Paris',
      latitude: 48.8634,
      longitude: 2.3275,
      theme: 'Mesure',
      texte: 'Un jardin n\'est pas la nature — c\'est la nature mesurée. Les Tuileries imposent la géométrie au vivant, prolongeant l\'axe du Louvre jusqu\'à l\'infini.'
    }
  ]
};

// ───────────────────────────────────────────────────────────────────────
// 🔥 QUÊTE 2 : 1789 — DÉCISION
// ───────────────────────────────────────────────────────────────────────

export const QUETE_1789: QueteSeed = {
  id: '1789',
  title: '1789 — DÉCISION',
  registre: 'SEUIL · RÉVOLUTION · PASSAGE',
  theme: 'La Révolution n\'est pas une idée : c\'est une trajectoire.',
  shortDescription: 'Paris ne devient révolutionnaire que lorsqu\'il devient poreux. Un lieu où l\'on parle trop, où l\'on écoute trop.',
  fullDescription: `Paris devient révolutionnaire lorsqu'il devient poreux.

Avant 1789, Paris était dense, opaque, fermé. La Révolution n'est pas un événement — c'est une ouverture. Des espaces qui se créent, des murs qui tombent, des voix qui circulent.

Cette quête suit les lieux où Paris s'est ouvert : les cafés, les jardins, les places. Les endroits où la parole est devenue politique.`,
  duree: '≈ 2h–2h30',
  image: 'https://i.imgur.com/iyCcmoS.jpeg',
  nodes: [
    {
      id: 'palais-royal',
      titre: 'Palais-Royal',
      adresse: '8 Rue de Montpensier, 75001 Paris',
      latitude: 48.8634,
      longitude: 2.3373,
      theme: 'Parole',
      texte: 'Avant d\'être une révolution, 1789 fut un endroit. Le Palais-Royal : un jardin où l\'on parle sans permission, où les idées circulent sans contrôle. La révolution commence dans les cafés.'
    },
    {
      id: 'bastille',
      titre: 'Place de la Bastille',
      adresse: 'Place de la Bastille, 75011 Paris',
      latitude: 48.8532,
      longitude: 2.3690,
      theme: 'Geste',
      texte: 'Il ne reste rien de la Bastille. C\'est précisément le point : la révolution ne construit pas, elle efface. Elle ouvre un espace vide où quelque chose de nouveau peut apparaître.'
    },
    {
      id: 'pantheon',
      titre: 'Le Panthéon',
      adresse: 'Place du Panthéon, 75005 Paris',
      latitude: 48.8462,
      longitude: 2.3464,
      theme: 'Mémoire',
      texte: 'Une église devient temple. Les saints deviennent grands hommes. Le Panthéon inscrit la révolution dans la pierre — il transforme un événement en monument.'
    }
  ]
};

// ───────────────────────────────────────────────────────────────────────
// 🍷 QUÊTE 3 : VIN & TABLE — VIE PARISIENNE
// ───────────────────────────────────────────────────────────────────────

export const QUETE_TABLE: QueteSeed = {
  id: 'table',
  title: 'VIN & TABLE — VIE PARISIENNE',
  registre: 'NOURRITURE · CORPS · VILLE VIVANTE',
  theme: 'Une ville mange, boit, respire.',
  shortDescription: 'Une ville se raconte par ce qu\'elle avale. Paris est une gorge : elle boit, elle stocke, elle taxe, elle revend.',
  fullDescription: `Paris n'est pas une ville de monuments — c'est une ville de bouches.

Elle mange, elle boit, elle parle. Les halles, les marchés, les caves, les restaurants : ce sont les organes de Paris. Ce qui fait vivre une ville n'est pas ce qu'on regarde, mais ce qu'on avale.

Cette quête suit les circuits de la nourriture : de la récolte à la table, du vin à la conversation.`,
  duree: '≈ 2h30–3h',
  image: 'https://i.imgur.com/VtWPT2M.jpeg',
  nodes: [
    {
      id: 'halles',
      titre: 'Les Halles (disparu)',
      adresse: 'Forum des Halles, 75001 Paris',
      latitude: 48.8622,
      longitude: 2.3470,
      theme: 'Approvisionnement',
      texte: 'Avant d\'être un centre commercial, les Halles étaient le ventre de Paris. Chaque nuit, la ville se remplissait. La nourriture arrivait, les corps se nourrissaient. Une ville n\'existe que si elle mange.'
    },
    {
      id: 'bercy',
      titre: 'Bercy — Les Caves',
      adresse: 'Parc de Bercy, 75012 Paris',
      latitude: 48.8366,
      longitude: 2.3812,
      theme: 'Conservation',
      texte: 'Paris ne produit pas de vin — elle le stocke. Bercy était le plus grand entrepôt de vin d\'Europe. Une ville se définit par ce qu\'elle conserve, par ce qu\'elle garde en réserve.'
    },
    {
      id: 'bouillon-chartier',
      titre: 'Bouillon Chartier',
      adresse: '7 Rue du Faubourg Montmartre, 75009 Paris',
      latitude: 48.8721,
      longitude: 2.3428,
      theme: 'Table',
      texte: 'Un restaurant n\'est pas un lieu où l\'on mange — c\'est un lieu où l\'on devient parisien. Chartier, depuis 1896, transforme la nourriture en rituel. Manger, c\'est appartenir.'
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 📦 EXPORT CONSOLIDÉ
// ═══════════════════════════════════════════════════════════════════════

export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE
];

// Index par ID pour accès rapide
export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE
};

// ═══════════════════════════════════════════════════════════════════════
// 🎨 CONFIGURATION VISUELLE (optionnel)
// ═══════════════════════════════════════════════════════════════════════

export const VISUAL_CONFIG = {
  colors: {
    background: '#FAF8F2',      // Parchemin crème
    accent: '#003D2C',           // Vert profond
    text: '#1A1A1A',             // Noir chaud
    border: '#DBD4C6'            // Beige léger
  },
  fonts: {
    serif: 'Cormorant Garamond', // Titres, corps de texte
    sans: 'Inter'                 // Petites capitales, UI
  },
  spacing: {
    sm: '12px',
    md: '24px',
    lg: '48px',
    xl: '80px'
  }
};

// ═══════════════════════════════════════════════════════════════════════
// 📝 EXEMPLE D'UTILISATION
// ═══════════════════════════════════════════════════════════════════════

/*

COMMENT AJOUTER UNE NOUVELLE QUÊTE :

1. Upload ton image sur Imgur : https://imgur.com/upload
   → Copie l'URL (ex: https://i.imgur.com/ABC123.jpeg)

2. Crée une nouvelle constante :

export const QUETE_NOUVELLE: QueteSeed = {
  id: 'ma-quete',
  title: 'NOUVELLE QUÊTE — TITRE',
  registre: 'MOT-CLÉ · MOT-CLÉ · MOT-CLÉ',
  theme: 'Phrase d\'accroche courte et percutante.',
  shortDescription: 'Description pour la carte (2-3 lignes max)',
  fullDescription: `Description longue pour la page détail.
  
Peut contenir plusieurs paragraphes.

Utilise le format markdown si besoin.`,
  duree: '≈ 2h–3h',
  image: 'https://i.imgur.com/ABC123.jpeg',
  nodes: [
    {
      id: 'node-1',
      titre: 'Nom du lieu',
      adresse: '123 Rue Example, 75001 Paris',
      latitude: 48.8566,
      longitude: 2.3522,
      theme: 'Catégorie',
      texte: 'Description narrative du lieu et de son importance dans la quête.'
    }
    // Ajoute autant de nodes que nécessaire
  ]
};

3. Ajoute-la aux exports :

export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  QUETE_NOUVELLE  // ← Nouvelle quête
];

export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE,
  'ma-quete': QUETE_NOUVELLE  // ← Nouvelle quête
};

4. C'est tout ! Les composants vont automatiquement l'afficher.

*/

// ═══════════════════════════════════════════════════════════════════════
// 🛠️ HELPERS
// ═══════════════════════════════════════════════════════════════════════

/**
 * Récupère une quête par son ID
 */
export function getQueteById(id: string): QueteSeed | undefined {
  return QUETES_BY_ID[id];
}

/**
 * Récupère tous les nodes d'une quête
 */
export function getNodesByQueteId(queteId: string): NodeSeed[] {
  const quete = getQueteById(queteId);
  return quete?.nodes || [];
}

/**
 * Compte total de nodes sur toutes les quêtes
 */
export function getTotalNodesCount(): number {
  return ALL_QUETES.reduce((total, quete) => total + quete.nodes.length, 0);
}

/**
 * Valide qu'une quête a toutes les données nécessaires
 */
export function validateQuete(quete: QueteSeed): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!quete.id) errors.push('ID manquant');
  if (!quete.title) errors.push('Titre manquant');
  if (!quete.image) errors.push('Image manquante');
  if (!quete.nodes || quete.nodes.length === 0) errors.push('Aucun node défini');
  
  quete.nodes.forEach((node, index) => {
    if (!node.latitude || !node.longitude) {
      errors.push(`Node ${index + 1} : coordonnées GPS manquantes`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
}
