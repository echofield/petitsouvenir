# ✅ CHECKLIST DE REPRODUCTION

## 📋 AVANT DE COMMENCER

- [ ] J'ai accès à Imgur (https://imgur.com)
- [ ] J'ai Google Maps pour les coordonnées GPS
- [ ] J'ai choisi ma ville cible
- [ ] J'ai identifié 3 thèmes pour cette ville

---

## 🎨 PHASE 1 : CONCEPTION (30 min)

### **Étape 1.1 : Identifier les thèmes**
- [ ] Thème 1 défini : ________________
- [ ] Thème 2 défini : ________________
- [ ] Thème 3 défini : ________________

**💡 Conseils :**
- Paris : Fondation, Révolution, Gastronomie
- Lyon : Confluence, Croix-Rousse, Presqu'île
- Marseille : Vieux-Port, Calanques, Panier
- Bordeaux : Vin, Négoce, Architecture

### **Étape 1.2 : Sélectionner les lieux**
Pour chaque thème, choisis 3-4 lieux :

**Thème 1 :**
- [ ] Lieu 1 : ________________
- [ ] Lieu 2 : ________________
- [ ] Lieu 3 : ________________
- [ ] Lieu 4 (optionnel) : ________________

**Thème 2 :**
- [ ] Lieu 1 : ________________
- [ ] Lieu 2 : ________________
- [ ] Lieu 3 : ________________
- [ ] Lieu 4 (optionnel) : ________________

**Thème 3 :**
- [ ] Lieu 1 : ________________
- [ ] Lieu 2 : ________________
- [ ] Lieu 3 : ________________
- [ ] Lieu 4 (optionnel) : ________________

### **Étape 1.3 : Écrire les récits**
- [ ] Description courte Thème 1 (2-3 lignes)
- [ ] Description longue Thème 1 (3-5 paragraphes)
- [ ] Description courte Thème 2
- [ ] Description longue Thème 2
- [ ] Description courte Thème 3
- [ ] Description longue Thème 3

---

## 🖼️ PHASE 2 : IMAGES (15 min)

### **Étape 2.1 : Upload sur Imgur**
- [ ] Image HERO (homepage) uploadée
- [ ] Image Thème 1 uploadée
- [ ] Image Thème 2 uploadée
- [ ] Image Thème 3 uploadée
- [ ] Images des nodes (optionnel)

### **Étape 2.2 : Copier les URLs**
- [ ] URL Hero : `https://i.imgur.com/________.jpeg`
- [ ] URL Thème 1 : `https://i.imgur.com/________.jpeg`
- [ ] URL Thème 2 : `https://i.imgur.com/________.jpeg`
- [ ] URL Thème 3 : `https://i.imgur.com/________.jpeg`

**⚠️ Vérification :**
- [ ] Toutes les URLs commencent par `https://i.imgur.com/`
- [ ] Toutes les URLs se terminent par `.jpeg`, `.jpg` ou `.png`
- [ ] Les images s'affichent quand je colle l'URL dans le navigateur

---

## 🌍 PHASE 3 : COORDONNÉES GPS (10 min)

### **Pour chaque lieu :**

**Thème 1 :**
- [ ] Lieu 1 : Lat `______`, Lon `______`
- [ ] Lieu 2 : Lat `______`, Lon `______`
- [ ] Lieu 3 : Lat `______`, Lon `______`
- [ ] Lieu 4 : Lat `______`, Lon `______`

**Thème 2 :**
- [ ] Lieu 1 : Lat `______`, Lon `______`
- [ ] Lieu 2 : Lat `______`, Lon `______`
- [ ] Lieu 3 : Lat `______`, Lon `______`
- [ ] Lieu 4 : Lat `______`, Lon `______`

**Thème 3 :**
- [ ] Lieu 1 : Lat `______`, Lon `______`
- [ ] Lieu 2 : Lat `______`, Lon `______`
- [ ] Lieu 3 : Lat `______`, Lon `______`
- [ ] Lieu 4 : Lat `______`, Lon `______`

**💡 Comment obtenir les coordonnées :**
1. Ouvre Google Maps
2. Clic droit sur le lieu
3. Clic sur les coordonnées en haut (elles se copient automatiquement)
4. Format : `48.8566, 2.3522` → Latitude = 48.8566, Longitude = 2.3522

---

## 💻 PHASE 4 : CODAGE (5 min)

### **Étape 4.1 : Préparer les données**
- [ ] Ouvrir `/data/TEMPLATE-QUETE.ts`
- [ ] Copier le template Quête 1
- [ ] Remplacer tous les `[PLACEHOLDER]`
- [ ] Copier le template Quête 2
- [ ] Remplacer tous les `[PLACEHOLDER]`
- [ ] Copier le template Quête 3
- [ ] Remplacer tous les `[PLACEHOLDER]`

### **Étape 4.2 : Modifier seeds.ts**
- [ ] Ouvrir `/data/seeds.ts`
- [ ] Coller les 3 nouvelles quêtes
- [ ] Modifier `HERO_IMAGE.url` avec la nouvelle image hero
- [ ] Modifier `HERO_IMAGE.alt` avec le nouveau texte
- [ ] Ajouter les quêtes à `ALL_QUETES`
- [ ] Ajouter les quêtes à `QUETES_BY_ID`

### **Étape 4.3 : Vérification syntaxique**
- [ ] Tous les IDs sont en minuscules sans accents
- [ ] Tous les registres contiennent des "·" (ALT+SHIFT+9)
- [ ] Toutes les durées contiennent "≈" (symbole environ)
- [ ] Toutes les URLs Imgur commencent par `https://i.imgur.com/`
- [ ] Toutes les coordonnées sont des nombres (pas de guillemets)
- [ ] Pas de virgule après le dernier élément d'un array

---

## 🧪 PHASE 5 : TESTS (5 min)

### **Étape 5.1 : Test local**
```bash
npm run dev
```

- [ ] L'app démarre sans erreur
- [ ] La homepage s'affiche
- [ ] L'image hero s'affiche
- [ ] Les 3 cartes de quêtes s'affichent
- [ ] Les images des cartes s'affichent
- [ ] Clic sur une carte → Page détail s'affiche
- [ ] Les nodes de la quête s'affichent
- [ ] Retour homepage → Fonctionne

### **Étape 5.2 : Validation des données (optionnel)**
```bash
node scripts/validate-seeds.js
```

- [ ] Le script affiche "✅ VALIDATION RÉUSSIE"
- [ ] Pas d'erreur dans la console

### **Étape 5.3 : Test du Carnet Parisien**
- [ ] Ajouter `?card=TEST-001` à l'URL
- [ ] Visiter un node
- [ ] Ajouter une note
- [ ] Aller dans le Carnet Parisien
- [ ] La note s'affiche
- [ ] Changer le `card_id` dans l'URL
- [ ] La note disparaît (isolation OK)

---

## 🚀 PHASE 6 : DÉPLOIEMENT (2 min)

### **Étape 6.1 : Commit**
```bash
git add data/seeds.ts
git commit -m "Add [VILLE] quests"
```

- [ ] Commit créé
- [ ] Message descriptif

### **Étape 6.2 : Push**
```bash
git push origin main
```

- [ ] Push réussi
- [ ] Vercel détecte le déploiement

### **Étape 6.3 : Vérification déploiement**
- [ ] Aller sur Vercel Dashboard
- [ ] Le déploiement est "Success"
- [ ] Ouvrir l'URL de production
- [ ] La homepage s'affiche
- [ ] Les quêtes s'affichent
- [ ] Les images s'affichent
- [ ] Tester une quête complète
- [ ] Tester avec `?card=TEST-002`

---

## 📊 PHASE 7 : DOCUMENTATION (optionnel)

- [ ] Créer un fichier `/data/seeds-[VILLE].md`
- [ ] Documenter les sources des images
- [ ] Documenter les choix thématiques
- [ ] Documenter les anecdotes sur les lieux

---

## 🎉 FINALISATION

- [ ] Tous les tests passent
- [ ] Le site est déployé
- [ ] L'isolation par `card_id` fonctionne
- [ ] Les images s'affichent rapidement
- [ ] Le responsive fonctionne (mobile + desktop)

---

## 📝 NOTES DE PRODUCTION

### **Problèmes rencontrés :**
```
_____________________________________________
_____________________________________________
_____________________________________________
```

### **Temps réel passé :**
- Conception : ______ min
- Images : ______ min
- GPS : ______ min
- Codage : ______ min
- Tests : ______ min
- Déploiement : ______ min
**TOTAL : ______ min**

### **Prochaines améliorations :**
```
_____________________________________________
_____________________________________________
_____________________________________________
```

---

## 🚨 DÉPANNAGE

**Problème : Images ne s'affichent pas**
- ✅ Vérifie que l'URL commence par `https://i.imgur.com/`
- ✅ Teste l'URL dans le navigateur
- ✅ Vérifie que l'image est publique sur Imgur

**Problème : Quête n'apparaît pas**
- ✅ Vérifie `ALL_QUETES` : la quête est ajoutée ?
- ✅ Vérifie `QUETES_BY_ID` : la quête est ajoutée ?
- ✅ Vérifie l'ID : minuscules, sans accents ?

**Problème : Coordonnées GPS ne fonctionnent pas**
- ✅ Format : `latitude: 48.8566` (nombre, pas string)
- ✅ Pas de guillemets autour des nombres
- ✅ Latitude entre -90 et 90
- ✅ Longitude entre -180 et 180

**Problème : Erreur de syntaxe**
- ✅ Pas de virgule après le dernier élément d'un array
- ✅ Tous les strings entre guillemets
- ✅ Tous les objets bien fermés avec `}`
- ✅ Lancer : `node scripts/validate-seeds.js`

---

**✅ CHECKLIST COMPLÉTÉE → PRÊT POUR LA PRODUCTION !** 🚀
