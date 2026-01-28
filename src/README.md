# 🏛️ PETIT SOUVENIR — CityNodes Paris

Plateforme de découverte parisienne haut de gamme avec une esthétique de luxe éditorial.

## 🎯 Architecture

**Multi-tenant via `card_id`** : Chaque carte physique = univers isolé

```
Carte physique → QR Code → ?card=UNIQUE-ID → Expérience privée
```

### Principe directeur
> Ce produit n'est pas une app mais un objet éditorial numérique imprimable.

---

## 🚀 Déploiement sur Vercel

### **Méthode 1 : Via l'interface Vercel (recommandé)**

1. **Connecte ton repo GitHub** :
   - Va sur [vercel.com](https://vercel.com)
   - Connecte ton compte GitHub
   - Clique **Import Project**
   - Sélectionne ce repository

2. **Configure les variables d'environnement** :
   
   Dans **Environment Variables** :
   ```bash
   SUPABASE_URL=https://[ton-projet].supabase.co
   SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   SUPABASE_DB_URL=postgresql://...
   JWT_SECRET=ton-secret-jwt-unique
   ```

3. **Déploie** :
   - Clique **Deploy**
   - Vercel détecte automatiquement Vite
   - Build & Deploy en ~2 minutes

4. **URL de production** :
   ```
   https://petit-souvenir-arche.vercel.app
   ```

### **Méthode 2 : Via CLI Vercel**

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Déployer
vercel

# Ajouter les variables d'environnement
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add JWT_SECRET

# Redéployer avec les env vars
vercel --prod
```

---

## 🌐 Configurer un domaine personnalisé

Dans **Vercel Dashboard → Settings → Domains** :

```
arche.paris → Ajouter domaine
```

Puis configurer les DNS :

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

---

## 📱 Générer les QR Codes

Une fois déployé, utilise cette URL de base :

```
https://arche.paris?card=
```

### Exemples de cartes :

```
Carte Lutèce #2847
QR Code → https://arche.paris?card=LUT-2847

Carte 1789 #5721
QR Code → https://arche.paris?card=1789-5721

Carte Table #9999
QR Code → https://arche.paris?card=TABLE-9999
```

### Outils pour générer les QR :

- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- Script Node.js (voir `/utils/generate-cards.ts`)

---

## 🔧 Migration base de données

Avant la première utilisation, exécute la migration :

### **Option 1 : Console développeur**

Ouvre la console du navigateur et tape :
```javascript
runMigration()
```

### **Option 2 : SQL Editor Supabase**

```sql
ALTER TABLE journal_entries 
ADD COLUMN card_id TEXT NOT NULL DEFAULT 'DEMO-0001';

CREATE INDEX idx_journal_card ON journal_entries(card_id);
```

---

## 🎨 Stack technique

- **Frontend** : React + TypeScript + Vite
- **Styling** : Tailwind CSS v4
- **Backend** : Supabase (Database + Edge Functions)
- **Hosting** : Vercel
- **Architecture** : Multi-tenant via card_id

---

## 📁 Structure du projet

```
/
├── App.tsx                      # Point d'entrée avec routing
├── components/
│   ├── HomepageV1.tsx           # Page d'accueil monumentale
│   ├── QuetesV1.tsx             # 3 portes (Lutèce/1789/Table)
│   ├── QueteDetail.tsx          # Détail quête + Google Maps
│   ├── OrigineMap.tsx           # Carte révélation progressive
│   ├── HistoireArchives.tsx     # Archives éditoriales
│   └── CarnetParisien.tsx       # Journal intime avec card_id
├── supabase/functions/server/
│   └── index.tsx                # Edge Function Hono
├── utils/
│   ├── supabase/info.tsx        # Config Supabase
│   └── migrate-database.ts      # Migration automatique
└── styles/globals.css           # Design system parchemin

```

---

## 🔒 Sécurité & Isolation

### Isolation par card_id

Toutes les requêtes filtrent par `card_id` :

```typescript
// Lecture
const { data } = await supabase
  .from('journal_entries')
  .select('*')
  .eq('card_id', cardId);  // ← ISOLATION

// Écriture
await supabase
  .from('journal_entries')
  .insert({ 
    content: text, 
    card_id: cardId  // ← ISOLATION
  });
```

**Garantie** : Chaque carte voit UNIQUEMENT ses propres données.

---

## 🎯 Workflow de production

1. **Imprimer cartes physiques** avec codes uniques
2. **Générer QR codes** pointant vers `?card=UNIQUE-ID`
3. **Client scanne** → Accès direct à homepage
4. **Carnet privé** isolé par card_id
5. **Aucune authentification** nécessaire

**L'objet EST l'accès.**

---

## 📞 Support

Pour toute question sur le déploiement ou la configuration :

- 📧 contact@arche.paris
- 🌐 https://arche.paris

---

## 📄 Licence

Propriétaire — PETIT SOUVENIR © 2025
