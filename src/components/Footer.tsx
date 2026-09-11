import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    retroAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04091d] border-t-2 border-[#12285e] pt-12 pb-16 px-4 sm:px-6 text-[#8fa8db] font-mono text-xs select-none">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Organizer Credit, Delhi NCR Developer Ecosystem, & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="font-pixel text-xs sm:text-sm text-[#ffd700] tracking-wider">
              HACKER DIARIES • 15 NOV 2026
            </div>
            <p className="text-xs text-[#c5d8ff]">
              Organized by teen builders for the Delhi NCR developer ecosystem.
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
              Contact:{' '}
              <a
                href="mailto:hackerdiaries@gmail.com"
                className="text-[#8fa8db] hover:text-[#ffd700] underline decoration-[#1e3a8a] hover:decoration-[#ffd700]"
              >
                hackerdiaries@gmail.com
              </a>{' '}
              // Delhi NCR, India
            </div>
          </div>
        </div>

        {/* Bottom copyright & nostalgic sign-off */}
        <div className="text-center text-[11px] text-[#556994] pt-4 border-t border-[#13285c]">
          © 2026 Hacker Diaries Foundation. All logs archived. No cookies, no trackers, pure raw web spirit.
        </div>
      </div>
    </footer>
  );
};
