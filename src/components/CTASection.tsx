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
          <RetroBadge text="HACKER DIARIES 2026" subtext="REGISTRATION PROTOCOL" />
        </div>

        {/* Display Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#ffc83b] gold-text-stroke uppercase max-w-3xl leading-[0.95]">
          READY TO WRITE YOUR CHAPTER?
        </h2>

        {/* Pixel Subline */}
        <div className="mt-3 font-pixel text-xs sm:text-sm text-[#4dd8ff] tracking-widest uppercase cyan-glow">
          [ 12 HOURS • 100+ UNDER-18 BUILDERS • ZERO COST ]
        </div>

        <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-[#c7d9fa] leading-relaxed font-sans px-2">
          Web dev toolkits are ready, mentors are locked in, and the fuel is prepped. Don’t watch the next generation of web builders happen from the sidelines.
        </p>

        {/* Prominent Action Button Cluster */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 select-none">
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onRegisterClick();
            }}
            className="y2k-btn-gold px-6 sm:px-9 py-3.5 sm:py-4 rounded-md text-xs sm:text-base font-pixel tracking-wider font-bold uppercase flex items-center justify-center gap-2 sm:gap-3 cursor-pointer shadow-2xl hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a2600]" />
            <span>REGISTER NOW — 100% FREE</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a2600]" />
          </button>
        </div>

        {/* Interactive Showcase Row: Holographic Disc + Flip-Phone WhatsApp Prop */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl">
          {/* Left Column: Holographic CD Bookend Element */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 border-2 border-[#1e4499] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="xp-titlebar px-3 py-1.5 flex items-center justify-between border-b border-[#04338c] select-none text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffd700]" />
                <span className="font-pixel text-[10px] text-white tracking-wider font-bold">
                  SWAG_CD_MIXTAPE.ISO
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#ffd700]">[PHYSICAL ARTIFACT]</span>
            </div>

            <div className="p-6 flex flex-col items-center justify-center flex-1">
              <HolographicCD size={220} tiltAngle={-12} interactive={true} />
              <div className="mt-4 text-center space-y-1">
                <div className="font-pixel text-xs text-[#ffd700]">
                  LIMITED CD-R MIXTAPE SWAG
                </div>
                <p className="text-xs text-[#8fa8db] font-mono max-w-xs leading-relaxed">
                  Every in-person participant receives a customized holographic CD containing open-source dev kits & retro hacker archives.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "WhatsApp Community in Bio" Card with Flip-Phone Widget */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 border-2 border-[#1e4499] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="xp-titlebar px-3 py-1.5 flex items-center justify-between border-b border-[#04338c] select-none text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4dd8ff]" />
                <span className="font-pixel text-[10px] text-white tracking-wider font-bold">
                  COMMUNITY_CHANNEL.EXE
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#4dd8ff]">[VERIFIED BIO LINK]</span>
            </div>

            <div className="p-6 flex flex-col items-center justify-center flex-1">
              <div className="flex items-center justify-center my-1">
                <FlipPhoneWidget />
              </div>

              <div className="mt-4 text-center space-y-2">
                <div className="font-pixel text-xs text-[#4dd8ff] flex items-center justify-center gap-1.5 font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP COMMUNITY IN BIO</span>
                </div>
                <p className="text-xs text-[#8fa8db] font-mono max-w-xs leading-relaxed">
                  Teammate matchmaking, mentor Q&As, and event coordinates drop first in the official WhatsApp community.
                </p>
                <a
                  href="https://chat.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => retroAudio.playClick()}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-[#0055ea] hover:bg-[#1a68ff] text-[#ffd700] border border-[#4dd8ff]/50 font-pixel text-[11px] font-bold tracking-wider shadow-lg hover:scale-105 transition-all"
                >
                  <span>JOIN OFFICIAL WHATSAPP GROUP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ffd700]" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
