/**
 * PAGE ÉDILE — ARCHÉ
 * Porte silencieuse
 */

import { BackButton } from '../components/BackButton';

interface EdileProps {
  onNavigate?: (page: 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle') => void;
}

export default function Edile({ onNavigate }: EdileProps) {
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
            color: '#0E3F2F',
            marginBottom: '80px',
            lineHeight: 1.2
          }}
        >
          L'Édile
        </h1>
      </section>

      {/* Texte */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 80px',
          padding: '0 40px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.85
          }}
        >
          L'Édile soutient la cité au-delà du Passeport.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.8
          }}
        >
          Dans la Rome antique, l'Édile veillait sur les lieux publics. Pas de pouvoir. Pas de titre. Une présence au service de la continuité.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.8
          }}
        >
          Ici, l'Édile permet la recherche, la documentation, la transmission. Il protège l'indépendance d'ARCHÉ.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '80px',
            opacity: 0.7,
            fontStyle: 'italic'
          }}
        >
          Ce rôle se construit par échange.
        </p>

        {/* Contact — pas de bouton */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '20px',
            fontWeight: 400,
            textAlign: 'center'
          }}
        >
          <a 
            href="mailto:contact@arche.city?subject=L'Édile"
            style={{
              color: '#0E3F2F',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
              transition: 'border-color 400ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.6)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)'}
          >
            contact@arche.city
          </a>
        </p>
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

      {/* FOOTER — simplifié */}
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
    </>
  );
}
