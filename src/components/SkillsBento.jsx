import React from 'react';
import {
  Code,
  Layout,
  Database,
  Cpu,
  Terminal,
  Layers,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiGit,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiExpress,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiDjango,
  SiBootstrap,
  SiC,
  SiGooglechrome
} from 'react-icons/si';

export default function SkillsBento() {
  // Top floating icon dock matching technical profile
  const topDockIcons = [
    { name: 'Python', icon: SiPython, color: '#3776AB', bg: 'hover:bg-[#3776AB]/10' },
    { name: 'Django', icon: SiDjango, color: '#44B78B', bg: 'hover:bg-[#44B78B]/10' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C', bg: 'hover:bg-[#00599C]/10' },
    { name: 'C', icon: SiC, color: '#A8B9CC', bg: 'hover:bg-[#A8B9CC]/10' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bg: 'hover:bg-[#F7DF1E]/10' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', bg: 'hover:bg-[#38BDF8]/10' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', bg: 'hover:bg-[#E34F26]/10' },
    { name: 'CSS3', icon: SiCss, color: '#1572B6', bg: 'hover:bg-[#1572B6]/10' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', bg: 'hover:bg-[#7952B3]/10' },
    { name: 'Git', icon: SiGit, color: '#F05032', bg: 'hover:bg-[#F05032]/10' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', bg: 'hover:bg-white/10' },
    { name: 'Chrome DevTools', icon: SiGooglechrome, color: '#4285F4', bg: 'hover:bg-[#4285F4]/10' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', bg: 'hover:bg-white/10' },
    { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', bg: 'hover:bg-[#00C7B7]/10' },
  ];

  return (
    <section id="skills-section" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 border-t border-white/[0.08]">
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
          Skills that fuel my passion
        </h2>
        <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-mono text-slate-400 uppercase tracking-widest px-2">
          Languages, Modern Frameworks, GATE CS Foundations & Deployment Tools
        </p>

        {/* Floating Top Tech Icon Dock */}
        <div className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-full bg-dark-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-x-auto max-w-[95%] sm:max-w-full no-scrollbar">
          {topDockIcons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-0.5"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-dark-950 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/30 shadow-md shrink-0 ${item.bg}`}
                  style={{ color: item.color }}
                  title={item.name}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Hover Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-dark-950 text-[10px] font-mono text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-20">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Front-End Development (Span 7) */}
        <div className="md:col-span-7 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Frontend & Responsive UI</h3>
                  <span className="text-[11px] font-mono text-slate-400">Modern Layouts & DOM Manipulation</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                Primary
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Building accessible, mobile-first responsive interfaces and rich web apps using HTML5, CSS3, Tailwind CSS, Bootstrap, semantic markup, and precise DOM manipulation.
            </p>

            {/* Front-End Tech Pills with Icons */}
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: SiCss, color: '#1572B6' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
                { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'Responsive UI Design', icon: Layout, color: '#06B6D4' },
                { name: 'DOM Manipulation', icon: Code, color: '#10B981' },
              ].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200 hover:border-white/20 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Responsive & Mobile-First Component Engineering</span>
          </div>
        </div>

        {/* Card 2: Programming Languages (Span 5) */}
        <div className="md:col-span-5 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300 shadow-xl">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Languages</h3>
                  <span className="text-[11px] font-mono text-slate-400">Core Computing & Problem Solving</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase">
                Core
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Solid algorithmic problem-solving in C and C++ (STL) with 250+ LeetCode problems solved, backed by modern Python and JavaScript development.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { name: 'C', icon: SiC, color: '#A8B9CC' },
                { name: 'C++ (STL)', icon: SiCplusplus, color: '#00599C' },
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
              ].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-mono text-amber-400">
            <span>250+ LeetCode Algorithms Solved</span>
          </div>
        </div>

        {/* Card 3: Core Computer Science (GATE CS) (Span 12 - Hero Bento Feature) */}
        <div className="md:col-span-12 rounded-[28px] bg-gradient-to-r from-purple-950/30 via-dark-900 to-indigo-950/30 border border-purple-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-glow-purple">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                Academic Specialization & GATE CS Rigor
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              Core Computer Science Foundations
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Actively preparing for GATE CS with strong grounding in algorithms, operating systems, and computer science fundamentals. Structured focus across computing paradigms, algorithmic complexity, and relational databases.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Data Structures & Algorithms (DSA)',
                'Object-Oriented Programming (OOP)',
                'Operating Systems & Concurrency',
                'DBMS & Relational Query Planning',
                'Computer Networks & Protocols',
                'Theory of Computation (TOC)'
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 p-5 rounded-2xl bg-dark-950/80 border border-purple-500/30 text-center space-y-1">
            <span className="text-2xl font-extrabold font-heading text-purple-400">GATE CS</span>
            <span className="block text-[11px] font-mono text-slate-400">Active Academic Focus</span>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-purple-500/20 text-[10px] font-mono text-purple-300">
              VVIT CSE '28
            </span>
          </div>
        </div>

        {/* Card 4: Backend & Frameworks (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-emerald-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Backend & Frameworks</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Developing robust server-side logic, relational data architectures, and clean API endpoints with Python & Django.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Django', icon: SiDjango, color: '#44B78B' },
                { name: 'RESTful APIs', icon: Server, color: '#10B981' },
                { name: 'Python Backend', icon: SiPython, color: '#3776AB' },
              ].map((t, i) => {
                const Icon = t.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                    <Icon className="w-3 h-3" style={{ color: t.color }} />
                    <span>{t.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 5: Databases & Relational Management (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-blue-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">DBMS & Storage</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Designing normalized schemas, relational database models, dynamic appointment scheduling tables, and ACID transactions.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Relational DBMS', icon: Database, color: '#38BDF8' },
                { name: 'SQL & Queries', icon: Database, color: '#4169E1' },
                { name: 'Schema Design', icon: Layers, color: '#A78BFA' },
              ].map((t, i) => {
                const Icon = t.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                    <Icon className="w-3 h-3" style={{ color: t.color }} />
                    <span>{t.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 6: Tools & Deployment (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-purple-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Tools & Deployment</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Version control with Git/GitHub, developer tools, Chrome Extension APIs, and modern hosting on Vercel and Netlify.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Git', icon: SiGit, color: '#F05032' },
                { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
                { name: 'VS Code', icon: Code, color: '#007ACC' },
                { name: 'Chrome DevTools', icon: SiGooglechrome, color: '#4285F4' },
                { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
                { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
              ].map((t, i) => {
                const Icon = t.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300">
                    <Icon className="w-3 h-3" style={{ color: t.color }} />
                    <span>{t.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
