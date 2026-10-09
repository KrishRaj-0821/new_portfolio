import React, { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Play,
  Layers,
  Sparkles,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filtered = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  // Subject-specific atmosphere styling
  const getAtmosphereMeta = (id) => {
    switch (id) {
      case 'tribal-scholar':
        return {
          themeText: 'Sovereign GovTech & AI Document Intelligence Atmosphere',
          accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
        };
      case 'aagam':
        return {
          themeText: 'Agricultural Intelligence & Advisory Atmosphere',
          accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
        };
      case 'docspot':
        return {
          themeText: 'Healthcare Scheduling & Workflow Atmosphere',
          accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
        };
      case 'vikaspath':
        return {
          themeText: 'Civic Progress & Roadmap Atmosphere',
          accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
        };
      case 'store247':
        return {
          themeText: 'Digital Commerce & Inventory Atmosphere',
          accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
        };
      case 'gurujii':
        return {
          themeText: 'Learning Roadmaps & Automated Scheduling Atmosphere',
          accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
        };
      case 'quicknotes':
        return {
          themeText: 'In-Tab Utility & Manifest V3 Atmosphere',
          accent: 'border-slate-500/30 text-slate-300 bg-slate-500/10'
        };
      default:
        return {
          themeText: 'System Engineering Atmosphere',
          accent: 'border-white/20 text-slate-300 bg-white/5'
        };
    }
  };

  return (
    <section
      id="projects-world"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10 border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAGE 02 // DISCOVER</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Discovered Artifacts
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Real systems, web applications, and utility extensions engineered with modular architecture, resilient backend flows, and intuitive user experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-dark-950 font-bold shadow-md'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Discovered Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((project) => {
          const atmosphere = getAtmosphereMeta(project.id);
          return (
            <div
              key={project.id}
              className={`group rounded-3xl surface-artifact p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${
                project.isFeatured ? 'border-purple-500/40 shadow-glow-purple' : ''
              }`}
            >
              {/* Background preview container */}
              <div className="space-y-4">
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-dark-950 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border ${atmosphere.accent}`}>
                      {project.badge}
                    </span>
                    <span className="mono-chip bg-dark-950/80 backdrop-blur-md text-slate-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Expand / Inspect button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-xl bg-dark-950/80 hover:bg-white text-slate-300 hover:text-dark-950 border border-white/15 flex items-center justify-center transition-all shadow-md group-hover:scale-110 cursor-pointer"
                    title="Inspect Artifact Details"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Atmosphere Tag */}
                <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                  // {atmosphere.themeText}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Nodes Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02]"
                  >
                    {project.hasVideo ? <Play className="w-3 h-3 fill-current" /> : <ExternalLink className="w-3.5 h-3.5" />}
                    <span>{project.hasVideo ? 'Demo' : 'Live App'}</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-400 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                  title="Inspect Details"
                >
                  Inspect
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Artifact Deep Dive Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
