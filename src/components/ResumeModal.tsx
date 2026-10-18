import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, ExternalLink, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950/85 backdrop-blur-md">
      <div
        className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 print:hidden">
          <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
            Curriculum Vitae Preview
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-8 sm:p-12 text-zinc-300 print:text-black print:bg-white space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <div className="text-sm font-semibold text-teal-400 print:text-teal-700 mt-1">
              Full Stack Software Engineer & Mobile Application Developer
            </div>
            <div className="text-xs text-zinc-400 print:text-zinc-700 mt-1 font-medium">
              Department of Computer Science & Engineering (CSE)
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 print:text-zinc-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Available for Global / Remote Roles</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-teal-400 print:text-teal-700 uppercase mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
              Computer Science & Engineering developer specializing in modern Full Stack Web development (HTML, CSS, JavaScript, React, Node) and cross-platform Mobile Applications (React Native & Android). Combining algorithmic problem-solving discipline with reactive modern product architecture.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-teal-400 print:text-teal-700 uppercase mb-3">
              Technical Skill Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-950/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <div className="font-semibold text-white print:text-black mb-1">Frontend Development</div>
                <div className="text-zinc-400 print:text-zinc-700">HTML5 Semantic Web, CSS3 / Modern Tailwind, JavaScript (ES2022+), TypeScript, React, Next.js</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <div className="font-semibold text-white print:text-black mb-1">Mobile Development</div>
                <div className="text-zinc-400 print:text-zinc-700">React Native, Expo, Android / Kotlin Basics, SQLite, Offline Sync, Mobile UI/UX</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <div className="font-semibold text-white print:text-black mb-1">Backend & Systems</div>
                <div className="text-zinc-400 print:text-zinc-700">Node.js, Express, RESTful APIs, JWT Auth, PostgreSQL, MongoDB, Docker, Git CI/CD</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <div className="font-semibold text-white print:text-black mb-1">CSE Theoretical Foundations</div>
                <div className="text-zinc-400 print:text-zinc-700">Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Computer Networks</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-teal-400 print:text-teal-700 uppercase mb-2">
              Education & Academic Credentials
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-white print:text-black">
                <span>B.Sc. in Computer Science & Engineering (CSE)</span>
                <span className="font-mono text-zinc-400 font-normal">2022 — Present</span>
              </div>
              <div className="text-xs text-zinc-400 print:text-zinc-600">
                University Engineering Department · Computer Science & Engineering
              </div>
              <div className="text-xs text-zinc-300 print:text-zinc-700 pt-1">
                Relevant Coursework: Advanced Algorithms, Data Structures, Database Systems, Software Engineering, Web & Mobile Systems.
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-teal-400 print:text-teal-700 uppercase mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="font-mono text-teal-400 font-normal">{proj.category}</span>
                  </div>
                  <div className="text-zinc-400 print:text-zinc-600 text-[11px] mb-1 font-mono">
                    Stack: {proj.techStack.join(' · ')}
                  </div>
                  <p className="text-zinc-300 print:text-zinc-700 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
