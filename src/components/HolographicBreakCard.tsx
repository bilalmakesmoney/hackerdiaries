import React, { useState, useRef } from 'react';
import { 
  Lock, 
  Trophy, 
  Keyboard 
} from 'lucide-react';
import { retroAudio } from '../utils/audio';

export interface QRCardData {
  id: string;
  code: string;
  name: string;
  type: 'buff' | 'constraint';
  attribute: string;
  category: string;
  stars: number;
  isLocked: boolean;
  accentColor: string;
  rule: string;
  flavor: string;
  atkStat: string;
  defStat: string;
  serialNumber: string;
}

export const unlockedBuffCard: QRCardData = {
  id: 'buff-01',
  code: 'HD-EN001',
  name: 'Confirmed Stage Pitch',
  type: 'buff',
  attribute: '⚡ BUFF',
  category: '[ HACKER / CONTINUOUS BUFF ]',
  stars: 8,
  isLocked: false,
  accentColor: '#ffd700',
  rule: 'Guaranteed final presentation slot on the main stage! When active, your team bypasses preliminary judge triage filtration.',
  flavor: '"Securing your moment in the spotlight without sweating the first-round elimination cut."',
  atkStat: 'STAGE / VIP',
  defStat: 'TIMER / +120s',
  serialNumber: '20261115',
};

export const unlockedConstraintCard: QRCardData = {
  id: 'curse-01',
  code: 'HD-EN002',
  name: 'Mouse Forbidden (30m)',
  type: 'constraint',
  attribute: '⚠️ TRAP',
  category: '[ HACKER / CONTINUOUS CONSTRAINT ]',
  stars: 7,
  isLocked: false,
  accentColor: '#00e5ff',
  rule: 'One developer on your team must write code for 30 consecutive minutes using only keyboard shortcuts (mouse and trackpad strictly forbidden).',
  flavor: '"Master your Vim keybindings and terminal hotkeys under maximum hackathon pressure."',
  atkStat: 'HOTKEY / MAX',
  defStat: 'MOUSE / ZERO',
  serialNumber: '20260404',
};

export const qrCards: QRCardData[] = [
  unlockedBuffCard,
  unlockedConstraintCard,
  {
    id: 'buff-secret',
    code: 'HD-EN003',
    name: '??? CLASSIFIED BUFF ???',
    type: 'buff',
    attribute: '★ SECRET',
    category: '[ TOP SECRET / ENCRYPTED BUFF ]',
    stars: 9,
    isLocked: true,
    accentColor: '#ffd700',
    rule: 'Classified advantage sealed inside hidden physical venue QR stickers. Scan on-site during hackathon hours to decrypt and activate.',
    flavor: '"A powerful secret modifier waiting to be discovered by keen-eyed builders at the offline venue."',
    atkStat: '????',
    defStat: '????',
    serialNumber: '????????',
  },
  {
    id: 'curse-secret',
    code: 'HD-EN004',
    name: '??? SECRET CONSTRAINT ???',
    type: 'constraint',
    attribute: '★ SECRET',
    category: '[ TOP SECRET / ENCRYPTED MODIFIER ]',
    stars: 8,
    isLocked: true,
    accentColor: '#ff2a85',
    rule: 'Classified sprint modifier hidden around the venue. Unlocks unexpected creative build constraints for bonus organizer brownie points.',
    flavor: '"High-stakes creative test designed to push adaptability to the absolute edge."',
    atkStat: '????',
    defStat: '????',
    serialNumber: '????????',
  },
];

interface CardViewProps {
  card: QRCardData;
  onClick?: () => void;
  isFlipping?: boolean;
}

export const InteractiveHolographicCard: React.FC<CardViewProps> = ({ card, onClick, isFlipping = false }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isBuff = card.type === 'buff';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipping) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -12;
    const tiltY = ((x - centerX) / centerX) * 12;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: tiltX, y: tiltY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div 
      className="relative py-2 px-2 flex flex-col items-center w-full"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient Outer Halo strictly tailored to website palette */}
      <div
        className="absolute inset-4 rounded-3xl blur-3xl opacity-80 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 85, 234, 0.45) 0%, rgba(255, 215, 0, 0.25) 50%, transparent 80%)',
        }}
      />

      {/* Yu-Gi-Oh / TCG Vertical Card in Cohesive Y2K Midnight Navy & Gold */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={`w-full max-w-[350px] sm:max-w-[390px] min-h-[530px] sm:min-h-[590px] rounded-2xl cursor-pointer relative group transition-all duration-200 ease-out select-none shadow-[0_30px_70px_rgba(0,0,0,0.98)] p-3 sm:p-3.5 flex flex-col justify-between ${
          isFlipping ? 'scale-95 rotate-3 opacity-85' : 'scale-100 hover:scale-[1.02]'
        }`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(165deg, #0d2258 0%, #07153a 45%, #030a1c 100%)',
          border: '2px solid #ffd700',
          boxShadow: '0 0 24px rgba(0, 85, 234, 0.4), inset 0 0 20px rgba(0, 85, 234, 0.25), 0 25px 60px rgba(0,0,0,0.95)',
        }}
        title="Click card to change / draw next!"
      >
        {/* Holographic Prismatic Rainbow Sheen Foil */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-color-dodge pointer-events-none transition-opacity duration-300 group-hover:opacity-75 rounded-xl overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.95) 0%, rgba(77,216,255,0.5) 30%, rgba(255,215,0,0.5) 60%, transparent 100%)`,
          }}
        />

        {/* --- 1. TOP EMBOSSED NAMEPLATE BANNER --- */}
        <div 
          className="w-full px-3 py-1.5 rounded-lg flex items-center justify-between gap-2 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7),0_1px_0_rgba(255,255,255,0.15)] border border-[#ffd700]/70 relative z-10 shrink-0"
          style={{
            background: 'linear-gradient(180deg, #183d96 0%, #0e2560 50%, #091840 100%)',
          }}
        >
          {/* Card Name - Full Text Display */}
          <h2 className="font-display font-black text-xs sm:text-sm md:text-[15px] text-[#f5f0dc] tracking-wide uppercase leading-tight flex-1">
            {card.name}
          </h2>

          {/* Attribute Orb */}
          <div 
            className="px-2 py-0.5 rounded font-pixel text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm border shrink-0"
            style={{
              backgroundColor: `${card.accentColor}25`,
              borderColor: card.accentColor,
              color: card.accentColor,
            }}
          >
            <span>{card.attribute}</span>
          </div>
        </div>

        {/* --- 2. STARS LEVEL BAR --- */}
        <div className="w-full flex items-center justify-end gap-1 px-1 py-0.5 relative z-10 shrink-0">
          {Array.from({ length: card.stars }).map((_, i) => (
            <div 
              key={i} 
              className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#eab308] to-[#fde047] border border-[#78350f] shadow-xs flex items-center justify-center text-[8px] text-[#78350f] font-black"
            >
              ★
            </div>
          ))}
        </div>

        {/* --- 3. CENTRAL ARTWORK FRAME --- */}
        <div 
          className="w-full aspect-[4/3] rounded-lg overflow-hidden relative z-10 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.15)] border-2 border-[#1e4499] flex items-center justify-center p-3"
          style={{
            background: 'radial-gradient(circle at 50% 35%, #132f7a 0%, #08173d 55%, #020718 100%)',
          }}
        >
          {/* Matrix Cyber Lines */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#4dd8ff 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Central Thematic Illustration Graphic */}
          <div className="relative flex flex-col items-center justify-center text-center space-y-2 z-10">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border-2"
              style={{
                backgroundColor: `${card.accentColor}18`,
                borderColor: card.accentColor,
                boxShadow: `0 0 24px ${card.accentColor}50`,
              }}
            >
              {card.isLocked ? (
                <Lock className="w-9 h-9 sm:w-11 sm:h-11 text-[#ffd700] animate-pulse" />
              ) : isBuff ? (
                <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-[#ffd700] animate-bounce" />
              ) : (
                <Keyboard className="w-9 h-9 sm:w-11 sm:h-11 text-[#00e5ff] animate-pulse" />
              )}
            </div>

            <div 
              className="font-pixel text-[10px] tracking-widest font-black uppercase px-2.5 py-0.5 rounded bg-[#030919]/80 border backdrop-blur-xs"
              style={{ color: card.accentColor, borderColor: `${card.accentColor}60` }}
            >
              [ {card.code} ]
            </div>
          </div>

          {/* Holographic Reflection */}
          <div
            className="absolute inset-0 opacity-45 mix-blend-color-dodge pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.5) 45%, rgba(77,216,255,0.4) 60%, transparent 80%)`,
            }}
          />
        </div>

        {/* --- 4. BOTTOM LORE / EFFECT TEXT BOX --- */}
        <div 
          className="w-full p-3 rounded-lg relative z-10 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)] border border-[#1e4499] flex flex-col justify-between space-y-2 mt-1 shrink-0"
          style={{
            background: 'linear-gradient(180deg, rgba(8, 23, 61, 0.95) 0%, rgba(4, 12, 36, 0.95) 100%)',
          }}
        >
          {/* Category Header */}
          <div 
            className="font-pixel text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border-b border-[#1e3a8a]/70 pb-1 flex items-center justify-between"
          >
            <span style={{ color: card.accentColor }}>{card.category}</span>
            <span className="text-[#8fa8db] font-mono text-[9px]">OFFLINE 2026</span>
          </div>

          {/* Main Rule Description */}
          <p className="font-sans text-[11px] sm:text-xs text-[#f5f0dc] font-medium leading-snug">
            {card.rule}
          </p>

          {/* Flavor Quote */}
          <p className="font-mono italic text-[9px] sm:text-[10px] text-[#adc2ea] leading-tight pt-0.5">
            {card.flavor}
          </p>

          {/* Stats Bar (ATK / DEF Style) */}
          <div className="pt-1.5 border-t border-[#1e3a8a]/70 flex items-center justify-between font-mono text-[10px] sm:text-[11px] font-bold text-[#8fa8db]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#8fa8db]">ATK/</span>
              <span className="font-sans font-bold text-xs text-[#ffd700]">{card.atkStat}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#8fa8db]">DEF/</span>
              <span className="font-sans font-bold text-xs text-[#00e5ff]">{card.defStat}</span>
            </div>
          </div>
        </div>

        {/* --- 5. CARD FOOTER & SECURITY HOLOGRAM --- */}
        <div className="w-full flex items-center justify-between text-[8px] font-mono text-[#8fa8db] px-1 pt-1 relative z-10 shrink-0">
          <span>{card.serialNumber}</span>

          {/* Gold Security Hologram Square Stamp */}
          <div className="flex items-center gap-1.5">
            <div 
              className="w-3.5 h-3.5 rounded-[1px] shadow-sm border border-[#ffd700]/70 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #fde047 0%, #ca8a04 40%, #ffffff 60%, #a16207 100%)',
              }}
              title="Official Hacker Diaries Holographic Security Stamp"
            >
              <div 
                className="absolute inset-0 opacity-80 mix-blend-color-dodge"
                style={{
                  background: 'linear-gradient(45deg, rgba(255,0,128,0.5), rgba(0,229,255,0.5))',
                }}
              />
            </div>
            <span>© 2026 HACKER DIARIES</span>
          </div>
        </div>

      </div>
    </div>
  );
};
