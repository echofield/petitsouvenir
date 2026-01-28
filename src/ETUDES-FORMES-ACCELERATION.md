# ÉTUDES — FORMES / ACCÉLÉRATION PERCEPTIVE

**Date :** 9 janvier 2026  
**Statut :** ✅ **IMPLÉMENTÉ**

---

## 🎯 **OBJECTIF**

Module d'accélération de perception visuelle centré sur la reconnaissance des formes architecturales fondamentales.

**Principe :** Exposition continue, pas explication.

---

## 📊 **SPÉCIFICATIONS TECHNIQUES**

### **Format**
- Affichage mot par mot, centré à l'écran
- Vitesse progressive : **300 → 900 mots/minute**
- Durée cible : **90 secondes**
- Aucun retour utilisateur
- Aucun score
- Aucune validation

### **Texte**
- **~800 mots** (830 mots dans la version implémentée)
- Phrases simples, structurales
- Vocabulaire limité : ligne, axe, vertical, masse, équilibre, charge, vide, plein, rythme
- **Pas de dates, noms propres, styles**
- Répétitions volontaires

---

## 🏗️ **ARCHITECTURE**

### **Fichier**
```
/components/FormesAcceleration.tsx
```

### **Stages**
1. **Intro** — Écran de préparation avec bouton "Commencer"
2. **Running** — Affichage accéléré des mots (90 secondes)
3. **Outro** — Écran de sortie avec texte de closure

### **Algorithme de vitesse**
```typescript
// Vitesse : 300 WPM → 900 WPM
// 300 WPM = 200ms par mot
// 900 WPM = 66.6ms par mot
const minInterval = 66.6;  // 900 WPM
const maxInterval = 200;    // 300 WPM
const interval = maxInterval - (progress * (maxInterval - minInterval));
```

**Progression linéaire** sur 90 secondes.

---

## 📝 **CONTENU DU TEXTE**

### **Structure narrative**

1. **Introduction (phrases courtes)**
   - Une ligne verticale.
   - Une ligne horizontale.
   - Elles se croisent.

2. **Développement (phrases moyennes)**
   - Exploration des structures fondamentales
   - Colonne, pilier, axe, cadence, portée, limite, seuil
   - Répétitions, variations

3. **Intensification (phrases légèrement plus longues)**
   - Relations entre formes
   - Équilibre, tension, hiérarchie

4. **Closure (retour au simple)**
   - La forme précède le sens.
   - La forme organise avant de signifier.
   - La reconnaissance suffit.

### **Champ sémantique utilisé**
- ligne (vertical/horizontal/diagonal)
- colonne / pilier
- mur / ouverture
- axe / alignement
- répétition / cadence
- proportion / équilibre
- masse / vide / plein
- appui / charge
- seuil / limite

### **Interdictions respectées**
- ❌ Aucune référence au langage
- ❌ Aucune métaphore poétique
- ❌ Aucune injonction psychologique
- ❌ Aucun jugement esthétique

---

## 🎨 **DESIGN**

### **Écran d'intro**
- Fond parchemin (#FAF8F2)
- Texte centré
- 3 lignes simples
- Bouton discret

### **Écran running**
- Mot seul, centré
- Font-size adaptatif : `clamp(24px, 4vw, 36px)`
- Barre de progression discrète (1px, bottom, vert #003D2C, opacity 0.2)

### **Écran outro**
- Texte de closure : 3 lignes fixes
- Font Cormorant 24px
- Bouton "Continuer" → retour hub FORMES

---

## ⚡ **WORKFLOW UTILISATEUR**

```
Hub FORMES
  ↓
Clic sur carte "ACCELERATION"
  ↓
Intro
  ↓ [Commencer]
Accélération (90 secondes)
  ↓
Outro
  ↓ [Continuer]
Hub FORMES
```

---

## 📊 **MÉTRIQUES**

- **Durée réelle :** ~90 secondes
- **Mots affichés :** ~830
- **Vitesse initiale :** 300 WPM (200ms/mot)
- **Vitesse finale :** 900 WPM (66ms/mot)
- **Lignes de code :** ~360

---

## 🎯 **RÉSULTAT ATTENDU**

À la fin de l'exercice, l'utilisateur doit ressentir :

✅ **Clarté visuelle accrue**  
✅ **Perception des formes affinée**  
✅ **Prêt pour exercice de dessin mental ou observation réelle**

**Pas** de feedback de validation.  
**Pas** de score.  
**Pas** de réponse attendue.

> *"La forme a travaillé d'elle-même."*

---

## 🔄 **INTÉGRATION**

### **Dans EtudesFormesV2.tsx**

```typescript
// L'ACCELERATION apparaît comme une 8ème carte dans le hub
{
  id: 'acceleration',
  title: 'ACCELERATION',
  statement: `L'accélération transforme la perception du temps.`,
  ...
}

// Mais redirige vers le module spécialisé
if (lessonId === 'acceleration') {
  setStage('acceleration');
} else {
  setCurrentLesson(lessonId);
  setStage('lesson');
}
```

---

## ✅ **VALIDATION**

### **Checklist technique**
- [x] Vitesse progressive 300-900 WPM
- [x] Durée 90 secondes
- [x] ~800 mots de contenu
- [x] Barre de progression discrète
- [x] Aucune validation requise
- [x] Texte conforme au prompt

### **Checklist contenu**
- [x] Phrases simples, structurales
- [x] Vocabulaire limité aux formes
- [x] Pas de dates, noms propres
- [x] Répétitions volontaires
- [x] Ton neutre, calme
- [x] Closure appropriée

### **Checklist UX**
- [x] Intro claire
- [x] Bouton "Commencer"
- [x] Affichage fluide
- [x] Outro avec closure
- [x] Bouton "Continuer"
- [x] Retour au hub

---

## 💡 **PHILOSOPHIE DU MODULE**

### **Ce n'est PAS :**
- ❌ Un test de lecture rapide
- ❌ Un quiz de compréhension
- ❌ Un exercice de mémorisation
- ❌ Un jeu de vitesse

### **C'est :**
- ✅ Un champ d'exposition
- ✅ Une immersion structurelle
- ✅ Une préparation perceptive
- ✅ Un état induit, pas un apprentissage forcé

> **L'exercice est réussi si l'utilisateur termine avec une sensation de clarté visuelle accrue.**

Pas de score. Pas de validation. La forme travaille d'elle-même.

---

## 🔮 **ÉVOLUTION FUTURE (V2+)**

### **Variantes possibles**

**LANGAGES / Acceleration:**
- Mots linguistiques + rythme + césure
- Même format, vocabulaire différent

**SYSTÈMES / Acceleration:**
- Flux, réseau, extraction, boucle
- Même format, focus sur dynamiques

### **Améliorations techniques**

- **Pause/Resume** : Option de pause (touche ESPACE)
- **Vitesse ajustable** : Slider 200-1200 WPM (optionnel)
- **Export texte** : Télécharger le texte complet (optionnel)

**Règle :** Ne rien ajouter qui brise le calme. L'essentiel est là.

---

## 📚 **EXEMPLES DE TEXTE**

### **Début (lent, 300 WPM)**
```
Une ligne verticale.
Une ligne horizontale.
Elles se croisent.
Un angle se forme.
L'angle devient structure.
```

### **Milieu (moyen, 600 WPM)**
```
Deux verticales parallèles.
L'espace entre elles vibre.
La distance crée tension.
La tension crée attente.
```

### **Fin (rapide, 900 WPM)**
```
La forme précède le sens.
La forme organise avant de signifier.
La reconnaissance suffit.
```

---

## ✅ **PRÊT POUR DÉPLOIEMENT**

**Version :** 1.0  
**Date :** 9 janvier 2026  
**Statut :** Production-ready  
**Fichiers :** 1 composant (`FormesAcceleration.tsx`)  
**Intégration :** Complète dans `EtudesFormesV2.tsx`

🎯 **Le module fonctionne. Calme, précis, efficace.**
