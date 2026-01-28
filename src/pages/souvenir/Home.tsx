/**
 * Petit Souvenir — Home (/)
 * Entry page: threshold structure with brand gravity.
 */

import { Link } from 'react-router-dom';
import { MapSection } from '../../components/souvenir/MapSection';

export default function SouvenirHome() {
  return (
    <>
      {/* Title and Subtitle */}
      <section
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '80px 40px 40px',
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
            marginBottom: 48,
            lineHeight: 1.8,
          }}
        >
          Curated moments. Create your own Paris.
        </p>

        {/* Primary Entry Button */}
        <Link
          to="/souvenir"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0E3F2F',
            textDecoration: 'none',
            border: '0.5px solid rgba(14, 63, 47, 0.25)',
            padding: '14px 32px',
            display: 'inline-block',
            transition: 'all 300ms ease',
            opacity: 0.9,
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)';
          }}
        >
          Choose a profile
        </Link>
      </section>

      {/* Map (centered, breathing space) */}
      <section style={{ padding: '60px 0' }}>
        <MapSection
          places={[]}
          selectedPlace={null}
          onSelectPlace={() => {}}
          detailPanelMode="none"
        />
      </section>
    </>
  );
}
