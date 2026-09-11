import React, { useState } from 'react';
import { WindowFrame } from './WindowFrame';
import { Calendar, Clock, Pizza, Coffee, Laptop, Award, Flag, Users, Sparkles, Filter } from 'lucide-react';
import { ScheduleItem } from '../types';
import { retroAudio } from '../utils/audio';

const scheduleData: ScheduleItem[] = [
  {
    id: 's1',
    time: '08:30 AM',
    title: 'Check-In & MSN Messenger Swag Drop',
    category: 'Food',
    description: 'Doors open at Delhi NCR venue. Pick up your physical Hacker Access badge, retro CD-R mixtape swag bag, and breakfast buffet.',
    location: 'Main Terminal Hall',
  },
  {
    id: 's2',
    time: '10:00 AM',
    title: 'Opening Ceremony & Keynote Protocol',
    category: 'Keynote',
    description: 'Welcome from organizers, rules briefing, API sponsor reveals, and inspiring keynote from a teen founder who scaled to 1M users.',
    location: 'Auditorium Alpha',
  },
  {
    id: 's3',
    time: '10:45 AM',
    title: 'Team Formation & Pitch Circle',
    category: 'Demo',
    description: 'Looking for a teammate? 30-minute speed matching circle to pitch ideas, join a squad, and find designers or hardware tinkerers.',
    location: 'Networking Pod B',
  },
  {
    id: 's4',
    time: '11:30 AM',
    title: 'Hacking Commences: Deploy to Localhost',
    category: 'Hack',
    description: 'The 24-hour timer starts! Hardware checkout desk opens (ESP32s, sensors, Arduinos). High-speed gigabit internet unlocked.',
    location: 'Hacking Arenas 1 & 2',
  },
  {
    id: 's5',
    time: '01:30 PM',
    title: 'Chow Down: Lunch Buffet & Energy Fuel',
    category: 'Food',
    description: 'Hot lunch served. Unlimited Red Bull, cold brew, and juice coolers available at the hydration station.',
    location: 'Cafeteria & Lounge',
  },
  {
    id: 's6',
    time: '03:30 PM',
    title: 'Workshop: Agentic AI & Edge Microcontrollers',
    category: 'Workshop',
    description: '30-minute rapid-fire code along by veteran systems mentors. Build and ship your first offline LLM agent.',
    location: 'Workshop Lab 01',
  },
  {
    id: 's7',
    time: '05:30 PM',
    title: 'Mentor Round 01 & Architecture Check',
    category: 'Workshop',
    description: '1-on-1 feedback sessions with senior engineers. Refine your scope, debug stubborn bottlenecks, and validate viability.',
    location: 'Hacker Tables',
  },
  {
    id: 's8',
    time: '08:30 PM',
    title: 'Dinner & Flash Gaming Chill Break',
    category: 'Food',
    description: 'Dinner feast. 45-minute casual break featuring retro Flash game tournaments and Super Smash Bros setup.',
    location: 'Lounge Stage',
  },
  {
    id: 's9',
    time: '12:00 AM',
    title: 'Midnight Domino’s Pizza Stacks',
    category: 'Food',
    description: 'Over 100 boxes of fresh hot midnight pizza + cheesy garlic bread. Red Bull and cold iced chai refills.',
    location: 'Main Terminal Hall',
  },
  {
    id: 's10',
    time: '03:00 AM',
    title: 'The Graveyard Shift: Cyber Jam & Bug Hunts',
    category: 'Hack',
    description: 'Late-night lofi synth tunes, mentor desk open for emergency bug-fixing. Sleeping zones & beanbag lounges available.',
    location: 'Arena Quiet Zone',
  },
  {
    id: 's11',
    time: '07:30 AM',
    title: 'Sunrise Breakfast & Chai Tapri Station',
    category: 'Food',
    description: 'Fresh hot parathas, toast, fruits, and steaming masala chai to fuel the final sprint.',
    location: 'Cafeteria',
  },
  {
    id: 's12',
    time: '10:00 AM',
    title: 'CODE FREEZE & Commit Hard Push',
    category: 'Hack',
    description: 'Stop typing! Repos locked, live deployment links submitted to the Hacker Diaries portal.',
    location: 'Hacking Arena',
  },
  {
    id: 's13',
    time: '11:00 AM',
    title: 'Project Expo & Science Fair Demos',
    category: 'Demo',
    description: 'Hands-on booth showcase. Walk around and play other teams’ games, test hardware gadgets, and present to roving judges.',
    location: 'Expo Floor',
  },
  {
    id: 's14',
    time: '01:30 PM',
    title: 'Grand Finale & Award Ceremony',
    category: 'Keynote',
    description: 'Track winners announced, ₹1,50,000+ prize cheques handed out, sponsor bounties awarded, and closing group photo!',
    location: 'Main Auditorium',
  },
];

export const ScheduleSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredSchedule = filter === 'All' 
    ? scheduleData 
    : scheduleData.filter((item) => item.category === filter);

  return (
    <section id="schedule" className="py-14 sm:py-20 px-4 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="font-pixel text-[10px] sm:text-xs text-[#ffd700] tracking-widest uppercase mb-1.5">
          // CHRONOLOGY • 15 NOV 2026 • DELHI NCR
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#f5f0dc] font-black tracking-tight">
          HACKATHON SCHEDULE
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#adc2ea] max-w-xl mx-auto font-sans">
          24 straight hours of creative chaos, midnight pizza, hardware soldering, and live demos.
        </p>
      </div>

      {/* Main Window Frame containing the Schedule */}
      <WindowFrame
        title="Hacker Diaries — Schedule.exe [15 Nov 2026]"
        statusBarText="Timeline Synchronized // Delhi NCR Venue Coordinates Locked"
        secondaryStatus="TOTAL EVENTS: 14"
        icon="drive"
        windowId="schedule-window"
      >
        {/* Filter Toolbar inside window */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-3 border-b border-[#1b3a8a]">
          <div className="flex items-center gap-1.5 text-xs text-[#8fa8db] font-pixel">
            <Filter className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>FILTER PROTOCOL:</span>
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {['All', 'Hack', 'Food', 'Workshop', 'Demo', 'Keynote'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  retroAudio.playClick();
                  setFilter(cat);
                }}
                className={`px-2.5 py-1 rounded-sm border text-[11px] font-pixel transition-colors ${
                  filter === cat
                    ? 'bg-[#0055ea] text-white border-[#4dd8ff] shadow-sm'
                    : 'bg-[#0b1b44] text-[#8fa8db] border-[#1b3a8a] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Checkerboard / Scanline background container for the timeline */}
        <div className="relative checker-pattern rounded p-3 sm:p-5 border border-[#1b3a8a] bg-[#07112c]">
          {/* Central Timeline Vertical Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-28 w-0.5 bg-gradient-to-b from-[#ffd700] via-[#0055ea] to-[#4dd8ff] opacity-40" />

          {/* Timeline Items List */}
          <div className="space-y-4">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pl-8 sm:pl-0 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-[108px] top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0a1a4a] border-2 border-[#ffd700] shadow-[0_0_8px_rgba(255,215,0,0.7)] group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#ffd700]" />
                </div>

                {/* Pixel Time (Left Column on Desktop) */}
                <div className="sm:w-24 sm:text-right flex-shrink-0 font-pixel text-xs sm:text-sm text-[#ffb800] tracking-wider font-bold">
                  {item.time}
                </div>

                {/* Event Card (Right Column) */}
                <div className="flex-1 bg-[#0a183d]/90 hover:bg-[#0d2154] p-3.5 rounded border border-[#1b3a8a] hover:border-[#ffd700]/60 transition-all shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    {/* Event name in flared serif display font */}
                    <h3 className="font-display text-base sm:text-lg text-[#f5f0dc] font-black group-hover:text-[#ffd700] transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[9px] font-pixel uppercase tracking-wider bg-[#071330] border border-[#1b3a8a] text-[#4dd8ff]">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#adc2ea] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2 text-[10px] font-mono text-[#8fa8db] flex items-center gap-1">
                    <span>LOCATION:</span>
                    <span className="text-[#c5d8ff] underline">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WindowFrame>
    </section>
  );
};
