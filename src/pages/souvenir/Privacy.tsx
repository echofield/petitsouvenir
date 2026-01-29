/**
 * Petit Souvenir — Privacy (/privacy)
 * Calm, short, non-legal.
 */

import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

const serif = 'Cormorant Garamond, Georgia, serif';
const muted = { color: '#2B2B2B', opacity: 0.85 };

export default function Privacy() {
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
            fontFamily: serif,
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 32,
            lineHeight: 1.3,
          }}
        >
          Privacy
        </h1>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
            fontFamily: serif,
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 2,
            ...muted,
          }}
        >
          <li>No account.</li>
          <li>No GPS.</li>
          <li>No third-party analytics.</li>
          <li>Your saved places and quest traces live on your device.</li>
          <li>When you choose &ldquo;Save a memory&rdquo;, we publish an unlisted snapshot — not your identity.</li>
        </ul>
        <p
          style={{
            fontFamily: serif,
            fontSize: 15,
            fontWeight: 300,
            fontStyle: 'italic',
            ...muted,
            marginTop: 40,
            lineHeight: 1.6,
          }}
        >
          Presence matters more than data.
        </p>
      </section>
    </>
  );
}
