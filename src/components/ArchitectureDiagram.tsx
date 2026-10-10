import React, { useState } from 'react';
import {
  Network,
  Cpu,
  Layers,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  Database,
  Lock,
  RefreshCw,
  Server,
  FileCode,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'all' | 'lead-gen' | 'ecom'>('all');
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-2');

  const architectureLayers = [
    {
      id: 'layer-1',
      title: 'Layer 1: Ingestion & Omnichannel Inbound',
      category: 'Inbound Gateways',
      icon: MessageSquare,
      color: 'border-blue-500/30 text-blue-400',
      components: [
        { name: 'GoHighLevel Funnels & Forms', type: 'Native Inbound' },
        { name: 'Meta & Google Lead Ads', type: 'Direct Webhook' },
        { name: 'WhatsApp Business API', type: 'Conversational Hook' },
        { name: 'Shopify / WooCommerce', type: 'Order & Cart Events' },
      ],
      techSpecs: {
        protocol: 'HTTPS POST / Webhooks with HMAC SHA-256 Signatures',
        security: 'Strict origin IP verification, tokenized payload secrets',
        idempotency: 'UUID event hashes prevent duplicate processing within 15 minutes',
        latency: '< 150ms ingestion response time',
      },
      codeSnippet: `// Inbound Webhook Dispatch
POST https://api.automation.domain/webhook/v1/inbound
Headers: {
  "X-Webhook-Signature": "sha256=d8e8f...",
  "Content-Type": "application/json"
}`,
    },
    {
      id: 'layer-2',
      title: 'Layer 2: Middleware & Orchestration Hub',
      category: 'Event Engine',
      icon: Server,
      color: 'border-purple-500/30 text-purple-400',
      components: [
        { name: 'n8n Workflow Engine', type: 'Self-Hosted / Cloud' },
        { name: 'Make (Integromat)', type: 'Cross-App Scenarios' },
        { name: 'Node.js / Express Webhook Proxy', type: 'Custom Middleware' },
        { name: 'Payload Transformation Node', type: 'JSON Normalization' },
      ],
      techSpecs: {
        protocol: 'Event-driven message routing with dead-letter queue (DLQ)',
        security: 'AES-256 credential store, isolated environment variables',
        idempotency: 'Contact deduplication against GHL V2 contact query before insertion',
        latency: '~250ms workflow execution settling time',
      },
      codeSnippet: `// n8n JSON Transformation Node
const cleanPhone = (phone) => phone.replace(/[^0-9+]/g, '');
return {
  email: items[0].json.email.toLowerCase().trim(),
  phone: cleanPhone(items[0].json.phone),
  pipelineStage: items[0].json.revenue > 25000 ? "VIP_INBOUND" : "STANDARD_INBOUND"
};`,
    },
    {
      id: 'layer-3',
      title: 'Layer 3: AI Intelligence & Intent Evaluation',
      category: 'Cognitive Engine',
      icon: Cpu,
      color: 'border-violet-500/30 text-violet-400',
      components: [
        { name: 'Google Gemini 2.5 Flash', type: 'Fast Reasoning API' },
        { name: 'OpenAI GPT-4o', type: 'Structured JSON Classifier' },
        { name: 'Deterministic System Prompts', type: 'Guardrail Schema' },
        { name: 'ElevenLabs Voice Engine', type: 'Telephony AI Agent' },
      ],
      techSpecs: {
        protocol: 'REST Streaming / Function Calling with JSON Schema validation',
        security: 'Zero customer PII stored in model training; ephemeral session tokens',
        idempotency: 'Deterministic temperature setting (0.1 - 0.2) for reliable classification',
        latency: '~600ms LLM roundtrip evaluation',
      },
      codeSnippet: `// Gemini / OpenAI Structured Evaluation
const prompt = \`Classify the following customer query:
Query: "\${userQuery}"
Output format: { intent: string, urgency: 1-10, recommendedTag: string }\`;
// Returns deterministic category and tag for CRM`,
    },
    {
      id: 'layer-4',
      title: 'Layer 4: GoHighLevel CRM Core & Action Delivery',
      category: 'Execution & Settlement',
      icon: Layers,
      color: 'border-emerald-500/30 text-emerald-400',
      components: [
        { name: 'GoHighLevel Opportunities Pipeline', type: 'Deal Tracking' },
        { name: 'GHL Custom Fields & Values', type: 'Dynamic State' },
        { name: 'Twilio SMS & Voice Delivery', type: 'Instant Outreach' },
        { name: 'GHL Round-Robin Calendar', type: 'Booking Settlement' },
      ],
      techSpecs: {
        protocol: 'GoHighLevel V2 API (services.leadconnectorhq.com)',
        security: 'OAuth 2.0 / Bearer Location Access Tokens, scoped permissions',
        idempotency: 'Upsert contact endpoint ensures zero contact duplicate record creation',
        latency: 'Immediate contact push + real-time pipeline visual sync',
      },
      codeSnippet: `// GoHighLevel V2 API Contact Upsert
POST https://services.leadconnectorhq.com/contacts/upsert
Headers: {
  "Authorization": "Bearer \${GHL_LOCATION_ACCESS_TOKEN}",
  "Version": "2021-07-28"
}`,
    },
  ];

  const selectedLayer =
    architectureLayers.find((l) => l.id === selectedLayerId) || architectureLayers[1];

  return (
    <section id="architecture" className="py-20 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
              <Network className="h-4 w-4" />
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              AI + GoHighLevel Integration Architecture
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              How I connect GoHighLevel, n8n middleware, AI intelligence, and external communication channels
              into a cohesive, fault-tolerant automation infrastructure.
            </p>
          </div>

          {/* Flow Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-xl text-xs">
            <button
              onClick={() => setActiveFlow('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFlow === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Unified Architecture
            </button>
            <button
              onClick={() => setActiveFlow('lead-gen')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFlow === 'lead-gen'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Lead Gen Flow
            </button>
            <button
              onClick={() => setActiveFlow('ecom')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeFlow === 'ecom'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              E-Com Sync Flow
            </button>
          </div>
        </div>

        {/* 4-Layer Architecture Diagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {architectureLayers.map((layer, index) => {
            const isSelected = selectedLayerId === layer.id;
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`group cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-purple-500 bg-[#161622] shadow-lg shadow-purple-950/30'
                    : 'border-zinc-800 bg-[#111116] hover:border-zinc-700 hover:bg-[#14141c]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Tier 0{index + 1}
                    </span>
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 ${layer.color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                    {layer.title}
                  </h3>
                  <span className="text-[11px] font-mono text-purple-400/80">
                    {layer.category}
                  </span>

                  <div className="mt-3.5 space-y-1.5 border-t border-zinc-800/80 pt-3">
                    {layer.components.map((comp) => (
                      <div
                        key={comp.name}
                        className="flex items-center justify-between text-[11px] bg-zinc-900/60 px-2 py-1 rounded border border-zinc-800/60"
                      >
                        <span className="text-zinc-300 truncate">{comp.name}</span>
                        <span className="text-[9px] font-mono text-zinc-500 ml-1 shrink-0">
                          {comp.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>{isSelected ? 'Active Selection' : 'Click to inspect specs'}</span>
                  <ArrowRight className={`h-3 w-3 ${isSelected ? 'text-purple-400' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Drawer */}
        <div className="rounded-2xl border border-zinc-800 bg-[#131318] p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            {/* Left: Engineering Specifications */}
            <div className="lg:w-1/2 space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                  Engineering Specifications · {selectedLayer.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedLayer.title}
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-400 font-semibold mb-1">
                    <Zap className="h-3.5 w-3.5 text-purple-400" />
                    <span>Protocols & Payload Transport</span>
                  </div>
                  <p className="text-zinc-300 font-mono text-[11px]">
                    {selectedLayer.techSpecs.protocol}
                  </p>
                </div>

                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-400 font-semibold mb-1">
                    <Lock className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Security & Secret Isolation</span>
                  </div>
                  <p className="text-zinc-300 font-mono text-[11px]">
                    {selectedLayer.techSpecs.security}
                  </p>
                </div>

                <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-3">
                  <div className="flex items-center gap-1.5 text-zinc-400 font-semibold mb-1">
                    <RefreshCw className="h-3.5 w-3.5 text-blue-400" />
                    <span>Idempotency & Duplicate Prevention</span>
                  </div>
                  <p className="text-zinc-300 font-mono text-[11px]">
                    {selectedLayer.techSpecs.idempotency}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Code & Configuration Snippet */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                    <FileCode className="h-3.5 w-3.5 text-purple-400" />
                    <span>Production Architecture Implementation</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Validated Pattern
                  </span>
                </div>

                <div className="rounded-xl bg-[#0b0b0e] border border-zinc-800 p-4 font-mono text-[11px] text-purple-200 overflow-x-auto">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    {selectedLayer.codeSnippet}
                  </pre>
                </div>
              </div>

              {/* Guarantees Checklist */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Staging Sandbox Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Sub-400ms Pipeline SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Zero Broken Webhooks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Encrypted Token Vault</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
