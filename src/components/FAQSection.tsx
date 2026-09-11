import React, { useState } from 'react';
import { AlertTriangle, HelpCircle, ChevronDown, ChevronUp, Check, Info } from 'lucide-react';
import { FaqItem } from '../types';
import { retroAudio } from '../utils/audio';

const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Eligibility',
    question: 'System Query 01: Who can participate? Is it strictly for under-18s?',
    answer: 'Yes, 100%! Hacker Diaries is exclusively reserved for builders who are 18 years old or younger on 15 November 2026. Whether you are 13, 15, or 17, in high school, middle school, or self-taught, you are warmly invited.',
  },
  {
    id: 'faq-2',
    category: 'Cost',
    question: 'System Query 02: Is Hacker Diaries really free? Are there hidden fees?',
    answer: 'Zero rupees. Admission, four meals (including midnight Domino’s pizza), high-speed fiber internet, hardware checkout access, stickers, and your physical CD-R mixtape swag bag are completely covered by our sponsors.',
  },
  {
    id: 'faq-3',
    category: 'Team Formation',
    question: 'System Query 03: What if I do not have a team or project idea yet?',
    answer: 'No problem at all! Over 40% of hackers arrive solo. We host a dedicated team-matching mixer right after the opening ceremony at 10:45 AM where you can join forces with other coders, designers, or hardware hackers.',
  },
  {
    id: 'faq-4',
    category: 'Experience',
    question: 'System Query 04: What if I am a beginner and only know basic Python/HTML?',
    answer: 'Hackathons are the best place to learn. We have friendly volunteer mentors circulating 24/7, beginner-friendly workshops on Day 1, and special bounties for "Best First-Time Hack". If you have curiosity, you belong here.',
  },
  {
    id: 'faq-5',
    category: 'Logistics',
    question: 'System Query 05: What should I bring to the venue on 15 Nov 2026?',
    answer: 'Bring your laptop, charger, power extension strip, student ID card (or government age verification like Aadhaar/Passport), any hardware kits you want to build on, and comfortable clothes / a hoodie for the overnight sprint.',
  },
  {
    id: 'faq-6',
    category: 'Safety',
    question: 'System Query 06: How is safety and venue supervision managed overnight?',
    answer: 'We have dedicated security staff, chaperone zones, female mentor leads, a quiet sleeping area, and strict check-in/check-out protocols. Parents will receive a dedicated contact hotline for real-time check-ins.',
  },
];

export const FAQSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    retroAudio.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 px-4 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-10">
        <div className="font-pixel text-[10px] sm:text-xs text-[#ffd700] tracking-widest uppercase mb-1.5">
          // DIAGNOSTICS & KNOWLEDGE BASE
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-[#f5f0dc] font-black tracking-tight">
          SYSTEM FAQ & INTEL
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#adc2ea] font-sans max-w-lg mx-auto">
          Common queries styled as interactive system alerts. Click any dialog to expand its diagnostic log.
        </p>
      </div>

      {/* Styled as a Faux System Alert / Dialog List */}
      <div className="space-y-3.5">
        {faqList.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-[#ece9d8] text-[#111111] rounded shadow-lg border-2 border-[#0055ea] overflow-hidden transition-all duration-200 select-none font-sans"
            >
              {/* Question Bar styled like classic Windows Dialog Header / Titlebar */}
              <div
                onClick={() => toggleFaq(item.id)}
                className="xp-titlebar px-3 py-2 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2 overflow-hidden pr-2">
                  <span className="w-4 h-4 rounded-full bg-[#f5c518] text-black text-[10px] font-black flex items-center justify-center flex-shrink-0">
                    ?
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    {item.question}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="hidden sm:inline font-mono text-[10px] text-[#ffd700]">
                    [{isOpen ? 'OPEN' : 'EXPAND'}]
                  </span>
                  <div className="w-5 h-5 bg-[#0055ea] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Dialog Content (Alert Body) */}
              {isOpen && (
                <div className="p-4 sm:p-5 bg-[#f5f3e8] border-t border-[#d8d5c4] flex items-start gap-3.5 animate-in fade-in duration-150">
                  <div className="w-9 h-9 rounded-full bg-[#ffd700] border border-[#d4a800] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <Info className="w-5 h-5 text-[#6b4500]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="text-xs font-mono text-[#0055ea] font-bold">
                      CATEGORY: [{item.category.toUpperCase()}]
                    </div>
                    <p className="text-xs sm:text-sm text-[#222222] leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="px-4 py-1 bg-[#ece9d8] hover:bg-[#dedac7] text-black text-xs font-bold rounded-[3px] border border-[#7f9db9] shadow-xs flex items-center gap-1 active:translate-y-[1px]"
                      >
                        <Check className="w-3 h-3 text-[#008000]" />
                        <span>Acknowledge</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
