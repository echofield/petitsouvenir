# 🚀 GUIDE DE DÉPLOIEMENT VERCEL

**PETIT SOUVENIR — CityNodes Paris**

---

## ⚡ DÉPLOIEMENT RAPIDE (5 minutes)

### **1. Connecter GitHub à Vercel**

1. Va sur [vercel.com](https://vercel.com)
2. **Sign up with GitHub** (si pas encore de compte)
3. Autorise Vercel à accéder à tes repos

---

### **2. Importer le projet**

1. Clique **Add New... → Project**
2. Sélectionne le repo `petit-souvenir-arche`
3. Clique **Import**

---

### **3. Configurer les variables d'environnement**

Dans **Environment Variables**, ajoute :

```bash
SUPABASE_URL
Valeur : https://[ton-projet-id].supabase.co

SUPABASE_ANON_KEY
Valeur : eyJhbGc... (copie depuis Supabase Dashboard → Settings → API)

SUPABASE_SERVICE_ROLE_KEY
Valeur : eyJhbGc... (copie depuis Supabase Dashboard → Settings → API)

SUPABASE_DB_URL
Valeur : postgresql://... (copie depuis Supabase Dashboard → Settings → Database)

JWT_SECRET
Valeur : un-secret-unique-aleatoire-123456
```

**Important** : Applique ces variables à :
- ✅ Production
- ✅ Preview
- ✅ Development

---

### **4. Déployer**

1. Clique **Deploy**
2. Vercel va :
   - Installer les dépendances
   - Build avec Vite
   - Déployer sur CDN global
3. ⏱️ Temps : ~2 minutes

---

### **5. URL de production**

Ton app est live ! 🎉

```
https://petit-souvenir-arche.vercel.app
```

ou avec ton domaine personnalisé :

```
https://arche.paris
```

---

## 🌐 Ajouter un domaine personnalisé (optionnel)

### **Dans Vercel :**

1. Va dans **Settings → Domains**
2. Ajoute `arche.paris`
3. Vercel te donne les DNS à configurer

### **Chez ton registrar (ex: Namecheap, OVH) :**

Ajoute ces enregistrements DNS :

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

⏱️ Propagation DNS : ~30 minutes

---

## 🔧 Migration base de données

**Après le premier déploiement**, exécute la migration :

### **Option 1 : Console browser**

1. Ouvre `https://arche.paris`
2. Ouvre la console développeur (F12)
3. Tape :
   ```javascript
   runMigration()
   ```

### **Option 2 : Supabase SQL Editor**

1. Va dans **Supabase Dashboard → SQL Editor**
2. Exécute :
   ```sql
   ALTER TABLE journal_entries 
   ADD COLUMN card_id TEXT NOT NULL DEFAULT 'DEMO-0001';

   CREATE INDEX idx_journal_card ON journal_entries(card_id);
   ```

---

## 📱 Générer les QR Codes

Une fois déployé, génère tes codes :

### **Dans la console browser :**

```javascript
// Générer 100 cartes Lutèce
const cards = generateCards('LUT', 100, 'https://arche.paris');

// Télécharger en CSV
const csv = exportToCSV(cards);
downloadFile(csv, 'cartes-lutece.csv', 'text/csv');
```

### **Batch complet :**

```javascript
const all = generateCardBatches('https://arche.paris');

downloadFile(exportToCSV(all.lutece), 'lutece.csv', 'text/csv');
downloadFile(exportToCSV(all.revolution), '1789.csv', 'text/csv');
downloadFile(exportToCSV(all.table), 'table.csv', 'text/csv');
```

Tu obtiens un CSV avec :

```csv
ID,Prefix,Number,URL,QR Data
LUT-2847,LUT,2847,https://arche.paris?card=LUT-2847,https://arche.paris?card=LUT-2847
LUT-5931,LUT,5931,https://arche.paris?card=LUT-5931,https://arche.paris?card=LUT-5931
...
```

### **Générer les QR codes visuels :**

1. Va sur [QR Code Generator](https://www.qr-code-generator.com/)
2. Colle chaque URL : `https://arche.paris?card=LUT-2847`
3. Personnalise le design (couleur #003D2C, logo ARCHÉ)
4. Télécharge en haute résolution
5. Imprime sur les cartes physiques

---

## 🎯 Test de l'isolation

Teste que chaque carte est bien isolée :

1. **Ouvre** : `https://arche.paris?card=TEST-A`
2. Va dans **Carnet Parisien**
3. Ajoute un souvenir "Test A"
4. **Ouvre une nouvelle fenêtre** : `https://arche.paris?card=TEST-B`
5. Va dans **Carnet Parisien**
6. Vérifie que le carnet est vide
7. Ajoute un souvenir "Test B"
8. **Retourne à** `?card=TEST-A`
9. Vérifie que seul "Test A" est visible

✅ **Si c'est le cas : isolation parfaite !**

---

## 🔄 Mises à jour automatiques

Chaque fois que tu push sur GitHub :

```bash
git add .
git commit -m "Nouvelle feature"
git push origin main
```

Vercel va :
1. Détecter le push
2. Rebuild automatiquement
3. Déployer la nouvelle version
4. ⏱️ Temps : ~2 minutes

**Zero downtime !**

---

## 📊 Monitoring

Dans **Vercel Dashboard** :

- 📈 **Analytics** : Visites, performance
- 🔍 **Logs** : Erreurs en temps réel
- ⚡ **Speed Insights** : Core Web Vitals
- 🌍 **Deployments** : Historique des déploiements

---

## ⚠️ Troubleshooting

### **Erreur : "SUPABASE_URL is not defined"**

→ Vérifie que les env vars sont bien configurées dans Vercel

### **Le Carnet ne se sauvegarde pas**

→ Vérifie que la migration `card_id` a été exécutée

### **Les données se mélangent entre cartes**

→ Vérifie dans Supabase que la colonne `card_id` existe

### **404 sur les routes**

→ Vérifie que `vercel.json` contient bien le rewrite `/(.*)`

---

## ✅ Checklist finale

- [ ] Projet déployé sur Vercel
- [ ] Variables d'environnement configurées
- [ ] Migration `card_id` exécutée
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] QR codes générés et testés
- [ ] Isolation testée avec plusieurs `?card=`
- [ ] Cartes physiques imprimées

---

## 🎉 C'EST PRÊT !

Ton app est en production, scalable, avec isolation totale par carte.

**L'objet EST l'accès.** 🏛️

---

## 📞 Support

Questions ? Contacte :
- 📧 contact@arche.paris
- 🌐 https://arche.paris
