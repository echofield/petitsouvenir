/**
 * Petit Souvenir — Home (/)
 * Map only, title, subtitle, three entry actions.
 */

import { Link } from 'react-router-dom';
import { MapSection } from '../../components/souvenir/MapSection';

export default function SouvenirHome() {
  return (
    <>
      <section
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '100px 40px 20px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          Paris Map
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 18,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: 80,
            lineHeight: 1.8,
          }}
        >
          Curated moments. Create your own Paris.
        </p>
      </section>

      <MapSection
        places={[]}
        selectedPlace={null}
        onSelectPlace={() => {}}
        detailPanelMode="none"
      />

      <section
        style={{
          maxWidth: 560,
          margin: '0 auto 120px',
          padding: '0 40px',
          textAlign: 'center',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <Link
            to="/souvenir"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0E3F2F',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.25)',
              paddingBottom: 4,
              opacity: 0.8,
              transition: 'opacity 300ms ease',
            }}
          >
            Find a Petit Souvenir
          </Link>
          <Link
            to="/create"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0E3F2F',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.25)',
              paddingBottom: 4,
              opacity: 0.8,
              transition: 'opacity 300ms ease',
            }}
          >
            Create Your Paris
          </Link>
          <Link
            to="/gift"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0E3F2F',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.25)',
              paddingBottom: 4,
              opacity: 0.8,
              transition: 'opacity 300ms ease',
            }}
          >
            Gift
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              textDecoration: 'none',
              opacity: 0.5,
              transition: 'opacity 300ms ease',
            }}
          >
            About
          </Link>
        </nav>
      </section>
    </>
  );
}
