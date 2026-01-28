/**
 * Petit Souvenir — My Paris (/create)
 * Map + saved places, remove, optional note, Share → /share?ids=...
 */

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { getSouvenirPlaceById } from '../../data/souvenir-places';
import { loadMyParis, removePlace, saveNote } from '../../utils/souvenir-storage';
import { exportTrace } from '../../utils/souvenir-export';

export default function MyParis() {
  const navigate = useNavigate();
  const [data, setData] = useState(loadMyParis);
  const { savedIds, note } = data;
  const [localNote, setLocalNote] = useState(note ?? '');
  useEffect(() => setLocalNote(note ?? ''), [note]);
  const places = useMemo(
    () =>
      savedIds
        .map((id) => getSouvenirPlaceById(id))
        .filter((p): p is NonNullable<typeof p> => !!p) as MapSectionPlace[],
    [savedIds.join(',')]
  );
  const [selectedPlace, setSelectedPlace] = useState<MapSectionPlace | null>(null);

  const handleRemove = useCallback((place: MapSectionPlace) => {
    removePlace(place.id);
    setData(loadMyParis());
    setSelectedPlace(null);
  }, []);

  const handleNoteBlur = () => {
    if (localNote !== (note ?? '')) {
      saveNote(localNote);
      setData(loadMyParis());
    }
  };

  const handleShare = () => {
    saveNote(localNote);
    setData(loadMyParis());
    const url = `${window.location.origin}/share?ids=${savedIds.join(',')}`;
    void navigator.clipboard.writeText(url);
  };

  return (
    <>
      <BackButton onBack={() => navigate('/')} label="Back" />
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
          My Paris
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
          Saved on this device.
        </p>
      </section>
      <MapSection
        places={places}
        selectedPlace={selectedPlace}
        onSelectPlace={setSelectedPlace}
        onSavePlace={handleRemove}
        detailPanelMode="remove"
        showList
      />
      <section
        style={{
          maxWidth: 640,
          margin: '0 auto 60px',
          padding: '0 40px',
        }}
      >
        <label
          htmlFor="ps-note"
          style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#2B2B2B',
            opacity: 0.5,
            marginBottom: 8,
          }}
        >
          Optional note
        </label>
        <textarea
          id="ps-note"
          value={localNote}
          onChange={(e) => setLocalNote(e.target.value)}
          onBlur={handleNoteBlur}
          placeholder="A few words about your Paris…"
          rows={3}
          style={{
            width: '100%',
            padding: 16,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 16,
            fontWeight: 300,
            color: '#2B2B2B',
            background: 'transparent',
            border: '0.5px solid rgba(14, 63, 47, 0.2)',
            resize: 'vertical',
          }}
        />
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleShare}
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
          >
            Share My Paris
          </button>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 13,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2B2B2B',
              opacity: 0.5,
              marginTop: 12,
              lineHeight: 1.4,
            }}
          >
            Saved on this device.
          </p>
          <button
            type="button"
            onClick={exportTrace}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 9,
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: 0.4,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginTop: 16,
              textDecoration: 'underline',
              textDecorationThickness: '0.5px',
              textUnderlineOffset: '2px',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
          >
            Export trace
          </button>
        </div>
      </section>
    </>
  );
}
