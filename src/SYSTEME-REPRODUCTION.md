# 🌱 SYSTÈME DE REPRODUCTION — PETIT SOUVENIR

> **Reproduis facilement PETIT SOUVENIR pour n'importe quelle ville en moins d'1 heure**

---

## 🎯 EN BREF

Ce projet contient un **système complet de reproduction** qui permet de créer une nouvelle version de PETIT SOUVENIR (Paris, Lyon, Marseille, Tokyo...) en modifiant **UN SEUL FICHIER** : `/data/seeds.ts`.

**Temps requis** : ~1h (avec images prêtes)  
**Difficulté** : ⭐ Facile (aucun code React à toucher)  
**Format** : Données structurées (TypeScript)

---

## 🚀 DÉMARRAGE ULTRA-RAPIDE

### **Option 1 : Guide rapide (2 min)**
```bash
cat QUICK-START.md
```

### **Option 2 : Générateur interactif (5 min)**
```bash
node scripts/generate-seed.js
```

### **Option 3 : Template copier-coller (3 min)**
```bash
# 1. Ouvre ce fichier
data/TEMPLATE-QUETE.ts

# 2. Copie tout
# 3. Remplace les [PLACEHOLDER]
# 4. Colle dans data/seeds.ts
```

---

## 📁 FICHIERS IMPORTANTS

| Fichier | Rôle | Priorité |
|---------|------|----------|
| **`/data/seeds.ts`** | **FICHIER PRINCIPAL** — Toutes les données | 🔴 Critique |
| `/QUICK-START.md` | Guide rapide (2 min) | 🔴 Critique |
| `/data/TEMPLATE-QUETE.ts` | Template vide | 🔴 Critique |
| `/SEEDS-GUIDE.md` | Guide complet (10 min) | 🟡 Utile |
| `/CHECKLIST.md` | Checklist interactive | 🟡 Utile |
| `/data/EXEMPLE-LYON.ts` | Exemple complet Lyon | 🟢 Optionnel |
| `/scripts/generate-seed.js` | Générateur CLI | 🟢 Optionnel |
| `/scripts/validate-seeds.js` | Validateur | 🟢 Optionnel |

**📖 Guide complet** : Voir `/INDEX.md` pour l'arborescence détaillée

---

## 🌍 FORMAT DES DONNÉES

### **Structure d'une quête :**

```typescript
{
  id: 'slug-unique',                     // Ex: 'lutece', 'confluence'
  title: 'TITRE — THÈME',                // Ex: 'LUTÈCE — ORIGINE'
  registre: 'MOT · MOT · MOT',          // Ex: 'FONDATION · GESTE · MESURE'
  theme: 'Phrase d\'accroche courte',   // Teaser
  shortDescription: 'Desc courte',       // Pour la carte (2-3 lignes)
  fullDescription: 'Desc longue',        // Pour la page détail
  duree: '≈ 2h',                         // Durée estimée
  image: 'https://i.imgur.com/XXX.jpeg', // URL Imgur
  nodes: [                               // Points d'intérêt
    {
      id: 'node-1',
      titre: 'Nom du lieu',
      adresse: 'Adresse complète',
      latitude: 48.8566,                 // GPS (nombre)
      longitude: 2.3522,                 // GPS (nombre)
      theme: 'Catégorie',
      texte: 'Description narrative',
      imageUrl: 'https://i.imgur.com/YYY.jpeg' // Optionnel
    }
  ]
}
```

---

## ⚡ WORKFLOW EN 5 ÉTAPES

```
1. CONCEPTION (30 min)
   → Choisir 3 thèmes pour la ville
   → Sélectionner 3-4 lieux par thème
   → Écrire les récits

2. IMAGES (15 min)
   → Upload sur Imgur (https://imgur.com/upload)
   → Copier les URLs

3. GPS (10 min)
   → Google Maps → Clic droit → Coordonnées
   → Copier latitude & longitude

4. CODAGE (5 min)
   → Copier template
   → Remplacer [PLACEHOLDER]
   → Coller dans seeds.ts

5. DÉPLOIEMENT (2 min)
   → git push
   → Vercel déploie automatiquement
```

**TOTAL : ~1h**

---

## 🎨 EXEMPLES D'ADAPTATIONS

### **PARIS (actuel)**
- Lutèce — Origine
- 1789 — Décision
- Vin & Table — Vie Parisienne

### **LYON (exemple fourni)**
- Confluence — Fusion
- Croix-Rousse — Pente
- Presqu'île — Commerce

→ Voir `/data/EXEMPLE-LYON.ts` pour le code complet

### **MARSEILLE (à créer)**
- Vieux-Port — Fondation
- Calanques — Nature
- Panier — Identité

### **TOKYO (à créer)**
- Shibuya — Flux
- Edo — Mémoire
- Métro — Verticalité

---

## 🛠️ OUTILS FOURNIS

### **1. Générateur interactif**
Crée une quête en répondant à des questions :
```bash
node scripts/generate-seed.js
```

### **2. Validateur**
Vérifie que les données sont correctes avant déploiement :
```bash
node scripts/validate-seeds.js
```

### **3. Optimiseur d'images**
Optimise automatiquement les images Imgur :
```typescript
import { ImgurPresets } from './utils/imgur-helper';

src={ImgurPresets.hero('https://i.imgur.com/XXX.jpeg')}
src={ImgurPresets.card('https://i.imgur.com/YYY.jpeg')}
```

---

## 📊 STATISTIQUES

- ⏱️ **Temps de reproduction** : ~1h (avec images prêtes)
- 📁 **Fichier à modifier** : 1 seul (`/data/seeds.ts`)
- 🖼️ **Images nécessaires** : 4 minimum (1 hero + 3 quêtes)
- 🌍 **Coordonnées GPS** : 9-12 (3-4 par quête)
- 📝 **Code à écrire** : ~0 (copier-coller template)
- 🎨 **Composants React à modifier** : 0
- ✅ **Validation** : Automatique (script fourni)
- 🚀 **Déploiement** : Automatique (Vercel)

---

## ✅ PRINCIPE DIRECTEUR

**UN SEUL FICHIER À MODIFIER : `/data/seeds.ts`**

```
/data/seeds.ts
    │
    ├─→ Homepage (image hero)
    ├─→ Liste des quêtes (3 cartes)
    ├─→ Page détail quête
    └─→ Carnet Parisien (nodes)
```

Tous les composants React lisent automatiquement depuis ce fichier.  
**Tu n'as jamais besoin de toucher au code React.**

---

## 🎯 PARCOURS RECOMMANDÉS

### **🚀 Je veux commencer MAINTENANT**
1. Lis `/QUICK-START.md` (2 min)
2. Ouvre `/data/TEMPLATE-QUETE.ts`
3. Copie-colle et remplace les placeholders
4. Deploy

### **📚 Je veux comprendre en détail**
1. Lis `/REPRODUCTION-README.md` (5 min)
2. Lis `/SEEDS-GUIDE.md` (10 min)
3. Consulte `/data/EXEMPLE-LYON.ts`
4. Teste le générateur

### **✅ Je veux être guidé pas à pas**
1. Imprime `/CHECKLIST.md`
2. Suis toutes les étapes
3. Coche les cases
4. Valide avec le script
5. Deploy

---

## 🔧 COMMANDES

```bash
# Développement local
npm run dev

# Génération interactive
node scripts/generate-seed.js

# Validation
node scripts/validate-seeds.js

# Déploiement
git add .
git commit -m "Add new city"
git push origin main
```

---

## 📚 DOCUMENTATION COMPLÈTE

| Document | Contenu | Temps |
|----------|---------|-------|
| `/QUICK-START.md` | Guide ultra-rapide | 2 min |
| `/SEEDS-GUIDE.md` | Guide complet avec détails | 10 min |
| `/CHECKLIST.md` | Checklist interactive | 5 min |
| `/REPRODUCTION-README.md` | Vue d'ensemble système | 5 min |
| `/INDEX.md` | Index de tous les fichiers | 3 min |
| `/INFOGRAPHIE.md` | Infographie ASCII | 2 min |
| `/data/EXEMPLE-LYON.ts` | Exemple complet Lyon | 5 min |

---

## 🛟 AIDE RAPIDE

**Images ne s'affichent pas ?**
- Vérifie : URL commence par `https://i.imgur.com/`

**Quête n'apparaît pas ?**
- Vérifie : Ajoutée dans `ALL_QUETES` ET `QUETES_BY_ID`

**Erreur de syntaxe ?**
- Lance : `node scripts/validate-seeds.js`

**Besoin d'aide ?**
- Lis : `/SEEDS-GUIDE.md` section Troubleshooting

---

## 🎨 ISOLATION PAR CARD_ID

Chaque carte physique a un `card_id` unique (ex: `LUT-2847`).  
**L'URL devient** : `arche.paris?card=LUT-2847`

**Principe** : Toutes les données (notes, souvenirs) sont filtrées par ce `card_id`.  
Chaque carte a son **univers privé** dans la même base de données.

**Migration automatique** : La structure Supabase se crée automatiquement au premier lancement.

---

## 🚀 PROCHAINES ÉTAPES

1. **Choisis ta ville cible**
2. **Lis `/QUICK-START.md`** (2 min)
3. **Lance le générateur** : `node scripts/generate-seed.js`
4. **Valide** : `node scripts/validate-seeds.js`
5. **Deploy** : `git push origin main`

---

## 📦 ARCHITECTURE TECHNIQUE

```
Frontend (React)
    ↓
/data/seeds.ts (Données structurées)
    ↓
Supabase (Backend)
    ↓
Isolation par card_id
```

**Stack** :
- React + TypeScript
- Tailwind CSS v4
- Supabase (Database + Auth + Storage)
- Vercel (Déploiement)
- Imgur (Images)

---

## ✨ AVANTAGES DU SYSTÈME

1. **Un seul fichier à modifier** (`/data/seeds.ts`)
2. **Pas de code React à toucher**
3. **Format standardisé et documenté**
4. **Reproductible en < 1h**
5. **Validation automatique**
6. **Déploiement automatique**
7. **Type-safe** (TypeScript)
8. **Scalable** (multi-villes)

---

## 🎯 OBJECTIF FINAL

**Permettre la création de "PETIT SOUVENIR — [Ville]" en moins d'1h, sans toucher au code, avec un système validé et documenté.**

---

**✅ LE SYSTÈME EST PRÊT. COMMENCE MAINTENANT !** 🚀

👉 **Première étape** : `cat QUICK-START.md`
