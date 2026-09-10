import React from 'react';
import { ArrowUpRight, Download, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function HeaderNav({ onOpenTerminal, onOpenContact }) {
  return (
    <header className="w-full py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-white/[0.08] text-xs font-mono">
      {/* Brand / Name with Status */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a href="#" className="font-heading font-bold text-white text-sm sm:text-base md:text-lg tracking-tight hover:text-purple-400 transition-colors whitespace-nowrap">
          Krish Raj
        </a>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for work</span>
        </div>
      </div>

      {/* Center / Right Tagline */}
      <div className="hidden md:block text-slate-400 text-center tracking-wider uppercase text-[11px] px-2 truncate">
        Full Stack Developer & GATE CS Aspirant • Purnea, India
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <button
          onClick={onOpenTerminal}
          className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all text-xs"
          title="Terminal (Ctrl+K)"
        >
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>⌘K</span>
        </button>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-medium transition-all hover:scale-105 text-[11px] sm:text-xs"
        >
          <Download className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden xs:inline">Resume</span>
          <span>CV</span>
          <ArrowUpRight className="w-3 h-3 opacity-60 hidden xs:inline" />
        </a>

        <button
          onClick={onOpenContact}
          className="px-3 sm:px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md hover:shadow-blue-600/30 text-[11px] sm:text-xs whitespace-nowrap"
        >
          Let's Talk
        </button>
      </div>
    </header>
  );
}
