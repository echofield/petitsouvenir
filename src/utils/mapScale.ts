/**
 * Map scale — single source of truth for overlay coordinates.
 * Never inline map math. Every pin uses normToMap.
 */

export const VIEWBOX = {
  w: 2037.566,
  h: 1615.5,
};

export const NORMALIZED = {
  w: 800,
  h: 600,
};

export function normToMap(x: number, y: number) {
  return {
    x: x * (VIEWBOX.w / NORMALIZED.w),
    y: y * (VIEWBOX.h / NORMALIZED.h),
  };
}
