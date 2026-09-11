import React from 'react';
import { Globe, Gamepad2, ArrowRight, Code2, Sparkles, Check } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface Track {
  id: string;
  code: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const tracks: Track[] = [
  {
    id: 'web-dev',
    code: 'TRACK_01.EXE',
    category: 'WEB & FULL-STACK',
    title: 'Web Development',
    subtitle: 'Modern Web Apps, AI Tools & Creative Portals',
    description: 'Build fast, high-impact web applications, AI-assisted browser utilities, real-time collaboration platforms, and creative web tools. Ship live within 12 hours.',
    highlights: [
      'Full-stack Web Applications & Micro-SaaS',
      'Interactive AI Web Agents & Utilities',
      'Creative Canvas, Audio & Visual Web Toys',
    ],
    icon: <Globe className="w-5 h-5 text-[#4dd8ff]" />,
  },
  {
    id: 'game-dev',
    code: 'TRACK_02.EXE',
    category: 'GAMES & WEBGL',
    title: 'Game Development',
    subtitle: 'Browser Games, 2D Platformers & Arcade Netplay',
    description: 'Channel the golden era of Flash, Newgrounds, and indie game jams. Build playable browser games, 2D pixel platformers, physics sandboxes, and multiplayer arenas.',
    highlights: [
      'Playable 2D & WebGL 3D Browser Games',
      'Physics Sandboxes & Action Platformers',
      'Multiplayer Retro Duels & Mini-Jam Games',
    ],
    icon: <Gamepad2 className="w-5 h-5 text-[#ffd700]" />,
  },
];

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
          Pick your focus area for the 12-hour sprint. Ship a standout web app or build an addictive playable game.
        </p>
      </div>

      {/* 2 Clean & Spacious Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="group rounded-2xl shadow-xl border-2 border-[#1e4499] hover:border-[#ffd700] bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden"
            onMouseEnter={() => retroAudio.playClick()}
          >
            {/* Top Windows XP Classic Titlebar */}
            <div className="xp-titlebar px-4 py-2 flex items-center justify-between border-b border-[#04338c] select-none">
              <div className="flex items-center gap-2.5">
                <span className="p-1 rounded bg-[#071330]/80 border border-[#4dd8ff]/30">
                  {track.icon}
                </span>
                <span className="font-pixel text-xs sm:text-sm text-white tracking-wider font-bold">
                  {track.code}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#ffd700] uppercase font-bold">
                [{track.category}]
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <h3 className="font-display text-2xl sm:text-3xl text-[#f5f0dc] font-black group-hover:text-[#ffd700] transition-colors">
                  {track.title}
                </h3>
                <div className="font-mono text-xs text-[#4dd8ff] font-bold">
                  {track.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#c7d9fa] leading-relaxed font-sans pt-1">
                  {track.description}
                </p>
              </div>

              {/* Clean Highlight Bullets */}
              <div className="space-y-2 pt-4 border-t border-[#1e3a8a]/70">
                <div className="text-[10px] font-pixel text-[#8fa8db] uppercase tracking-wider">
                  WHAT YOU CAN BUILD:
                </div>
                <div className="space-y-1.5 font-sans text-xs text-[#c5d8ff]">
                  {track.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#4dd8ff] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1e3a8a]/70 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    retroAudio.playClick();
                    onSelectTrack(track.title);
                  }}
                  className="w-full y2k-btn-gold py-2.5 rounded-md font-pixel text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer font-bold shadow-md hover:scale-[1.02] transition-transform"
                >
                  <span>SELECT {track.title.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4a2600]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
