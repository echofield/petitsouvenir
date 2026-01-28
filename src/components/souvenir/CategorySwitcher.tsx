/**
 * Petit Souvenir — Category switcher
 * Horizontal button group for filtering places by category.
 * "All" is UI-only (selectedCategory === null).
 * "Companions" is a mode, not a mapped category.
 */

import { Category } from '../../data/bohemian-types';

export interface CategorySwitcherProps {
  categories: Category[];
  selected: string | null;
  onSelect: (categoryId: string | null) => void;
}

export function CategorySwitcher({ categories, selected, onSelect }: CategorySwitcherProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottom: '0.5px solid rgba(14, 63, 47, 0.2)',
      }}
    >
      <button
        type="button"
        onClick={() => onSelect(null)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          fontWeight: selected === null ? 500 : 400,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: selected === null ? '#0E3F2F' : '#2B2B2B',
          background: 'transparent',
          border: 'none',
          borderBottom: selected === null ? '1px solid #0E3F2F' : '1px solid transparent',
          padding: '8px 0',
          cursor: 'pointer',
          transition: 'all 300ms ease',
          opacity: selected === null ? 1 : 0.6,
        }}
        onMouseEnter={(e) => {
          if (selected !== null) {
            e.currentTarget.style.opacity = '0.8';
          }
        }}
        onMouseLeave={(e) => {
          if (selected !== null) {
            e.currentTarget.style.opacity = '0.6';
          }
        }}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelect(cat.id)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: selected === cat.id ? 500 : 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: selected === cat.id ? '#0E3F2F' : '#2B2B2B',
            background: 'transparent',
            border: 'none',
            borderBottom: selected === cat.id ? '1px solid #0E3F2F' : '1px solid transparent',
            padding: '8px 0',
            cursor: 'pointer',
            transition: 'all 300ms ease',
            opacity: selected === cat.id ? 1 : 0.6,
          }}
          onMouseEnter={(e) => {
            if (selected !== cat.id) {
              e.currentTarget.style.opacity = '0.8';
            }
          }}
          onMouseLeave={(e) => {
            if (selected !== cat.id) {
              e.currentTarget.style.opacity = '0.6';
            }
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
