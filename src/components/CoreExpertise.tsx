import React from 'react';
import {
  Layers,
  GitBranch,
  Layout,
  Network,
  Cpu,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { CORE_EXPERTISE } from '../data/portfolioData';

export const CoreExpertise: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="h-5 w-5 text-purple-400" />;
      case 'GitBranch':
        return <GitBranch className="h-5 w-5 text-purple-400" />;
      case 'Layout':
        return <Layout className="h-5 w-5 text-purple-400" />;
      case 'Network':
        return <Network className="h-5 w-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-purple-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="h-5 w-5 text-purple-400" />;
      default:
        return <Layers className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            <span>Specialized Technical Foundation</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Core Engineering Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Focused strictly on GoHighLevel sub-account infrastructure, robust webhook integrations,
            and practical AI automations that produce measurable business outcomes.
          </p>
        </div>

        {/* 6 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_EXPERTISE.map((card, idx) => (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131318] p-6 transition-all duration-200 hover:border-purple-500/40 hover:bg-[#161620] hover:shadow-xl hover:shadow-purple-950/20"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-800/30">
                    {getIcon(card.icon)}
                  </div>
                  <span className="font-mono text-xs text-zinc-600 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="mt-5 space-y-2.5 border-t border-zinc-800/80 pt-4">
                  {card.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-3 border-t border-zinc-800/50 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production Ready</span>
                <span className="text-purple-400">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
