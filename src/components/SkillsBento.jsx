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
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiLinux,
  SiDocker,
  SiGithub
} from 'react-icons/si';

export default function SkillsBento() {
  // Top floating icon dock matching reference
  const topDockIcons = [
    { name: 'React', icon: SiReact, color: '#61DAFB', bg: 'hover:bg-[#61DAFB]/10' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', bg: 'hover:bg-[#38BDF8]/10' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bg: 'hover:bg-[#F7DF1E]/10' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', bg: 'hover:bg-[#5FA04E]/10' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C', bg: 'hover:bg-[#00599C]/10' },
    { name: 'Python', icon: SiPython, color: '#3776AB', bg: 'hover:bg-[#3776AB]/10' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', bg: 'hover:bg-[#47A248]/10' },
    { name: 'Git', icon: SiGit, color: '#F05032', bg: 'hover:bg-[#F05032]/10' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', bg: 'hover:bg-white/10' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', bg: 'hover:bg-[#3178C6]/10' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', bg: 'hover:bg-[#4169E1]/10' },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 border-t border-white/[0.08]">
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
          Skills that fuel my passion
        </h2>
        <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-mono text-slate-400 uppercase tracking-widest px-2">
          Technological proficiency, GATE CS academic rigor, and intelligent systems.
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
                  <h3 className="text-lg font-bold font-heading text-white">Front-End Engineering</h3>
                  <span className="text-[11px] font-mono text-slate-400">Reactive Interfaces & SPAs</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                Primary
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Engineering high-performance client architectures with modular state, accessible semantic DOM, reactive component models, and blazing-fast client rendering.
            </p>

            {/* Front-End Tech Pills with Icons */}
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: SiCss, color: '#1572B6' },
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
            <span>Production Grade Component Systems</span>
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
                  <span className="text-[11px] font-mono text-slate-400">Problem Solving & Scripting</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase">
                Core
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Strong competitive programming foundation in C++ with 250+ LeetCode problems solved, complemented by modern JavaScript and Python scripting.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { name: 'C++ (STL)', icon: SiCplusplus, color: '#00599C' },
                { name: 'Python', icon: SiPython, color: '#3776AB' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
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
              Structured preparation covering low-level computing paradigms, algorithmic complexity analysis, concurrency models, ACID storage principles, and network routing layers.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Data Structures & Algorithms',
                'Operating Systems & Concurrency',
                'Relational DBMS & Query Planning',
                'Computer Networks & TCP/IP',
                'Theory of Computation (TOC)',
                'Object-Oriented Design (OOP)'
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

        {/* Card 4: Back-End Development (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-emerald-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Backend & APIs</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Constructing scalable RESTful architectures, secure JWT authentication, and structured request pipelines.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
                { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
                { name: 'REST APIs', icon: Server, color: '#10B981' },
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

        {/* Card 5: Database Management (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-blue-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Databases</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Designing efficient relational and document schemas with indexing, data normalization, and aggregations.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
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

        {/* Card 6: Cloud, Tools & AI (Span 4) */}
        <div className="md:col-span-4 rounded-[28px] bg-dark-900 border border-white/10 p-6 sm:p-7 flex flex-col justify-between group hover:border-purple-500/30 transition-all shadow-xl">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Cloud, Tools & AI</h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Modern version control, cloud deployment pipelines, API testing, and Agentic AI workflow integration.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Git', icon: SiGit, color: '#F05032' },
                { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
                { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
                { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
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
