#!/usr/bin/env node

/**
 * 🌱 GÉNÉRATEUR DE SEEDS
 * 
 * Outil CLI pour générer rapidement une nouvelle quête au format seed.
 * 
 * USAGE :
 *   node scripts/generate-seed.js
 * 
 * OU :
 *   npm run generate-seed
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Stockage des réponses
const answers = {};

// ═══════════════════════════════════════════════════════════════════════
// 💬 QUESTIONS
// ═══════════════════════════════════════════════════════════════════════

const questions = [
  { key: 'id', prompt: '📝 ID unique (slug, ex: "lutece") : ' },
  { key: 'title', prompt: '🏛️  Titre (ex: "LUTÈCE — ORIGINE") : ' },
  { key: 'registre', prompt: '🏷️  Registre (ex: "FONDATION · GESTE · MESURE") : ' },
  { key: 'theme', prompt: '💡 Thème (phrase courte) : ' },
  { key: 'shortDescription', prompt: '📄 Description courte : ' },
  { key: 'fullDescription', prompt: '📖 Description longue : ' },
  { key: 'duree', prompt: '⏱️  Durée (ex: "≈ 2h") : ' },
  { key: 'image', prompt: '🖼️  URL Imgur (ex: https://i.imgur.com/ABC123.jpeg) : ' }
];

// ═══════════════════════════════════════════════════════════════════════
// 🔄 FONCTIONS
// ═══════════════════════════════════════════════════════════════════════

function askQuestion(index) {
  if (index >= questions.length) {
    askForNodes();
    return;
  }

  const q = questions[index];
  rl.question(q.prompt, (answer) => {
    answers[q.key] = answer;
    askQuestion(index + 1);
  });
}

const nodes = [];

function askForNodes() {
  console.log('\n🗺️  AJOUTER DES NODES (points d\'intérêt)\n');
  askNodeDetails();
}

function askNodeDetails() {
  const nodeAnswers = {};
  
  rl.question('📍 ID du node (ex: "ile-cite", ou ENTER pour terminer) : ', (id) => {
    if (!id) {
      finalize();
      return;
    }
    
    nodeAnswers.id = id;
    
    rl.question('🏛️  Titre du lieu : ', (titre) => {
      nodeAnswers.titre = titre;
      
      rl.question('📮 Adresse complète : ', (adresse) => {
        nodeAnswers.adresse = adresse;
        
        rl.question('🌍 Latitude (ex: 48.8566) : ', (lat) => {
          nodeAnswers.latitude = parseFloat(lat);
          
          rl.question('🌍 Longitude (ex: 2.3522) : ', (lon) => {
            nodeAnswers.longitude = parseFloat(lon);
            
            rl.question('🏷️  Thème (ex: "Architecture") : ', (theme) => {
              nodeAnswers.theme = theme;
              
              rl.question('📝 Texte narratif : ', (texte) => {
                nodeAnswers.texte = texte;
                
                rl.question('🖼️  Image URL (optionnel, ENTER pour skip) : ', (imageUrl) => {
                  if (imageUrl) {
                    nodeAnswers.imageUrl = imageUrl;
                  }
                  
                  nodes.push(nodeAnswers);
                  console.log(`✅ Node "${titre}" ajouté !\n`);
                  askNodeDetails();
                });
              });
            });
          });
        });
      });
    });
  });
}

function finalize() {
  console.log('\n🎨 GÉNÉRATION DU CODE...\n');
  
  const code = generateSeedCode(answers, nodes);
  
  // Sauvegarder dans un fichier
  const filename = `QUETE_${answers.id.toUpperCase()}.ts`;
  const filepath = path.join(process.cwd(), 'data', 'generated', filename);
  
  // Créer le dossier si nécessaire
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filepath, code);
  
  console.log('✅ SEED GÉNÉRÉ !\n');
  console.log(`📁 Fichier : ${filepath}\n`);
  console.log('📋 PROCHAINES ÉTAPES :\n');
  console.log('1. Copie le contenu du fichier généré');
  console.log('2. Colle-le dans /data/seeds.ts');
  console.log('3. Ajoute la quête à ALL_QUETES et QUETES_BY_ID');
  console.log('4. Test avec : npm run dev\n');
  
  rl.close();
}

function generateSeedCode(answers, nodes) {
  const nodesCode = nodes.map(node => {
    return `    {
      id: '${node.id}',
      titre: '${node.titre}',
      adresse: '${node.adresse}',
      latitude: ${node.latitude},
      longitude: ${node.longitude},
      theme: '${node.theme}',
      texte: '${node.texte}'${node.imageUrl ? `,\n      imageUrl: '${node.imageUrl}'` : ''}
    }`;
  }).join(',\n');

  return `/**
 * 🌱 SEED GÉNÉRÉ AUTOMATIQUEMENT
 * Générée le : ${new Date().toLocaleString('fr-FR')}
 */

export const QUETE_${answers.id.toUpperCase()}: QueteSeed = {
  id: '${answers.id}',
  title: '${answers.title}',
  registre: '${answers.registre}',
  theme: '${answers.theme}',
  shortDescription: '${answers.shortDescription}',
  fullDescription: \`${answers.fullDescription}\`,
  duree: '${answers.duree}',
  image: '${answers.image}',
  nodes: [
${nodesCode}
  ]
};

// ═══════════════════════════════════════════════════════════════════════
// 📦 AJOUTER À /data/seeds.ts
// ═══════════════════════════════════════════════════════════════════════

/*

1. Copie QUETE_${answers.id.toUpperCase()} ci-dessus

2. Ajoute à ALL_QUETES :

export const ALL_QUETES: QueteSeed[] = [
  QUETE_LUTECE,
  QUETE_1789,
  QUETE_TABLE,
  QUETE_${answers.id.toUpperCase()}  // ← Nouvelle quête
];

3. Ajoute à QUETES_BY_ID :

export const QUETES_BY_ID: Record<string, QueteSeed> = {
  lutece: QUETE_LUTECE,
  '1789': QUETE_1789,
  table: QUETE_TABLE,
  '${answers.id}': QUETE_${answers.id.toUpperCase()}  // ← Nouvelle quête
};

4. Test : npm run dev

*/
`;
}

// ═══════════════════════════════════════════════════════════════════════
// 🚀 DÉMARRAGE
// ═══════════════════════════════════════════════════════════════════════

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         🌱 GÉNÉRATEUR DE SEEDS — PETIT SOUVENIR              ║
║                                                                ║
║  Cet outil va te guider pour créer une nouvelle quête         ║
║  au format standardisé.                                        ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

`);

askQuestion(0);
