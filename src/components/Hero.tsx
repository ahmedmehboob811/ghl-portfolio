import React, { useState } from 'react';
import {
  ArrowRight,
  GitBranch,
  Calendar,
  MessageSquare,
  Cpu,
  CheckCircle2,
  Play,
  Zap,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onJumpToWorkflow: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContactClick,
  onJumpToWorkflow,
}) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'live-trigger' | 'ai-node'>('live-trigger');
  const [triggerPulse, setTriggerPulse] = useState(false);

  const handleSimulatePulse = () => {
    setTriggerPulse(true);
    setTimeout(() => setTriggerPulse(false), 2400);
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-purple-900/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Hero: 2-column balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 mb-5 text-xs text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-emerald-300 tracking-wide">
                {PERSONAL_INFO.availability}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Karachi, Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              I Build GoHighLevel Automations That Turn Leads Into Customers.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              I help businesses streamline CRM workflows, automate lead follow-ups, build
              conversion-focused funnels, and connect GoHighLevel with AI tools and external
              platforms.
            </p>

            {/* Key specialties inline tags */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400">
              <span className="text-purple-300 font-medium">GoHighLevel Pipelines</span>
              <span className="text-zinc-600">·</span>
              <span className="text-purple-300 font-medium">n8n & Webhooks</span>
              <span className="text-zinc-600">·</span>
              <span className="text-purple-300 font-medium">AI Routing (Gemini & OpenAI)</span>
              <span className="text-zinc-600">·</span>
              <span className="text-purple-300 font-medium">WhatsApp & Twilio</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-900/30 transition-all hover:bg-purple-500 hover:shadow-purple-900/50 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
              >
                <span>Contact Me</span>
              </button>

              <button
                onClick={onJumpToWorkflow}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 py-2 px-1 transition-colors ml-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test Interactive Workflow</span>
              </button>
            </div>
          </div>

          {/* Right Column: Custom-built CRM Automation Dashboard Illustration */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-zinc-800 bg-[#131318] p-4 sm:p-5 shadow-2xl shadow-purple-950/20">
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">
                    GHL Orchestrator · Sub-Account Engine
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1 bg-zinc-900/80 p-0.5 rounded-lg border border-zinc-800 text-[11px]">
                  <button
                    onClick={() => setActiveTab('live-trigger')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'live-trigger'
                        ? 'bg-purple-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Flow
                  </button>
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'pipeline'
                        ? 'bg-purple-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab('ai-node')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'ai-node'
                        ? 'bg-purple-600 text-white font-medium'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    AI Agent
                  </button>
                </div>
              </div>

              {/* Dynamic View Panels */}
              {activeTab === 'live-trigger' && (
                <div className="space-y-3">
                  {/* Trigger event card */}
                  <div className="relative rounded-xl border border-purple-500/30 bg-purple-950/20 p-3.5 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white">
                              Workflow Trigger: Form Inbound
                            </span>
                            <span className="text-[10px] font-mono text-purple-400 bg-purple-900/50 px-1.5 py-0.5 rounded">
                              Real-Time Webhook
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            High-intent lead captured: <span className="text-zinc-200">Alex Vance</span> (E-com $50k/mo)
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleSimulatePulse}
                        className="flex items-center gap-1 rounded bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 px-2 py-1 text-[10px] font-medium text-purple-200 transition-colors"
                        title="Simulate Event Flow"
                      >
                        <Play className="h-2.5 w-2.5" />
                        <span>Fire Test</span>
                      </button>
                    </div>

                    {triggerPulse && (
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Webhook validated · Signature verified · Dispatching 3 nodes...</span>
                      </div>
                    )}
                  </div>

                  {/* Connected Nodes Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Node 1: GHL Opportunity Update */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <div className="flex items-center gap-2 text-zinc-300 mb-1">
                        <Layers className="h-3.5 w-3.5 text-blue-400" />
                        <span className="text-xs font-medium">GHL Pipeline Stage</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Moved to <span className="text-zinc-200 font-medium">&quot;Hot Inbound&quot;</span>
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-1.5">
                        <span>Valuation: $4,500</span>
                        <span className="text-emerald-400">Tag Applied</span>
                      </div>
                    </div>

                    {/* Node 2: WhatsApp Notification */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <div className="flex items-center gap-2 text-zinc-300 mb-1">
                        <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-xs font-medium">WhatsApp Business API</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Instant 45s booking template sent
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-1.5">
                        <span>Status: Delivered</span>
                        <span className="text-emerald-400">Read in 12s</span>
                      </div>
                    </div>
                  </div>

                  {/* Lower Row: AI Agent Node & Appointment Booking */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Node 3: AI Qualification Agent */}
                    <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-3">
                      <div className="flex items-center gap-2 text-purple-300 mb-1">
                        <Cpu className="h-3.5 w-3.5 text-purple-400" />
                        <span className="text-xs font-medium">AI Scoring Node</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Intent classified: <span className="text-purple-300 font-medium">Growth Ready (94%)</span>
                      </p>
                      <div className="mt-2 text-[10px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-1.5">
                        <span>Routing: Assigned to Lead Engineer</span>
                      </div>
                    </div>

                    {/* Node 4: Calendar Booking */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
                      <div className="flex items-center gap-2 text-zinc-300 mb-1">
                        <Calendar className="h-3.5 w-3.5 text-amber-400" />
                        <span className="text-xs font-medium">GHL Calendar Sync</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Slot Reserved: <span className="text-zinc-200">Tomorrow 3:00 PM</span>
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-800/80 pt-1.5">
                        <span>Zoom Link: Created</span>
                        <span className="text-purple-300">Reminders Armed</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="space-y-2.5 py-1">
                  <div className="flex items-center justify-between text-xs text-zinc-400 pb-1 border-b border-zinc-800">
                    <span className="font-medium text-zinc-300">Live Stage Distribution</span>
                    <span className="font-mono text-[11px] text-purple-400">$38,200 Active Pipeline</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-zinc-900/80 p-2 rounded-lg border border-zinc-800/80 text-xs">
                      <div>
                        <span className="text-white font-medium">New Leads (Inbound)</span>
                        <p className="text-[11px] text-zinc-400">4 leads · $14,200 total</p>
                      </div>
                      <span className="font-mono text-[11px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                        Auto-Routing
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-zinc-900/80 p-2 rounded-lg border border-zinc-800/80 text-xs">
                      <div>
                        <span className="text-white font-medium">AI Follow-Up Cadence</span>
                        <p className="text-[11px] text-zinc-400">3 leads · $9,500 total</p>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        Active SMS / WA
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-zinc-900/80 p-2 rounded-lg border border-zinc-800/80 text-xs">
                      <div>
                        <span className="text-white font-medium">Strategy Call Scheduled</span>
                        <p className="text-[11px] text-zinc-400">2 leads · $14,500 total</p>
                      </div>
                      <span className="font-mono text-[11px] text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                        Synced to GHL
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai-node' && (
                <div className="space-y-3 py-1 font-mono text-xs">
                  <div className="rounded-lg bg-zinc-900/90 border border-zinc-800 p-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                      <span className="text-purple-400 font-semibold">Gemini / OpenAI Agent Prompt</span>
                      <span className="text-emerald-400">Status: 200 OK</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed font-mono">
                      &quot;System: Score lead for agency retainer suitability based on tech stack, monthly
                      spend, and CRM automation requirements. Output structured JSON tags.&quot;
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-950/30 border border-purple-500/30 p-2.5 text-[11px] space-y-1 text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Intent Category:</span>
                      <span className="text-purple-300">High-Ticket GHL Funnel Rebuild</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Lead Score:</span>
                      <span className="text-emerald-400 font-bold">94 / 100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Recommended Next Step:</span>
                      <span className="text-zinc-200">Instant VIP WhatsApp Calendar Invite</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Integration Badges Footer inside card */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400">
                <span className="text-zinc-500 font-medium">Active Integrations:</span>
                <div className="flex items-center gap-2">
                  <span className="text-purple-300 font-mono">GoHighLevel</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-purple-300 font-mono">n8n</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-purple-300 font-mono">Twilio</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-purple-300 font-mono">WhatsApp</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-purple-300 font-mono">OpenAI / Gemini</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof strip below the hero split (following design constitution) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              35+
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              Active CRM Workflows Built
            </div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tracking-tight">
              &lt; 45s
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              Average Lead Response Cadence
            </div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              99.8%
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              Webhook Delivery Reliability
            </div>
          </div>

          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tracking-tight">
              100%
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              Staging & Testing Verification
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
