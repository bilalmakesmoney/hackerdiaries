import React from 'react';
import { Sparkles, Building, Shield, ExternalLink, Zap, Terminal, Heart, Users, Cpu, Coffee, School, ArrowRight, Layers, Award } from 'lucide-react';
import { retroAudio } from '../utils/audio';

const partnerSlots = [
  {
    name: 'Delhi Tech Teen Guild',
    tier: 'COMMUNITY ANCHOR',
    category: '1,200+ Member Under-18 Network',
    description: 'Connecting young developers across Delhi NCR schools and hack clubs.',
    icon: <Users className="w-5 h-5 text-[#4dd8ff]" />,
  },
  {
    name: 'Open Web Labs',
    tier: 'ECOSYSTEM PARTNER',
    category: 'Open-Source Dev Tools & Toolkits',
    description: 'Providing starter boilerplates, API sandbox access, and mentors.',
    icon: <Cpu className="w-5 h-5 text-[#ffd700]" />,
  },
  {
    name: 'Cyber Cafe NCR',
    tier: 'CATERING & FUEL',
    category: 'Meals & Hydration Supplies',
    description: 'Powering builders with continuous cold brew, energy drinks, and hot buffets.',
    icon: <Coffee className="w-5 h-5 text-[#4dd8ff]" />,
  },
  {
    name: 'Student Tinkerers Club',
    tier: 'CAMPUS ALLIANCE',
    category: 'Venue & High-Speed Network',
    description: 'On-site gigabit networking infrastructure and hardware testbeds.',
    icon: <School className="w-5 h-5 text-[#ffd700]" />,
  },
];

const sponsorTiers = [
  {
    name: 'TITLE ECOSYSTEM SPONSOR',
    bounty: 'Keynote & Grand Trophy',
    perks: 'Keynote slot, direct developer recruitment, customized prize category, headline branding.',
    badge: 'TIER 1',
  },
  {
    name: 'TRACK BOUNTY PARTNER',
    bounty: 'Dedicated Track Challenge',
    perks: 'Exclusive track problem statement (AI agents, WebGL, DevTools), mentor table & swag.',
    badge: 'TIER 2',
  },
  {
    name: 'API & CLOUD INFRA PARTNER',
    bounty: 'Credits & Sandbox Access',
    perks: 'Direct developer adoption, API workshops, physical swag & sticker distribution.',
    badge: 'TIER 3',
  },
];

export const SponsorsSection: React.FC<{ onOpenSponsorModal: () => void }> = ({ onOpenSponsorModal }) => {
  return (
    <section id="sponsors" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // BENEFACTORS & ALLIANCES
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          POWERED BY THE <span className="gold-text-stroke text-[#ffc83b]">ECOSYSTEM</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-2xl mx-auto leading-relaxed">
          Empowering the sharpest under-18 builders in India with 100% free admission, bounties, and hardware access.
        </p>
      </div>

      {/* Main Container Shell */}
      <div className="rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.8)] border-2 border-[#1e4499] bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 overflow-hidden">
        {/* Windows XP Classic Titlebar */}
        <div className="xp-titlebar px-4 py-2 flex items-center justify-between border-b border-[#04338c] select-none shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded bg-[#071330]/80 border border-[#4dd8ff]/30 shadow-inner">
              <Building className="w-4 h-4 text-[#ffd700]" />
            </span>
            <span className="font-pixel text-xs sm:text-sm text-white tracking-wider font-bold drop-shadow">
              HACKER_DIARIES_SPONSORS_MANAGER.EXE
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#ffd700]">
              [TIERS & ALLIANCES OPEN]
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[10px] text-white font-mono shadow-inner">_</span>
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[9px] text-white font-mono shadow-inner">□</span>
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[9px] text-[#ffd700] font-mono font-bold shadow-inner">✕</span>
          </div>
        </div>

        {/* Section 1: Community & Campus Alliances */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-pixel text-[#8fa8db] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4dd8ff]" />
              CONFIRMED COMMUNITY & CAMPUS ANCHORS:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {partnerSlots.map((p, i) => (
                <div
                  key={i}
                  className="bg-[#071330]/90 p-5 rounded-xl border border-[#1e3a8a] hover:border-[#4dd8ff] transition-all flex flex-col justify-between group shadow-md hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2 rounded-lg bg-[#0c1f52] border border-[#1e3a8a]">{p.icon}</span>
                      <span className="text-[9px] font-pixel px-2.5 py-0.5 rounded-full bg-[#0b1d47] text-[#ffd700] uppercase border border-[#ffd700]/30">
                        {p.tier}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors leading-snug">
                      {p.name}
                    </h4>
                    <p className="text-xs font-mono text-[#4dd8ff] mt-1">{p.category}</p>
                    <p className="text-xs text-[#8fa8db] mt-2 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Sponsor Opportunities & Bounty Tracks */}
          <div className="pt-4 border-t border-[#1e3a8a]/80">
            <div className="text-xs font-pixel text-[#8fa8db] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffd700]" />
              OPEN SPONSORSHIP TIERS & OPPORTUNITIES:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sponsorTiers.map((tier, i) => (
                <div
                  key={i}
                  className="bg-[#071330]/90 p-5 rounded-xl border border-[#1e3a8a] hover:border-[#ffd700]/60 transition-all flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-pixel text-[9px] text-[#4dd8ff] px-2 py-0.5 rounded bg-[#0b1d47] border border-[#1e3a8a]">
                        {tier.badge}
                      </span>
                      <span className="text-xs font-pixel text-[#ffd700]">{tier.bounty}</span>
                    </div>
                    <h4 className="font-display font-black text-sm sm:text-base text-[#f5f0dc]">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-[#adc2ea] leading-relaxed">
                      {tier.perks}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsor Dispatch Callout Banner */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#0d2258] via-[#09173d] to-[#0d2258] border-2 border-[#1e4499] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700] animate-pulse" />
                <div className="font-pixel text-xs sm:text-sm text-[#ffd700] uppercase font-bold tracking-wider">
                  BECOME A HACKER DIARIES SPONSOR
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#c5d8ff] max-w-xl leading-relaxed">
                Connect your brand with 100+ vetted teen prodigies, hire early engineering fellows, or launch dedicated bounties for your APIs and dev tools.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                retroAudio.playAlert();
                onOpenSponsorModal();
              }}
              className="y2k-btn-gold px-6 py-3 rounded-md text-xs sm:text-sm font-pixel font-bold uppercase flex items-center gap-2 cursor-pointer shrink-0 shadow-lg hover:scale-105 transition-transform"
            >
              <span>INQUIRE AS SPONSOR</span>
              <ArrowRight className="w-4 h-4 text-[#4a2600]" />
            </button>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#071330] border-t border-[#1e3a8a] text-xs font-mono text-[#8fa8db] flex flex-wrap items-center justify-between gap-2">
          <span>SPONSORSHIP DOSSIER PROTOCOL // DELHI NCR 2026</span>
          <span className="font-pixel text-[10px] text-[#4dd8ff]">APPLICATIONS REVIEWED WITHIN 24H</span>
        </div>
      </div>
    </section>
  );
};
