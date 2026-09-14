import React, { useState, useEffect } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Scan, 
  ArrowRight 
} from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface BreakCardSectionProps {
  onOpenCardPage?: () => void;
}

export const BreakCardSection: React.FC<BreakCardSectionProps> = ({ onOpenCardPage }) => {
  const [scanUrl, setScanUrl] = useState('https://hackerdiaries2026.vercel.app/#/qr-card');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      if (!isLocal && window.location.origin) {
        setScanUrl(`${window.location.origin}${window.location.pathname}#/qr-card`);
      } else {
        setScanUrl('https://hackerdiaries2026.vercel.app/#/qr-card');
      }
    }
  }, []);

  const handleOpenPage = () => {
    retroAudio.playAlert();
    if (onOpenCardPage) {
      onOpenCardPage();
    } else {
      window.location.hash = '#/qr-card';
    }
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=15&ecc=M&color=000000&bgcolor=ffffff&data=${encodeURIComponent(
    scanUrl
  )}`;

  return (
    <section id="break-card" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2159] border border-[#ffd700]/60 shadow-[0_0_16px_rgba(255,215,0,0.3)] mb-4">
          <QrCode className="w-4 h-4 text-[#ffd700]" />
          <span className="font-pixel text-xs sm:text-sm text-[#ffd700] tracking-widest uppercase font-bold">
            // VENUE DISCOVERY PROTOCOL • WHAT&apos;S NEW
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-black tracking-wide leading-tight drop-shadow-md">
          HIDDEN QR CODES: <span className="gold-text-stroke text-[#ffc83b]">VENUE SECRETS</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#c2d4f8] font-sans max-w-3xl mx-auto leading-relaxed font-normal">
          Secret physical QR stickers are scattered in hidden spots across the venue. Scan with your phone camera to decrypt live interactive cards and secret modifiers.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Hunt Mechanics & Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-2xl bg-gradient-to-b from-[#0e245a] via-[#08173d] to-[#040e26] border-2 border-[#1e4499] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-7 space-y-5">
            
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-[#1e3a8a] pb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse shadow-[0_0_8px_#ffd700]" />
                <span className="font-mono text-xs sm:text-sm text-[#c2d4f8] font-bold">
                  qr_hunt_protocol://scanner.exe
                </span>
              </div>
              <span className="font-pixel text-[11px] text-[#00e5ff] font-bold uppercase tracking-wider">
                [LIVE VENUE SCAVENGER]
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug tracking-wide">
                How The QR Hunt Works:
              </h3>

              {/* 3 Step Timeline */}
              <div className="space-y-3 pt-1">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061129] border border-[#1a3675]">
                  <div className="w-7 h-7 rounded-lg bg-[#0c1f52] border border-[#00e5ff]/60 flex items-center justify-center font-pixel text-xs text-[#00e5ff] shrink-0 font-bold">
                    01
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      Hunt Down Cryptic Venue QR Stickers
                    </div>
                    <p className="text-xs sm:text-sm text-[#c2d4f8] font-sans mt-0.5 leading-relaxed">
                      QR codes are hidden in unexpected venue corners: under tables, behind stage displays, near the snack coolers, and mentor lounges.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061129] border border-[#1a3675]">
                  <div className="w-7 h-7 rounded-lg bg-[#0c1f52] border border-[#ffd700]/60 flex items-center justify-center font-pixel text-xs text-[#ffd700] shrink-0 font-bold">
                    02
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      Instant Phone Scan &amp; Animated Reveal
                    </div>
                    <p className="text-xs sm:text-sm text-[#c2d4f8] font-sans mt-0.5 leading-relaxed">
                      Point your phone’s camera to decrypt a live, animated 3D card with sound effects, particle glow, and custom rules.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gradient-to-r from-[#142f7a] to-[#0c1f52] border-2 border-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                  <div className="w-7 h-7 rounded-lg bg-[#ffd700] text-[#050e26] border border-[#ffd700] flex items-center justify-center font-pixel text-xs shrink-0 font-black shadow-[0_0_10px_#ffd700]">
                    03
                  </div>
                  <div>
                    <div className="font-display font-black text-sm sm:text-base text-[#ffd700] tracking-wide">
                      Secret Modifier Cards
                    </div>
                    <p className="text-xs sm:text-sm text-white font-sans mt-0.5 leading-relaxed font-medium">
                      Unlock game-changing perks, extra pitch time, dedicated mentor pairing, or fun build challenges throughout the hackathon!
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Clean Scannable QR Code Terminal */}
        <div className="lg:col-span-6 flex flex-col items-center select-none w-full">
          <div className="w-full max-w-[420px] rounded-2xl bg-gradient-to-b from-[#0e245a] via-[#08173d] to-[#040e26] border-2 border-[#ffd700] shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden relative group">
            
            {/* XP Titlebar */}
            <div className="xp-titlebar px-4 py-2.5 flex items-center justify-between border-b-2 border-[#ffd700] select-none z-10 shrink-0">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-[#ffd700] animate-pulse" />
                <span className="font-pixel text-xs sm:text-sm text-white tracking-wider font-bold">
                  OFFICIAL_VENUE_QR.EXE
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981] animate-ping" />
                <span className="font-mono text-[10px] text-[#ffd700] font-bold">[SCANNABLE]</span>
              </div>
            </div>

            {/* Terminal Body with Clear Unobstructed QR Code */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center space-y-5 relative">
              
              {/* Target Scan Header */}
              <div className="space-y-1">
                <div className="font-pixel text-[11px] text-[#00e5ff] uppercase tracking-wider">
                  // POINT YOUR SMARTPHONE CAMERA HERE
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
                  SCAN FOR YOUR <span className="gold-text-stroke text-[#ffc83b]">SECRET CARD</span>
                </h3>
              </div>

              {/* Clean High-Contrast QR Code Container */}
              <div 
                onClick={handleOpenPage}
                className="relative p-4 rounded-2xl bg-white border-4 border-[#1e4499] shadow-[0_0_35px_rgba(77,216,255,0.4)] cursor-pointer hover:scale-105 transition-transform duration-300"
                title="Scan with phone camera or click to open card!"
              >
                <img
                  src={qrImageUrl}
                  alt="Hacker Diaries Venue QR Code"
                  className="w-52 h-52 sm:w-60 sm:h-60 object-contain rounded-md block mx-auto"
                />
              </div>

              {/* Action Button */}
              <div className="space-y-3 w-full">
                <button
                  type="button"
                  onClick={handleOpenPage}
                  className="w-full y2k-btn-gold py-3 px-4 rounded-xl font-pixel text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  <Smartphone className="w-4 h-4 text-[#4a2600]" />
                  <span>SIMULATE SCAN &amp; REVEAL CARD</span>
                  <ArrowRight className="w-4 h-4 text-[#4a2600]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
