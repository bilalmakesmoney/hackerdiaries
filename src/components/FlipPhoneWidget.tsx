import React, { useState } from 'react';
import { MessageSquare, PhoneCall, Radio, Send, Check } from 'lucide-react';
import { retroAudio } from '../utils/audio';

export const FlipPhoneWidget: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [screenMsg, setScreenMsg] = useState('1 NEW MSG: "Ready to hack?"');
  const [keypadPressed, setKeypadPressed] = useState<string | null>(null);

  const handleKeyPress = (num: string) => {
    retroAudio.playClick();
    setKeypadPressed(num);
    setTimeout(() => setKeypadPressed(null), 200);

    const msgs: Record<string, string> = {
      '1': 'DELHI NCR 15 NOV 26',
      '2': 'STRICTLY UNDER-18',
      '3': 'FREE PIZZA & RED BULL',
      '4': 'TRACK: WEB DEV',
      '5': 'TRACK: GAME DEV',
      '6': '12 HOURS SPRINT',
      '7': 'PRIZES: COMING SOON',
      '8': 'WHATSAPP: ONLINE',
      '9': 'TEAM SIZE: 1 TO 4',
      '0': 'SYSTEM BOOT 2006...',
    };
    if (msgs[num]) {
      setScreenMsg(msgs[num]);
    }
  };

  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] ${className}`}
      style={{ perspective: '800px' }}
    >
      {/* 3D Tilted Retro Flip / Feature Phone Body */}
      <div 
        className="w-[200px] sm:w-[220px] bg-gradient-to-b from-[#2a3c5a] via-[#1a2538] to-[#0f1724] rounded-[28px] p-3.5 border-2 border-[#7a9bb8] shadow-2xl relative"
        style={{
          transform: 'rotateY(-6deg) rotateX(4deg)',
        }}
      >
        {/* Stub Antenna on top right */}
        <div className="absolute -top-6 right-6 w-3.5 h-7 bg-gradient-to-r from-[#4d637b] via-[#203042] to-[#111924] rounded-t-sm border-t border-x border-[#8aa6c4]" />

        {/* Glossy highlight line down left edge */}
        <div className="absolute left-2 top-4 bottom-4 w-1 bg-white/20 rounded-full blur-[0.5px] pointer-events-none" />

        {/* Earpiece slit */}
        <div className="w-12 h-1.5 bg-[#0a0f18] rounded-full mx-auto mb-2.5 border-t border-black border-b border-white/20" />

        {/* Retro Monochrome / Matrix LCD Screen */}
        <div className="bg-[#5a7d65] rounded-md p-2.5 border-2 border-[#374e3e] shadow-[inset_0_2px_5px_rgba(0,0,0,0.6)] mb-3 relative overflow-hidden">
          {/* LCD Scanline & Pixel Grid */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)',
              backgroundSize: '3px 3px',
            }}
          />

          {/* LCD Status Header */}
          <div className="flex justify-between items-center text-[8px] font-mono text-[#1a2b1f] font-bold border-b border-[#374e3e]/40 pb-1 mb-1">
            <span className="flex items-center gap-1">
              <Radio className="w-2.5 h-2.5 animate-pulse" /> AIRTEL 3G
            </span>
            <span>[||||] 100%</span>
          </div>

          {/* LCD Message Area */}
          <div className="font-arcade text-[8px] text-[#0d1f11] min-h-[42px] flex items-center justify-center text-center font-bold tracking-tight leading-relaxed">
            {screenMsg}
          </div>

          <div className="text-[7px] text-[#1e3824] font-mono text-center pt-1 border-t border-[#374e3e]/30">
            [PRESS 1-9 FOR INTEL]
          </div>
        </div>

        {/* Soft Keys (Call, End, Nav Pad) */}
        <div className="grid grid-cols-3 gap-1.5 mb-2.5">
          <button
            type="button"
            onClick={() => handleKeyPress('CALL')}
            className="py-1 bg-gradient-to-b from-[#1b5e20] to-[#0d3311] text-[#4dd8ff] text-[9px] font-bold rounded-sm border-t border-[#4dd8ff]/40 border-b border-black flex items-center justify-center shadow"
          >
            <PhoneCall className="w-2.5 h-2.5" />
          </button>
          <div className="w-6 h-6 mx-auto rounded-full bg-[#3d5069] border border-[#7a9bb8] flex items-center justify-center text-[7px] text-[#ffd700] font-bold shadow-inner">
            OK
          </div>
          <button
            type="button"
            onClick={() => handleKeyPress('END')}
            className="py-1 bg-gradient-to-b from-[#5c1d1d] to-[#380e0e] text-[#f5f0dc] text-[9px] font-bold rounded-sm border-t border-white/30 border-b border-black flex items-center justify-center shadow"
          >
            END
          </button>
        </div>

        {/* Numeric T9 Keypad (12 buttons) */}
        <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
          {[
            { n: '1', sub: 'INFO' },
            { n: '2', sub: 'U18' },
            { n: '3', sub: 'FOOD' },
            { n: '4', sub: 'WEB' },
            { n: '5', sub: 'GAME' },
            { n: '6', sub: '12HR' },
            { n: '7', sub: 'LOOT' },
            { n: '8', sub: 'WA' },
            { n: '9', sub: 'TEAM' },
            { n: '*', sub: 'KEY' },
            { n: '0', sub: 'BOOT' },
            { n: '#', sub: 'PASS' },
          ].map((key) => (
            <button
              key={key.n}
              type="button"
              onClick={() => handleKeyPress(key.n)}
              className={`py-1 px-1 rounded-sm border-t border-white/30 border-b border-black/80 transition-all ${
                keypadPressed === key.n
                  ? 'bg-[#4dd8ff] text-black translate-y-[1px]'
                  : 'bg-gradient-to-b from-[#324560] to-[#1e2a3b] text-[#e2ecf5] hover:brightness-110'
              }`}
            >
              <div className="text-[10px] font-bold leading-none">{key.n}</div>
              <div className="text-[6px] text-[#8aa6c4] leading-none tracking-tighter">{key.sub}</div>
            </button>
          ))}
        </div>

        {/* WhatsApp Direct Action Button */}
        <div className="mt-3">
          <a
            href="https://chat.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
            onClick={() => retroAudio.playSuccess()}
            className="block w-full py-1.5 bg-gradient-to-r from-[#0055ea] to-[#0f2868] hover:brightness-110 text-[#ffd700] font-pixel text-[9px] text-center rounded border-t border-white/40 border-b-2 border-black font-bold tracking-wider shadow"
          >
            [ OPEN WHATSAPP GROUP ]
          </a>
        </div>
      </div>
    </div>
  );
};
