import React from 'react';
import { Sparkles, Save, Heart, Star } from 'lucide-react';

export const Y2KDolphin: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 110,
}) => (
  <div 
    className={`inline-block select-none filter drop-shadow-[0_8px_16px_rgba(0,180,255,0.45)] transition-transform hover:scale-110 duration-200 ${className}`}
    style={{ width: size, height: size * 0.7 }}
    title="2003 Cyber Dolphin Sticker"
  >
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Glossy Plastic Gradient */}
        <linearGradient id="dolphinBody" x1="20" y1="10" x2="140" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8f5ff" />
          <stop offset="25%" stopColor="#4dd8ff" />
          <stop offset="65%" stopColor="#0080ff" />
          <stop offset="100%" stopColor="#0a2a7a" />
        </linearGradient>
        <linearGradient id="dolphinBelly" x1="30" y1="40" x2="130" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e0f4ff" />
          <stop offset="100%" stopColor="#8ccfff" />
        </linearGradient>
        <linearGradient id="glossyShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tail fin */}
      <path
        d="M18 35 C8 20, 2 30, 0 45 C10 42, 18 48, 22 55 C22 45, 20 38, 18 35 Z"
        fill="url(#dolphinBody)"
        stroke="#06225e"
        strokeWidth="1.5"
      />
      <path
        d="M16 65 C8 78, 2 70, 0 58 C10 60, 18 55, 22 50 C20 58, 18 62, 16 65 Z"
        fill="url(#dolphinBody)"
        stroke="#06225e"
        strokeWidth="1.5"
      />

      {/* Main Body */}
      <path
        d="M20 52 C35 45, 65 20, 105 22 C135 24, 155 42, 158 54 C158 58, 152 61, 142 60 C128 58, 115 62, 102 75 C85 88, 55 90, 35 75 C25 67, 22 58, 20 52 Z"
        fill="url(#dolphinBody)"
        stroke="#06225e"
        strokeWidth="1.8"
      />

      {/* Belly highlight */}
      <path
        d="M40 70 C60 84, 85 82, 105 70 C120 62, 136 57, 145 58 C135 64, 120 72, 100 78 C70 86, 48 80, 40 70 Z"
        fill="url(#dolphinBelly)"
        opacity="0.9"
      />

      {/* Dorsal Fin */}
      <path
        d="M75 25 C82 5, 96 2, 102 12 C98 18, 94 22, 92 24 Z"
        fill="url(#dolphinBody)"
        stroke="#06225e"
        strokeWidth="1.5"
      />

      {/* Pectoral Fin */}
      <path
        d="M78 62 C88 78, 102 88, 106 82 C104 74, 98 66, 88 60 Z"
        fill="url(#dolphinBody)"
        stroke="#06225e"
        strokeWidth="1.5"
      />

      {/* Specular Highlight Streak across back */}
      <path
        d="M50 36 C75 26, 110 27, 130 38 C115 32, 80 30, 50 36 Z"
        fill="url(#glossyShine)"
      />

      {/* Eye with cute glossy sparkle */}
      <circle cx="138" cy="46" r="3.5" fill="#061a40" />
      <circle cx="137" cy="45" r="1.2" fill="#ffffff" />

      {/* Cyber Sparkles around the dolphin */}
      <circle cx="152" cy="24" r="2.5" fill="#ffd700" />
      <path d="M152 18 L152 30 M146 24 L158 24" stroke="#ffd700" strokeWidth="1.2" />
      <circle cx="12" cy="18" r="2" fill="#4dd8ff" />
      <circle cx="68" cy="10" r="1.5" fill="#ffffff" />
    </svg>
  </div>
);

export const StarPerson: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 90,
}) => (
  <div
    className={`inline-block select-none filter drop-shadow-[0_6px_14px_rgba(255,184,0,0.5)] transition-transform hover:rotate-6 duration-200 ${className}`}
    style={{ width: size, height: size }}
    title="Early 2000s Star Mascot"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="starGold" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff7a8" />
          <stop offset="35%" stopColor="#ffc720" />
          <stop offset="85%" stopColor="#e68a00" />
          <stop offset="100%" stopColor="#8a4800" />
        </linearGradient>
      </defs>

      {/* Star Shape */}
      <polygon
        points="50,5 63,35 95,38 71,60 78,92 50,75 22,92 29,60 5,38 37,35"
        fill="url(#starGold)"
        stroke="#4a2500"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* 3D Bevel highlight */}
      <polygon
        points="50,12 59,36 84,39 65,56 71,81 50,68"
        fill="#ffffff"
        opacity="0.3"
      />

      {/* Cute retro expressive face */}
      {/* Eyes */}
      <ellipse cx="40" cy="46" rx="4" ry="5.5" fill="#201000" />
      <ellipse cx="60" cy="46" rx="4" ry="5.5" fill="#201000" />
      <circle cx="39" cy="44" r="1.5" fill="#ffffff" />
      <circle cx="59" cy="44" r="1.5" fill="#ffffff" />

      {/* Cheeks */}
      <ellipse cx="33" cy="53" rx="3.5" ry="2" fill="#ff4d4d" opacity="0.6" />
      <ellipse cx="67" cy="53" rx="3.5" ry="2" fill="#ff4d4d" opacity="0.6" />

      {/* Big Smile */}
      <path
        d="M42 54 Q50 63 58 54"
        stroke="#201000"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Thumbs up badge hand */}
      <path
        d="M72 65 C80 62, 86 67, 85 73 C84 78, 77 79, 72 75 Z"
        fill="url(#starGold)"
        stroke="#4a2500"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

export const RetroBadge: React.FC<{ text?: string; subtext?: string; className?: string }> = ({
  text = 'UNDER 18 ONLY',
  subtext = 'VERIFIED BUILDERS',
  className = '',
}) => (
  <div
    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded bg-gradient-to-b from-[#1e3a8a] to-[#0a1638] border-2 border-[#ffb800] shadow-[0_0_12px_rgba(255,184,0,0.4)] ${className}`}
  >
    <div className="w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66] animate-pulse" />
    <div className="text-left">
      <div className="font-pixel text-[10px] text-[#ffb800] leading-none tracking-wider">{text}</div>
      <div className="font-pixel text-[8px] text-[#4dd8ff] tracking-widest uppercase mt-0.5">{subtext}</div>
    </div>
  </div>
);
