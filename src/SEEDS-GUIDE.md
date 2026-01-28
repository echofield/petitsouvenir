# 🌱 GUIDE DE REPRODUCTION — SYSTÈME DE SEEDS

Ce guide explique comment **reproduire facilement le système PETIT SOUVENIR** avec de nouvelles images, quêtes et thèmes.

---

## 📦 ARCHITECTURE DES SEEDS

```
/data/seeds.ts              ← Toutes les données structurées
/components/QuetesV1.tsx    ← Lit automatiquement depuis seeds.ts
/components/QueteDetail.tsx ← Lit automatiquement depuis seeds.ts
/components/HomepageV1.tsx  ← Lit l'image hero depuis seeds.ts
```

**Principe** : Tu modifies uniquement `/data/seeds.ts`, et tous les composants s'adaptent automatiquement.

---

## 🚀 WORKFLOW COMPLET

### **ÉTAPE 1 : Préparer tes images**

1. **Upload sur Imgur** : https://imgur.com/upload
2. **Copie l'URL directe** :
   ```
   ✅ BON : https://i.imgur.com/ABC123.jpeg
   ❌ MAUVAIs : https://imgur.com/ABC123
   ```

3. **Types d'images nécessaires** :
   - **1 image HERO** (pour la homepage)
   - **3 images de QUÊTES** (une par quête)
   - **N images de NODES** (optionnel, pour les points d'intérêt)

---

### **ÉTAPE 2 : Modifier `/data/seeds.ts`**

#### **A) Changer l'image Hero (Homepage)**

```typescript
export const HERO_IMAGE = {
  url: 'https://i.imgur.com/NOUVELLE-IMAGE.jpeg',  // ← Change ici
  alt: 'Nouvelle ville — Description',
  credit: 'Photo par...' // Optionnel
};
```

#### **B) Créer une nouvelle quête**

```typescript
export const QUETE_EXEMPLE: QueteSeed = {
  id: 'nouvelle-quete',                              // ← Slug unique
  title: 'NOUVEAU THÈME — TITRE COURT',              // ← Titre affiché
  registre: 'MOT-CLÉ · MOT-CLÉ · MOT-CLÉ',          // ← Sous-titre
  theme: 'Phrase d\'accroche percutante.',           // ← Teaser
  shortDescription: 'Description courte (2 lignes)', // ← Pour la carte
  fullDescription: `Description longue.
  
Peut contenir plusieurs paragraphes.

Raconte l'histoire complète de la quête.`,          // ← Pour la page détail
  
  duree: '≈ 2h–3h',                                  // ← Durée estimée
  image: 'https://i.imgur.com/ABC123.jpeg',          // ← URL Imgur
  
  nodes: [                                            // ← Points d'intérêt
    {
      id: 'node-1',
      titre: 'Nom du lieu',
      adresse: '123 Rue Example, 75001 Paris',
      latitude: 48.8566,                              // ← GPS
      longitude: 2.3522,                              // ← GPS
      theme: 'Catégorie',                             // ← Type de lieu
      texte: 'Pourquoi ce lieu est important...',     // ← Narrative
      imageUrl: 'https://i.imgur.com/XYZ.jpeg'       // ← Optionnel
    },
    {
      id: 'node-2',
      titre: 'Deuxième lieu',
      // ... même structure
    }
    // Ajoute autant de nodes que nécessaire
  ]
};
```

#### **C) Enregistrer la nouvelle quête**

```typescript
// 1. Ajoute-la à la liste complète
export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  QUETE_EXEMPLE  // ← Nouvelle quête ici
];

// 2. Ajoute-la à l'index
export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE,
  'nouvelle-quete': QUETE_EXEMPLE  // ← Et ici
};
```

---

### **ÉTAPE 3 : Obtenir les coordonnées GPS**

**Option 1 : Google Maps**
1. Ouvre Google Maps
2. Clic droit sur le lieu
3. Copie les coordonnées (format: `48.8566, 2.3522`)

**Option 2 : latlong.net**
1. Va sur https://www.latlong.net/
2. Cherche l'adresse
3. Copie latitude et longitude

**Format attendu :**
```typescript
latitude: 48.8566,   // ← Nombre décimal
longitude: 2.3522    // ← Nombre décimal
```

---

### **ÉTAPE 4 : Connecter les composants (SI NÉCESSAIRE)**

**⚠️ Si tu as créé ce projet depuis zéro**, assure-toi que tes composants importent les seeds :

```typescript
// Dans /components/QuetesV1.tsx
import { ALL_QUETES } from '../data/seeds';

// Dans /components/QueteDetail.tsx
import { QUETES_BY_ID } from '../data/seeds';

// Dans /components/HomepageV1.tsx
import { HERO_IMAGE } from '../data/seeds';
```

**✅ Dans ton projet actuel, c'est déjà configuré !**

---

## 🎨 PERSONNALISER L'ESTHÉTIQUE

### **Couleurs**

Modifie dans `/data/seeds.ts` :

```typescript
export const VISUAL_CONFIG = {
  colors: {
    background: '#FAF8F2',  // ← Fond parchemin
    accent: '#003D2C',       // ← Vert profond
    text: '#1A1A1A',         // ← Noir chaud
    border: '#DBD4C6'        // ← Bordures
  }
};
```

Puis applique dans `/styles/globals.css` :

```css
:root {
  --color-bg: #FAF8F2;
  --color-accent: #003D2C;
  --color-text: #1A1A1A;
  --color-border: #DBD4C6;
}
```

### **Typographie**

```typescript
export const VISUAL_CONFIG = {
  fonts: {
    serif: 'Cormorant Garamond',  // ← Change ici
    sans: 'Inter'                  // ← Change ici
  }
};
```

---

## 🔄 EXEMPLE COMPLET : CRÉER "LYON — CONFLUENCE"

```typescript
// 1. Upload 4 images sur Imgur
const HERO_LYON = 'https://i.imgur.com/LYON-HERO.jpeg';
const IMG_CONFLUENCE = 'https://i.imgur.com/CONFLUENCE.jpeg';
const IMG_CROIX_ROUSSE = 'https://i.imgur.com/CROIX-ROUSSE.jpeg';
const IMG_PRESQUILE = 'https://i.imgur.com/PRESQUILE.jpeg';

// 2. Créer les quêtes
export const QUETE_CONFLUENCE: QueteSeed = {
  id: 'confluence',
  title: 'CONFLUENCE — FUSION',
  registre: 'EAU · FLEUVE · RENCONTRE',
  theme: 'Lyon naît où deux rivières s\'embrassent.',
  shortDescription: 'Rhône et Saône se rejoignent. La ville commence là où les eaux se mêlent.',
  fullDescription: `Lyon commence au point de confluence.
  
Avant d'être une ville de commerce ou de gastronomie, Lyon fut une solution hydraulique : comment habiter l'endroit où deux fleuves se rencontrent ?`,
  duree: '≈ 2h',
  image: IMG_CONFLUENCE,
  nodes: [
    {
      id: 'musee-confluence',
      titre: 'Musée des Confluences',
      adresse: '86 Quai Perrache, 69002 Lyon',
      latitude: 45.7326,
      longitude: 4.8183,
      theme: 'Architecture',
      texte: 'Le musée marque le point exact où Rhône et Saône se rejoignent. Un lieu de fusion, d\'hybridation, de mélange.'
    },
    {
      id: 'pont-lafayette',
      titre: 'Pont Lafayette',
      adresse: 'Pont Lafayette, 69003 Lyon',
      latitude: 45.7597,
      longitude: 4.8420,
      theme: 'Passage',
      texte: 'Un pont n\'est pas une connexion — c\'est une reconnaissance. Lyon reconnaît qu\'elle existe sur deux rives.'
    }
  ]
};

// 3. Enregistrer
export const ALL_QUETES = [
  QUETE_CONFLUENCE,
  // ... autres quêtes
];

export const QUETES_BY_ID = {
  confluence: QUETE_CONFLUENCE,
  // ... autres quêtes
};
```

---

## ✅ CHECKLIST AVANT DÉPLOIEMENT

- [ ] Toutes les images sont uploadées sur Imgur
- [ ] Toutes les URLs commencent par `https://i.imgur.com/`
- [ ] Chaque quête a un `id` unique
- [ ] Chaque node a des coordonnées GPS valides
- [ ] Les quêtes sont ajoutées à `ALL_QUETES` ET `QUETES_BY_ID`
- [ ] Test local : `npm run dev`
- [ ] Test que toutes les images s'affichent
- [ ] Test que les nodes apparaissent dans le Carnet Parisien

---

## 🚀 DÉPLOYER LA NOUVELLE VERSION

```bash
# 1. Commit les changements
git add data/seeds.ts
git commit -m "Add new quests: Lyon Confluence"

# 2. Push sur GitHub
git push origin main

# 3. Vercel déploie automatiquement
# (ou redéploie manuellement depuis vercel.com)
```

---

## 📝 TEMPLATES RAPIDES

### **Template : Quête minimaliste**

```typescript
export const QUETE_TEMPLATE: QueteSeed = {
  id: 'id-unique',
  title: 'TITRE — THÈME',
  registre: 'MOT · MOT · MOT',
  theme: 'Une phrase.',
  shortDescription: 'Courte description.',
  fullDescription: 'Description complète.',
  duree: '≈ 2h',
  image: 'https://i.imgur.com/XXX.jpeg',
  nodes: [
    {
      id: 'node-1',
      titre: 'Lieu',
      adresse: 'Adresse complète',
      latitude: 0,
      longitude: 0,
      theme: 'Catégorie',
      texte: 'Texte narratif.'
    }
  ]
};
```

### **Template : Node avec image**

```typescript
{
  id: 'node-avec-image',
  titre: 'Nom du lieu',
  adresse: 'Adresse',
  latitude: 48.8566,
  longitude: 2.3522,
  theme: 'Architecture',
  texte: 'Description narrative longue qui raconte pourquoi ce lieu est important dans la quête.',
  imageUrl: 'https://i.imgur.com/IMAGE.jpeg',  // ← Image spécifique au node
  ordre: 1                                       // ← Ordre d'apparition (optionnel)
}
```

---

## 🛟 TROUBLESHOOTING

**Problème : Les images ne s'affichent pas**
- ✅ Vérifie que l'URL commence par `https://i.imgur.com/`
- ✅ Teste l'URL directement dans ton navigateur
- ✅ Assure-toi que l'image est publique sur Imgur

**Problème : La quête n'apparaît pas**
- ✅ Vérifie que tu l'as ajoutée dans `ALL_QUETES`
- ✅ Vérifie que tu l'as ajoutée dans `QUETES_BY_ID`
- ✅ Vérifie que l'`id` est unique

**Problème : Les coordonnées GPS ne fonctionnent pas**
- ✅ Format : `latitude: 48.8566` (nombre, pas string)
- ✅ Vérifie sur Google Maps que les coordonnées sont correctes
- ✅ Latitude : entre -90 et 90
- ✅ Longitude : entre -180 et 180

---

## 🎯 PROCHAINES ÉTAPES

1. **Modifier `/data/seeds.ts`** avec tes nouvelles données
2. **Tester localement** : `npm run dev`
3. **Commit + Push** sur GitHub
4. **Vérifier** le déploiement automatique sur Vercel

**C'est tout !** Le système de seeds rend la reproduction ultra-simple. 🚀
