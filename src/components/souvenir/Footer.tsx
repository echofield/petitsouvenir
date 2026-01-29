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
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
        }}
      >
        <Link
          to="/about"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#2B2B2B',
            opacity: 0.4,
            textDecoration: 'none',
            transition: 'opacity 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.4';
          }}
        >
          About
        </Link>
        <a
          href="mailto:contact@petitsouvenir.com"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#2B2B2B',
            opacity: 0.4,
            textDecoration: 'none',
            transition: 'opacity 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.4';
          }}
        >
          Contact
        </a>
        <a
          href="/privacy"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#2B2B2B',
            opacity: 0.4,
            textDecoration: 'none',
            transition: 'opacity 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.4';
          }}
        >
          Privacy
        </a>
        <a
          href="/terms"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: '#2B2B2B',
            opacity: 0.4,
            textDecoration: 'none',
            transition: 'opacity 300ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.4';
          }}
        >
          Terms
        </a>
      </div>
    </footer>
  );
}
