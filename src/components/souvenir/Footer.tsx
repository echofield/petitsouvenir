/**
 * Petit Souvenir — Minimal Footer
 * Quiet legitimacy for trust + realness.
 */

import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  
  // Hide footer on /arche (preserved ARCHÉ experience) and /t (shared trace page is self-contained)
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
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
          >
            About
          </Link>
          <Link
            to="/participate"
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
          >
            Participate
          </Link>
          <Link
            to="/privacy"
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
          >
            Privacy
          </Link>
          <a
            href="mailto:contact@petitsouvenir.com"
            style={linkStyle}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
          >
            Contact
          </a>
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
