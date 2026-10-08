import React from 'react';
import {
  Terminal,
  FolderGit2,
  Cpu,
  Download,
  ArrowDown,
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  Linkedin
} from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ onOpenTerminal, onOpenContact }) {
  const scrollToProjects = () => {
    document.getElementById('projects-world')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    document.getElementById('skills-constellation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToArchitecture = () => {
    document.getElementById('system-architecture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-workspace"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Top Telemetry & Status Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 pb-6 border-b border-white/[0.06] text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase text-[11px]">System Online // Available</span>
          </div>
          <span className="text-slate-500 hidden md:inline">|</span>
          <span className="text-slate-400 text-[11px] hidden md:inline">
            VVIT CSE &apos;28 • GATE CS Aspirant
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span className="text-slate-500 font-mono">LOCATION:</span>
          <span className="text-slate-300">Purnea, Bihar, India</span>
          <span className="text-slate-600">•</span>
          <span className="text-purple-400">REMOTE READY</span>
        </div>
      </div>

      {/* Main Digital Workspace Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12 my-auto">
        {/* Left Column: Developer Narrative & Typography Hierarchy */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Label / Stage indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>STAGE 01 // THE DIGITAL WORKSPACE</span>
          </div>

          {/* Primary Name & Core Role */}
          <div className="space-y-3">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05]">
              KRISH RAJ
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-mono text-cyan-400">
              <span className="font-semibold">FULL STACK DEVELOPER</span>
              <span className="text-slate-600">/</span>
              <span className="text-purple-400">AI &amp; SYSTEM ENTHUSIAST</span>
            </div>
          </div>

          {/* Core Identity Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm max-w-2xl">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-white tracking-wide uppercase text-slate-100">
              BUILDING DIGITAL SYSTEMS THAT WORK.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Interactive Navigation Dock */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            <button
              onClick={scrollToProjects}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] cursor-pointer"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={scrollToArchitecture}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-mono text-xs flex items-center gap-2 transition-all hover:border-purple-500/30 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>System Flow</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-purple-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Open Terminal (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>⌘K</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </a>
          </div>

          {/* Social Profiles Quick Strip */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Signals:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/KrishRaj-0821"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: KrishRaj-0821"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/raj_kishu0821/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode: raj_kishu0821"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/krish-raj-4932a6322/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Portrait & Living System Artifact Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 shadow-2xl backdrop-blur-md overflow-hidden group">
            {/* Ambient Background Aura */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Technical Header inside frame */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>CORE_ID // KRISH_RAJ</span>
              </span>
              <span className="text-slate-500">B.TECH CSE &apos;28</span>
            </div>

            {/* Cutout Portrait with atmospheric depth */}
            <div className="relative h-[340px] xs:h-[380px] sm:h-[420px] w-full flex items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-dark-900/60 via-dark-950/80 to-dark-950/95 my-3 border border-white/[0.06]">
              {/* Subtle background tech grid behind avatar */}
              <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="h-[92%] w-auto object-contain object-bottom filter grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                }}
              />

              {/* Floating Overlay Badge at bottom of portrait */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Primary Focus</span>
                  <span className="text-white font-medium">Scalable Web &amp; Algorithms</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white font-semibold text-[11px] transition-colors"
                >
                  Connect
                </button>
              </div>
            </div>

            {/* Live Telemetry Footer */}
            <div className="pt-2 px-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>ALGORITHMIC THINKER</span>
              <span className="text-cyan-400/80">// 250+ LEETCODE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Verified Metrics Ribbon */}
      <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              <span className="gradient-text-accent">{stat.value}</span>
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Scroll Journey Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={scrollToProjects}
          className="group flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll to Travel The Environment
          </span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-purple-400" />
        </button>
      </div>
    </section>
  );
}
