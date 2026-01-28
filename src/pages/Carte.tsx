/**
 * PAGE CARTE — ARCHÉ
 * La Carte de Paris
 * 
 * Une constellation, pas une task list
 * Une carte qui ne se dévoile qu'en marchant
 */

import { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { CarteInteractive } from '../components/CarteInteractive';

interface Lieu {
  id: string;
  nom: string;
  texte: string;
  complement: string;
  x: number;
  y: number;
}

const lieux: Lieu[] = [
  {
    id: '1',
    nom: 'Le Seuil',
    texte: 'Ici, on entre sans s’en rendre compte.',
    complement: 'Un passage ancien.\nUne promenade sans début.',
    x: 375,
    y: 300
  },
  {
    id: '4',
    nom: 'La Mémoire',
    texte: 'La ville se souvient mieux que nous.',
    complement: 'Paris qui archive.\nParis qui conserve.',
    x: 415,
    y: 315
  },
  {
    id: '5',
    nom: 'Le Savoir',
    texte: 'Le savoir n’élève pas la voix.',
    complement: 'Ici, on étudie en silence.\nLa ville pense.',
    x: 375,
    y: 340
  },
  {
    id: '6',
    nom: 'L’Axe Invisible',
    texte: 'Certains lieux mesurent plus que le temps.',
    complement: 'Ici, la ville ne se regarde pas.\nElle s’oriente.',
    x: 335,
    y: 325
  },
  {
    id: '9',
    nom: 'Le Passage',
    texte: 'La ville parle surtout dans les rues ordinaires.',
    complement: 'Commerce ancien.\nBâtiments parlants.',
    x: 397,
    y: 257
  },
  {
    id: '10',
    nom: 'La Fracture',
    texte: 'L’eau garde ce que la pierre oublie.',
    complement: 'Pause entre deux flux.\nLa ville respire.',
    x: 435,
    y: 257
  },
  {
    id: '18',
    nom: 'La Hauteur',
    texte: 'Monter n’est pas toujours s’élever.',
    complement: 'Vue d’en haut sans domination.\nPoésie populaire.',
    x: 360,
    y: 215
  }
];

interface CarteProps {
  onNavigate?: (page: 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle') => void;
}

export default function Carte({ onNavigate }: CarteProps) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [hoveredLieu, setHoveredLieu] = useState<Lieu | null>(null);
  const [selectedLieu, setSelectedLieu] = useState<Lieu | null>(null);

  const handleDistrictMouseEnter = (district: string) => {
    setHoveredDistrict(district);
  };

  const handleDistrictMouseLeave = () => {
    setHoveredDistrict(null);
  };

  const handleDistrictClick = (district: string) => {
    if (selectedDistrict === district) {
      setSelectedDistrict(null);
    } else {
      setSelectedDistrict(district);
    }
  };

  const handleLieuMouseEnter = (lieu: Lieu) => {
    setHoveredLieu(lieu);
  };

  const handleLieuMouseLeave = () => {
    setHoveredLieu(null);
  };

  const handleLieuClick = (lieu: Lieu, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLieu?.id === lieu.id) {
      setSelectedLieu(null);
    } else {
      setSelectedLieu(lieu);
    }
  };

  const displayedInfo = hoveredLieu?.texte || (selectedDistrict || hoveredDistrict);

  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}
      {/* Titre */}
      <section 
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '100px 40px 20px',
          textAlign: 'center'
        }}
      >
        <h1 
          className="carte-title-fade"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '48px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: '12px',
            lineHeight: 1.2
          }}
        >
          La Carte de Paris
        </h1>

        {/* Subtitle — une carte qui ne se dévoile qu'en marchant */}
        <p 
          className="carte-subtitle-fade"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: '80px',
            lineHeight: 1.8
          }}
        >
          Sept lieux pour marcher la ville comme elle respire.
        </p>
      </section>

      {/* Info hover — arrondissement ou lieu */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '16px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: displayedInfo ? 0.65 : 0,
            height: '26px',
            transition: 'opacity 300ms ease'
          }}
        >
          {displayedInfo || '\u00A0'}
        </p>
      </div>

      {/* VISUEL DE CARTE — géométrie de Paris + lieux symboliques */}
      <section
        className="carte-section-fade"
        style={{
          maxWidth: selectedLieu ? '1260px' : '1080px',
          margin: '-100px auto 100px',
          padding: '0 40px',
          display: 'flex',
          gap: '100px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          transition: 'all 500ms ease'
        }}
      >
        {/* Carte SVG Interactive */}
        <div
          style={{
            flex: selectedLieu ? '0 0 65%' : 'none',
            background: 'transparent',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 500ms ease',
            width: selectedLieu ? 'auto' : '100%',
            position: 'relative',
            maxWidth: '100%'
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
            <CarteInteractive />
            
            {/* 7 lieux symboliques — overlay sur la carte */}
            <svg
              viewBox="0 0 2037.566 1615.5"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <style>
                {`
                  .lieu-circle {
                    fill: rgba(14, 63, 47, 0.08);
                    stroke: #0E3F2F;
                    stroke-width: 0.8;
                    opacity: 0;
                    cursor: pointer;
                    pointer-events: all;
                    transition: all 400ms ease;
                    animation: fadeInLieu 800ms ease forwards;
                    animation-delay: 4s;
                  }
                  .lieu-circle:hover {
                    opacity: 1 !important;
                    fill: rgba(14, 63, 47, 0.15);
                    stroke-width: 1.2;
                  }
                  .lieu-circle.selected {
                    opacity: 1 !important;
                    fill: rgba(14, 63, 47, 0.2);
                    stroke-width: 1.5;
                  }
                  @keyframes fadeInLieu {
                    from { opacity: 0; }
                    to { opacity: 0.5; }
                  }
                `}
              </style>
              {lieux.map(lieu => {
                // Convertir les coordonnées du viewBox 800x600 vers 2037.566x1615.5
                const scaleX = 2037.566 / 800;
                const scaleY = 1615.5 / 600;
                return (
                  <circle
                    key={lieu.id}
                    className={`lieu-circle ${selectedLieu?.id === lieu.id ? 'selected' : ''}`}
                    cx={lieu.x * scaleX}
                    cy={lieu.y * scaleY}
                    r="8"
                    onMouseEnter={() => handleLieuMouseEnter(lieu)}
                    onMouseLeave={handleLieuMouseLeave}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLieuClick(lieu, e);
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Panneau latéral — apparaît au clic sur un lieu */}
        {selectedLieu && (
          <div
            style={{
              flex: '0 0 38%',
              background: 'transparent',
              borderLeft: '0.5px solid rgba(14, 63, 47, 0.2)',
              padding: '60px 50px',
              position: 'relative',
              animation: 'slideIn 500ms ease',
              minHeight: '500px'
            }}
          >
            <button
              onClick={() => setSelectedLieu(null)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: '#2B2B2B',
                opacity: 0.3,
                transition: 'opacity 300ms ease',
                fontWeight: 300
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
            >
              ×
            </button>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '36px',
                fontWeight: 500,
                color: '#0E3F2F',
                marginBottom: '32px',
                lineHeight: 1.3,
                letterSpacing: '0.01em'
              }}
            >
              {selectedLieu.nom}
            </h3>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '20px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.8,
                color: '#2B2B2B',
                opacity: 0.8,
                marginBottom: '40px'
              }}
            >
              {selectedLieu.texte}
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#2B2B2B',
                opacity: 0.6,
                lineHeight: 1.9,
                whiteSpace: 'pre-line'
              }}
            >
              {selectedLieu.complement}
            </p>
          </div>
        )}
      </section>

      {/* Légende discrète */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto 60px',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '0.8px solid #0E3F2F',
              background: 'rgba(14, 63, 47, 0.08)'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            À découvrir
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '0.8px solid #0E3F2F',
              background: 'linear-gradient(90deg, #0E3F2F 50%, rgba(14, 63, 47, 0.08) 50%)'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            En marche
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#0E3F2F'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            Intégré
          </span>
        </div>
      </section>

      {/* Phrase finale */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.9,
            color: '#2B2B2B',
            opacity: 0.6
          }}
        >
          La carte n’indique pas où aller.<br />
          Elle indique où écouter.
        </p>
      </section>

      {/* Animations pour le panneau latéral et l'entrée de page */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          /* Animation d'entrée fluide — titre */
          .carte-title-fade {
            animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            opacity: 0;
          }
          
          /* Animation d'entrée fluide — sous-titre */
          .carte-subtitle-fade {
            animation: fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
            opacity: 0;
          }
          
          /* Animation d'entrée fluide — carte */
          .carte-section-fade {
            animation: fadeInMap 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
            opacity: 0;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInMap {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>

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