import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Full Stack Web App');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = PORTFOLIO_DATA.profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Compose mailto
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} from ${name}`);
    const body = encodeURIComponent(
      `Hello Worku,\n\nMy name is ${name} (${email}).\nProject Category: ${projectType}\n\n${message}\n\nLooking forward to speaking with you!`
    );

    // Open mailto
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
                Let&apos;s Build Together
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
                Ready to engineer your next web or mobile solution?
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                Whether you need a modern reactive full-stack web application, a resilient cross-platform mobile app, or dedicated engineering support, I am eager to collaborate.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Direct Contact
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-white font-semibold truncate">
                  {directEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs text-zinc-400">
                Typical reply turnaround within 12 hours.
              </div>
            </div>

            {/* Department Credential Note */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-400 space-y-1">
              <div className="font-semibold text-zinc-200">Worku Edosa</div>
              <div>Department of Computer Science & Engineering (CSE)</div>
              <div className="text-teal-400">Specialization: Full Stack & Mobile Engineering</div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send an Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below to generate a pre-formatted project inquiry.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-200 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-teal-400">
                    <Check className="w-5 h-5" />
                    <span>Inquiry Prepared!</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    Your email client was triggered with your inquiry details addressed to <strong className="text-white">{directEmail}</strong>. If your email client didn&apos;t open automatically, you can also copy and send directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-teal-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Project or Role Domain
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      <option value="Full Stack Web App">Full Stack Web Application (HTML / CSS / JS / React)</option>
                      <option value="Mobile Application">Mobile Application (React Native / Android)</option>
                      <option value="REST API & Backend Architecture">REST API & Backend Architecture (Node / Express)</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role (CSE Graduate)</option>
                      <option value="Freelance Consultation">Freelance Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Project Scope & Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your timeline, core requirements, or role specs..."
                      className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 active:scale-98 transition-all rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Worku Edosa</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
