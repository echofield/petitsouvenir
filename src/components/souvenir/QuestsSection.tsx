/**
 * Petit Souvenir — Quests section
 * Container for all-day quests.
 */

import { Quest } from '../../data/bohemian-types';
import { QuestCard } from './QuestCard';

export interface QuestsSectionProps {
  quests: Quest[];
  archetypeId: string;
  onQuestSaveChange?: () => void;
}

export function QuestsSection({ quests, archetypeId, onQuestSaveChange }: QuestsSectionProps) {
  if (quests.length === 0) return null;

  return (
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
        All-Day Quests
      </h2>
      <div>
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} archetypeId={archetypeId} onSaveChange={onQuestSaveChange} />
        ))}
      </div>
    </section>
  );
}
