/**
 * Petit Souvenir — Profile map (/souvenir/:profile)
 * Map + overlay filtered by profile, list, detail panel with micro-quest/proof.
 */

import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { PlaceDetailSheet } from '../../components/souvenir/PlaceDetailSheet';
import { getProfileById, getPlacesByProfile, SouvenirPlace } from '../../data/petit-souvenir-types';
import { addPlace } from '../../utils/souvenir-storage';
import { isProfileUnlocked, STRIPE_PAYMENT_LINK, unlockProfile } from '../../utils/souvenir-lock';
import { hasProof } from '../../utils/souvenir-proof';

export default function ProfileMapView() {
  const { profile: profileId } = useParams<{ profile: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const profile = profileId ? getProfileById(profileId) : null;
  const unlocked = profileId ? isProfileUnlocked(profileId as 'bohemian' | 'family' | 'night') : false;
  const places = useMemo(
    () => (profileId ? getPlacesByProfile(profileId as 'bohemian' | 'family' | 'night') : []),
    [profileId]
  );
  const [selectedPlace, setSelectedPlace] = useState<SouvenirPlace | null>(null);

  // Handle unlock query param (for testing / Stripe redirect)
  useEffect(() => {
    if (profileId && searchParams.get('unlock') === 'true') {
      unlockProfile(profileId as 'bohemian' | 'family' | 'night');
      setSearchParams({}); // Clear the param
      window.location.reload(); // Refresh to show unlocked state
    }
  }, [profileId, searchParams, setSearchParams]);

  // Convert SouvenirPlace to MapSectionPlace for MapSection
  const mapPlaces: MapSectionPlace[] = useMemo(
    () =>
      places.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.why_it_fits,
        x: p.x,
        y: p.y,
      })),
    [places]
  );

  const handleSave = (placeId: string) => {
    addPlace(placeId);
    setSelectedPlace(null);
  };

  if (!profile) {
    return (
      <>
        <BackButton onBack={() => navigate('/souvenir')} label="Back" />
        <p style={{ padding: 80, textAlign: 'center' }}>Profile not found.</p>
      </>
    );
  }

  const selectedMapPlace = selectedPlace
    ? {
        id: selectedPlace.id,
        name: selectedPlace.name,
        description: selectedPlace.why_it_fits,
        x: selectedPlace.x,
        y: selectedPlace.y,
      }
    : null;

  return (
    <>
      <BackButton onBack={() => navigate('/souvenir')} label="Back" />
      <section style={{ maxWidth: 1600, margin: '0 auto', padding: '100px 40px 80px', textAlign: 'center' }}>
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
          {profile.name}
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: unlocked ? 80 : 40,
            lineHeight: 1.6,
          }}
        >
          {profile.promise}
        </p>
        {!unlocked && (
          <div style={{ marginBottom: 40 }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                fontWeight: 400,
                color: '#2B2B2B',
                opacity: 0.6,
                marginBottom: 16,
              }}
            >
              Unlock to reveal pins
            </p>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 400ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0E3F2F'; }}
            >
              Unlock this profile
            </a>
          </div>
        )}
      </section>
      <section
        style={{
          maxWidth: selectedPlace ? 1260 : 1080,
          margin: '0 auto 100px',
          padding: '0 40px',
          display: 'flex',
          gap: 100,
          alignItems: 'flex-start',
          justifyContent: 'center',
          transition: 'all 500ms ease',
        }}
      >
        <div
          style={{
            flex: selectedPlace ? '0 0 65%' : '1 1 auto',
            background: 'transparent',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 500ms ease',
            width: selectedPlace ? 'auto' : '100%',
            minWidth: 0,
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          <MapSection
            places={unlocked ? mapPlaces : []}
            selectedPlace={selectedMapPlace}
            onSelectPlace={(p) => {
              if (p) {
                const fullPlace = places.find((pl) => pl.id === p.id);
                setSelectedPlace(fullPlace || null);
              } else {
                setSelectedPlace(null);
              }
            }}
            detailPanelMode="none"
            showList={unlocked}
          />
        </div>

        {unlocked && places.length > 0 && (
          <div
            style={{
              flex: selectedPlace ? '0 0 0' : '0 0 28%',
              minWidth: selectedPlace ? 0 : 180,
              maxWidth: selectedPlace ? 0 : 240,
              overflow: 'hidden',
              borderLeft: selectedPlace ? 'none' : '0.5px solid rgba(14, 63, 47, 0.2)',
              paddingLeft: selectedPlace ? 0 : 24,
              transition: 'all 500ms ease',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {places.map((p) => {
                const proofDone = hasProof(p.id);
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedPlace(selectedPlace?.id === p.id ? null : p)}
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
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>{p.name}</span>
                      {proofDone && (
                        <span
                          style={{
                            fontSize: 12,
                            color: '#0E3F2F',
                            opacity: 0.5,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {selectedPlace && unlocked && (
          <PlaceDetailSheet
            place={selectedPlace}
            profileId={profileId!}
            onClose={() => setSelectedPlace(null)}
            onSave={handleSave}
            mode="save"
          />
        )}
      </section>
    </>
  );
}
