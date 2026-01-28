# 🎨 INFOGRAPHIE — WORKFLOW DE REPRODUCTION

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║            🌱 PETIT SOUVENIR — SYSTÈME DE REPRODUCTION                   ║
║                                                                           ║
║        Reproduire le système pour n'importe quelle ville en < 1h         ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  PRINCIPE DIRECTEUR                                                     │
│  ═══════════════════                                                    │
│                                                                         │
│      UN SEUL FICHIER À MODIFIER : /data/seeds.ts                       │
│                                                                         │
│      ┌─────────────┐                                                   │
│      │ seeds.ts    │  ───────┬─────→  Homepage (image hero)           │
│      │             │         │                                         │
│      │ • Quêtes    │         ├─────→  Liste des quêtes (3 cartes)     │
│      │ • Nodes     │         │                                         │
│      │ • Images    │         ├─────→  Page détail quête              │
│      │ • Textes    │         │                                         │
│      └─────────────┘         └─────→  Carnet Parisien (nodes)         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  WORKFLOW EN 5 PHASES                                                   │
│  ════════════════════                                                   │
│                                                                         │
│                                                                         │
│  1️⃣  CONCEPTION (30 min)                                               │
│      ┌───────────────────────────────────────────────────────┐        │
│      │ • Choisir 3 thèmes pour la ville                      │        │
│      │ • Sélectionner 3-4 lieux par thème                    │        │
│      │ • Écrire les récits narratifs                         │        │
│      └───────────────────────────────────────────────────────┘        │
│                             │                                           │
│                             ▼                                           │
│                                                                         │
│  2️⃣  IMAGES (15 min)                                                   │
│      ┌───────────────────────────────────────────────────────┐        │
│      │ • Upload 4 images sur Imgur                           │        │
│      │   → 1 hero + 3 quêtes                                 │        │
│      │ • Copier les URLs (https://i.imgur.com/...)          │        │
│      └───────────────────────────────────────────────────────┘        │
│                             │                                           │
│                             ▼                                           │
│                                                                         │
│  3️⃣  COORDONNÉES GPS (10 min)                                          │
│      ┌───────────────────────────────────────────────────────┐        │
│      │ • Google Maps → Clic droit → Coordonnées             │        │
│      │ • Copier latitude & longitude pour chaque lieu       │        │
│      │ • Format : 48.8566, 2.3522                            │        │
│      └───────────────────────────────────────────────────────┘        │
│                             │                                           │
│                             ▼                                           │
│                                                                         │
│  4️⃣  CODAGE (5 min)                                                    │
│      ┌───────────────────────────────────────────────────────┐        │
│      │ • Copier /data/TEMPLATE-QUETE.ts                      │        │
│      │ • Remplacer tous les [PLACEHOLDER]                    │        │
│      │ • Coller dans /data/seeds.ts                          │        │
│      │ • Ajouter à ALL_QUETES et QUETES_BY_ID                │        │
│      └───────────────────────────────────────────────────────┘        │
│                             │                                           │
│                             ▼                                           │
│                                                                         │
│  5️⃣  DÉPLOIEMENT (2 min)                                               │
│      ┌───────────────────────────────────────────────────────┐        │
│      │ • git add .                                            │        │
│      │ • git commit -m "Add new city"                        │        │
│      │ • git push origin main                                │        │
│      │ • Vercel déploie automatiquement                      │        │
│      └───────────────────────────────────────────────────────┘        │
│                                                                         │
│                          ✅ EN LIGNE !                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  STRUCTURE D'UNE QUÊTE                                                  │
│  ═════════════════════                                                  │
│                                                                         │
│     QUETE                                                               │
│     ┌─────────────────────────────────────────────────────┐           │
│     │  id: 'slug-unique'                                  │           │
│     │  title: 'TITRE — THÈME'                             │           │
│     │  registre: 'MOT · MOT · MOT'                        │           │
│     │  theme: 'Phrase d\'accroche'                        │           │
│     │  shortDescription: 'Desc courte'                    │           │
│     │  fullDescription: 'Desc longue'                     │           │
│     │  duree: '≈ 2h'                                      │           │
│     │  image: 'https://i.imgur.com/XXX.jpeg'             │           │
│     │                                                      │           │
│     │  nodes: [                                            │           │
│     │    ┌────────────────────────────────┐               │           │
│     │    │  NODE 1                        │               │           │
│     │    │  • id                          │               │           │
│     │    │  • titre                       │               │           │
│     │    │  • adresse                     │               │           │
│     │    │  • latitude / longitude        │               │           │
│     │    │  • theme                       │               │           │
│     │    │  • texte (narrative)           │               │           │
│     │    │  • imageUrl (optionnel)        │               │           │
│     │    └────────────────────────────────┘               │           │
│     │                                                      │           │
│     │    ┌────────────────────────────────┐               │           │
│     │    │  NODE 2                        │               │           │
│     │    │  • id                          │               │           │
│     │    │  • titre                       │               │           │
│     │    │  • ...                         │               │           │
│     │    └────────────────────────────────┘               │           │
│     │                                                      │           │
│     │    ┌────────────────────────────────┐               │           │
│     │    │  NODE 3                        │               │           │
│     │    │  • ...                         │               │           │
│     │    └────────────────────────────────┘               │           │
│     │  ]                                                   │           │
│     └─────────────────────────────────────────────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  OUTILS FOURNIS                                                         │
│  ══════════════                                                         │
│                                                                         │
│                                                                         │
│  📋 DOCUMENTATION                                                       │
│     ├─ QUICK-START.md ──────→ Guide 2 min                             │
│     ├─ SEEDS-GUIDE.md ──────→ Guide complet 10 min                    │
│     ├─ CHECKLIST.md ────────→ Checklist interactive                   │
│     ├─ REPRODUCTION-README ─→ Vue d'ensemble                          │
│     └─ INDEX.md ────────────→ Index de tous les fichiers              │
│                                                                         │
│                                                                         │
│  📦 TEMPLATES                                                           │
│     ├─ TEMPLATE-QUETE.ts ───→ Template vide                           │
│     └─ EXEMPLE-LYON.ts ─────→ Exemple complet Lyon                    │
│                                                                         │
│                                                                         │
│  🛠️ SCRIPTS                                                             │
│     ├─ generate-seed.js ────→ Générateur interactif                   │
│     └─ validate-seeds.js ───→ Validateur de données                   │
│                                                                         │
│                                                                         │
│  🔧 UTILS                                                               │
│     └─ imgur-helper.ts ─────→ Optimisation images                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  EXEMPLES D'ADAPTATIONS                                                 │
│  ══════════════════════                                                 │
│                                                                         │
│                                                                         │
│  PARIS (actuel)                                                         │
│  └─ Lutèce — Origine                                                   │
│  └─ 1789 — Décision                                                    │
│  └─ Vin & Table — Vie Parisienne                                       │
│                                                                         │
│                                                                         │
│  LYON (exemple fourni)                                                  │
│  └─ Confluence — Fusion                                                │
│  └─ Croix-Rousse — Pente                                               │
│  └─ Presqu'île — Commerce                                              │
│                                                                         │
│                                                                         │
│  MARSEILLE (à créer)                                                    │
│  └─ Vieux-Port — Fondation                                             │
│  └─ Calanques — Nature                                                 │
│  └─ Panier — Identité                                                  │
│                                                                         │
│                                                                         │
│  TOKYO (à créer)                                                        │
│  └─ Shibuya — Flux                                                     │
│  └─ Edo — Mémoire                                                      │
│  └─ Métro — Verticalité                                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ISOLATION PAR CARD_ID                                                  │
│  ═════════════════════                                                  │
│                                                                         │
│                                                                         │
│       ┌──────────────┐                                                 │
│       │  CARTE #1    │  → ?card=LUT-2847                              │
│       │  (physique)  │                                                 │
│       └──────────────┘                                                 │
│              │                                                          │
│              ▼                                                          │
│       ┌──────────────────────────────────┐                            │
│       │  BASE DE DONNÉES SUPABASE        │                            │
│       │  ────────────────────────────     │                            │
│       │                                   │                            │
│       │  notes (LUT-2847)                │                            │
│       │  └─ Note 1                       │                            │
│       │  └─ Note 2                       │                            │
│       │  └─ Note 3                       │                            │
│       │                                   │                            │
│       │  notes (MAR-5193)                │                            │
│       │  └─ Note A                       │                            │
│       │  └─ Note B                       │                            │
│       │                                   │                            │
│       │  notes (BOR-8421)                │                            │
│       │  └─ Note X                       │                            │
│       │  └─ Note Y                       │                            │
│       │                                   │                            │
│       └──────────────────────────────────┘                            │
│                                                                         │
│   Chaque card_id a son univers privé → Aucun mélange possible         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  COMMANDES UTILES                                                       │
│  ════════════════                                                       │
│                                                                         │
│  # Lancer en local                                                      │
│  npm run dev                                                            │
│                                                                         │
│  # Générer une quête (interactif)                                      │
│  node scripts/generate-seed.js                                          │
│                                                                         │
│  # Valider les données                                                  │
│  node scripts/validate-seeds.js                                         │
│                                                                         │
│  # Déployer                                                             │
│  git add .                                                              │
│  git commit -m "Add new city"                                           │
│  git push origin main                                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  STATS                                                                  │
│  ═════                                                                  │
│                                                                         │
│  ⏱️  Temps de reproduction : ~1h (avec images prêtes)                 │
│  📁 Fichier à modifier : 1 seul (/data/seeds.ts)                      │
│  🖼️  Images nécessaires : 4 minimum (1 hero + 3 quêtes)              │
│  🌍 Coordonnées GPS : 9-12 (3-4 par quête)                            │
│  📝 Lignes de code à écrire : ~0 (copier-coller template)             │
│  🎨 Composants React à modifier : 0                                    │
│  ✅ Validation automatique : Oui (script fourni)                      │
│  🚀 Déploiement : Automatique (Vercel)                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                 ✅ SYSTÈME PRÊT À L'EMPLOI                               ║
║                                                                           ║
║     Reproduis PETIT SOUVENIR pour n'importe quelle ville en < 1h         ║
║                                                                           ║
║                   👉 Commence avec /QUICK-START.md                       ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```
