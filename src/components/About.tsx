import React from 'react';
import {
  User,
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
  Award,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-3">
          <User className="h-4 w-4" />
          <span>ENGINEERING PROFILE & BACKGROUND</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative rounded-2xl border border-zinc-800 bg-[#131318] p-4 shadow-xl overflow-hidden">
              <div className="aspect-square w-full rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900 relative">
                <img
                  src="/src/assets/images/mehboob_profile_portrait_1791666465138.jpg"
                  alt="Mehboob Ahmed — GoHighLevel Developer & AI Automation Engineer"
                  className="h-full w-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold">{PERSONAL_INFO.name}</span>
                  <span className="font-mono text-[10px] text-purple-300 bg-purple-950/70 border border-purple-800/40 px-2 py-0.5 rounded">
                    Automation Engineer
                  </span>
                </div>
              </div>

              {/* Status details */}
              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Location:</span>
                  </span>
                  <span className="font-medium text-zinc-200">Karachi, Pakistan</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Current Role:</span>
                  </span>
                  <span className="font-medium text-purple-300">Nosh AI & Freelance</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Open To:</span>
                  </span>
                  <span className="font-medium text-emerald-400">Remote · Hybrid · On-Site</span>
                </div>
              </div>
            </div>

            {/* Quick Core Principles Box */}
            <div className="rounded-2xl border border-zinc-800 bg-[#131318] p-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Core Automation Philosophy
              </h4>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Dropped Leads:</strong> Webhooks must be idempotent with automated retries and dead-letter alert channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Pragmatic AI:</strong> Use LLMs where intent parsing and sentiment triage add genuine speed, not as decorative gimmicks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Staging Rigor:</strong> Never test multi-message SMS or email blast automations directly in live client databases.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Bio Prose, Experience & Education */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Automation-Focused Developer. Business-Driven Solutions.
              </h2>
              <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  I’m <strong>Mehboob Ahmed</strong>, a developer focused on GoHighLevel CRM,
                  workflow automation, API integrations, and AI-powered business solutions.
                  I enjoy connecting business tools, simplifying repetitive processes, and designing
                  workflows that help teams manage leads and customer communication more efficiently.
                </p>
                <p>
                  My technical background also includes full-stack web development and AI applications,
                  allowing me to build solutions that combine automation platforms with custom software.
                  Whether structuring multi-stage GHL sales pipelines, setting up round-robin appointment
                  calendars, or hooking n8n into OpenAI and WhatsApp APIs, I ensure every node serves a
                  verifiable business objective.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5 text-purple-400" />
                <span>Professional Experience Timeline</span>
              </h3>

              <div className="space-y-4 border-l border-zinc-800 ml-2 pl-4">
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-purple-500" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      AI Engineer / GoHighLevel Automation
                    </h4>
                    <span className="font-mono text-xs text-purple-400">
                      Apr &apos;26 — Present
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">Nosh AI · Karachi</div>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    Build and deploy AI-powered automation workflows, configure GoHighLevel CRM pipelines,
                    set up opportunity stages, and integrate e-commerce (Shopify, WooCommerce) with n8n and REST APIs.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      GoHighLevel & Automation Developer
                    </h4>
                    <span className="font-mono text-xs text-zinc-500">
                      Ongoing
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">Freelance / Client Projects</div>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    Develop and maintain GHL funnels, lead-routing workflows, appointment booking,
                    and cross-platform automations using n8n, Make, and webhook endpoints.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      AI Engineer (Intern)
                    </h4>
                    <span className="font-mono text-xs text-zinc-500">
                      Apr &apos;23 — Mar &apos;24
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">Epsilon Systems · Karachi</div>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    Built and productionized an AI Concierge Agent using Python, FastAPI, and GPT-4o.
                    Integrated WhatsApp Business API and HubSpot CRM for real-time customer conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic & Specialized Training */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-purple-400" />
                <span>Education & Professional Training</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-zinc-800 bg-[#131318] p-4">
                  <span className="font-mono text-[10px] text-purple-400">2025 — 2028 (Currently Enrolled)</span>
                  <h4 className="text-xs font-bold text-white mt-1">
                    BS in Computer Science
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Dawood University of Engineering & Technology, Karachi
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-[#131318] p-4">
                  <span className="font-mono text-[10px] text-purple-400">2024 — 2025</span>
                  <h4 className="text-xs font-bold text-white mt-1">
                    Generative AI, Chatbots & Data Science
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    SMIT (Saylani Mass IT Training)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
