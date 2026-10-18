import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Smartphone, Server, Cpu, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.skills.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((c) => c.title === selectedCategory);

  const getCategoryIcon = (title: string) => {
    if (title.includes('Frontend')) return <Code className="w-5 h-5 text-teal-400" />;
    if (title.includes('Mobile')) return <Smartphone className="w-5 h-5 text-indigo-400" />;
    if (title.includes('Backend')) return <Server className="w-5 h-5 text-sky-400" />;
    return <Cpu className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
            Core Competencies & Department Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Engineering Matrix & Full-Stack Capabilities
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Rooted in Computer Science & Engineering fundamentals, spanning from low-level algorithms and data structures to modern reactive web interfaces and cross-platform mobile architectures.
          </p>
        </div>

        {/* Interactive Filter Segmented Control (Valid functional buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl mb-12 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-zinc-800 text-white shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.title}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40">
                    {getCategoryIcon(group.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{group.title}</h3>
                    <div className="text-xs text-zinc-400">{group.description}</div>
                  </div>
                </div>

                {/* Skill List: Unboxed text with subtle typographic separators, no static pill enclosures */}
                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-zinc-200 group-hover/item:text-teal-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-zinc-400 tabular-nums">
                          {skill.level}% proficiency
                        </span>
                      </div>

                      {/* Clean Progress Line */}
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-1.5">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Detailed note rendered as quiet text */}
                      <div className="text-xs text-zinc-400">
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Competency Footnote */}
              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Verified through CSE labs, code reviews, and production deployments</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
