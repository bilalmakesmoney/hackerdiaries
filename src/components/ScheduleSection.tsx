import React, { useState } from 'react';
import { Calendar, Clock, Coffee, Laptop, Award, Users, Sparkles, Filter, Code2, Terminal, MapPin, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface ScheduleItem {
  id: string;
  time: string;
  phase: string;
  title: string;
  category: 'All' | 'Hack' | 'Fuel' | 'Mentorship' | 'Demo' | 'Awards';
  categoryLabel: string;
  description: string;
  location: string;
  highlight?: boolean;
}

const scheduleData: ScheduleItem[] = [
  {
    id: 's1',
    time: '08:30 AM',
    phase: 'PHASE 01',
    title: 'Check-In & Swag Bag Distribution',
    category: 'Fuel',
    categoryLabel: 'REGISTRATION',
    description: 'Doors open at Delhi NCR venue. Pick up your physical Hacker Access badge, holographic CD-R mixtape swag bag, and breakfast fuel.',
    location: 'Main Terminal Hall',
  },
  {
    id: 's2',
    time: '09:30 AM',
    phase: 'PHASE 01',
    title: 'Opening Ceremony & Track Briefing',
    category: 'Mentorship',
    categoryLabel: 'KEYNOTE',
    description: 'Welcome keynote from teen organizers, track guidelines (Web Dev & Game Dev), scoring rubric, and sponsor bounties reveal.',
    location: 'Auditorium Alpha',
  },
  {
    id: 's3',
    time: '10:00 AM',
    phase: 'PHASE 02',
    title: 'Hacking Commences: 12-Hour Sprint Timer Starts',
    category: 'Hack',
    categoryLabel: 'SPRINT LAUNCH',
    description: 'The 12-hour timer begins! Git repositories initialized, gigabit Wi-Fi network unlocked, and mentor desk open.',
    location: 'Hacking Arena Alpha',
    highlight: true,
  },
  {
    id: 's4',
    time: '10:30 AM',
    phase: 'PHASE 02',
    title: 'Team Matching & Rapid Idea Circle',
    category: 'Hack',
    categoryLabel: 'TEAM FORMATION',
    description: 'Solo builders connect with frontend coders, game designers, and UI tinkerers in fast team-matching pods.',
    location: 'Networking Pod B',
  },
  {
    id: 's5',
    time: '01:00 PM',
    phase: 'PHASE 02',
    title: 'Lunch Buffet & Unlimited Fuel Refill',
    category: 'Fuel',
    categoryLabel: 'MEALS & ENERGY',
    description: 'Hot lunch served for all participants. Unlimited cold brew, energy drinks, and snacks at the hydration counter.',
    location: 'Cafeteria & Lounge',
  },
  {
    id: 's6',
    time: '03:30 PM',
    phase: 'PHASE 02',
    title: 'Mentor Round & Architecture Review',
    category: 'Mentorship',
    categoryLabel: 'CODE REVIEWS',
    description: '1-on-1 feedback sessions with senior engineers and game developers to troubleshoot blockers and refine features.',
    location: 'Hacker Tables',
  },
  {
    id: 's7',
    time: '05:30 PM',
    phase: 'PHASE 03',
    title: 'Arcade Mini-Jam & Quick Snack Refill',
    category: 'Fuel',
    categoryLabel: 'COMMUNITY JAM',
    description: '15-minute mental break with snacks, retro arcade multiplayer showdowns, and audio demos.',
    location: 'Lounge Stage',
  },
  {
    id: 's8',
    time: '07:00 PM',
    phase: 'PHASE 03',
    title: 'CODE FREEZE & Final Git Push',
    category: 'Hack',
    categoryLabel: 'DEADLINE',
    description: 'Hands off keyboards! Final commits pushed and live deployed URLs submitted to the Hacker Diaries portal.',
    location: 'Main Arena',
    highlight: true,
  },
  {
    id: 's9',
    time: '07:30 PM',
    phase: 'PHASE 03',
    title: 'Live Project Expo & Playtesting Arena',
    category: 'Demo',
    categoryLabel: 'EXPO & DEMOS',
    description: 'Science-fair style interactive demos. Play fellow teams’ games and test web applications with roaming judges.',
    location: 'Expo Floor',
  },
  {
    id: 's10',
    time: '08:30 PM',
    phase: 'PHASE 03',
    title: 'Grand Finale & Award Ceremony',
    category: 'Awards',
    categoryLabel: 'AWARDS & TROPHIES',
    description: 'Track winners crowned, exclusive winner trophies & prizes awarded, special sponsor categories announced, and group photo!',
    location: 'Main Auditorium',
    highlight: true,
  },
];

export const ScheduleSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredSchedule = activeFilter === 'All'
    ? scheduleData
    : scheduleData.filter((item) => item.category === activeFilter);

  return (
    <section id="schedule" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // CHRONOLOGY • 15 NOV 2026 • DELHI NCR
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          12-HOUR <span className="gold-text-stroke text-[#ffc83b]">TIMELINE</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-2xl mx-auto leading-relaxed">
          From morning repo initialization to evening live judging — 12 concentrated hours of building, shipping, and celebrating teen engineering.
        </p>
      </div>

      {/* Main Terminal Shell Card */}
      <div className="rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.8)] border-2 border-[#1e4499] bg-gradient-to-b from-[#0e245a]/95 via-[#08173d]/95 to-[#040e26]/95 overflow-hidden">
        {/* Windows XP Classic Title Bar */}
        <div className="xp-titlebar px-4 py-2 flex items-center justify-between border-b border-[#04338c] select-none shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded bg-[#071330]/80 border border-[#4dd8ff]/30 shadow-inner">
              <Clock className="w-4 h-4 text-[#ffd700]" />
            </span>
            <span className="font-pixel text-xs sm:text-sm text-white tracking-wider font-bold drop-shadow">
              HACKER_DIARIES_SCHEDULE.EXE
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#ffd700]">
              [15 NOV 2026 // 08:30 - 20:30]
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[10px] text-white font-mono shadow-inner">_</span>
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[9px] text-white font-mono shadow-inner">□</span>
            <span className="w-5 h-4 bg-[#0055ea] border border-white/30 rounded-[2px] flex items-center justify-center text-[9px] text-[#ffd700] font-mono font-bold shadow-inner">✕</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#071330] border-b border-[#1e3a8a] flex flex-wrap items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-2 text-xs font-pixel text-[#8fa8db]">
            <Filter className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>FILTER PROTOCOL:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {[
              { id: 'All', label: 'ALL EVENTS' },
              { id: 'Hack', label: 'CODE SPRINT' },
              { id: 'Fuel', label: 'MEALS & FUEL' },
              { id: 'Mentorship', label: 'MENTORS' },
              { id: 'Demo', label: 'DEMOS' },
              { id: 'Awards', label: 'AWARDS' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  retroAudio.playClick();
                  setActiveFilter(tab.id);
                }}
                className={`px-3 py-1 rounded-md text-[11px] font-pixel transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0055ea] text-white border border-[#4dd8ff] shadow-[0_0_8px_rgba(77,216,255,0.3)] font-bold'
                    : 'bg-[#0b1d47] text-[#8fa8db] border border-[#1e3a8a] hover:text-[#f5f0dc] hover:border-[#4dd8ff]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content Area */}
        <div className="p-4 sm:p-8 space-y-4 relative">
          {/* Vertical Timeline Track Line */}
          <div className="absolute top-8 bottom-8 left-8 sm:left-36 w-0.5 bg-gradient-to-b from-[#ffd700] via-[#4dd8ff] to-[#ffd700] opacity-30 hidden sm:block pointer-events-none" />

          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-xl border transition-all duration-200 group ${
                item.highlight
                  ? 'bg-gradient-to-r from-[#0d235e]/90 to-[#08173d]/90 border-[#ffd700]/70 shadow-[0_4px_20px_rgba(255,215,0,0.12)]'
                  : 'bg-[#071330]/80 hover:bg-[#0b1e4a]/90 border-[#1e3a8a] hover:border-[#4dd8ff]/60'
              }`}
            >
              {/* Left Column: Time & Phase badge */}
              <div className="sm:w-28 flex-shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 font-mono">
                <div className="font-pixel text-xs sm:text-sm text-[#ffd700] font-bold tracking-wider">
                  {item.time}
                </div>
                <div className="text-[9px] text-[#4dd8ff] font-pixel tracking-widest uppercase">
                  {item.phase}
                </div>
              </div>

              {/* Timeline Center Node (Desktop) */}
              <div className="hidden sm:flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-[#071330] border-2 border-[#4dd8ff] shadow-[0_0_8px_rgba(77,216,255,0.4)] group-hover:scale-110 group-hover:border-[#ffd700] transition-all">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]" />
              </div>

              {/* Event Details (Right Column) */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base sm:text-lg text-[#f5f0dc] font-black group-hover:text-[#ffd700] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-pixel uppercase tracking-wider bg-[#0b1d47] border border-[#1e3a8a] text-[#4dd8ff]">
                    {item.categoryLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-[#8fa8db]">
                  <MapPin className="w-3.5 h-3.5 text-[#4dd8ff]" />
                  <span>LOCATION:</span>
                  <span className="text-[#c5d8ff] font-bold">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Status Strip */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#071330] border-t border-[#1e3a8a] text-xs font-mono text-[#8fa8db] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4dd8ff]" />
            <span>TIMELINE SYNCHRONIZED // VENUE OPENS AT 08:30 AM IST</span>
          </div>
          <div className="font-pixel text-[10px] text-[#ffd700]">
            12 HOURS TOTAL RUNTIME
          </div>
        </div>
      </div>
    </section>
  );
};
