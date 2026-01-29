/**
 * Petit Souvenir — Quest trace state (localStorage)
 * Step-level state, note, started/completed. No social features.
 */

const STORAGE_KEY = 'souvenir:questTrace:v0';

export type QuestTrace = {
  questId: string;
  startedAt?: string;
  completedAt?: string;
  checkedStepIdx: number[];
  note?: string;
  updatedAt: string;
};

export type QuestTraceStore = Record<string, QuestTrace>;

function now(): string {
  return new Date().toISOString();
}

export function loadQuestTraceStore(): QuestTraceStore {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveStore(store: QuestTraceStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getQuestTrace(questId: string): QuestTrace | null {
  const store = loadQuestTraceStore();
  const t = store[questId];
  return t ?? null;
}

export function startQuest(questId: string): QuestTrace {
  const store = loadQuestTraceStore();
  const existing = store[questId];
  const trace: QuestTrace = existing
    ? { ...existing, updatedAt: now() }
    : {
        questId,
        startedAt: now(),
        checkedStepIdx: [],
        updatedAt: now(),
      };
  store[questId] = trace;
  saveStore(store);
  return trace;
}

export function toggleQuestStep(questId: string, stepIdx: number): QuestTrace {
  const store = loadQuestTraceStore();
  let trace = store[questId];
  if (!trace) {
    trace = startQuest(questId);
    store[questId] = trace;
  }
  const idx = trace.checkedStepIdx.indexOf(stepIdx);
  const checkedStepIdx =
    idx >= 0
      ? trace.checkedStepIdx.filter((i) => i !== stepIdx)
      : [...trace.checkedStepIdx, stepIdx].sort((a, b) => a - b);
  trace = { ...trace, checkedStepIdx, updatedAt: now() };
  store[questId] = trace;
  saveStore(store);
  return trace;
}

export function completeQuest(questId: string): QuestTrace {
  const store = loadQuestTraceStore();
  let trace = store[questId];
  if (!trace) {
    trace = startQuest(questId);
    store[questId] = trace;
  }
  trace = { ...trace, completedAt: now(), updatedAt: now() };
  store[questId] = trace;
  saveStore(store);
  return trace;
}

export function setQuestNote(questId: string, note: string): QuestTrace {
  const store = loadQuestTraceStore();
  let trace = store[questId];
  if (!trace) {
    trace = startQuest(questId);
    store[questId] = trace;
  }
  trace = { ...trace, note: note.trim() || undefined, updatedAt: now() };
  store[questId] = trace;
  saveStore(store);
  return trace;
}

/** Import a quest trace from shared payload. Overwrites existing trace for questId. */
export function importQuestTrace(
  questId: string,
  opts: { checkedStepIdx: number[]; note?: string }
): QuestTrace {
  const store = loadQuestTraceStore();
  const trace: QuestTrace = {
    questId,
    startedAt: now(),
    completedAt: now(),
    checkedStepIdx: opts.checkedStepIdx,
    note: opts.note?.trim() || undefined,
    updatedAt: now(),
  };
  store[questId] = trace;
  saveStore(store);
  return trace;
}
