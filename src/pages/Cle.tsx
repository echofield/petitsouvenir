/**
 * PAGE LA CLÉ — ARCHÉ
 * Offer page for digital + physical card access
 */

import { BackButton } from '../components/BackButton';
import { ImageWithFilter } from '../components/ImageWithFilter';

interface CleProps {
  onNavigate?: (page: 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle') => void;
}

export default function Cle({ onNavigate }: CleProps) {

  return (
    <>
      {/* Bouton retour */}
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      {/* Bienvenue */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '19px',
          fontWeight: 300,
          fontStyle: 'italic',
          textAlign: 'center',
          opacity: 0.7,
          padding: '120px 40px 0',
          margin: 0
        }}
      >
        Bienvenue.
      </p>

      {/* Main content — two column on desktop */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '140px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}
      >
        {/* Left column — image */}
        <div
          style={{
            aspectRatio: '1 / 1',
            border: '0.5px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          <ImageWithFilter
            src="/images/cle.png"
            alt=""
            height="100%"
            priority={true}
            imageOpacity={0.50}
            overlayOpacity={0.04}
            saturation={-8}
          />
        </div>

        {/* Right column — text + CTA */}
        <div>
          {/* Title */}
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '42px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0E3F2F',
              marginBottom: '48px',
              lineHeight: 1.2
            }}
          >
            La Clé
          </h1>

          {/* Invocation line */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.7,
              opacity: 0.7,
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            Ce qui permet d'entrer, sans expliquer ce qui attend.
          </p>

          {/* Body paragraphs */}
          <div style={{ marginBottom: '60px' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: '28px',
                opacity: 0.85
              }}
            >
              La Clé est une entrée.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: '28px',
                opacity: 0.85
              }}
            >
              Elle existe pour ceux qui veulent marcher sans demander la permission.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: '28px',
                opacity: 0.85
              }}
            >
              Dans ARCHÉ, la Clé n'ouvre pas une porte.<br />
              Elle reconnaît une présence.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.8,
                opacity: 0.85
              }}
            >
              Elle relie une carte physique à une trace vivante, dans la cité.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.8,
                marginTop: '40px',
                opacity: 0.7
              }}
            >
              ARCHÉ évolue. La Clé donne accès à une cité vivante, appelée à se transformer au fil du temps.
            </p>
          </div>

          {/* CTA block — the threshold */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <a
              href="https://buy.stripe.com/00wdRa4j7aEOftf4lR5J604"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '18px 48px',
                background: '#0E3F2F',
                color: '#FAF9F6',
                textDecoration: 'none',
                transition: 'opacity 400ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Obtenir la Clé — 45 €
            </a>

            {/* Whisper text */}
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '14px',
                fontWeight: 300,
                fontStyle: 'italic',
                opacity: 0.6,
                marginTop: '20px'
              }}
            >
              Accès numérique immédiat.
            </p>
          </div>

          {/* Après l'entrée — what unfolds after crossing */}
          <div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '24px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#0E3F2F',
                marginBottom: '32px',
                opacity: 0.9
              }}
            >
              Après l'entrée
            </h2>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.9,
                marginBottom: '24px',
                opacity: 0.8
              }}
            >
              Avec La Clé, vous entrez dans ARCHÉ comme flâneur.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.9,
                marginBottom: '24px',
                opacity: 0.8
              }}
            >
              Vous accédez aux cartes vivantes de la cité,<br />
              aux quêtes urbaines,<br />
              aux lectures secrètes de Paris.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.9,
                marginBottom: '24px',
                opacity: 0.8
              }}
            >
              Un carnet numérique personnel accompagne le parcours.<br />
              Il recueille les passages, les lieux, les échos rencontrés.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.9,
                opacity: 0.8
              }}
            >
              ARCHÉ se découvre en mouvement.<br />
              Pas à pas.
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
            color: '#0E3F2F',
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

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            section[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
              padding-top: 120px !important;
            }
          }
        `}
      </style>
    </>
  );
}
