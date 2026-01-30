/**
 * Centralized nav labels and hrefs.
 * Single source of truth for Header, Footer, and MobileTabBar.
 */

export const NAV = {
  primary: [
    { label: 'Explore', href: '/' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'My Paris', href: '/create' },
  ],
  footer: [
    { label: 'Manifesto', href: '/about' },
    { label: 'Privacy', href: '/privacy' },
  ],
} as const;
