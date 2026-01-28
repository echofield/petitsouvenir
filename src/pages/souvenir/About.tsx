/**
 * Petit Souvenir — About (/about)
 */

import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <BackButton onBack={() => navigate('/')} label="Back" />
      <section
        style={{
          maxWidth: 560,
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
            marginBottom: 32,
            lineHeight: 1.3,
          }}
        >
          About
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 300,
            color: '#2B2B2B',
            opacity: 0.85,
            lineHeight: 1.8,
          }}
        >
          Petit Souvenir offers curated moments on the Paris map. Choose a profile, discover places, and build your own collection. No account required.
        </p>
      </section>
    </>
  );
}
