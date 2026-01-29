/**
 * Petit Souvenir — Brand Header
 * Minimal, quiet, editorial. Not SaaS.
 */

import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  // Hide header on /arche (preserved ARCHÉ experience) and /t (shared trace page is self-contained)
  if (location.pathname.startsWith('/arche') || location.pathname.startsWith('/t/')) {
    return null;
  }
  
  const isActive = (path: string) => location.pathname === path;
  const isCoffretActive = location.pathname.startsWith('/coffret');
  const isContributeActive = location.pathname === '/contribute';
  const isPrivacyActive = location.pathname === '/privacy';

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
        {/* Left: Brand */}
        <Link
          to="/"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#C9A961',
            textDecoration: 'none',
            opacity: 0.9,
          }}
        >
          Petit Souvenir
        </Link>

        {/* Center: Paris (optional, subtle) */}
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

        {/* Right: Nav */}
        <nav
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isActive('/') ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isActive('/') ? '#2B2B2B' : '#2B2B2B',
              opacity: isActive('/') ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive('/')) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/')) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            Map
          </Link>
          <Link
            to="/souvenir"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isActive('/souvenir') ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isActive('/souvenir') ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive('/souvenir')) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/souvenir')) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            Profiles
          </Link>
          <Link
            to="/create"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isActive('/create') ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isActive('/create') ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive('/create')) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/create')) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            My Map
          </Link>
          <Link
            to="/coffret"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isCoffretActive ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isCoffretActive ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isCoffretActive) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isCoffretActive) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            COFFRET
          </Link>
          <Link
            to="/contribute"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isContributeActive ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isContributeActive ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isContributeActive) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isContributeActive) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            Contribute
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isActive('/about') ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isActive('/about') ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive('/about')) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/about')) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            About
          </Link>
          <Link
            to="/privacy"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 10,
              fontWeight: isPrivacyActive ? 500 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2B2B2B',
              opacity: isPrivacyActive ? 0.9 : 0.5,
              textDecoration: 'none',
              transition: 'opacity 300ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isPrivacyActive) {
                e.currentTarget.style.opacity = '0.7';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPrivacyActive) {
                e.currentTarget.style.opacity = '0.5';
              }
            }}
          >
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
