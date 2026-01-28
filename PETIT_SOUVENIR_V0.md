# Petit Souvenir v0 — Implementation Summary

## What Was Built

### 1. JSON Dataset (`src/data/petit-souvenir.v0.json`)
- Single source of truth for all profiles, places, rules, micro-quests
- 3 profiles: Bohemian (Le Flâneur Intime), Family (L'Explorateur Ludique), Night (Le Noctambule Esthète)
- 8 places per profile with full details:
  - `why_it_fits`, `micro_quest`, `proof_of_wonder`
  - `best_time`, `avoid`
  - `map_link`, `official_link`
  - Coordinates (x, y) for map pins

### 2. Three Core Screens

#### Profile Selection (`/souvenir`)
- Shows all 3 profiles with:
  - Name (e.g., "Le Flâneur Intime")
  - Promise (e.g., "Trouver une solitude habitée...")
  - Rules (expandable)
  - "Unlock" button (Stripe link) if locked
  - "Start" button if unlocked

#### Profile Map View (`/souvenir/:profile`)
- Fixed map with 6-8 pins (only if unlocked)
- List view on the side showing all places
- Lock state: shows "Unlock to reveal pins" if locked
- Place detail sheet (bottom sheet) with:
  - Full place details
  - Micro-quest
  - Proof of wonder
  - Best time / Avoid
  - "Open Maps" button
  - "Save" button
  - "Unlock proof" section (checkbox + note)

#### Place Detail Sheet
- Complete place information
- Proof tracking system (localStorage)
- Lock state: shows only title + promise if profile locked

### 3. Lock/Unlock System (`src/utils/souvenir-lock.ts`)
- localStorage-based unlock tracking
- Stripe payment link (hardcoded: `https://buy.stripe.com/test`)
- Test unlock: add `?unlock=true` to profile URL

### 4. Proof System (`src/utils/souvenir-proof.ts`)
- Track completion per place
- Store note (what did you notice?)
- Future: photo/audio support

## Files Created/Modified

### New Files
- `src/data/petit-souvenir.v0.json` — Complete dataset
- `src/data/petit-souvenir-types.ts` — TypeScript types + data loader
- `src/utils/souvenir-lock.ts` — Lock/unlock system
- `src/utils/souvenir-proof.ts` — Proof tracking
- `src/components/souvenir/PlaceDetailSheet.tsx` — Detailed place sheet
- `src/vite-env.d.ts` — JSON import type declaration

### Modified Files
- `src/pages/souvenir/SouvenirProfiles.tsx` — Profile selection with promise/rules/unlock
- `src/pages/souvenir/ProfileMapView.tsx` — Map view with lock state + detail sheet

## How to Test

### 1. Unlock a Profile (Testing)
Add `?unlock=true` to the profile URL:
```
http://localhost:3000/souvenir/bohemian?unlock=true
```

Or manually unlock in browser console:
```javascript
localStorage.setItem('petit-souvenir-unlocked', JSON.stringify(['bohemian']));
```

### 2. Test Proof System
1. Unlock a profile
2. Click a place pin
3. Scroll to "Unlock proof" section
4. Add a note
5. Click "Mark done"
6. Place shows ✓ in list view

### 3. Test Save to My Paris
1. Unlock a profile
2. Click a place
3. Click "Save"
4. Navigate to `/create` to see saved places

## Next Steps (24h Plan)

1. **Replace Stripe Link**: Update `STRIPE_PAYMENT_LINK` in `src/utils/souvenir-lock.ts` with actual Stripe payment link

2. **Stripe Webhook** (Optional for v0):
   - Create webhook endpoint
   - On successful payment, redirect to `/souvenir/:profile?unlock=true`
   - Or use Stripe Checkout success URL

3. **Photo Upload** (Future):
   - Add file input to proof section
   - Store as base64 or upload to storage
   - Display in proof completion view

4. **Export/Import** (Future):
   - Export My Paris as JSON
   - Import shared maps

## Payment Integration

For v0, the Stripe link opens in a new tab. After payment:
- Option A: Redirect to success URL with `?unlock=true`
- Option B: Use Stripe webhook to unlock server-side
- Option C: Manual unlock for testing (current)

## Data Structure

```typescript
interface SouvenirPlace {
  id: string;
  name: string;
  address: string;
  area: string;
  why_it_fits: string;
  micro_quest: string;
  proof_of_wonder: string;
  best_time: string;
  avoid: string;
  official_link: string;
  map_link: string;
  x: number; // normalized 800x600
  y: number;
}
```

## Lock State Flow

1. User visits `/souvenir` → sees 3 profiles
2. Clicks "View" → expands to show promise + rules
3. Clicks "Unlock" → opens Stripe payment (new tab)
4. After payment → redirects to `/souvenir/:profile?unlock=true`
5. Profile unlocks → map shows pins
6. User clicks pin → sees full detail sheet
7. User completes micro-quest → marks proof done

## Build & Deploy

```bash
npm run build  # ✅ Passes
npm run preview  # Test production build
```

Ready for Vercel deployment. All routes work with BrowserRouter.
