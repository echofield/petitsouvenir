# Shared traces (Supabase)

Run the migration below in **Supabase Dashboard → SQL Editor → New query**, then execute.

## 1. Table `shared_traces`

```sql
-- Petit Souvenir — Shared traces (quest trace + map share)
-- Unlisted share links; anon insert + select. No PII in payload.

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

CREATE POLICY "anon_insert_shared_traces" ON shared_traces
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_shared_traces_by_code" ON shared_traces
  FOR SELECT TO anon USING (true);
```

## 2. Storage bucket (optional, for photo uploads)

- **Dashboard → Storage → New bucket**
- Name: `souvenir-media`
- Public if you store direct URLs in `payload.media[].url`; otherwise private + signed URLs.

## 3. Verify

- Table `shared_traces` exists.
- RLS enabled; anon can `INSERT` and `SELECT`.
