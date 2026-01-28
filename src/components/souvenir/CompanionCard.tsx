/**
 * Petit Souvenir — Companion card (interior layer, not mapped)
 * Displays reading companions with buy links and optional "find in Paris" links.
 */

import { Companion } from '../../data/bohemian-types';

export interface CompanionCardProps {
  companion: Companion;
}

export function CompanionCard({ companion }: CompanionCardProps) {
  return (
    <div
      style={{
        padding: '24px 0',
        borderBottom: '0.5px solid rgba(43, 43, 43, 0.08)',
      }}
    >
      <h3
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 20,
          fontWeight: 500,
          color: '#2B2B2B',
          marginBottom: 4,
          lineHeight: 1.3,
        }}
      >
        {companion.title}
      </h3>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 14,
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#2B2B2B',
          opacity: 0.7,
          marginBottom: 12,
        }}
      >
        {companion.author}
      </p>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#2B2B2B',
          opacity: 0.6,
          marginBottom: 8,
        }}
      >
        {companion.moment}
      </p>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 1.6,
          color: '#2B2B2B',
          opacity: 0.85,
          marginBottom: 12,
        }}
      >
        {companion.why}
      </p>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 14,
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.6,
          color: '#2B2B2B',
          opacity: 0.7,
          marginBottom: 16,
        }}
      >
        {companion.microQuest}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {companion.actions.findInParis && (
          <a
            href={companion.actions.findInParis}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              background: 'transparent',
              color: '#2B2B2B',
              border: '0.5px solid rgba(43, 43, 43, 0.2)',
              textDecoration: 'none',
              transition: 'all 300ms ease',
              opacity: 0.8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderColor = 'rgba(43, 43, 43, 0.2)';
            }}
          >
            Find in Paris
          </a>
        )}
        <a
          href={companion.actions.buy}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '10px 20px',
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
          Buy
        </a>
      </div>
    </div>
  );
}
