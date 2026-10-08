import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  RefreshCw,
  Loader2,
  Download,
  Terminal,
  Sparkles,
  Linkedin
} from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

/**
 * ContactConvergence:
 * Stage 07: Convergence & End of the Journey.
 * Visual direction: connection.request()
 * Contains the real Formspree integration ('xvgqbava'), direct telemetry links,
 * verified contact credentials, and smooth scroll to top.
 */
export default function ContactConvergence({ onOpenTerminal }) {
  const [state, handleSubmit, reset] = useForm('xvgqbava');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact-convergence"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 z-10 border-t border-white/[0.08]"
    >
      {/* Convergence Visual Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STAGE 06 // CONVERGENCE • POINT OF CONTACT</span>
        </div>

        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
          connection.request()
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide leading-relaxed">
          The journey converges here. Reach out to collaborate, discuss engineering opportunities, or build scalable systems together.
        </p>
      </div>

      {/* Main Grid: Formspree Delivery Box + Direct Signal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Communication Channels & Telemetry */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl surface-panel border-white/10 space-y-5">
            <h3 className="text-base font-bold font-heading text-white tracking-wide">
              Direct Channels
            </h3>

            <div className="space-y-3.5 text-xs font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 block uppercase">Email</span>
                  <span className="text-slate-200 group-hover:text-purple-300 transition-colors truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 block uppercase">Phone</span>
                  <span className="text-slate-200 group-hover:text-cyan-300 transition-colors truncate block">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Location</span>
                  <span className="text-slate-200">
                    Purnea, Bihar, India • Remote Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Social Signal Links */}
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href="https://github.com/KrishRaj-0821"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <SiGithub className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/krish-raj-4932a6322/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/u/raj_kishu0821/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-3 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-purple-200 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Real Formspree Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl surface-panel border-white/15 shadow-2xl relative overflow-hidden">
            {state.succeeded ? (
              <div className="py-10 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white font-heading">
                    Payload Delivered Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-mono leading-relaxed">
                    Thank you for connecting. Your message has been safely delivered to Krish Raj via Formspree. I will review and respond promptly.
                  </p>
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={reset}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Transmission</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
                  <span className="text-purple-400 uppercase tracking-widest">
                    HANDSHAKE PROTOCOL
                  </span>
                  <span className="text-slate-500">ENDPOINT // FORMSPREE</span>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="convergence-name" className="text-xs font-mono text-slate-300 block">
                    Your Name
                  </label>
                  <input
                    id="convergence-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Miller"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="convergence-email" className="text-xs font-mono text-slate-300 block">
                    Your Email
                  </label>
                  <input
                    id="convergence-email"
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="convergence-message" className="text-xs font-mono text-slate-300 block">
                    Message
                  </label>
                  <textarea
                    id="convergence-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Share your opportunity, system idea, or engineering query..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none font-mono"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
                </div>

                <ValidationError errors={state.errors} className="text-xs text-rose-400 font-mono p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 block" />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting via Formspree...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Typographic Signature & Terminal Shortcut */}
      <div className="pt-16 sm:pt-24 mt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
            KRISH RAJ
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono text-slate-400">
            ENGINEERING DIGITAL SYSTEMS
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-purple-300 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Open Cyber-Terminal (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Terminal ⌘K</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-white text-dark-950 hover:bg-slate-200 flex items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
            title="Return to Awakening (Top)"
          >
            <ArrowUpRight className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
        <span>© {new Date().getFullYear()} Krish Raj. All rights reserved.</span>
        <span>Built with React 18, Three.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
