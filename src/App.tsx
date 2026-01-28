/**
 * ARCHÉ + Petit Souvenir
 * Router: / → Petit Souvenir Home; /arche → ARCHÉ experience.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/souvenir/Header';
import { Footer } from './components/souvenir/Footer';
import SouvenirHome from './pages/souvenir/Home';
import SouvenirProfiles from './pages/souvenir/SouvenirProfiles';
import ProfileMapView from './pages/souvenir/ProfileMapView';
import BohemianProfileView from './pages/souvenir/BohemianProfileView';
import MyParis from './pages/souvenir/MyParis';
import SharePage from './pages/souvenir/SharePage';
import Gift from './pages/souvenir/Gift';
import About from './pages/souvenir/About';
import ArcheShell from './pages/arche/ArcheShell';

// Dev helper (only in development)
if (import.meta.env.DEV) {
  import('./utils/souvenir-resonance').then(({ loadResonance }) => {
    (window as any).SOUVENIR = {
      resonance: loadResonance,
      exportTrace: () => {
        import('./utils/souvenir-export').then(({ exportTrace }) => exportTrace());
      },
    };
  });
}

export default function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
          @media (max-width: 768px) {
            section { padding-left: 24px !important; padding-right: 24px !important; }
            nav { padding: 20px 24px !important; }
            nav > div { flex-direction: column !important; gap: 20px !important; }
            nav > div > div { gap: 24px !important; }
            button[style*="position: fixed"][style*="top: 24px"] { left: 24px !important; z-index: 10000 !important; }
            button[style*="position: fixed"][style*="top: 24px"] span:last-child { display: none !important; }
            .blason-container { z-index: 10000 !important; top: 16px !important; }
          }
          .page-wrapper { animation: pageFadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
          @keyframes pageFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>
      <div
        style={{
          minHeight: '100vh',
          background: '#FAF9F6',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")`,
          color: '#2B2B2B',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BrowserRouter>
          <Header />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<SouvenirHome />} />
              <Route path="/souvenir" element={<SouvenirProfiles />} />
              <Route path="/souvenir/bohemian" element={<BohemianProfileView />} />
              <Route path="/souvenir/:profile" element={<ProfileMapView />} />
              <Route path="/create" element={<MyParis />} />
              <Route path="/share" element={<SharePage />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/about" element={<About />} />
              {/* Preserve /arche — cultural core. Never remove. Not for users — for you. */}
              <Route path="/arche" element={<ArcheShell />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
