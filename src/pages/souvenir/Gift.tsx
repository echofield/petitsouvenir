/**
 * Petit Souvenir — Gift (/gift)
 * Three tiers, coming soon.
 */

import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

const TIERS = [
  { name: 'Weekend Collection', price: 29 },
  { name: 'Deep Paris', price: 79 },
  { name: 'Complete Paris', price: 199 },
];

export default function Gift() {
  const navigate = useNavigate();

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
            marginBottom: 60,
            lineHeight: 1.3,
          }}
        >
          Gift
        </h1>
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
              key={t.name}
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
                {t.name}
              </h2>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#2B2B2B',
                  opacity: 0.8,
                }}
              >
                €{t.price}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 15,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.6,
            marginTop: 48,
          }}
        >
          Coming soon.
        </p>
      </section>
    </>
  );
}
