/**
 * Hardware, device capability, and performance tier detection.
 * Designed to provide safe defaults without breaking visual richness.
 */

export function getPerformanceTier() {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isLowPower: false,
      prefersReducedMotion: false,
      dpr: [1, 1.5],
      particleTier: 'high',
      antialias: true
    };
  }

  const isMobile = window.innerWidth < 768 || (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
  const concurrency = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;

  // Weak/constrained device heuristic
  const isLowPower = concurrency <= 4 || memory <= 4 || isMobile;

  // DPR configuration: cap desktop to 1.5 max, mobile/low-power to 1.0 - 1.25
  const maxDpr = prefersReducedMotion ? 1.0 : isLowPower ? 1.2 : 1.5;
  const currentDpr = Math.min(window.devicePixelRatio || 1, maxDpr);

  return {
    isMobile,
    isLowPower,
    prefersReducedMotion,
    dpr: [1, Math.max(1, currentDpr)],
    particleTier: isLowPower || prefersReducedMotion ? 'low' : 'high',
    antialias: !isLowPower // avoid MSAA fillrate penalty on weaker mobile GPUs
  };
}

/**
 * Tracks document visibility so render loops can pause when tab is hidden.
 */
class VisibilityManager {
  constructor() {
    this.isVisible = typeof document !== 'undefined' ? document.visibilityState !== 'hidden' : true;
    this.listeners = new Set();

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        this.isVisible = document.visibilityState !== 'hidden';
        this.listeners.forEach((listener) => listener(this.isVisible));
      });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const visibilityManager = new VisibilityManager();
