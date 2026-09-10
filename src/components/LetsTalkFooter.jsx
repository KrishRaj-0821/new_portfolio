import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function LetsTalkFooter({ onOpenContact }) {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-12 border-t border-white/[0.08] overflow-hidden">
      {/* Top CTA Row */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-10 sm:pb-14 border-b border-white/[0.08]">
        <div>
          <span className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2 sm:mb-3">
            That's all for now
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-white tracking-tight leading-tight sm:leading-none">
            Got a project in mind? <br />
            <span className="text-slate-300">Let's talk</span>
          </h2>
        </div>

        {/* Large Cobalt Blue Circular "Get in touch" Button */}
        <div className="self-start md:self-auto shrink-0 mt-2 md:mt-0">
          <button
            onClick={onOpenContact}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-500 shadow-2xl hover:shadow-blue-600/50 hover:scale-105 active:scale-95 text-center p-3 sm:p-4 border border-blue-400/30 group"
          >
            <div className="space-y-1">
              <span className="block">Get in touch</span>
              <ArrowUpRight className="w-4 h-4 mx-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Direct Contact Details Line */}
      <div className="py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-slate-400 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Email</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-purple-400 transition-colors text-xs sm:text-sm"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Phone</span>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="text-white hover:text-cyan-400 transition-colors text-xs sm:text-sm"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Location</span>
            <span className="text-white text-xs sm:text-sm">Purnea, Bihar, India</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://github.com/KrishRaj-0821"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
          >
            GitHub
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://leetcode.com/u/raj_kishu0821/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-amber-400"
          >
            LeetCode
          </a>
        </div>
      </div>

      {/* Giant Signature Typography Banner (Perfect mobile responsiveness) */}
      <div className="pt-8 sm:pt-12 select-none">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs sm:text-sm font-mono text-slate-400 tracking-wider lowercase">
            your dedicated software builder
          </span>

          <a
            href="#top"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-dark-950 hover:bg-slate-200 flex items-center justify-center transition-all hover:scale-110 shadow-lg shrink-0"
            title="Back to top"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
          </a>
        </div>

        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[14vw] font-extrabold font-heading text-white tracking-tighter leading-none uppercase select-none break-words max-w-full">
          Krishhhhhh
        </h1>
      </div>

      {/* Copyright & Sub-footer */}
      <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500 text-center sm:text-left">
        <span>© {new Date().getFullYear()} Krish Raj. All rights reserved.</span>
        <span>Built with React 18 & Tailwind CSS v3</span>
      </div>
    </footer>
  );
}
