import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';

export const AcademicTimeline: React.FC = () => {
  const { educationAndJourney } = PORTFOLIO_DATA;

  const coreCseSubjects = [
    { title: 'Data Structures & Algorithms', desc: 'Asymptotic analysis, binary search trees, dynamic programming, graphs' },
    { title: 'Database Management Systems', desc: 'Relational algebra, SQL, normalization (BCNF), transaction indexing' },
    { title: 'Object-Oriented Software Design', desc: 'Design patterns, SOLID principles, UML architectural modeling' },
    { title: 'Mobile & Web Application Dev', desc: 'DOM manipulation, responsive layouts, hybrid native bridges, REST' },
    { title: 'Computer Networks & Protocols', desc: 'TCP/IP stack, socket programming, HTTP/3, routing topologies' },
    { title: 'Software Engineering & Testing', desc: 'Agile sprints, CI/CD pipelines, automated testing, quality assurance' },
  ];

  return (
    <section id="timeline" className="py-20 lg:py-28 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
            Academic Pedigree & Professional Track
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Computer Science & Engineering Journey
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            The foundation of my engineering craft combines rigorous CSE theoretical knowledge with rapid, hands-on production deployment experience.
          </p>
        </div>

        {/* 2-Column Split: Left Column Journey Stages, Right Column CSE Core Syllabus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Milestones */}
          <div className="lg:col-span-7 space-y-8">
            {educationAndJourney.map((item, index) => (
              <div
                key={index}
                className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
              >
                {/* Unboxed Metadata (Zero pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                  <span className="font-mono text-teal-400 font-semibold">{item.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.organization}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="pt-4 border-t border-zinc-800/60 space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: CSE Coursework & Academic Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-400/10 border border-teal-400/20 text-teal-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">CSE Core Curriculum</h3>
                  <div className="text-xs text-zinc-400">Department of Computer Science & Engineering</div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {coreCseSubjects.map((subject, idx) => (
                  <div key={idx} className="pb-3 border-b border-zinc-800/60 last:border-0 last:pb-0">
                    <div className="text-xs font-semibold text-zinc-200">{subject.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{subject.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Honors & Recognition Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Engineering Excellence</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Demonstrated consistent problem-solving acumen in algorithmic evaluations, data structures competitions, and team hackathons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
