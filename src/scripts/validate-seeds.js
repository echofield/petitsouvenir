/**
 * ✅ VALIDATEUR DE SEEDS
 * 
 * Script pour vérifier que toutes les données sont bien formatées
 * avant le déploiement.
 * 
 * USAGE :
 *   node scripts/validate-seeds.js
 * 
 * OU :
 *   npm run validate-seeds
 */

// ═══════════════════════════════════════════════════════════════════════
// 📋 RÈGLES DE VALIDATION
// ═══════════════════════════════════════════════════════════════════════

const VALIDATION_RULES = {
  quete: {
    id: {
      required: true,
      type: 'string',
      pattern: /^[a-z0-9-]+$/,
      message: 'ID doit être en minuscules, sans accents, tirets autorisés'
    },
    title: {
      required: true,
      type: 'string',
      minLength: 5,
      message: 'Titre doit faire au moins 5 caractères'
    },
    registre: {
      required: true,
      type: 'string',
      pattern: /·/,
      message: 'Registre doit contenir des "·" (ALT+SHIFT+9 sur Mac)'
    },
    theme: {
      required: true,
      type: 'string',
      minLength: 10,
      message: 'Thème doit faire au moins 10 caractères'
    },
    shortDescription: {
      required: true,
      type: 'string',
      minLength: 20,
      maxLength: 200,
      message: 'Description courte entre 20 et 200 caractères'
    },
    fullDescription: {
      required: true,
      type: 'string',
      minLength: 50,
      message: 'Description complète doit faire au moins 50 caractères'
    },
    duree: {
      required: true,
      type: 'string',
      pattern: /≈/,
      message: 'Durée doit contenir "≈" (symbole "environ")'
    },
    image: {
      required: true,
      type: 'string',
      pattern: /^https:\/\/i\.imgur\.com\//,
      message: 'Image doit être une URL Imgur (https://i.imgur.com/...)'
    },
    nodes: {
      required: true,
      type: 'array',
      minLength: 1,
      message: 'Au moins 1 node requis'
    }
  },
  
  node: {
    id: {
      required: true,
      type: 'string',
      pattern: /^[a-z0-9-]+$/,
      message: 'ID doit être en minuscules, sans accents, tirets autorisés'
    },
    titre: {
      required: true,
      type: 'string',
      minLength: 3,
      message: 'Titre doit faire au moins 3 caractères'
    },
    adresse: {
      required: true,
      type: 'string',
      minLength: 10,
      message: 'Adresse doit faire au moins 10 caractères'
    },
    latitude: {
      required: true,
      type: 'number',
      min: -90,
      max: 90,
      message: 'Latitude doit être un nombre entre -90 et 90'
    },
    longitude: {
      required: true,
      type: 'number',
      min: -180,
      max: 180,
      message: 'Longitude doit être un nombre entre -180 et 180'
    },
    theme: {
      required: true,
      type: 'string',
      minLength: 3,
      message: 'Thème doit faire au moins 3 caractères'
    },
    texte: {
      required: true,
      type: 'string',
      minLength: 20,
      message: 'Texte doit faire au moins 20 caractères'
    },
    imageUrl: {
      required: false,
      type: 'string',
      pattern: /^https:\/\/i\.imgur\.com\//,
      message: 'Image (si présente) doit être une URL Imgur'
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════
// 🔍 FONCTIONS DE VALIDATION
// ═══════════════════════════════════════════════════════════════════════

function validateField(value, rule, fieldName) {
  const errors = [];
  
  // Requis
  if (rule.required && (value === undefined || value === null || value === '')) {
    errors.push(`${fieldName} est requis`);
    return errors;
  }
  
  // Si optionnel et absent, pas d'autres vérifications
  if (!rule.required && !value) {
    return errors;
  }
  
  // Type
  if (rule.type === 'string' && typeof value !== 'string') {
    errors.push(`${fieldName} doit être une string (reçu: ${typeof value})`);
  }
  if (rule.type === 'number' && typeof value !== 'number') {
    errors.push(`${fieldName} doit être un number (reçu: ${typeof value})`);
  }
  if (rule.type === 'array' && !Array.isArray(value)) {
    errors.push(`${fieldName} doit être un array (reçu: ${typeof value})`);
  }
  
  // Longueur string
  if (rule.type === 'string' && rule.minLength && value.length < rule.minLength) {
    errors.push(`${fieldName} trop court (min: ${rule.minLength}, actuel: ${value.length})`);
  }
  if (rule.type === 'string' && rule.maxLength && value.length > rule.maxLength) {
    errors.push(`${fieldName} trop long (max: ${rule.maxLength}, actuel: ${value.length})`);
  }
  
  // Longueur array
  if (rule.type === 'array' && rule.minLength && value.length < rule.minLength) {
    errors.push(`${fieldName} doit contenir au moins ${rule.minLength} élément(s)`);
  }
  
  // Pattern regex
  if (rule.pattern && !rule.pattern.test(value)) {
    errors.push(`${fieldName} : ${rule.message}`);
  }
  
  // Min/max number
  if (rule.type === 'number' && rule.min !== undefined && value < rule.min) {
    errors.push(`${fieldName} doit être >= ${rule.min} (actuel: ${value})`);
  }
  if (rule.type === 'number' && rule.max !== undefined && value > rule.max) {
    errors.push(`${fieldName} doit être <= ${rule.max} (actuel: ${value})`);
  }
  
  return errors;
}

function validateQuete(quete) {
  const errors = [];
  
  // Valider chaque champ
  for (const [fieldName, rule] of Object.entries(VALIDATION_RULES.quete)) {
    const fieldErrors = validateField(quete[fieldName], rule, fieldName);
    errors.push(...fieldErrors);
  }
  
  // Valider les nodes
  if (Array.isArray(quete.nodes)) {
    quete.nodes.forEach((node, index) => {
      const nodeErrors = validateNode(node);
      if (nodeErrors.length > 0) {
        errors.push(`Node #${index + 1} (${node.id || 'sans ID'}) :`);
        errors.push(...nodeErrors.map(e => `  → ${e}`));
      }
    });
  }
  
  return errors;
}

function validateNode(node) {
  const errors = [];
  
  for (const [fieldName, rule] of Object.entries(VALIDATION_RULES.node)) {
    const fieldErrors = validateField(node[fieldName], rule, fieldName);
    errors.push(...fieldErrors);
  }
  
  return errors;
}

// ═══════════════════════════════════════════════════════════════════════
// 🎯 VALIDATION PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════

function validateSeeds(quetes) {
  console.log('🔍 VALIDATION DES SEEDS\n');
  console.log(`📊 ${quetes.length} quête(s) à valider\n`);
  
  let totalErrors = 0;
  const results = [];
  
  quetes.forEach((quete, index) => {
    const errors = validateQuete(quete);
    
    if (errors.length === 0) {
      console.log(`✅ Quête ${index + 1} : "${quete.title}" — OK`);
      results.push({ quete, valid: true, errors: [] });
    } else {
      console.log(`❌ Quête ${index + 1} : "${quete.title}" — ${errors.length} erreur(s)`);
      errors.forEach(error => console.log(`   → ${error}`));
      console.log('');
      totalErrors += errors.length;
      results.push({ quete, valid: false, errors });
    }
  });
  
  console.log('\n═══════════════════════════════════════════════════════════════');
  
  if (totalErrors === 0) {
    console.log('✅ VALIDATION RÉUSSIE — Toutes les quêtes sont valides !');
    console.log('🚀 Prêt pour le déploiement.');
  } else {
    console.log(`❌ VALIDATION ÉCHOUÉE — ${totalErrors} erreur(s) trouvée(s)`);
    console.log('🔧 Corrige les erreurs avant de déployer.');
  }
  
  console.log('═══════════════════════════════════════════════════════════════\n');
  
  return results;
}

// ═══════════════════════════════════════════════════════════════════════
// 📊 STATS
// ═══════════════════════════════════════════════════════════════════════

function displayStats(quetes) {
  console.log('📊 STATISTIQUES\n');
  
  const totalNodes = quetes.reduce((sum, q) => sum + q.nodes.length, 0);
  const avgNodesPerQuete = (totalNodes / quetes.length).toFixed(1);
  
  const imagesWithUrl = quetes.reduce((sum, q) => {
    return sum + q.nodes.filter(n => n.imageUrl).length;
  }, 0);
  
  const uniqueThemes = new Set();
  quetes.forEach(q => q.nodes.forEach(n => uniqueThemes.add(n.theme)));
  
  console.log(`   Quêtes totales : ${quetes.length}`);
  console.log(`   Nodes totaux : ${totalNodes}`);
  console.log(`   Moyenne nodes/quête : ${avgNodesPerQuete}`);
  console.log(`   Nodes avec image : ${imagesWithUrl}/${totalNodes}`);
  console.log(`   Thèmes uniques : ${uniqueThemes.size}`);
  console.log(`   Thèmes : ${Array.from(uniqueThemes).join(', ')}`);
  console.log('');
}

// ═══════════════════════════════════════════════════════════════════════
// 🚀 EXÉCUTION (si appelé directement)
// ═══════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && require.main === module) {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║       ✅ VALIDATEUR DE SEEDS — PETIT SOUVENIR                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`);

  // Exemple d'utilisation avec données statiques
  // Dans un vrai projet, importer depuis /data/seeds.ts
  
  const EXEMPLE_QUETES = [
    {
      id: 'lutece',
      title: 'LUTÈCE — ORIGINE',
      registre: 'FONDATION · GESTE · MESURE',
      theme: 'Paris commence comme un passage.',
      shortDescription: 'Avant les palais, avant les façades, Paris fut une solution.',
      fullDescription: 'Paris commence comme un passage : une île, un pont, un axe.',
      duree: '≈ 2h',
      image: 'https://i.imgur.com/1uLhXia.jpeg',
      nodes: [
        {
          id: 'ile-cite',
          titre: 'Île de la Cité',
          adresse: 'Parvis Notre-Dame, 75004 Paris',
          latitude: 48.8534,
          longitude: 2.3488,
          theme: 'Fondation',
          texte: 'Avant d\'être une ville, Paris fut une île.'
        }
      ]
    }
  ];
  
  const results = validateSeeds(EXEMPLE_QUETES);
  displayStats(EXEMPLE_QUETES);
  
  process.exit(results.every(r => r.valid) ? 0 : 1);
}

// ═══════════════════════════════════════════════════════════════════════
// 📦 EXPORT POUR USAGE PROGRAMMATIQUE
// ═══════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined') {
  module.exports = {
    validateSeeds,
    validateQuete,
    validateNode,
    displayStats,
    VALIDATION_RULES
  };
}
