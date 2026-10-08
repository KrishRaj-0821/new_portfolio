import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Download,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Calendar,
  CheckCircle2,
  Terminal,
  Cpu,
  Award
} from 'lucide-react';
import { educationData, experienceData, academicFocusData, personalInfo } from '../data/portfolioData';

/**
 * AboutArchiveSection:
 * Stage 06: Digital Archive & History
 * Displays Who is this developer, verified timeline markers, formal education scores,
 * industry internship, GATE CS academic rigor, and verified metrics.
 */
export default function AboutArchiveSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'experience', 'gate'

  return (
    <section
      id="about-archive"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10 border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAGE 05 // GROW • DIGITAL ARCHIVE &amp; PEDIGREE</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Who Is Krish Raj?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            A computer science undergraduate at VVIT Purnea with strong algorithmic discipline, combining rigorous GATE CS preparation with pragmatic full-stack web and backend engineering.
          </p>
        </div>

        {/* Official Verified Resume Download */}
        <div className="self-start md:self-auto">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/20 text-white font-mono text-xs transition-all hover:scale-105 shadow-lg"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>Open Verified CV (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>

      {/* Philosophy & Engineering Mindset Bento Box */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl surface-panel border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="mono-chip text-cyan-300 border-cyan-500/30">
              PHILOSOPHY // PROBLEM SOLVING FIRST
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Rooted in Algorithms, Oriented Toward Systems.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2.5 font-mono text-xs text-slate-300 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>250+ LeetCode Solved (C++ STL)</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Full-Stack Web &amp; REST APIs</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Active GATE CS Aspirant</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>100% Commitment &amp; Curiosity</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2-Column Digital Archive Grid: Education & Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* Education Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Chronology</span>
            </div>
            <span className="mono-chip text-slate-400 text-[10px]">Institutional Records</span>
          </div>

          <div className="space-y-4">
            {educationData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl surface-artifact border-white/10 hover:border-purple-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="mono-chip text-purple-300">
                    {item.period}
                  </span>
                  <span className="mono-chip text-emerald-400 border-emerald-500/30 font-bold">
                    {item.score.includes('%') ? `Score: ${item.score}` : item.score}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                  {item.degree}
                </h4>

                <p className="text-xs font-mono text-purple-400">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
              <Briefcase className="w-4 h-4" />
              <span>Engineering &amp; Industry Experience</span>
            </div>
            <span className="mono-chip text-slate-400 text-[10px]">Verified Log</span>
          </div>

          <div className="space-y-4">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl surface-artifact border-white/10 hover:border-cyan-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="mono-chip text-cyan-300">
                    {item.period}
                  </span>
                  <span className="mono-chip text-cyan-400 border-cyan-500/30 font-bold">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                  {item.role}
                </h4>

                <div className="text-xs font-mono text-cyan-400 flex items-center justify-between">
                  <span>{item.company}</span>
                  <span className="text-slate-500 font-normal">{item.location}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Academic Specialization Box: GATE CS Focus */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-dark-900 to-indigo-950/40 border border-purple-500/30 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="mono-chip text-purple-300 border-purple-500/30">
                  SPECIALIZATION // {academicFocusData.gate.badge}
                </span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>

              <h4 className="text-lg font-bold font-heading text-white">
                {academicFocusData.gate.title}
              </h4>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {academicFocusData.gate.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {academicFocusData.gate.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
