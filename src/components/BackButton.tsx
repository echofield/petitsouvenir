/**
 * BACK BUTTON — ARCHÉ
 * Bouton retour discret avec flèche manuscrite gravée
 * Texte "Retour à la cité" au hover
 */

import { useState } from 'react';

interface BackButtonProps {
  onBack: () => void;
  onClick?: () => void; // Fallback pour compatibilité
  label?: string;
}

export function BackButton({ onBack, onClick, label = 'Retour à la cité' }: BackButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = onBack || onClick;

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          top: '24px',
          left: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10000,
          transition: 'all 400ms ease',
          padding: '8px 12px',
          isolation: 'isolate'
        }}
      >
        {/* SVG Flèche manuscrite gravée */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            opacity: isHovered ? 1 : 0.6,
            transition: 'opacity 300ms ease'
          }}
        >
          <path
            d="M19 12H5M5 12L12 5M5 12L12 19"
            stroke="#0E3F2F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              filter: 'drop-shadow(0 0.5px 0.5px rgba(0,0,0,0.1))'
            }}
          />
        </svg>

        {/* Texte au hover - masqué en dessous de 768px */}
        <span
          className="back-button-label"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '14px',
            letterSpacing: '0.05em',
            color: '#0E3F2F',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 300ms ease 100ms',
            whiteSpace: 'nowrap'
          }}
        >
          {label}
        </span>
      </button>

      {/* Responsive mobile - masquer le texte en dessous de 768px */}
      <style>{`
        @media (max-width: 767px) {
          .back-button-label {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
