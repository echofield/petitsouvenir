/**
 * Petit Souvenir — Quest Preview Card
 * Compact version for early visibility on profile page.
 */

import { Quest } from '../../data/bohemian-types';
import { isQuestSaved, saveQuest, unsaveQuest } from '../../utils/souvenir-quests';
import { addResonance } from '../../utils/souvenir-resonance';
import { useState, useEffect } from 'react';

export interface QuestPreviewProps {
  quest: Quest;
  archetypeId: string;
  onSaveChange?: () => void;
}

export function QuestPreview({ quest, archetypeId, onSaveChange }: QuestPreviewProps) {
  const [saved, setSaved] = useState(isQuestSaved(quest.id));

  useEffect(() => {
    const handleQuestSaved = () => {
      setSaved(isQuestSaved(quest.id));
    };
    window.addEventListener('questSaved', handleQuestSaved);
    return () => window.removeEventListener('questSaved', handleQuestSaved);
  }, [quest.id]);

  const handleSaveToggle = () => {
    if (saved) {
      unsaveQuest(quest.id);
    } else {
      saveQuest(quest.id);
      addResonance({
        type: 'quest',
        targetId: quest.id,
        archetypeId,
      });
    }
    setSaved(!saved);
    window.dispatchEvent(new Event('questSaved'));
    onSaveChange?.();
  };

  return (
    <div
      style={{
        padding: '24px 0',
        borderBottom: '0.5px solid rgba(14, 63, 47, 0.1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 20,
              fontWeight: 500,
              color: '#0E3F2F',
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {quest.title}
          </h3>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 14,
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: '#2B2B2B',
              opacity: 0.7,
            }}
          >
            {quest.feel}
          </p>
        </div>
        {saved && (
          <span
            style={{
              fontSize: 14,
              color: '#C9A961',
              opacity: 0.9,
            }}
          >
            ✓
          </span>
        )}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href={quest.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '8px 16px',
            background: 'transparent',
            color: '#0E3F2F',
            border: '0.5px solid rgba(14, 63, 47, 0.3)',
            textDecoration: 'none',
            transition: 'all 300ms ease',
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
          Directions
        </a>
        <button
          type="button"
          onClick={handleSaveToggle}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '8px 16px',
            background: saved ? '#0E3F2F' : 'transparent',
            color: saved ? '#FAF9F6' : '#0E3F2F',
            border: saved ? 'none' : '0.5px solid rgba(14, 63, 47, 0.3)',
            cursor: 'pointer',
            transition: 'all 300ms ease',
          }}
          onMouseEnter={(e) => {
            if (!saved) {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)';
            } else {
              e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)';
            }
          }}
          onMouseLeave={(e) => {
            if (!saved) {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)';
            } else {
              e.currentTarget.style.background = '#0E3F2F';
            }
          }}
        >
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}
