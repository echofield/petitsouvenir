# ÉTUDES — ARCHITECTURE V1 FINALE

**Date :** 9 janvier 2026  
**Statut :** ✅ **IMPLÉMENTÉ**

---

## 🎯 **PRINCIPE DIRECTEUR**

> **"ARCHÉ n'enseigne pas. ARCHÉ rend visible."**

ÉTUDES doit se lire comme une **traversée**, pas comme un cours.

---

## 🏗️ **ARCHITECTURE COMPLÈTE**

### **Niveau 1 : Hub ÉTUDES**
```
ÉTUDES
Trois surfaces ouvertes. Les autres viendront.

[FORMES]
[LANGAGES]
[SYSTÈMES]

────────────────────────────
ACCÉLÉRATION (séparée)
```

### **Niveau 2 : Hub secteur (ex: FORMES)**
```
FORMES
Trois formes fondamentales
Une grammaire, pas un catalogue.

[COLONNE]
[AXE]
[SEUIL]

────────────────────────────
ACCÉLÉRATION (exercice perceptif)
```

### **Niveau 3 : Leçon (ex: COLONNE)**
```
1. Ouverture (phrase unique)
2. Histoire (repères, pas encyclopédie)
3. Types (3 maximum)
4. Lecture spatiale (Paris)
5. Pratique (attention, sans validation)
6. Clôture (phrase unique)
```

---

## 📦 **FICHIERS CRÉÉS**

### **1. EtudesHub.tsx**
- Hub principal ÉTUDES
- 3 secteurs : FORMES, LANGAGES, SYSTÈMES
- ACCÉLÉRATION séparée en bas
- Design cohérent (cartes claires, fond texturé)

### **2. LessonColonneV2.tsx**
- Structure : 6 écrans (Ouverture → Histoire → Types → Lecture → Pratique → Clôture)
- Design cohérent avec le hub
- Cartes translucides + blur
- Rythme lent, respiration maximale

### **3. EtudesFormesV2.tsx** (mis à jour)
- 3 leçons uniquement : COLONNE, AXE, SEUIL
- ACCÉLÉRATION séparée
- Layout visuel/texte (120px SVG + texte)
- Fond translucide + blur

---

## 🎨 **DESIGN SYSTEM (UNIFIÉ)**

### **Principe : Cohérence absolue**
Le design de la section d'accueil s'applique partout dans ÉTUDES.

### **Couleurs**

| Nom | Code | Usage |
|-----|------|-------|
| Parchemin | #FAF8F2 | Fond principal |
| Noir | #1A1A1A | Texte |
| Blanc translucide | rgba(255,255,255,0.4) | Fond cartes |
| Vert ARCHÉ | #003D2C | Accent ACCÉLÉRATION |

### **Typographie**

| Élément | Font | Size | Weight | Opacity |
|---------|------|------|--------|---------|
| Titre hub | Cormorant | 46px | 400 | 1.0 |
| Sous-titre hub | Inter | 17px | 400 | 0.6 |
| Titre carte secteur | Cormorant | 32px | 400 | 0.9 |
| Titre carte leçon | Cormorant | 28px | 400 | 0.9 |
| Statement leçon | Inter | 15px | 400 | 0.6 |
| Label section | Inter | 11px | 500 | 0.4 (uppercase) |

### **Cartes (design uniforme)**

**Structure :**
- Background : `rgba(255, 255, 255, 0.4)`
- Backdrop-filter : `blur(10px)`
- Border : `0.5px solid rgba(26, 26, 26, 0.08)`
- Padding : 32-48px
- Transition : 400ms cubic-bezier(0.4, 0, 0.2, 1)

**Hover :**
- Transform : `translateY(-2px)`
- Box-shadow : `0 8px 24px rgba(26, 26, 26, 0.06)`
- Opacity : 1

**Repos :**
- Transform : `translateY(0)`
- Box-shadow : `0 2px 8px rgba(26, 26, 26, 0.03)`
- Opacity : 0.9

---

## 📊 **STRUCTURE HUB ÉTUDES**

### **En-tête**
```
Études
Trois surfaces ouvertes. Les autres viendront.
```

### **3 secteurs actifs**

**FORMES**
- Sous-titre : "Colonne · Axe · Seuil"
- Fonctions :
  - Voir avant de nommer
  - Lire l'espace
  - Reconnaître les structures invisibles

**LANGAGES**
- Sous-titre : "Mot · Rythme · Accélération"
- Fonctions :
  - Lire autrement
  - Percevoir la vitesse
  - Observer l'effet du langage sur l'attention

**SYSTÈMES**
- Sous-titre : "Flux · Organisation · Conséquences"
- Fonctions :
  - Comprendre sans juger
  - Voir ce que les systèmes produisent

### **ACCÉLÉRATION (séparée)**
```
────────────────────────────

ACCÉLÉRATION
Exercice perceptif.
Non cumulatif. Sans score.
```

**Style :**
- Fond : `rgba(0, 61, 44, 0.03)`
- Bordure : `rgba(0, 61, 44, 0.15)`
- Opacity : 0.7

---

## 📝 **STRUCTURE LEÇON COLONNE**

### **Écran 1 : Ouverture**
```
COLONNE

La colonne élève la charge en la rendant visible.

[Continuer]
```

### **Écran 2 : Histoire**
```
HISTOIRE

Antiquité
Pierre taillée, verticalité sacrée, ordres grecs.
La colonne devient proportion.

Renaissance
Réinterprétation des ordres antiques.
Codification, répétition, harmonie.

Ville moderne
Acier, béton, structure invisible.
La colonne cache son rôle.

[Continuer]
```

### **Écran 3 : Types**
```
TYPES

[Carte] Colonne dorique
Force. Simplicité. Elle tient sans expliquer.

[Carte] Colonne ionique
Équilibre. Rythme. Elle relie plus qu'elle ne porte.

[Carte] Colonne corinthienne
Décor. Élaboration. Elle montre ce que la structure permet.

[Continuer]
```

### **Écran 4 : Lecture spatiale**
```
LECTURE SPATIALE

Panthéon, Madeleine, Assemblée nationale.

Avant d'être des monuments, ce sont des points sur une ligne.

Les colonnes ne décorent pas.
Elles révèlent l'ordre du pouvoir.

[Continuer]
```

### **Écran 5 : Pratique**
```
PRATIQUE

Observe un espace autour de toi.

Repère ce qui joue le rôle de colonne,
même sans cylindre visible.

Un mur. Une personne. Une règle.
La colonne n'est pas toujours visible.
Elle est toujours structurante.

[Continuer]
```

### **Écran 6 : Clôture**
```
Ce qui soutient n'a pas besoin de s'imposer.

[Terminer]
```

---

## 🎯 **DIFFÉRENCES CLÉS AVEC DESIGN ÉDUCATIF CLASSIQUE**

### **ÉTUDES (ARCHÉ)**
✅ Fond texturé translucide  
✅ Cartes avec blur  
✅ Rythme lent (transitions 400ms)  
✅ Traversée, pas cours  
✅ Pas de validation  
✅ Phrases simples, respiration  
✅ Clôture isolée, maximale  

### **Cours classique (à éviter)**
❌ Fond blanc plein  
❌ Bordures noires épaisses  
❌ Transitions rapides (150ms)  
❌ Pédagogie directive  
❌ Quiz, scores, gamification  
❌ Texte dense, blocs lourds  
❌ Boutons "Suivant" agressifs  

---

## ✅ **VALIDATION**

### **Checklist architecture**
- [x] Hub ÉTUDES avec 3 secteurs
- [x] ACCÉLÉRATION séparée
- [x] Hub FORMES (3 leçons)
- [x] Leçon COLONNE (6 écrans)
- [x] Design cohérent partout

### **Checklist design**
- [x] Fond parchemin #FAF8F2
- [x] Cartes translucides + blur
- [x] Typographie Cormorant + Inter
- [x] Transitions 400ms
- [x] Hover subtil (-2px)

### **Checklist philosophie**
- [x] Rendre visible, pas enseigner
- [x] Traversée, pas cours
- [x] Respiration maximale
- [x] Pas de sur-stylisation
- [x] Aucune interface "éducative classique"

---

## 📊 **MÉTRIQUES**

### **Fichiers**
- EtudesHub.tsx : ~250 lignes
- LessonColonneV2.tsx : ~450 lignes
- EtudesFormesV2.tsx : ~600 lignes (mis à jour)

### **Écrans**
- Hub ÉTUDES : 1
- Hub FORMES : 1
- Leçon COLONNE : 6
- Total : 8 écrans

### **Temps utilisateur**
- Hub ÉTUDES : ~30 secondes
- Hub FORMES : ~20 secondes
- Leçon COLONNE : ~5 minutes
- ACCÉLÉRATION : 90 secondes

---

## 🔮 **ÉVOLUTION FUTURE**

### **V2 : Expansion**
- Compléter AXE et SEUIL (modèle COLONNE)
- Développer LANGAGES
- Développer SYSTÈMES

### **V3 : Profondeur**
- Ajouter 4 leçons supplémentaires FORMES
- Images/photos Paris
- Exercices interactifs

### **V4 : Intégration**
- Lien avec CityNodes (géolocalisation)
- Parcours urbains
- Quêtes connectées

---

## ✅ **PRÊT POUR DÉPLOIEMENT**

**Version :** 1.0 (Finale)  
**Date :** 9 janvier 2026  
**Statut :** Production-ready  

**Fichiers :**
- `EtudesHub.tsx` ✅
- `LessonColonneV2.tsx` ✅
- `EtudesFormesV2.tsx` ✅ (mis à jour)
- `FormesAcceleration.tsx` ✅ (existant)
- `AccelerationIntro.tsx` ✅ (existant)

---

## 💡 **PRINCIPES À NE PAS PERDRE**

### **1. Design cohérent**
> *Le design de la section d'accueil s'applique partout.*

### **2. Rythme lent**
> *Aucune précipitation. Le silence fait partie du contenu.*

### **3. Pas d'enseignement**
> *ARCHÉ rend visible, ne force pas la compréhension.*

### **4. Traversée**
> *Pas de validation, pas de score, pas de progression forcée.*

### **5. Respiration maximale**
> *Chaque phrase a son espace. Chaque écran respire.*

---

**🎉 L'architecture V1 d'ÉTUDES est complète. Cohérente, calme, et prête pour une découverte lente.**
