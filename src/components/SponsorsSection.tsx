import React from 'react';
import { WindowFrame } from './WindowFrame';
import { Sparkles, AlertTriangle, Building, Shield, ExternalLink, Zap, Terminal, Heart } from 'lucide-react';
import { retroAudio } from '../utils/audio';

const partnerSlots = [
  {
    name: 'Delhi Tech Teen Guild',
    tier: 'Community Anchor',
    category: '1,200+ Member Under-18 Network',
    icon: '⚡',
  },
  {
    name: 'Open Silicon Labs',
    tier: 'Hardware Partner',
    category: 'Microcontrollers & Sensor Kits',
    icon: '🔌',
  },
  {
    name: 'Cyberpunk Cafe NCR',
    tier: 'Catering & Fuel',
    category: 'Midnight Meals & Red Bull',
    icon: '☕',
  },
  {
    name: 'IIITD Student Tinkerers',
    tier: 'Campus Support',
    category: 'Venue & Infrastructure',
    icon: '🏫',
  },
];

export const SponsorsSection: React.FC<{ onOpenSponsorModal: () => void }> = ({ onOpenSponsorModal }) => {
  return (
    <section id="sponsors" className="py-14 sm:py-20 px-4 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <div className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase mb-1.5">
          // BENEFACTORS & HARDWARE PARTNERS
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#ffc83b] font-black tracking-tight">
          BACKED BY THE ECOSYSTEM
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#adc2ea] font-sans max-w-xl mx-auto">
          Empowering the brightest young minds in the country with zero financial barrier to entry.
        </p>
      </div>

      <WindowFrame
        title="Hacker Diaries — Sponsors & Partners Manager"
        statusBarText="Sponsor Slots Finalizing // Tier 1 & Track Bounties Open"
        secondaryStatus="APPLICATIONS IN REVIEW"
        icon="terminal"
        windowId="sponsors-window"
      >
        <div className="space-y-6">
          {/* Confirmed Community Partners Grid */}
          <div>
            <div className="text-xs font-pixel text-[#8fa8db] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
              COMMUNITY & CAMPUS ALLIANCES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {partnerSlots.map((p, i) => (
                <div
                  key={i}
                  className="bg-[#071330] p-4 rounded border border-[#1b3a8a] hover:border-[#4dd8ff] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-[9px] font-pixel px-2 py-0.5 rounded bg-[#0f256e] text-[#ffd700] uppercase">
                      {p.tier}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-[#8fa8db] mt-0.5">{p.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prospective Sponsor Slots (Finalizing Notice) */}
          <div className="p-4 rounded bg-[#060e24] border border-dashed border-[#2956bd] text-center space-y-2">
            <div className="font-pixel text-xs text-[#ffd700]">
              [ SPONSOR TIERS CURRENTLY BEING FINALIZED ]
            </div>
            <p className="text-xs text-[#c5d8ff] max-w-lg mx-auto leading-relaxed">
              We are finalizing partnerships with top cloud infrastructure platforms, AI developer tools, and semiconductor foundations to provide APIs, cloud credits, and physical bounties.
            </p>
          </div>

          {/* "Become a Sponsor" CTA styled as a Classic System Dialog Box */}
          <div className="bg-[#ece9d8] text-[#111] p-4 sm:p-5 rounded-md border-2 border-[#7f9db9] shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center gap-4 select-none">
            {/* Warning Alert Icon */}
            <div className="w-12 h-12 rounded-full bg-[#ffcc00] border-2 border-[#cc9900] flex items-center justify-center flex-shrink-0 shadow-md">
              <AlertTriangle className="w-7 h-7 text-[#7a4800]" />
            </div>

            {/* Content Text */}
            <div className="flex-1 text-center sm:text-left">
              <div className="font-bold text-sm sm:text-base text-[#0a1a4a] leading-tight">
                SYSTEM NOTICE: BECOME A HACKER DIARIES SPONSOR
              </div>
              <p className="text-xs text-[#444] mt-1 leading-relaxed">
                Connect your brand with 300+ vetted teen prodigies, hire early engineering fellows, or sponsor dedicated bounties (AI, Hardware, Web3).
              </p>
            </div>

            {/* Action button inside dialog */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => {
                  retroAudio.playAlert();
                  onOpenSponsorModal();
                }}
                className="px-5 py-2.5 bg-[#0055ea] hover:bg-[#1a68ff] active:bg-[#003da8] text-white text-xs font-bold rounded-[3px] border border-[#043fa6] shadow flex items-center gap-2 cursor-pointer"
              >
                <Building className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>Initialize Sponsor Inquiry &gt;</span>
              </button>
            </div>
          </div>
        </div>
      </WindowFrame>
    </section>
  );
};
