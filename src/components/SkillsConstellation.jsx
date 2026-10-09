import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Code,
  Layout,
  Database,
  Cpu,
  Terminal,
  Bot,
  Sparkles,
  Layers,
  CheckCircle2,
  GitBranch,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiGit,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiC,
  SiDjango,
  SiGooglechrome,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiRedis,
  SiCelery,
  SiRailway
} from 'react-icons/si';

export default function SkillsConstellation() {
  const [activeCluster, setActiveCluster] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const clusters = [
    {
      id: 'languages',
      label: 'LANGUAGES',
      icon: Code,
      color: '#fbbf24',
      tagline: 'Algorithmic foundations & systems programming',
      skills: [
        { name: 'C++ (STL & DSA)', level: '90%', icon: SiCplusplus, color: '#00599c' },
        { name: 'C', level: '85%', icon: SiC, color: '#a8b9cc' },
        { name: 'Python', level: '88%', icon: SiPython, color: '#3776ab' },
        { name: 'JavaScript (ES6+)', level: '90%', icon: SiJavascript, color: '#f7df1e' },
      ]
    },
    {
      id: 'frontend',
      label: 'FRONTEND',
      icon: Layout,
      color: '#38bdf8',
      tagline: 'Responsive UI, semantic DOM & accessible architecture',
      skills: [
        { name: 'HTML5 & CSS3', level: '95%', icon: SiHtml5, color: '#e34f26' },
        { name: 'Tailwind CSS', level: '95%', icon: SiTailwindcss, color: '#38bdf8' },
        { name: 'Bootstrap', level: '88%', icon: SiBootstrap, color: '#7952b3' },
        { name: 'Responsive UI & DOM Manipulation', level: '92%', icon: Layout, color: '#06b6d4' },
      ]
    },
    {
      id: 'backend',
      label: 'BACKEND',
      icon: Database,
      color: '#10b981',
      tagline: 'RESTful architectures, MVC models & Django services',
      skills: [
        { name: 'Django', level: '85%', icon: SiDjango, color: '#44b78b' },
        { name: 'RESTful APIs', level: '88%', icon: Layers, color: '#10b981' },
        { name: 'Relational DB Management', level: '85%', icon: Database, color: '#38bdf8' },
        { name: 'Python Backend Architecture', level: '86%', icon: SiPython, color: '#3776ab' },
        { name: 'Redis', icon: SiRedis, color: '#dc382d' },
        { name: 'Celery', icon: SiCelery, color: '#a9cc37' },
      ]
    },
    {
      id: 'core-cs',
      label: 'CORE CS (GATE)',
      icon: Cpu,
      color: '#a855f7',
      tagline: 'Rigorous algorithmic complexity, OS, DBMS & networks',
      skills: [
        { name: 'Data Structures & Algorithms', level: '90%', icon: Cpu, color: '#c084fc' },
        { name: 'Object Oriented Programming', level: '90%', icon: Code, color: '#a855f7' },
        { name: 'Operating Systems & Concurrency', level: '85%', icon: Layers, color: '#818cf8' },
        { name: 'DBMS & Relational Query Planning', level: '85%', icon: Database, color: '#60a5fa' },
      ]
    },
    {
      id: 'tools',
      label: 'TOOLS & DEPLOY',
      icon: Terminal,
      color: '#f97316',
      tagline: 'Modern tooling, version control & cloud environments',
      skills: [
        { name: 'Git & GitHub Version Control', level: '92%', icon: SiGit, color: '#f05032' },
        { name: 'VS Code & Chrome DevTools', level: '92%', icon: SiGooglechrome, color: '#4285f4' },
        { name: 'Vercel & Netlify Hosting', level: '88%', icon: SiVercel, color: '#ffffff' },
        { name: 'Chrome APIs (Manifest V3)', level: '85%', icon: SiGooglechrome, color: '#00c7b7' },
        { name: 'Railway', icon: SiRailway, color: '#a855f7' },
      ]
    },
    {
      id: 'ai-automation',
      label: 'AI & AUTOMATION',
      icon: Bot,
      color: '#ec4899',
      tagline: 'Autonomous workflows, dynamic scheduling & agents',
      skills: [
        { name: 'Dynamic Study Schedulers', level: '88%', icon: Bot, color: '#f43f5e' },
        { name: 'Workflow Automation', level: '85%', icon: GitBranch, color: '#a855f7' },
        { name: 'Agentic AI Exploration', level: '82%', icon: Sparkles, color: '#ec4899' },
        { name: 'Agricultural AI Advisory', level: '86%', icon: Bot, color: '#10b981' },
      ]
    }
  ];

  // Track scroll position to update current active index
  const handleSliderScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.querySelector('.skills-slide-card');
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    const scrollPos = container.scrollLeft;
    const newIdx = Math.round(scrollPos / (cardWidth + gap));
    const clamped = Math.min(Math.max(0, newIdx), clusters.length - 1);
    setCurrentIndex(clamped);
    setActiveCluster(clusters[clamped]?.id || 'all');
  }, [clusters]);

  const scrollToCluster = (index, clusterId) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.querySelector('.skills-slide-card');
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth'
    });
    setCurrentIndex(index);
    setActiveCluster(clusterId || clusters[index]?.id);
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, currentIndex - 1);
    scrollToCluster(nextIdx, clusters[nextIdx]?.id);
  };

  const handleNext = () => {
    const nextIdx = Math.min(clusters.length - 1, currentIndex + 1);
    scrollToCluster(nextIdx, clusters[nextIdx]?.id);
  };

  return (
    <section
      id="skills-constellation"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10 border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STAGE 03 // BUILD • SPATIAL TECHNOLOGY CONSTELLATION SLIDER</span>
        </div>

        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
          How I Think &amp; What I Build With
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
          An interconnected constellation of algorithmic foundations, modern reactive UI libraries, backend architectures, and developer deployment pipelines.
        </p>

        {/* Constellation Central Star Indicator */}
        <div className="pt-3 flex justify-center">
          <div className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 border border-white/15 backdrop-blur-md text-xs font-mono text-slate-200 flex items-center gap-2.5 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold text-white tracking-wider">CENTER:</span>
            <span>KRISH — FULL STACK DEVELOPER</span>
          </div>
        </div>

        {/* Cluster Filter Buttons with Direct Slider Sync */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => scrollToCluster(0, 'all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
              activeCluster === 'all'
                ? 'bg-white text-dark-950 font-bold shadow-md'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
            }`}
          >
            All Clusters ({clusters.length})
          </button>
          {clusters.map((c, cIdx) => (
            <button
              key={c.id}
              onClick={() => scrollToCluster(cIdx, c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                activeCluster === c.id
                  ? 'bg-purple-600 text-white font-bold shadow-md'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spatial Constellation Slider Container */}
      <div className="relative">
        {/* Desktop floating prev/next navigation overlays */}
        <div className="hidden lg:flex items-center justify-between absolute inset-y-1/2 -left-4 -right-4 pointer-events-none z-20">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-2xl backdrop-blur-xl pointer-events-auto transition-all cursor-pointer ${
              currentIndex === 0
                ? 'bg-dark-950/40 border-white/5 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-dark-900/90 border-white/20 text-white hover:bg-white hover:text-dark-950 hover:scale-110'
            }`}
            title="Previous Cluster"
            aria-label="Previous Cluster"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= clusters.length - 1}
            className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-2xl backdrop-blur-xl pointer-events-auto transition-all cursor-pointer ${
              currentIndex >= clusters.length - 1
                ? 'bg-dark-950/40 border-white/5 text-slate-600 opacity-40 cursor-not-allowed'
                : 'bg-dark-900/90 border-white/20 text-white hover:bg-white hover:text-dark-950 hover:scale-110'
            }`}
            title="Next Cluster"
            aria-label="Next Cluster"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
        >
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.id}
                className="skills-slide-card w-[86vw] sm:w-[380px] md:w-[400px] lg:w-[420px] flex-shrink-0 snap-start group rounded-3xl surface-panel p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-xl relative overflow-hidden"
              >
                {/* Subtle orbital background glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: cluster.color }}
                />

                <div className="space-y-4">
                  {/* Cluster Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center border shadow-md"
                        style={{
                          backgroundColor: `${cluster.color}15`,
                          borderColor: `${cluster.color}35`,
                          color: cluster.color
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-heading text-white tracking-wide">
                          {cluster.label}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          SATELLITE NODE
                        </span>
                      </div>
                    </div>

                    <span className="mono-chip text-slate-400">
                      {cluster.skills.length} nodes
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {cluster.tagline}
                  </p>

                  {/* Sub-node skills */}
                  <div className="space-y-2.5 pt-2">
                    {cluster.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all flex items-center justify-between gap-3 text-xs font-mono"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <SkillIcon
                              className="w-4 h-4 shrink-0"
                              style={{ color: skill.color }}
                            />
                            <span className="text-slate-200 truncate">{skill.name}</span>
                          </div>
                          {skill.level ? (
                            <span className="text-slate-400 font-semibold shrink-0">
                              {skill.level}
                            </span>
                          ) : (
                            <span className="text-emerald-400/90 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                              Active Stack
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cluster Footer connection notice */}
                <div className="pt-5 mt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Competency</span>
                  </span>
                  <span className="text-purple-400/80">LINKED TO CORE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Slider Pagination & Controls Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
        {/* Cluster Position Indicator */}
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-purple-300 font-bold">
            CLUSTER {String(currentIndex + 1).padStart(2, '0')} / {String(clusters.length).padStart(2, '0')}
          </span>
          <span className="text-slate-500 uppercase">
            // {clusters[currentIndex]?.label}
          </span>
        </div>

        {/* Clickable Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {clusters.map((cluster, dotIdx) => (
            <button
              key={cluster.id}
              onClick={() => scrollToCluster(dotIdx, cluster.id)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-7 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-sm shadow-cyan-400/50'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Slide to ${cluster.label}`}
              aria-label={`Slide to ${cluster.label}`}
            />
          ))}
        </div>

        {/* Mobile / Screen Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-1 text-xs font-mono transition-all cursor-pointer ${
              currentIndex === 0
                ? 'bg-white/[0.02] border-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-white/[0.06] border-white/10 text-slate-200 hover:bg-white/15'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= clusters.length - 1}
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-1 text-xs font-mono transition-all cursor-pointer ${
              currentIndex >= clusters.length - 1
                ? 'bg-white/[0.02] border-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-white/[0.06] border-white/10 text-slate-200 hover:bg-white/15'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
