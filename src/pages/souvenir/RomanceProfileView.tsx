/**
 * Petit Souvenir — Romance profile (/souvenir/romance)
 * Coffret-only: not on main Profiles list. Reachable via One Coffret (Hotel Edition).
 */

import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { QuestCard } from '../../components/souvenir/QuestCard';
import { getRomanceProfile } from '../../data/romance-profile';
import type { Quest } from '../../data/bohemian-types';

export default function RomanceProfileView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const presetId = searchParams.get('preset');
  const presetsRef = useRef<HTMLDivElement>(null);
  const profile = getRomanceProfile();

  useEffect(() => {
    if (presetId && presetsRef.current) {
      presetsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [presetId]);

  return (
    <>
      <BackButton onBack={() => navigate('/coffret')} label="Back" />
      <section
        style={{
          maxWidth: 720,
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
          {profile.name}
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
            marginBottom: 80,
          }}
        >
          {profile.essence}
        </p>
      </section>

      <div ref={presetsRef}>
        <section
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
            Hotel Edition
          </h2>
          <div>
            {profile.presets.map((preset) => (
              <QuestCard
                key={preset.id}
                quest={preset as unknown as Quest}
                archetypeId="romance"
                emphasized={presetId === preset.id}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
