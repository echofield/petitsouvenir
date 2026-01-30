/**
 * Petit Souvenir — Romance Hotel Edition (/coffret/romance-hotel)
 * Coffret world page: curated content, Paris map, premium minimal. No guide tone.
 */

import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { MapSection, MapSectionPlace } from '../../components/souvenir/MapSection';
import { buildGoogleMapsUrl } from '../../utils/maps';
import {
  ROMANCE_HOTEL_SECTIONS,
  ROMANCE_HOTEL_READING,
  ROMANCE_HOTEL_ITINERARY,
  ROMANCE_HOTEL_PREFACE,
  getRomanceHotelMapPlaces,
  type RomanceHotelPlace,
} from '../../data/romance-hotel';

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#0E3F2F',
  opacity: 0.7,
  marginBottom: 20,
  lineHeight: 1.3,
};

const cardStyle: React.CSSProperties = {
  padding: '28px 24px',
  border: '0.5px solid rgba(14, 63, 47, 0.2)',
  background: 'transparent',
  marginBottom: 32,
};

function PlaceRow({ place }: { place: RomanceHotelPlace }) {
  const mapsUrl = buildGoogleMapsUrl(`${place.name}, ${place.address}`);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 8,
        padding: '14px 0',
        borderBottom: '0.5px solid rgba(14, 63, 47, 0.12)',
      }}
    >
      <div style={{ flex: '1 1 200px', minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 500,
            color: '#0E3F2F',
          }}
        >
          {place.name}
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 15,
            fontWeight: 300,
            color: '#2B2B2B',
            opacity: 0.6,
            marginLeft: 8,
          }}
        >
          ({place.arrondissement})
        </span>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 14,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.75,
            margin: '6px 0 0',
            lineHeight: 1.4,
          }}
        >
          {place.note}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexShrink: 0,
        }}
      >
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0E3F2F',
            opacity: 0.8,
            textDecoration: 'none',
            borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
        >
          Maps
        </a>
        {place.bookingUrl && (
          <a
            href={place.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0E3F2F',
              opacity: 0.8,
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            Book
          </a>
        )}
      </div>
    </div>
  );
}

export default function CoffretRomanceHotel() {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState<MapSectionPlace | null>(null);

  const mapPlaces: MapSectionPlace[] = useMemo(() => {
    return getRomanceHotelMapPlaces().map((p) => ({
      id: p.id,
      name: p.name,
      description: p.note,
      x: p.x,
      y: p.y,
    }));
  }, []);

  const selectedMapPlace = selectedPlace
    ? { id: selectedPlace.id, name: selectedPlace.name, description: selectedPlace.description, x: selectedPlace.x, y: selectedPlace.y }
    : null;

  return (
    <>
      <BackButton onBack={() => navigate('/coffret')} label="Back" />
      <section
        style={{
          maxWidth: 820,
          margin: '0 auto',
          padding: '100px 40px 80px',
          textAlign: 'center',
        }}
      >
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
          Romance — Hotel Edition
        </h1>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 17,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: 32,
            lineHeight: 1.5,
          }}
        >
          The Architecture of Intimacy.
        </p>
        <div
          style={{
            textAlign: 'left',
            maxWidth: 640,
            margin: '0 auto 48px',
          }}
        >
          {ROMANCE_HOTEL_PREFACE.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 15,
                fontWeight: 300,
                color: '#2B2B2B',
                opacity: 0.8,
                marginBottom: 12,
                lineHeight: 1.6,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {mapPlaces.length > 0 && (
        <MapSection
          places={mapPlaces}
          selectedPlace={selectedMapPlace}
          onSelectPlace={setSelectedPlace}
          detailPanelMode="none"
          showList={false}
          mapVariant="heartbeat"
        />
      )}

      <section
        style={{
          maxWidth: 820,
          margin: '0 auto',
          padding: '0 40px 80px',
          textAlign: 'left',
        }}
      >
        {ROMANCE_HOTEL_SECTIONS.map((sec) => (
          <div key={sec.id} style={cardStyle}>
            <h2 style={sectionTitleStyle}>{sec.title}</h2>
            {sec.items.map((place) => (
              <PlaceRow key={place.id} place={place} />
            ))}
          </div>
        ))}

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>{ROMANCE_HOTEL_READING.title}</h2>
          {ROMANCE_HOTEL_READING.items.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '12px 0',
                borderBottom: '0.5px solid rgba(14, 63, 47, 0.12)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#0E3F2F',
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 14,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#2B2B2B',
                  opacity: 0.7,
                  marginLeft: 8,
                }}
              >
                ({item.moment})
              </span>
            </div>
          ))}
        </div>

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>{ROMANCE_HOTEL_ITINERARY.title}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
              marginTop: 8,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0E3F2F',
                  opacity: 0.6,
                  marginBottom: 12,
                }}
              >
                Day 1
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 15,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.85,
                  lineHeight: 1.8,
                }}
              >
                {ROMANCE_HOTEL_ITINERARY.day1.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0E3F2F',
                  opacity: 0.6,
                  marginBottom: 12,
                }}
              >
                Day 2
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 15,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.85,
                  lineHeight: 1.8,
                }}
              >
                {ROMANCE_HOTEL_ITINERARY.day2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
