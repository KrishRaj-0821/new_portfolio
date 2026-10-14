import { useState, useEffect } from 'react';

/**
 * High-performance, single-listener scroll coordinator.
 * Prevents multiple global scroll listeners and decouples high-frequency
 * 3D canvas updates from React DOM tree re-renders.
 */

// Shared mutable ref for frame loops (e.g. Three.js / Canvas useFrame)
export const scrollProgressRef = { current: 0 };

const listeners = new Set();
let isListening = false;
let ticking = false;
let cachedTotalHeight = 0;

function calculateHeight() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return 0;
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function handleScrollEvent() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (cachedTotalHeight <= 0) {
        cachedTotalHeight = calculateHeight();
      }

      const currentScroll = window.scrollY || window.pageYOffset || 0;
      const progress = cachedTotalHeight > 0
        ? Math.min(1, Math.max(0, currentScroll / cachedTotalHeight))
        : 0;

      scrollProgressRef.current = progress;

      // Notify subscribed React components
      listeners.forEach((listener) => listener(progress));
      ticking = false;
    });
    ticking = true;
  }
}

function handleResize() {
  cachedTotalHeight = calculateHeight();
  handleScrollEvent();
}

export function startScrollCoordinator() {
  if (isListening || typeof window === 'undefined') return;
  isListening = true;
  cachedTotalHeight = calculateHeight();
  window.addEventListener('scroll', handleScrollEvent, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  handleScrollEvent();
}

export function subscribeToScroll(listener) {
  startScrollCoordinator();
  listeners.add(listener);
  // Immediate invocation with current value
  listener(scrollProgressRef.current);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Hook for React components that need re-rendering on scroll (e.g. ScrollRocket progress meter).
 * Components that only read during requestAnimationFrame (like 3D Canvas) should use
 * `scrollProgressRef.current` directly instead of this hook to avoid re-rendering.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(scrollProgressRef.current);

  useEffect(() => {
    return subscribeToScroll((newProgress) => {
      setProgress(newProgress);
    });
  }, []);

  return progress;
}
