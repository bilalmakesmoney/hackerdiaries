import React, { useState } from 'react';
import { Camera, Sparkles, Zap, Aperture } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface RetroDigicamProps {
  size?: number;
  className?: string;
  tiltAngle?: number;
  interactive?: boolean;
}

export const RetroDigicam: React.FC<RetroDigicamProps> = ({
  size = 280,
  className = '',
  tiltAngle = -12,
  interactive = true,
}) => {
  const [photoCount, setPhotoCount] = useState(42);
  const [isFlashing, setIsFlashing] = useState(false);
  const [filterMode, setFilterMode] = useState<'Y2K' | 'CYBER' | 'RETRO' | 'NIGHT'>('Y2K');
  const [showSnapAlert, setShowSnapAlert] = useState(false);

  const filterList: Array<'Y2K' | 'CYBER' | 'RETRO' | 'NIGHT'> = ['Y2K', 'CYBER', 'RETRO', 'NIGHT'];

  const handleSnap = () => {
    if (!interactive) return;
    retroAudio.playShutter();
    setIsFlashing(true);
    setShowSnapAlert(true);
    setPhotoCount((prev) => prev + 1);

    const nextIdx = (filterList.indexOf(filterMode) + 1) % filterList.length;
    setFilterMode(filterList[nextIdx]);

    setTimeout(() => {
      setIsFlashing(false);
    }, 250);

    setTimeout(() => {
      setShowSnapAlert(false);
    }, 1800);
  };

  // Dimensions based on aspect ratio 1.4 : 1
  const width = size;
  const height = size * 0.72;

  return (
    <div
      className={`relative select-none group cursor-pointer ${className}`}
      style={{
        perspective: '1000px',
        width,
        height,
      }}
      onClick={handleSnap}
      title="Click to snap photo & toggle 2000s digicam filters!"
    >
      {/* 3D Tilted Wrapper */}
      <div
        className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          transform: `rotateX(${-tiltAngle * 0.7}deg) rotateY(${tiltAngle}deg) rotateZ(-4deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Iridescent Glow drop shadow */}
        <div
          className="absolute inset-0 rounded-[28px] blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(77,216,255,0.45) 0%, rgba(255,184,0,0.3) 50%, rgba(10,26,74,0.85) 100%)',
            transform: 'translateZ(-25px) translateY(18px)',
          }}
        />

        {/* Camera Body Outer Chassis */}
        <div
          className="w-full h-full rounded-[24px] relative overflow-hidden p-3 border-2 border-[#d0e0f5] shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, #e8f0fe 0%, #b8cbe0 25%, #8ba3c2 55%, #567296 85%, #3c5478 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -3px 6px rgba(0,0,0,0.5), 0 16px 36px rgba(0,0,0,0.75)',
          }}
        >
          {/* Brushed Aluminum Texture Lines */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)',
            }}
          />

          {/* Glossy Specular Light Bevel Reflection across upper body */}
          <div
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[22px]"
          />

          {/* Cyber Blue Grip Accent Panel on Left */}
          <div className="absolute left-3 top-3 bottom-3 w-6 rounded-xl bg-gradient-to-b from-[#1a4494] via-[#0b245c] to-[#061536] border border-[#4dd8ff]/40 shadow-inner flex flex-col items-center justify-between py-2 overflow-hidden">
            {/* Grip Ridges */}
            <div className="space-y-1 w-full px-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1 bg-[#4dd8ff]/30 rounded-full border-t border-white/20 border-b border-black/60" />
              ))}
            </div>
            {/* Mini SD card symbol */}
            <div className="font-pixel text-[6px] text-[#4dd8ff] tracking-tighter uppercase -rotate-90 origin-center my-2 whitespace-nowrap opacity-80">
              SD 512MB
            </div>
          </div>

          {/* Main Front Layout */}
          <div className="relative w-full h-full pl-7 flex flex-col justify-between">
            {/* Top Row: Flash Module, Viewfinder, Red Self-Timer LED & Brand */}
            <div className="flex items-center justify-between pr-2">
              <div className="flex items-center gap-2">
                {/* Xenon Flash Window */}
                <div
                  className="w-10 h-5 rounded bg-gradient-to-b from-[#fffae0] to-[#d9d09c] border border-white/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] relative overflow-hidden flex items-center justify-center"
                  title="Xenon Flash Unit"
                >
                  {/* Fresnel Ridges */}
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 3px)',
                    }}
                  />
                  {/* Flash Bulb Core */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fff] shadow-[0_0_8px_#ffd700] border border-[#d4af37]" />
                </div>

                {/* Optical Viewfinder Window */}
                <div className="w-4 h-3 rounded-sm bg-gradient-to-br from-[#103060] to-[#041026] border border-[#7a9bb8] shadow-inner flex items-center justify-center">
                  <div className="w-2 h-1.5 bg-[#4dd8ff]/40 rounded-[1px]" />
                </div>

                {/* Self-timer / REC Red LED */}
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#ff2244] shadow-[0_0_8px_#ff2244] animate-ping" />
                  <span className="font-pixel text-[6px] text-[#ffd700] tracking-wider uppercase">REC</span>
                </div>
              </div>

              {/* Digicam Brand / Hacker Diaries Signature */}
              <div className="text-right">
                <div className="font-pixel text-[8px] font-black text-[#0c1a38] tracking-wider drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                  CYBER-SHOT
                </div>
                <div className="font-pixel text-[6px] text-[#1e429f] font-bold tracking-tighter">
                  HACKER DIARIES
                </div>
              </div>
            </div>

            {/* Middle Section: Prominent Telescoping Optical Zoom Lens */}
            <div className="flex items-center justify-between mt-0.5">
              {/* Left Details / Megapixels Badge */}
              <div className="flex flex-col gap-1.5">
                {/* 7.2 Mega Pixels Badge */}
                <div className="px-1.5 py-0.5 rounded bg-gradient-to-r from-[#ffd700] via-[#ffb800] to-[#e68a00] border border-white text-[#1a0f00] font-pixel text-[7px] font-bold shadow flex items-center gap-0.5">
                  <Sparkles className="w-2 h-2 text-[#4a2600]" />
                  <span>7.2 MP</span>
                </div>

                {/* Live LCD Viewfinder Preview Badge */}
                <div className="bg-[#06142e]/90 border border-[#4dd8ff]/60 rounded px-1.5 py-1 text-[7px] font-mono shadow-[0_0_8px_rgba(77,216,255,0.2)]">
                  <div className="text-[#4dd8ff] flex items-center justify-between gap-1 leading-none">
                    <span>MODE:</span>
                    <span className="text-[#4dd8ff] font-bold">{filterMode}</span>
                  </div>
                  <div className="text-[#8fa8db] flex items-center justify-between gap-1 mt-0.5 leading-none">
                    <span>PIC:</span>
                    <span className="text-[#ffd700]">#{photoCount}</span>
                  </div>
                </div>
              </div>

              {/* Giant Telescoping Optical Lens */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Outer Silver Lens Barrel Ring with 3D drop shadow */}
                <div
                  className="w-full h-full rounded-full border-2 border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.65)] flex items-center justify-center relative p-1"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, #e2eaf5 0%, #9db5cf 50%, #466082 100%)',
                  }}
                >
                  {/* Outer Lens Spec Rim */}
                  <div className="w-full h-full rounded-full border border-[#2b3e58] flex items-center justify-center p-1 bg-[#152338]">
                    {/* Stepped Anodized Inner Barrel Ring */}
                    <div
                      className="w-full h-full rounded-full border-2 border-[#7a9bb8] flex items-center justify-center relative p-1.5"
                      style={{
                        background: 'radial-gradient(circle, #203550 0%, #0d1726 100%)',
                      }}
                    >
                      {/* Holographic Iridescent Coated Optical Glass */}
                      <div
                        className="w-full h-full rounded-full relative overflow-hidden border border-cyan-400/50 flex items-center justify-center shadow-inner"
                        style={{
                          background: 'radial-gradient(circle at 35% 35%, #1a3c75 0%, #081a3d 45%, #030a1c 85%)',
                        }}
                      >
                        {/* Multi-Coated Optical Glass Anti-Reflective Glare */}
                        <div
                          className="absolute inset-0 rounded-full mix-blend-screen opacity-75 pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 35% 35%, rgba(77, 216, 255, 0.5) 0%, rgba(31, 78, 216, 0.3) 50%, rgba(7, 14, 44, 0.8) 100%)',
                          }}
                        />

                        {/* Aperture Blades Core */}
                        <div className="w-8 h-8 rounded-full bg-[#030611] border border-white/30 flex items-center justify-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)]">
                          <Aperture className="w-5 h-5 text-[#4dd8ff] opacity-80 animate-spin" style={{ animationDuration: '24s' }} />
                        </div>

                        {/* Diagonal Specular Lens Flare Reflection Streak */}
                        <div
                          className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%, rgba(77,216,255,0.5) 70%, rgba(255,255,255,0) 100%)',
                          }}
                        />

                        {/* Sparkle Glint on Glass */}
                        <div className="absolute top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Lens Text Printed Label */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#08152e]/90 px-1.5 py-0.5 rounded border border-[#4dd8ff]/40 font-mono text-[6px] text-[#4dd8ff] font-bold">
                  OPTICAL 3X • 5.8-17.4mm
                </div>
              </div>
            </div>

            {/* Bottom Row: Beveled Shutter/Power status */}
            <div className="flex items-center justify-between pr-2 text-[7px] font-mono text-[#1a2f52] font-bold">
              <span className="flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-[#ffb800]" /> ISO 400 AUTO
              </span>
              <span className="text-[#0055ea] font-pixel text-[6px]">
                LIVE FEED // RAW
              </span>
            </div>
          </div>

          {/* Top Edge Hardware Chrome Buttons & Knurled Dials */}
          {/* Top Shutter Button */}
          <div
            className="absolute -top-2 left-12 w-8 h-3 rounded-t-md bg-gradient-to-b from-[#ffffff] via-[#d0dbe8] to-[#829bb8] border-t border-x border-white shadow-md flex items-center justify-center cursor-pointer active:translate-y-0.5"
            title="Shutter Release Button"
          >
            <div className="w-5 h-1 bg-[#a3b8cf] rounded-full border-t border-black/30" />
          </div>

          {/* Top Mode Dial */}
          <div
            className="absolute -top-1.5 right-10 w-6 h-2.5 rounded-t-sm bg-gradient-to-r from-[#596d85] via-[#a3b8d0] to-[#3a4c61] border-t border-x border-[#cbd8e8] shadow"
            title="Mode Selector Dial"
          />

          {/* Wrist Strap Loop on Right Edge */}
          <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-2 h-5 rounded-r-md bg-[#506885] border-t border-r border-b border-[#9eb4cc] flex items-center justify-center">
            {/* Lanyard Cord */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-[#ffd700] to-[#0055ea] rounded-full shadow translate-x-1 rotate-12" />
          </div>

          {/* Instant Xenon Flash Burst Effect Overlay */}
          {isFlashing && (
            <div className="absolute inset-0 bg-white rounded-[22px] pointer-events-none z-30 transition-opacity duration-200 animate-ping opacity-95" />
          )}
        </div>

        {/* Floating Interactive Badge below */}
        {interactive && (
          <div className="absolute -bottom-3 -left-2 bg-gradient-to-r from-[#0055ea] to-[#4dd8ff] text-white text-[9px] font-pixel px-2 py-1 rounded border border-[#fff] shadow-lg flex items-center gap-1 animate-bounce">
            <Camera className="w-3 h-3 text-[#ffd700]" />
            <span>{showSnapAlert ? 'SNAPSHOT SAVED!' : 'CLICK TO SNAP'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
