/**
 * IMAGE WITH FILTER â€” ARCHÃ‰
 * Image avec filtre lÃ©ger unifiÃ© + fade-in blur-up + aspect ratio
 */

import { useState, useEffect } from 'react';

interface ImageWithFilterProps {
  src: string;
  alt?: string;
  aspectRatio?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  overlayOpacity?: number;
  imageOpacity?: number;
  saturation?: number;
}

// Détecter le support WebP du navigateur
function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

// Convertir un path PNG/JPG en WebP
function convertToWebP(src: string): string {
  if (src.endsWith('.png')) {
    return src.replace('.png', '.webp');
  }
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
    return src.replace(/\.(jpg|jpeg)$/, '.webp');
  }
  return src;
}

export function ImageWithFilter({
  src,
  alt = '',
  aspectRatio,
  height,
  className = '',
  style = {},
  priority = false,
  overlayOpacity = 0.04,
  imageOpacity = 0.50,
  saturation = -8,
}: ImageWithFilterProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);

  useEffect(() => {
    // Réinitialiser les états quand src change
    setLoaded(false);
    setError(false);

    // Détecter le support WebP et déterminer la source de l'image
    supportsWebP().then((supported) => {
      let finalSrc = src;
      
      // Si WebP est supporté et que l'image est PNG/JPG, utiliser WebP
      if (supported && (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'))) {
        finalSrc = convertToWebP(src);
      }
      
      setImageSrc(finalSrc);

      // Preload si priority
      if (priority && finalSrc) {
        const existingLink = document.querySelector(`link[rel="preload"][as="image"][href="${finalSrc}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = finalSrc;
          document.head.appendChild(link);
        }
      }
      
      // Précharger l'image pour smooth transition
      const img = new Image();
      img.src = finalSrc;
      img.onload = () => setLoaded(true);
      img.onerror = () => {
        // Si WebP échoue et qu'on avait une source PNG/JPG, essayer le fallback
        if (finalSrc !== src && finalSrc.endsWith('.webp')) {
          const fallbackImg = new Image();
          fallbackImg.src = src;
          fallbackImg.onload = () => {
            setImageSrc(src);
            setLoaded(true);
          };
          fallbackImg.onerror = () => setError(true);
        } else {
          setError(true);
        }
      };
    });
  }, [src, priority]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgba(250, 245, 235, 0.5)',
    ...style,
    ...(aspectRatio
      ? { aspectRatio }
      : height
      ? { height }
      : { aspectRatio: '16/9' }),
  };

  // Warm parchment overlay — ivory, not sterile white
  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, rgba(250, 245, 235, ${overlayOpacity}) 0%, rgba(245, 240, 230, ${overlayOpacity * 0.6}) 100%)`,
    zIndex: 1,
    pointerEvents: 'none',
  };

  // Living trace — warmth, soft contrast, inhabited presence
  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: loaded ? imageOpacity : 0,
    filter: loaded
      ? `grayscale(${Math.abs(saturation) * 10}%) saturate(${100 + saturation}%) contrast(1.03)`
      : 'blur(20px) grayscale(100%)',
    transform: loaded ? 'scale(1)' : 'scale(1.05)',
  };

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...containerStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(14, 63, 47, 0.04) 0%, rgba(14, 63, 47, 0.08) 100%)',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.3,
            letterSpacing: '0.08em',
          }}
        >
          [Image indisponible]
        </p>
      </div>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      {/* Placeholder — warm parchment pulse */}
      {!loaded && !error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #FAF5EB 0%, #F0E8DC 100%)',
            animation: 'pulse 2s ease-in-out infinite',
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay léger pour unifier */}
      <div style={overlayStyle} />

      {/* Image réelle - WebP avec fallback PNG/JPG automatique */}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          // Fallback: si WebP échoue, charger PNG/JPG (la logique est dans useEffect)
          // Ce handler sert de sécurité supplémentaire
          if (!loaded && !error) {
            setError(true);
          }
        }}
        style={imageStyle}
      />

      {/* Animation CSS */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
