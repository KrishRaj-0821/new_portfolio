import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import ImpressiveWorks from './components/ImpressiveWorks';
import SkillsBento from './components/SkillsBento';
import CredentialsSection from './components/CredentialsSection';
import LetsTalkFooter from './components/LetsTalkFooter';
import ContactModal from './components/ContactModal';
import TerminalModal from './components/TerminalModal';
import ScrollRocket from './components/ScrollRocket';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Global Ctrl+K shortcut listener for terminal
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

  return (
    <div id="top" className="min-h-screen bg-dark-950 text-slate-200 font-sans antialiased selection:bg-blue-600/30 selection:text-blue-200 relative overflow-x-hidden">
      {/* Subtle ambient light glows */}
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Header Bar */}
      <HeaderNav
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Impressive Works (Projects Grid matching Reference) */}
        <ImpressiveWorks />

        {/* Skills that fuel my passion (Bento Grid matching Reference) */}
        <SkillsBento />

        {/* Academic Milestones & Experience */}
        <CredentialsSection />

        {/* Got a project in mind? Let's talk (Footer matching Reference) */}
        <LetsTalkFooter onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Terminal Modal (Ctrl+K) */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={(tab) => {
          setIsTerminalOpen(false);
          if (tab === 'projects') {
            document.getElementById('impressive-works')?.scrollIntoView({ behavior: 'smooth' });
          } else if (tab === 'contact') {
            setIsContactOpen(true);
          }
        }}
      />

      {/* Scroll-to-top rocket */}
      <ScrollRocket />
    </div>
  );
}
