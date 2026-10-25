import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillConstellation } from './components/SkillConstellation';
import { ProjectBrowser } from './components/ProjectBrowser';
import { CampusExplorer } from './components/CampusExplorer';
import { AchievementsGallery } from './components/AchievementsGallery';
import { Contact } from './components/Contact';
import { PersonalAgentModal } from './components/PersonalAgentModal';

export const App: React.FC = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const [initialAgentQuery, setInitialAgentQuery] = useState<string | undefined>();
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('agent');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['agent', 'skills', 'projects', 'beyond-code', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAgent = (query?: string) => {
    setInitialAgentQuery(query);
    setIsAgentOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className="min-h-screen w-full bg-[#C6D0D9] text-[#3A0F34] selection:bg-[#EAAA00] selection:text-[#3A0F34] font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Navbar matching reference */}
      <Navbar onOpenAgent={() => handleOpenAgent()} activeSection={activeSection} />

      {/* Main Slide-Down Sequential Sections */}
      <main className="space-y-0 w-full overflow-x-hidden">
        {/* Section 01: Hero & AI Personal Agent Introduction (Ref 3) */}
        <Hero onOpenAgent={handleOpenAgent} isAgentOpen={isAgentOpen} />

        {/* Section 02: Skill Tree Constellation with Parent/Down Child Branching */}
        <SkillConstellation onSelectProject={handleSelectProject} />

        {/* Section 03: Unified Single-Card Project Browser with Circular Selectors */}
        <ProjectBrowser
          selectedProjectId={selectedProjectId}
          onSelectProject={handleSelectProject}
        />

        {/* Section 04: Campus Explorer - Beyond Code with 1-6 Number Navigation (Ref 4) */}
        <CampusExplorer />

        {/* Section 05: Achievements Gallery with Pastel Cards & Click Detail Modal (Ref 1) */}
        <AchievementsGallery />

        {/* Section 06: Contact Section with Direct Cards & Send Message Form (Ref 2) */}
        <Contact />
      </main>

      {/* Full AI Personal Agent Modal matching Reference 5 */}
      <PersonalAgentModal
        isOpen={isAgentOpen}
        onClose={() => setIsAgentOpen(false)}
        initialQuestion={initialAgentQuery}
      />
    </div>
  );
};

export default App;
