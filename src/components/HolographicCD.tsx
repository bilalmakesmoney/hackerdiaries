import React, { useState } from 'react';
import { Disc, Play, Pause, Sparkles } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface HolographicCDProps {
  size?: number;
  className?: string;
  tiltAngle?: number;
  interactive?: boolean;
}

export const HolographicCD: React.FC<HolographicCDProps> = ({
  size = 280,
  className = '',
  tiltAngle = 12,
  interactive = true,
}) => {
  const [isFastSpin, setIsFastSpin] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!interactive) return;
    retroAudio.playClick();
    setIsFastSpin(!isFastSpin);
    retroAudio.toggleBgm((playing) => setIsPlaying(playing));
  };

  return (
    <div
      className={`relative select-none group cursor-pointer ${className}`}
      style={{
        perspective: '1000px',
        width: size,
        height: size,
      }}
      onClick={handleClick}
      title="Click to spin CD-R & toggle 2000s cyber track!"
    >
      {/* 3D Tilted Wrapper */}
      <div
        className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          transform: `rotateX(${tiltAngle}deg) rotateY(-${tiltAngle * 0.8}deg) rotateZ(6deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Iridescent Glow drop shadow */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-85"
          style={{
            background: 'radial-gradient(circle, rgba(77,216,255,0.4) 0%, rgba(245,197,24,0.3) 50%, rgba(10,26,74,0.8) 100%)',
            transform: 'translateZ(-20px) translateY(18px)',
          }}
        />

        {/* The CD Disc Body */}
        <div
          className={`w-full h-full rounded-full relative overflow-hidden border border-white/40 shadow-2xl ${
            isFastSpin ? 'animate-cd-spin-fast' : 'animate-cd-spin'
          }`}
          style={{
            background: 'radial-gradient(circle at 50% 50%, #d8e2ec 0%, #a2b4c8 30%, #4a6382 70%, #203552 100%)',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.8), 0 12px 30px rgba(0,0,0,0.7)',
          }}
        >
          {/* Holographic Iridescent Sheen Streaks (Conic rainbow simulation) */}
          <div
            className="absolute inset-0 rounded-full mix-blend-color-dodge opacity-80 pointer-events-none"
            style={{
              background: `conic-gradient(
                from 0deg,
                rgba(255, 0, 128, 0.45) 0deg,
                rgba(0, 230, 255, 0.5) 45deg,
                rgba(255, 220, 0, 0.45) 90deg,
                rgba(0, 255, 136, 0.4) 135deg,
                rgba(255, 0, 128, 0.45) 180deg,
                rgba(0, 230, 255, 0.5) 225deg,
                rgba(255, 220, 0, 0.45) 270deg,
                rgba(0, 255, 136, 0.4) 315deg,
                rgba(255, 0, 128, 0.45) 360deg
              )`,
            }}
          />

          {/* Microgroove Rings */}
          <div className="absolute inset-[10%] rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute inset-[15%] rounded-full border border-black/15 pointer-events-none" />
          <div className="absolute inset-[22%] rounded-full border border-white/15 pointer-events-none" />
          <div className="absolute inset-[30%] rounded-full border border-black/20 pointer-events-none" />

          {/* CD-R Handwritten / Marker Style Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-6 px-4 text-center pointer-events-none font-mono">
            <div className="text-[10px] tracking-widest font-black text-[#0c1a35] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] uppercase">
              Hacker Diaries // 700MB
            </div>
            <div className="text-[9px] tracking-wider text-[#1e3a8a] font-bold drop-shadow-[0_1px_0_rgba(255,255,255,0.7)] mt-auto mb-2">
              DELHI NCR • 15.11.2026
            </div>
          </div>

          {/* Specular Radial Light Beams across the face */}
          <div 
            className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%)',
            }}
          />

          {/* Aluminum Hub Ring */}
          <div
            className="absolute inset-[32%] rounded-full border-2 border-white/60 flex items-center justify-center shadow-inner"
            style={{
              background: 'radial-gradient(circle, #e9eff5 0%, #b0c0d4 60%, #879cb5 100%)',
            }}
          >
            {/* Mirror Spindle border */}
            <div className="w-[70%] h-[70%] rounded-full border border-white/80 bg-transparent flex items-center justify-center">
              {/* Clear center hole */}
              <div 
                className="w-[45%] h-[45%] rounded-full bg-[#070e2c] border-2 border-[#1e3a8a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center"
              >
                {interactive && (
                  <div className="text-[#ffd700] text-[10px] opacity-80 group-hover:opacity-100 transition-opacity">
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 translate-x-[0.5px]" />}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mini Sticker Badge */}
        {interactive && (
          <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-[#ffd700] to-[#ff9900] text-[#0a1a4a] text-[9px] font-pixel px-2 py-1 rounded border border-[#fff] shadow-lg flex items-center gap-1 animate-bounce">
            <Sparkles className="w-3 h-3 text-[#0a1a4a]" />
            <span>{isPlaying ? 'PLAYING TRACK 01' : 'CLICK TO SPIN'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
