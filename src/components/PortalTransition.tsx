/**
 * PORTAL TRANSITION — Animation d'entrée vers LE CERCLE
 * Le cercle du blason s'agrandit et devient un portail
 */

import { useEffect } from 'react';

interface PortalTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export function PortalTransition({ isActive, onComplete }: PortalTransitionProps) {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      {/* PHASE 1 — Vignette qui assombrit les bords */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 32px 48px, transparent 0%, rgba(0, 0, 0, 0.95) 60%)',
          animation: 'vignette-in 0.5s ease-out forwards'
        }}
      />

      {/* PHASE 2-3 — Cercle qui s'agrandit en portail */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          left: '32px',
          width: '6px',
          height: '6px',
          animation: 'portal-expand 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards'
        }}
      >
        {/* Anneau doré */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid #B8860B',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px rgba(184, 134, 11, 0.6), inset 0 0 20px rgba(184, 134, 11, 0.3)'
          }}
        />

        {/* Particules qui tourbillonnent */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '3px',
              height: '3px',
              background: '#B8860B',
              borderRadius: '50%',
              opacity: 0.6,
              animation: `swirl ${1 + i * 0.1}s linear infinite`,
              transformOrigin: `${20 + i * 10}px 0`
            }}
          />
        ))}
      </div>

      {/* PHASE 3 — Flash de lumière */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.4) 0%, transparent 50%)',
          animation: 'flash 0.3s ease-out 1.5s forwards',
          opacity: 0
        }}
      />

      {/* PHASE 4 — Fond sombre final */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#1a1a1a',
          animation: 'darken 0.5s ease-out 1.6s forwards',
          opacity: 0
        }}
      />

      <style>{`
        @keyframes vignette-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes portal-expand {
          0% {
            width: 12px;
            height: 12px;
            opacity: 1;
          }
          60% {
            width: 200vmax;
            height: 200vmax;
            opacity: 1;
          }
          100% {
            width: 200vmax;
            height: 200vmax;
            opacity: 0;
          }
        }

        @keyframes swirl {
          from {
            transform: rotate(0deg) translateX(20px);
          }
          to {
            transform: rotate(360deg) translateX(20px);
          }
        }

        @keyframes flash {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes darken {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}