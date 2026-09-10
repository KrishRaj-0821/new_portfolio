import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export default function ScrollRocket() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 280);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsLaunching(false);
    }, 800);
  };

  if (!isVisible) return null;

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        title="Launch to top"
        className={`relative w-12 h-12 rounded-full flex items-center justify-center bg-dark-900/90 backdrop-blur-md border border-purple-500/30 shadow-2xl hover:shadow-glow-purple transition-all duration-300 group ${
          isLaunching ? '-translate-y-4 transition-transform duration-700' : ''
        }`}
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-purple-500 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        <Rocket className={`w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-transform ${
          isLaunching ? '-rotate-45 -translate-y-1 text-cyan-400' : 'group-hover:-translate-y-0.5'
        }`} />
      </button>
    </div>
  );
}
