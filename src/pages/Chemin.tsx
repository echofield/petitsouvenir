/**
 * PAGE CHEMIN — ARCHÉ
 * Le Chemin
 *
 * 4 moments : Observer → Traverser → Comprendre → Édifier
 */

import { BackButton } from '../components/BackButton';

interface CheminProps {
  onNavigate?: (page: 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle') => void;
}

export default function Chemin({ onNavigate }: CheminProps) {
  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      {/* Titre */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '140px 40px 80px',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#2D5A4A',
            marginBottom: '80px',
            lineHeight: 1.2
          }}
        >
          Le Chemin
        </h1>
      </section>

      {/* Four content blocks */}
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto 120px',
          padding: '60px 40px',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '15px',
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto',
            alignItems: 'center'
          }}
        >
          {/* Moment 1: Observer */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: '#2D5A4A',
                marginBottom: '8px',
                opacity: 0.7
              }}
            >
              Observer
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '15px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#2B2B2B',
                opacity: 0.5
              }}
            >
              La ville se laisse d'abord lire.
            </p>
          </div>

          {/* Moment 2: Traverser */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: '#2D5A4A',
                marginBottom: '8px',
                opacity: 0.8
              }}
            >
              Traverser
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '16px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#2B2B2B',
                opacity: 0.55
              }}
            >
              Le mouvement révèle ce qui était caché.
            </p>
          </div>

          {/* Moment 3: Comprendre */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: '#2D5A4A',
                marginBottom: '8px',
                opacity: 0.9
              }}
            >
              Comprendre
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#2B2B2B',
                opacity: 0.6
              }}
            >
              Les fragments deviennent forme.
            </p>
          </div>

          {/* Moment 4: Édifier */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: '#2D5A4A',
                marginBottom: '8px',
                opacity: 0.9
              }}
            >
              Édifier
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#2B2B2B',
                opacity: 0.6
              }}
            >
              La cité se construit avec ceux qui marchent.
            </p>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 100px'
        }}
      />

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 40px 120px',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: '#2D5A4A',
            marginBottom: '16px'
          }}
        >
          ARCHÉ
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.08em',
            opacity: 0.4,
            marginBottom: '60px'
          }}
        >
          Paris · République
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '15px',
            fontWeight: 300,
            fontStyle: 'italic',
            opacity: 0.35
          }}
        >
          En construction permanente
        </p>
      </footer>
    </>
  );
}
