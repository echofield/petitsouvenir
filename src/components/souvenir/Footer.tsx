/**
 * Petit Souvenir — Minimal Footer
 * Manifesto + Privacy only. Contribute not linked (route kept).
 */

import { Link, useLocation } from 'react-router-dom';
import { NAV } from '../../config/nav';

export function Footer() {
  const location = useLocation();

  if (location.pathname.startsWith('/arche') || location.pathname.startsWith('/t/')) {
    return null;
  }

  const linkStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 9,
    fontWeight: 400,
    letterSpacing: '0.05em',
    color: '#2B2B2B',
    opacity: 0.4,
    textDecoration: 'none' as const,
    transition: 'opacity 300ms ease',
  };

  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '60px 40px 40px',
        borderTop: '0.5px solid rgba(14, 63, 47, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
          {NAV.footer.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              style={linkStyle}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
            >
              {label}
            </Link>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 13,
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.4,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Paris, quietly.
        </p>
      </div>
    </footer>
  );
}
