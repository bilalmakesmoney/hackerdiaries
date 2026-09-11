import React from 'react';
import { HolographicCD } from './HolographicCD';
import { FlipPhoneWidget } from './FlipPhoneWidget';
import { RetroBadge, Y2KDolphin, StarPerson } from './Y2KStickers';
import { Sparkles, MessageSquare, ArrowRight, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface CTASectionProps {
  onRegisterClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onRegisterClick }) => {
  return (
    <section
      id="register"
      className="relative py-20 sm:py-28 px-4 overflow-hidden border-t-2 border-[#1e3a8a]"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #1e429f 0%, #0d2159 50%, #070e2c 90%)',
      }}
    >
      {/* Laser Light Beam Accent repeated from hero for bookend feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[750px] laser-beam pointer-events-none opacity-90" />

      {/* Retro Checkerboard floor accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-44 checker-pattern opacity-30 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Floating Badge */}
        <div className="mb-4">
          <RetroBadge text="DELHI NCR • 15 NOV 2026" subtext="FINAL REGISTRATION PROTOCOL" />
        </div>

        {/* Display Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#ffc83b] gold-text-stroke uppercase max-w-3xl leading-[0.95]">
          READY TO WRITE YOUR CHAPTER?
        </h2>

        {/* Pixel Subline */}
        <div className="mt-3 font-pixel text-xs sm:text-sm text-[#4dd8ff] tracking-widest uppercase cyan-glow">
          [ 24 HOURS • 300+ UNDER-18 BUILDERS • ZERO COST ]
        </div>

        <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-[#c7d9fa] leading-relaxed font-sans px-2">
          Hardware components are stocked, mentors are locked in, and the midnight pizza is ordered. Don’t watch the next generation of software happen from the sidelines.
        </p>

        {/* Prominent Action Button Cluster */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 select-none">
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onRegisterClick();
            }}
            className="y2k-btn-gold px-9 py-4 rounded-md text-sm sm:text-base font-pixel tracking-wider font-bold uppercase flex items-center gap-3 cursor-pointer shadow-2xl scale-105 hover:scale-110 transition-transform"
          >
            <Sparkles className="w-5 h-5 text-[#4a2600]" />
            <span>REGISTER NOW — 100% FREE</span>
            <ArrowRight className="w-5 h-5 text-[#4a2600]" />
          </button>
        </div>

        {/* Interactive Showcase Row: Holographic Disc + Flip-Phone WhatsApp Prop */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl">
          {/* Left Column: Holographic CD Bookend Element */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#0a183d]/80 border-2 border-[#1e3a8a] shadow-xl relative">
            <div className="absolute -top-3 left-4 font-pixel text-[9px] px-2 py-0.5 rounded bg-[#ffd700] text-black font-bold uppercase">
              // PHYSICAL ARTIFACT
            </div>
            <HolographicCD size={220} tiltAngle={-12} interactive={true} />
            <div className="mt-3 text-center">
              <div className="font-pixel text-[11px] text-[#ffd700]">
                LIMITED CD-R MIXTAPE SWAG
              </div>
              <p className="text-[11px] text-[#8fa8db] font-mono mt-1">
                Every in-person participant receives a customized holographic CD containing open-source dev kits & retro hacker archives.
              </p>
            </div>
          </div>

          {/* Right Column: "WhatsApp Community in Bio" Card with Flip-Phone Widget */}
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#0a183d]/80 border-2 border-[#1e3a8a] shadow-xl relative">
            <div className="absolute -top-3 left-4 font-pixel text-[9px] px-2 py-0.5 rounded bg-[#25d366] text-black font-bold uppercase">
              // COMMUNITY PROTOCOL
            </div>

            <div className="flex items-center justify-center my-1">
              <FlipPhoneWidget />
            </div>

            <div className="mt-4 text-center space-y-2">
              <div className="font-pixel text-xs text-[#25d366] flex items-center justify-center gap-1.5 font-bold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP COMMUNITY IN BIO</span>
              </div>
              <p className="text-[11px] text-[#8fa8db] font-mono max-w-xs">
                Teammate matchmaking, mentor Q&As, and venue updates drop first in the official Delhi NCR WhatsApp channel.
              </p>
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => retroAudio.playClick()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#00a854] hover:bg-[#00c060] text-white font-pixel text-[10px] font-bold tracking-wider shadow"
              >
                <span>JOIN OFFICIAL WHATSAPP GROUP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
