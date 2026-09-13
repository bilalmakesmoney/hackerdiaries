import React from 'react';
import { Sparkles, Dices, Zap, Layers, ShieldCheck, Clock, RefreshCw, Cpu, Award, Shuffle } from 'lucide-react';
import { HolographicBreakCard } from './HolographicBreakCard';

export const BreakCardSection: React.FC = () => {
  return (
    <section id="break-card" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2159] border border-[#ffd700]/60 shadow-[0_0_16px_rgba(255,215,0,0.3)] mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700] animate-pulse" />
          <span className="font-pixel text-xs sm:text-sm text-[#ffd700] tracking-widest uppercase font-bold">
            // WHAT&apos;S NEW • THE SPRINT 2 TWIST
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-black tracking-wide leading-tight drop-shadow-md">
          INTRODUCING THE <span className="gold-text-stroke text-[#ffc83b]">BREAK CARD</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#c2d4f8] font-sans max-w-2xl mx-auto leading-relaxed font-normal">
          Two hacking sprints. One unpredictable game-changer. Halfway through the build, every team draws a secret constraint that must be incorporated into their final product.
        </p>
      </div>

      {/* Main Interactive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Concept & Flow Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-2xl bg-gradient-to-b from-[#0e245a] via-[#08173d] to-[#040e26] border-2 border-[#1e4499] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-[#1e3a8a] pb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse shadow-[0_0_8px_#ffd700]" />
                <span className="font-mono text-xs sm:text-sm text-[#c2d4f8] font-bold">
                  break_card_protocol://mechanics.sys
                </span>
              </div>
              <span className="font-pixel text-[11px] text-[#00e5ff] font-bold uppercase tracking-wider">[MID-SPRINT PIVOT]</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug tracking-wide">
                How The Break Card Works:
              </h3>

              {/* 3 Step Timeline */}
              <div className="space-y-3.5 pt-1">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061129] border border-[#1a3675]">
                  <div className="w-7 h-7 rounded-lg bg-[#0c1f52] border border-[#00e5ff]/60 flex items-center justify-center font-pixel text-xs text-[#00e5ff] shrink-0 font-bold">
                    01
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      Sprint 1: The Foundation (10:30 AM – 01:30 PM)
                    </div>
                    <p className="text-xs sm:text-sm text-[#c2d4f8] font-sans mt-0.5 leading-relaxed">
                      Initialize repositories, configure your stack, and build your core architecture.
                    </p>
                  </div>
                </div>

                {/* Step 2 (Highlight) */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gradient-to-r from-[#142f7a] to-[#0c1f52] border-2 border-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                  <div className="w-7 h-7 rounded-lg bg-[#ffd700] text-[#050e26] border border-[#ffd700] flex items-center justify-center font-pixel text-xs shrink-0 font-black shadow-[0_0_10px_#ffd700]">
                    02
                  </div>
                  <div>
                    <div className="font-display font-black text-sm sm:text-base text-[#ffd700] tracking-wide flex items-center gap-1.5">
                      <span>The Break Card Drop (02:00 PM)</span>
                      <Zap className="w-3.5 h-3.5 text-[#ffd700] fill-[#ffd700]" />
                    </div>
                    <p className="text-xs sm:text-sm text-white font-sans mt-0.5 leading-relaxed font-medium">
                      At Sprint 2 start, every team draws a physical sealed Break Card envelope with a surprise modifier.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061129] border border-[#1a3675]">
                  <div className="w-7 h-7 rounded-lg bg-[#0c1f52] border border-[#00e5ff]/60 flex items-center justify-center font-pixel text-xs text-[#00e5ff] shrink-0 font-bold">
                    03
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      Sprint 2: Adapt &amp; Ship (02:00 PM – 05:30 PM)
                    </div>
                    <p className="text-xs sm:text-sm text-[#c2d4f8] font-sans mt-0.5 leading-relaxed">
                      Pivot quickly, creatively engineer around your constraint, and deploy before code freeze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Interactive 3D Break Card Simulator */}
        <div className="lg:col-span-6 flex flex-col items-center select-none w-full">
          {/* Standalone 3D Holographic Card Model */}
          <HolographicBreakCard />
        </div>


      </div>
    </section>
  );
};


