import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface FAQ {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqList: FAQ[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'Who can participate?',
    answer: 'Anyone who is 18 years old or younger on the day of the event (15 November 2026). Whether you are in middle school, high school, or a self-taught teen developer, you are warmly invited.',
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'What is the team size?',
    answer: 'Teams can range from 1 to 3 members. You can build solo or assemble a squad with friends. If you arrive without a team, we host a dedicated team-formation mixer right after the opening ceremony.',
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'Does my team need prior game dev experience?',
    answer: 'Not at all! Beginners and first-time builders are enthusiastically welcomed. You can learn as you build, brainstorm with fellow teen coders, and get debugging guidance from on-site mentors throughout the 12 hours.',
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'What tools and engines are allowed?',
    answer: 'You are free to use any open-source or free engine, framework, or library (Godot, Unity, Phaser.js, Three.js, React, Next.js, HTML5 Canvas, Pygame, etc.). Pre-existing libraries and open AI tools are permitted as long as all project code is built during the hackathon.',
  },
  {
    id: 'faq-5',
    num: '05',
    question: 'Is there a registration fee?',
    answer: 'No! Hacker Diaries is 100% free. Registration, meals, refreshments, high-speed Wi-Fi, custom holographic swag, and prizes are completely covered at zero cost.',
  },
  {
    id: 'faq-6',
    num: '06',
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, power extension cord, student ID or government age verification (Aadhaar / Passport), and comfortable clothes. We provide all the food, drinks, Wi-Fi, and workspace.',
  },
  {
    id: 'faq-7',
    num: '07',
    question: 'How are projects judged?',
    answer: 'Projects are evaluated during live, hands-on judging demos across four core pillars: Creativity & Originality, Technical Execution, Gameplay / User Experience, and Polish / Completeness built within the 12-hour build window.',
  },
  {
    id: 'faq-8',
    num: '08',
    question: 'Is this a Hack Club event?',
    answer: 'Hacker Diaries is an independently organized community hackathon run by high school teen builders, proudly inspired by and affiliated with the global Hack Club ethos of making cool projects and shipping with friends.',
  },
];

export const FAQSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    retroAudio.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2159]/80 border border-[#4dd8ff]/40 shadow-[0_0_12px_rgba(77,216,255,0.25)] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#4dd8ff] tracking-widest uppercase">
            // KNOWLEDGE BASE • FAQ
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#f5f0dc] font-black tracking-tight leading-tight">
          FREQUENTLY ASKED <span className="gold-text-stroke text-[#ffc83b]">QUESTIONS</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#adc2ea] font-sans max-w-xl mx-auto leading-relaxed">
          Everything you need to know about eligibility, team formation, tools, judging, and logistics.
        </p>
      </div>

      {/* Clean Numbered Accordion List */}
      <div className="space-y-3.5">
        {faqList.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#ffd700]/70 bg-gradient-to-r from-[#0d2258]/95 via-[#0a1b47]/95 to-[#071335]/95 shadow-[0_6px_24px_rgba(255,215,0,0.12)]'
                  : 'border-[#1a3675] bg-[#071330]/85 hover:border-[#4dd8ff]/60 hover:bg-[#091a44]/90'
              }`}
            >
              {/* Question Header Row */}
              <button
                type="button"
                onClick={() => toggleFaq(item.id)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer select-none transition-colors"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 pr-3">
                  {/* Number Badge */}
                  <span
                    className={`font-pixel text-xs sm:text-sm px-2.5 py-1 rounded-md border shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#ffd700] text-[#050e26] border-[#ffd700] font-bold shadow-[0_0_8px_rgba(255,215,0,0.3)]'
                        : 'bg-[#040c20] text-[#4dd8ff] border-[#1e3a8a]'
                    }`}
                  >
                    {item.num}
                  </span>

                  {/* Question Text */}
                  <h3
                    className={`text-sm sm:text-base md:text-lg font-display font-bold leading-snug transition-colors ${
                      isOpen ? 'text-[#ffd700]' : 'text-[#f5f0dc]'
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                {/* Right Area: Chevron */}
                <div className="flex items-center shrink-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#0055ea] text-white border-[#4dd8ff] rotate-180 shadow-[0_0_8px_rgba(77,216,255,0.3)]'
                        : 'bg-[#0b1d47] text-[#8fa8db] border-[#1e3a8a]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#1e3a8a]/60 text-xs sm:text-sm text-[#adc2ea] font-sans leading-relaxed sm:pl-16">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Footer */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071330]/80 border border-[#1e3a8a] text-xs font-mono text-[#8fa8db]">
          <MessageCircle className="w-4 h-4 text-[#ffd700]" />
          <span>Still have questions? Reach out directly to the teen organizers via WhatsApp or Discord.</span>
        </div>
      </div>
    </section>
  );
};
