/**
 * Petit Souvenir — Profile selection (/souvenir)
 */

import { Link, useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { SOUVENIR_PROFILES } from '../../data/souvenir-profiles';

export default function SouvenirProfiles() {
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
          Choose a profile
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'center',
          }}
        >
          {SOUVENIR_PROFILES.map((p) => (
            <Link
              key={p.id}
              to={`/souvenir/${p.id}`}
              style={{
                display: 'block',
                maxWidth: 200,
                padding: '32px 24px',
                border: '0.5px solid rgba(14, 63, 47, 0.2)',
                background: 'transparent',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 300ms ease, opacity 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.4)';
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.2)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 22,
                  fontWeight: 500,
                  color: '#0E3F2F',
                  marginBottom: 8,
                }}
              >
                {p.name}
              </h2>
              {p.intro && (
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 15,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#2B2B2B',
                    opacity: 0.75,
                    lineHeight: 1.5,
                  }}
                >
                  {p.intro}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
