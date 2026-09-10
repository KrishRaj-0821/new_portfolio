import React from 'react';
import { GraduationCap, Briefcase, Download, ArrowUpRight, Award, CheckCircle } from 'lucide-react';
import { educationData, experienceData, personalInfo } from '../data/portfolioData';

export default function CredentialsSection() {
  return (
    <section id="credentials-section" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 border-t border-white/[0.08]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
        <div className="md:col-span-7">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Academic & Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-widest">
            Verified Educational Milestones, Scores & Industry Internship
          </p>
        </div>

        <div className="md:col-span-5 md:text-right">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/20 text-white font-mono text-xs transition-all hover:scale-105 shadow-lg"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Download Official Resume</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </div>
      </div>

      {/* 2-Column Grid: Education & Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2 pb-2 text-xs font-mono uppercase tracking-wider text-purple-400">
            <GraduationCap className="w-4 h-4" />
            <span>Formal Education</span>
          </div>

          <div className="space-y-4">
            {educationData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-dark-900 border border-white/10 p-6 space-y-3 hover:border-purple-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-purple-300">
                    {item.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-400">
                    {item.score.includes('%') ? `Score: ${item.score}` : item.score}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white">
                  {item.degree}
                </h3>

                <p className="text-xs text-purple-400 font-medium">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & CV Banner Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2 pb-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <Briefcase className="w-4 h-4" />
            <span>Industry & Projects</span>
          </div>

          <div className="space-y-4">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-dark-900 border border-white/10 p-6 space-y-3 hover:border-cyan-500/30 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-300">
                    {item.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono font-bold text-cyan-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white">
                  {item.role}
                </h3>

                <p className="text-xs text-cyan-400 font-medium flex items-center justify-between">
                  <span>{item.company}</span>
                  <span className="text-slate-500 font-normal">{item.location}</span>
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Official CV Callout Box */}
            <div className="rounded-[28px] bg-gradient-to-r from-purple-950/40 to-blue-950/40 border border-purple-500/30 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono uppercase tracking-wider mb-2">
                  Verified Documentation
                </span>
                <h4 className="text-xl font-bold font-heading text-white">
                  Complete Curriculum Vitae (PDF)
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Comprehensive academic records, institutional transcripts, verified references, and project summaries formatted for recruiter review.
                </p>
              </div>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-white text-dark-950 font-bold font-mono text-xs hover:bg-slate-200 transition-all shadow-lg self-start"
              >
                <Download className="w-4 h-4 text-purple-600" />
                <span>Open Google Drive Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
