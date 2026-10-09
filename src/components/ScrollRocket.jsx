import React, { useState, useEffect } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export default function ScrollRocket() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsLaunching(false);
    }, 950);
  };

  if (!isVisible && !isLaunching) return null;

  const size = 60;
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      {/* Flight Deck HUD Telemetry Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 pointer-events-none transition-all duration-300 ${
          isHovered || isLaunching
            ? 'opacity-100 -translate-y-1 scale-100'
            : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <div className="px-3 py-1.5 rounded-xl bg-dark-950/95 border border-purple-500/40 backdrop-blur-xl shadow-2xl shadow-purple-950/50 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-slate-400">APOGEE:</span>
          <span className="font-bold text-white tracking-wider">{Math.round(scrollProgress)}%</span>
          <span className="text-purple-400/80 text-[10px]">▲ LAUNCH</span>
        </div>
      </div>

      {/* Main Interactive Rocket Pod Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Launch Rocket To Orbit (Top)"
        aria-label="Scroll to top"
        className={`relative w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#090a12]/90 backdrop-blur-xl border border-white/15 shadow-2xl transition-all duration-500 group cursor-pointer ${
          isLaunching
            ? '-translate-y-[120vh] scale-75 opacity-0 transition-all duration-1000 ease-in pointer-events-none'
            : 'hover:border-purple-500/60 hover:shadow-glow-purple hover:scale-110 active:scale-95'
        }`}
      >
        {/* Pulsating Orbital Atmosphere Halo */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-cyan-500/10 to-pink-500/20 blur-md pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-100'
          }`}
        />

        {/* Circular Progress Meter Ring */}
        <svg
          width={size}
          height={size}
          className="absolute inset-0 -rotate-90 pointer-events-none"
        >
          <defs>
            <linearGradient id="rocketProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {/* Background Track Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-white/[0.08]"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Dynamic Progress Orbit */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#rocketProgressGrad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-150"
          />
        </svg>

        {/* Inner Pod Bezel */}
        <div className="absolute inset-1.5 rounded-full bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none border border-white/[0.05]" />

        {/* Rocket Icon Core with Thruster Dynamics */}
        <div className="relative flex flex-col items-center justify-center transition-transform duration-300">
          <Rocket
            className={`w-6 h-6 transition-all duration-300 ${
              isLaunching
                ? 'text-cyan-300 -translate-y-1.5 scale-110 animate-bounce'
                : isHovered
                ? 'text-white -translate-y-1 -rotate-12 scale-110 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                : 'text-purple-400 group-hover:text-purple-300'
            }`}
          />

          {/* Engine Exhaust Thruster Plasma Flare */}
          <div
            className={`absolute -bottom-2 transition-all duration-300 flex flex-col items-center pointer-events-none ${
              isHovered || isLaunching ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            {/* Plasma Cone */}
            <div className="w-2.5 h-3.5 bg-gradient-to-b from-cyan-400 via-amber-400 to-red-500 rounded-b-full blur-[0.5px] animate-pulse" />
            <div className="w-1.5 h-2 bg-white rounded-b-full -mt-3.5 blur-[0.2px]" />
          </div>
        </div>

        {/* Ambient Launch Blast Trails (Visible during launch) */}
        {isLaunching && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
            <div className="w-3 h-16 bg-gradient-to-b from-cyan-400 via-amber-500 to-transparent blur-[2px] rounded-full animate-pulse" />
            <div className="w-6 h-24 bg-gradient-to-b from-purple-500/60 via-pink-500/30 to-transparent blur-md -mt-12 rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
}
