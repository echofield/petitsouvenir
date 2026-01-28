# 📦 SYSTÈME DE REPRODUCTION — RÉSUMÉ

## 🎯 OBJECTIF

Permettre la reproduction ultra-rapide de PETIT SOUVENIR pour **n'importe quelle ville** en modifiant uniquement un fichier de données.

---

## 📁 FICHIERS CRÉÉS

| Fichier | Usage |
|---------|-------|
| **`/data/seeds.ts`** | 🔴 **FICHIER PRINCIPAL** — Toutes les données (Paris actuel) |
| `/data/TEMPLATE-QUETE.ts` | Template vide pour copier-coller |
| `/data/EXEMPLE-LYON.ts` | Exemple complet d'une adaptation Lyon |
| `/SEEDS-GUIDE.md` | Guide détaillé (10 min de lecture) |
| `/QUICK-START.md` | Guide ultra-rapide (2 min de lecture) |
| `/scripts/generate-seed.js` | Générateur interactif CLI (optionnel) |
| `/utils/imgur-helper.ts` | Optimisation automatique des images Imgur |

---

## ⚡ REPRODUCTION EN 5 MINUTES

```bash
# 1. Upload images sur Imgur
https://imgur.com/upload

# 2. Ouvre le template
/data/TEMPLATE-QUETE.ts

# 3. Copie-colle dans /data/seeds.ts
# Remplace tous les [PLACEHOLDER]

# 4. Enregistre dans /data/seeds.ts
export const ALL_QUETES = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  TA_NOUVELLE_QUETE  // ← Ajoute ici
];

# 5. Deploy
git push origin main
```

---

## 🌍 FORMAT DES DONNÉES

### **Structure d'une quête :**

```typescript
{
  id: 'slug-unique',
  title: 'TITRE — THÈME',
  registre: 'MOT · MOT · MOT',
  theme: 'Phrase d\'accroche',
  shortDescription: 'Description courte',
  fullDescription: 'Description longue',
  duree: '≈ 2h',
  image: 'https://i.imgur.com/XXX.jpeg',
  nodes: [
    {
      id: 'node-1',
      titre: 'Nom du lieu',
      adresse: 'Adresse complète',
      latitude: 48.8566,
      longitude: 2.3522,
      theme: 'Catégorie',
      texte: 'Description narrative',
      imageUrl: 'https://i.imgur.com/YYY.jpeg' // Optionnel
    }
  ]
}
```

---

## 🎨 EXEMPLES D'ADAPTATIONS

### **PETIT SOUVENIR — Lyon**
```
Quêtes : Confluence, Croix-Rousse, Presqu'île
→ Voir : /data/EXEMPLE-LYON.ts
```

### **PETIT SOUVENIR — Marseille**
```
Quêtes : Vieux-Port, Calanques, Panier
→ Utilise : /data/TEMPLATE-QUETE.ts
```

### **PETIT SOUVENIR — Tokyo**
```
Quêtes : Shibuya-Flux, Edo-Mémoire, Métro-Vertical
→ Utilise : /data/TEMPLATE-QUETE.ts
```

---

## 🔑 POINTS CLÉS

### ✅ **CE QUI CHANGE :**
- **Images** (upload sur Imgur)
- **Textes** (descriptions, récits)
- **Coordonnées GPS** (Google Maps)
- **Thématiques** (selon la ville)

### ✅ **CE QUI NE CHANGE PAS :**
- Structure des composants React
- Design système (crème parchemin + vert profond)
- Architecture technique (Supabase multi-tenant)
- Système de card_id unique

---

## 📊 STATS

- **Temps de reproduction** : ~1h (avec images prêtes)
- **Fichiers à modifier** : 1 seul (`/data/seeds.ts`)
- **Images nécessaires** : 4 minimum (1 hero + 3 quêtes)
- **Coordonnées GPS** : 9-12 (3-4 par quête)

---

## 🛠️ OUTILS FOURNIS

### **1. Générateur interactif**
```bash
node scripts/generate-seed.js
```
Guide CLI pour créer une quête pas à pas.

### **2. Template copier-coller**
```typescript
// Voir : /data/TEMPLATE-QUETE.ts
```

### **3. Optimiseur d'images**
```typescript
import { ImgurPresets } from '/utils/imgur-helper';

// Usage :
src={ImgurPresets.hero('https://i.imgur.com/XXX.jpeg')}
src={ImgurPresets.card('https://i.imgur.com/YYY.jpeg')}
```

---

## 🚀 WORKFLOW COMPLET

```
1. CONCEPTION (30 min)
   ├─ Identifier 3 thèmes pour la ville
   ├─ Sélectionner 3-4 lieux par thème
   └─ Écrire les récits narratifs

2. IMAGES (15 min)
   ├─ Trouver/prendre 4 images
   ├─ Upload sur Imgur
   └─ Copier les URLs

3. GPS (10 min)
   ├─ Google Maps → Clic droit → Coordonnées
   └─ Copier latitude/longitude

4. CODAGE (5 min)
   ├─ Copier template
   ├─ Remplacer placeholders
   └─ Ajouter à seeds.ts

5. DÉPLOIEMENT (2 min)
   ├─ git push
   └─ Vercel déploie automatiquement
```

**TOTAL : ~1h** (2h si tu prends les photos toi-même)

---

## 📚 DOCUMENTATION

| Si tu veux... | Lis... |
|---------------|---------|
| Commencer MAINTENANT | `/QUICK-START.md` (2 min) |
| Comprendre en détail | `/SEEDS-GUIDE.md` (10 min) |
| Voir un exemple complet | `/data/EXEMPLE-LYON.ts` |
| Copier-coller rapidement | `/data/TEMPLATE-QUETE.ts` |
| Être guidé pas à pas | `node scripts/generate-seed.js` |

---

## ✅ AVANTAGES DU SYSTÈME

1. **Un seul fichier à modifier** (`/data/seeds.ts`)
2. **Pas de code React à toucher**
3. **Format standardisé et documenté**
4. **Reproductible en < 1h**
5. **Scalable** (facile d'ajouter des villes)
6. **Type-safe** (TypeScript vérifie la structure)

---

## 🎯 PROCHAINES ÉTAPES

```bash
# Option 1 : Guide rapide
cat QUICK-START.md

# Option 2 : Guide complet
cat SEEDS-GUIDE.md

# Option 3 : Exemple Lyon
cat data/EXEMPLE-LYON.ts

# Option 4 : Génération interactive
node scripts/generate-seed.js
```

---

**LE SYSTÈME EST PRÊT. TU PEUX MAINTENANT REPRODUIRE PETIT SOUVENIR POUR N'IMPORTE QUELLE VILLE EN MOINS D'1H.** 🚀
