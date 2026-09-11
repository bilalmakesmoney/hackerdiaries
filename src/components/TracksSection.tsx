import React from 'react';
import { Bot, Cpu, Globe, Gamepad2, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface Track {
  id: string;
  code: string;
  title: string;
  y2kNickname: string;
  description: string;
  ideas: string[];
  bounty: string;
  icon: React.ReactNode;
  headerColor: string;
  badgeBg: string;
}

const tracks: Track[] = [
  {
    id: 'ai-agents',
    code: 'TRACK_01.EXE',
    title: 'AI & Autonomous Agents',
    y2kNickname: '"Neural Nets on Dial-up"',
    description: 'Build agentic systems, localized LLM workflows, teen productivity co-pilots, and assistive AI tools that run fast without cloud bloat.',
    ideas: ['Offline school co-pilots', 'Voice agents for seniors', 'Vision model hardware hack'],
    bounty: '₹40,000 Bounty',
    icon: <Bot className="w-5 h-5 text-[#ffd700]" />,
    headerColor: 'from-[#0055ea] to-[#3d88fc]',
    badgeBg: 'bg-[#ffd700] text-[#0a1a4a]',
  },
  {
    id: 'p2p-web3',
    code: 'TRACK_02.EXE',
    title: 'P2P & Decentralized Web',
    y2kNickname: '"Limewire Protocol Revamped"',
    description: 'Reclaim the open, decentralized internet. Create mesh networks, privacy-preserving file distribution, decentralized identity, and censorship-resistant protocols.',
    ideas: ['Local mesh messaging', 'Encrypted P2P backups', 'Smart contract automation'],
    bounty: '₹40,000 Bounty',
    icon: <Globe className="w-5 h-5 text-[#4dd8ff]" />,
    headerColor: 'from-[#006699] to-[#00a2e8]',
    badgeBg: 'bg-[#4dd8ff] text-[#071330]',
  },
  {
    id: 'hardware-silicon',
    code: 'TRACK_03.EXE',
    title: 'Hardware & Silicon Hack',
    y2kNickname: '"Soldering & Microcontrollers"',
    description: 'Hands dirty with ESP32s, Raspberry Pis, Arduinos, robotics, wearables, sensor rigs, and cyber-gadgets built from scratch.',
    ideas: ['Wearable EEG tracker', 'Gesture-controlled synth', 'Smart eco drone rig'],
    bounty: '₹40,000 Bounty',
    icon: <Cpu className="w-5 h-5 text-[#00ff66]" />,
    headerColor: 'from-[#107c41] to-[#2ecc71]',
    badgeBg: 'bg-[#00ff66] text-[#072410]',
  },
  {
    id: 'creative-gaming',
    code: 'TRACK_04.EXE',
    title: 'Creative Media & Retro Games',
    y2kNickname: '"Flash & Arcade Renaissance"',
    description: 'Revive the glory days of browser gaming, Flash animations, interactive storytelling, generative art, and quirky multiplayer netplay games.',
    ideas: ['WebAssembly arcade game', 'Generative MIDI synth', 'Cyberpunk text-adventure'],
    bounty: '₹30,000 Bounty',
    icon: <Gamepad2 className="w-5 h-5 text-[#ff80df]" />,
    headerColor: 'from-[#881798] to-[#d946ef]',
    badgeBg: 'bg-[#ff80df] text-[#330026]',
  },
];

export const TracksSection: React.FC<{ onSelectTrack: (track: string) => void }> = ({ onSelectTrack }) => {
  return (
    <section id="tracks" className="py-14 sm:py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase mb-1.5">
          // INITIATIVE MATRICES & FOCUS TRACKS
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#ffc83b] font-black tracking-tight gold-glow">
          CHOOSE YOUR MISSION
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#adc2ea] font-sans max-w-xl mx-auto">
          Four distinct categories crafted for under-18 builders. Pick one track or cross-pollinate between hardware and software.
        </p>
      </div>

      {/* Grid of 4 Cards Styled as Small Desktop Windows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="group rounded-t-lg rounded-b shadow-xl border-2 border-[#1e3a8a] hover:border-[#ffb800] bg-[#09173d] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
            onMouseEnter={() => retroAudio.playClick()}
          >
            {/* Top Mini Window Bar */}
            <div className={`px-3 py-1.5 bg-gradient-to-r ${track.headerColor} flex items-center justify-between border-b border-black/30 select-none`}>
              <div className="flex items-center gap-2">
                <span className="p-0.5 rounded bg-black/30">{track.icon}</span>
                <span className="font-pixel text-[10px] sm:text-[11px] text-white tracking-wider font-bold">
                  {track.code}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 bg-white/20 rounded-xs flex items-center justify-center text-[9px] text-white font-mono">_</span>
                <span className="w-3.5 h-3.5 bg-white/20 rounded-xs flex items-center justify-center text-[8px] text-white font-mono">□</span>
                <span className="w-3.5 h-3.5 bg-[#d93829] rounded-xs flex items-center justify-center text-[8px] text-white font-mono font-bold">✕</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Blocky pixel-blob header styling */}
                <div className="inline-block mb-2">
                  <span className={`font-pixel text-[9px] sm:text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider shadow-sm ${track.badgeBg}`}>
                    {track.y2kNickname}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-[#f5f0dc] font-black group-hover:text-[#ffd700] transition-colors leading-tight">
                  {track.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#adc2ea] leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* Sample Spark Ideas / Sub-tags */}
              <div className="space-y-2 pt-2 border-t border-[#13285c]">
                <div className="text-[10px] font-pixel text-[#8fa8db] uppercase tracking-wider">
                  SAMPLE PROMPTS:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {track.ideas.map((idea, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#071330] border border-[#1b3a8a] text-[11px] font-mono text-[#c5d8ff]"
                    >
                      • {idea}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Inset Bar */}
              <div className="pt-3 border-t border-[#13285c] flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-pixel text-xs text-[#00ff66]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{track.bounty}</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    retroAudio.playClick();
                    onSelectTrack(track.title);
                  }}
                  className="px-3 py-1 bg-[#122e70] hover:bg-[#1a44a6] text-[#ffd700] hover:text-white rounded border border-[#2b5fd9] font-pixel text-[10px] tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>SELECT TRACK</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
