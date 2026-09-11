import React from 'react';
import { HolographicCD } from './HolographicCD';
import { RetroDigicam } from './RetroDigicam';
import { Y2KDolphin, StarPerson, RetroBadge } from './Y2KStickers';
import { Sparkles, ArrowRight, Disc, MapPin, Calendar, Users, Zap } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-8 pb-16 px-4 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 20%, #1a3c8c 0%, #0d2159 45%, #070e2c 85%)',
      }}
    >
      {/* Vertical Laser Light Beam Accent from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[700px] laser-beam pointer-events-none opacity-85" />

      {/* Cyber Grid / Checkerboard subtle floor perspective */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 checker-pattern opacity-35 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* === DECORATIVE FLOATING OBJECTS (behind content, above background) === */}

      {/* Retro Digicam - Left side */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 bottom-24 sm:bottom-32 md:bottom-40 z-[2] animate-digicam-float pointer-events-none hidden sm:block">
        <div className="w-[120px] h-[84px] sm:w-[160px] sm:h-[112px] md:w-[200px] md:h-[140px]">
          <RetroDigicam />
        </div>
      </div>

      {/* Holographic CD - Bottom-right, partially cropped */}
      <div className="absolute -right-16 sm:right-0 md:right-8 lg:right-16 bottom-0 sm:bottom-[-20px] md:bottom-[-10px] z-[2] animate-cd-float pointer-events-auto hidden sm:block">
        <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]" style={{ clipPath: 'inset(0 0 0 0)' }}>
          <HolographicCD size={300} tiltAngle={14} interactive={true} />
        </div>
        <div className="absolute -bottom-2 right-4 sm:right-8 font-mono text-[10px] text-[#8fa8db] flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-ping" />
          <span className="hidden md:inline">DISC 01: HACKER_DIARIES_DELHI.ISO [CLICK DISC TO SPIN]</span>
        </div>
      </div>

      {/* Top Retro System Notification / Ticker */}
      <div className="relative z-10 mb-4 sm:mb-6 animate-pulse">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1f52]/90 border border-[#4dd8ff]/50 shadow-[0_0_15px_rgba(77,216,255,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66]" />
          <span className="font-pixel text-[9px] sm:text-[10px] text-[#4dd8ff] tracking-widest uppercase">
            REGISTRATIONS OPEN • DELHI NCR • NOVEMBER 2026
          </span>
        </div>
      </div>

      {/* Main Content Hub */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Pixel Subline: "UNDER 18 HACKATHON" */}
        <div className="font-pixel text-xs sm:text-sm md:text-base text-[#4dd8ff] tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-2 sm:mb-3 cyan-glow drop-shadow">
          [ UNDER 18 HACKATHON ]
        </div>

        {/* Display Headline: "HACKER DIARIES" */}
        {/* Bold flared gothic-serif style, gold/yellow fill with thin dark outline & radiant glow */}
        <div className="relative my-2 sm:my-4 group">
          {/* Subtle CRT Glow behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ffb800]/20 via-[#ffd700]/35 to-[#ffb800]/20 blur-2xl rounded-full opacity-70 pointer-events-none" />

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] gold-text-stroke uppercase select-none">
            HACKER
            <br />
            DIARIES
          </h1>

          {/* Decorative glossy cyber dolphin sticker positioned playfully on top right */}
          <div className="absolute -top-10 -right-4 sm:-top-12 sm:-right-12 z-20 pointer-events-auto">
            <Y2KDolphin size={120} />
          </div>

          {/* Decorative star mascot on bottom left */}
          <div className="hidden sm:block absolute -bottom-8 -left-12 z-20 pointer-events-auto">
            <StarPerson size={90} />
          </div>
        </div>

        {/* Pixel-Font Date / Location Badge Row */}
        <div className="mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-pixel select-none">
          <div className="px-3 py-1.5 rounded bg-[#09183d] border-2 border-[#f5c518] shadow-[0_0_12px_rgba(245,197,24,0.35)] flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#ffb800]" />
            <span className="text-[#f5f0dc] tracking-wider">15 NOV 2026</span>
          </div>

          <div className="px-3 py-1.5 rounded bg-[#09183d] border-2 border-[#4dd8ff] shadow-[0_0_12px_rgba(77,216,255,0.35)] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#4dd8ff]" />
            <span className="text-[#f5f0dc] tracking-wider">DELHI NCR</span>
          </div>

          <div className="px-3 py-1.5 rounded bg-[#09183d] border-2 border-[#00ff66] shadow-[0_0_12px_rgba(0,255,102,0.3)] flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#00ff66]" />
            <span className="text-[#00ff66] tracking-wider">₹0 ADMISSION</span>
          </div>
        </div>

        {/* Narrative / Era Micro-Pitch */}
        <p className="mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-[#c7d9fa] leading-relaxed font-sans px-2">
          The golden age of raw internet curiosity is back. 24 hours of pure hardware tinkering, software breaking, and teen founder energy. No corporate suits. No gatekeeping. Just 300+ under-18 builders in the capital.
        </p>

        {/* Primary Chunky Y2K Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-4 select-none">
          {/* Chunky Y2K Gold Beveled Button */}
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onRegisterClick();
            }}
            className="y2k-btn-gold px-8 py-3 rounded-md text-sm sm:text-base font-pixel tracking-wider font-bold uppercase flex items-center gap-2.5 cursor-pointer shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-[#4a2600]" />
            <span>CLAIM YOUR HACKER PASS</span>
            <ArrowRight className="w-4 h-4 text-[#4a2600]" />
          </button>

          {/* Chrome / Silver Bevel Button */}
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onExploreClick();
            }}
            className="y2k-btn-silver px-6 py-3 rounded-md text-xs sm:text-sm font-pixel tracking-wider font-bold uppercase flex items-center gap-2 cursor-pointer"
          >
            <Disc className="w-4 h-4 text-[#0055ea]" />
            <span>EXPLORE SYSTEM LOGS</span>
          </button>
        </div>

      </div>
    </section>
  );
};
