# ÉTUDES — Documentation Technique V1

**Date** : 9 janvier 2026  
**Statut** : ✅ Implémenté et intégré

---

## 🎯 PRINCIPE DIRECTEUR

> **ÉTUDES n'est pas un menu, c'est une surface d'apprentissage.**

L'incomplétude est intentionnelle.  
Le silence fait partie du design.  
Pas de gamification, pas de scoring, pas d'optimisation UX.

---

## 📁 ARCHITECTURE DES FICHIERS

```
/components/
├── Etudes.tsx              # Hub principal (6 secteurs)
├── EtudesFormes.tsx        # Secteur 1 : Entraînement visuel
├── EtudesLangages.tsx      # Secteur 2 : Entraînement mental
└── EtudesSystemes.tsx      # Secteur 3 : Entraînement du jugement
```

**Intégration dans App.tsx :**
- Route : `#etudes`
- Point d'entrée : `<EtudesEntry />` (bottom-right de la homepage)

---

## 🏗️ STRUCTURE GLOBALE

### **Hub ÉTUDES**

6 secteurs affichés dans une grille :

#### **✅ ACTIFS (V1)**
1. **FORMES** — Entraîner l'œil
2. **LANGAGES** — Entraîner l'esprit
3. **SYSTÈMES** — Entraîner le jugement

#### **🔒 VERROUILLÉS (V2+)**
4. **HISTOIRES** — Temps, mémoire, continuité
5. **PRATIQUES** — Craft, geste, faire
6. **ORDRES** — Façons de lire, lenses, rôles

**Comportement des secteurs verrouillés :**
- Visibles (opacité 0.3)
- Pas cliquables
- Pas de tooltip
- Pas de "coming soon"
- Ils existent, c'est tout

---

## 📚 SECTEUR 1 : FORMES

**Objectif** : Entraîner l'œil à voir la structure, la proportion, l'alignement.

**Structure :**
```
Opening
  ↓
Arche (Pattern visuel)
  ↓
Practice (Exercice d'observation)
  ↓
Closure
```

### **Opening**
- Texte court (3 lignes max)
- "La forme précède le sens"
- Cadrage conceptuel

### **Arche**
- Diagramme : Axe historique de Paris
- Louvre → Concorde → Arc de Triomphe
- Visualisation SVG simple
- Légende sobre

### **Practice**
- Instructions :
  1. Regarde l'espace autour de toi
  2. Identifie 3 lignes (horizontale, verticale, diagonale)
  3. Dessine-les mentalement
  4. Reste immobile 30 secondes
- **Pas de validation**
- **Pas d'upload**
- L'attention est la pratique

### **Closure**
- Une phrase : "La géométrie ne s'apprend pas. Elle se reconnaît."
- Retour au hub

---

## 📚 SECTEUR 2 : LANGAGES

**Objectif** : Entraîner l'esprit à l'attention, au rythme, à la nomination.

**Structure :**
```
Opening
  ↓
Word Flux Exercise
  ↓
Closure
```

### **Opening**
- "Le langage est un rythme, pas une information"
- Instruction : des mots vont apparaître, reste présent

### **Word Flux**
- 45 mots neutres (racines latines, architecture, géométrie)
- Affichage un par un
- Vitesse progressive : 1200ms → 400ms
- Pas de tâche, juste observer
- Barre de progression discrète (1px)

**Mots utilisés :**
```
ligne, point, axe, forme, plan, angle, courbe, surface, volume, masse,
lumière, ombre, pierre, bois, métal, ordre, mesure, rythme, proportion, symétrie,
passage, seuil, porte, fenêtre, voûte, mur, sol, toit, escalier, colonne,
arc, dôme, tour, pont, place, rue, jardin, parc, fleuve, île,
ciel, terre, eau, feu, air
```

### **Closure**
- "Le silence qui suit les mots est aussi important que les mots eux-mêmes"
- Option : répéter ou retourner

---

## 📚 SECTEUR 3 : SYSTÈMES

**Objectif** : Entraîner le jugement à reconnaître structure, conséquence, équilibre.

**Structure :**
```
Opening
  ↓
Arche (Contraste)
  ↓
Choice (Choix utilisateur)
  ↓
ASCII Recognition
  ↓
Closure
```

### **Opening**
- "Les systèmes façonnent le comportement"
- Cadrage conceptuel

### **Arche : Contraste**

**Deux colonnes :**

**EXTRACTION**
- Prendre une ressource limitée
- Exploiter, maximiser le rendement
- Conséquence : épuisement inévitable

**MAINTENANCE**
- Préserver ce qui existe
- Régénérer, équilibrer
- Conséquence : durée, mais lenteur

**Note importante :**
> "Aucun jugement moral. Ce sont des structures avec des conséquences différentes."

### **Choice**

**Question :**
> "Si tu devais concevoir une ville, quelle structure choisirais-tu ?"

**Options :**
1. Croissance rapide, maximiser les ressources, innovation constante
2. Croissance lente, préserver l'équilibre, régénérer les ressources

**Comportement :**
- Choix enregistré silencieusement
- Aucun commentaire
- Pas de feedback moral

### **ASCII Recognition**

**Schéma affiché :**
```
    ┌─────────┐
    │ SOURCE  │
    └────┬────┘
         │
    ┌────▼────┐
    │ FLUX →  │───────┐
    └─────────┘       │
                      │
                 ┌────▼────┐
                 │ SORTIE  │
                 │ (perte) │
                 └─────────┘
```

**Question :**
> "Quelle structure représente ce schéma ?"

**Options :**
1. Un cycle fermé de régénération
2. Un flux linéaire avec épuisement
3. Un réseau distribué sans centre

**Comportement :**
- Sélection obligatoire pour continuer
- Pas de feedback correct/incorrect
- "La reconnaissance suffit"

### **Closure**
- "Reconnaître une structure ne signifie pas l'approuver. C'est simplement voir ce qui est."
- Retour au hub

---

## 🎨 DESIGN SYSTEM

### **Couleurs**
```css
--paper: #FAF8F2        /* Fond parchemin */
--ink: #1A1A1A          /* Texte principal */
--green: #003D2C        /* Accents */
--gold: #A38767         /* (non utilisé dans ÉTUDES) */
```

### **Typographie**
```css
/* Titres de secteurs */
font-family: 'Cormorant Garamond'
font-size: 24px
font-weight: 400

/* Titres principaux */
font-family: 'Cormorant Garamond'
font-size: 32px
font-weight: 400

/* Labels (small caps) */
font-family: 'Inter'
font-size: 11px
font-weight: 500
letter-spacing: 0.12em
text-transform: uppercase
opacity: 0.4

/* Corps de texte */
font-family: 'Inter'
font-size: 17px
font-weight: 400
line-height: 1.6
opacity: 0.7
```

### **Espacement**
```css
--space-sm: 16px
--space-md: 24px
--space-lg: 48px
--space-xl: 64px
--space-xxl: 96px
```

### **Transitions**
```css
transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1)
```

### **Bordures**
```css
border: 0.5px solid rgba(26, 26, 26, 0.1)
```

### **Ombres**
```css
/* Au repos */
box-shadow: 0 2px 8px rgba(26, 26, 26, 0.04)

/* Au survol */
box-shadow: 0 4px 16px rgba(26, 26, 26, 0.05)
```

---

## 🔧 COMPORTEMENTS TECHNIQUES

### **Point d'entrée (EtudesEntry)**
- Position : `fixed`, `bottom: 40px`, `right: 40px`
- Icône : Livre ouvert (SVG custom)
- Label : "ÉTUDES"
- Hover : Translation Y -2px, shadow augmenté
- z-index : 50

### **Navigation**
- Hub → Secteur → Stages internes → Hub
- Bouton retour : `position: fixed`, `top: 40px`, `left: 40px`
- Hash URL : `#etudes`

### **États**
```typescript
type SectorState = 'closed' | 'formes' | 'langages' | 'systemes';
```

### **Secteurs verrouillés**
```typescript
disabled={!sector.active}
opacity: sector.active ? 1 : 0.3
cursor: sector.active ? 'pointer' : 'default'
```

---

## 📊 DONNÉES ENREGISTRÉES

### **Rien en V1**

Les secteurs actifs ne persistent aucune donnée :
- Pas de progression
- Pas de score
- Pas de statistiques
- Pas d'historique

**Exception :** Le choix dans SYSTÈMES est "enregistré silencieusement" (juste setState, pas de persistence).

**Raison :** L'apprentissage est interne. Les données seraient du bruit.

---

## 🚫 CE QUI N'EXISTE PAS (ET POURQUOI)

### **Pas de gamification**
- Pas de badges
- Pas de niveaux
- Pas de streaks
- Pas de "Tu as complété X%"

**Pourquoi :** Ce n'est pas un jeu, c'est un entraînement sérieux.

### **Pas de feedback correct/incorrect**
- Pas de "Bonne réponse !"
- Pas de "Essaie encore"
- Pas de validation

**Pourquoi :** Il n'y a pas de bonne réponse. Il y a seulement l'attention et la reconnaissance.

### **Pas de "coming soon"**
- Les secteurs verrouillés n'ont pas de tooltip
- Pas de "Bientôt disponible"
- Ils existent, c'est tout

**Pourquoi :** L'incomplétude crée le sentiment d'un monde, pas d'une roadmap.

### **Pas de contenu éducatif**
- Pas d'histoire de l'art
- Pas de définitions
- Pas de liens Wikipedia
- Pas de galerie

**Pourquoi :** Ce n'est pas Wikipédia, c'est un dojo.

---

## 🎯 PRINCIPES DE DESIGN

1. **Calme > Excitation**
   - Transitions lentes (400ms)
   - Pas d'animations complexes
   - Beaucoup d'espace blanc

2. **Silence > Explication**
   - Pas de tooltips
   - Pas de texte d'aide
   - Les instructions sont minimales

3. **Présence > Performance**
   - Pas de timer visible (sauf barre de progression discrète)
   - Pas de scoring
   - L'exercice lui-même est la récompense

4. **Structure > Contenu**
   - Les secteurs sont des formes vides
   - Ce qui compte est la pratique répétée
   - Le contenu est minimal et neutre

5. **Incomplétude > Exhaustivité**
   - Seulement 3 secteurs sur 6 actifs
   - Un seul exercice par secteur
   - Pas de variantes
   - C'est volontaire

---

## 🔄 WORKFLOW UTILISATEUR

```
Homepage
  ↓
[Clic sur EtudesEntry (bottom-right)]
  ↓
Hub ÉTUDES (6 secteurs visibles, 3 actifs)
  ↓
[Clic sur un secteur actif]
  ↓
Secteur (4-5 stages selon secteur)
  ↓
[Bouton retour]
  ↓
Hub ÉTUDES
  ↓
[Bouton retour]
  ↓
Homepage
```

---

## 📱 RESPONSIVE

**Mobile (< 768px)**
- Grille des secteurs : 1 colonne
- Padding réduit
- Taille de police adaptée
- EtudesEntry : bottom: 24px, right: 24px

**Desktop (> 768px)**
- Grille des secteurs : 2-3 colonnes (auto-fit)
- Padding confortable
- Tout le reste identique

---

## 🚀 FUTURE (V2+)

### **Ce qui pourrait venir plus tard :**

**HISTOIRES (secteur 4)**
- Temps
- Mémoire
- Continuité

**PRATIQUES (secteur 5)**
- Craft
- Geste
- Making

**ORDRES (secteur 6)**
- Ways of reading
- Lenses
- Roles

### **Fonctionnalités futures possibles :**
- AR overlays
- ASCII composition
- Puzzles
- Citizenship links
- AI-assisted creation
- Book recommendations

**Mais pas maintenant.**

---

## ✅ CHECKLIST D'INTÉGRATION

- [x] Hub ÉTUDES créé (`Etudes.tsx`)
- [x] 3 secteurs actifs implémentés
- [x] Point d'entrée bottom-right (`EtudesEntry`)
- [x] Intégration dans `App.tsx`
- [x] Route `#etudes` configurée
- [x] Design system respecté
- [x] Pas de gamification
- [x] Pas de scoring
- [x] Pas de "coming soon"
- [x] Secteurs verrouillés visibles mais inactifs
- [x] Responsive mobile/desktop
- [x] Documentation technique complète

---

## 📝 NOTES TECHNIQUES

### **Performance**
- Aucun appel API
- Aucune image externe
- SVG inline uniquement
- État local uniquement (useState)
- Pas de persistence

### **Accessibilité**
- Semantic HTML
- Boutons avec :hover, :focus
- Contraste respecté (WCAG AA)
- Pas de dépendance au survol (mobile OK)

### **Compatibilité**
- React 18+
- TypeScript 5+
- Navigateurs modernes (ES2020+)
- Mobile Safari, Chrome, Firefox

---

## 🎨 PHILOSOPHIE

ÉTUDES est inspiré de :
- **Zen gardens** — Simplicité, contemplation
- **Dojos traditionnels** — Pratique répétée sans jugement
- **Exercices structurels** — Form over content
- **Serious games académiques** — Pas de gamification

Ce n'est pas :
- Une plateforme d'e-learning
- Un système de cours
- Un quiz
- Une app éducative

C'est :
- Une surface d'entraînement
- Un espace de pratique
- Un lieu de reconnaissance
- Une invitation au calme

---

**✅ ÉTUDES V1 EST COMPLET ET INTÉGRÉ**

Le système est conçu pour sembler avoir toujours été là.  
L'incomplétude est le design.  
Le silence est la fonctionnalité.

---

**Prochaine étape (V2)** : Débloquer les 3 secteurs restants uniquement quand le contenu sera prêt. Pas avant.
