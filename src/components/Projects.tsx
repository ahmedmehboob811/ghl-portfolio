import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ArrowRight,
  X,
  CheckCircle2,
  Workflow,
  Cpu,
  ShieldAlert,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
              <FolderGit2 className="h-4 w-4" />
              <span>PRODUCTION WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Client & Engineering Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Real-world GoHighLevel systems, e-commerce middleware, and full-stack AI engineering.
              Documented with honest architecture specifications and zero fabricated vanity metrics.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono">
            4 Documented Case Studies
          </div>
        </div>

        {/* 2x2 Grid of Detailed Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131318] p-6 transition-all duration-200 hover:border-purple-500/40 hover:bg-[#161622] hover:shadow-xl hover:shadow-purple-950/20"
            >
              <div>
                {/* Header row: category & status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-purple-400">
                    {project.category}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-mono ${
                      project.isConceptualOrPlanned
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                    }`}
                  >
                    {project.statusBadge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400">
                  {project.subtitle}
                </p>

                {/* Challenge Summary */}
                <div className="mt-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 p-3.5">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Business Challenge:
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                    {project.challenge}
                  </p>
                </div>

                {/* Workflow Highlights */}
                <div className="mt-4 space-y-1.5">
                  {project.workflowHighlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-purple-400 font-mono text-[10px] mt-0.5">▸</span>
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Read Full Architecture Case Study</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-purple-600/30 border border-purple-500/40 text-[11px] font-medium text-purple-200 hover:bg-purple-600/50 transition-colors"
                      title="Open Live Application"
                    >
                      <span>Live App</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-700 bg-[#131318] p-6 sm:p-8 shadow-2xl my-8">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                      {selectedProject.category}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {selectedProject.timeline}
                    </span>
                    <span
                      className={`ml-2 rounded px-2 py-0.5 text-[10px] font-mono ${
                        selectedProject.isConceptualOrPlanned
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                      }`}
                    >
                      {selectedProject.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    Role: <span className="text-zinc-200 font-medium">{selectedProject.role}</span>
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Notice for planned architecture if applicable */}
              {selectedProject.isConceptualOrPlanned && (
                <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-950/20 p-3 text-xs text-amber-200">
                  <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Honest Disclosure:</span> This project reflects a comprehensive
                    automation system architecture and state-machine design for client stakeholder review, clearly distinguishing planned architecture from production-deployed components.
                  </div>
                </div>
              )}

              {/* Challenge & Solution */}
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    The Business Challenge
                  </h4>
                  <p className="mt-1 text-zinc-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Engineered Solution & Implementation
                  </h4>
                  <p className="mt-1 text-zinc-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Flow */}
              <div className="mt-6 rounded-xl border border-purple-500/30 bg-[#0e0e13] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-2">
                  <Workflow className="h-4 w-4 text-purple-400" />
                  <span>Architecture Data Pipeline Flow</span>
                </div>
                <div className="rounded-lg bg-zinc-950/80 border border-zinc-800 p-3 font-mono text-xs text-purple-200 leading-relaxed">
                  {selectedProject.architectureOverview}
                </div>
              </div>

              {/* Workflow Key Highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Key Technical Workflow Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.workflowHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
