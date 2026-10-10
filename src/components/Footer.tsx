import React from 'react';
import { Github, Mail, MessageSquare, ArrowUp, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#070709] py-12 text-xs text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-400 font-mono text-xs font-bold">
                MA
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {PERSONAL_INFO.tagline} · Karachi, Pakistan
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-zinc-400">
            <a
              href="#hero"
              className="hover:text-purple-300 transition-colors"
            >
              Overview
            </a>
            <a
              href="#pipeline-demo"
              className="hover:text-purple-300 transition-colors"
            >
              GHL Pipeline
            </a>
            <a
              href="#workflow-lab"
              className="hover:text-purple-300 transition-colors"
            >
              Workflow Lab
            </a>
            <a
              href="#architecture"
              className="hover:text-purple-300 transition-colors"
            >
              Architecture
            </a>
            <a
              href="#projects"
              className="hover:text-purple-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-purple-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#skills"
              className="hover:text-purple-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-purple-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-[11px] font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved. Built with precision for GoHighLevel & AI Automation.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
