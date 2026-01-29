-- Petit Souvenir — Partner participation requests
-- Anon insert only. No listing, no directory.

CREATE TABLE IF NOT EXISTS partner_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  website TEXT,
  contact_email TEXT NOT NULL,
  gesture TEXT NOT NULL,
  archetypes TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'accepted', 'declined'))
);

CREATE INDEX IF NOT EXISTS idx_partner_requests_created_at ON partner_requests(created_at DESC);

ALTER TABLE partner_requests ENABLE ROW LEVEL SECURITY;

-- Anon can insert only. No SELECT, UPDATE, DELETE for anon.
CREATE POLICY "anon_insert_partner_requests" ON partner_requests
  FOR INSERT TO anon WITH CHECK (true);
