/**
 * Petit Souvenir — Quest card
 * Full-day quest, save, trace (step checkboxes + note), and Publish trace.
 */

import { useState, useEffect } from 'react';
import { Quest } from '../../data/bohemian-types';
import {
  getQuestTrace,
  startQuest,
  toggleQuestStep,
  completeQuest,
  setQuestNote,
  type QuestTrace,
} from '../../utils/quest-trace';
import { isQuestSaved, saveQuest, unsaveQuest } from '../../utils/souvenir-quests';
import { addResonance } from '../../utils/souvenir-resonance';
import { publishQuestTrace } from '../../utils/shared-traces';

export interface QuestCardProps {
  quest: Quest;
  archetypeId: string;
  onSaveChange?: () => void;
  emphasized?: boolean;
}

export function QuestCard({ quest, archetypeId, onSaveChange, emphasized }: QuestCardProps) {
  const [saved, setSaved] = useState(isQuestSaved(quest.id));
  const [trace, setTrace] = useState<QuestTrace | null>(() => getQuestTrace(quest.id));
  const [publishing, setPublishing] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [noteInput, setNoteInput] = useState(trace?.note ?? '');
  const [startLabel, setStartLabel] = useState('');

  useEffect(() => {
    setTrace(getQuestTrace(quest.id));
    setNoteInput(getQuestTrace(quest.id)?.note ?? '');
  }, [quest.id]);

  useEffect(() => {
    const t = getQuestTrace(quest.id);
    if (t) setNoteInput(t.note ?? '');
  }, [trace, quest.id]);

  useEffect(() => {
    const handleQuestSaved = () => setSaved(isQuestSaved(quest.id));
    window.addEventListener('questSaved', handleQuestSaved);
    return () => window.removeEventListener('questSaved', handleQuestSaved);
  }, [quest.id]);

  const handleSaveToggle = () => {
    if (saved) {
      unsaveQuest(quest.id);
    } else {
      saveQuest(quest.id);
      addResonance({ type: 'quest', targetId: quest.id, archetypeId });
    }
    setSaved(!saved);
    window.dispatchEvent(new Event('questSaved'));
    onSaveChange?.();
  };

  const handleStartQuest = () => {
    startQuest(quest.id);
    setTrace(getQuestTrace(quest.id));
  };

  const handleToggleStep = (stepIdx: number) => {
    toggleQuestStep(quest.id, stepIdx);
    setTrace(getQuestTrace(quest.id));
  };

  const handleNoteBlur = () => {
    const v = noteInput.trim();
    if (trace && v !== (trace.note ?? '')) {
      setQuestNote(quest.id, v);
      setTrace(getQuestTrace(quest.id));
    }
  };

  const handleComplete = () => {
    completeQuest(quest.id);
    setTrace(getQuestTrace(quest.id));
  };

  const handlePublish = async () => {
    const t = getQuestTrace(quest.id);
    if (!t) return;
    setPublishing(true);
    setCopyStatus('idle');
    try {
      const { url } = await publishQuestTrace(quest.id, archetypeId, { startLabel: startLabel.trim() || undefined });
      await navigator.clipboard.writeText(url);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } finally {
      setPublishing(false);
    }
  };

  const baseCardStyle: React.CSSProperties = {
    padding: '32px 0',
    borderBottom: '0.5px solid rgba(14, 63, 47, 0.2)',
    ...(emphasized
      ? {
          borderLeft: '2px solid rgba(14, 63, 47, 0.25)',
          paddingLeft: 16,
          marginLeft: -16,
          background: 'rgba(14, 63, 47, 0.03)',
        }
      : {}),
  };

  const stepListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: 24,
  };

  const stepItemStyle: React.CSSProperties = {
    fontFamily: 'Cormorant Garamond, Georgia, serif',
    fontSize: 15,
    fontWeight: 300,
    lineHeight: 1.7,
    color: '#2B2B2B',
    opacity: 0.85,
    marginBottom: 8,
    paddingLeft: 28,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  };

  const btnBase = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    padding: '12px 24px',
    transition: 'all 300ms ease',
  };

  return (
    <div style={baseCardStyle}>
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
          <span style={{ fontSize: 16, color: '#C9A961', opacity: 0.9 }}>✓</span>
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

      {!trace ? (
        <>
          <ul style={stepListStyle}>
            {quest.steps.map((step, idx) => (
              <li key={idx} style={stepItemStyle}>
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
                  <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{step.label}</span>
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
                ...btnBase,
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                textDecoration: 'none',
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
              onClick={handleStartQuest}
              style={{
                ...btnBase,
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
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
              Start quest
            </button>
            <button
              type="button"
              onClick={handleSaveToggle}
              style={{
                ...btnBase,
                background: saved ? '#0E3F2F' : 'transparent',
                color: saved ? '#FAF9F6' : '#0E3F2F',
                border: saved ? 'none' : '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
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
        </>
      ) : (
        <>
          <ul style={stepListStyle}>
            {quest.steps.map((step, idx) => {
              const checked = trace.checkedStepIdx.indexOf(idx) >= 0;
              return (
                <li key={idx} style={stepItemStyle}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleToggleStep(idx)}
                    aria-label={`Step ${idx + 1}: ${step.label}`}
                    style={{ flexShrink: 0, accentColor: '#0E3F2F', cursor: 'pointer' }}
                  />
                  <span
                    style={{
                      flexShrink: 0,
                      color: '#0E3F2F',
                      opacity: 0.4,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 12,
                    }}
                  >
                    {idx + 1}.
                  </span>
                  <span>
                    {step.type === 'slot' && (
                      <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{step.label}</span>
                    )}
                    {step.type !== 'slot' && step.label}
                  </span>
                </li>
              );
            })}
          </ul>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor={`quest-note-${quest.id}`}
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2B2B2B',
                opacity: 0.5,
                marginBottom: 6,
              }}
            >
              Note (optional)
            </label>
            <input
              id={`quest-note-${quest.id}`}
              type="text"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              onBlur={handleNoteBlur}
              placeholder="One line."
              maxLength={200}
              style={{
                width: '100%',
                padding: '10px 12px',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 15,
                fontWeight: 300,
                color: '#2B2B2B',
                background: 'transparent',
                border: '0.5px solid rgba(14, 63, 47, 0.2)',
              }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label
              htmlFor={`quest-start-${quest.id}`}
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2B2B2B',
                opacity: 0.5,
                marginBottom: 6,
              }}
            >
              Where did you start? (optional, no tracking)
            </label>
            <input
              id={`quest-start-${quest.id}`}
              type="text"
              value={startLabel}
              onChange={(e) => setStartLabel(e.target.value)}
              placeholder="e.g. Musée Zadkine, Jardin du Luxembourg"
              maxLength={120}
              style={{
                width: '100%',
                padding: '10px 12px',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 15,
                fontWeight: 300,
                color: '#2B2B2B',
                background: 'transparent',
                border: '0.5px solid rgba(14, 63, 47, 0.2)',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={quest.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnBase,
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                textDecoration: 'none',
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
              onClick={handleComplete}
              style={{
                ...btnBase,
                background: 'transparent',
                color: '#0E3F2F',
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
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
              Complete
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <button
                type="button"
                onClick={handlePublish}
                disabled={publishing}
                style={{
                  ...btnBase,
                  background: 'transparent',
                  color: '#0E3F2F',
                  border: '0.5px solid rgba(14, 63, 47, 0.25)',
                  cursor: publishing ? 'wait' : 'pointer',
                  opacity: publishing ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!publishing) {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = publishing ? 0.7 : 1;
                  e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)';
                }}
              >
                {publishing ? 'Saving…' : 'Save a memory'}
              </button>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 12,
                  fontWeight: 300,
                  color: '#2B2B2B',
                  opacity: 0.5,
                  lineHeight: 1.3,
                }}
              >
                Creates an unlisted link you control.
              </span>
            </div>
            {copyStatus === 'copied' && (
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 14,
                  fontWeight: 300,
                  color: '#0E3F2F',
                  opacity: 0.8,
                }}
              >
                Link copied.
              </span>
            )}
            {copyStatus === 'error' && (
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  color: '#8b3a3a',
                  opacity: 0.9,
                }}
              >
                Could not save.
              </span>
            )}
            <button
              type="button"
              onClick={handleSaveToggle}
              style={{
                ...btnBase,
                background: saved ? '#0E3F2F' : 'transparent',
                color: saved ? '#FAF9F6' : '#0E3F2F',
                border: saved ? 'none' : '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: 'pointer',
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
        </>
      )}
    </div>
  );
}
