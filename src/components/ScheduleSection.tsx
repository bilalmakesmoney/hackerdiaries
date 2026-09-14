import React from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const scheduleItems: ScheduleItem[] = [
  {
    id: '1',
    time: '08:00 AM – 09:00 AM',
    title: 'Entry & Registration',
    description: 'Hacker check-in, ID verification, badge pickup, and morning welcome kit drop.',
  },
  {
    id: '2',
    time: '09:00 AM – 10:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome address by teen organizers, mentor & judge introductions, and hackathon rules briefing.',
  },
  {
    id: '3',
    time: '10:00 AM – 10:30 AM',
    title: 'Theme Announcement',
    description: 'Official release of Web Dev & Game Dev challenge themes, problem statements, and scoring criteria.',
    highlight: true,
  },
  {
    id: '4',
    time: '10:30 AM – 01:30 PM',
    title: 'Hacking Sprint – 1',
    description: 'The build clock begins! Repositories initialized, Wi-Fi unlocked, and initial architecture build starts.',
    highlight: true,
  },
  {
    id: '5',
    time: '01:30 PM – 02:00 PM',
    title: 'Lunch Break',
    description: 'Hot lunch served for all builders and mentors. Refuel and recharge for the afternoon sprint.',
  },
  {
    id: '6',
    time: '02:00 PM – 05:30 PM',
    title: 'Hacking Resumes (Sprint – 2 & QR Card Hunt)',
    description: 'Venue QR stickers go live! Scout the venue, scan hidden QR codes to unlock powerful Buffs or wild Constraints, and sprint to code freeze.',
    highlight: true,
  },
  {
    id: '7',
    time: '05:30 PM – 06:00 PM',
    title: 'Project Submission',
    description: 'Final Git commits pushed. Deployed URLs and project write-ups submitted to the official portal.',
    highlight: true,
  },
  {
    id: '8',
    time: '06:00 PM – 07:00 PM',
    title: 'Judging Round',
    description: 'Live interactive demonstrations with roving industry judges testing playable games and web apps.',
  },
  {
    id: '9',
    time: '07:00 PM – 08:00 PM',
    title: 'Closing Ceremony & Awards',
    description: 'Winners announced, mystery prizes & custom trophies awarded, organizer remarks, and closing photo.',
    highlight: true,
  },
];

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // 12-HOUR EVENT TIMELINE • 08:00 AM – 08:00 PM
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          HACKATHON <span className="gold-text-stroke text-[#ffc83b]">SCHEDULE</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          The official single-day roadmap from morning check-in and theme reveal to live judging and awards.
        </p>
      </div>

      {/* Clean Timeline Container */}
      <div className="relative pl-4 sm:pl-8 sm:border-l-2 sm:border-[#1e3a8a]/70 sm:ml-4 space-y-3.5 sm:space-y-4">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 p-4 sm:p-5 rounded-xl border transition-all duration-200 group ${
              item.highlight
                ? 'bg-gradient-to-r from-[#0d2258]/90 via-[#0a1b47]/90 to-[#071335]/90 border-[#ffd700]/50 shadow-[0_4px_16px_rgba(255,215,0,0.08)]'
                : 'bg-[#08163a]/80 hover:bg-[#0c1f4e]/90 border-[#1a3675] hover:border-[#4dd8ff]/50'
            }`}
          >
            {/* Timeline Node (Desktop) */}
            <div className="hidden sm:flex absolute -left-[41px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#050e26] border-2 border-[#1e3a8a] group-hover:border-[#4dd8ff] items-center justify-center transition-colors">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.highlight ? 'bg-[#ffd700] shadow-[0_0_6px_#ffd700]' : 'bg-[#4dd8ff]'
                }`}
              />
            </div>

            {/* Time Badge & Title & Description */}
            <div className="flex-1 space-y-1">
              <div className="font-mono font-bold text-xs sm:text-sm text-[#ffd700]">
                {item.time}
              </div>

              <h3 className="font-display text-base sm:text-lg font-black text-[#f5f0dc] group-hover:text-[#ffd700] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#adc2ea] font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Bottom Note */}
      <div className="mt-8 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-mono text-[#8fa8db]">
          <Clock className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>Strict timeline adherence. All times in Indian Standard Time (IST).</span>
        </p>
      </div>
    </section>
  );
};
