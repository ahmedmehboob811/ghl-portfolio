import React from 'react';
import {
  Briefcase,
  Check,
  ArrowRight,
  Layers,
  GitBranch,
  Layout,
  Network,
  Workflow,
  Cpu,
  Wrench,
} from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ghl-crm-setup':
        return <Layers className="h-5 w-5 text-purple-400" />;
      case 'workflow-automation':
        return <GitBranch className="h-5 w-5 text-purple-400" />;
      case 'funnels-calendars':
        return <Layout className="h-5 w-5 text-purple-400" />;
      case 'webhook-api':
        return <Network className="h-5 w-5 text-purple-400" />;
      case 'n8n-make':
        return <Workflow className="h-5 w-5 text-purple-400" />;
      case 'ai-integrations':
        return <Cpu className="h-5 w-5 text-purple-400" />;
      case 'workflow-troubleshooting':
        return <Wrench className="h-5 w-5 text-purple-400" />;
      default:
        return <Briefcase className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>How We Can Collaborate</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Specialized Automation & CRM Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Tailored engineering for digital agencies, SaaS companies, and high-volume lead operations.
            Focused strictly on tangible deliverables and reliable automation architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131318] p-6 transition-all duration-200 hover:border-purple-500/40 hover:bg-[#161622] hover:shadow-xl hover:shadow-purple-950/20"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-950/40 border border-purple-800/30">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-zinc-600 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-5 space-y-2 border-t border-zinc-800/80 pt-4">
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="mt-4 pt-3 border-t border-zinc-800/60 text-[11px] text-zinc-400">
                  <span className="text-zinc-500 font-medium">Ideal for: </span>
                  <span>{service.idealFor}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-purple-500 hover:bg-purple-600/10 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:text-white transition-all group-hover:border-purple-500"
                >
                  <span>Discuss This Project</span>
                  <ArrowRight className="h-3.5 w-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
