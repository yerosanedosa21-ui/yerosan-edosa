import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, Layers, CheckCircle, BarChart3, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="font-semibold text-teal-400">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Technical Deep Dive</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Media */}
        <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden border-b border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <div className="text-sm text-zinc-300 mt-1">{project.subtitle}</div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-zinc-300">
          {/* Tech Stack rendered as clean unboxed text with typographic bullet separators */}
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-300 font-medium">
              {project.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="text-zinc-200">{tech}</span>
                  {i < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Quantitative Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-zinc-400 mt-0.5">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-2">
              Project Overview & Problem Statement
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Specification */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-400 uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Engineering Decisions</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
              Key Implementation Highlights
            </div>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Instance</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Close Details (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
