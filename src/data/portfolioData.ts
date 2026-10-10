export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  role: string;
  challenge: string;
  solution: string;
  technologies: string[];
  workflowHighlights: string[];
  architectureOverview: string;
  liveUrl?: string;
  githubUrl?: string;
  isConceptualOrPlanned?: boolean;
  statusBadge: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export interface OpportunityItem {
  id: string;
  contactName: string;
  company: string;
  email: string;
  phone: string;
  value: number;
  tags: string[];
  stage: 'new' | 'qualified' | 'followup' | 'booked' | 'won';
  lastActivity: string;
  assignedTo: string;
  customFields: { key: string; value: string }[];
  activeWorkflow: string;
}

export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'wait' | 'integration';
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  triggerEvent?: string;
  actionDetails?: string;
  conditions?: string[];
  outputData: Record<string, any>;
}

export const PERSONAL_INFO = {
  name: 'Mehboob Ahmed',
  tagline: 'GoHighLevel Developer & AI Automation Engineer',
  headline: 'I Build GoHighLevel Automations That Turn Leads Into Customers.',
  subheadline:
    'I help businesses streamline CRM workflows, automate lead follow-ups, build conversion-focused funnels, and connect GoHighLevel with AI tools and external platforms.',
  location: 'Karachi, Pakistan',
  availability: 'Available for Remote, Hybrid & On-Site Opportunities',
  email: 'ahmedmehboob811@gmail.com',
  phone: '+92 327 3604301',
  whatsappUrl: 'https://wa.me/923273604301',
  githubUrl: 'https://github.com/ahmedmehboob811',
  portfolioUrl: 'https://new-portfolio-next-five.vercel.app/',
  currentRole: 'AI Engineer / GoHighLevel Automation at Nosh AI',
};

export const CORE_EXPERTISE = [
  {
    title: 'GoHighLevel CRM',
    description:
      'Complete sub-account configuration, pipeline structuring, opportunity management, custom fields, and lead lifecycle optimization.',
    capabilities: [
      'Pipelines and custom opportunity stages',
      'Contact management & smart lists',
      'Tags, custom fields & custom values',
      'Lead lifecycle tracking & audit logs',
    ],
    icon: 'Layers',
  },
  {
    title: 'Workflow Automation',
    description:
      'Building multi-step automation engines that eliminate repetitive manual follow-ups, route leads instantly, and prevent missed sales.',
    capabilities: [
      'Multi-branch triggers & conditional logic',
      'Automated lead routing & owner assignment',
      'Multi-channel follow-up sequences (SMS, Email, WA)',
      'Calendar reminders & no-show recovery flows',
    ],
    icon: 'GitBranch',
  },
  {
    title: 'Funnels & Landing Pages',
    description:
      'Conversion-centered funnel design and technical setup, integrating custom forms, surveys, calendars, and instant CRM ingestion.',
    capabilities: [
      'Landing pages & high-converting funnels',
      'Embedded forms, surveys & qualification quiz',
      'Round-robin & booking calendar setup',
      'Lead capture experiences with instant alerts',
    ],
    icon: 'Layout',
  },
  {
    title: 'API & Integrations',
    description:
      'Connecting GoHighLevel seamlessly with external business tools, webhooks, middleware orchestrators, and e-commerce platforms.',
    capabilities: [
      'REST APIs, webhooks & JSON payload transforms',
      'n8n & Make workflow orchestrations',
      'Shopify & WooCommerce e-commerce sync',
      'Twilio, WhatsApp Business API & Stripe',
    ],
    icon: 'Network',
  },
  {
    title: 'AI Automation',
    description:
      'Infusing intelligence into CRM operations using modern LLMs, automated sentiment scoring, conversational routing, and agent concepts.',
    capabilities: [
      'AI-powered lead classification & scoring',
      'OpenAI & Gemini API integrations',
      'Conversational AI follow-up agents',
      'Agentic automation concepts & prompt architectures',
    ],
    icon: 'Cpu',
  },
  {
    title: 'Testing & Optimization',
    description:
      'Rigorous end-to-end testing across staging and production to guarantee zero lost leads, idempotent webhooks, and flawless execution.',
    capabilities: [
      'End-to-end customer journey testing',
      'API payload validation & webhook debugging',
      'Fail-safe error handling & retry mechanisms',
      'Staging vs production deployment hygiene',
    ],
    icon: 'CheckCircle2',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'nosh-ai',
    title: 'Nosh AI — CRM & AI Automation',
    subtitle: 'End-to-end GHL sales pipeline, e-commerce sync & automated client communications',
    category: 'Client Work / Automation',
    timeline: '2026 — Present',
    role: 'AI Engineer / GoHighLevel Automation',
    statusBadge: 'Active Client System',
    challenge:
      'The client needed a unified business automation engine to handle inbound sales inquiries from e-commerce platforms, eliminate manual lead entry, and trigger rapid AI-informed follow-ups without sales reps dropping warm prospects.',
    solution:
      'Designed and deployed GoHighLevel CRM pipelines with customized opportunity stages and custom fields. Connected external e-commerce events via n8n webhooks, normalized JSON payloads, routed qualified prospects to dedicated pipeline columns, and orchestrated automated multi-channel follow-up sequences with error-handling fallback logic.',
    technologies: [
      'GoHighLevel CRM',
      'n8n Orchestration',
      'Webhooks & REST APIs',
      'Shopify & WooCommerce Sync',
      'OpenAI / Gemini Services',
      'Custom Values & Fields',
    ],
    workflowHighlights: [
      'Inbound webhook listener captures customer order & inquiry data in under 400ms',
      'n8n workflow parses cart metadata and checks CRM duplicate contacts via email/phone',
      'GHL pipeline auto-creates opportunity with calculated deal value and assigns sales rep',
      'Multi-touch follow-up triggers automated SMS/email sequence with calendar booking link',
    ],
    architectureOverview:
      'E-commerce Platform / Webhook → n8n Middleware (Payload Transformation & Secret Token Auth) → GoHighLevel V2 API (Contact Upsert & Pipeline Stage) → AI Enrichment Node (Intent Classification) → Automated Task / WhatsApp Notification.',
  },
  {
    id: 'dhj-insurance',
    title: 'DHJ Insurance — Agentic Automation System',
    subtitle: 'Architecture for customer service, outbound calling & smart application assistance',
    category: 'Client Project / Architecture Design',
    timeline: '2026',
    role: 'Lead Automation Architect',
    statusBadge: 'Designed Architecture',
    isConceptualOrPlanned: true,
    challenge:
      'Insurance customer onboarding and policy inquiry triage required heavy manual phone screening and paperwork assistance. The client needed a blueprint to integrate AI conversational voice agents with CRM policy records while strictly managing customer secrets and communication compliance.',
    solution:
      'Architected an agentic automation system connecting n8n, SuiteDash CRM, Twilio SIP trunking, and ElevenLabs conversational voice agents. Outlined stateful webhook handoffs where an AI voice agent gathers preliminary insurance criteria, validates required fields, updates CRM records, and escalates edge cases to human underwriters.',
    technologies: [
      'n8n Workflow Engine',
      'SuiteDash CRM',
      'Twilio Voice & SMS',
      'ElevenLabs Voice AI',
      'OpenAI LLM APIs',
      'Encrypted Webhook Gateways',
    ],
    workflowHighlights: [
      'Comprehensive system architecture blueprint clearly separating deployed vs planned components',
      'State machine design for outbound follow-up calls with fallback to human rep on voice hesitation',
      'Form/application assistance flow validating KYC data prior to CRM opportunity stage progression',
      'Secure credential handling pattern preventing API keys and HIPAA/PII leaks across nodes',
    ],
    architectureOverview:
      'Planned Workflow: Inbound Lead → n8n Webhook Router → ElevenLabs Conversational Voice Agent via Twilio → Speech-to-Intent Parser → SuiteDash API Record Update → Conditional Underwriter Notification.',
  },
  {
    id: 'online-water-filters',
    title: 'Online Water Filters — WooCommerce Automation',
    subtitle: 'Operational e-commerce workflows, form routing & staging-to-production stabilization',
    category: 'Client Project / E-Commerce Operations',
    timeline: '2026',
    role: 'Automation & Systems Developer',
    statusBadge: 'Production Deployed',
    challenge:
      'An established e-commerce business was experiencing plugin conflicts, unstable customer-facing forms, untracked abandoned checkouts, and brittle tracking scripts across WooCommerce staging and live environments.',
    solution:
      'Audited and consolidated redundant plugins, repaired checkout tracking and inquiry forms, and established clean operational automations. Built webhook triggers for order notifications and inventory alerts while preserving strict staging/production deployment protocols.',
    technologies: [
      'WooCommerce',
      'WordPress APIs',
      'Webhook Dispatchers',
      'Staging vs Production Controls',
      'Tracking & Tag Manager',
      'Plugin Consolidation',
    ],
    workflowHighlights: [
      'Form submission routing verified across staging environments before production cutover',
      'Consolidated 6 bloated plugin scripts into direct API and lightweight webhook hooks',
      'Automated email and operational alerts on failed orders and inventory thresholds',
      'Zero downtime migration and verified checkout flow integrity',
    ],
    architectureOverview:
      'WooCommerce Store Hook → Custom REST Endpoint → Operational Filter / Validation → Staging Sandbox Test → Production Automated Dispatch.',
  },
  {
    id: 'ai-interview-prep',
    title: 'AI Interview Prep — Full-Stack Web Application',
    subtitle: 'Production AI platform generating dynamic technical interview questions with real-time feedback',
    category: 'Full-Stack Software / AI Engineering',
    timeline: '2025 — 2026',
    role: 'Full-Stack Developer & AI Engineer',
    statusBadge: 'Live Production App',
    liveUrl: 'https://ai-interview-prep-rgyg.vercel.app/',
    githubUrl: 'https://github.com/ahmedmehboob811/AI-Interview-Prep',
    challenge:
      'Job seekers lack interactive, contextual interview practice with objective, role-specific feedback. Static question banks fail to adapt to candidate answers, seniority levels, or technical stacks.',
    solution:
      'Engineered a complete full-stack web application powered by Google Gemini AI. Users select target job roles, seniority, and tech stack; the app dynamically prompts Gemini to generate tailored questions, analyzes user responses in real time, and scores clarity, depth, and technical accuracy.',
    technologies: [
      'Google Gemini API',
      'React & TypeScript',
      'Node.js & Express',
      'MongoDB & Mongoose',
      'JWT Authentication',
      'Tailwind CSS',
    ],
    workflowHighlights: [
      'Secure JWT authentication and user session management with protected routes',
      'Structured prompt engineering yielding deterministic JSON responses for automated grading',
      'Real-time candidate score breakdown with actionable suggestions for answer improvement',
      'Deployed on Vercel with responsive mobile and desktop user experience',
    ],
    architectureOverview:
      'React Client → Express Backend (Auth Middleware) → Gemini API (Structured Evaluation Prompt) → MongoDB (User Progress & Score Archive) → Instant Feedback Stream.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ghl-crm-setup',
    title: 'GoHighLevel CRM Setup & Configuration',
    description:
      'End-to-end architecture of your GoHighLevel sub-account tailored to your specific sales cycle, lead sources, and team hierarchy.',
    deliverables: [
      'Pipeline stages and custom opportunity values',
      'Contact fields, tags & custom values setup',
      'User permission matrix & lead assignment rules',
      'Smart lists and segmentation views',
    ],
    idealFor: 'Digital agencies, SaaS companies, and service businesses migrating to or launching on GoHighLevel.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & Lead Nurturing',
    description:
      'Multi-touch automations that contact leads within seconds, follow up across channels, and revive cold prospects without manual intervention.',
    deliverables: [
      'Instant lead auto-responders (SMS, Email, WhatsApp)',
      'Multi-day behavioral nurture sequences',
      'Stale lead re-engagement automations',
      'Internal team notifications & task generation',
    ],
    idealFor: 'Businesses losing leads due to slow response times or inconsistent manual follow-ups.',
  },
  {
    id: 'funnels-calendars',
    title: 'Funnel, Form & Calendar Setup',
    description:
      'High-converting landing pages, qualification forms, and scheduling calendars wired directly into your CRM pipelines.',
    deliverables: [
      'Mobile-optimized funnels & landing pages',
      'Multi-step qualification forms & surveys',
      'Round-robin and individual calendar setup',
      'Automated booking confirmations & reminder cadence',
    ],
    idealFor: 'Companies needing seamless lead capture from ad clicks directly to booked sales calls.',
  },
  {
    id: 'webhook-api',
    title: 'Webhook & REST API Integrations',
    description:
      'Connecting GoHighLevel with external databases, e-commerce stores, custom frontend apps, and third-party tools.',
    deliverables: [
      'Custom webhook listeners & payload mapping',
      'GoHighLevel V2 REST API integrations',
      'Shopify & WooCommerce two-way order sync',
      'Error catching, logging, and retry handlers',
    ],
    idealFor: 'Businesses needing GoHighLevel to talk reliably to external platforms without data loss.',
  },
  {
    id: 'n8n-make',
    title: 'n8n & Make Automation Architecture',
    description:
      'Building robust middleware workflows in n8n or Make for complex data transformation, multi-app routing, and scheduled sync jobs.',
    deliverables: [
      'Self-hosted or cloud n8n workflow deployment',
      'Complex JSON parsing and conditional branching',
      'Database synchronization (PostgreSQL, MongoDB, Sheets)',
      'Secure secrets management & rate-limit throttling',
    ],
    idealFor: 'Teams that outgrew basic native GHL actions and require advanced programmatic automation.',
  },
  {
    id: 'ai-integrations',
    title: 'AI Chatbot & Agent Integrations',
    description:
      'Incorporating OpenAI and Gemini intelligence into your GoHighLevel and messaging channels for automated qualification and smart replies.',
    deliverables: [
      'AI prompt engineering & system instructions',
      'Lead intent classification & sentiment scoring',
      'WhatsApp & SMS AI assistant workflow handoffs',
      'Human agent fallback triggers on sensitive questions',
    ],
    idealFor: 'Businesses wanting 24/7 intelligent initial response and pre-qualification before human sales involvement.',
  },
  {
    id: 'workflow-troubleshooting',
    title: 'Workflow Troubleshooting & Optimization',
    description:
      'Deep forensic audit of broken GHL triggers, duplicate contact loops, failed webhooks, and delayed message delivery.',
    deliverables: [
      'Comprehensive workflow logic audit',
      'Duplicate suppression and tag cleanup',
      'Webhook payload error tracing & resolution',
      'Staging verification before live deployment',
    ],
    idealFor: 'Agencies with messy existing sub-accounts suffering from broken automations or confused clients.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'GoHighLevel & CRM',
    description: 'Sub-account architecture, lead governance, and custom data modeling.',
    skills: [
      { name: 'GoHighLevel (GHL)', level: 'Advanced', note: 'Pipelines, Opportunities, Sub-accounts' },
      { name: 'CRM Pipelines', level: 'Advanced', note: 'Custom stages, lead valuation, conversion tracking' },
      { name: 'Custom Fields & Values', level: 'Advanced', note: 'Dynamic merge tags, account-wide parameters' },
      { name: 'Tags & Smart Lists', level: 'Advanced', note: 'Dynamic segmentation, behavioral filtering' },
      { name: 'Calendars & Booking', level: 'Proficient', note: 'Round-robin, team calendars, no-show alerts' },
      { name: 'Forms & Surveys', level: 'Proficient', note: 'Qualification logic, conditional fields' },
    ],
  },
  {
    category: 'Automation & Middleware',
    description: 'Building reliable event-driven automation engines and middleware.',
    skills: [
      { name: 'Workflow Automation', level: 'Advanced', note: 'Triggers, multi-step actions, delays' },
      { name: 'n8n', level: 'Advanced', note: 'Self-hosted nodes, JSON manipulation, error workflows' },
      { name: 'Make (Integromat)', level: 'Proficient', note: 'Cross-app routing, webhook triggers, iterators' },
      { name: 'Conditional Logic', level: 'Advanced', note: 'Branching paths, if/else validations, fallback' },
      { name: 'Lead Routing', level: 'Advanced', note: 'Round-robin rep assignment, score-based routing' },
      { name: 'Webhook Handlers', level: 'Advanced', note: 'Custom POST/GET endpoints, signature verification' },
    ],
  },
  {
    category: 'Integrations & Messaging',
    description: 'Connecting GoHighLevel to the modern tech stack and external communications.',
    skills: [
      { name: 'REST APIs & JSON', level: 'Advanced', note: 'GHL V2 API, cURL, Postman payload testing' },
      { name: 'Twilio SMS & Voice', level: 'Proficient', note: 'SMS automations, phone routing, call triggers' },
      { name: 'WhatsApp Business API', level: 'Proficient', note: 'Conversational messaging, templated alerts' },
      { name: 'WooCommerce & Shopify', level: 'Proficient', note: 'Order webhooks, cart abandon, customer sync' },
      { name: 'OAuth & Secrets', level: 'Proficient', note: 'Bearer tokens, API key rotation, security hygiene' },
      { name: 'HubSpot & SuiteDash', level: 'Familiar', note: 'Cross-CRM data migration & synchronization' },
    ],
  },
  {
    category: 'AI & Conversational Systems',
    description: 'Practical artificial intelligence for intent parsing, routing, and assistant bots.',
    skills: [
      { name: 'OpenAI APIs (GPT-4o)', level: 'Proficient', note: 'Function calling, structured JSON output' },
      { name: 'Google Gemini API', level: 'Proficient', note: 'Multimodal prompts, fast reasoning endpoints' },
      { name: 'Prompt Engineering', level: 'Advanced', note: 'Deterministic outputs, system personas, guardrails' },
      { name: 'Conversational AI', level: 'Proficient', note: 'Multi-turn dialog trees, human escalations' },
      { name: 'RAG Concepts', level: 'Proficient', note: 'Knowledge retrieval, context augmentation' },
      { name: 'ElevenLabs Voice AI', level: 'Familiar', note: 'Conversational voice agents, telephony synthesis' },
    ],
  },
  {
    category: 'Frontend & Full-Stack',
    description: 'Custom web development to build bespoke client tools and landing pages.',
    skills: [
      { name: 'React & TypeScript', level: 'Proficient', note: 'Component architectures, state management' },
      { name: 'Next.js', level: 'Proficient', note: 'App router, server-side APIs, performance' },
      { name: 'Tailwind CSS', level: 'Advanced', note: 'Responsive design, custom themes, dark interfaces' },
      { name: 'Node.js & Express', level: 'Proficient', note: 'Custom webhook proxy endpoints, REST services' },
      { name: 'MongoDB', level: 'Proficient', note: 'Document schemas, Mongoose models, data logs' },
      { name: 'Landing Pages & Funnels', level: 'Advanced', note: 'Mobile-first conversion optimization' },
    ],
  },
  {
    category: 'Tools & Engineering Practices',
    description: 'DevOps, version control, and production reliability tools.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', note: 'Branching, PR reviews, release workflows' },
      { name: 'Postman', level: 'Advanced', note: 'API collection testing, environment variables' },
      { name: 'Vercel & Render', level: 'Proficient', note: 'Deployments, environment configs, monitoring' },
      { name: 'Staging / Prod Hygiene', level: 'Advanced', note: 'Testing automations with test leads before cutover' },
      { name: 'Error Handling & Logs', level: 'Advanced', note: 'Alerting on failed triggers, dead-letter logic' },
      { name: 'VS Code & Linux CLI', level: 'Advanced', note: 'Scripting, curl debugging, environment setups' },
    ],
  },
];

export const MOCK_PIPELINE_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-1',
    contactName: 'Sarah Jenkins',
    company: 'Apex Digital Growth',
    email: 'sarah@apexdigital.io',
    phone: '+1 (555) 234-8901',
    value: 4800,
    tags: ['tag:inbound-ad', 'tag:high-intent', 'tag:agency-owner'],
    stage: 'new',
    lastActivity: 'Form submitted 4m ago',
    assignedTo: 'Mehboob Ahmed',
    activeWorkflow: 'WF-01: Instant Lead Router',
    customFields: [
      { key: 'Monthly Ad Spend', value: '$10k - $25k' },
      { key: 'Primary Pain Point', value: 'Manual Lead Follow-up Lag' },
      { key: 'Target CRM', value: 'GoHighLevel Pro' },
    ],
  },
  {
    id: 'opp-2',
    contactName: 'Marcus Vance',
    company: 'Solstice Solar Solutions',
    email: 'marcus@solsticesolar.com',
    phone: '+1 (555) 892-4412',
    value: 8500,
    tags: ['tag:high-intent', 'tag:sms-engaged', 'tag:ai-scored-92'],
    stage: 'qualified',
    lastActivity: 'AI qualification completed 18m ago',
    assignedTo: 'Mehboob Ahmed',
    activeWorkflow: 'WF-02: AI Intent Qualifier',
    customFields: [
      { key: 'Homeownership Verified', value: 'Yes (Single Family)' },
      { key: 'Credit Score Band', value: '700+' },
      { key: 'Estimated Roof Size', value: '2,400 sq ft' },
    ],
  },
  {
    id: 'opp-3',
    contactName: 'Elena Rostova',
    company: 'Velox MedSpa Clinics',
    email: 'elena@veloxmedspa.com',
    phone: '+1 (555) 431-7789',
    value: 3200,
    tags: ['tag:cadence-step-2', 'tag:sms-delivered', 'tag:wa-engaged'],
    stage: 'followup',
    lastActivity: 'WhatsApp follow-up sent 35m ago',
    assignedTo: 'Mehboob Ahmed',
    activeWorkflow: 'WF-03: Multi-Touch WhatsApp Cadence',
    customFields: [
      { key: 'Treatment Interest', value: 'CoolSculpting & Laser' },
      { key: 'Preferred Time', value: 'Weekday Afternoons' },
      { key: 'Booking Status', value: 'Calendar Link Opened' },
    ],
  },
  {
    id: 'opp-4',
    contactName: 'David Sterling',
    company: 'Sterling Capital Advisors',
    email: 'david@sterlingadvisors.net',
    phone: '+1 (555) 671-0023',
    value: 12000,
    tags: ['tag:calendar-booked', 'tag:vip-prospect', 'tag:zoom-ready'],
    stage: 'booked',
    lastActivity: 'Consultation booked for Tomorrow, 3:00 PM',
    assignedTo: 'Mehboob Ahmed',
    activeWorkflow: 'WF-04: Calendar Prep & SMS Reminders',
    customFields: [
      { key: 'Asset Base', value: '$2.5M+' },
      { key: 'Meeting Host', value: 'Senior Partner' },
      { key: 'Meeting Platform', value: 'Zoom Auto-Generated' },
    ],
  },
  {
    id: 'opp-5',
    contactName: 'Liam O’Connor',
    company: 'Celtic Freight Logistics',
    email: 'liam@celticfreight.co',
    phone: '+1 (555) 782-9900',
    value: 15500,
    tags: ['tag:contract-signed', 'tag:deposit-paid', 'tag:client-onboarded'],
    stage: 'won',
    lastActivity: 'Stripe deposit cleared · GHL sub-account deployed',
    assignedTo: 'Mehboob Ahmed',
    activeWorkflow: 'WF-05: Post-Sale Onboarding Automation',
    customFields: [
      { key: 'Retainer Plan', value: 'Custom Enterprise Automation' },
      { key: 'Contract Term', value: '6 Months' },
      { key: 'Onboarding Phase', value: 'Discovery & Schema Mapping' },
    ],
  },
];

export interface WorkflowDemo {
  id: string;
  name: string;
  triggerLabel: string;
  summary: string;
  nodes: WorkflowNode[];
}

export const WORKFLOW_LAB_DEMOS: WorkflowDemo[] = [
  {
    id: 'lead-to-appointment',
    name: 'Lead Capture to Appointment & WhatsApp Nurture',
    triggerLabel: 'GHL Form Submission',
    summary: 'Captures ad inbound lead, enriches contact, checks priority score, fires instant WhatsApp alert, and handles booking branches.',
    nodes: [
      {
        id: 'node-1',
        type: 'trigger',
        title: 'New Lead Captured',
        subtitle: 'GHL Form / Survey Submit',
        iconName: 'Inbox',
        description: 'Triggers in real-time when a prospect completes the qualification form or Facebook Lead Ad integration.',
        triggerEvent: 'Form: "Agency Strategy Session Audit Form"',
        outputData: {
          event: 'contact.form_submission',
          timestamp: '2026-10-10T14:10:00Z',
          lead: {
            name: 'Jordan Miller',
            email: 'jordan@strataflows.com',
            phone: '+15559876543',
            business_type: 'E-commerce Brand',
            monthly_revenue: '$45,000',
          },
        },
      },
      {
        id: 'node-2',
        type: 'action',
        title: 'Upsert Contact & Parse Fields',
        subtitle: 'Contact Deduplication',
        iconName: 'UserCheck',
        description: 'Searches GoHighLevel for existing email or phone. Creates new contact record or updates custom fields without overriding notes.',
        actionDetails: 'GoHighLevel Contact Service · Deduplicate on Email / Phone',
        outputData: {
          status: 'contact_created',
          contact_id: 'ghl_cnt_9843109a',
          custom_fields: {
            monthly_revenue_tier: 'Growth Tier ($25k-$100k)',
            lead_channel: 'Meta Ads Funnel 02',
            lifecycle_stage: 'Marketing Qualified Lead',
          },
        },
      },
      {
        id: 'node-3',
        type: 'action',
        title: 'Assign Pipeline & Valuation',
        subtitle: 'Pipeline Stage: New Inbound',
        iconName: 'Kanban',
        description: 'Moves lead into the "B2B Client Acquisition" pipeline with an estimated opportunity value of $3,500.',
        actionDetails: 'Pipeline: "Agency Sales Engine" · Stage: "New Inbound Leads"',
        outputData: {
          opportunity_id: 'opp_8812a',
          pipeline_name: 'Agency Sales Engine',
          stage_name: 'New Inbound Leads',
          monetary_value: 3500,
          currency: 'USD',
        },
      },
      {
        id: 'node-4',
        type: 'action',
        title: 'Apply GHL Tags',
        subtitle: 'Segmentation Tags',
        iconName: 'Tag',
        description: 'Attaches tags to enable instant smart-list filtering and prevent duplicate welcome campaigns.',
        actionDetails: 'Tags applied: tag:inbound-lead, tag:ecom-inquiry, tag:audit-requested',
        outputData: {
          tags_applied: ['tag:inbound-lead', 'tag:ecom-inquiry', 'tag:audit-requested'],
          assigned_rep: 'Mehboob Ahmed',
        },
      },
      {
        id: 'node-5',
        type: 'condition',
        title: 'Lead Score / Revenue Condition',
        subtitle: 'If Revenue >= $25k',
        iconName: 'GitFork',
        description: 'Evaluates conditional branch: High revenue leads receive instant executive WhatsApp booking message; smaller leads receive standard email guide.',
        conditions: [
          'Condition: monthly_revenue >= $25,000 == TRUE',
          'Condition: country_code == US/CA/UK == TRUE',
        ],
        outputData: {
          branch_selected: 'Branch A: VIP WhatsApp Fast-Track',
          priority_tier: 'High Priority (P1)',
          sla_minutes: 2,
        },
      },
      {
        id: 'node-6',
        type: 'action',
        title: 'Send Instant WhatsApp & SMS',
        subtitle: 'Twilio / WhatsApp API',
        iconName: 'MessageSquare',
        description: 'Dispatches personalized interactive WhatsApp template with dynamic calendar booking link tokenized with contact ID.',
        actionDetails: 'Template: "hi_jordan_ecom_audit_ready" · Sender: WhatsApp Business API',
        outputData: {
          message_id: 'wa_msg_44901823',
          recipient: '+15559876543',
          delivery_status: 'delivered',
          read_receipt: 'read (0.8s)',
          payload_preview: 'Hey Jordan! Saw your e-com audit request for StrataFlows. Pick your 20-min slot here: cal.ghl/mehboob?id=9843109a',
        },
      },
      {
        id: 'node-7',
        type: 'wait',
        title: 'Wait & Check Response',
        subtitle: '15-Minute Dynamic Wait',
        iconName: 'Clock',
        description: 'Pauses workflow execution while listening for calendar webhook triggers or reply SMS before triggering follow-up.',
        actionDetails: 'Wait Duration: 15 minutes OR until trigger "Appointment Booked"',
        outputData: {
          status: 'event_listener_active',
          listening_for: ['appointment.booked', 'message.inbound_reply'],
          next_check: 'T+15 minutes',
        },
      },
      {
        id: 'node-8',
        type: 'action',
        title: 'Appointment Booked Branch',
        subtitle: 'Sync Calendar & Send Reminders',
        iconName: 'CalendarCheck',
        description: 'When prospect schedules, updates GHL pipeline to "Demo Booked", generates Zoom link, and arms 24h & 1h SMS reminders.',
        actionDetails: 'Stage: "Call / Demo Booked" · Add Tag: tag:booked-call · Disarm Cold Follow-up',
        outputData: {
          appointment_id: 'apt_552199',
          start_time: '2026-10-12T15:00:00Z',
          zoom_meeting_url: 'https://zoom.us/j/9921820491',
          reminders_scheduled: ['T-24h SMS', 'T-1h SMS & WhatsApp reminder'],
        },
      },
    ],
  },
  {
    id: 'ecommerce-webhook-n8n',
    name: 'E-Commerce Webhook → n8n → Gemini AI → GHL Pipeline',
    triggerLabel: 'WooCommerce / Shopify Webhook',
    summary: 'Catches store event via n8n webhook, parses abandoned cart payload, uses Gemini to analyze buyer intent, and pushes enriched lead to GoHighLevel.',
    nodes: [
      {
        id: 'e-node-1',
        type: 'trigger',
        title: 'Store Webhook Trigger',
        subtitle: 'Shopify / WooCommerce Event',
        iconName: 'ShoppingCart',
        description: 'Fired when a buyer abandons checkout or submits a wholesale enquiry form on the e-commerce store.',
        triggerEvent: 'Event: checkout/create · status: abandoned_checkout',
        outputData: {
          cart_token: 'cart_tk_88301b',
          customer_email: 'alex.chen@innovatetech.org',
          total_price: '$1,850.00',
          items: ['Enterprise Filtration Skid Unit x1', 'Replacement Carbon Canister Pack x2'],
        },
      },
      {
        id: 'e-node-2',
        type: 'integration',
        title: 'n8n Middleware Ingestion',
        subtitle: 'Payload Sanitization & Auth',
        iconName: 'Workflow',
        description: 'n8n webhook node validates cryptographic signature, extracts item SKUs, and flattens nested customer records.',
        actionDetails: 'n8n Workflow: "Shopify to GHL Syncer v2" · Runtime: Node.js / Docker',
        outputData: {
          signature_valid: true,
          sanitized_data: {
            lead_name: 'Alex Chen',
            email: 'alex.chen@innovatetech.org',
            cart_value: 1850.0,
            sku_count: 2,
          },
        },
      },
      {
        id: 'e-node-3',
        type: 'action',
        title: 'Gemini AI Intent Classification',
        subtitle: 'LLM Prompt & Scoring',
        iconName: 'Sparkles',
        description: 'Passes cart items and historical customer questions to Gemini API to determine intent category, urgency, and recommended discount code.',
        actionDetails: 'Model: gemini-2.5-flash · System Prompt: "Analyze commercial cart items & generate personalized objection handler"',
        outputData: {
          ai_intent_category: 'B2B Commercial Commercial Filtration',
          urgency_score: 'High (0.89)',
          recommended_offer: 'Free freight shipping code + 15-min technician consultation',
          summary_note: 'Buyer looked at industrial grade units; high conversion probability if commercial spec sheet provided.',
        },
      },
      {
        id: 'e-node-4',
        type: 'action',
        title: 'Upsert GoHighLevel Contact',
        subtitle: 'GHL REST API v2',
        iconName: 'Database',
        description: 'Makes authenticated REST POST to GoHighLevel v2 API. Stores Gemini AI summary in custom note and attaches e-commerce tags.',
        actionDetails: 'Endpoint: POST https://services.leadconnectorhq.com/contacts/',
        outputData: {
          ghl_contact_id: 'ghl_cnt_11209384',
          custom_fields_saved: {
            ai_intent_score: '89/100',
            cart_abandon_value: '$1,850.00',
            cart_items: 'Commercial Filtration Skid',
          },
          status: 200,
        },
      },
      {
        id: 'e-node-5',
        type: 'action',
        title: 'Create Deal in Pipeline',
        subtitle: 'Stage: High-Value Recovery',
        iconName: 'CheckCircle',
        description: 'Places deal into the "E-commerce Recovery" pipeline and sends high-priority Slack/WhatsApp alert to sales rep with one-click dialer.',
        actionDetails: 'Pipeline: "E-Commerce Recovery" · Opportunity Value: $1,850 · Priority: High',
        outputData: {
          opportunity_id: 'opp_recov_4412',
          sales_rep_notified: 'Mehboob Ahmed (via Telegram / WhatsApp alert)',
          next_scheduled_action: 'Automated 1-hour personalized recovery SMS with dynamic freight waiver token',
        },
      },
    ],
  },
];
