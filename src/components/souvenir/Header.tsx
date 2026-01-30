/**
 * Petit Souvenir — Brand Header
 * Minimal, quiet, editorial. Not SaaS.
 * Primary nav: Explore, Experiences, My Paris. Nav hidden on mobile (tab bar used).
 */

import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../ui/use-mobile';
import { NAV } from '../../config/nav';

function isPrimaryActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function Header() {
  const location = useLocation();
  const isMobile = useIsMobile();

  if (location.pathname.startsWith('/arche') || location.pathname.startsWith('/t/')) {
    return null;
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        background: '#FAF9F6',
        zIndex: 1000,
        borderBottom: '0.5px solid rgba(14, 63, 47, 0.08)',
        padding: '24px 40px',
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: 'var(--accent-gold, #C9A961)',
            textDecoration: 'none',
            opacity: 0.9,
          }}
        >
          Petit Souvenir
        </Link>

        {!isMobile && (
          <>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 14,
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#2B2B2B',
                opacity: 0.4,
                letterSpacing: '0.05em',
              }}
            >
              Paris
            </div>
            <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              {NAV.primary.map(({ label, href }) => {
                const active = isPrimaryActive(location.pathname, href);
                return (
                  <Link
                    key={href}
                    to={href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 10,
                      fontWeight: active ? 500 : 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#2B2B2B',
                      opacity: active ? 0.95 : 0.55,
                      textDecoration: active ? 'underline' : 'none',
                      textDecorationColor: 'var(--accent-gold, #C9A961)',
                      textUnderlineOffset: 4,
                      transition: 'opacity 300ms ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.opacity = '0.75';
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.opacity = '0.55';
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
