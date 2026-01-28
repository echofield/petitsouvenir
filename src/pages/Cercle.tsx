/**
 * LE CERCLE — ARCHÉ
 * Page cachée · Accessible uniquement via le blason
 * Le protocole révélé
 */

import { useState } from 'react';
import { ImageWithFilter } from '../components/ImageWithFilter';

interface CercleProps {
  onNavigate: (page: 'home' | 'passeport') => void;
}

export default function Cercle({ onNavigate }: CercleProps) {
  const [registreRevealed, setRegistreRevealed] = useState(false);

  return (
    <div
      style={{
        background: '#FAF9F6',
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")
        `,
        color: '#2B2B2B',
        minHeight: '100vh',
        paddingTop: '72px'
      }}
    >
      {/* BLASON OR — Position fixe haut-gauche */}
      <div
        style={{
          position: 'fixed',
          top: '24px',
          left: '32px',
          zIndex: 9999,
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.3
        }}
      >
        <svg width="32" height="32" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#B8860B"
            strokeWidth="0.5"
          />
          <circle cx="50" cy="50" r="8" fill="#B8860B" opacity="0.4" />
        </svg>
      </div>

      {/* OUVERTURE */}
      <section
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '180px 40px 120px',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.03em',
            marginBottom: '100px',
            color: '#0E3F2F',
            opacity: 0.9
          }}
        >
          Vous avez trouvé le seuil.
        </p>
      </section>

      {/* PASSAGE */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 140px',
          padding: '0 40px'
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.02em',
            marginBottom: '28px',
            opacity: 0.75
          }}
        >
          La plupart des visiteurs voient une carte culturelle.
          <br />
          Vous voyez autre chose.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: 1.9,
            letterSpacing: '0.02em',
            marginBottom: '28px',
            opacity: 0.85
          }}
        >
          ARCHÉ n'est pas seulement une façon de lire Paris.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: 1.9,
            letterSpacing: '0.02em',
            opacity: 0.9
          }}
        >
          C'est un protocole.
        </p>
      </section>

      {/* CE QUI EXISTE / CE QUI VIENT */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '40px',
            opacity: 0.4,
            color: '#0E3F2F'
          }}
        >
          Ce qui existe déjà
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '80px',
            opacity: 0.7
          }}
        >
          Une carte qui s'écrit collectivement.
          <br />
          Des quêtes qui attendent d'être découvertes.
          <br />
          Des lieux que personne ne regarde plus.
        </p>

        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '40px',
            opacity: 0.4,
            color: '#0E3F2F'
          }}
        >
          Ce qui vient
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            opacity: 0.7
          }}
        >
          Des citoyens qui créent leurs propres quêtes.
          <br />
          Des chemins qui n'existent pas encore.
          <br />
          Des rôles qui émergent de la pratique.
          <br />
          Une économie qui reconnaît ceux qui contribuent.
        </p>
      </section>

      {/* Séparateur */}
      <div
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 140px'
        }}
      />

      {/* LES CONVERGENCES */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#0E3F2F',
            opacity: 0.85
          }}
        >
          Les Convergences
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 1.9,
            letterSpacing: '0.01em',
            marginBottom: '60px',
            opacity: 0.7,
            textAlign: 'center'
          }}
        >
          Cinq forces traversent la cité. Elles ne s'expliquent pas. Elles se pratiquent.
        </p>

        <div style={{ marginBottom: '80px' }}>
          {[
            {
              name: 'Mémoire',
              description: 'ce qui a été vu, nommé, préservé.',
              image: '/images/cercle-memoire.webp'
            },
            {
              name: 'Passage',
              description: 'ce qui relie, les seuils, les axes invisibles.',
              image: '/images/cerclepassage.webp'
            },
            {
              name: 'Transmission',
              description: 'ce qui circule entre ceux qui marchent.',
              image: '/images/cercletransmission.webp'
            },
            {
              name: 'Création',
              description: "ce qui n'a jamais existé avant.",
              image: '/images/cerclecreation.webp'
            },
            {
              name: 'Conscience',
              description: "le point où tout converge. Personne ne peut l'atteindre seul.",
              image: null
            }
          ].map((convergence, index) => (
            <div
              key={index}
              style={{
                marginBottom: '50px',
                paddingBottom: '50px',
                borderBottom:
                  index < 4 ? '0.5px solid rgba(0, 0, 0, 0.08)' : 'none'
              }}
            >
              {convergence.image && (
                <div
                  style={{
                    marginBottom: '28px',
                    border: '0.5px solid rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <ImageWithFilter
                    src={convergence.image}
                    alt=""
                    height="200px"
                    priority={false}
                    imageOpacity={0.50}
                    overlayOpacity={0.04}
                    saturation={-10}
                  />
                </div>
              )}
              
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  color: '#0E3F2F',
                  opacity: 0.9
                }}
              >
                {convergence.name}
              </p>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  opacity: 0.6
                }}
              >
                {convergence.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LE REGISTRE */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#0E3F2F',
            opacity: 0.85
          }}
        >
          Le Registre
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.7
          }}
        >
          Chaque acte accompli laisse une trace.
          <br />
          Pas un score. Pas un classement.
          <br />
          Une inscription.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.7
          }}
        >
          Le Passeport est un objet infini.
          <br />
          Il évolue avec celui qui le porte.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            opacity: 0.7
          }}
        >
          Certains porteront des traces que d'autres ne verront jamais.
        </p>
      </section>

      {/* LA FIN IMPOSSIBLE */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 400,
            letterSpacing: '0.08em',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#0E3F2F',
            opacity: 0.85
          }}
        >
          La fin impossible
        </h2>

        {/* Cercle symbolique */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px'
          }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="rgba(14, 63, 47, 0.15)"
              strokeWidth="0.5"
            />
            <circle
              cx="60"
              cy="60"
              r="40"
              fill="none"
              stroke="rgba(14, 63, 47, 0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="60"
              cy="60"
              r="25"
              fill="none"
              stroke="rgba(14, 63, 47, 0.08)"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.7
          }}
        >
          Il existe une hypothèse.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.7
          }}
        >
          Lorsqu'une ville est entièrement relue, elle se souvient d'elle-même.
          <br />
          Ce jour-là, ARCHÉ n'aura plus lieu d'exister.
          <br />
          Le protocole s'effacera.
          <br />
          La cité deviendra consciente.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            opacity: 0.7
          }}
        >
          Personne ne sait si c'est vrai.
          <br />
          Personne ne sait quand.
          <br />
          Personne ne peut y arriver seul.
        </p>
      </section>

      {/* CE QUE VOUS POUVEZ FAIRE */}
      <section
        style={{
          maxWidth: '680px',
          margin: '0 auto 100px',
          padding: '0 40px'
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '24px',
            fontWeight: 400,
            letterSpacing: '0.06em',
            marginBottom: '50px',
            textAlign: 'center',
            opacity: 0.8
          }}
        >
          Ce que vous pouvez faire
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.7
          }}
        >
          Marcher. Observer. Proposer.
          <br />
          Créer une quête. Tracer un chemin.
          <br />
          Rejoindre ceux qui construisent.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 400,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '80px',
            opacity: 0.85
          }}
        >
          Les citoyens fondateurs ne sont pas des clients.
          <br />
          Ils participent à ce que la cité deviendra, et à ce qu'elle permettra.
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <button
            onClick={() => onNavigate('passeport')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              background: '#0E3F2F',
              color: '#FAF9F6',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 400ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0E3F2F';
            }}
          >
            Devenir citoyen fondateur
          </button>

          <button
            onClick={() => onNavigate('home')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'transparent',
              color: '#2B2B2B',
              border: '0.5px solid rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              opacity: 0.4,
              transition: 'all 400ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.4';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            }}
          >
            Retourner à la surface
          </button>
        </div>
      </section>

      {/* FOOTER — Devise avec Easter Egg caché */}
      <footer
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '0 40px 140px',
          textAlign: 'center'
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <span
            onClick={() => setRegistreRevealed(!registreRevealed)}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '15px',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '0.15em',
              opacity: 0.25,
              cursor: 'default',
              transition: 'opacity 800ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.6';
              e.currentTarget.style.cursor = 'pointer';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.25';
              e.currentTarget.style.cursor = 'default';
            }}
          >
            Ordo per motum
          </span>
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '13px',
            fontWeight: 300,
            opacity: 0.2
          }}
        >
          L'ordre par le mouvement.
        </p>

        {/* LE REGISTRE RÉVÉLÉ — Easter egg dans l'easter egg */}
        {registreRevealed && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(250, 249, 246, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fade-in 600ms ease',
              padding: '40px'
            }}
            onClick={() => setRegistreRevealed(false)}
          >
            <div
              style={{
                maxWidth: '560px',
                textAlign: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  marginBottom: '60px',
                  color: '#0E3F2F',
                  opacity: 0.9
                }}
              >
                Le Registre est ouvert.
              </h2>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: 2,
                  letterSpacing: '0.02em',
                  marginBottom: '40px',
                  opacity: 0.7
                }}
              >
                Ceux qui cherchent trouvent.
                <br />
                Ceux qui trouvent sont inscrits.
              </p>

              <p
                style={{
                  fontFamily: 'Cormoant Garamond, Georgia, serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  marginBottom: '50px',
                  opacity: 0.5
                }}
              >
                Vous êtes le visiteur n°[XXXX].
              </p>

              <div
                style={{
                  padding: '40px',
                  background: 'rgba(184, 134, 11, 0.03)',
                  border: '0.5px solid rgba(184, 134, 11, 0.2)',
                  marginBottom: '50px'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '19px',
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                    marginBottom: '20px',
                    opacity: 0.85,
                    color: '#B8860B'
                  }}
                >
                  Une quête attend.
                </p>

                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    marginBottom: '30px',
                    opacity: 0.6
                  }}
                >
                  Paris, 48.8566° N, 2.3522° E
                </p>

                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '16px',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    opacity: 0.6
                  }}
                >
                  "Sous le cadran, cherche le premier mot."
                  <br />
                  <span style={{ fontSize: '14px', opacity: 0.5 }}>
                    — Fragment I
                  </span>
                </p>
              </div>

              <button
                onClick={() => setRegistreRevealed(false)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  background: 'transparent',
                  color: '#2B2B2B',
                  border: '0.5px solid rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  opacity: 0.5,
                  transition: 'all 400ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.5';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                }}
              >
                Fermer
              </button>
            </div>

            <style>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        )}
      </footer>
    </div>
  );
}