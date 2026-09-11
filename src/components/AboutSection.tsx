import React from 'react';
import { Clock, Users, Code2, Zap, Globe2, Award, Laptop, Coffee, ArrowRight } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const AboutSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#4dd8ff] shadow-[0_0_6px_#4dd8ff] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // MANIFESTO • ABOUT HACKER DIARIES
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          WHAT IS <span className="gold-text-stroke text-[#ffc83b]">HACKER DIARIES</span>?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          The premier 12-hour offline playground in Delhi NCR for India&apos;s next generation of under-18 builders.
        </p>
      </div>

      {/* Main Feature Banner Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 border-2 border-[#1e4499] shadow-[0_15px_45px_rgba(0,0,0,0.8)] p-6 sm:p-8 mb-6 overflow-hidden">
        {/* Top File Tab Header */}
        <div className="flex items-center justify-between border-b border-[#1e3a8a] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700]" />
            <span className="font-mono text-xs text-[#8fa8db] font-bold">
              hacker_diaries://about.txt
            </span>
          </div>
          <div className="font-pixel text-[10px] text-[#ffd700] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>12-HOUR SPRINT</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="font-display text-xl sm:text-2xl font-black text-[#f5f0dc] leading-snug">
              Raw internet curiosity, zero gatekeeping, and pure <span className="text-[#ffd700]">builder momentum</span>.
            </h3>
            <p className="text-xs sm:text-sm text-[#c7d9fa] leading-relaxed font-sans">
              Remember when building on the internet was about the electric thrill of shipping something crazy from your bedroom? <strong>Hacker Diaries</strong> brings that unfiltered creative energy to an offline arena in Delhi NCR.
            </p>
            <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans">
              Over 12 concentrated hours, 100+ under-18 builders will design, code, and deploy standalone web applications and playable games with on-site mentorship.
            </p>
          </div>

          {/* Right Specs Card */}
          <div className="lg:col-span-5 bg-[#071330]/90 rounded-xl p-4 sm:p-5 border border-[#1e3a8a] space-y-2.5 font-mono text-xs">
            <div className="text-[10px] text-[#8fa8db] font-pixel border-b border-[#1e3a8a] pb-2 flex items-center justify-between">
              <span>HACKATHON SPECIFICATIONS</span>
              <span className="text-[#f5f0dc]">15 NOV 2026</span>
            </div>

            <div className="flex justify-between items-center py-1 text-[#f5f0dc]">
              <span className="text-[#8fa8db] flex items-center gap-1.5 text-xs font-sans">
                <Users className="w-3.5 h-3.5 text-[#8fa8db]" /> Eligibility
              </span>
              <span className="font-bold text-xs">Strictly ≤ 18 Years</span>
            </div>

            <div className="flex justify-between items-center py-1 border-t border-[#1e3a8a]/40 text-[#f5f0dc]">
              <span className="text-[#8fa8db] flex items-center gap-1.5 text-xs font-sans">
                <Clock className="w-3.5 h-3.5 text-[#8fa8db]" /> Duration
              </span>
              <span className="font-bold text-xs">08:00 AM – 08:00 PM</span>
            </div>

            <div className="flex justify-between items-center py-1 border-t border-[#1e3a8a]/40 text-[#f5f0dc]">
              <span className="text-[#8fa8db] flex items-center gap-1.5 text-xs font-sans">
                <Code2 className="w-3.5 h-3.5 text-[#8fa8db]" /> Focus
              </span>
              <span className="font-bold text-xs">Web Dev &amp; Game Dev</span>
            </div>

            <div className="flex justify-between items-center py-1 border-t border-[#1e3a8a]/40 text-[#f5f0dc]">
              <span className="text-[#8fa8db] flex items-center gap-1.5 text-xs font-sans">
                <Zap className="w-3.5 h-3.5 text-[#8fa8db]" /> Cost
              </span>
              <span className="font-bold text-xs">100% Free (₹0)</span>
            </div>

            <div className="flex justify-between items-center pt-1 border-t border-[#1e3a8a]/40 text-[#f5f0dc]">
              <span className="text-[#8fa8db] flex items-center gap-1.5 text-xs font-sans">
                <Globe2 className="w-3.5 h-3.5 text-[#8fa8db]" /> Venue
              </span>
              <span className="font-bold text-xs">Delhi NCR, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Card 1: Prizes */}
        <div className="rounded-xl p-5 sm:p-6 bg-[#071330]/80 border border-[#1a3675] hover:border-[#ffd700]/70 shadow-md transition-all group">
          <div className="w-10 h-10 rounded-lg bg-[#0c1f52] border border-[#1e3a8a] mb-3.5 flex items-center justify-center text-[#ffd700] group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <div className="font-pixel text-[9px] text-[#ffd700] uppercase tracking-wider mb-1">
            AWARDS &amp; TROPHIES
          </div>
          <h4 className="font-display text-lg sm:text-xl font-black text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors mb-2 leading-snug tracking-wider">
            Prizes Unveiling Soon
          </h4>
          <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans">
            Curated hardware kits, developer tools, custom trophies, and retro holographic swag packs for winners.
          </p>
        </div>

        {/* Card 2: 12-Hour Sprint */}
        <div className="rounded-xl p-5 sm:p-6 bg-[#071330]/80 border border-[#1a3675] hover:border-[#4dd8ff]/70 shadow-md transition-all group">
          <div className="w-10 h-10 rounded-lg bg-[#0c1f52] border border-[#1e3a8a] mb-3.5 flex items-center justify-center text-[#4dd8ff] group-hover:scale-105 transition-transform">
            <Laptop className="w-5 h-5" />
          </div>
          <div className="font-pixel text-[9px] text-[#4dd8ff] uppercase tracking-wider mb-1">
            RAPID BUILD SPRINT
          </div>
          <h4 className="font-display text-lg sm:text-xl font-black text-[#f5f0dc] group-hover:text-[#4dd8ff] transition-colors mb-2 leading-snug tracking-wider">
            12 Hours of Pure Code
          </h4>
          <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans">
            Start with an empty repository in the morning and ship a working product by evening. No pitch decks required.
          </p>
        </div>

        {/* Card 3: Free Food & Mentors */}
        <div className="rounded-xl p-5 sm:p-6 bg-[#071330]/80 border border-[#1a3675] hover:border-[#ffd700]/70 shadow-md transition-all group">
          <div className="w-10 h-10 rounded-lg bg-[#0c1f52] border border-[#1e3a8a] mb-3.5 flex items-center justify-center text-[#ffd700] group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5" />
          </div>
          <div className="font-pixel text-[9px] text-[#ffd700] uppercase tracking-wider mb-1">
            100% FREE REGISTRATION
          </div>
          <h4 className="font-display text-lg sm:text-xl font-black text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors mb-2 leading-snug tracking-wider">
            Meals &amp; Mentorship
          </h4>
          <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans">
            Hot lunch, refreshments, and on-site guidance from engineers to help troubleshoot roadblocks.
          </p>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#0d2258] via-[#09173d] to-[#0d2258] border-2 border-[#1e4499] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-display font-bold text-base text-[#f5f0dc]">
            Ready to build in Delhi NCR on 15 Nov 2026?
          </div>
          <div className="font-mono text-xs text-[#8fa8db]">
            Limited to 100 builder seats • Free registration protocol
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            retroAudio.playClick();
            onRegisterClick();
          }}
          className="y2k-btn-gold px-6 py-2.5 rounded-md text-xs sm:text-sm font-pixel font-bold uppercase flex items-center gap-2 cursor-pointer shrink-0 shadow-lg hover:scale-105 transition-transform"
        >
          <span>APPLY AS BUILDER</span>
          <ArrowRight className="w-4 h-4 text-[#4a2600]" />
        </button>
      </div>
    </section>
  );
};

