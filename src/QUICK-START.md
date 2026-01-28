# 🚀 REPRODUCTION ULTRA-RAPIDE

## 🎯 WORKFLOW EN 3 ÉTAPES

### **ÉTAPE 1 : Upload tes images**
```
1. Va sur https://imgur.com/upload
2. Upload tes images (HERO + 3 QUÊTES)
3. Copie les URLs (format: https://i.imgur.com/ABC123.jpeg)
```

### **ÉTAPE 2 : Copie le template**
```bash
# Ouvre ce fichier :
/data/TEMPLATE-QUETE.ts

# Copie tout le contenu
# Remplace tous les [PLACEHOLDER]
# Colle dans /data/seeds.ts
```

### **ÉTAPE 3 : Enregistre et déploie**
```typescript
// Dans /data/seeds.ts, ajoute ta quête :

export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  TA_NOUVELLE_QUETE  // ← Ici
];

export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE,
  'ton-id': TA_NOUVELLE_QUETE  // ← Et ici
};
```

```bash
# Puis déploie :
git add .
git commit -m "Add new quest"
git push origin main
```

---

## 📁 FICHIERS IMPORTANTS

| Fichier | Rôle |
|---------|------|
| `/data/seeds.ts` | **FICHIER PRINCIPAL** — Toutes les données |
| `/data/TEMPLATE-QUETE.ts` | Template vide à copier-coller |
| `/SEEDS-GUIDE.md` | Guide complet (si tu bloques) |
| `/scripts/generate-seed.js` | Générateur interactif (optionnel) |

---

## 🔧 COMMANDES UTILES

```bash
# Lancer en local
npm run dev

# Générer une quête interactivement (optionnel)
node scripts/generate-seed.js

# Déployer
git push origin main
```

---

## ✅ CHECKLIST RAPIDE

- [ ] Images uploadées sur Imgur
- [ ] URLs copiées (format: `https://i.imgur.com/...`)
- [ ] Template copié depuis `/data/TEMPLATE-QUETE.ts`
- [ ] Tous les `[PLACEHOLDER]` remplacés
- [ ] Coordonnées GPS ajoutées (Google Maps → Clic droit → Copier coordonnées)
- [ ] Quête ajoutée à `ALL_QUETES`
- [ ] Quête ajoutée à `QUETES_BY_ID`
- [ ] Test local : `npm run dev`
- [ ] Git push

---

## 💡 EXEMPLES D'IDS DE QUÊTES

```
lutece          → Quête historique sur les origines
1789            → Quête révolutionnaire
seine           → Quête autour du fleuve
montmartre      → Quête dans un quartier
gastronomie     → Quête thématique culinaire
architecture    → Quête thématique bâtiments
```

**Règle** : Slug unique, minuscule, sans accents, tirets autorisés.

---

## 🛟 AIDE RAPIDE

**Images ne s'affichent pas ?**
- Vérifie : `https://i.imgur.com/...` (avec le "i.")

**Quête n'apparaît pas ?**
- Vérifie : Ajoutée dans `ALL_QUETES` ET `QUETES_BY_ID`

**Coordonnées GPS ?**
- Google Maps → Clic droit sur le lieu → "Copier les coordonnées"
- Format : `latitude: 48.8566, longitude: 2.3522` (nombres, pas strings)

---

## 🎨 BONUS : GÉNÉRATEUR INTERACTIF

Si tu veux être guidé pas à pas :

```bash
node scripts/generate-seed.js
```

Le script va te poser des questions et générer le code automatiquement.

---

## 🌍 ADAPTER À UNE NOUVELLE VILLE

**Pour créer "PETIT SOUVENIR — Lyon" :**

1. **Change l'image HERO** dans `/data/seeds.ts` :
   ```typescript
   export const HERO_IMAGE = {
     url: 'https://i.imgur.com/LYON-HERO.jpeg',
     alt: 'Lyon — Ville des lumières'
   };
   ```

2. **Crée 3 nouvelles quêtes Lyon** (Confluence, Croix-Rousse, Presqu'île)

3. **Remplace** `ALL_QUETES` avec tes quêtes Lyon

4. **Deploy** → Tu as ton PETIT SOUVENIR Lyon !

---

**C'EST TOUT !** Le système est conçu pour être reproductible en **moins d'1h**. 🚀
