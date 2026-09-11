import React from 'react';

interface RetroDigicamProps {
  className?: string;
}

export const RetroDigicam: React.FC<RetroDigicamProps> = ({ className = '' }) => {
  return (
    <div className={`select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 200 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(77,216,255,0.25)) drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
        }}
      >
        {/* Camera body - chunky silver/blue plastic */}
        <rect x="10" y="30" width="180" height="90" rx="10" ry="10"
          fill="url(#cameraBodyGrad)"
          stroke="#7ba3cc"
          strokeWidth="1.5"
        />

        {/* Body highlight strip */}
        <rect x="12" y="32" width="176" height="20" rx="8"
          fill="url(#bodyHighlight)"
          opacity="0.5"
        />

        {/* Grip texture area - right side */}
        <rect x="148" y="55" width="38" height="55" rx="4"
          fill="#8badd0"
          stroke="#6a90b8"
          strokeWidth="0.8"
        />
        {/* Grip lines */}
        <line x1="153" y1="60" x2="153" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />
        <line x1="158" y1="60" x2="158" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />
        <line x1="163" y1="60" x2="163" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />
        <line x1="168" y1="60" x2="168" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />
        <line x1="173" y1="60" x2="173" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />
        <line x1="178" y1="60" x2="178" y2="105" stroke="#7a9dc4" strokeWidth="0.8" />

        {/* Lens barrel */}
        <circle cx="80" cy="75" r="28"
          fill="url(#lensGrad)"
          stroke="#5a7a9a"
          strokeWidth="2"
        />
        {/* Lens inner ring */}
        <circle cx="80" cy="75" r="22"
          fill="#1a2a4a"
          stroke="#3a5a7a"
          strokeWidth="1.5"
        />
        {/* Lens glass */}
        <circle cx="80" cy="75" r="16"
          fill="url(#lensGlassGrad)"
        />
        {/* Lens reflection */}
        <ellipse cx="74" cy="70" rx="6" ry="4"
          fill="white"
          opacity="0.35"
          transform="rotate(-20 74 70)"
        />
        <ellipse cx="84" cy="78" rx="3" ry="2"
          fill="white"
          opacity="0.2"
          transform="rotate(-20 84 78)"
        />

        {/* Viewfinder */}
        <rect x="30" y="36" width="16" height="10" rx="2"
          fill="#1a2a4a"
          stroke="#4a6a8a"
          strokeWidth="1"
        />
        <rect x="32" y="38" width="12" height="6" rx="1"
          fill="#0a1a3a"
        />

        {/* Flash */}
        <rect x="110" y="36" width="22" height="12" rx="2"
          fill="#e8eff8"
          stroke="#a0b8d0"
          strokeWidth="1"
        />
        <rect x="112" y="38" width="18" height="8" rx="1"
          fill="url(#flashGrad)"
        />

        {/* Shutter button */}
        <circle cx="140" cy="28" r="8"
          fill="url(#shutterGrad)"
          stroke="#8aaaca"
          strokeWidth="1.5"
        />
        <circle cx="140" cy="28" r="5"
          fill="#c8d8e8"
          stroke="#9ab0cc"
          strokeWidth="0.8"
        />

        {/* Power button */}
        <circle cx="26" cy="50" r="4"
          fill="#2a4a6a"
          stroke="#4a6a8a"
          strokeWidth="0.8"
        />
        <circle cx="26" cy="50" r="2"
          fill="#00ff66"
          opacity="0.8"
        />

        {/* LCD screen area */}
        <rect x="108" y="55" width="34" height="26" rx="2"
          fill="#0a1a3a"
          stroke="#3a5a7a"
          strokeWidth="1"
        />
        <rect x="110" y="57" width="30" height="22" rx="1"
          fill="#0d2159"
        />
        {/* LCD text */}
        <text x="115" y="66" fill="#4dd8ff" fontSize="4" fontFamily="monospace" opacity="0.8">
          ISO 100
        </text>
        <text x="115" y="72" fill="#4dd8ff" fontSize="4" fontFamily="monospace" opacity="0.6">
          2.0 MP
        </text>

        {/* Top mode dial */}
        <circle cx="50" cy="28" r="6"
          fill="url(#dialGrad)"
          stroke="#6a8aaa"
          strokeWidth="1"
        />
        <line x1="50" y1="23" x2="50" y2="25" stroke="#4a6a8a" strokeWidth="1" />

        {/* Brand text */}
        <text x="35" y="108" fill="#4a6a8a" fontSize="7" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
          DIGIPIX
        </text>
        <text x="110" y="108" fill="#3a5a7a" fontSize="5" fontFamily="monospace">
          Y2K PRO
        </text>

        {/* Wrist strap ring */}
        <circle cx="185" cy="50" r="4"
          fill="none"
          stroke="#7a9abc"
          strokeWidth="2"
        />

        {/* Subtle iridescent sheen across body */}
        <rect x="10" y="30" width="180" height="90" rx="10"
          fill="url(#iridescentSheen)"
          opacity="0.12"
        />

        <defs>
          <linearGradient id="cameraBodyGrad" x1="10" y1="30" x2="10" y2="120">
            <stop offset="0%" stopColor="#a8c8e8" />
            <stop offset="30%" stopColor="#8badd0" />
            <stop offset="70%" stopColor="#6a90b8" />
            <stop offset="100%" stopColor="#5a7a9a" />
          </linearGradient>

          <linearGradient id="bodyHighlight" x1="12" y1="32" x2="12" y2="52">
            <stop offset="0%" stopColor="#d0e4f8" />
            <stop offset="100%" stopColor="#8badd0" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="lensGrad" cx="0.4" cy="0.4">
            <stop offset="0%" stopColor="#7a9abc" />
            <stop offset="100%" stopColor="#3a5a7a" />
          </radialGradient>

          <radialGradient id="lensGlassGrad" cx="0.35" cy="0.35">
            <stop offset="0%" stopColor="#1a3a6a" />
            <stop offset="50%" stopColor="#0a1a4a" />
            <stop offset="100%" stopColor="#050e2a" />
          </radialGradient>

          <linearGradient id="flashGrad" x1="112" y1="38" x2="112" y2="46">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#c8d8e8" />
          </linearGradient>

          <radialGradient id="shutterGrad" cx="0.4" cy="0.35">
            <stop offset="0%" stopColor="#e8f0f8" />
            <stop offset="100%" stopColor="#8aaaca" />
          </radialGradient>

          <radialGradient id="dialGrad" cx="0.4" cy="0.35">
            <stop offset="0%" stopColor="#9ab0cc" />
            <stop offset="100%" stopColor="#5a7a9a" />
          </radialGradient>

          <linearGradient id="iridescentSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4dd8ff" />
            <stop offset="30%" stopColor="#ff80d5" />
            <stop offset="60%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#00ff88" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
