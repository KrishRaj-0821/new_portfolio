import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose, onNavigate }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Welcome to Krish's Cyber-Terminal v2.0." },
    { type: 'system', text: "Type 'help' to see all available commands, or 'cv' to download resume." }
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `krish@portfolio:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available Commands:
  • help       - List available commands
  • about      - View summary & info
  • resume/cv  - View/Download Krish's official Resume PDF
  • projects   - View portfolio projects slider
  • skills     - View core technical stack
  • contact    - Get email & open contact section
  • linkedin   - Open LinkedIn profile
  • github     - Open GitHub profile
  • leetcode   - Open LeetCode profile
  • socials    - View all social & professional links
  • clear      - Clear terminal screen
  • exit       - Close terminal window`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          text: `${personalInfo.name} — ${personalInfo.role}\n${personalInfo.bio}`
        });
        onNavigate('about');
        break;

      case 'resume':
        newHistory.push({
          type: 'response',
          text: `Navigating to Resume & Credentials... You can also use 'cv' to download the PDF directly.`
        });
        onNavigate('resume');
        break;

      case 'cv':
        newHistory.push({
          type: 'response',
          text: `Opening Krish's verified Resume in a new tab...`
        });
        window.open(personalInfo.resumeUrl, '_blank');
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `Switching to interactive Projects Slider... Featuring AAGAM, DocSpot 2.0 (Django), VikasPath 247, Store247, Guru Jii 2.0 & Quick Notes Tracker!`
        });
        onNavigate('projects');
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `Core Technical Stack:
• Languages: C, C++, Python, JavaScript
• Frontend: HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI Design, DOM Manipulation
• Backend & Frameworks: Django, RESTful APIs
• Core CS: DSA (C++ 250+ LeetCode), OOP, Operating Systems, DBMS
• Tools & Deployment: Git, GitHub, VS Code, Chrome DevTools, Vercel, Netlify`
        });
        onNavigate('skills');
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}`
        });
        onNavigate('contact');
        break;

      case 'linkedin':
        {
          const linkedInUrl = personalInfo.socials.find(s => s.name.toLowerCase() === 'linkedin')?.url || 'https://www.linkedin.com/in/krish-raj-4932a6322/';
          newHistory.push({
            type: 'response',
            text: `Opening ${linkedInUrl} ...`
          });
          window.open(linkedInUrl, '_blank');
        }
        break;

      case 'github':
        newHistory.push({
          type: 'response',
          text: `Opening https://github.com/KrishRaj-0821 ...`
        });
        window.open('https://github.com/KrishRaj-0821', '_blank');
        break;

      case 'leetcode':
        newHistory.push({
          type: 'response',
          text: `Opening https://leetcode.com/u/raj_kishu0821/ ...`
        });
        window.open('https://leetcode.com/u/raj_kishu0821/', '_blank');
        break;

      case 'socials':
        newHistory.push({
          type: 'response',
          text: personalInfo.socials.map(s => `• ${s.name}: ${s.url.startsWith('mailto:') ? s.url.replace('mailto:', '') : s.url}`).join('\n')
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: '${cmd}'. Type 'help' for a list of commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-dark-900 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-1.5 ml-3 text-xs font-mono text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>krish@portfolio: ~ (bash)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div ref={scrollRef} className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 text-slate-300">
          {history.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {line.type === 'user' && (
                <span className="text-cyan-400 font-semibold">{line.text}</span>
              )}
              {line.type === 'response' && (
                <span className="text-purple-300">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-slate-400 italic">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-400">{line.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-dark-850 border-t border-white/10 flex items-center gap-2">
          <span className="text-purple-400 font-mono text-xs font-bold pl-1">krish@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help' or 'cv'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
            autoFocus
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
