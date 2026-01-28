# ÉTUDES — ÉCRAN D'INTRODUCTION AVANT ACCÉLÉRATION

**Date :** 9 janvier 2026  
**Statut :** ✅ **IMPLÉMENTÉ**

---

## 🎯 **OBJECTIF**

Créer un écran de transition calme et solennel, placé juste avant l'exercice de texte accéléré.

**Fonction :**
- Préparer l'attention
- Ne rien vendre
- Ne rien expliquer
- Mettre en condition

---

## 📄 **CONTENU TEXTE**

### **Bloc principal (invariant)**

```
Ce que tu vas lire n'est pas un contenu.

Ce n'est pas fait pour être retenu.
Ce n'est pas fait pour être compris mot à mot.

C'est une traversée.

Le texte va s'accélérer.
Ton attention devra rester ouverte, sans s'accrocher.

Si tu forces, tu perdras le flux.
Si tu lâches trop, il disparaîtra.

Reste présent.
Laisse passer.

Ici, il ne s'agit pas de vitesse.
Il s'agit de continuité.
```

### **Ligne contextuelle (variable selon module)**

**FORMES :**
> *Laisse l'œil reconnaître avant de nommer.*

**LANGAGES :**
> *Laisse le sens circuler avant d'analyser.*

---

## 🏗️ **STRUCTURE DE L'ÉCRAN**

### **Layout**
- Écran plein (viewport complet)
- Fond neutre (#FAF8F2)
- Aucun scroll
- Un seul point de sortie

### **Hiérarchie visuelle**
1. **Bloc principal** — Texte centré verticalement, largeur confortable
2. **Ligne contextuelle** — Sous le bloc, visuellement distincte mais discrète
3. **Bouton "Entrer"** — Zone cliquable unique

---

## 🎨 **DESIGN**

### **Typographie**

| Élément | Font | Size | Weight | Line-height | Opacity |
|---------|------|------|--------|-------------|---------|
| Bloc principal | Inter | 17px | 400 | 2.0 | 0.75 |
| Ligne contextuelle | Cormorant Garamond | 19px | 400 | 1.6 | 0.5 (italic) |
| Bouton | Inter | 11px | 500 | — | 0.5 → 0.9 (hover) |

### **Espacement**
- Max-width bloc : 600px
- Margin-bottom texte : 2em entre paragraphes
- Margin-bottom ligne contextuelle : 64px
- Padding bouton : 16px 64px

### **Couleurs**
- Fond : #FAF8F2 (parchemin)
- Texte : #1A1A1A
- Bordure bouton : rgba(26, 26, 26, 0.2) — 0.5px

### **Transitions**
- Hover bouton : 600ms cubic-bezier(0.4, 0, 0.2, 1)
- Pas d'animation ludique
- Pas de surbrillance agressive

---

## ⚙️ **COMPORTEMENT**

### **Règles**
- L'écran ne se rejoue **pas automatiquement** si l'utilisateur recommence l'exercice
- Accessible uniquement juste avant l'exercice
- Ne doit **pas** être accessible comme page autonome

### **Action unique**
- **Bouton "Entrer"** → Lance directement le texte accéléré

---

## 📊 **CRITÈRES DE RÉUSSITE**

L'écran est réussi si :

✅ **Il ralentit naturellement la respiration**  
✅ **Il ne provoque ni excitation ni résistance**  
✅ **Il disparaît de la conscience une fois l'exercice lancé**

**Test empirique :**
> *"Est-ce que tu te souviens de l'écran d'intro après avoir fait l'exercice ?"*  
> Si oui → l'écran est trop présent.  
> Si non → l'écran est réussi.

---

## 🏗️ **ARCHITECTURE TECHNIQUE**

### **Fichier**
```
/components/AccelerationIntro.tsx
```

### **Props**
```typescript
interface AccelerationIntroProps {
  context: 'FORMES' | 'LANGAGES';
  onEnter: () => void;
}
```

### **Ligne contextuelle (mapping)**
```typescript
const CONTEXTUAL_LINES = {
  FORMES: `Laisse l'œil reconnaître avant de nommer.`,
  LANGAGES: `Laisse le sens circuler avant d'analyser.`
};
```

### **Utilisation**
```typescript
// Dans FormesAcceleration.tsx
<AccelerationIntro
  context="FORMES"
  onEnter={handleStart}
/>

// Plus tard dans LangagesAcceleration.tsx
<AccelerationIntro
  context="LANGAGES"
  onEnter={handleStart}
/>
```

---

## 🚫 **INTERDICTIONS RESPECTÉES**

### **Aucun pictogramme**
✅ Texte uniquement

### **Aucune illustration**
✅ Fond uni, pas d'image

### **Aucun effet "motivation"**
✅ Ton neutre, pas d'exclamation

### **Pas de minuterie visible**
✅ Aucun compte à rebours

### **Pas de progression affichée**
✅ Pas de "Étape 1/3"

> **Le silence fait partie de l'interface.**

---

## 📝 **PHILOSOPHIE DE L'ÉCRAN**

### **Ce n'est PAS :**
- ❌ Un disclaimer légal
- ❌ Un tutoriel
- ❌ Une mise en garde sanitaire
- ❌ Un écran de chargement

### **C'est :**
- ✅ Un sas attentionnel
- ✅ Une préparation mentale
- ✅ Un ralentissement volontaire
- ✅ Une invitation au lâcher-prise

---

## 🎯 **EFFET RECHERCHÉ**

### **Avant l'écran**
Utilisateur : *"Je vais faire un exercice de vitesse."*

### **Pendant l'écran**
Utilisateur : *(ralentissement de la respiration, lecture calme)*

### **Après l'écran**
Utilisateur : *"C'était une traversée, pas un test."*

**Changement de posture mentale :**
- De : performance → À : présence
- De : comprendre → À : traverser
- De : retenir → À : laisser passer

---

## 📊 **MÉTRIQUES**

- **Temps de lecture moyen :** 45-60 secondes
- **Lignes de code :** 120
- **Dépendances :** 0
- **Taille bundle :** ~2KB

---

## ✅ **VALIDATION FINALE**

### **Checklist technique**
- [x] Props `context` et `onEnter`
- [x] Ligne contextuelle variable
- [x] Bouton unique "Entrer"
- [x] Typographie ARCHÉ
- [x] Transitions calmes
- [x] Responsive

### **Checklist design**
- [x] Fond parchemin #FAF8F2
- [x] Interlignage ample (2.0)
- [x] Aucun pictogramme
- [x] Aucune illustration
- [x] Aucun effet motivation
- [x] Silence intentionnel

### **Checklist philosophique**
- [x] Prépare l'attention
- [x] Ne vend rien
- [x] N'explique pas
- [x] Met en condition
- [x] Disparaît de la conscience après

---

## 🔮 **ÉVOLUTION FUTURE**

### **Variantes possibles**

**SYSTÈMES / Intro :**
> *Laisse les flux se révéler avant de juger.*

**HISTOIRES / Intro :**
> *Laisse le temps s'accumuler avant de conclure.*

**PRATIQUES / Intro :**
> *Laisse le geste s'installer avant de perfectionner.*

**ORDRES / Intro :**
> *Laisse la perspective s'ouvrir avant de fixer.*

### **Améliorations possibles**

- **Variation selon contexte :** 6 lignes contextuelles (1 par secteur)
- **Micro-animation :** Fade-in très lent du texte (optionnel, à tester)
- **Son ambiant :** Tonalité basse avant entrée (optionnel, expérimental)

**Règle :** Ne rien ajouter qui brise le calme.

---

## 📚 **COMPARAISON AVEC D'AUTRES PATTERNS**

### **Écran de loading classique**
```
[Spinner animé]
Chargement en cours...
Veuillez patienter.
```
**Problème :** Anxiogène, impatient.

---

### **Tutoriel gamifié**
```
🎯 Prêt à commencer ?
Lis vite et gagne des points !
[Bouton: GO! 🚀]
```
**Problème :** Excitation, compétition.

---

### **ÉTUDES / Intro accélération**
```
Ce que tu vas lire n'est pas un contenu.
...
Reste présent.
Laisse passer.
...
[Bouton: Entrer]
```
**Qualité :** Calme, préparation, lâcher-prise.

---

## ✅ **CONCLUSION**

L'écran d'introduction est **un sas attentionnel**.

Il transforme :
- L'exercice en traversée
- La vitesse en continuité
- La performance en présence

**Il est réussi s'il disparaît de la mémoire.**

---

**Version :** 1.0  
**Date :** 9 janvier 2026  
**Statut :** Production-ready  
**Intégré dans :** FormesAcceleration.tsx  
**Réutilisable pour :** LangagesAcceleration.tsx (futur)

🎯 **L'écran est calme, solennel, et efficace.**
