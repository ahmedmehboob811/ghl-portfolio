import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>Demonstrated Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Skills & Engineering Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Curated exclusively to technologies I actively configure, test, and deploy in production.
            No superficial buzzwords or unverified frameworks.
          </p>
        </div>

        {/* 6 Category Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131318] p-6 transition-all hover:border-zinc-700 hover:bg-[#15151e]"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills List with unboxed items and subtle level indicators */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col rounded-lg bg-zinc-900/60 border border-zinc-800/70 p-2.5 transition-colors hover:border-purple-500/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-purple-400">
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-400 mt-1">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Practice Footer */}
              <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Production Verified</span>
                </span>
                <span className="font-mono text-zinc-500">{cat.skills.length} Competencies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
