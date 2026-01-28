/**
 * IMPORTANT:
 * CarteInteractive must NEVER be modified.
 * All overlays and interactions live here.
 * If something seems missing, extend MapSection — do not touch the map.
 */

import { CarteInteractive } from '../CarteInteractive';
import { normToMap } from '../../utils/mapScale';

export interface MapSectionPlace {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
}

export type DetailPanelMode = 'save' | 'remove' | 'none';

export interface MapSectionProps {
  places: MapSectionPlace[];
  selectedPlace: MapSectionPlace | null;
  onSelectPlace: (place: MapSectionPlace | null) => void;
  onSavePlace?: (place: MapSectionPlace) => void;
  detailPanelMode?: DetailPanelMode;
  showList?: boolean;
}

export function MapSection({
  places,
  selectedPlace,
  onSelectPlace,
  onSavePlace,
  detailPanelMode = 'none',
  showList = false,
}: MapSectionProps) {
  const showPanel = selectedPlace && detailPanelMode !== 'none';
  const showOverlay = places.length > 0;
  const listAside = showList && places.length > 0 && !showPanel;

  return (
    <section
      style={{
        maxWidth: showPanel ? 1260 : 1080,
        margin: '-100px auto 100px',
        padding: '0 40px',
        display: 'flex',
        flexDirection: listAside ? 'row' : undefined,
        flexWrap: listAside ? 'nowrap' : undefined,
        gap: 100,
        alignItems: 'flex-start',
        justifyContent: 'center',
        transition: 'all 500ms ease',
      }}
    >
      <div
        style={{
          flex: showPanel ? '0 0 65%' : listAside ? '1 1 auto' : 'none',
          background: 'transparent',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          transition: 'all 500ms ease',
          width: showPanel ? 'auto' : '100%',
          minWidth: 0,
          position: 'relative',
          maxWidth: '100%',
        }}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
          <CarteInteractive />
          {showOverlay && (
            <svg
              viewBox="0 0 2037.566 1615.5"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              <style>
                {`
                  .ps-pin {
                    fill: rgba(14, 63, 47, 0.08);
                    stroke: #0E3F2F;
                    stroke-width: 0.8;
                    opacity: 0.5;
                    cursor: pointer;
                    pointer-events: all;
                    transition: all 400ms ease;
                  }
                  .ps-pin:hover {
                    opacity: 1;
                    fill: rgba(14, 63, 47, 0.15);
                    stroke-width: 1.2;
                  }
                  .ps-pin.selected {
                    opacity: 1;
                    fill: rgba(14, 63, 47, 0.2);
                    stroke-width: 1.5;
                  }
                `}
              </style>
              {places.map((p) => {
                const { x, y } = normToMap(p.x, p.y);
                return (
                  <circle
                    key={p.id}
                    className={`ps-pin ${selectedPlace?.id === p.id ? 'selected' : ''}`}
                    cx={x}
                    cy={y}
                    r={8}
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlace(selectedPlace?.id === p.id ? null : p);
                    }}
                  />
                );
              })}
            </svg>
          )}
        </div>
      </div>

      {showList && places.length > 0 && (
        <div
          style={{
            flex: showPanel ? '0 0 0' : '0 0 28%',
            minWidth: showPanel ? 0 : 180,
            maxWidth: showPanel ? 0 : 240,
            overflow: 'hidden',
            borderLeft: showPanel ? 'none' : '0.5px solid rgba(14, 63, 47, 0.2)',
            paddingLeft: showPanel ? 0 : 24,
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {places.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => onSelectPlace(selectedPlace?.id === p.id ? null : p)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 15,
                    fontWeight: 300,
                    color: selectedPlace?.id === p.id ? '#0E3F2F' : '#2B2B2B',
                    opacity: selectedPlace?.id === p.id ? 1 : 0.7,
                    padding: '6px 0',
                    textAlign: 'left',
                    textDecoration: selectedPlace?.id === p.id ? 'underline' : 'none',
                    transition: 'opacity 300ms ease',
                  }}
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showPanel && selectedPlace && (
        <div
          style={{
            flex: '0 0 38%',
            background: 'transparent',
            borderLeft: '0.5px solid rgba(14, 63, 47, 0.2)',
            padding: '60px 50px',
            position: 'relative',
            animation: 'psSlideIn 500ms ease',
            minHeight: 320,
          }}
        >
          <style>
            {`
              @keyframes psSlideIn {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
              }
            `}
          </style>
          <button
            type="button"
            onClick={() => onSelectPlace(null)}
            style={{
              position: 'absolute',
              top: 30,
              right: 30,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 24,
              color: '#2B2B2B',
              opacity: 0.3,
              transition: 'opacity 300ms ease',
              fontWeight: 300,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.3'; }}
          >
            ×
          </button>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 28,
              fontWeight: 500,
              color: '#0E3F2F',
              marginBottom: 20,
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}
          >
            {selectedPlace.name}
          </h3>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 17,
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.8,
              marginBottom: 28,
            }}
          >
            {selectedPlace.description}
          </p>
          {detailPanelMode === 'save' && onSavePlace && (
            <button
              type="button"
              onClick={() => onSavePlace(selectedPlace)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                background: '#0E3F2F',
                color: '#FAF9F6',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 400ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0E3F2F'; }}
            >
              Save to My Paris
            </button>
          )}
          {detailPanelMode === 'remove' && onSavePlace && (
            <button
              type="button"
              onClick={() => onSavePlace(selectedPlace)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
                transition: 'all 400ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)';
              }}
            >
              Remove from My Paris
            </button>
          )}
        </div>
      )}
    </section>
  );
}
