import React, { useState, useEffect } from 'react';
import { Instagram, Globe, Heart, Shield, Terminal, ArrowUp } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState('0048291');

  useEffect(() => {
    // Generate a lively retro hit counter
    const count = Math.floor(48200 + Math.random() * 100);
    setVisitorCount(count.toString().padStart(7, '0'));
  }, []);

  const scrollToTop = () => {
    retroAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050b20] border-t-2 border-[#12285e] pt-10 pb-16 px-4 text-[#8fa8db] font-mono text-xs select-none">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Retro Web Badges & 2003 Web-Ring Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Hit Counter */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black border border-[#2a437e] rounded-xs font-mono text-[11px]">
            <span className="text-[#8fa8db] text-[10px]">PAGE HITS:</span>
            <span className="bg-[#111] px-1.5 py-0.5 border border-[#333] text-[#00ff66] font-pixel tracking-widest text-[10px]">
              {visitorCount}
            </span>
          </div>

          {/* 800x600 Badge */}
          <div className="px-2 py-1 bg-[#0b1b44] border border-[#1e3a8a] text-[10px] text-[#ffd700] font-pixel">
            [ 1024x768 OPTIMIZED ]
          </div>

          {/* Netscape / IE Badge */}
          <div className="px-2 py-1 bg-[#0b1b44] border border-[#1e3a8a] text-[10px] text-[#4dd8ff] font-pixel">
            [ IE 6.0 & NETSCAPE READY ]
          </div>

          {/* Made for under-18s */}
          <div className="px-2 py-1 bg-[#0b1b44] border border-[#1e3a8a] text-[10px] text-[#00ff66] font-pixel">
            [ VERIFIED UNDER-18 COHORT ]
          </div>
        </div>

        {/* Organizer Credit, IIITD / Delhi NCR Mention, & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#0f1f4d] text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-pixel text-xs text-[#ffd700] tracking-wider">
              HACKER DIARIES • 15 NOV 2026
            </div>
            <p className="text-[11px] text-[#c5d8ff]">
              Organized by high school builders in collaboration with the IIITD / Delhi NCR developer ecosystem.
            </p>
            <p className="text-[10px] text-[#6d84b5]">
              Strictly non-profit. Dedicated to raw creative engineering, hardware freedom, and open exploration.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center justify-center sm:justify-end gap-3">
              <a
                href="https://instagram.com/thehxckerdiaries"
                target="_blank"
                rel="noreferrer"
                onClick={() => retroAudio.playClick()}
                className="px-3 py-1.5 rounded bg-[#0d2258] hover:bg-[#16388c] border border-[#2b5fd9] text-[#f5f0dc] text-[11px] font-pixel flex items-center gap-1.5 transition-colors"
                title="Instagram: @thehxckerdiaries"
              >
                <Instagram className="w-3.5 h-3.5 text-[#ff4da6]" />
                <span>@thehxckerdiaries</span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="p-1.5 rounded bg-[#0d2258] hover:bg-[#16388c] border border-[#2b5fd9] text-[#ffd700] transition-colors"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[10px] text-[#6d84b5]">
              Contact: dispatch@hackerdiaries.org // Delhi NCR, India
            </div>
          </div>
        </div>

        {/* Bottom tiny copyright & nostalgic sign-off */}
        <div className="text-center text-[10px] text-[#556994] pt-2">
          © 2026 Hacker Diaries Foundation. All logs archived. No cookies, no trackers, pure 2004 web spirit.
        </div>
      </div>
    </footer>
  );
};
