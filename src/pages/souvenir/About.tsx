/**
 * Petit Souvenir — Manifesto (/about)
 */

import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

const MANIFESTO_PARAGRAPHS = [
  'Most city experiences have become consumption.\nA route. A proof. A photo.',
  'Petit Souvenir is built for something quieter.\nNot more places — better presence.',
  'Each journey is a private doorway:\na secret level only you can unlock.',
  "Paris has a thousand faces.\nWe don't rank them. We don't recommend them to everyone.\nWe help you find the one that answers you.",
  'No algorithms. No ratings. No feed.\nJust curated moments — and the freedom to make them yours.',
  'A city becomes personal when it starts speaking back.',
];

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
          Manifesto
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {MANIFESTO_PARAGRAPHS.map((block, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 17,
                fontWeight: 300,
                color: '#2B2B2B',
                opacity: 0.85,
                lineHeight: 1.7,
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {block}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
