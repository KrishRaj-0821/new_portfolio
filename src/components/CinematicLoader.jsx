import React, { useState, useEffect } from 'react';

/**
 * CinematicLoader:
 * Full-screen awakening sequence (2.4s max).
 * Sequence:
 * _ (blinking cursor)
 * INITIALIZING...
 * KRISH RAJ / DIGITAL ENGINEERING UNIVERSE
 * SYSTEM ........ ONLINE
 * CORE .......... READY
 * WORLD ......... LOADING
 * Dissolves smoothly into the main Hero. Runs once on initial load.
 */
export default function CinematicLoader({ onComplete }) {
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete?.();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 400);   // INITIALIZING...
    const t2 = setTimeout(() => setStep(2), 950);   // KRISH RAJ + UNIVERSE
    const t3 = setTimeout(() => setStep(3), 1600);  // SYSTEM / CORE / WORLD
    const t4 = setTimeout(() => setIsFadingOut(true), 2400); // Begin dissolve
    const t5 = setTimeout(() => onComplete?.(), 2900); // Finish unmount

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        setIsFadingOut(true);
        setTimeout(() => onComplete?.(), 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading digital environment"
      role="status"
      aria-live="polite"
      onClick={() => {
        setIsFadingOut(true);
        setTimeout(() => onComplete?.(), 300);
      }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508] text-slate-300 font-mono select-none transition-opacity duration-700 ease-out cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Architectural Grid & Subtle Atmosphere */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Awakening Terminal Output Container */}
      <div className="relative z-10 max-w-md w-full px-8 space-y-6">
        {/* Top Minimal Status Indicator */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>ENV // AWAKENING</span>
          </span>
          <span className="text-[10px] text-slate-600">v2.4.0</span>
        </div>

        {/* Central Sequence */}
        <div className="min-h-[140px] flex flex-col justify-center space-y-3">
          {step === 0 && (
            <div className="text-sm text-slate-400">
              <span className="animate-pulse inline-block w-2.5 h-4 bg-slate-300 align-middle ml-1" />
            </div>
          )}

          {step >= 1 && (
            <div className="text-xs text-slate-400 tracking-widest flex items-center gap-2 animate-fade-in">
              <span className="text-purple-400">&gt;</span>
              <span>INITIALIZING...</span>
            </div>
          )}

          {step >= 2 && (
            <div className="space-y-1 py-1 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                KRISH RAJ
              </h1>
              <p className="text-[11px] sm:text-xs text-cyan-400/90 tracking-widest uppercase">
                DIGITAL ENGINEERING UNIVERSE
              </p>
            </div>
          )}

          {step >= 3 && (
            <div className="space-y-1.5 pt-2 text-xs text-slate-400 border-t border-white/[0.08] animate-fade-in">
              <div className="flex justify-between items-center font-mono">
                <span>SYSTEM</span>
                <span className="text-slate-600">...............</span>
                <span className="text-emerald-400 font-semibold">ONLINE</span>
              </div>
              <div className="flex justify-between items-center font-mono">
                <span>CORE</span>
                <span className="text-slate-600">...............</span>
                <span className="text-cyan-400 font-semibold">READY</span>
              </div>
              <div className="flex justify-between items-center font-mono">
                <span>WORLD</span>
                <span className="text-slate-600">...............</span>
                <span className="text-purple-400 font-semibold animate-pulse">LOADING</span>
              </div>
            </div>
          )}
        </div>

        {/* Subtle Skip Hint */}
        <div className="text-center pt-4">
          <span className="text-[10px] text-slate-600 tracking-widest uppercase hover:text-slate-400 transition-colors">
            Click anywhere or press Esc to enter
          </span>
        </div>
      </div>
    </aside>
  );
}
