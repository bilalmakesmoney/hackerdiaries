import React, { useState, useRef } from 'react';
import { Sparkles, Zap, AlertTriangle, Shuffle, Cpu, ShieldCheck, Flame, Lock, Eye } from 'lucide-react';
import { retroAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface BreakCardData {
  id: string;
  code: string;
  name: string;
  category: string;
  isLocked: boolean;
  accentColor: string;
  constraint: string;
  flavor: string;
  difficulty: string;
  statusText: string;
}

const breakCards: BreakCardData[] = [
  {
    id: 'bc-sample',
    code: 'SAMPLE_#01',
    name: 'Playable Mini-Game / Easter Egg',
    category: 'SPRINT 2 MODIFIER',
    isLocked: false,
    accentColor: '#4dd8ff',
    constraint: 'You must build and embed a fully playable mini-game (e.g., retro typing defense, 2D runner, clicker challenge, or puzzle game) directly inside your project that unlocks a secret feature.',
    flavor: 'A substantial Sprint 2 engineering challenge: build the game loop, manage score state, and integrate it into your UI in 1.5–2 hours.',
    difficulty: 'MID-SPRINT CHALLENGE',
    statusText: 'SAMPLE UNLOCKED',
  },
  {
    id: 'bc-locked-1',
    code: 'SEALED_#??',
    name: '??? CLASSIFIED MODIFIER ???',
    category: 'TOP SECRET // SPRINT 2',
    isLocked: true,
    accentColor: '#ffd700',
    constraint: 'A surprise challenge modifier sealed inside your physical team envelope. Requires ~1.5 to 2 hours of focused architecture, gameplay, or feature engineering during Sprint 2.',
    flavor: 'Confidential protocol. Every team draws their mystery modifier at 02:00 PM to build before final code freeze.',
    difficulty: 'TIME-BASED PIVOT',
    statusText: 'SEALED ENVELOPE',
  },
  {
    id: 'bc-locked-2',
    code: 'ENCRYPTED_#??',
    name: '??? MYSTERY CONSTRAINT ???',
    category: 'ENCRYPTED // SPRINT 2',
    isLocked: true,
    accentColor: '#ff2a85',
    constraint: 'A creative sprint modifier (such as real-time procedural audio synthesis, offline-first local persistence, or full CLI terminal navigation) drawn at kickoff.',
    flavor: 'Designed to test your team\'s adaptability, rapid prototyping, and creative problem solving under time constraints.',
    difficulty: 'TIME-BASED PIVOT',
    statusText: 'TOP SECRET',
  },
];



interface HolographicBreakCardProps {
  className?: string;
}

export const HolographicBreakCard: React.FC<HolographicBreakCardProps> = ({
  className = '',
}) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const currentCard = breakCards[cardIndex];

  // Smooth 3D Mouse Parallax Tilt
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

  // Clean 3D Flip & Draw Mechanic
  const handleDraw = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    retroAudio.playClick();

    setTimeout(() => {
      const nextIdx = (cardIndex + 1) % breakCards.length;
      setCardIndex(nextIdx);
      retroAudio.playAlert();

      if (!breakCards[nextIdx].isLocked) {
        try {
          confetti({
            particleCount: 45,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#4dd8ff', '#ffb800', '#ffffff'],
          });
        } catch {}
      }

      setTimeout(() => {
        setIsFlipping(false);
      }, 200);
    }, 200);
  };

  return (
    <div className={`flex flex-col items-center select-none w-full ${className}`}>
      
      {/* 3D Perspective Card Container */}
      <div 
        className="relative py-2 px-2 flex flex-col items-center w-full"
        style={{ perspective: '1200px' }}
      >
        {/* Soft Ambient Card Glow */}
        <div
          className="absolute inset-4 rounded-3xl blur-2xl opacity-60 transition-opacity duration-300 pointer-events-none"
          style={{
            background: currentCard.isLocked
              ? 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,42,133,0.2) 50%, transparent 80%)'
              : 'radial-gradient(circle, rgba(255,215,0,0.35) 0%, rgba(77,216,255,0.25) 50%, transparent 80%)',
          }}
        />

        {/* The 3D Interactive Break Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleDraw}
          className={`w-full max-w-[360px] sm:max-w-[430px] min-h-[480px] sm:min-h-[520px] rounded-2xl cursor-pointer relative group transition-all duration-200 ease-out ${
            isFlipping ? 'scale-95 rotate-3 opacity-85' : 'scale-100 hover:scale-[1.02]'
          }`}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
          title="Click card to draw / flip modifier!"
        >
          {/* Card Frame Body */}
          <div
            className={`w-full h-full rounded-2xl border-2 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden relative flex flex-col justify-between ${
              currentCard.isLocked ? 'border-[#ffd700]/80' : 'border-[#ffd700]'
            }`}
            style={{
              background: currentCard.isLocked
                ? 'linear-gradient(165deg, #12102e 0%, #0a0b21 50%, #040512 100%)'
                : 'linear-gradient(165deg, #0e2358 0%, #071438 50%, #030a1c 100%)',
            }}
          >
            {/* Holographic Prismatic Rainbow Sheen */}
            <div
              className="absolute inset-0 opacity-35 mix-blend-color-dodge pointer-events-none transition-opacity duration-300 group-hover:opacity-65"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.9) 0%, rgba(77,216,255,0.45) 30%, rgba(255,215,0,0.45) 60%, transparent 100%)`,
              }}
            />

            {/* Subtle Matrix Foil Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#4dd8ff 1.2px, transparent 1.2px)',
                backgroundSize: '18px 18px',
              }}
            />

            {/* XP Luna Classic Header */}
            <div className="xp-titlebar px-4 py-2 flex items-center justify-between border-b-2 border-[#ffd700] select-none z-10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
                <span className="font-pixel text-xs sm:text-sm text-white tracking-wider font-bold">
                  BREAK_CARD.EXE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#ffd700] font-black">
                  [{currentCard.code}]
                </span>
                <span className="w-2.5 h-2.5 rounded-xs bg-[#ff5555]" />
              </div>
            </div>

            {/* Card Content Interior */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10 text-left">
              
              <div className="space-y-4">
                {/* Constraint Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#f5f0dc] tracking-wide leading-tight pt-1">
                  {currentCard.name}
                </h3>

                {/* Mandatory Rule Box: Soft, readable, and easy on the eyes */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#061129]/90 border border-[#1e3a8a] text-xs sm:text-sm font-sans text-[#f5f0dc] leading-relaxed shadow-inner space-y-2">
                  <div className="flex items-center gap-1.5 font-pixel text-xs text-[#ffd700] uppercase font-bold tracking-wide">
                    {currentCard.isLocked ? (
                      <>
                        <Lock className="w-3.5 h-3.5 text-[#ffd700]" />
                        <span>SEALED MODIFIER:</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-[#ffd700]" />
                        <span>MANDATORY RULE:</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#f5f0dc] leading-relaxed">
                    {currentCard.constraint}
                  </p>
                </div>

                {/* Flavor / Context Note Below Rule */}
                <p className="text-xs sm:text-[13px] text-[#adc2ea] font-mono italic leading-relaxed pt-0.5">
                  &quot;{currentCard.flavor}&quot;
                </p>
              </div>

              {/* Bottom Card Footer: Action integrated directly on the card */}
              <div className="pt-4 border-t border-[#1e3a8a]/70 flex items-center justify-between text-xs font-mono text-[#8fa8db]">
                <span className="text-[#8fa8db] font-mono text-[11px] sm:text-xs">
                  SPRINT 2 // 12-HR PROTOCOL
                </span>

                <div className="px-3.5 py-1.5 rounded-lg bg-[#ffd700] text-[#050e26] border border-[#ffe033] font-pixel text-[11px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_18px_rgba(255,215,0,0.7)] group-hover:scale-105 transition-all">
                  <Shuffle className="w-3.5 h-3.5 text-[#050e26] animate-pulse" />
                  <span className="font-black">CLICK TO DRAW</span>
                </div>
              </div>
            </div>

            {/* Corner Bracket Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/70 pointer-events-none rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/70 pointer-events-none rounded-br-xl" />
          </div>
        </div>
      </div>

    </div>
  );
};




