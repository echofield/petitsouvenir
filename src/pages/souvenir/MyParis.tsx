/**
 * Petit Souvenir — My Paris (/create)
 * Map + saved places, remove, optional note, Share → /share?ids=..., Publish My Map → /t/:code.
 */

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { resolvePlaceForMap } from '../../utils/place-resolve';
import { loadMyParis, removePlace, saveNote } from '../../utils/souvenir-storage';
import { exportTrace } from '../../utils/souvenir-export';
import { publishMapShare } from '../../utils/shared-traces';

export default function MyParis() {
  const navigate = useNavigate();
  const [data, setData] = useState(loadMyParis);
  const { savedIds, note } = data;
  const [localNote, setLocalNote] = useState(note ?? '');
  useEffect(() => setLocalNote(note ?? ''), [note]);
  const places = useMemo(
    () =>
      savedIds
        .map((id) => resolvePlaceForMap(id))
        .filter((p): p is NonNullable<typeof p> => !!p) as MapSectionPlace[],
    [savedIds.join(',')]
  );
  const [selectedPlace, setSelectedPlace] = useState<MapSectionPlace | null>(null);
  const [publishStatus, setPublishStatus] = useState<'idle' | 'publishing' | 'copied' | 'error'>('idle');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'error'>('idle');

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

  const handleShare = async () => {
    saveNote(localNote);
    setData(loadMyParis());
    setShareStatus('idle');
    const url = `${window.location.origin}/share?ids=${savedIds.join(',')}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2500);
    } catch {
      setShareStatus('error');
      setTimeout(() => setShareStatus('idle'), 2500);
    }
  };

  const handlePublishMap = async () => {
    saveNote(localNote);
    setData(loadMyParis());
    setPublishStatus('publishing');
    try {
      const { url } = await publishMapShare(savedIds, { title: 'My Paris' });
      await navigator.clipboard.writeText(url);
      setPublishStatus('copied');
      setTimeout(() => setPublishStatus('idle'), 2500);
    } catch {
      setPublishStatus('error');
      setTimeout(() => setPublishStatus('idle'), 2500);
    }
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
        <div style={{ marginTop: 24, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => handleShare()}
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
                minHeight: 44,
              }}
            >
              Share My Paris
            </button>
            {shareStatus === 'copied' && (
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 14, fontWeight: 300, color: '#0E3F2F', opacity: 0.8 }}>
                Link copied.
              </span>
            )}
            {shareStatus === 'error' && (
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8b3a3a', opacity: 0.9 }}>
                Could not copy.
              </span>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <button
                type="button"
                onClick={handlePublishMap}
                disabled={publishStatus === 'publishing' || savedIds.length === 0}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: '#0E3F2F',
                  border: '0.5px solid rgba(14, 63, 47, 0.25)',
                  cursor: publishStatus === 'publishing' || savedIds.length === 0 ? 'not-allowed' : 'pointer',
                  opacity: publishStatus === 'publishing' || savedIds.length === 0 ? 0.6 : 1,
                  transition: 'all 400ms ease',
                  minHeight: 44,
                }}
              >
                {publishStatus === 'publishing' ? 'Saving…' : 'Save a memory'}
              </button>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 12,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.5,
                  lineHeight: 1.3,
                }}
              >
                Creates an unlisted link you control.
              </span>
            </div>
            {publishStatus === 'copied' && (
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 14, fontWeight: 300, color: '#0E3F2F', opacity: 0.8 }}>
                Link copied.
              </span>
            )}
            {publishStatus === 'error' && (
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8b3a3a', opacity: 0.9 }}>
                Could not save.
              </span>
            )}
          </div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 13,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2B2B2B',
              opacity: 0.5,
              margin: 0,
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
