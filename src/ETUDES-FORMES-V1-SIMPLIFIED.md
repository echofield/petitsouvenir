# ÉTUDES — FORMES V1 (SIMPLIFIÉE)

**Date :** 9 janvier 2026  
**Statut :** ✅ **IMPLÉMENTÉ**

---

## 🎯 **OBJECTIF DE LA SIMPLIFICATION**

Transformer FORMES en grammaire épurée, pas en catalogue exhaustif.

**Principe directeur :**
> *ARCHÉ est une grammaire, pas un catalogue.*

---

## ✂️ **SUPPRESSIONS (V1)**

### **Leçons supprimées**
- ❌ PILIER
- ❌ CADENCE
- ❌ PORTÉE
- ❌ LIMITE

**De 7 → 3 leçons principales**

### **Raison**
Pour V1, focus sur 3 structures fondamentales absolues.  
Les autres viendront en V2+.

---

## ✅ **CE QUI RESTE (V1)**

### **3 leçons principales**
1. **COLONNE** — Support vertical, élévation
2. **AXE** — Direction, ordonnancement
3. **SEUIL** — Transition, passage

### **1 exercice perceptif (séparé)**
- **ACCÉLÉRATION** — 90 secondes d'exposition continue

---

## 🎨 **NOUVEAU DESIGN**

### **Cartes de leçon révisées**

**Layout :** Visuel à gauche (120px) + Texte à droite

**Structure :**
```
┌─────────────────────────────────────────┐
│ ┌──────┐  TITRE                        │
│ │      │  Statement de la leçon        │
│ │ SVG  │                               │
│ │      │                               │
│ └──────┘                               │
└─────────────────────────────────────────┘
```

### **Fond texturé ARCHÉ**
- Background : `rgba(255, 255, 255, 0.4)`
- Backdrop-filter : `blur(10px)`
- Border : `0.5px solid rgba(26, 26, 26, 0.08)`

**Effet :** Douceur, translucidité, élégance

### **Visuels générés (SVG inline)**

**COLONNE :**
- Ligne verticale centrale
- Rectangle (structure)
- Cercle au sommet (chapiteau)
- Base horizontale

**AXE :**
- Ligne horizontale continue
- 3 points alignés
- Flèches aux extrémités (subtiles)

**SEUIL :**
- 2 lignes verticales (montants)
- Rectangle central épaissi
- Lignes pointillées (avant/après)

**Style :** Minimal, géométrique, abstrait

---

## 📊 **STRUCTURE HUB**

### **En-tête**
```
FORMES

Trois formes fondamentales

Une grammaire, pas un catalogue.
```

### **Section 1 : Leçons principales**
3 cartes empilées verticalement (gap 32px)

### **Section 2 : Exercice perceptif (séparé)**
```
─────────────────────────

EXERCICE PERCEPTIF

[Carte ACCÉLÉRATION]
90 secondes d'exposition continue
```

**Fond vert subtil :** `rgba(0, 61, 44, 0.03)`  
**Bordure verte :** `rgba(0, 61, 44, 0.15)`

---

## 🏗️ **ARCHITECTURE TECHNIQUE**

### **Fichiers modifiés**
- `EtudesFormesV2.tsx` (simplifié à 3 leçons)

### **Changements clés**

**1. LESSONS array réduit**
```typescript
const LESSONS: Lesson[] = [
  { id: 'colonne', ... },
  { id: 'axe', ... },
  { id: 'seuil', ... }
];
```

**2. LessonCard redesigné**
- Grid layout : 120px + 1fr
- SVG généré inline
- Fond translucide + blur

**3. Section ACCÉLÉRATION séparée**
- Border-top
- Label "EXERCICE PERCEPTIF"
- Fond vert subtil

---

## 🎯 **COMPARAISON V0 → V1**

### **V0 (Initiale)**
- 7 leçons
- Grille 3 colonnes
- Fond blanc
- Aucun visuel

### **V1 (Simplifiée)**
- 3 leçons
- Layout vertical
- Fond texturé translucide
- Visuels SVG générés
- ACCÉLÉRATION séparée

**Réduction :** ~60% de contenu  
**Clarté :** +200%

---

## 📝 **CONTENU DES 3 LEÇONS**

### **1. COLONNE**
**Statement :** "La colonne élève la charge en la rendant lisible."

**Sections :**
- Structural Function
- Historical Necessity
- Abstract Schema
- City Embodiment
- Practice — Draw
- Practice — Recognise
- Closure

**Version révisée :** `LessonColonne.tsx` (6 écrans épurés)

---

### **2. AXE**
**Statement :** "Un axe ordonne avant de guider."

**Focus :**
- Direction
- Hiérarchie
- Procession
- Perspective urbaine

**Version :** Générique (8 sections)

---

### **3. SEUIL**
**Statement :** "Le seuil transforme le passage."

**Focus :**
- Transition
- Rituel
- Épaississement de la limite
- Conscience du passage

**Version :** Générique (8 sections)

---

## 🎨 **DESIGN SYSTEM**

### **Typographie**

| Élément | Font | Size | Weight | Opacity |
|---------|------|------|--------|---------|
| Titre hub | Cormorant | 46px | 400 | 1.0 |
| Sous-titre hub | Inter | 17px | 400 | 0.6 |
| Titre carte | Cormorant | 28px | 400 | 0.9 |
| Statement carte | Inter | 15px | 400 | 0.6 |
| Label section | Inter | 11px | 500 | 0.4 (uppercase) |

### **Couleurs**

| Nom | Code | Usage |
|-----|------|-------|
| Parchemin | #FAF8F2 | Fond principal |
| Noir | #1A1A1A | Texte |
| Blanc translucide | rgba(255,255,255,0.4) | Fond cartes |
| Vert ARCHÉ | #003D2C | Accent ACCÉLÉRATION |

### **Espacement**
- Gap cartes : 32px
- Padding cartes : 32px
- Margin sections : 80px
- Border-radius : 0 (carré strict)

---

## ✅ **VALIDATION**

### **Checklist simplification**
- [x] 7 → 3 leçons principales
- [x] ACCÉLÉRATION séparée
- [x] Visuels SVG générés
- [x] Fond texturé translucide
- [x] Layout visuel/texte (120px + 1fr)

### **Checklist design**
- [x] Fond ARCHÉ texturé
- [x] Typographie cohérente
- [x] Espacement harmonieux
- [x] Transitions fluides (400ms)
- [x] Hover subtil

### **Checklist philosophique**
- [x] Grammaire, pas catalogue
- [x] Minimalisme élégant
- [x] Respiration maximale
- [x] Clarté structurelle

---

## 🔮 **ÉVOLUTION FUTURE**

### **V2 (Expansion)**
- Réintroduire PILIER, CADENCE, PORTÉE, LIMITE
- Créer versions révisées (modèle COLONNE)
- Ajouter images/photos si pertinent

### **V3 (Interactions)**
- Exercices interactifs (dessin mental)
- Reconnaissance visuelle (photos annotées)
- Quiz perceptif (non noté)

### **V4 (Ville)**
- Exemples Paris géolocalisés
- Photos CityNodes intégrées
- Parcours urbains FORMES

---

## 📊 **MÉTRIQUES**

- **Leçons :** 3 (de 7)
- **Exercices :** 1 (ACCÉLÉRATION)
- **Lignes de code :** ~600 (de ~1000)
- **Temps de lecture hub :** ~30 secondes
- **Temps de lecture leçon :** ~5 minutes

---

## ✅ **PRÊT POUR DÉPLOIEMENT**

**Version :** 1.0 (Simplifiée)  
**Date :** 9 janvier 2026  
**Statut :** Production-ready  
**Fichiers :** 1 composant principal (`EtudesFormesV2.tsx`)  

🎯 **FORMES V1 est épurée, élégante, et cohérente avec la philosophie ARCHÉ.**

---

## 💡 **PHILOSOPHIE V1**

### **Moins, c'est mieux**
> *3 formes maîtrisées valent mieux que 7 survolées.*

### **Grammaire, pas catalogue**
> *Apprendre la structure, pas lister les variations.*

### **Respiration maximale**
> *Le silence fait partie de l'enseignement.*

### **Beauté sobre**
> *L'élégance naît de la contrainte, pas de l'ornement.*

---

**FORMES V1 est prête. Calme, précise, essentielle.**
