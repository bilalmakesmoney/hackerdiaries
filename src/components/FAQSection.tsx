import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Check, Info, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { FaqItem } from '../types';
import { retroAudio } from '../utils/audio';

const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'ELIGIBILITY',
    question: 'QUERY 01: Who can participate? Is it strictly for under-18 builders?',
    answer: 'Yes, 100%! Hacker Diaries is exclusively reserved for builders who are 18 years old or younger on 15 November 2026. Whether you are 13, 15, or 17, in middle school, high school, or self-taught, you are warmly invited.',
  },
  {
    id: 'faq-2',
    category: 'ADMISSION & COST',
    question: 'QUERY 02: Is Hacker Diaries really ₹0 free? Are there any hidden fees?',
    answer: 'Zero rupees. Admission, hot lunch, dinner, unlimited snacks and energy drinks, high-speed fiber internet, dev toolkits, and your customized holographic CD-R mixtape swag bag are completely covered by our sponsors.',
  },
  {
    id: 'faq-3',
    category: 'TEAM FORMATION',
    question: 'QUERY 03: What if I do not have a team or project idea yet?',
    answer: 'No problem at all! Over 40% of hackers arrive solo. We host a dedicated team-matching mixer right after the opening ceremony where you can join forces with other frontend coders, game designers, or builders (team sizes 1 to 4).',
  },
  {
    id: 'faq-4',
    category: 'EXPERIENCE LEVEL',
    question: 'QUERY 04: What if I am a beginner with basic HTML/JS/Python skills?',
    answer: 'Hackathons are the best place to learn. We have friendly volunteer mentors circulating throughout the 12 hours, hands-on debugging guidance, starter templates, and special awards for "Best First-Time Hack". If you have curiosity, you belong here.',
  },
  {
    id: 'faq-5',
    category: 'VENUE LOGISTICS',
    question: 'QUERY 05: What hardware/gear should I bring to Delhi NCR on 15 Nov?',
    answer: 'Bring your laptop, charger, power extension strip, student ID card (or government age verification like Aadhaar/Passport), and comfortable clothes for the 12-hour build sprint.',
  },
  {
    id: 'faq-6',
    category: 'SAFETY & PARENTS',
    question: 'QUERY 06: How is safety, chaperone oversight, and venue security managed?',
    answer: 'We have dedicated venue security staff, chaperone leads, mentor desks, and strict check-in/check-out protocols throughout the 12-hour daytime event. Parents receive a direct contact hotline and venue briefing.',
  },
];

export const FAQSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    retroAudio.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // KNOWLEDGE BASE & SYSTEM LOGS
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          FREQUENTLY ASKED <span className="gold-text-stroke text-[#ffc83b]">QUERIES</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          Everything you need to know about eligibility, logistics, safety, and team matchmaking for 15 Nov 2026.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqList.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden shadow-lg ${
                isOpen
                  ? 'border-[#ffd700] bg-gradient-to-b from-[#0d2258]/95 via-[#08173d]/95 to-[#040e26]/95 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
                  : 'border-[#1e3a8a] bg-[#071330]/85 hover:border-[#4dd8ff]/60 hover:bg-[#0a1b44]/90'
              }`}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleFaq(item.id)}
                className="px-5 py-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-3 overflow-hidden pr-2">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-pixel text-xs font-bold shrink-0 transition-colors ${
                    isOpen ? 'bg-[#ffd700] text-[#0a1a4a]' : 'bg-[#0b1d47] text-[#4dd8ff] border border-[#1e3a8a]'
                  }`}>
                    ?
                  </span>
                  <span className={`text-sm sm:text-base font-bold font-sans tracking-wide transition-colors ${
                    isOpen ? 'text-[#ffd700]' : 'text-[#f5f0dc]'
                  }`}>
                    {item.question}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="hidden sm:inline-block font-mono text-[10px] text-[#8fa8db]">
                    [{item.category}]
                  </span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                    isOpen
                      ? 'bg-[#0055ea] text-white border-[#4dd8ff]'
                      : 'bg-[#0b1d47] text-[#8fa8db] border-[#1e3a8a]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Answer Body */}
              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-[#1e3a8a]/70 flex items-start gap-4 animate-in fade-in duration-150">
                  <div className="w-8 h-8 rounded-lg bg-[#071330] border border-[#4dd8ff]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Info className="w-4 h-4 text-[#4dd8ff]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-xs sm:text-sm text-[#c7d9fa] leading-relaxed font-sans">
                      {item.answer}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#8fa8db]">
                      <span className="text-[#4dd8ff]">STATUS: VERIFIED SPECIFICATION</span>
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        className="text-[#ffd700] hover:underline cursor-pointer flex items-center gap-1 font-pixel text-[10px]"
                      >
                        <Check className="w-3 h-3 text-[#4dd8ff]" />
                        <span>COLLAPSE LOG</span>
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
