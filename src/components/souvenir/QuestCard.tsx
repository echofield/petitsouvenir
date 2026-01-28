/**
 * Petit Souvenir — Quest card
 * Displays full-day quest with steps, feel, and save functionality.
 * Saved state comes only from localStorage (not JSON).
 */

import { useState, useEffect } from 'react';
import { Quest } from '../../data/bohemian-types';
import { isQuestSaved, saveQuest, unsaveQuest } from '../../utils/souvenir-quests';
import { addResonance } from '../../utils/souvenir-resonance';

export interface QuestCardProps {
  quest: Quest;
  archetypeId: string;
  onSaveChange?: () => void;
}

export function QuestCard({ quest, archetypeId, onSaveChange }: QuestCardProps) {
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
      // Note: Do not remove resonance when unsaving (resonance is a trace)
    } else {
      saveQuest(quest.id);
      // Record resonance when saving quest
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
        padding: '32px 0',
        borderBottom: '0.5px solid rgba(14, 63, 47, 0.2)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 24,
            fontWeight: 500,
            color: '#0E3F2F',
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          {quest.title}
        </h3>
        {saved && (
          <span
            style={{
              fontSize: 16,
              color: '#0E3F2F',
              opacity: 0.5,
            }}
          >
            ✓
          </span>
        )}
      </div>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 16,
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.6,
          color: '#2B2B2B',
          opacity: 0.8,
          marginBottom: 24,
        }}
      >
        {quest.feel}
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          marginBottom: 24,
        }}
      >
        {quest.steps.map((step, idx) => (
          <li
            key={idx}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.85,
              marginBottom: 8,
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                color: '#0E3F2F',
                opacity: 0.4,
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
              }}
            >
              {idx + 1}.
            </span>
            {step.type === 'slot' && (
              <span
                style={{
                  fontStyle: 'italic',
                  opacity: 0.7,
                }}
              >
                {step.label}
              </span>
            )}
            {step.type !== 'slot' && step.label}
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href={quest.mapsDirections}
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
          Directions
        </a>
        <button
          type="button"
          onClick={handleSaveToggle}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            background: saved ? '#0E3F2F' : 'transparent',
            color: saved ? '#FAF9F6' : '#0E3F2F',
            border: saved ? 'none' : '0.5px solid rgba(14, 63, 47, 0.3)',
            cursor: 'pointer',
            transition: 'all 400ms ease',
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
          {saved ? 'Saved' : 'Save Quest'}
        </button>
      </div>
    </div>
  );
}
