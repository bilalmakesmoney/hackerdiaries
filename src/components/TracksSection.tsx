import React from 'react';
import { Globe, Gamepad2, ArrowRight, Lock, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const TracksSection: React.FC<{ onSelectTrack: (track: string) => void }> = ({ onSelectTrack }) => {
  return (
    <section id="tracks" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // TWO FOCUSED ARENAS
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          CHOOSE YOUR <span className="gold-text-stroke text-[#ffc83b]">TRACK</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          Pick your focus area for the 12-hour sprint. Build a standout web application or ship a playable indie game.
        </p>
      </div>

      {/* 2 Symmetrical Track Cards matching About/Sponsors card styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Track 1: Web Development */}
        <div
          className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 border-2 border-[#1e4499] hover:border-[#4dd8ff]/80 shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all group flex flex-col justify-between"
          onMouseEnter={() => retroAudio.playClick()}
        >
          <div>
            {/* Card Header Icon & Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0c1f52] border border-[#1e3a8a] flex items-center justify-center text-[#4dd8ff] group-hover:scale-105 transition-transform shadow-md">
                <Globe className="w-6 h-6" />
              </div>
              <span className="font-pixel text-[10px] text-[#4dd8ff] uppercase tracking-wider px-2.5 py-1 rounded bg-[#071330] border border-[#1e3a8a]">
                TRACK 01 // WEB
              </span>
            </div>

            <div className="font-pixel text-[9px] text-[#ffd700] uppercase tracking-wider mb-1">
              FULL-STACK &amp; WEB APPS
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors mb-2 leading-snug tracking-wider">
              Web Development
            </h3>

            <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans mb-6">
              Build fast, high-impact web applications, browser utilities, real-time collaboration platforms, and creative web tools. Ship live within 12 hours.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-4 border-t border-[#1e3a8a]/70">
              <div className="text-[10px] font-pixel text-[#8fa8db] uppercase tracking-wider">
                WHAT YOU CAN BUILD:
              </div>
              <div className="space-y-2 text-xs text-[#c7d9fa] font-sans">
                <div className="flex items-start gap-2">
                  <span className="text-[#4dd8ff] font-bold mt-0.5">•</span>
                  <span>Full-Stack Web Apps &amp; Micro-SaaS tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#4dd8ff] font-bold mt-0.5">•</span>
                  <span>Interactive AI Web Agents &amp; Productivity Portals</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#4dd8ff] font-bold mt-0.5">•</span>
                  <span>Creative Canvas, Audio &amp; Visual Web Experiments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-[#1e3a8a]/70">
            <button
              type="button"
              onClick={() => {
                retroAudio.playClick();
                onSelectTrack('Web Development');
              }}
              className="w-full y2k-btn-gold py-3 rounded-md font-pixel text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer font-bold shadow-lg hover:scale-[1.02] transition-transform"
            >
              <span>SELECT WEB DEV TRACK</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4a2600]" />
            </button>
          </div>
        </div>

        {/* Track 2: Game Development */}
        <div
          className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 border-2 border-[#1e4499] hover:border-[#ffd700]/80 shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all group flex flex-col justify-between"
          onMouseEnter={() => retroAudio.playClick()}
        >
          <div>
            {/* Card Header Icon & Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0c1f52] border border-[#1e3a8a] flex items-center justify-center text-[#ffd700] group-hover:scale-105 transition-transform shadow-md">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="font-pixel text-[10px] text-[#ffd700] uppercase tracking-wider px-2.5 py-1 rounded bg-[#071330] border border-[#1e3a8a]">
                TRACK 02 // GAMES
              </span>
            </div>

            <div className="font-pixel text-[9px] text-[#ffd700] uppercase tracking-wider mb-1">
              GAMES &amp; WEBGL
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors mb-2 leading-snug tracking-wider">
              Game Development
            </h3>

            <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans mb-6">
              Channel the golden era of indie game jams and browser games. Build playable 2D pixel platformers, physics sandboxes, and multiplayer mini-duels from scratch.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-4 border-t border-[#1e3a8a]/70">
              <div className="text-[10px] font-pixel text-[#8fa8db] uppercase tracking-wider">
                WHAT YOU CAN BUILD:
              </div>
              <div className="space-y-2 text-xs text-[#c7d9fa] font-sans">
                <div className="flex items-start gap-2">
                  <span className="text-[#ffd700] font-bold mt-0.5">•</span>
                  <span>Playable 2D &amp; WebGL 3D Browser Games</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ffd700] font-bold mt-0.5">•</span>
                  <span>Physics Sandboxes &amp; Action Platformers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ffd700] font-bold mt-0.5">•</span>
                  <span>Multiplayer Retro Duels &amp; Arcade Netplay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-[#1e3a8a]/70">
            <button
              type="button"
              onClick={() => {
                retroAudio.playClick();
                onSelectTrack('Game Development');
              }}
              className="w-full y2k-btn-gold py-3 rounded-md font-pixel text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer font-bold shadow-lg hover:scale-[1.02] transition-transform"
            >
              <span>SELECT GAME DEV TRACK</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4a2600]" />
            </button>
          </div>
        </div>
      </div>

      {/* Theme To Be Revealed Strip matching About bottom banner styling */}
      <div className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#0d2258] via-[#09173d] to-[#0d2258] border-2 border-[#1e4499] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-lg bg-[#0c1f52] border border-[#ffd700]/60 flex items-center justify-center text-[#ffd700] shrink-0 shadow-md">
            <Lock className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="font-display font-bold text-base text-[#f5f0dc]">
              Theme To Be Revealed Live at Kickoff
            </div>
            <div className="text-xs text-[#8fa8db] font-sans">
              Challenge statements and creative constraints unlock on-site to ensure a 100% fair 12-hour building playing field.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
