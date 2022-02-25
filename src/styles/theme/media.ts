const getMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
} as const;

type BreakpointsKeys = keyof typeof breakpoints;
export type BreakpointsValues = typeof breakpoints[BreakpointsKeys];

export const media = {
  xs: getMediaQuery(breakpoints.xs),
  sm: getMediaQuery(breakpoints.sm),
  md: getMediaQuery(breakpoints.md),
  lg: getMediaQuery(breakpoints.lg),
  xl: getMediaQuery(breakpoints.xl),
};
