/**
 * 🖼️ IMGUR IMAGE OPTIMIZER
 * 
 * Helpers pour optimiser automatiquement les images Imgur
 * selon le contexte d'affichage
 */

export type ImgurSize = 's' | 'm' | 'l' | 'h' | 'original';

/**
 * Convertit une URL Imgur en version optimisée
 * 
 * @param url - URL Imgur originale (ex: https://i.imgur.com/ABC123.jpeg)
 * @param size - Taille désirée ('s' | 'm' | 'l' | 'h' | 'original')
 * 
 * Tailles disponibles :
 * - s : 160x160 (thumbnails)
 * - m : 320x320 (cartes)
 * - l : 640x640 (détails)
 * - h : 1024x1024 (hero)
 * - original : taille complète (éviter)
 */
export function getImgurOptimized(url: string, size: ImgurSize = 'l'): string {
  // Si pas une URL Imgur, retourne tel quel
  if (!url.includes('i.imgur.com')) {
    return url;
  }

  // Si déjà une taille, retourne tel quel
  if (url.match(/\.(jpg|jpeg|png|gif)[smlh]$/i)) {
    return url;
  }

  // Extraire l'extension
  const extension = url.match(/\.(jpg|jpeg|png|gif)$/i)?.[0] || '.jpeg';
  
  // Si original, pas de suffixe
  if (size === 'original') {
    return url;
  }

  // Remplacer l'extension par extension + suffixe
  return url.replace(new RegExp(extension + '$', 'i'), `${size}${extension}`);
}

/**
 * Presets pour différents contextes
 */
export const ImgurPresets = {
  hero: (url: string) => getImgurOptimized(url, 'h'),
  card: (url: string) => getImgurOptimized(url, 'l'),
  thumbnail: (url: string) => getImgurOptimized(url, 'm'),
  icon: (url: string) => getImgurOptimized(url, 's')
};

/**
 * Génère un srcSet pour responsive images
 */
export function getImgurSrcSet(url: string): string {
  return [
    `${getImgurOptimized(url, 's')} 160w`,
    `${getImgurOptimized(url, 'm')} 320w`,
    `${getImgurOptimized(url, 'l')} 640w`,
    `${getImgurOptimized(url, 'h')} 1024w`
  ].join(', ');
}

/**
 * Component React helper
 */
export interface ImgurImageProps {
  src: string;
  alt: string;
  size?: ImgurSize;
  className?: string;
  style?: React.CSSProperties;
}

// Exemple d'utilisation :
//
// import { getImgurOptimized, ImgurPresets } from './utils/imgur-helper';
//
// // Méthode 1 : Directe
// <img src={getImgurOptimized('https://i.imgur.com/ABC123.jpeg', 'l')} />
//
// // Méthode 2 : Preset
// <img src={ImgurPresets.hero('https://i.imgur.com/ABC123.jpeg')} />
//
// // Méthode 3 : Responsive srcSet
// <img 
//   srcSet={getImgurSrcSet('https://i.imgur.com/ABC123.jpeg')}
//   sizes="(max-width: 640px) 320px, 640px"
// />

if (typeof window !== 'undefined') {
  (window as any).getImgurOptimized = getImgurOptimized;
  (window as any).ImgurPresets = ImgurPresets;
  
  console.log(`
🖼️ IMGUR OPTIMIZER DISPONIBLE

Exemples :

1️⃣ Optimiser une image :
   getImgurOptimized('https://i.imgur.com/ABC123.jpeg', 'l')
   → https://i.imgur.com/ABC123l.jpeg

2️⃣ Utiliser un preset :
   ImgurPresets.hero('https://i.imgur.com/ABC123.jpeg')
   → https://i.imgur.com/ABC123h.jpeg

3️⃣ Générer srcSet responsive :
   getImgurSrcSet('https://i.imgur.com/ABC123.jpeg')
  `);
}
