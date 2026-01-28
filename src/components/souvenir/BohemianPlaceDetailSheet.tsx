/**
 * Petit Souvenir — Detailed place sheet for Bohemian profile
 * Shows tags, micro-quest, and action links.
 */

import { useState, useEffect, useRef } from 'react';
import { BohemianPlace } from '../../data/bohemian-types';
import { hasProof, markProofDone, getProof } from '../../utils/souvenir-proof';
import { isProfileUnlocked, STRIPE_PAYMENT_LINK } from '../../utils/souvenir-lock';
import { addResonance } from '../../utils/souvenir-resonance';

export interface BohemianPlaceDetailSheetProps {
  place: BohemianPlace;
  profileId: string;
  onClose: () => void;
  onSave?: (placeId: string) => void;
  mode?: 'save' | 'remove' | 'none';
}

export function BohemianPlaceDetailSheet({
  place,
  profileId,
  onClose,
  onSave,
  mode = 'none',
}: BohemianPlaceDetailSheetProps) {
  const unlocked = isProfileUnlocked(profileId as 'bohemian' | 'family' | 'night');
  const proofDone = hasProof(place.id);
  const proof = getProof(place.id);
  const [note, setNote] = useState(proof?.note || '');
  const [showProofInput, setShowProofInput] = useState(false);
  
  // Resonance tracking: start timer on mount
  const openTimeRef = useRef<number>(Date.now());
  
  useEffect(() => {
    openTimeRef.current = Date.now();
    
    // On unmount, record resonance if dwell time >= 12 seconds
    return () => {
      const dwellMs = Date.now() - openTimeRef.current;
      if (dwellMs >= 12_000) {
        addResonance({
          type: 'place',
          targetId: place.id,
          archetypeId: profileId,
          dwellMs,
        });
      }
    };
  }, [place.id, profileId]);

  const handleMarkProof = () => {
    markProofDone(place.id, note || undefined);
    setShowProofInput(false);
  };

  return (
    <div
      style={{
        flex: '0 0 38%',
        background: 'transparent',
        borderLeft: '0.5px solid rgba(14, 63, 47, 0.2)',
        padding: '60px 50px',
        position: 'relative',
        animation: 'psSlideIn 500ms ease',
        minHeight: 320,
        maxHeight: '80vh',
        overflowY: 'auto',
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
        onClick={onClose}
        style={{
          position: 'sticky',
          top: 0,
          right: 30,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: 24,
          color: '#2B2B2B',
          opacity: 0.3,
          transition: 'opacity 300ms ease',
          fontWeight: 300,
          float: 'right',
          marginBottom: 20,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.3'; }}
      >
        ×
      </button>

      {!unlocked ? (
        <>
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
            {place.title}
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
            {place.why}
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
            Unlock to reveal
          </a>
        </>
      ) : (
        <>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 28,
              fontWeight: 500,
              color: '#0E3F2F',
              marginBottom: 12,
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}
          >
            {place.title}
          </h3>
          {place.neighborhood && (
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                fontWeight: 400,
                color: '#2B2B2B',
                opacity: 0.6,
                marginBottom: 20,
              }}
            >
              {place.neighborhood}
            </p>
          )}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 17,
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.8,
              marginBottom: 32,
            }}
          >
            {place.why}
          </p>

          {/* Tags */}
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                display: 'flex',
                gap: 24,
                flexWrap: 'wrap',
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 400,
                color: '#2B2B2B',
                opacity: 0.7,
              }}
            >
              <span>
                <strong style={{ color: '#0E3F2F', opacity: 0.8 }}>Price:</strong> {place.tags.price}
              </span>
              <span>
                <strong style={{ color: '#0E3F2F', opacity: 0.8 }}>Time:</strong> {place.tags.time}
              </span>
              <span>
                <strong style={{ color: '#0E3F2F', opacity: 0.8 }}>Solo:</strong> {place.tags.solo}
              </span>
              <span>
                <strong style={{ color: '#0E3F2F', opacity: 0.8 }}>Best:</strong> {place.tags.bestMoment}
              </span>
            </div>
          </div>

          {/* Micro-quest */}
          <div style={{ marginBottom: 32 }}>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0E3F2F',
                marginBottom: 12,
              }}
            >
              Micro-quest
            </h4>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#2B2B2B',
                opacity: 0.85,
              }}
            >
              {place.microQuest}
            </p>
          </div>

          {/* Action links */}
          <div style={{ marginBottom: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={place.actions.maps}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                textDecoration: 'none',
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
              Maps
            </a>
            {place.actions.schedule && (
              <a
                href={place.actions.schedule}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: '#0E3F2F',
                  border: '0.5px solid rgba(14, 63, 47, 0.3)',
                  textDecoration: 'none',
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
                Schedule
              </a>
            )}
            {place.actions.booking && (
              <a
                href={place.actions.booking}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: '#0E3F2F',
                  border: '0.5px solid rgba(14, 63, 47, 0.3)',
                  textDecoration: 'none',
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
                Booking
              </a>
            )}
            {mode === 'save' && onSave && (
              <button
                type="button"
                onClick={() => onSave(place.id)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  background: '#0E3F2F',
                  color: '#FAF9F6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 400ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0E3F2F'; }}
              >
                Save
              </button>
            )}
            {mode === 'remove' && onSave && (
              <button
                type="button"
                onClick={() => onSave(place.id)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
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
                Remove
              </button>
            )}
          </div>

          {/* Proof section */}
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '0.5px solid rgba(14, 63, 47, 0.2)' }}>
            {!proofDone ? (
              <>
                {!showProofInput ? (
                  <button
                    type="button"
                    onClick={() => setShowProofInput(true)}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '12px 24px',
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
                    Unlock proof
                  </button>
                ) : (
                  <div>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="What did you notice?"
                      style={{
                        width: '100%',
                        minHeight: 80,
                        padding: 12,
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: 15,
                        fontWeight: 300,
                        color: '#2B2B2B',
                        background: 'transparent',
                        border: '0.5px solid rgba(14, 63, 47, 0.2)',
                        resize: 'vertical',
                        marginBottom: 12,
                      }}
                    />
                    <div style={{ display: 'flex', gap: 12 }}>
                      <button
                        type="button"
                        onClick={handleMarkProof}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          padding: '12px 24px',
                          background: '#0E3F2F',
                          color: '#FAF9F6',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 400ms ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#0E3F2F'; }}
                      >
                        Mark done
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowProofInput(false);
                          setNote(proof?.note || '');
                        }}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          padding: '12px 24px',
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
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0E3F2F',
                    marginBottom: 12,
                  }}
                >
                  ✓ Proof completed
                </p>
                {proof?.note && (
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: '#2B2B2B',
                      opacity: 0.85,
                      fontStyle: 'italic',
                    }}
                  >
                    {proof.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
