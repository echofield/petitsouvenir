/**
 * Petit Souvenir — Share (/share?ids=...)
 * Read-only map + list + CTA. "Saved on this device."
 */

import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { resolvePlaceForMap } from '../../utils/place-resolve';

export default function SharePage() {
  const [searchParams] = useSearchParams();
  const idsParam = searchParams.get('ids') ?? '';
  const ids = useMemo(() => idsParam.split(',').map((s) => s.trim()).filter(Boolean), [idsParam]);
  const places = useMemo(
    () =>
      ids
        .map((id) => resolvePlaceForMap(id))
        .filter((p): p is NonNullable<typeof p> => !!p) as MapSectionPlace[],
    [ids.join(',')]
  );

  return (
    <>
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '100px 40px 24px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          Shared Paris
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 15,
            fontWeight: 300,
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          Saved places are stored on this device.
        </p>
      </section>
      {places.length > 0 ? (
        <MapSection
          mapVariant="static"
          places={places}
          selectedPlace={null}
          onSelectPlace={() => {}}
          detailPanelMode="none"
          showList
        />
      ) : (
        <section style={{ maxWidth: 480, margin: '0 auto 80px', padding: '0 40px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 17,
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.75,
              lineHeight: 1.7,
            }}
          >
            No places in this share link.
          </p>
        </section>
      )}
      <section style={{ maxWidth: 480, margin: '0 auto 120px', padding: '0 40px', textAlign: 'center' }}>
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
          }}
        >
          Find a Petit Souvenir
        </Link>
      </section>
    </>
  );
}
