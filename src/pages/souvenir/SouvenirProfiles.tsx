/**
 * Petit Souvenir — Profile selection (/souvenir)
 * Shows promise, rules, and unlock/start buttons
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { PETIT_SOUVENIR_DATA } from '../../data/petit-souvenir-types';
import { isProfileUnlocked, STRIPE_PAYMENT_LINK } from '../../utils/souvenir-lock';

export default function SouvenirProfiles() {
  const navigate = useNavigate();
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null);

  return (
    <>
      <BackButton onBack={() => navigate('/')} label="Back" />
      <section
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '120px 40px 80px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: 60,
            lineHeight: 1.3,
            textAlign: 'center',
          }}
        >
          Choose a profile
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          {PETIT_SOUVENIR_DATA.profiles.map((profile) => {
            const unlocked = isProfileUnlocked(profile.id);
            const expanded = expandedProfile === profile.id;

            return (
              <div
                key={profile.id}
                style={{
                  border: '0.5px solid rgba(14, 63, 47, 0.2)',
                  padding: expanded ? '40px 36px' : '32px 36px',
                  background: 'transparent',
                  transition: 'all 400ms ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 24,
                    marginBottom: expanded ? 24 : 0,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: 28,
                        fontWeight: 500,
                        color: '#0E3F2F',
                        marginBottom: 12,
                        lineHeight: 1.3,
                      }}
                    >
                      {profile.name}
                    </h2>
                    {expanded && (
                      <>
                        <p
                          style={{
                            fontFamily: 'Cormorant Garamond, Georgia, serif',
                            fontSize: 18,
                            fontWeight: 300,
                            fontStyle: 'italic',
                            color: '#2B2B2B',
                            opacity: 0.8,
                            lineHeight: 1.6,
                            marginBottom: 28,
                          }}
                        >
                          {profile.promise}
                        </p>
                        <div style={{ marginBottom: 24 }}>
                          <h3
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
                            Rules
                          </h3>
                          <ul
                            style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0,
                              marginBottom: 20,
                            }}
                          >
                            {profile.rules.map((rule, idx) => (
                              <li
                                key={idx}
                                style={{
                                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                                  fontSize: 15,
                                  fontWeight: 300,
                                  color: '#2B2B2B',
                                  opacity: 0.75,
                                  lineHeight: 1.7,
                                  marginBottom: 8,
                                  paddingLeft: 16,
                                  position: 'relative',
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    color: '#0E3F2F',
                                    opacity: 0.4,
                                  }}
                                >
                                  •
                                </span>
                                {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
                    {!unlocked && (
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
                          padding: '12px 24px',
                          background: 'transparent',
                          color: '#0E3F2F',
                          border: '0.5px solid rgba(14, 63, 47, 0.3)',
                          textDecoration: 'none',
                          transition: 'all 400ms ease',
                          display: 'inline-block',
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
                        Unlock
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        if (expanded) {
                          if (unlocked) {
                            navigate(`/souvenir/${profile.id}`);
                          }
                        } else {
                          setExpandedProfile(profile.id);
                        }
                      }}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '14px 28px',
                        background: unlocked ? '#0E3F2F' : 'transparent',
                        color: unlocked ? '#FAF9F6' : '#0E3F2F',
                        border: unlocked ? 'none' : '0.5px solid rgba(14, 63, 47, 0.3)',
                        cursor: unlocked ? 'pointer' : 'default',
                        transition: 'all 400ms ease',
                        opacity: unlocked ? 1 : 0.5,
                      }}
                      onMouseEnter={(e) => {
                        if (unlocked) {
                          e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (unlocked) {
                          e.currentTarget.style.background = '#0E3F2F';
                        }
                      }}
                    >
                      {expanded && unlocked ? 'Start' : expanded ? 'Unlock to start' : 'View'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
