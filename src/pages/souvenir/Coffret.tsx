/**
 * Petit Souvenir — Coffrets (/coffret)
 * Packaging / preset selector. Coffret is a contained world; only Romance Hotel ships for v0.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { getAllProfileIds } from '../../data/coffret-presets';

const TIERS = [
  { packId: 'romance_hotel', title: 'One Coffret', subline: 'Romance — Hotel Edition.' },
  { packId: 'weekend', title: 'Weekend Coffret', subline: 'Two profiles.' },
  { packId: 'complete', title: 'Complete Coffret', subline: `${getAllProfileIds().length} profiles.` },
];

export default function Coffret() {
  const navigate = useNavigate();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const handleOpen = (packId: string) => {
    if (packId === 'romance_hotel') {
      navigate('/coffret/romance-hotel');
      return;
    }
    if (packId === 'weekend' || packId === 'complete') {
      setComingSoonOpen(true);
      return;
    }
  };

  return (
    <>
      <BackButton onBack={() => navigate('/')} label="Back" />
      <section
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '120px 40px 80px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          Coffrets
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: 60,
            lineHeight: 1.6,
          }}
        >
          Choose a world. Keep it.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'center',
          }}
        >
          {TIERS.map((t) => (
            <div
              key={t.packId}
              style={{
                maxWidth: 200,
                padding: '32px 24px',
                border: '0.5px solid rgba(14, 63, 47, 0.2)',
                background: 'transparent',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#0E3F2F',
                  marginBottom: 8,
                }}
              >
                {t.title}
              </h2>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 15,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.7,
                  marginBottom: 24,
                }}
              >
                {t.subline}
              </p>
              <button
                type="button"
                onClick={() => handleOpen(t.packId)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  background: '#0E3F2F',
                  color: '#FAF9F6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 400ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0E3F2F';
                }}
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </section>

      {comingSoonOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(14, 63, 47, 0.08)',
            padding: 24,
          }}
          onClick={() => setComingSoonOpen(false)}
        >
          <div
            style={{
              maxWidth: 400,
              padding: '40px 32px',
              border: '0.5px solid rgba(14, 63, 47, 0.2)',
              background: '#FAF9F6',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="coming-soon-title"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: '#0E3F2F',
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              Coming soon
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 15,
                fontWeight: 300,
                color: '#2B2B2B',
                opacity: 0.75,
                marginBottom: 28,
                lineHeight: 1.5,
              }}
            >
              This Coffret is in preparation.
            </p>
            <button
              type="button"
              onClick={() => setComingSoonOpen(false)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '12px 28px',
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
