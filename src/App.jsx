import React, { useState, useEffect, useCallback } from 'react';
import WorldCanvas from './components/3d/WorldCanvas';
import CinematicLoader from './components/CinematicLoader';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsConstellation from './components/SkillsConstellation';
import InterludeSection from './components/InterludeSection';
import SystemArchitecture from './components/SystemArchitecture';
import AboutArchiveSection from './components/AboutArchiveSection';
import ContactConvergence from './components/ContactConvergence';
import ContactModal from './components/ContactModal';
import TerminalModal from './components/TerminalModal';
import ScrollRocket from './components/ScrollRocket';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Monitor scroll progression [0..1] with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = Math.min(1, Math.max(0, window.scrollY / totalHeight));
            setScrollProgress(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global shortcut listener: Ctrl+K / Cmd+K for Cyber-Terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTerminalNavigate = useCallback((tab) => {
    setIsTerminalOpen(false);
    if (tab === 'projects') {
      document.getElementById('projects-world')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'skills') {
      document.getElementById('skills-constellation')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'architecture') {
      document.getElementById('system-architecture')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'resume' || tab === 'about') {
      document.getElementById('about-archive')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'contact') {
      document.getElementById('contact-convergence')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#050508] text-slate-200 font-sans antialiased selection:bg-purple-500/25 selection:text-purple-200 relative overflow-x-hidden">
      {/* 1. Cinematic Opening Sequence (Awakening) */}
      {isLoading && (
        <CinematicLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Persistent 3D WebGL Digital World */}
      <WorldCanvas scrollProgress={scrollProgress} />

      {/* Atmospheric Ambient Lighting Gradients */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* 3. Sticky Cinematic Navigation */}
      <HeaderNav
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 4. Continuous Narrative Content Stream */}
      <main className="w-full relative z-10">
        {/* Stage 01: Hero — The Builder (The Digital Workspace) */}
        <HeroSection
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Stage 02: Projects — Discovered Artifacts */}
        <ProjectsSection />

        {/* Stage 03: Skills — Spatial Technology Constellation */}
        <SkillsConstellation />

        {/* Stage 04: Cinematic Interlude // Creative Code */}
        <InterludeSection />

        {/* Stage 05: System Architecture — "I Think In Systems" */}
        <SystemArchitecture />

        {/* Stage 06: About — Digital Archive & History */}
        <AboutArchiveSection />

        {/* Stage 07: Contact — The End of the Journey (Convergence) */}
        <ContactConvergence
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
      </main>

      {/* Fast Contact Modal Popup (if initiated via top action buttons) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Integrated Cyber-Terminal Modal (Ctrl+K) */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={handleTerminalNavigate}
      />

      {/* Dynamic Scroll Progress Ring & Rocket */}
      <ScrollRocket />
    </div>
  );
}
