import React, { useState, useEffect } from 'react';
import { Instagram, Globe, Heart, Shield, Terminal, ArrowUp } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState('0048291');

  useEffect(() => {
    const count = Math.floor(48200 + Math.random() * 100);
    setVisitorCount(count.toString().padStart(7, '0'));
  }, []);

  const scrollToTop = () => {
    retroAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04091d] border-t-2 border-[#12285e] pt-12 pb-16 px-4 sm:px-6 text-[#8fa8db] font-mono text-xs select-none">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Retro Web Badges & 2003 Web-Ring Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Hit Counter */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black border border-[#1e3a8a] rounded-md font-mono text-xs shadow-inner">
            <span className="text-[#8fa8db] text-[10px] font-pixel">PAGE HITS:</span>
            <span className="bg-[#0c142e] px-2 py-0.5 border border-[#1e3a8a] text-[#ffd700] font-pixel tracking-widest text-xs">
              {visitorCount}
            </span>
          </div>

          {/* 1024x768 Badge */}
          <div className="px-3 py-1.5 bg-[#071330] border border-[#1e3a8a] text-[10px] text-[#ffd700] font-pixel rounded-md shadow-sm">
            [ 1024x768 OPTIMIZED ]
          </div>

          {/* Netscape / IE Badge */}
          <div className="px-3 py-1.5 bg-[#071330] border border-[#1e3a8a] text-[10px] text-[#4dd8ff] font-pixel rounded-md shadow-sm">
            [ IE 6.0 & NETSCAPE READY ]
          </div>

          {/* Made for under-18s */}
          <div className="px-3 py-1.5 bg-[#071330] border border-[#1e3a8a] text-[10px] text-[#f5f0dc] font-pixel rounded-md shadow-sm">
            [ STRICTLY UNDER-18 COHORT ]
          </div>
        </div>

        {/* Organizer Credit, IIITD / Delhi NCR Mention, & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#13285c] text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="font-pixel text-xs sm:text-sm text-[#ffd700] tracking-wider">
              HACKER DIARIES • 15 NOV 2026
            </div>
            <p className="text-xs text-[#c5d8ff]">
              Organized by teen builders in collaboration with the IIITD / Delhi NCR developer ecosystem.
            </p>
            <p className="text-[11px] text-[#6d84b5]">
              Strictly non-profit. Dedicated to raw creative engineering, browser freedom, and independent software.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:items-end gap-2.5 shrink-0">
            <div className="flex items-center justify-center sm:justify-end gap-3">
              <a
                href="https://instagram.com/thehxckerdiaries"
                target="_blank"
                rel="noreferrer"
                onClick={() => retroAudio.playClick()}
                className="px-3.5 py-2 rounded-lg bg-[#0d2258] hover:bg-[#16388c] border border-[#2b5fd9] text-[#f5f0dc] text-xs font-pixel flex items-center gap-2 transition-all hover:scale-105"
                title="Instagram: @thehxckerdiaries"
              >
                <Instagram className="w-4 h-4 text-[#ffd700]" />
                <span>@thehxckerdiaries</span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-[#0d2258] hover:bg-[#16388c] border border-[#2b5fd9] text-[#ffd700] transition-all hover:scale-105 cursor-pointer"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] text-[#6d84b5] font-mono">
              Contact: dispatch@hackerdiaries.org // Delhi NCR, India
            </div>
          </div>
        </div>

        {/* Bottom copyright & nostalgic sign-off */}
        <div className="text-center text-[11px] text-[#556994] pt-2">
          © 2026 Hacker Diaries Foundation. All logs archived. No cookies, no trackers, pure raw web spirit.
        </div>
      </div>
    </footer>
  );
};
