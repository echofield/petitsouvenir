/**
 * Petit Souvenir — Profile map (/souvenir/:profile)
 * Map + overlay filtered by profile, list, detail panel, Save to My Paris.
 */

import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { getSouvenirPlacesByProfile } from '../../data/souvenir-places';
import { getSouvenirProfileById } from '../../data/souvenir-profiles';
import { addPlace } from '../../utils/souvenir-storage';

export default function ProfileMapView() {
  const { profile: profileId } = useParams<{ profile: string }>();
  const navigate = useNavigate();
  const profile = profileId ? getSouvenirProfileById(profileId) : null;
  const places = useMemo(
    () => (profileId ? getSouvenirPlacesByProfile(profileId as 'bohemian' | 'family' | 'night') : []),
    [profileId]
  );
  const [selectedPlace, setSelectedPlace] = useState<MapSectionPlace | null>(null);

  const handleSave = (place: MapSectionPlace) => {
    addPlace(place.id);
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

  return (
    <>
      <BackButton onBack={() => navigate('/souvenir')} label="Back" />
      <section style={{ maxWidth: 1600, margin: '0 auto', padding: '100px 40px 20px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          {profile.name}
        </h1>
        {profile.intro && (
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 17,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2B2B2B',
              opacity: 0.7,
              marginBottom: 60,
              lineHeight: 1.6,
            }}
          >
            {profile.intro}
          </p>
        )}
      </section>
      <MapSection
        places={places}
        selectedPlace={selectedPlace}
        onSelectPlace={setSelectedPlace}
        onSavePlace={handleSave}
        detailPanelMode="save"
        showList
      />
    </>
  );
}
