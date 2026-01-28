/**
 * ARCHÉ — Shell mounted at /arche
 * Existing ARCHÉ experience: state-based nav, Blason, BackButton, pages.
 */

import { useState } from 'react';
import Home from '../Home';
import Carte from '../Carte';
import Chemin from '../Chemin';
import Passeport from '../Passeport';
import Cle from '../Cle';
import Edile from '../Edile';
import Cercle from '../Cercle';
import { Blason } from '../../components/Blason';
import { BackButton } from '../../components/BackButton';

type Page = 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle';

export default function ArcheShell() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <>
      {currentPage === 'home' && (
        <Blason onClick={() => navigateTo('cercle')} />
      )}
      {currentPage !== 'home' && (
        <BackButton onBack={() => navigateTo('home')} />
      )}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '72px',
          background: 'rgba(250, 249, 246, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
          padding: '0 40px',
          zIndex: 1000,
          display: currentPage === 'cercle' ? 'none' : 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            type="button"
            onClick={() => navigateTo('home')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 400ms ease',
              padding: 0,
              height: '32px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.5'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <svg width="80" height="32" viewBox="0 0 527 598" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <g transform="translate(0,598) scale(0.1,-0.1)" fill="#0E3F2F">
                <path d="M71 5464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                <path d="M976 4991 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
                <path d="M1025 4981 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z" />
                <path d="M3455 4690 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z" />
                <path d="M2090 4490 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />
                <path d="M2130 4490 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />
                <path d="M2170 4490 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
                <path d="M2210 4491 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z" />
                <path d="M1710 4474 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z" />
                <path d="M1745 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z" />
                <path d="M1785 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z" />
                <path d="M1820 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
                <path d="M1860 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
                <path d="M1900 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
                <path d="M1940 4479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z" />
                <path d="M1975 4480 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" />
                <path d="M2015 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z" />
              </g>
            </svg>
          </button>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {(['carte', 'chemin', 'passeport', 'cle', 'edile'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => navigateTo(p)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === p ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = currentPage === p ? '1' : '0.4'; }}
              >
                {p === 'cle' ? 'Clé' : p === 'edile' ? 'Édile' : p === 'carte' ? 'Carte' : p === 'chemin' ? 'Chemin' : 'Passeport'}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div key={currentPage} className="page-wrapper">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'carte' && <Carte onNavigate={navigateTo} />}
        {currentPage === 'chemin' && <Chemin onNavigate={navigateTo} />}
        {currentPage === 'passeport' && <Passeport onNavigate={navigateTo} />}
        {currentPage === 'cle' && <Cle onNavigate={navigateTo} />}
        {currentPage === 'edile' && <Edile onNavigate={navigateTo} />}
        {currentPage === 'cercle' && <Cercle onNavigate={navigateTo} />}
      </div>
    </>
  );
}
