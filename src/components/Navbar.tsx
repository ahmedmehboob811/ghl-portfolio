import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'GHL Pipeline', href: '#pipeline-demo' },
    { label: 'Workflow Lab', href: '#workflow-lab' },
    { label: 'AI Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2.5 whitespace-nowrap text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90 shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-400 font-mono text-sm font-semibold group-hover:border-purple-400 transition-colors">
            MA
          </span>
          <span className="text-sm font-semibold tracking-wide text-zinc-100">
            Mehboob Ahmed <span className="text-zinc-500 font-normal">/ GHL & AI</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, clean unboxed text) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="whitespace-nowrap transition-colors hover:text-purple-300 shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center justify-center gap-1.5 rounded-lg bg-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-purple-500 active:scale-95 whitespace-nowrap"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-[#0c0c10] px-4 py-5 lg:hidden">
          <div className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-sm font-medium text-zinc-300 hover:text-purple-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
            <button
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-500"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct WhatsApp: +92 327 3604301</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
