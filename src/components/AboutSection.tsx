import React from 'react';
import { Award, Users, Code2, Globe2, ArrowRight, Zap, Laptop, Clock, Coffee } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const AboutSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.2)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#4dd8ff] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // ABOUT
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#f5f0dc] font-black tracking-tight">
          WHAT IS <span className="gold-text-stroke text-[#ffc83b]">HACKER DIARIES</span>?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#b0c7ee] max-w-xl mx-auto font-sans">
          Delhi NCR's 12-hour build sprint for under-18 developers & tinkerers.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Main Statement Box - Span 2 */}
        <div className="md:col-span-2 rounded-xl bg-gradient-to-b from-[#132d6b]/90 to-[#0a1b42]/95 border border-[#1e4499] p-5 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-[#1e4499]/60 pb-2 mb-4">
              <span className="font-mono text-xs text-[#8fa8db] font-bold">
                hacker_diaries://mission.exe
              </span>
              <span className="font-pixel text-[10px] text-[#ffd700] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ffd700]" /> 12 HOURS
              </span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-[#f5f0dc] leading-snug mb-2">
              Ship software, <span className="text-[#ffd700]">not pitch decks</span>.
            </h3>
            <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed">
              Start with an empty repo in the morning and launch a live web app or playable game by evening. Real code, raw curiosity, zero fluff.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-4 border-t border-[#1e4499]/50 font-mono text-[11px]">
            <div className="bg-[#071330] p-2 rounded border border-[#1b3a8a]/60">
              <span className="text-[#8fa8db] block text-[9px]">AGE</span>
              <span className="font-bold text-[#ffd700] font-pixel text-[10px]">≤ 18 Years</span>
            </div>
            <div className="bg-[#071330] p-2 rounded border border-[#1b3a8a]/60">
              <span className="text-[#8fa8db] block text-[9px]">TRACKS</span>
              <span className="font-bold text-[#f5f0dc]">Web & Game</span>
            </div>
            <div className="bg-[#071330] p-2 rounded border border-[#1b3a8a]/60">
              <span className="text-[#8fa8db] block text-[9px]">FEE</span>
              <span className="font-bold text-[#4dd8ff]">100% Free</span>
            </div>
            <div className="bg-[#071330] p-2 rounded border border-[#1b3a8a]/60">
              <span className="text-[#8fa8db] block text-[9px]">VENUE</span>
              <span className="font-bold text-[#f5f0dc]">Delhi NCR</span>
            </div>
          </div>
        </div>

        {/* Feature 1: Sprint */}
        <div className="rounded-xl p-5 bg-gradient-to-b from-[#09173d] to-[#050e26] border border-[#1e3a8a] flex flex-col justify-between shadow-lg">
          <div>
            <div className="w-9 h-9 rounded-lg bg-[#071330] border border-[#1e3a8a] mb-3 flex items-center justify-center text-[#4dd8ff]">
              <Laptop className="w-4 h-4" />
            </div>
            <h4 className="font-display text-lg font-bold text-[#f5f0dc] mb-1">
              BUILD FAST
            </h4>
            <p className="text-xs text-[#adc2ea] leading-relaxed">
              12 hours of uninterrupted hacking alongside 100+ passionate teen builders.
            </p>
          </div>
        </div>

        {/* Feature 2: Food & Mentorship */}
        <div className="rounded-xl p-5 bg-gradient-to-b from-[#09173d] to-[#050e26] border border-[#1e3a8a] shadow-lg">
          <div className="w-9 h-9 rounded-lg bg-[#071330] border border-[#1e3a8a] mb-3 flex items-center justify-center text-[#ffd700]">
            <Coffee className="w-4 h-4" />
          </div>
          <h4 className="font-display text-lg font-bold text-[#f5f0dc] mb-1">
            ALL-INCLUSIVE FUEL
          </h4>
          <p className="text-xs text-[#adc2ea] leading-relaxed">
            Free meals, endless drinks, snacks, and 1-on-1 mentor guidance throughout the day.
          </p>
        </div>

        {/* Feature 3: Prizes & Swag */}
        <div className="rounded-xl p-5 bg-gradient-to-b from-[#09173d] to-[#050e26] border border-[#1e3a8a] shadow-lg">
          <div className="w-9 h-9 rounded-lg bg-[#071330] border border-[#1e3a8a] mb-3 flex items-center justify-center text-[#ffd700]">
            <Award className="w-4 h-4" />
          </div>
          <h4 className="font-display text-lg font-bold text-[#f5f0dc] mb-1">
            TROPHIES & SWAG
          </h4>
          <p className="text-xs text-[#adc2ea] leading-relaxed">
            Custom holographic swag, builder packs, developer perks, and category trophies.
          </p>
        </div>

        {/* Quick CTA Card */}
        <div className="rounded-xl p-5 bg-gradient-to-b from-[#09173d] to-[#050e26] border border-[#1e3a8a] flex flex-col justify-between shadow-lg">
          <div>
            <div className="w-9 h-9 rounded-lg bg-[#071330] border border-[#1e3a8a] mb-3 flex items-center justify-center text-[#4dd8ff]">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-display text-lg font-bold text-[#f5f0dc] mb-1">
              LIMITED CAPACITY
            </h4>
            <p className="text-xs text-[#adc2ea] leading-relaxed">
              Capped at 100 builder seats. Free to enter for all eligible creators.
            </p>
          </div>
        </div>
      </div>

      {/* Simple CTA Action */}
      <div className="p-4 rounded-xl bg-[#09173d]/80 border border-[#1e3a8a] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div className="text-center sm:text-left">
          <div className="font-pixel text-xs text-[#f5f0dc]">
            READY TO BUILD IN DELHI NCR?
          </div>
          <div className="font-mono text-[10px] text-[#8fa8db]">
            Applications reviewed on a rolling basis.
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            retroAudio.playClick();
            onRegisterClick();
          }}
          className="y2k-btn-gold px-5 py-2 rounded text-xs font-pixel font-bold uppercase flex items-center gap-1.5 cursor-pointer shrink-0 shadow hover:scale-105 transition-transform"
        >
          <span>APPLY NOW</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#4a2600]" />
        </button>
      </div>
    </section>
  );
};
