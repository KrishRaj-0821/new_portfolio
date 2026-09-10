import React from 'react';
import {
  ArrowDownRight,
  ArrowDown,
  Terminal,
  Box,
  FileText,
  Maximize2,
  Linkedin
} from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection({ onOpenTerminal, onOpenContact }) {
  const scrollToWorks = () => {
    document.getElementById('impressive-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-12 sm:pb-16 md:py-16">
      {/* Studio Banner Frame (Fully Responsive across all viewport widths) */}
      <div
        className="relative w-full h-[470px] xs:h-[520px] sm:h-[600px] md:h-[660px] lg:h-[700px] rounded-3xl sm:rounded-[36px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between"
        style={{
          background: 'radial-gradient(circle at 50% 32%, #868a91 0%, #686c73 55%, #54575d 100%)'
        }}
      >
        {/* Banner Top Bar */}
        <div className="relative z-30 p-4 sm:p-6 md:p-10 flex items-start justify-between gap-2 sm:gap-4">
          {/* Top-Left: © Code by Krish */}
          <div className="text-[11px] sm:text-xs md:text-sm font-sans font-medium text-white/90 tracking-wide select-none whitespace-nowrap">
            © Code by Krish
          </div>

          {/* Top-Right: Editorial Multi-line Statement */}
          <div className="text-[10px] sm:text-[11px] md:text-xs font-sans text-white/85 max-w-[180px] xs:max-w-[220px] sm:max-w-xs text-right leading-relaxed select-none">
            Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
          </div>
        </div>

        {/* Right Subtitle & Angled Arrow (Visible on tablet & desktop, cleanly positioned) */}
        <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-[45%] -translate-y-1/2 z-30 text-white select-none hidden sm:block">
          <div className="flex flex-col items-start space-y-2 sm:space-y-3">
            <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
            <div className="font-sans text-xs sm:text-sm md:text-base font-normal leading-snug text-white/90">
              <span className="block font-medium">Creative</span>
              <span className="block text-white/80">Designer & Developer</span>
            </div>
          </div>
        </div>

        {/* Cutout Avatar (Layer 1: Behind the Text) */}
        <div className="absolute bottom-0 inset-x-0 z-10 flex justify-center pointer-events-none px-2">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="h-[390px] xs:h-[440px] sm:h-[510px] md:h-[580px] lg:h-[640px] max-h-[92%] w-auto object-contain object-bottom filter grayscale contrast-115 brightness-100 drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] select-none"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
            }}
          />
        </div>

        {/* Giant Typography (Layer 2: In Front of the Avatar) */}
        <div className="absolute bottom-1 sm:bottom-4 inset-x-0 z-20 pointer-events-none select-none flex items-end justify-center overflow-hidden px-2">
          <h1 className="text-[17vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] font-extrabold font-heading text-white tracking-tighter leading-none whitespace-nowrap drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
            e Developer &
          </h1>
        </div>

        {/* Floating Dock at Bottom Center of Portrait */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-[95%]">
          <div className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/5 shadow-2xl flex items-center gap-1.5 sm:gap-2.5 md:gap-3 overflow-x-auto no-scrollbar">

            {/* Terminal */}
            <button
              onClick={onOpenTerminal}
              title="Open Terminal (Ctrl+K)"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] hover:bg-purple-500/30 text-slate-300 hover:text-purple-300 flex items-center justify-center transition-all shrink-0"
            >
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Projects */}
            <button
              onClick={scrollToWorks}
              title="Impressive Works"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] hover:bg-cyan-500/30 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all shrink-0"
            >
              <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* CV / Resume */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume (Google Drive)"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-white flex items-center justify-center transition-all shrink-0"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mini Profile Headshot */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-cyan-400/80 bg-dark-950 p-0.5 shadow-md shrink-0">
              <img
                src={personalInfo.avatar}
                alt="Mini Avatar"
                className="w-full h-full object-cover rounded-full grayscale"
              />
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/krish-raj-4932a6322/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] hover:bg-blue-600/30 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all shrink-0"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/KrishRaj-0821"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all shrink-0"
            >
              <SiGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/raj_kishu0821/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] hover:bg-amber-500/30 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all shrink-0"
            >
              <SiLeetcode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Bottom-Right Expand Button (Hidden on very narrow mobile to avoid overlap) */}
        <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 md:right-10 z-30 hidden xs:block">
          <button
            onClick={scrollToWorks}
            title="Explore Works"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-black/80 hover:bg-white hover:text-dark-950 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 shadow-xl group"
          >
            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Editorial Manifesto Below Banner */}
      <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start border-t border-white/[0.08] pt-8 sm:pt-10">
        <div className="md:col-span-8">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-slate-200 leading-relaxed font-sans max-w-2xl">
            Driven by curiosity and a love for engineering, I create <span className="text-white font-semibold underline decoration-white/30 underline-offset-4">simple, functional, and visually striking</span> digital experiences. As a B.Tech CSE student at VVIT and GATE CS aspirant, I'm always learning and exploring new ideas.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col md:items-end justify-between self-stretch">
          <button
            onClick={scrollToWorks}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <span>More about my work</span>
            <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 group-hover:bg-white group-hover:text-dark-950 flex items-center justify-center transition-all">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>

          <div className="mt-4 sm:mt-6 md:mt-0 text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            Based in Purnea, Bihar • Open to remote roles
          </div>
        </div>
      </div>
    </section>
  );
}
