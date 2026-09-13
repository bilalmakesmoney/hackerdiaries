import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { retroAudio } from '../utils/audio';

import leadImg from '../assets/organizers/lead.jpg';
import co1Img from '../assets/organizers/co1.jpg';
import co2Img from '../assets/organizers/co2.jpg';

interface Organizer {
  id: string;
  name: string;
  handle: string;
  role: string;
  roleType: 'lead' | 'co';
  image: string;
  bgPosition: string;
  accentColor: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

const organizers: Organizer[] = [
  {
    id: 'co-org-1',
    name: 'Ikra Khan',
    handle: '@ikra.dev',
    role: 'CO-ORGANIZER',
    roleType: 'co',
    image: co1Img,
    bgPosition: '50% center',
    accentColor: '#00e5ff',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:hackerdiaries@gmail.com',
    },
  },
  {
    id: 'lead-org',
    name: 'Muhammad Bilal',
    handle: '@bilal.exe',
    role: 'LEAD ORGANIZER',
    roleType: 'lead',
    image: leadImg,
    bgPosition: '50% center',
    accentColor: '#ffd700',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:hackerdiaries@gmail.com',
    },
  },
  {
    id: 'co-org-2',
    name: 'Diksha',
    handle: '@diksha.sys',
    role: 'CO-ORGANIZER',
    roleType: 'co',
    image: co2Img,
    bgPosition: '50% center',
    accentColor: '#ff2a85',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:hackerdiaries@gmail.com',
    },
  },
];

export const OrganizersSection: React.FC = () => {
  return (
    <section id="organizers" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2159] border border-[#ffd700]/60 shadow-[0_0_16px_rgba(255,215,0,0.3)] mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700] animate-pulse" />
          <span className="font-pixel text-xs sm:text-sm text-[#ffd700] tracking-widest uppercase font-bold">
            // THE CREW
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-black tracking-wide leading-tight drop-shadow-md">
          MEET THE <span className="gold-text-stroke text-[#ffc83b]">ORGANIZERS</span>
        </h2>
      </div>

      {/* 3 Organizers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {organizers.map((org) => {
          const isLead = org.roleType === 'lead';

          return (
            <div
              key={org.id}
              className="rounded-2xl flex flex-col justify-between overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-[#0b1f52] via-[#07153a] to-[#030a1c] border-2 border-[#1e4499] shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
            >
              {/* Card Window Bar */}
              <div className="px-4 py-2 flex items-center justify-between border-b border-[#1e3a8a] bg-[#08173d] select-none shrink-0">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: org.accentColor, boxShadow: `0 0 6px ${org.accentColor}` }}
                  />
                  <span className="font-mono text-xs text-white font-bold tracking-wider">
                    {org.handle}
                  </span>
                </div>

                <span
                  className="font-pixel text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm border font-bold"
                  style={{
                    color: org.accentColor,
                    borderColor: `${org.accentColor}60`,
                    backgroundColor: `${org.accentColor}15`,
                  }}
                >
                  {isLead ? '★ LEAD' : 'CO-ORG'}
                </span>
              </div>

              {/* Card Interior */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col items-center justify-between space-y-4 text-center">
                
                {/* Clean Photo Container */}
                <div
                  className="w-full aspect-square max-w-[220px] rounded-xl overflow-hidden border-2 border-[#1e3a8a] group-hover:border-[#ffd700]/60 transition-colors bg-[#030919]"
                  style={{
                    backgroundImage: `url(${org.image})`,
                    backgroundPosition: org.bgPosition,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                />

                {/* Name & Role */}
                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
                    {org.name}
                  </h3>
                  <div
                    className="font-pixel text-xs tracking-wider font-bold"
                    style={{ color: org.accentColor }}
                  >
                    {org.role}
                  </div>
                </div>

                {/* Social Links (Instagram, LinkedIn, Email) */}
                <div className="pt-2 flex items-center justify-center gap-3">
                  {org.socials.instagram && (
                    <a
                      href={org.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => retroAudio.playClick()}
                      className="w-8 h-8 rounded-lg bg-[#071330] border border-[#1e3a8a] flex items-center justify-center text-[#c2d4f8] hover:text-[#ff2a85] hover:border-[#ff2a85] transition-colors"
                      aria-label={`${org.name}'s Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {org.socials.linkedin && (
                    <a
                      href={org.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => retroAudio.playClick()}
                      className="w-8 h-8 rounded-lg bg-[#071330] border border-[#1e3a8a] flex items-center justify-center text-[#c2d4f8] hover:text-[#00e5ff] hover:border-[#00e5ff] transition-colors"
                      aria-label={`${org.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {org.socials.email && (
                    <a
                      href={org.socials.email}
                      onClick={() => retroAudio.playClick()}
                      className="w-8 h-8 rounded-lg bg-[#071330] border border-[#1e3a8a] flex items-center justify-center text-[#c2d4f8] hover:text-[#ffd700] hover:border-[#ffd700] transition-colors"
                      aria-label={`Email ${org.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
