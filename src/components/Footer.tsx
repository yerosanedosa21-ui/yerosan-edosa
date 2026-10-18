import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & CSE Department Credentials */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight text-sm">
            Worku Edosa
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
          <span>Department of Computer Science & Engineering (CSE)</span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
          <span className="font-mono text-zinc-300">{PORTFOLIO_DATA.profile.email}</span>
        </div>

        {/* Links and Return to Top */}
        <div className="flex items-center gap-6">
          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors"
          >
            Curriculum Vitae
          </button>
          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
