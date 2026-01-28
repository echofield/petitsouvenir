/**
 * 🎫 GÉNÉRATEUR DE CODES UNIQUES
 * 
 * Génère des card_id uniques pour les cartes physiques
 * Format : PREFIX-XXXX
 * 
 * Exemples :
 * - LUT-2847 (Lutèce)
 * - 1789-5721 (Révolution)
 * - TABLE-9999 (Table parisienne)
 */

export interface CardCode {
  id: string;
  prefix: string;
  number: number;
  url: string;
  qrData: string;
}

/**
 * Génère un nombre aléatoire à 4 chiffres
 */
function generateRandomNumber(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

/**
 * Génère N codes uniques pour un préfixe donné
 */
export function generateCards(
  prefix: string,
  count: number,
  baseUrl: string = 'https://arche.paris'
): CardCode[] {
  const cards: CardCode[] = [];
  const usedNumbers = new Set<number>();

  for (let i = 0; i < count; i++) {
    let number: number;
    
    // Éviter les doublons
    do {
      number = generateRandomNumber();
    } while (usedNumbers.has(number));
    
    usedNumbers.add(number);
    
    const id = `${prefix}-${number}`;
    const url = `${baseUrl}?card=${id}`;
    
    cards.push({
      id,
      prefix,
      number,
      url,
      qrData: url
    });
  }

  return cards;
}

/**
 * Génère des lots de cartes pour différentes thématiques
 */
export function generateCardBatches(baseUrl: string = 'https://arche.paris') {
  return {
    lutece: generateCards('LUT', 100, baseUrl),
    revolution: generateCards('1789', 100, baseUrl),
    table: generateCards('TABLE', 100, baseUrl),
    demo: generateCards('DEMO', 10, baseUrl)
  };
}

/**
 * Exporte les codes en CSV
 */
export function exportToCSV(cards: CardCode[]): string {
  const header = 'ID,Prefix,Number,URL,QR Data\n';
  const rows = cards.map(card => 
    `${card.id},${card.prefix},${card.number},${card.url},${card.qrData}`
  ).join('\n');
  
  return header + rows;
}

/**
 * Exporte les codes en JSON
 */
export function exportToJSON(cards: CardCode[]): string {
  return JSON.stringify(cards, null, 2);
}

/**
 * Télécharge un fichier
 */
export function downloadFile(content: string, filename: string, type: string = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// =====================================
// UTILISATION EN CONSOLE
// =====================================

if (typeof window !== 'undefined') {
  (window as any).generateCards = generateCards;
  (window as any).generateCardBatches = generateCardBatches;
  (window as any).exportToCSV = exportToCSV;
  (window as any).exportToJSON = exportToJSON;
  (window as any).downloadFile = downloadFile;
  
  console.log(`
🎫 GÉNÉRATEUR DE CARTES DISPONIBLE

Exemples d'utilisation :

1️⃣ Générer 100 cartes Lutèce :
   const cards = generateCards('LUT', 100, 'https://arche.paris');
   console.log(cards);

2️⃣ Générer tous les lots :
   const batches = generateCardBatches('https://arche.paris');
   console.log(batches);

3️⃣ Exporter en CSV :
   const cards = generateCards('LUT', 100);
   const csv = exportToCSV(cards);
   downloadFile(csv, 'cartes-lutece.csv', 'text/csv');

4️⃣ Exporter en JSON :
   const cards = generateCards('1789', 100);
   const json = exportToJSON(cards);
   downloadFile(json, 'cartes-1789.json', 'application/json');

5️⃣ Générer un batch complet et télécharger :
   const all = generateCardBatches();
   downloadFile(exportToCSV(all.lutece), 'lutece.csv', 'text/csv');
   downloadFile(exportToCSV(all.revolution), '1789.csv', 'text/csv');
   downloadFile(exportToCSV(all.table), 'table.csv', 'text/csv');
  `);
}
