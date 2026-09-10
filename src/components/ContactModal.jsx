import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: 'Sending message...' });

    try {
      const response = await fetch('https://formspree.io/f/mqazkkgb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
        });
        setFormData({ fullname: '', email: '', message: '' });
      } else {
        throw new Error('Failed to deliver form');
      }
    } catch (err) {
      setStatus({
        state: 'fallback',
        message: `Redirecting to email client (${personalInfo.email})...`
      });
      window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(formData.fullname)}&body=${encodeURIComponent(formData.message)}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-dark-900 border border-white/15 rounded-[32px] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">Direct Outreach</span>
            <h3 className="text-2xl font-bold font-heading text-white">Let's talk & collaborate</h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all"
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 block">Your Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              placeholder="e.g. Alex Miller"
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 block">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="alex@example.com"
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about your project, ideas, or opportunity..."
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none font-mono"
            />
          </div>

          {status.message && (
            <div className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
              status.state === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-purple-500/10 border border-purple-500/30 text-purple-300'
            }`}>
              {status.state === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.state === 'sending'}
            className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/30 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{status.state === 'sending' ? 'Sending...' : 'Submit Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
