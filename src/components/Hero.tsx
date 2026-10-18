import React from 'react';
import { ArrowDown, Mail, Github, ExternalLink, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle radial gradient background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Split Hero: Left Column Typography, Right Column Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean editorial kicker (unboxed, no static pill) */}
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-teal-400 uppercase mb-4">
              <span>Computer Science & Engineering</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Full Stack & Mobile Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
              Building resilient web platforms and native mobile apps.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              Hello, I&apos;m <span className="font-semibold text-white">{profile.name}</span>, a Computer Science & Engineering developer specializing in modern Full Stack Web development (HTML, CSS, JavaScript, React, Node) and cross-platform Mobile Apps. I transform complex engineering problems into clean, high-performance digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 active:scale-95 transition-all rounded-lg shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Featured Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#playground"
                className="px-6 py-3 text-sm font-medium text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800/80 active:scale-95 transition-all rounded-lg flex items-center gap-2 whitespace-nowrap"
              >
                <Terminal className="w-4 h-4 text-teal-400" />
                <span>Live Interactive Sandbox</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Direct Connect Quick Metadata */}
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="font-mono text-zinc-300">{profile.email}</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Available for Full-Time & High-Impact Contracts</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/80 shadow-2xl group">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Resilient zero-broken-image fallback
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Measured Scrim for contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

              {/* Bottom Card Identity Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-left">
                <div className="text-lg font-bold text-white tracking-tight">{profile.name}</div>
                <div className="text-xs text-zinc-300 font-medium">B.Sc. Computer Science & Engineering</div>
                <div className="text-xs text-teal-400 mt-1 flex items-center gap-1.5">
                  <span>HTML · CSS · JS · React · Mobile Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Metric Strip below hero split */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-zinc-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
