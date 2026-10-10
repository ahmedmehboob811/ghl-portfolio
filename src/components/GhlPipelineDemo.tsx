import React, { useState } from 'react';
import {
  Layers,
  DollarSign,
  User,
  Building,
  Mail,
  Phone,
  Tag,
  ArrowRight,
  CheckCircle,
  Clock,
  Send,
  Zap,
  Filter,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { MOCK_PIPELINE_OPPORTUNITIES, OpportunityItem } from '../data/portfolioData';

export const GhlPipelineDemo: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityItem[]>(MOCK_PIPELINE_OPPORTUNITIES);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);
  const [activeTagFilter, setActiveTagFilter] = useState<string>('all');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const stages = [
    { id: 'new', name: 'New Inbound Leads', color: 'border-blue-500/30' },
    { id: 'qualified', name: 'Qualified & Scored', color: 'border-purple-500/30' },
    { id: 'followup', name: 'Follow-up Cadence', color: 'border-amber-500/30' },
    { id: 'booked', name: 'Call / Demo Booked', color: 'border-emerald-500/30' },
    { id: 'won', name: 'Won / Closed', color: 'border-indigo-500/30' },
  ] as const;

  const totalValue = opportunities.reduce((acc, curr) => acc + curr.value, 0);

  const filteredOpportunities = opportunities.filter((item) => {
    if (activeTagFilter === 'all') return true;
    return item.tags.some((t) => t.toLowerCase().includes(activeTagFilter.toLowerCase()));
  });

  const handleAdvanceStage = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const stageOrder: OpportunityItem['stage'][] = ['new', 'qualified', 'followup', 'booked', 'won'];
    setOpportunities((prev) =>
      prev.map((opp) => {
        if (opp.id === id) {
          const currentIndex = stageOrder.indexOf(opp.stage);
          const nextStage = stageOrder[Math.min(currentIndex + 1, stageOrder.length - 1)];
          return {
            ...opp,
            stage: nextStage,
            lastActivity: `Stage updated to ${nextStage.toUpperCase()} just now`,
          };
        }
        return opp;
      })
    );

    setActionNotice(`Opportunity moved to next GoHighLevel stage.`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  const handleSimulateAction = (type: string) => {
    if (!selectedOpportunity) return;
    setActionNotice(`Simulated GoHighLevel event: "${type}" triggered for ${selectedOpportunity.contactName}.`);
    setTimeout(() => setActionNotice(null), 3500);
  };

  return (
    <section id="pipeline-demo" className="py-20 border-t border-zinc-800/80 bg-[#09090B] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
              <Layers className="h-4 w-4" />
              <span>GHL CRM ARCHITECTURE DEMO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              GoHighLevel Pipeline & Opportunity Management
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Explore how I structure GoHighLevel sub-accounts with custom opportunity stages, automated lead
              routing, custom field mapping, and stage-specific communication triggers.
            </p>
          </div>

          {/* Action indicator note */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Demo · Click any card to inspect GHL fields</span>
          </div>
        </div>

        {/* Global Pipeline Metrics Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="rounded-xl border border-zinc-800/80 bg-[#131318] p-3.5">
            <div className="text-[11px] text-zinc-400">Total Active Pipeline</div>
            <div className="mt-1 text-xl font-bold text-white font-mono tabular-nums">
              ${totalValue.toLocaleString()}
            </div>
            <div className="mt-1 text-[10px] text-emerald-400">5 High-Value Deals</div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-[#131318] p-3.5">
            <div className="text-[11px] text-zinc-400">Automated Follow-ups Today</div>
            <div className="mt-1 text-xl font-bold text-purple-400 font-mono tabular-nums">
              18 Sent
            </div>
            <div className="mt-1 text-[10px] text-zinc-400">SMS · WhatsApp · Email</div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-[#131318] p-3.5">
            <div className="text-[11px] text-zinc-400">Avg Lead Speed-to-Call</div>
            <div className="mt-1 text-xl font-bold text-white font-mono tabular-nums">
              42 Seconds
            </div>
            <div className="mt-1 text-[10px] text-emerald-400">Sub-minute auto response</div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-[#131318] p-3.5">
            <div className="text-[11px] text-zinc-400">Calendar Booking Rate</div>
            <div className="mt-1 text-xl font-bold text-purple-400 font-mono tabular-nums">
              64.2%
            </div>
            <div className="mt-1 text-[10px] text-zinc-400">From form submission</div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-[#131318] p-3 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Filter className="h-3.5 w-3.5" />
            <span className="font-medium text-zinc-300">Filter by GHL Tag:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Opportunities' },
              { id: 'high-intent', label: 'tag:high-intent' },
              { id: 'calendar-booked', label: 'tag:calendar-booked' },
              { id: 'wa-engaged', label: 'tag:wa-engaged' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveTagFilter(filter.id)}
                className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
                  activeTagFilter === filter.id
                    ? 'bg-purple-600 text-white font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Notice Banner */}
        {actionNotice && (
          <div className="mb-4 flex items-center justify-between rounded-lg border border-purple-500/40 bg-purple-950/40 px-4 py-2.5 text-xs text-purple-200">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>{actionNotice}</span>
            </div>
            <button
              onClick={() => setActionNotice(null)}
              className="text-zinc-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* 5-Column Pipeline Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.5 overflow-x-auto pb-4">
          {stages.map((stage) => {
            const stageItems = filteredOpportunities.filter((opp) => opp.stage === stage.id);
            const stageTotal = stageItems.reduce((acc, curr) => acc + curr.value, 0);

            return (
              <div
                key={stage.id}
                className="flex flex-col rounded-xl border border-zinc-800 bg-[#101015] p-3 min-w-[240px]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                  <div>
                    <h3 className="text-xs font-semibold text-white tracking-wide">
                      {stage.name}
                    </h3>
                    <div className="text-[11px] font-mono text-zinc-400 tabular-nums">
                      ${stageTotal.toLocaleString()}
                    </div>
                  </div>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-mono font-medium text-zinc-300">
                    {stageItems.length}
                  </span>
                </div>

                {/* Stage Items Container */}
                <div className="space-y-2.5 flex-1">
                  {stageItems.map((opp) => (
                    <div
                      key={opp.id}
                      onClick={() => setSelectedOpportunity(opp)}
                      className="group cursor-pointer rounded-lg border border-zinc-800/90 bg-[#16161d] p-3 transition-all hover:border-purple-500/50 hover:bg-[#1a1a24] hover:shadow-lg hover:shadow-purple-950/20"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {opp.contactName}
                        </span>
                        <span className="font-mono text-xs font-bold text-emerald-400 tabular-nums">
                          ${opp.value.toLocaleString()}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-400">
                        <Building className="h-3 w-3 text-zinc-500" />
                        <span className="truncate">{opp.company}</span>
                      </div>

                      {/* GHL Tags */}
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {opp.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] text-zinc-300 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Last Activity & Quick Stage Bump */}
                      <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-2 text-[10px] text-zinc-400">
                        <span className="truncate max-w-[140px] text-zinc-500">{opp.lastActivity}</span>
                        {opp.stage !== 'won' && (
                          <button
                            onClick={(e) => handleAdvanceStage(opp.id, e)}
                            className="flex items-center gap-0.5 text-purple-400 hover:text-purple-300 font-medium ml-1"
                            title="Move to Next Stage"
                          >
                            <span>Move</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {stageItems.length === 0 && (
                    <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-800/60 p-4 text-center text-xs text-zinc-600">
                      <span>No leads in this stage</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Opportunity Detail Modal/Drawer */}
        {selectedOpportunity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-2xl border border-zinc-700 bg-[#131318] p-6 shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                      GHL Opportunity Inspection
                    </span>
                    <span className="rounded bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                      Stage: {selectedOpportunity.stage.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {selectedOpportunity.contactName}
                  </h3>
                  <p className="text-xs text-zinc-400">{selectedOpportunity.company}</p>
                </div>

                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Contact Information & Opportunity Values */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                  <span className="text-zinc-500 text-[10px]">Estimated Deal Value</span>
                  <div className="mt-0.5 font-mono text-base font-bold text-emerald-400">
                    ${selectedOpportunity.value.toLocaleString()}
                  </div>
                </div>

                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                  <span className="text-zinc-500 text-[10px]">Email Contact</span>
                  <div className="mt-0.5 text-zinc-200 truncate">{selectedOpportunity.email}</div>
                </div>

                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                  <span className="text-zinc-500 text-[10px]">Phone Number</span>
                  <div className="mt-0.5 text-zinc-200">{selectedOpportunity.phone}</div>
                </div>
              </div>

              {/* GoHighLevel Custom Fields Table */}
              <div className="mt-4">
                <div className="text-xs font-semibold text-zinc-300 mb-2 flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-purple-400" />
                  <span>GoHighLevel Custom Field Values</span>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 divide-y divide-zinc-800/80 text-xs">
                  {selectedOpportunity.customFields.map((field) => (
                    <div key={field.key} className="flex justify-between p-2.5">
                      <span className="text-zinc-400 font-mono text-[11px]">{field.key}</span>
                      <span className="text-zinc-100 font-medium">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Workflow Engine */}
              <div className="mt-4 rounded-lg border border-purple-500/30 bg-purple-950/20 p-3 text-xs">
                <div className="flex items-center justify-between text-purple-300 font-medium mb-1">
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-purple-400" />
                    <span>Active GoHighLevel Workflow:</span>
                  </span>
                  <span className="text-[11px] font-mono text-purple-400">
                    {selectedOpportunity.activeWorkflow}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Last logged trigger: <span className="text-zinc-200">{selectedOpportunity.lastActivity}</span>
                </p>
              </div>

              {/* Tags Applied */}
              <div className="mt-4">
                <div className="text-xs text-zinc-400 mb-1.5">Tags Applied to Contact:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOpportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSimulateAction('Send SMS Follow-up')}
                    className="rounded-lg bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors"
                  >
                    Simulate SMS
                  </button>
                  <button
                    onClick={() => handleSimulateAction('Dispatch WhatsApp Template')}
                    className="rounded-lg bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors"
                  >
                    WhatsApp Alert
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {selectedOpportunity.stage !== 'won' && (
                    <button
                      onClick={() => {
                        handleAdvanceStage(selectedOpportunity.id);
                        setSelectedOpportunity(null);
                      }}
                      className="rounded-lg bg-purple-600 hover:bg-purple-500 px-4 py-1.5 text-xs font-medium text-white transition-colors"
                    >
                      Advance to Next Stage
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedOpportunity(null)}
                    className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
