/**
 * 🌱 EXEMPLE DE SEED COMPLET : LYON
 * 
 * Ce fichier montre comment adapter PETIT SOUVENIR à une nouvelle ville.
 * C'est un exemple 100% fonctionnel que tu peux copier-coller.
 */

import { QueteSeed, NodeSeed } from './seeds';

// ═══════════════════════════════════════════════════════════════════════
// 🏠 HERO IMAGE — LYON
// ═══════════════════════════════════════════════════════════════════════

export const HERO_IMAGE_LYON = {
  url: 'https://i.imgur.com/EXEMPLE-LYON.jpeg',  // ← Remplace par ton image
  alt: 'Lyon — Ville des confluences',
  credit: 'Photo : Unsplash'
};

// ═══════════════════════════════════════════════════════════════════════
// 🗺️ QUÊTE 1 : CONFLUENCE
// ═══════════════════════════════════════════════════════════════════════

export const QUETE_CONFLUENCE: QueteSeed = {
  id: 'confluence',
  title: 'CONFLUENCE — FUSION',
  registre: 'EAU · FLEUVE · RENCONTRE',
  theme: 'Lyon naît où deux rivières s\'embrassent.',
  shortDescription: 'Rhône et Saône se rejoignent. La ville commence là où les eaux se mêlent.',
  fullDescription: `Lyon commence au point de confluence.

Avant d'être une ville de commerce ou de gastronomie, Lyon fut une solution hydraulique : comment habiter l'endroit où deux fleuves se rencontrent ?

Cette quête explore le geste fondateur de Lyon : bâtir à la confluence.`,
  duree: '≈ 2h',
  image: 'https://i.imgur.com/EXEMPLE-CONFLUENCE.jpeg',
  nodes: [
    {
      id: 'musee-confluence',
      titre: 'Musée des Confluences',
      adresse: '86 Quai Perrache, 69002 Lyon',
      latitude: 45.7326,
      longitude: 4.8183,
      theme: 'Architecture',
      texte: 'Le musée marque le point exact où Rhône et Saône se rejoignent. Un lieu de fusion, d\'hybridation, de mélange. L\'architecture elle-même est une confluence : verre, acier, béton.'
    },
    {
      id: 'pont-raymond-barre',
      titre: 'Pont Raymond Barre',
      adresse: 'Pont Raymond Barre, 69002 Lyon',
      latitude: 45.7359,
      longitude: 4.8185,
      theme: 'Infrastructure',
      texte: 'Un pont n\'est pas une connexion — c\'est une reconnaissance. Lyon reconnaît qu\'elle existe sur plusieurs rives, qu\'elle est multiple par nature.'
    },
    {
      id: 'confluence-parc',
      titre: 'Parc de la Confluence',
      adresse: 'Cours Charlemagne, 69002 Lyon',
      latitude: 45.7380,
      longitude: 4.8170,
      theme: 'Nature urbaine',
      texte: 'Un parc au point de fusion. La nature reprend ses droits là où les eaux se mêlent. Lyon accepte que la confluence soit un lieu de vie, pas seulement de passage.'
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 🗺️ QUÊTE 2 : CROIX-ROUSSE
// ═══════════════════════════════════════════════════════════════════════

export const QUETE_CROIX_ROUSSE: QueteSeed = {
  id: 'croix-rousse',
  title: 'CROIX-ROUSSE — PENTE',
  registre: 'TRAVAIL · SOIE · VERTICALE',
  theme: 'Lyon ne s\'étend pas : elle monte.',
  shortDescription: 'La Croix-Rousse n\'est pas un quartier — c\'est une altitude. Lyon devient verticale.',
  fullDescription: `Lyon monte la pente.

La Croix-Rousse est le quartier des canuts, des tisseurs de soie. Mais avant d'être un métier, c'est une géométrie : celle de la verticalité, des escaliers, des traboules.

Cette quête grimpe la colline, révélant comment Lyon s'est construite en hauteur.`,
  duree: '≈ 2h30',
  image: 'https://i.imgur.com/EXEMPLE-CROIX-ROUSSE.jpeg',
  nodes: [
    {
      id: 'montee-grande-cote',
      titre: 'Montée de la Grande Côte',
      adresse: 'Montée de la Grande Côte, 69001 Lyon',
      latitude: 45.7697,
      longitude: 4.8281,
      theme: 'Passage',
      texte: 'Une rue qui monte. Simple, brutal, essentiel. La Grande Côte relie le bas et le haut de Lyon. Elle inscrit la pente dans le quotidien.'
    },
    {
      id: 'place-colbert',
      titre: 'Place Colbert',
      adresse: 'Place Colbert, 69001 Lyon',
      latitude: 45.7714,
      longitude: 4.8308,
      theme: 'Espace public',
      texte: 'Une place en pente. Colbert prouve que Lyon ne cherche pas la platitude — elle assume son relief. Même les espaces de rencontre sont inclinés.'
    },
    {
      id: 'mur-canuts',
      titre: 'Mur des Canuts',
      adresse: 'Boulevard des Canuts, 69004 Lyon',
      latitude: 45.7786,
      longitude: 4.8269,
      theme: 'Art urbain',
      texte: 'Le plus grand trompe-l\'œil d\'Europe. Le mur des Canuts efface la limite entre réel et peint. Lyon se raconte en images, pas seulement en pierres.'
    },
    {
      id: 'jardin-rosa-mir',
      titre: 'Jardin Rosa Mir',
      adresse: '89 Grande Rue de la Croix-Rousse, 69004 Lyon',
      latitude: 45.7768,
      longitude: 4.8294,
      theme: 'Architecture vernaculaire',
      texte: 'Un jardin secret, invisible depuis la rue. Rosa Mir est un délire architectural : coquillages, pierres, obsession. Lyon cache des mondes entiers.'
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 🗺️ QUÊTE 3 : PRESQU'ÎLE
// ═══════════════════════════════════════════════════════════════════════

export const QUETE_PRESQUILE: QueteSeed = {
  id: 'presquile',
  title: 'PRESQU\'ÎLE — COMMERCE',
  registre: 'VILLE · BOURGEOISIE · ÉCHANGE',
  theme: 'Lyon devient ville quand elle devient marchandise.',
  shortDescription: 'Entre Rhône et Saône, la Presqu\'île invente le centre. Lyon devient commerçante.',
  fullDescription: `La Presqu'île n'est pas une île — c'est presque une île.

Cette ambiguïté définit Lyon : ni vraiment terre, ni vraiment eau. Un entre-deux qui devient centre, qui devient cœur de la ville.

Cette quête traverse la Presqu'île du nord au sud, révélant comment Lyon est devenue une ville de commerce.`,
  duree: '≈ 2h',
  image: 'https://i.imgur.com/EXEMPLE-PRESQUILE.jpeg',
  nodes: [
    {
      id: 'place-terreaux',
      titre: 'Place des Terreaux',
      adresse: 'Place des Terreaux, 69001 Lyon',
      latitude: 45.7676,
      longitude: 4.8336,
      theme: 'Espace public',
      texte: 'La place des Terreaux est le cœur administratif de Lyon. Hôtel de Ville, Musée des Beaux-Arts, fontaine Bartholdi. C\'est ici que Lyon se gouverne.'
    },
    {
      id: 'rue-republique',
      titre: 'Rue de la République',
      adresse: 'Rue de la République, 69002 Lyon',
      latitude: 45.7640,
      longitude: 4.8356,
      theme: 'Commerce',
      texte: 'L\'axe commercial de Lyon. Large, droite, haussmannienne. La rue de la République transforme la marche en consommation.'
    },
    {
      id: 'place-bellecour',
      titre: 'Place Bellecour',
      adresse: 'Place Bellecour, 69002 Lyon',
      latitude: 45.7578,
      longitude: 4.8320,
      theme: 'Monumentalité',
      texte: 'Une des plus grandes places d\'Europe. Bellecour est le vide central de Lyon — un espace qui ne sert à rien, qui existe pour être grand.'
    },
    {
      id: 'confluence-shopping',
      titre: 'Confluence Shopping',
      adresse: '112 Cours Charlemagne, 69002 Lyon',
      latitude: 45.7407,
      longitude: 4.8185,
      theme: 'Commerce moderne',
      texte: 'Le centre commercial de la Confluence clôt la Presqu\'île. Lyon termine sur du commerce — comme elle a commencé.'
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 📦 EXPORT CONSOLIDÉ — LYON
// ═══════════════════════════════════════════════════════════════════════

export const ALL_QUETES_LYON: QueteSeed[] = [
  QUETE_CONFLUENCE,
  QUETE_CROIX_ROUSSE,
  QUETE_PRESQUILE
];

export const QUETES_BY_ID_LYON: Record<string, QueteSeed> = {
  confluence: QUETE_CONFLUENCE,
  'croix-rousse': QUETE_CROIX_ROUSSE,
  presquile: QUETE_PRESQUILE
};

// ═══════════════════════════════════════════════════════════════════════
// 🎨 CONFIGURATION VISUELLE — LYON (optionnel)
// ═══════════════════════════════════════════════════════════════════════

export const VISUAL_CONFIG_LYON = {
  colors: {
    background: '#F5F3ED',      // Crème légèrement plus froid
    accent: '#8B2635',           // Rouge lyonnais (canuts)
    text: '#1A1A1A',
    border: '#D4CDC3'
  },
  fonts: {
    serif: 'Cormorant Garamond',
    sans: 'Inter'
  }
};

// ═══════════════════════════════════════════════════════════════════════
// 📝 INSTRUCTIONS D'UTILISATION
// ═══════════════════════════════════════════════════════════════════════

/*

POUR UTILISER CE SEED LYON :

1. COPIE tout le contenu de ce fichier

2. REMPLACE dans /data/seeds.ts :
   - HERO_IMAGE par HERO_IMAGE_LYON
   - ALL_QUETES par ALL_QUETES_LYON
   - QUETES_BY_ID par QUETES_BY_ID_LYON

3. REMPLACE les images :
   - Upload 4 images sur Imgur (hero + 3 quêtes)
   - Remplace les URLs "EXEMPLE-..." par tes vraies URLs

4. TESTE :
   npm run dev

5. DÉPLOIE :
   git add .
   git commit -m "Launch PETIT SOUVENIR Lyon"
   git push origin main

*/

// ═══════════════════════════════════════════════════════════════════════
// 💡 NOTES SUR L'ADAPTATION
// ═══════════════════════════════════════════════════════════════════════

/*

LYON vs PARIS — DIFFÉRENCES :

1. THÈMES :
   - Paris : Fondation, Révolution, Gastronomie
   - Lyon : Confluence, Verticalité, Commerce
   
   → Chaque ville a ses propres "portes d'entrée"

2. GÉOGRAPHIE :
   - Paris : Axe est-ouest, île centrale
   - Lyon : Confluence, pente, presqu'île
   
   → La géographie définit les quêtes

3. IDENTITÉ :
   - Paris : Monumentale, politique, culturelle
   - Lyon : Industrielle, commerçante, gourmande
   
   → L'identité détermine les récits

MÉTHODOLOGIE POUR ADAPTER À UNE AUTRE VILLE :

1. Identifie le GESTE FONDATEUR (ex: Lyon = confluence)
2. Trouve 3 PORTES D'ENTRÉE complémentaires
3. Sélectionne 3-4 LIEUX par quête (pas plus)
4. Écris un RÉCIT qui relie les lieux entre eux
5. Upload les images, teste, déploie

*/
