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
              color: '#2B2B2B',
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
              color: '#2B2B2B',
              opacity: 0.4,
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
            color: '#2B2B2B',
            border: '0.5px solid rgba(43, 43, 43, 0.2)',
            textDecoration: 'none',
            transition: 'all 300ms ease',
            opacity: 0.7,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
            e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.2)';
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
            background: saved ? 'rgba(43, 43, 43, 0.1)' : 'transparent',
            color: '#2B2B2B',
            border: saved ? 'none' : '0.5px solid rgba(43, 43, 43, 0.2)',
            cursor: 'pointer',
            transition: 'all 300ms ease',
            opacity: saved ? 0.8 : 0.7,
          }}
          onMouseEnter={(e) => {
            if (!saved) {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!saved) {
              e.currentTarget.style.opacity = '0.7';
              e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.2)';
            }
          }}
        >
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}
