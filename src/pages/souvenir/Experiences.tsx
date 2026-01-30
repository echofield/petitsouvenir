/**
 * Petit Souvenir — Experiences hub (/experiences)
 * Entry to By Profile and By Coffret.
 */

import { Link, useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

const CARDS = [
  {
    title: 'By Profile',
    href: '/souvenir',
    description: 'Choose a persona and discover places that fit.',
  },
  {
    title: 'By Coffret',
    href: '/coffret',
    description: 'Curated sets and gift editions.',
  },
];

export default function Experiences() {
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
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          Experiences
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
          Two ways in.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'center',
          }}
        >
          {CARDS.map(({ title, href, description }) => (
            <Link
              key={href}
              to={href}
              style={{
                display: 'block',
                maxWidth: 280,
                padding: '32px 24px',
                border: '0.5px solid rgba(14, 63, 47, 0.2)',
                background: 'transparent',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 300ms ease, opacity 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.35)';
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
                  marginBottom: 12,
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 15,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.8,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
