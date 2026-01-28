# ÉTUDES — FORMES / COLONNE (VERSION RÉVISÉE)

**Date :** 9 janvier 2026  
**Statut :** ✅ **IMPLÉMENTÉ**

---

## 🎯 **OBJECTIF DE LA RÉVISION**

Simplifier radicalement le design et enrichir le contenu.

**Principe directeur :**
> *ARCHÉ n'est pas décoratif ici : forme, clarté, profondeur.*

---

## ❌ **SUPPRESSIONS**

### **Design supprimé**
- ✅ Écrans avec fond blanc + texte blanc
- ✅ Effets graphiques superflus
- ✅ Cadres décoratifs (pour l'instant)

### **Structure simplifiée**
- De : 8 sections génériques
- À : 5 écrans spécialisés

---

## ✅ **CE QUI RESTE**

### **Design épuré**
- Fond clair uniforme (parchemin #FAF8F2)
- Une seule typographie élégante (Cormorant + Inter)
- Hiérarchie stricte : Titre → Texte → Silence

### **Écrans de clôture**
- UNE phrase seule
- Centrée
- Sans bouton dominant
- Respiration maximale

---

## 📊 **NOUVELLE STRUCTURE (5 ÉCRANS)**

### **1. TITRE**
```
COLONNE

La forme précède la fonction.

[Continuer]
```

**Design :**
- Titre : Cormorant 48px, centré
- Sous-titre : Inter 21px, opacity 0.6
- Bouton discret

---

### **2. FORME (essence)**
```
FORME

Une colonne n'est pas un objet.
C'est une décision verticale.

Elle organise l'espace avant de le décorer.

[Continuer]
```

**Design :**
- Label : Inter 11px, uppercase, opacity 0.4
- Corps : Inter 17px, line-height 2.0, opacity 0.7
- Respiration maximale

---

### **3. HISTOIRE (repères simples)**
```
HISTOIRE — REPÈRES

–2500 av. J.-C.
Colonnes égyptiennes — pierre, symboles, verticalité sacrée

–600 av. J.-C.
Grèce — Dorique, Ionique, Corinthien
La colonne devient proportion

Ier siècle
Rome — standardisation, répétition, pouvoir

Chaque époque utilise la colonne
pour dire ce qu'elle soutient vraiment.

[Continuer]
```

**Design :**
- Dates : 14px, opacity 0.5, letterspacing 0.05em
- Descriptions : 17px, opacity 0.7
- Closure italique : Cormorant 19px, opacity 0.6

---

### **4. TYPES (3 catégories)**
```
TROIS FORMES DE COLONNES

Colonne dorique
Force. Simplicité. Masse.
Elle tient sans expliquer.

Colonne ionique
Équilibre. Rythme. Transition.
Elle relie plus qu'elle ne porte.

Colonne corinthienne
Décor. Élaboration. Exubérance.
Elle montre ce que la structure permet.

[Continuer]
```

**Design :**
- Nom : Cormorant 21px, weight 500
- Qualités : 17px, opacity 0.65
- Commentaire : 15px, opacity 0.5, italic

---

### **5. PRATIQUE (observer)**
```
PRATIQUE — RECONNAÎTRE

Observe un espace autour de toi.

Repère ce qui joue le rôle de colonne,
même sans cylindre.

Un mur.
Une personne.
Une règle.

La colonne n'est pas toujours visible.
Elle est toujours structurante.

[Continuer]
```

**Design :**
- Instructions : 17px, line-height 2.0
- Liste : énumération simple
- Note finale : 15px, opacity 0.4, italic

---

### **6. CLÔTURE (silence)**
```
CLOSURE

Ce qui soutient n'a pas besoin de s'imposer.

[Terminer]
```

**Design :**
- Phrase seule : Cormorant 32px, centré, opacity 0.7
- Respiration maximale (80px margin)
- Bouton très discret (opacity 0.4)

---

## 🎨 **SPÉCIFICATIONS DESIGN**

### **Couleurs**
- Fond : #FAF8F2 (parchemin ARCHÉ)
- Texte : #1A1A1A
- Bordures : rgba(26, 26, 26, 0.2) — 0.5px

### **Typographie**

| Élément | Font | Size | Weight | Line-height | Opacity |
|---------|------|------|--------|-------------|---------|
| Titre principal | Cormorant | 48px | 400 | 1.3 | 0.9 |
| Label section | Inter | 11px | 500 | — | 0.4 |
| Corps texte | Inter | 17px | 400 | 2.0 | 0.7 |
| Closure | Cormorant | 32px | 400 | 1.6 | 0.7 |
| Commentaire | Cormorant | 19px | 400 | 1.6 | 0.6 (italic) |
| Note | Inter | 15px | 400 | 1.8 | 0.4 (italic) |

### **Espacement**
- Max-width : 700px
- Padding écran : 40px
- Margin-bottom titre : 48px
- Margin-bottom section : 64px
- Margin-bottom clôture : 80px

### **Transitions**
- Hover bouton : 400ms cubic-bezier(0.4, 0, 0.2, 1)
- Opacity 0.5 → 0.9

---

## 🏗️ **ARCHITECTURE TECHNIQUE**

### **Fichier**
```
/components/LessonColonne.tsx
```

### **Structure**
```typescript
type Stage = 'titre' | 'forme' | 'histoire' | 'types' | 'pratique' | 'closure';

interface LessonColonneProps {
  onReturn: () => void;
}
```

### **Navigation**
- Progression linéaire (pas de saut)
- Bouton "Continuer" sur chaque écran
- Bouton "Terminer" sur clôture → retour hub

### **Intégration dans EtudesFormesV2**
```typescript
if (lessonId === 'colonne') {
  setStage('colonne_revised');
}

if (stage === 'colonne_revised') {
  return <LessonColonne onReturn={handleReturnToHub} />;
}
```

---

## 📝 **CONTENU DÉTAILLÉ**

### **A. FORME (essence)**
**Objectif :** Définir la colonne comme concept, pas objet

**Texte :**
- Une colonne n'est pas un objet.
- C'est une décision verticale.
- Elle organise l'espace avant de le décorer.

**Philosophie :** Pas de définition technique, pas d'histoire encore. Juste l'essence.

---

### **B. HISTOIRE (repères simples)**
**Objectif :** Contextualiser sans encyclopédisme

**3 moments clés :**
1. **Égypte (–2500)** : Pierre, symboles, sacré
2. **Grèce (–600)** : Proportion, ordres, rationalité
3. **Rome (Ier siècle)** : Standardisation, pouvoir

**Closure :** "Chaque époque utilise la colonne pour dire ce qu'elle soutient vraiment."

**Ce qui est absent :**
- Pas de dates exactes
- Pas de noms d'architectes
- Pas d'analyse stylistique
- Pas d'images (pour l'instant)

---

### **C. TYPES (3 catégories)**
**Objectif :** Différencier par fonction, pas par décor

**Dorique :**
- Force. Simplicité. Masse.
- "Elle tient sans expliquer."

**Ionique :**
- Équilibre. Rythme. Transition.
- "Elle relie plus qu'elle ne porte."

**Corinthienne :**
- Décor. Élaboration. Exubérance.
- "Elle montre ce que la structure permet."

**Approche :** Pas de description ornementale. Fonction structurelle + effet spatial.

---

### **D. PRATIQUE (observer)**
**Objectif :** Activer la reconnaissance dans le réel

**Instructions :**
1. Observe un espace autour de toi
2. Repère ce qui joue le rôle de colonne, même sans cylindre
3. Exemples : mur, personne, règle

**Insight final :** "La colonne n'est pas toujours visible. Elle est toujours structurante."

**Pas de dessin demandé** : Observation uniquement.

---

### **E. CLÔTURE (silence)**
**Objectif :** Laisser résonner l'essence

**Phrase unique :**
> *Ce qui soutient n'a pas besoin de s'imposer.*

**Design :** Maximum de respiration. Phrase seule, centrée. Bouton très discret.

---

## 📊 **COMPARAISON AVANT/APRÈS**

### **AVANT (V1 — Générique)**
- 8 sections standardisées
- Texte technique dense
- Pas de repères historiques
- Pas de typologie claire
- Clôture noyée dans la navigation

### **APRÈS (V2 — Révisée)**
- 5 écrans spécialisés
- Texte minimal, essentiel
- 3 repères historiques simples
- 3 types de colonnes différenciés
- Clôture isolée, maximale respiration

---

## ✅ **VALIDATION**

### **Checklist design**
- [x] Fond parchemin uniforme
- [x] Typographie unique (Cormorant + Inter)
- [x] Hiérarchie stricte
- [x] Aucun effet graphique superflu
- [x] Respiration maximale

### **Checklist contenu**
- [x] Essence (FORME)
- [x] Histoire simple (3 repères datés)
- [x] Typologie claire (3 catégories)
- [x] Pratique (observation)
- [x] Clôture (silence)

### **Checklist philosophique**
- [x] Forme, clarté, profondeur
- [x] Pas décoratif
- [x] Pas encyclopédique
- [x] Respiration intentionnelle

---

## 🔮 **ÉVOLUTION FUTURE**

### **Images possibles (V3+)**
- Schémas simplifiés des 3 types
- Photos architecturales sélectionnées
- Diagrammes de forces

**Règle :** Aucune image tant qu'elle n'apporte pas de clarté structurelle.

### **Autres leçons à réviser**
- PILIER
- AXE
- CADENCE
- PORTÉE
- LIMITE
- SEUIL

**Même approche :** 5 écrans (Titre → Forme → Histoire → Types/Variants → Pratique → Clôture)

---

## 📚 **MÉTRIQUES**

- **Écrans :** 6 (de 8 à 6)
- **Mots par écran :** ~50-80 (réduit de ~60%)
- **Lignes de code :** ~450
- **Temps de lecture estimé :** 4-5 minutes (vs 7-8 avant)

---

## ✅ **PRÊT POUR DÉPLOIEMENT**

**Version :** 2.0 (Révisée)  
**Date :** 9 janvier 2026  
**Statut :** Production-ready  
**Fichiers :** 1 composant (`LessonColonne.tsx`)  
**Intégration :** Complète dans `EtudesFormesV2.tsx`

🎯 **Le module COLONNE est épuré, précis, et respire.**

---

## 💡 **PHILOSOPHIE DE LA RÉVISION**

### **Principes appliqués**

**1. Simplicité radicale**
> *Supprimer tout ce qui n'est pas essentiel.*

**2. Respiration maximale**
> *Le silence fait partie du contenu.*

**3. Profondeur sans encyclopédisme**
> *Donner des repères, pas une encyclopédie.*

**4. Pratique non technique**
> *Observer, pas dessiner ou calculer.*

**5. Clôture isolée**
> *La dernière phrase doit résonner seule.*

---

**Cette révision établit le modèle pour toutes les autres leçons FORMES.**
