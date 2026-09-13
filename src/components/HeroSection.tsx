import React from 'react';
import { HolographicCD } from './HolographicCD';
import { RetroDigicam } from './RetroDigicam';
import { Y2KDolphin, StarPerson } from './Y2KStickers';
import { Sparkles, ArrowRight, Disc, MapPin, Calendar, Camera, Clock, Zap } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[92vh] flex flex-col items-center justify-center pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 20%, #1a3c8c 0%, #0d2159 45%, #070e2c 85%)',
      }}
    >
      {/* Vertical Laser Light Beam Accent from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[700px] laser-beam pointer-events-none opacity-85" />

      {/* Cyber Grid / Checkerboard subtle floor perspective */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 checker-pattern opacity-30 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Organic Floating Retro Digicam (Upper-Left Zone - Desktop / Large Tablet) */}
      <div 
        className="hidden lg:block absolute top-[8%] sm:top-[12%] md:top-[15%] lg:top-[18%] left-2 sm:left-6 md:left-10 lg:left-14 xl:left-24 2xl:left-32 z-20 pointer-events-auto origin-top-left transition-transform duration-300 scale-[0.65] sm:scale-75 md:scale-85 lg:scale-95 xl:scale-100"
      >
        <div className="flex flex-col items-center animate-float-digicam">
          <RetroDigicam size={260} tiltAngle={-16} interactive={true} />
          <div className="mt-2.5 font-mono text-[9px] sm:text-[10px] text-[#8fa8db] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09183d]/85 border border-[#4dd8ff]/40 backdrop-blur-sm shadow-[0_0_15px_rgba(77,216,255,0.25)]">
            <Camera className="w-3 h-3 text-[#4dd8ff]" />
            <span>CAM_01: DELHI_2006.RAW</span>
          </div>
        </div>
      </div>

      {/* Organic Floating Holographic CD (Lower-Right Zone - Desktop / Large Tablet) */}
      <div 
        className="hidden lg:block absolute bottom-[6%] sm:bottom-[10%] md:bottom-[12%] lg:bottom-[14%] right-2 sm:right-6 md:right-10 lg:right-14 xl:right-24 2xl:right-32 z-20 pointer-events-auto origin-bottom-right transition-transform duration-300 scale-[0.65] sm:scale-75 md:scale-85 lg:scale-95 xl:scale-100"
      >
        <div className="flex flex-col items-center animate-float-cd">
          <HolographicCD size={260} tiltAngle={16} interactive={true} />
          <div className="mt-2.5 font-mono text-[9px] sm:text-[10px] text-[#8fa8db] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09183d]/85 border border-[#ffd700]/40 backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-ping" />
            <span>DISC_01: HACKER_DIARIES.ISO</span>
          </div>
        </div>
      </div>

      {/* Main Content Hub */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full px-2 sm:px-4">
        
        {/* Pixel Subline: "UNDER 18 WEB DEV HACKATHON" */}
        <div className="inline-flex items-center gap-1.5 font-pixel text-[11px] sm:text-sm md:text-base text-[#4dd8ff] tracking-[0.18em] sm:tracking-[0.35em] uppercase mb-2 sm:mb-3 cyan-glow drop-shadow px-3 py-1 rounded-full bg-[#0d2159]/60 border border-[#4dd8ff]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd700] animate-pulse" />
          <span>[ UNDER 18 HACKATHON ]</span>
        </div>

        {/* Display Headline: "HACKER DIARIES" */}
        <div className="relative my-2 sm:my-4 group">
          {/* Subtle CRT Glow behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ffb800]/20 via-[#ffd700]/35 to-[#ffb800]/20 blur-2xl rounded-full opacity-70 pointer-events-none" />

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.88] sm:leading-[0.9] gold-text-stroke uppercase select-none">
            HACKER
            <br />
            DIARIES
          </h1>

          {/* Decorative cyber dolphin sticker (Hidden on mobile) */}
          <div className="hidden sm:block absolute -top-10 -right-4 sm:-top-12 sm:-right-12 z-20 pointer-events-auto">
            <Y2KDolphin size={120} />
          </div>
        </div>

        {/* Sleek Pixel-Font Date & Venue Badges */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-pixel select-none">
          {/* Date Badge */}
          <div className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#0d1f4d] to-[#081538] border-2 border-[#ffd700] shadow-[0_0_12px_rgba(255,215,0,0.25)] flex items-center gap-1.5 sm:gap-2 transition-transform hover:scale-105">
            <Calendar className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-[#f5f0dc] tracking-wider text-[11px] sm:text-xs">15 NOV 2026</span>
          </div>

          {/* Venue Badge */}
          <div className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#0d1f4d] to-[#081538] border-2 border-[#4dd8ff] shadow-[0_0_12px_rgba(77,216,255,0.25)] flex items-center gap-1.5 sm:gap-2 transition-transform hover:scale-105">
            <MapPin className="w-3.5 h-3.5 text-[#4dd8ff]" />
            <span className="text-[#f5f0dc] tracking-wider text-[11px] sm:text-xs">DELHI NCR</span>
          </div>
        </div>

        {/* Narrative / Era Micro-Pitch */}
        <p className="mt-4 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-[#c7d9fa] leading-relaxed font-sans px-2">
          The golden age of raw internet curiosity is back. 12 hours of pure web development, creative hacking, and teen builder energy. No corporate suits. No gatekeeping. Just 100+ under-18 builders shipping together.
        </p>

        {/* Primary Chunky Y2K Action Buttons - Mobile Full Width & Thumb Friendly */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 select-none w-full max-w-xs sm:max-w-none justify-center">
          {/* Chunky Y2K Gold Beveled Button */}
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onRegisterClick();
            }}
            className="w-full sm:w-auto y2k-btn-gold px-6 sm:px-8 py-3.5 sm:py-3 rounded-md text-xs sm:text-sm font-pixel tracking-wider font-bold uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xl active:translate-y-[1px]"
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
            className="w-full sm:w-auto y2k-btn-silver px-5 sm:px-6 py-3 sm:py-3 rounded-md text-xs sm:text-sm font-pixel tracking-wider font-bold uppercase flex items-center justify-center gap-2 cursor-pointer active:translate-y-[1px]"
          >
            <Disc className="w-4 h-4 text-[#0055ea]" />
            <span>EXPLORE SYSTEM LOGS</span>
          </button>
        </div>

      </div>
    </section>
  );
};
