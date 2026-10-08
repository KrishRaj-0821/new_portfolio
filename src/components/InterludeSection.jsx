import React from 'react';

/**
 * InterludeSection:
 * A quiet reflective section in the middle of the journey.
 * Uses exact specified wording:
 * "INTERLUDE // CREATIVE CODE"
 * "I BUILD TO UNDERSTAND. I UNDERSTAND TO BUILD BETTER."
 * "Grounded in algorithms · Reinforced through competitive coding and GATE CS preparation"
 * With micro-creativity engineering line sketch and restrained atmospheric lighting.
 */
export default function InterludeSection() {
  return (
    <section
      id="cinematic-interlude"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center z-10 select-none overflow-hidden"
    >
      {/* Background Architectural Grid & Atmospheric Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[300px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Engineering Line Sketch Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 600 120"
          className="w-full h-auto text-purple-400 stroke-current fill-none"
        >
          {/* Main Line with branching node: •──────•─────• \ •────• */}
          <line x1="80" y1="60" x2="260" y2="60" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="80" cy="60" r="3.5" fill="#38bdf8" />
          <circle cx="260" cy="60" r="3.5" fill="#a78bfa" />

          <line x1="260" y1="60" x2="380" y2="60" strokeWidth="1.5" />
          <circle cx="380" cy="60" r="3.5" fill="#818cf8" />

          {/* Branch angle line */}
          <line x1="380" y1="60" x2="420" y2="30" strokeWidth="1.5" />
          <line x1="420" y1="30" x2="520" y2="30" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="520" cy="30" r="3.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Interlude Content Container */}
      <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
        {/* Header Label */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>INTERLUDE // CREATIVE CODE</span>
        </div>

        {/* Central Manifesto */}
        <div className="space-y-3 sm:space-y-4">
          {/* First Statement: slightly muted */}
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light font-heading text-slate-400 tracking-tight">
            I BUILD TO UNDERSTAND.
          </p>

          {/* Second Statement: brighter and visually dominant */}
          <p className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.12)]">
            I UNDERSTAND TO BUILD BETTER.
          </p>
        </div>

        {/* Supporting Foundation Text: Quiet */}
        <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wide max-w-xl mx-auto leading-relaxed">
          Grounded in algorithms · Reinforced through competitive coding and GATE CS preparation
        </p>

        {/* Technical Annotation & Dissolve Transition Indicator */}
        <div className="pt-8 flex flex-col items-center gap-2 text-[11px] font-mono text-slate-500">
          <span className="text-purple-400/80 tracking-wider">
            // build &rarr; understand &rarr; improve
          </span>
          <span className="text-slate-600 text-[10px] tracking-widest uppercase">
            THOUGHT &darr; CODE &darr; SYSTEM
          </span>
        </div>
      </div>
    </section>
  );
}
