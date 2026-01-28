/**
 * Petit Souvenir — Bohemian Profile View (/souvenir/bohemian)
 * Map + category filtering + companions + quests.
 * English UI, French venue names preserved.
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { BohemianPlaceDetailSheet } from '../../components/souvenir/BohemianPlaceDetailSheet';
import { CategorySwitcher } from '../../components/souvenir/CategorySwitcher';
import { CompanionCard } from '../../components/souvenir/CompanionCard';
import { QuestsSection } from '../../components/souvenir/QuestsSection';
import { getBohemianProfile, BohemianPlace } from '../../data/bohemian-types';
import { addPlace } from '../../utils/souvenir-storage';
import { isProfileUnlocked, STRIPE_PAYMENT_LINK, unlockProfile } from '../../utils/souvenir-lock';
import { hasProof } from '../../utils/souvenir-proof';

export default function BohemianProfileView() {
  // This is a fixed route /souvenir/bohemian, so profileId is always 'bohemian'
  const profileId = 'bohemian';
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const companionsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<BohemianPlace | null>(null);
  const [questSavedEvent, setQuestSavedEvent] = useState(0);

  const profileData = useMemo(() => {
    return getBohemianProfile();
  }, []);

  const unlocked = isProfileUnlocked(profileId as 'bohemian' | 'family' | 'night');

  // Handle unlock query param (for testing / Stripe redirect)
  useEffect(() => {
    if (searchParams.get('unlock') === 'true') {
      unlockProfile(profileId as 'bohemian' | 'family' | 'night');
      setSearchParams({});
      window.location.reload();
    }
  }, [searchParams, setSearchParams]);

  // Handle quest save events
  useEffect(() => {
    const handleQuestSaved = () => {
      setQuestSavedEvent((prev) => prev + 1);
    };
    window.addEventListener('questSaved', handleQuestSaved);
    return () => window.removeEventListener('questSaved', handleQuestSaved);
  }, []);

  // Filter places based on category
  const filteredPlaces = useMemo(() => {
    if (!profileData) return [];
    if (selectedCategory === 'companions') return []; // Companions is a mode, not a filter
    if (selectedCategory === null) {
      // All mapped places
      return profileData.places.filter((p) => p.x !== undefined && p.y !== undefined);
    }
    // Category-specific mapped places
    return profileData.places.filter(
      (p) => p.categoryId === selectedCategory && p.x !== undefined && p.y !== undefined
    );
  }, [profileData, selectedCategory]);

  // All places (for list, including unmapped)
  const allPlacesForList = useMemo(() => {
    if (!profileData) return [];
    if (selectedCategory === 'companions') return []; // Hide places when Companions mode
    if (selectedCategory === null) {
      return profileData.places; // Show all places in list
    }
    return profileData.places.filter((p) => p.categoryId === selectedCategory);
  }, [profileData, selectedCategory]);

  // Convert BohemianPlace to MapSectionPlace for MapSection
  const mapPlaces: MapSectionPlace[] = useMemo(
    () =>
      filteredPlaces.map((p) => ({
        id: p.id,
        name: p.title,
        description: p.why,
        x: p.x!,
        y: p.y!,
      })),
    [filteredPlaces]
  );

  // Handle Companions mode - scroll to section
  useEffect(() => {
    if (selectedCategory === 'companions' && companionsRef.current) {
      companionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  const handleSave = (placeId: string) => {
    addPlace(placeId);
    setSelectedPlace(null);
  };

  if (!profileData) {
    return (
      <>
        <BackButton onBack={() => navigate('/souvenir')} label="Back" />
        <p style={{ padding: 80, textAlign: 'center' }}>Profile not found.</p>
      </>
    );
  }

  const selectedMapPlace = selectedPlace && selectedPlace.x !== undefined && selectedPlace.y !== undefined
    ? {
        id: selectedPlace.id,
        name: selectedPlace.title,
        description: selectedPlace.why,
        x: selectedPlace.x,
        y: selectedPlace.y,
      }
    : null;

  const showCompanions = selectedCategory === 'companions' || selectedCategory === null;
  const showQuests = selectedCategory === null || selectedCategory === 'companions';

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
            lineHeight: 1.3,
          }}
        >
          {profileData.profile.name}
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: unlocked ? 80 : 40,
          }}
        >
          {profileData.profile.essence}
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

      {/* Map and List Section */}
      {selectedCategory !== 'companions' && (
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
                  const fullPlace = profileData.places.find((pl) => pl.id === p.id);
                  setSelectedPlace(fullPlace || null);
                } else {
                  setSelectedPlace(null);
                }
              }}
              detailPanelMode="none"
              showList={false}
            />
          </div>

          {/* List with Category Switcher */}
          {unlocked && allPlacesForList.length > 0 && (
            <div
              style={{
                flex: selectedPlace ? '0 0 0' : '0 0 28%',
                minWidth: selectedPlace ? 0 : 240,
                maxWidth: selectedPlace ? 0 : 320,
                overflow: 'hidden',
                borderLeft: selectedPlace ? 'none' : '0.5px solid rgba(14, 63, 47, 0.2)',
                paddingLeft: selectedPlace ? 0 : 24,
                transition: 'all 500ms ease',
              }}
            >
              <CategorySwitcher
                categories={profileData.categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {allPlacesForList.map((p) => {
                  const proofDone = hasProof(p.id);
                  const hasCoords = p.x !== undefined && p.y !== undefined;
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => {
                          if (hasCoords) {
                            setSelectedPlace(selectedPlace?.id === p.id ? null : p);
                          }
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: hasCoords ? 'pointer' : 'default',
                          fontFamily: 'Cormorant Garamond, Georgia, serif',
                          fontSize: 15,
                          fontWeight: 300,
                          color: selectedPlace?.id === p.id ? '#0E3F2F' : '#2B2B2B',
                          opacity: selectedPlace?.id === p.id ? 1 : hasCoords ? 0.7 : 0.5,
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
                        <span>{p.title}</span>
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
                        {!hasCoords && (
                          <span
                            style={{
                              fontSize: 10,
                              color: '#2B2B2B',
                              opacity: 0.4,
                              fontFamily: 'Inter, sans-serif',
                            }}
                          >
                            (list only)
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Place Detail Sheet */}
          {selectedPlace && unlocked && selectedPlace.x !== undefined && selectedPlace.y !== undefined && (
            <BohemianPlaceDetailSheet
              place={selectedPlace}
              profileId={profileId!}
              onClose={() => setSelectedPlace(null)}
              onSave={handleSave}
              mode="save"
            />
          )}
        </section>
      )}

      {/* Companions Section */}
      {showCompanions && profileData.companions.length > 0 && (
        <section
          ref={companionsRef}
          style={{
            maxWidth: 900,
            margin: '80px auto 100px',
            padding: '0 40px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0E3F2F',
              marginBottom: 40,
              lineHeight: 1.3,
            }}
          >
            Companions
          </h2>
          <div>
            {profileData.companions.map((companion) => (
              <CompanionCard key={companion.id} companion={companion} />
            ))}
          </div>
        </section>
      )}

      {/* Quests Section */}
      {showQuests && profileData.quests.length > 0 && (
        <QuestsSection 
          quests={profileData.quests} 
          archetypeId={profileId}
          onQuestSaveChange={() => setQuestSavedEvent((prev) => prev + 1)} 
        />
      )}
    </>
  );
}
