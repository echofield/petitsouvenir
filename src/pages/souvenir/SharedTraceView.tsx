/**
 * Petit Souvenir — Shared trace (/t/:shareCode)
 * Fetch by share code, render quest trace or map share. Quiet, factual, minimal. No social features.
 */

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { fetchSharedTrace, type FetchedShared, type SharedTracePayload, type SharedMapPayload } from '../../utils/shared-traces';
import { resolvePlaceForMap } from '../../utils/place-resolve';

const serif = 'Cormorant Garamond, Georgia, serif';
const sans = 'Inter, sans-serif';
const green = '#0E3F2F';
const muted = { color: '#2B2B2B', opacity: 0.7 };

export default function SharedTraceView() {
  const { shareCode } = useParams<{ shareCode: string }>();
  const [data, setData] = useState<FetchedShared | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!shareCode) {
      setLoading(false);
      setError(true);
      return;
    }
    let cancelled = false;
    fetchSharedTrace(shareCode)
      .then((r) => {
        if (!cancelled) {
          setData(r);
          setError(!r);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [shareCode]);

  if (loading) {
    return (
      <section style={{ maxWidth: 640, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: serif, fontSize: 17, fontWeight: 300, ...muted, lineHeight: 1.6 }}>
          Loading…
        </p>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section style={{ maxWidth: 640, margin: '0 auto', padding: '120px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: serif, fontSize: 24, fontWeight: 500, color: green, marginBottom: 16, lineHeight: 1.3 }}>
          Not found
        </h1>
        <p style={{ fontFamily: serif, fontSize: 17, fontWeight: 300, ...muted, marginBottom: 24, lineHeight: 1.6 }}>
          This trace is missing or the link is invalid.
        </p>
        <Link
          to="/"
          style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: green,
            textDecoration: 'none',
            borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
            paddingBottom: 4,
          }}
        >
          Petit Souvenir
        </Link>
      </section>
    );
  }

  if (data.type === 'quest_trace') {
    return <QuestTraceView payload={data.payload as SharedTracePayload} />;
  }

  return <MapShareView payload={data.payload as SharedMapPayload} />;
}

function QuestTraceView({ payload }: { payload: SharedTracePayload }) {
  const mapPlaces: MapSectionPlace[] = payload.places
    .filter((p): p is typeof p & { id: string } => p.id != null)
    .map((p) => resolvePlaceForMap(p.id))
    .filter((p): p is NonNullable<typeof p> => !!p) as MapSectionPlace[];

  const metrics = payload.metrics;
  const stepsLine = metrics != null ? `Steps: ${metrics.completedSteps}/${metrics.totalSteps}` : null;

  return (
    <>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '100px 40px 48px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, letterSpacing: '0.02em', color: green, marginBottom: 8, lineHeight: 1.3 }}>
          {payload.archetype.name} — {payload.quest.title}
        </h1>
        {payload.dateLabel != null && payload.dateLabel !== '' && (
          <p style={{ fontFamily: serif, fontSize: 15, fontWeight: 300, ...muted, marginBottom: 8, lineHeight: 1.5 }}>
            {payload.dateLabel}
          </p>
        )}
        {stepsLine != null && (
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', ...muted, lineHeight: 1.4 }}>
            {stepsLine}
          </p>
        )}
      </section>

      {mapPlaces.length > 0 && (
        <MapSection
          places={mapPlaces}
          selectedPlace={null}
          onSelectPlace={() => {}}
          detailPanelMode="none"
          showList={false}
        />
      )}

      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px 48px' }}>
        <h2 style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: green, opacity: 0.7, marginBottom: 16, lineHeight: 1.3 }}>
          Steps
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
          {payload.steps.map((s) => (
            <li
              key={s.idx}
              style={{
                fontFamily: serif,
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#2B2B2B',
                opacity: 0.9,
                marginBottom: 10,
                paddingLeft: 24,
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: green, opacity: 0.5, fontFamily: sans, fontSize: 12 }}>
                {s.done ? '✓' : '○'}
              </span>
              {s.type === 'slot' && <span style={{ fontStyle: 'italic', opacity: 0.8 }}>{s.label}</span>}
              {s.type !== 'slot' && s.label}
            </li>
          ))}
        </ul>

        {payload.places.length > 0 && (
          <>
            <h2 style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: green, opacity: 0.7, marginBottom: 16, lineHeight: 1.3 }}>
              Places
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
              {payload.places.map((p, i) => (
                <li key={i} style={{ marginBottom: 14 }}>
                  <span style={{ fontFamily: serif, fontSize: 17, fontWeight: 500, color: green }}>
                    {p.title}
                  </span>
                  {p.address != null && p.address !== '' && (
                    <p style={{ fontFamily: serif, fontSize: 14, fontWeight: 300, ...muted, margin: '4px 0 0', lineHeight: 1.4 }}>
                      {p.address}
                    </p>
                  )}
                  {p.maps != null && p.maps !== '' && (
                    <a
                      href={p.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: sans,
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: green,
                        opacity: 0.8,
                        textDecoration: 'none',
                        borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
                        display: 'inline-block',
                        marginTop: 4,
                      }}
                    >
                      Maps
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {payload.note != null && payload.note !== '' && (
          <p style={{ fontFamily: serif, fontSize: 15, fontWeight: 300, fontStyle: 'italic', ...muted, lineHeight: 1.6, marginBottom: 24 }}>
            {payload.note}
          </p>
        )}

        {payload.media != null && payload.media.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
            {payload.media.map((m) => (
              <a key={m.id} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img src={m.url} alt={m.caption ?? 'Trace photo'} style={{ width: '100%', height: 180, objectFit: 'cover', border: '0.5px solid rgba(14, 63, 47, 0.2)' }} />
                {m.caption != null && m.caption !== '' && (
                  <p style={{ fontFamily: serif, fontSize: 13, fontWeight: 300, ...muted, marginTop: 6, lineHeight: 1.3 }}>
                    {m.caption}
                  </p>
                )}
              </a>
            ))}
          </div>
        )}
      </section>

      <footer style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px 80px', textAlign: 'center', borderTop: '0.5px solid rgba(14, 63, 47, 0.12)' }}>
        <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', ...muted }}>
          Petit Souvenir — private trace
        </p>
        <Link
          to="/"
          style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: green,
            opacity: 0.8,
            textDecoration: 'none',
            borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
            display: 'inline-block',
            marginTop: 12,
          }}
        >
          Petit Souvenir
        </Link>
      </footer>
    </>
  );
}

function MapShareView({ payload }: { payload: SharedMapPayload }) {
  const mapPlaces: MapSectionPlace[] = payload.places
    .filter((p): p is typeof p & { id: string } => p.id != null)
    .map((p) => resolvePlaceForMap(p.id))
    .filter((p): p is NonNullable<typeof p> => !!p) as MapSectionPlace[];

  return (
    <>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '100px 40px 48px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, letterSpacing: '0.02em', color: green, marginBottom: 8, lineHeight: 1.3 }}>
          {payload.title}
        </h1>
        {payload.metrics != null && (
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', ...muted, lineHeight: 1.4 }}>
            {payload.metrics.savedCount} places
          </p>
        )}
      </section>

      {mapPlaces.length > 0 && (
        <MapSection
          places={mapPlaces}
          selectedPlace={null}
          onSelectPlace={() => {}}
          detailPanelMode="none"
          showList={false}
        />
      )}

      <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px 48px' }}>
        <h2 style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: green, opacity: 0.7, marginBottom: 16, lineHeight: 1.3 }}>
          Places
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32 }}>
          {payload.places.map((p, i) => (
            <li key={i} style={{ marginBottom: 14 }}>
              <span style={{ fontFamily: serif, fontSize: 17, fontWeight: 500, color: green }}>
                {p.title}
              </span>
              {p.address != null && p.address !== '' && (
                <p style={{ fontFamily: serif, fontSize: 14, fontWeight: 300, ...muted, margin: '4px 0 0', lineHeight: 1.4 }}>
                  {p.address}
                </p>
              )}
              {p.maps != null && p.maps !== '' && (
                <a
                  href={p.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: sans,
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: green,
                    opacity: 0.8,
                    textDecoration: 'none',
                    borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
                    display: 'inline-block',
                    marginTop: 4,
                  }}
                >
                  Maps
                </a>
              )}
            </li>
          ))}
        </ul>

        {payload.media != null && payload.media.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
            {payload.media.map((m) => (
              <a key={m.id} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <img src={m.url} alt={m.caption ?? 'Map photo'} style={{ width: '100%', height: 180, objectFit: 'cover', border: '0.5px solid rgba(14, 63, 47, 0.2)' }} />
                {m.caption != null && m.caption !== '' && (
                  <p style={{ fontFamily: serif, fontSize: 13, fontWeight: 300, ...muted, marginTop: 6, lineHeight: 1.3 }}>
                    {m.caption}
                  </p>
                )}
              </a>
            ))}
          </div>
        )}
      </section>

      <footer style={{ maxWidth: 720, margin: '0 auto', padding: '48px 40px 80px', textAlign: 'center', borderTop: '0.5px solid rgba(14, 63, 47, 0.12)' }}>
        <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', ...muted }}>
          Petit Souvenir — private trace
        </p>
        <Link
          to="/"
          style={{
            fontFamily: sans,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: green,
            opacity: 0.8,
            textDecoration: 'none',
            borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
            display: 'inline-block',
            marginTop: 12,
          }}
        >
          Petit Souvenir
        </Link>
      </footer>
    </>
  );
}
