/**
 * Petit Souvenir — Mobile bottom tab bar (<=768px only).
 * Explore, Experiences, My Paris. Safe-area aware. Not shown on /arche or /t/.
 */

import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../ui/use-mobile';
import { NAV } from '../../config/nav';

function isPrimaryActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function MobileTabBar() {
  const location = useLocation();
  const isMobile = useIsMobile();

  if (!isMobile) return null;
  if (location.pathname.startsWith('/arche') || location.pathname.startsWith('/t/')) {
    return null;
  }

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 48,
        paddingTop: 12,
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
        background: '#FAF9F6',
        borderTop: '0.5px solid rgba(14, 63, 47, 0.08)',
      }}
    >
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
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
              padding: '8px 12px',
              minHeight: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
