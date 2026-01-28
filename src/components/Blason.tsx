/**
 * BLASON ARCHÉ — Easter egg entrance
 * Position fixe haut-gauche, révèle LE CERCLE
 */

interface BlasonProps {
  onClick: () => void;
}

export function Blason({ onClick }: BlasonProps) {
  return (
    <div
      className="blason-container"
      style={{
        position: 'fixed',
        top: '16px',
        left: '32px',
        zIndex: 10000,
        width: '50px',
        height: '62px',
        isolation: 'isolate'
      }}
    >
      {/* Container avec hover */}
      <div
        onClick={onClick}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          const circle = e.currentTarget.querySelector('.blason-circle') as SVGElement;
          const glow = e.currentTarget.querySelector('.blason-glow') as HTMLDivElement;
          if (circle) circle.style.filter = 'drop-shadow(0 0 8px rgba(184, 134, 11, 0.4))';
          if (glow) glow.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          const circle = e.currentTarget.querySelector('.blason-circle') as SVGElement;
          const glow = e.currentTarget.querySelector('.blason-glow') as HTMLDivElement;
          if (circle) circle.style.filter = 'none';
          if (glow) glow.style.opacity = '0';
        }}
      >
        {/* Glow effect au hover */}
        <div
          className="blason-glow"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 134, 11, 0.15) 0%, transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        />

        {/* SVG Blason */}
        <svg
          className="blason-svg"
          width="50"
          height="62"
          viewBox="0 0 50 62"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block',
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
          }}
        >
          {/* Contour du blason */}
          <path
            d="M 25 2 L 45 10 L 45 40 Q 45 52 25 60 Q 5 52 5 40 L 5 10 Z"
            fill="rgba(250, 248, 245, 0.9)"
            stroke="#B8860B"
            strokeWidth="0.5"
            opacity="0.85"
          />

          {/* Colonne centrale stylisée */}
          <line
            x1="25"
            y1="15"
            x2="25"
            y2="45"
            stroke="#B8860B"
            strokeWidth="1.2"
            opacity="0.6"
          />
          
          {/* Chapiteau (haut de colonne) */}
          <path
            d="M 22 15 L 28 15 M 21 17 L 29 17"
            stroke="#B8860B"
            strokeWidth="0.6"
            opacity="0.5"
          />

          {/* Base de colonne */}
          <path
            d="M 22 45 L 28 45 M 21 47 L 29 47"
            stroke="#B8860B"
            strokeWidth="0.6"
            opacity="0.5"
          />

          {/* Lions stylisés (formes abstraites) — Gauche */}
          <path
            d="M 12 28 Q 10 26 12 24 L 14 26 Z"
            fill="#B8860B"
            opacity="0.35"
          />
          
          {/* Lions stylisés — Droite */}
          <path
            d="M 38 28 Q 40 26 38 24 L 36 26 Z"
            fill="#B8860B"
            opacity="0.35"
          />

          {/* Yeux des lions (flash au hover) */}
          <circle
            className="lion-eye-left"
            cx="11"
            cy="25"
            r="0.5"
            fill="#B8860B"
            opacity="0.4"
            style={{ transition: 'opacity 0.15s ease' }}
          />
          <circle
            className="lion-eye-right"
            cx="39"
            cy="25"
            r="0.5"
            fill="#B8860B"
            opacity="0.4"
            style={{ transition: 'opacity 0.15s ease' }}
          />

          {/* LE CERCLE — Point d'entrée easter egg */}
          <circle
            className="blason-circle"
            cx="25"
            cy="31"
            r="6"
            fill="transparent"
            stroke="#B8860B"
            strokeWidth="0.8"
            style={{
              transition: 'all 0.3s ease',
              animation: 'pulse 5s ease-in-out infinite'
            }}
          />
        </svg>

        {/* Particules dorées (idle animation) */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1px',
            height: '30px',
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: '1px',
                height: '1px',
                background: '#B8860B',
                borderRadius: '50%',
                opacity: 0.3,
                animation: `particle-rise ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 1.3}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes particle-rise {
          0% {
            transform: translate(-50%, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
            transform: translate(-50%, -5px) scale(1);
          }
          100% {
            transform: translate(-50%, -30px) scale(0.5);
            opacity: 0;
          }
        }
        
        /* Responsive mobile */
        @media (max-width: 768px) {
          .blason-container {
            top: 16px !important;
            left: 20px !important;
            width: 40px !important;
            height: 50px !important;
            z-index: 1002 !important;
          }
          
          .blason-svg {
            width: 40px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}
