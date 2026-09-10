import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowUpRight,
  Github,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function ImpressiveWorks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filtered = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  // Sync scroll position with active card index
  const handleScroll = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const scrollLeft = track.scrollLeft;
    const cardWidth = track.firstElementChild?.clientWidth || 360;
    const gap = 24;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex >= 0 && newIndex < filtered.length) {
      setCurrentIndex(newIndex);
    }
  };

  const scrollToCard = (index) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const card = track.children[index];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
      });
      setCurrentIndex(index);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const slideNext = () => {
    if (currentIndex < filtered.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  // Reset scroll when category filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  // Mouse Drag-to-Scroll Handlers
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!trackRef.current) return;
    isDraggingRef.current = false;
    trackRef.current.style.cursor = 'grab';
  };

  return (
    <section id="impressive-works" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-end mb-8 sm:mb-12">
        <div className="md:col-span-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Impressive Works
          </h2>
        </div>

        <div className="md:col-span-6 md:text-right">
          <p className="text-[11px] sm:text-xs md:text-sm font-mono text-slate-400 uppercase tracking-widest max-w-lg md:ml-auto leading-relaxed">
            HERE IS A SELECTION OF PROJECTS THAT ENCAPSULATE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>
        </div>
      </div>

      {/* Filter Chips & Slider Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-white text-dark-950 font-bold shadow-lg'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Counter & Arrow Controls (Dedicated Horizontal Slider) */}
        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
          <div className="px-3.5 py-1.5 rounded-full bg-dark-900 border border-white/10 font-mono text-xs text-slate-300">
            <span className="text-purple-400 font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-slate-600 mx-1">/</span>
            <span>{String(filtered.length).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={slidePrev}
              disabled={currentIndex === 0}
              title="Previous Project"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'bg-white/[0.02] border-white/5 text-slate-600 cursor-not-allowed'
                  : 'bg-white/[0.05] border-white/10 text-white hover:bg-purple-600 hover:border-purple-500 shadow-lg'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={slideNext}
              disabled={currentIndex === filtered.length - 1}
              title="Next Project"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === filtered.length - 1
                  ? 'bg-white/[0.02] border-white/5 text-slate-600 cursor-not-allowed'
                  : 'bg-white/[0.05] border-white/10 text-white hover:bg-purple-600 hover:border-purple-500 shadow-lg'
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Horizontal Slider Track with Snap & Drag */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`w-[85vw] sm:w-[420px] md:w-[460px] shrink-0 snap-start rounded-3xl sm:rounded-[32px] bg-dark-900 border overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl ${
              project.isFeatured
                ? 'border-purple-500/40 hover:border-purple-400/60 shadow-glow-purple'
                : 'border-white/10 hover:border-white/25'
            }`}
          >
            <ProjectCardContent project={project} />
          </div>
        ))}
      </div>

      {/* Bottom Slider Pagination Dots & Navigation Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/[0.05]">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              title={`Jump to project ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Swipe / Drag Hint */}
        <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
          <span>← Drag or use arrows to view all {filtered.length} projects →</span>
        </div>
      </div>
    </section>
  );
}

function ProjectCardContent({ project }) {
  return (
    <>
      <div>
        {/* Preview Container matching reference preview styling */}
        <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-dark-900 p-4 sm:p-5 flex flex-col justify-between border-b border-white/[0.08]">
          {/* Background image preview */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
            }}
          />

          {/* Subtle gradient vignette to keep badges and tags easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-dark-950/60 pointer-events-none" />

          {/* Top Row Badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${
              project.isFeatured
                ? 'bg-amber-400 text-dark-950 shadow-md'
                : 'bg-dark-950/85 border border-white/15 text-slate-200'
            }`}>
              {project.badge}
            </span>

            <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-dark-950/80 border border-white/10 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Bottom Tags */}
          <div className="relative z-10 flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-dark-950/85 border border-white/15 text-[10px] font-mono text-slate-200 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Meta Information */}
        <div className="p-5 sm:p-7 md:p-8 space-y-2.5 sm:space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Action Links */}
      <div className="p-5 sm:p-7 md:p-8 pt-0 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>GitHub</span>
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Demo</span>
          </a>
        )}
      </div>
    </>
  );
}
