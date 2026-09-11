import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Radio, Music, Sparkles, Folder, Terminal, Calendar, HelpCircle, UserPlus, ExternalLink } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface TaskbarProps {
  onOpenRegister: () => void;
  onOpenSponsor: () => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({ onOpenRegister, onOpenSponsor }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // IST time display
      const timeStr = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleSound = () => {
    const muted = retroAudio.toggleMute();
    setIsMuted(muted);
    if (muted) setIsMusicPlaying(false);
  };

  const handleToggleMusic = () => {
    retroAudio.playClick();
    retroAudio.toggleBgm((playing) => {
      setIsMusicPlaying(playing);
      if (playing) setIsMuted(false);
    });
  };

  const scrollTo = (id: string) => {
    retroAudio.playClick();
    setIsStartOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Start Menu Dropdown */}
      {isStartOpen && (
        <div 
          className="fixed bottom-10 left-1 z-50 w-72 bg-[#ece9d8] text-[#111111] rounded-t-md shadow-[0_15px_40px_rgba(0,0,0,0.85)] border-2 border-[#0055ea] overflow-hidden font-sans select-none animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          {/* Start Menu Header */}
          <div className="xp-titlebar px-3 py-2 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffd700] to-[#ff9900] border-2 border-white flex items-center justify-center font-bold text-black text-sm shadow">
              HD
            </div>
            <div>
              <div className="text-white font-bold text-xs">HACKER DIARIES 2026</div>
              <div className="text-[#ffd700] text-[10px] font-pixel">DELHI NCR // U-18</div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2 divide-y divide-[#d5d2c2] text-xs">
            <div className="py-1 space-y-1">
              <button
                type="button"
                onClick={() => scrollTo('hero')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#0055ea]" />
                <span className="font-semibold">01. Main Console (Hero)</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <Folder className="w-4 h-4 text-[#e6a100]" />
                <span className="font-semibold">02. About Hackathon</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('tracks')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#7928ca]" />
                <span className="font-semibold">03. Tracks & Themes</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('schedule')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#008080]" />
                <span className="font-semibold">04. Timeline & Schedule</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('sponsors')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-[#0055ea]" />
                <span className="font-semibold">05. Partners & Sponsors</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('faq')}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2f71eb] hover:text-white flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-[#d93829]" />
                <span className="font-semibold">06. System FAQ</span>
              </button>
            </div>

            <div className="pt-2 space-y-1">
              <button
                type="button"
                onClick={() => {
                  setIsStartOpen(false);
                  onOpenRegister();
                }}
                className="w-full text-left px-2 py-1.5 rounded bg-[#0055ea] text-white font-bold flex items-center gap-2 hover:bg-[#1a68ff]"
              >
                <UserPlus className="w-4 h-4 text-[#ffd700]" />
                <span>Claim Hacker Pass (Free)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsStartOpen(false);
                  onOpenSponsor();
                }}
                className="w-full text-left px-2 py-1.5 rounded hover:bg-[#dedac7] text-[#111] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#ff9900]" />
                <span>Become a Sponsor / Partner</span>
              </button>
            </div>
          </div>

          <div className="bg-[#e0ded0] px-3 py-1 text-[10px] text-[#555] flex justify-between border-t border-[#d0cec0]">
            <span>Windows XP Luna Skin</span>
            <span>15 NOV 2026</span>
          </div>
        </div>
      )}

      {/* Persistent Bottom Windows XP Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-9 bg-gradient-to-b from-[#245edb] via-[#1941a5] to-[#122e7b] border-t-2 border-[#4387f5] shadow-[0_-2px_10px_rgba(0,0,0,0.5)] flex items-center justify-between px-1 select-none font-sans text-xs">
        {/* Left: Classic Green XP "Start" Button */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              setIsStartOpen(!isStartOpen);
            }}
            className="h-7 px-3 rounded-r-xl rounded-l-xs bg-gradient-to-b from-[#388e3c] via-[#2e7d32] to-[#1b5e20] hover:brightness-110 active:brightness-90 text-white font-black italic tracking-wide flex items-center gap-1.5 border-t border-l border-[#81c784] border-b border-r border-[#0d3311] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] cursor-pointer"
          >
            {/* Windows 4-color flag */}
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 rotate-12 drop-shadow">
              <div className="bg-[#ff4b4b] rounded-xs" />
              <div className="bg-[#4bb5ff] rounded-xs" />
              <div className="bg-[#4bff7b] rounded-xs" />
              <div className="bg-[#ffdb4b] rounded-xs" />
            </div>
            <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-sm not-italic font-sans font-bold">
              start
            </span>
          </button>

          {/* Active Window Task Chips */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto max-w-xl">
            <button
              type="button"
              onClick={() => scrollTo('hero')}
              className="h-6 px-2.5 rounded-[2px] bg-gradient-to-b from-[#1b43a9] to-[#2b64dd] text-white text-[11px] flex items-center gap-1.5 border-t border-l border-[#13307e] border-b border-r border-[#6aa1ff] shadow-inner"
            >
              <Terminal className="w-3 h-3 text-[#ffd700]" />
              <span className="truncate max-w-[130px]">Hacker Diaries — Hero</span>
            </button>
            <button
              type="button"
              onClick={handleToggleMusic}
              className={`h-6 px-2 rounded-[2px] text-[11px] flex items-center gap-1.5 border ${
                isMusicPlaying
                  ? 'bg-[#ffd700] text-black border-[#6b4000] font-bold animate-pulse'
                  : 'bg-[#153482] text-[#c5d8ff] border-[#294fb3]'
              }`}
            >
              <Music className="w-3 h-3" />
              <span className="truncate max-w-[130px]">
                {isMusicPlaying ? 'Now Playing: Track 01' : 'Winamp 2.91'}
              </span>
            </button>
          </div>
        </div>

        {/* Right: Windows Notification System Tray */}
        <div className="h-7 px-2.5 bg-gradient-to-b from-[#0e5bc5] to-[#163f96] rounded-[2px] border-t border-l border-[#093570] border-b border-r border-[#3f8ef7] flex items-center gap-3 shadow-inner text-[11px] text-white font-mono">
          {/* Audio BGM Synth Toggle */}
          <button
            type="button"
            onClick={handleToggleMusic}
            title={isMusicPlaying ? "Stop 2000s Chiptune" : "Play 2000s Chiptune"}
            className="flex items-center gap-1 hover:text-[#ffd700] cursor-pointer"
          >
            <Radio className={`w-3.5 h-3.5 ${isMusicPlaying ? 'text-[#00ff66] animate-pulse' : 'text-[#8fa8db]'}`} />
            <span className="hidden sm:inline text-[10px]">
              {isMusicPlaying ? 'MIDI: ON' : 'MIDI'}
            </span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
            className="hover:text-[#ffd700] cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#ff4b4b]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#4dd8ff]" />
            )}
          </button>

          {/* Live Delhi NCR Clock */}
          <div className="border-l border-[#093570] pl-2.5 text-[#f5f0dc] font-bold text-[10px] sm:text-[11px] whitespace-nowrap">
            {currentTime || '15:11:2026'}
          </div>
        </div>
      </div>
    </>
  );
};
