/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BreakCardSection } from './components/BreakCardSection';
import { TracksSection } from './components/TracksSection';
import { ScheduleSection } from './components/ScheduleSection';
import { SponsorsSection } from './components/SponsorsSection';
import { OrganizersSection } from './components/OrganizersSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { SystemAlertModal } from './components/SystemAlertModal';
import { retroAudio } from './utils/audio';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  const handleOpenRegister = () => {
    retroAudio.playClick();
    setIsRegisterOpen(true);
  };

  const handleOpenSponsor = () => {
    retroAudio.playAlert();
    setIsSponsorModalOpen(true);
  };

  const handleSelectTrack = (trackName: string) => {
    retroAudio.playClick();
    setIsRegisterOpen(true);
  };

  const handleExplore = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070e2c] text-[#f5f0dc] relative selection:bg-[#ffb800] selection:text-[#0a1a4a]">
      {/* Subtle Scanlines Overlay */}
      <div className="fixed inset-0 scanlines z-30 pointer-events-none opacity-40" />



      {/* Main Single-Page Promotional Site Sections */}
      <main className="relative">
        {/* 1. HERO */}
        <HeroSection
          onRegisterClick={handleOpenRegister}
          onExploreClick={handleExplore}
        />

        {/* 2. ABOUT / WHAT IS IT */}
        <AboutSection onRegisterClick={handleOpenRegister} />

        {/* 3. WHAT'S NEW / BREAK CARD MODIFIER */}
        <BreakCardSection />

        {/* 4. WHY JOIN / TRACKS OR THEMES */}
        <TracksSection onSelectTrack={handleSelectTrack} />

        {/* 4. SCHEDULE / TIMELINE */}
        <ScheduleSection />

        {/* 5. SPONSORS */}
        <SponsorsSection onOpenSponsorModal={handleOpenSponsor} />

        {/* 6. ORGANIZERS */}
        <OrganizersSection />

        {/* 7. FAQ */}
        <FAQSection />

        {/* 8. CTA / REGISTER */}
        <CTASection onRegisterClick={handleOpenRegister} />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <SystemAlertModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
        type="sponsor"
      />
    </div>
  );
}
