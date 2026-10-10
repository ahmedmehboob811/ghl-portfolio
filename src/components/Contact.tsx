import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Github,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialProjectType || 'GoHighLevel CRM Setup & Configuration',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a brief description (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — From ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Mehboob,\n\nMy Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Scope & Goals:\n${formData.message}\n\nLooking forward to speaking with you.`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Mehboob, I came across your portfolio.\n\n*Name:* ${formData.name}\n*Project Type:* ${formData.projectType}\n*Scope:* ${formData.message}`
    );
    return `https://wa.me/923273604301?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
            <Mail className="h-3.5 w-3.5" />
            <span>Initiate Direct Consultation</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Have a Workflow to Automate?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Let&apos;s discuss how CRM automation, integrations, and AI can improve your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-[#131318] p-6 space-y-5">
              <h3 className="text-base font-bold text-white tracking-wide">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I respond directly to all client inquiries within 24 hours. For urgent project
                scoping, WhatsApp is typically the fastest channel.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 transition-colors hover:border-purple-500/50 hover:bg-zinc-900"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-950/60 border border-purple-800/30 text-purple-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-zinc-500">Email Address</div>
                    <div className="text-xs font-semibold text-zinc-200 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp & Phone */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 transition-colors hover:border-emerald-500/50 hover:bg-zinc-900"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950/60 border border-emerald-800/30 text-emerald-400">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-zinc-500">Phone & WhatsApp</div>
                    <div className="text-xs font-semibold text-zinc-200">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                    <Github className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-zinc-500">GitHub Profile</div>
                    <div className="text-xs font-semibold text-zinc-200">
                      github.com/ahmedmehboob811
                    </div>
                  </div>
                </a>

                {/* Live Portfolio */}
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-zinc-500">Production Portfolio</div>
                    <div className="text-xs font-semibold text-zinc-200 truncate">
                      new-portfolio-next-five.vercel.app
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Engagement Readiness Guarantee */}
            <div className="rounded-2xl border border-zinc-800 bg-[#131318] p-5 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                <ShieldCheck className="h-4 w-4 text-purple-400" />
                <span>Client Collaboration Terms</span>
              </div>
              <p className="leading-relaxed">
                Available for contract retainers, fixed-scope GoHighLevel sub-account launches,
                and dedicated full-time engineering roles. NDA compliant.
              </p>
            </div>
          </div>

          {/* Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-[#131318] p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Project Scoping Form
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your project requirements below to formulate a concrete implementation plan.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. David Vance"
                      className={`w-full rounded-lg border bg-zinc-900/90 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                        errors.name ? 'border-red-500/80' : 'border-zinc-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Business Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. david@agencygrowth.com"
                      className={`w-full rounded-lg border bg-zinc-900/90 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                        errors.email ? 'border-red-500/80' : 'border-zinc-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Service / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    >
                      <option value="GoHighLevel CRM Setup & Configuration">
                        GoHighLevel CRM Setup & Configuration
                      </option>
                      <option value="Workflow Automation & Lead Nurturing">
                        Workflow Automation & Lead Nurturing
                      </option>
                      <option value="Funnel, Form & Calendar Setup">
                        Funnel, Form & Calendar Setup
                      </option>
                      <option value="Webhook & REST API Integrations">
                        Webhook & REST API Integrations
                      </option>
                      <option value="n8n and Make Automation">
                        n8n and Make Automation
                      </option>
                      <option value="AI Chatbot & Agent Integrations">
                        AI Chatbot & Agent Integrations
                      </option>
                      <option value="Workflow Troubleshooting & Optimization">
                        Workflow Troubleshooting & Optimization
                      </option>
                      <option value="Full-Time / Contract Remote Hire">
                        Full-Time / Contract Remote Hire
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Workflow Requirements & Timeline <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Briefly describe your existing tools, desired triggers/actions, and expected launch timeline..."
                      className={`w-full rounded-lg border bg-zinc-900/90 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                        errors.message ? 'border-red-500/80' : 'border-zinc-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Honest System Notice */}
                  <div className="flex items-start gap-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 p-3 text-[11px] text-zinc-400">
                    <AlertCircle className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      To ensure guaranteed deliverability without unconfigured SMTP third-party drops, submitting formats your inquiry into pre-filled direct Email and WhatsApp dispatch options.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-600 hover:bg-purple-500 px-5 py-3 text-xs font-semibold text-white shadow-md shadow-purple-900/30 transition-all active:scale-95"
                  >
                    <span>Formulate Consultation Inquiry</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                /* Clear Success & Dispatch Options */
                <div className="space-y-5 py-2">
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Inquiry Formulated Successfully!</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your project inquiry for{' '}
                      <span className="text-purple-300 font-medium">{formData.projectType}</span> is prepared.
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400">
                    Choose your preferred communication dispatch to connect immediately:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getMailtoLink()}
                      className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 hover:bg-purple-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send via WhatsApp Chat</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'GoHighLevel CRM Setup & Configuration',
                        message: '',
                      });
                    }}
                    className="w-full py-2 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    ← Edit or Submit Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
