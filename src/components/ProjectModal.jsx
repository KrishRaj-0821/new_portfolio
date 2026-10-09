import React from 'react';
import { X, ExternalLink, Github, Play, Calendar, Tag, ShieldCheck } from 'lucide-react';

/**
 * ProjectModal:
 * Deep-dive artifact inspector modal for any discovered project.
 * Shows high-resolution screenshot preview, atmosphere indicators,
 * tech stack breakdown, YouTube demo player (if available), and repository links.
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="mono-chip text-purple-300 border-purple-500/30">
                ARTIFACT // {project.id.toUpperCase()}
              </span>
              <span className="mono-chip text-slate-400">
                {project.category}
              </span>
              <span className="mono-chip text-emerald-400">
                {project.year}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-res Image / Video Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-950 aspect-video group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent pointer-events-none" />

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
            >
              {project.hasVideo ? <Play className="w-3.5 h-3.5 fill-current" /> : <ExternalLink className="w-3.5 h-3.5" />}
              <span>{project.hasVideo ? 'Watch Video Demo' : 'Launch Live App'}</span>
            </a>
          )}
        </div>

        {/* Narrative & Technical Architecture */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1.5">
              System Description &amp; Problem Solved
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Technical Architecture Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technologies &amp; Architecture Nodes
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-2 transition-all hover:border-purple-500/30"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-500/30 text-purple-200 hover:text-white font-mono text-xs flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{project.hasVideo ? 'Open Video Demo' : 'Launch Live Application'}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/15 text-slate-300 hover:text-white font-mono text-xs transition-colors"
          >
            Close Artifact
          </button>
        </div>
      </div>
    </div>
  );
}
