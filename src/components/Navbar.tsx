import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
        >
          Worku Edosa
        </a>

        {/* Zone 2: 4-5 concise single-line text links with subtle hover states */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/40"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/40"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/40"
          >
            Projects
          </a>
          <a
            href="#playground"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/40"
          >
            Playground
          </a>
          <a
            href="#timeline"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-teal-400/40"
          >
            Journey
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenResume}
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 active:scale-95 transition-all rounded-lg whitespace-nowrap shrink-0 shadow-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 text-base font-medium">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Projects
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Playground
          </a>
          <a
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Journey
          </a>
          <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-medium text-center border border-zinc-700 text-zinc-200 rounded-lg"
            >
              View CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-xs font-semibold text-center bg-teal-400 text-zinc-950 rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
