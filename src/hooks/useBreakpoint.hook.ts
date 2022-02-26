import { useEffect, useState, useCallback } from 'react';
import { BreakpointsValues } from 'styles/theme/media';

const DEFAULT_BREAKPOINT: BreakpointsValues = 768;

interface IUseBreakpoint {
  isBreakpoint: boolean;
}

// Check if window is less than passed breakpoint
export default (givenBreakpoint?: BreakpointsValues): IUseBreakpoint => {
  const breakpoint: BreakpointsValues = givenBreakpoint || DEFAULT_BREAKPOINT;

  const [isBreakpoint, setIBreakpoint] = useState(window.innerWidth < breakpoint);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIBreakpoint(window.innerWidth < breakpoint);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isBreakpoint,
  };
};
