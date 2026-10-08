import React from 'react';
import { ArrowUpRight, Download, Terminal, Sparkles, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function HeaderNav({ onOpenTerminal, onOpenContact }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-dark-950/70 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
        {/* Brand with Online Beacon */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-heading font-bold text-white text-base sm:text-lg tracking-tight hover:text-purple-400 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>KRISH RAJ</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] whitespace-nowrap">
            <span>CORE // ONLINE</span>
          </div>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-5 text-slate-400 text-[11px] uppercase tracking-wider">
          <button
            onClick={() => scrollTo('hero-workspace')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Workspace
          </button>
          <button
            onClick={() => scrollTo('projects-world')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Artifacts
          </button>
          <button
            onClick={() => scrollTo('skills-constellation')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Constellation
          </button>
          <button
            onClick={() => scrollTo('system-architecture')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Architecture</span>
          </button>
          <button
            onClick={() => scrollTo('about-archive')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Archive
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-purple-300 hover:bg-white/[0.08] transition-all text-xs cursor-pointer"
            title="Open Cyber-Terminal (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>⌘K</span>
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white font-medium transition-all text-xs"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <button
            onClick={() => scrollTo('contact-convergence')}
            className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md hover:shadow-blue-600/30 text-xs whitespace-nowrap cursor-pointer"
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
}
