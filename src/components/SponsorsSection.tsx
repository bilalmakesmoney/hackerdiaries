import React from 'react';
import { Building, Sparkles, ArrowRight, Mail, Code2, Users, Cpu, Trophy, ShieldCheck } from 'lucide-react';
import { retroAudio } from '../utils/audio';

const sponsorPerks = [
  {
    icon: <Code2 className="w-5 h-5 text-[#4dd8ff]" />,
    title: 'Developer Tooling & API Adoption',
    description: 'Get your SDKs, APIs, and dev platforms directly into the hands of 100+ ambitious teen builders shipping production projects.',
  },
  {
    icon: <Users className="w-5 h-5 text-[#ffd700]" />,
    title: 'Early High-Agency Talent Discovery',
    description: 'Connect with self-taught teen prodigies, open-source contributors, and game creators building beyond their age.',
  },
  {
    icon: <Trophy className="w-5 h-5 text-[#4dd8ff]" />,
    title: 'Custom Bounties & Brand Impact',
    description: 'Sponsor dedicated challenge tracks, unbox mystery prize bundles, and anchor the premier under-18 hackathon in Delhi NCR.',
  },
];

export const SponsorsSection: React.FC<{ onOpenSponsorModal: () => void }> = ({ onOpenSponsorModal }) => {
  return (
    <section id="sponsors" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // PARTNERSHIP DOSSIER • SLOTS OPEN
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          BECOME A <span className="gold-text-stroke text-[#ffc83b]">SPONSOR</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          Sponsorship opportunities are currently open. Partner with Hacker Diaries to power India&apos;s sharpest under-18 builders with 100% free registration, developer tools, and mystery prizes.
        </p>
      </div>

      {/* Main Clean Showcase Card */}
      <div className="rounded-2xl border-2 border-[#1e4499] bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 p-6 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-8">
        {/* Status Callout Banner */}
        <div className="p-4 rounded-xl bg-[#071330]/90 border border-[#ffd700]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse shadow-[0_0_8px_#ffd700]" />
            <span className="font-pixel text-xs sm:text-sm text-[#ffd700] uppercase tracking-wider">
              SPONSORSHIP APPLICATIONS OPEN FOR 15 NOV 2026
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#8fa8db]">
            Title • Track • Tooling • Fuel Slots Available
          </span>
        </div>

        {/* 3 Simple Perk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {sponsorPerks.map((perk, i) => (
            <div
              key={i}
              className="bg-[#071330]/80 p-5 sm:p-6 rounded-xl border border-[#1a3675] hover:border-[#4dd8ff]/60 transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0c1f52] border border-[#1e3a8a] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {perk.icon}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors leading-snug">
                  {perk.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#adc2ea] font-sans leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Dispatch Bar */}
        <div className="pt-6 border-t border-[#1e3a8a]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-base text-[#f5f0dc]">
              Want to support teen builders in Delhi NCR?
            </h4>
            <p className="text-xs text-[#8fa8db] font-sans">
              Download our partner prospectus or send a direct inquiry to collaborate with us.
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
            <span>INQUIRE TO SPONSOR</span>
            <ArrowRight className="w-4 h-4 text-[#4a2600]" />
          </button>
        </div>
      </div>
    </section>
  );
};

