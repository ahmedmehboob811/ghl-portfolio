import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GhlPipelineDemo } from './components/GhlPipelineDemo';
import { WorkflowLab } from './components/WorkflowLab';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { CoreExpertise } from './components/CoreExpertise';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>(
    'GoHighLevel CRM Setup & Configuration'
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onJumpToWorkflow={() => scrollToSection('workflow-lab')}
        />

        {/* 2. Priority 1: GHL CRM Dashboard Demo */}
        <GhlPipelineDemo />

        {/* 3. Priority 2: Interactive Workflow Lab */}
        <WorkflowLab />

        {/* 4. Priority 3: AI + GHL Architecture Diagram */}
        <ArchitectureDiagram />

        {/* 5. Core Technical Expertise */}
        <CoreExpertise />

        {/* 6. Featured Case Studies & Projects */}
        <Projects />

        {/* 7. Client Services */}
        <Services onSelectService={handleSelectService} />

        {/* 8. Technical Skills */}
        <Skills />

        {/* 9. About Me */}
        <About />

        {/* 10. Contact Section */}
        <Contact initialProjectType={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
