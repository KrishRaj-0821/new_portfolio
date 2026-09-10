import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X, Mail, Phone, Send, CheckCircle2, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [state, handleSubmit, reset] = useForm('xvgqbava');

  if (!isOpen) return null;

  const handleClose = () => {
    if (state.succeeded) {
      reset();
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-xl bg-dark-900 border border-white/15 rounded-[32px] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">Direct Outreach</span>
            <h3 className="text-2xl font-bold font-heading text-white">Let's talk & collaborate</h3>
          </div>

          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-purple-300 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personalInfo.phone}</span>
          </a>
        </div>

        {/* Form or Success Confirmation */}
        {state.succeeded ? (
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white font-heading">Message Sent Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-mono leading-relaxed">
                Thank you for getting in touch! Your message has been safely delivered to Krish Raj via Formspree. I'll get back to you shortly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={reset}
                className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Send another message</span>
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-blue-600/30"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono text-slate-300 block">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Miller"
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono text-slate-300 block">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono text-slate-300 block">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project, ideas, or opportunity..."
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none font-mono"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-400 font-mono mt-1 block" />
            </div>

            {/* General Form Validation / Delivery Errors */}
            <ValidationError errors={state.errors} className="text-xs text-rose-400 font-mono p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 block" />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending via Formspree...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
