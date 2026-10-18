import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, Code, Smartphone, Database } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Full Stack Web', 'Mobile Apps', 'APIs & Systems'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack Web':
        return <Code className="w-3.5 h-3.5 text-teal-400" />;
      case 'Mobile Apps':
        return <Smartphone className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return <Database className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
              Production Work & Applied Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
              Featured Full-Stack & Mobile Projects
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Real-world systems engineered with clean design principles, robust data architecture, and comprehensive end-to-end responsiveness.
            </p>
          </div>

          {/* Filter Tabs (Interactive controls, single-line) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveCategory(opt)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === opt
                    ? 'bg-zinc-800 text-white shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Container with Zero-Broken-Image Fallback */}
                <div
                  className={`relative w-full bg-zinc-950 overflow-hidden ${
                    isWide ? 'aspect-[21/9]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Inspect Indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 group-hover:text-teal-400 group-hover:border-teal-400/50 transition-colors backdrop-blur-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content (Zero-pill discipline: unboxed metadata) */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quiet Kicker Metadata */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
                      <span className="flex items-center gap-1.5 text-teal-400">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.metrics[0]?.value}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack: Clean unboxed text with typographic separators */}
                    <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                      <div className="flex flex-wrap items-center gap-1.5 font-medium text-zinc-300">
                        {project.techStack.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className="hover:text-teal-300 transition-colors">{tech}</span>
                            {i < project.techStack.length - 1 && (
                              <span aria-hidden="true" className="text-zinc-600">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-teal-400 font-semibold group-hover:underline flex items-center gap-1">
                          Inspect Specs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
