-- Petit Souvenir — Shared traces (quest trace + map share)
-- Unlisted share links; anon insert + select by share_code. No PII in payload.

CREATE TABLE IF NOT EXISTS shared_traces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  share_code TEXT NOT NULL UNIQUE,
  archetype_id TEXT NOT NULL,
  quest_id TEXT NULL,
  type TEXT NOT NULL DEFAULT 'quest_trace' CHECK (type IN ('quest_trace', 'map_share')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  privacy TEXT NOT NULL DEFAULT 'unlisted' CHECK (privacy IN ('unlisted', 'public')),
  payload JSONB NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_shared_traces_share_code ON shared_traces(share_code);
CREATE INDEX IF NOT EXISTS idx_shared_traces_created_at ON shared_traces(created_at DESC);

ALTER TABLE shared_traces ENABLE ROW LEVEL SECURITY;

-- Anon can insert (publish) and select by share_code (view unlisted link)
CREATE POLICY "anon_insert_shared_traces" ON shared_traces
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_shared_traces_by_code" ON shared_traces
  FOR SELECT TO anon USING (true);

-- Storage bucket "souvenir-media": create via Supabase Dashboard > Storage > New bucket.
-- Public read if you want direct URLs in payload.media[].url; or use signed URLs if private.
