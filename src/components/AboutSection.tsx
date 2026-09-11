import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { RetroBadge } from './Y2KStickers';
import { Terminal, Cpu, Users, Pizza, Award, ShieldCheck, HardDrive, CheckSquare, Sparkles } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const AboutSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'specs' | 'rules'>('mission');

  return (
    <section id="about" className="py-12 sm:py-16 px-4 max-w-5xl mx-auto relative z-10">
      {/* Section Subtitle */}
      <div className="text-center mb-6">
        <div className="font-pixel text-[10px] sm:text-xs text-[#ffd700] tracking-widest uppercase mb-1">
          // SYSTEM LOG 01: ARCHITECTURE
        </div>
        <h2 className="font-display text-2xl sm:text-4xl text-[#f5f0dc] font-black">
          WHAT IS HACKER DIARIES?
        </h2>
      </div>

      {/* Wrapped in Faux OS Window with specific requested title and status bar */}
      <WindowFrame
        title="Hacker Diaries — Log 1"
        statusBarText="System Ready, Ideas Loading // 300+ Teen Builders Confirmed"
        secondaryStatus="DELHI NCR • 15 NOV 2026"
        icon="terminal"
        windowId="log1-window"
      >
        {/* Retro Tab Navigation Bar inside window (Properties Sheet style) */}
        <div className="flex border-b border-[#1b3a8a] mb-5 select-none font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              setActiveTab('mission');
            }}
            className={`px-4 py-2 font-bold flex items-center gap-1.5 border-t-2 border-x-2 rounded-t transition-colors ${
              activeTab === 'mission'
                ? 'bg-[#0f2868] text-[#ffd700] border-[#3b82f6]'
                : 'bg-transparent text-[#8fa8db] border-transparent hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            General.txt
          </button>
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              setActiveTab('specs');
            }}
            className={`px-4 py-2 font-bold flex items-center gap-1.5 border-t-2 border-x-2 rounded-t transition-colors ${
              activeTab === 'specs'
                ? 'bg-[#0f2868] text-[#ffd700] border-[#3b82f6]'
                : 'bg-transparent text-[#8fa8db] border-transparent hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            SystemSpecs.cfg
          </button>
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              setActiveTab('rules');
            }}
            className={`px-4 py-2 font-bold flex items-center gap-1.5 border-t-2 border-x-2 rounded-t transition-colors ${
              activeTab === 'rules'
                ? 'bg-[#0f2868] text-[#ffd700] border-[#3b82f6]'
                : 'bg-transparent text-[#8fa8db] border-transparent hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Eligibility.inf
          </button>
        </div>

        {/* Tab 1: General Mission & Story */}
        {activeTab === 'mission' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex-1 space-y-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#ffc83b] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ffd700]" />
                  A 24-Hour Garage Hackathon for the Next Generation
                </h3>
                <p className="text-sm sm:text-base text-[#e2ecf5] leading-relaxed">
                  Remember when building software wasn't about pitch decks or enterprise valuation, but about the electric thrill of staying up until 4:00 AM writing code that actually works?
                </p>
                <p className="text-sm text-[#adc2ea] leading-relaxed">
                  <strong>Hacker Diaries</strong> is Delhi NCR’s premier under-18 hackathon created specifically for teen inventors, high-school self-taught developers, silicon tinkers, and game designers. On <strong>15 November 2026</strong>, 300+ students gather under one roof to build ambitious software and physical prototypes from scratch in 24 hours.
                </p>
              </div>

              {/* Retro System Stats Inset Box */}
              <div className="w-full sm:w-64 bg-[#071330] p-3.5 rounded border border-[#1b3a8a] text-xs font-mono space-y-2 shadow-inner">
                <div className="text-[11px] text-[#ffd700] font-pixel border-b border-[#1b3a8a] pb-1 flex justify-between">
                  <span>SYSTEM MATRIX</span>
                  <span>v2026.11</span>
                </div>
                <div className="flex justify-between text-[#c5d8ff]">
                  <span className="text-[#8fa8db]">TARGET:</span>
                  <span className="font-bold text-[#00ff66]">Ages ≤ 18 Years</span>
                </div>
                <div className="flex justify-between text-[#c5d8ff]">
                  <span className="text-[#8fa8db]">VENUE:</span>
                  <span className="font-bold">Delhi NCR, India</span>
                </div>
                <div className="flex justify-between text-[#c5d8ff]">
                  <span className="text-[#8fa8db]">ADMISSION:</span>
                  <span className="font-bold text-[#ffd700]">₹0 (100% Free)</span>
                </div>
                <div className="flex justify-between text-[#c5d8ff]">
                  <span className="text-[#8fa8db]">TEAM SIZE:</span>
                  <span className="font-bold">1 to 4 Members</span>
                </div>
                <div className="flex justify-between text-[#c5d8ff]">
                  <span className="text-[#8fa8db]">FOOD/SWAG:</span>
                  <span className="font-bold text-[#4dd8ff]">Unlimited Provided</span>
                </div>
              </div>
            </div>

            {/* Quick 3-Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-[#0b1b44] p-3.5 rounded border border-[#1b3a8a] flex flex-col justify-between">
                <div className="w-8 h-8 rounded bg-[#1e3a8a] flex items-center justify-center text-[#4dd8ff] mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-pixel text-[11px] text-[#ffc83b] mb-1">₹1,50,000+ POOL</div>
                <p className="text-xs text-[#c5d8ff]">
                  Cash prizes, compute credits, high-end hardware development kits, and direct teen venture grants.
                </p>
              </div>

              <div className="bg-[#0b1b44] p-3.5 rounded border border-[#1b3a8a] flex flex-col justify-between">
                <div className="w-8 h-8 rounded bg-[#1e3a8a] flex items-center justify-center text-[#00ff66] mb-2">
                  <Pizza className="w-4 h-4" />
                </div>
                <div className="font-pixel text-[11px] text-[#00ff66] mb-1">FUEL & MIDNIGHT PIZZA</div>
                <p className="text-xs text-[#c5d8ff]">
                  Four hot meals, unlimited Red Bull / energy coolers, midnight Domino's stacks, and morning breakfast buffet.
                </p>
              </div>

              <div className="bg-[#0b1b44] p-3.5 rounded border border-[#1b3a8a] flex flex-col justify-between">
                <div className="w-8 h-8 rounded bg-[#1e3a8a] flex items-center justify-center text-[#ffd700] mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <div className="font-pixel text-[11px] text-[#ffd700] mb-1">TOP TINKERER MENTORS</div>
                <p className="text-xs text-[#c5d8ff]">
                  Hands-on mentorship from senior staff engineers, YC founders, and teen prodigies who shipped real products.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: System Specs & Format */}
        {activeTab === 'specs' && (
          <div className="space-y-4 animate-in fade-in duration-200 text-xs font-mono">
            <div className="bg-[#071330] p-4 rounded border border-[#1b3a8a] space-y-3">
              <div className="text-sm font-bold text-[#ffc83b] border-b border-[#1b3a8a] pb-2 font-pixel">
                DEVICE & HARDWARE REQUIREMENTS
              </div>
              <ul className="space-y-2 text-[#c5d8ff]">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <span><strong>Workstation:</strong> Bring any laptop (Mac, Windows, or Linux) + chargers & extension cords.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <span><strong>Connectivity:</strong> Gigabit dual-band enterprise WiFi provided throughout the venue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <span><strong>Hardware Tinkering:</strong> Soldering stations, Raspberry Pi / Arduino components, sensors, and breadboards available at the hardware checkout desk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                  <span><strong>Rest & Gaming:</strong> Dedicated chill-out lounge with beanbags, Super Smash Bros / retro arcade setups, and sleeping bags.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Eligibility */}
        {activeTab === 'rules' && (
          <div className="space-y-3 animate-in fade-in duration-200 text-xs font-mono">
            <div className="bg-[#071330] p-4 rounded border border-[#1b3a8a] space-y-2.5">
              <div className="text-sm font-bold text-[#4dd8ff] border-b border-[#1b3a8a] pb-2 font-pixel">
                WHO IS ELIGIBLE? (UNDER 18 ONLY)
              </div>
              <p className="text-[#c5d8ff]">
                Any individual enrolled in school or taking a gap year who is <strong>18 years old or younger</strong> on 15 November 2026.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 bg-[#0a183d] rounded border border-[#1e3a8a]">
                  <span className="text-[#00ff66] font-bold">✓ ALLOWED:</span>
                  <p className="text-[#8fa8db] mt-1">
                    Middle schoolers, high schoolers, homeschooled students, beginner coders, and experienced builders.
                  </p>
                </div>
                <div className="p-2.5 bg-[#0a183d] rounded border border-[#1e3a8a]">
                  <span className="text-[#ff4b4b] font-bold">✕ DISALLOWED:</span>
                  <p className="text-[#8fa8db] mt-1">
                    College seniors, full-time professionals, or anyone over 18 at the time of the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action button inside window */}
        <div className="mt-5 pt-3 border-t border-[#1b3a8a] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <RetroBadge text="DELHI NCR • 15.11.2026" subtext="GARAGE HACKATHON PROTOCOL" />
          </div>
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onRegisterClick();
            }}
            className="y2k-btn-gold px-5 py-2 rounded text-xs font-pixel font-bold uppercase flex items-center gap-2 cursor-pointer"
          >
            <span>APPLY AS BUILDER</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </WindowFrame>
    </section>
  );
};
