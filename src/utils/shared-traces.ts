/**
 * Petit Souvenir — Shared traces (quest trace + map share)
 * Build payloads, generate share code, insert/fetch via Supabase. No social features.
 */

import { supabase } from './supabase/client';
import { getBohemianProfile, getBohemianQuestById } from '../data/bohemian-types';
import { getQuestTrace } from './quest-trace';
import { resolveStepToPlace, resolvePlaceForShare, type ResolvedPlace } from './place-resolve';
import { loadResonance } from './souvenir-resonance';

export type SharedTraceStep = {
  idx: number;
  type: 'place' | 'slot' | 'companion';
  label: string;
  done: boolean;
  placeId?: string;
};

export type SharedTracePlace = {
  id?: string;
  title: string;
  address?: string;
  maps?: string;
};

export type SharedTracePayload = {
  version: 'v0';
  city: 'Paris';
  archetype: { id: string; name: string };
  quest: { id: string; title: string; feel: string };
  dateLabel?: string;
  startLabel?: string;
  steps: SharedTraceStep[];
  places: SharedTracePlace[];
  note?: string;
  metrics?: { completedSteps: number; totalSteps: number; dwellMs?: number };
  media?: Array<{ id: string; url: string; caption?: string; stepIdx?: number; placeId?: string }>;
};

export type SharedMapPayload = {
  version: 'v0';
  city: 'Paris';
  title: string;
  archetypeId?: string;
  places: SharedTracePlace[];
  metrics?: { savedCount: number; resonatedCount?: number };
  media?: Array<{ id: string; url: string; caption?: string; placeId?: string }>;
};

const ALNUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateShareCode(len: number = 8): string {
  let s = '';
  const n = ALNUM.length;
  for (let i = 0; i < len; i++) s += ALNUM[Math.floor(Math.random() * n)];
  return s;
}

function toResolvedPlace(r: ResolvedPlace): SharedTracePlace {
  const p: SharedTracePlace = { title: r.title };
  if (r.id != null) p.id = r.id;
  if (r.address != null) p.address = r.address;
  if (r.maps != null) p.maps = r.maps;
  return p;
}

export function buildSharedTracePayload(
  questId: string,
  archetypeId: string,
  opts?: { mediaUrls?: string[]; startLabel?: string }
): SharedTracePayload | null {
  const profile = getBohemianProfile();
  const quest = getBohemianQuestById(questId) ?? profile.quests.find((q) => q.id === questId);
  if (!quest) return null;
  const trace = getQuestTrace(questId);
  if (!trace) return null;

  const places: SharedTracePlace[] = [];
  const seen = new Set<string>();
  for (const s of quest.steps) {
    const r = resolveStepToPlace(s);
    const key = r.id ?? r.title;
    if (!seen.has(key)) {
      seen.add(key);
      places.push(toResolvedPlace(r));
    }
  }

  const steps: SharedTraceStep[] = quest.steps.map((s, idx) => {
    const r = resolveStepToPlace(s);
    return {
      idx,
      type: s.type,
      label: s.label,
      done: trace.checkedStepIdx.indexOf(idx) >= 0,
      placeId: r.id ?? undefined,
    };
  });

  const resonance = loadResonance().filter((e) => e.targetId === questId && e.type === 'quest');
  const dwellMs = resonance.length > 0
    ? resonance.reduce((sum, e) => sum + (e.dwellMs ?? 0), 0)
    : undefined;

  const completedSteps = trace.checkedStepIdx.length;
  const totalSteps = quest.steps.length;
  const metrics = { completedSteps, totalSteps, dwellMs };

  let dateLabel: string | undefined;
  if (trace.startedAt) {
    const d = new Date(trace.startedAt);
    dateLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  const payload: SharedTracePayload = {
    version: 'v0',
    city: 'Paris',
    archetype: { id: profile.profile.id, name: profile.profile.name },
    quest: { id: quest.id, title: quest.title, feel: quest.feel },
    dateLabel,
    startLabel: opts?.startLabel?.trim() || undefined,
    steps,
    places,
    note: trace.note ?? undefined,
    metrics,
  };

  if (opts?.mediaUrls != null && opts.mediaUrls.length > 0) {
    payload.media = opts.mediaUrls.slice(0, 5).map((url, i) => ({
      id: `m${i}`,
      url,
    }));
  }

  return payload;
}

export function buildSharedMapPayload(
  savedIds: string[],
  opts?: { title?: string; archetypeId?: string; mediaUrls?: string[] }
): SharedMapPayload {
  const places: SharedTracePlace[] = [];
  const seen = new Set<string>();
  for (const id of savedIds) {
    const r = resolvePlaceForShare(id);
    if (!r) continue;
    const key = r.id ?? r.title;
    if (seen.has(key)) continue;
    seen.add(key);
    places.push(toResolvedPlace(r));
  }

  const resonance = loadResonance();
  const resonatedCount = resonance.filter((e) => e.type === 'place' && savedIds.includes(e.targetId)).length;

  const payload: SharedMapPayload = {
    version: 'v0',
    city: 'Paris',
    title: opts?.title ?? 'My Paris',
    archetypeId: opts?.archetypeId,
    places,
    metrics: { savedCount: places.length, resonatedCount: resonatedCount > 0 ? resonatedCount : undefined },
  };

  if (opts?.mediaUrls != null && opts.mediaUrls.length > 0) {
    payload.media = opts.mediaUrls.slice(0, 5).map((url, i) => ({ id: `m${i}`, url }));
  }

  return payload;
}

export async function publishQuestTrace(
  questId: string,
  archetypeId: string,
  opts?: { mediaUrls?: string[]; startLabel?: string }
): Promise<{ shareCode: string; url: string }> {
  const payload = buildSharedTracePayload(questId, archetypeId, opts);
  if (!payload) throw new Error('Quest trace not found');
  const shareCode = generateShareCode(8);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const url = `${origin}/t/${shareCode}`;

  const { error } = await supabase.from('shared_traces').insert({
    share_code: shareCode,
    archetype_id: archetypeId,
    quest_id: questId,
    type: 'quest_trace',
    privacy: 'unlisted',
    payload,
  });

  if (error) throw new Error(error.message);
  return { shareCode, url };
}

export async function publishMapShare(
  savedIds: string[],
  opts?: { title?: string; archetypeId?: string; mediaUrls?: string[] }
): Promise<{ shareCode: string; url: string }> {
  const payload = buildSharedMapPayload(savedIds, opts);
  const shareCode = generateShareCode(8);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const url = `${origin}/t/${shareCode}`;

  const { error } = await supabase.from('shared_traces').insert({
    share_code: shareCode,
    archetype_id: opts?.archetypeId ?? 'bohemian',
    quest_id: null,
    type: 'map_share',
    privacy: 'unlisted',
    payload,
  });

  if (error) throw new Error(error.message);
  return { shareCode, url };
}

export type FetchedShared = {
  type: 'quest_trace' | 'map_share';
  payload: SharedTracePayload | SharedMapPayload;
};

export async function fetchSharedTrace(shareCode: string): Promise<FetchedShared | null> {
  const { data, error } = await supabase
    .from('shared_traces')
    .select('type, payload')
    .eq('share_code', shareCode.trim())
    .single();

  if (error || !data) return null;
  return { type: data.type as 'quest_trace' | 'map_share', payload: data.payload };
}
