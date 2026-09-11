import React, { useState } from 'react';
import { Terminal, Check, X, Shield, Sparkles, Copy, Download, KeyRound } from 'lucide-react';
import { retroAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '16',
    schoolCity: '',
    discordOrInsta: '',
    track: 'AI & Autonomous Agents',
    techStack: 'Python / React / Hardware tinkering',
    needsTeam: 'no',
  });
  const [ticketNumber, setTicketNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    retroAudio.playSuccess();
    // Generate authentic retro CD-Key format ticket: HKD-2026-XXXX-YYYY
    const randomHex1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const randomHex2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const key = `HKD-2026-${randomHex1}-${randomHex2}`;
    setTicketNumber(key);
    setStep(2);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f5c518', '#4dd8ff', '#ffd700', '#ffffff', '#0055ea'],
      });
    } catch {}
  };

  const handleCopyTicket = () => {
    retroAudio.playClick();
    navigator.clipboard.writeText(ticketNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-lg bg-[#ece9d8] text-[#111111] rounded-t-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-[#0055ea] overflow-hidden font-sans">
        {/* Titlebar */}
        <div className="xp-titlebar px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#ffd700]" />
            <span className="text-xs font-bold text-white tracking-wide">
              Hacker Diaries 2026 — Official Attendee Setup Wizard
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#d93829] hover:bg-[#f04f3f] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner"
            aria-label="Close"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>

        {/* Wizard Sidebar & Content Layout */}
        <div className="flex flex-col sm:flex-row min-h-[380px]">
          {/* Classic Windows XP Setup Left Banner */}
          <div className="sm:w-1/3 bg-gradient-to-b from-[#0a1a4a] via-[#103080] to-[#040e2b] p-4 text-[#f5f0dc] flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#0038a8]">
            <div className="space-y-3">
              <div className="font-pixel text-[9px] text-[#ffd700] tracking-widest uppercase">
                SETUP WIZARD v2.6
              </div>
              <h2 className="font-display text-base text-[#ffc83b] leading-tight font-black">
                HACKER DIARIES
              </h2>
              <p className="text-[11px] text-[#c5d8ff] leading-relaxed">
                15 Nov 2026<br />
                Delhi NCR, India<br />
                Strictly Under-18
              </p>
              <div className="pt-2">
                <div className="text-[9px] text-[#8fa8db] font-mono">ADMISSION:</div>
                <div className="text-xs font-pixel text-[#00ff66]">100% FREE</div>
              </div>
            </div>

            <div className="text-[10px] text-[#8fa8db] font-mono border-t border-[#1e3a8a] pt-3">
              <div>• Free Swag & Mixtape</div>
              <div>• Free Pizza & Drinks</div>
              <div>• ₹1,50,000+ Prizes</div>
            </div>
          </div>

          {/* Wizard Form Area */}
          <div className="sm:w-2/3 p-4 sm:p-5 flex flex-col justify-between bg-[#f0eee0]">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div>
                  <h3 className="font-bold text-xs text-[#0a1a4a] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#0055ea]" />
                    Participant Credentials
                  </h3>
                  <p className="text-[10px] text-[#555]">
                    Open to any builder, coder, or tinkerer born on or after 16 Nov 2007.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#222]">
                    Full Name:
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Aryan Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black focus:outline-none focus:ring-1 focus:ring-[#0055ea]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-[#222]">
                      Age on 15 Nov 2026:
                    </label>
                    <select
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black"
                    >
                      <option value="13">13 years</option>
                      <option value="14">14 years</option>
                      <option value="15">15 years</option>
                      <option value="16">16 years</option>
                      <option value="17">17 years</option>
                      <option value="18">18 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#222]">
                      School / City:
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. DPS RKP, Delhi"
                      value={formData.schoolCity}
                      onChange={(e) => setFormData({ ...formData, schoolCity: e.target.value })}
                      className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#222]">
                    Discord / Instagram Handle:
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="@handle or username#0000"
                    value={formData.discordOrInsta}
                    onChange={(e) => setFormData({ ...formData, discordOrInsta: e.target.value })}
                    className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#222]">
                    Track of Interest:
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black"
                  >
                    <option>AI & Autonomous Agents ("Neural Nets on Dial-up")</option>
                    <option>Web3 & Peer-to-Peer ("Limewire Protocol Revamped")</option>
                    <option>Open Source & Hardware ("Soldering & Circuit Boards")</option>
                    <option>Creative Media & Retro Games ("Flash Revival")</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#222]">
                    Do you already have a team?
                  </label>
                  <div className="flex gap-4 text-xs pt-0.5">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="team"
                        value="no"
                        checked={formData.needsTeam === 'no'}
                        onChange={() => setFormData({ ...formData, needsTeam: 'no' })}
                      />
                      No, match me at kickoff!
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="team"
                        value="yes"
                        checked={formData.needsTeam === 'yes'}
                        onChange={() => setFormData({ ...formData, needsTeam: 'yes' })}
                      />
                      Yes, rolling with my squad
                    </label>
                  </div>
                </div>

                {/* Bottom navigation buttons */}
                <div className="pt-3 border-t border-[#d5d2c2] flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      retroAudio.playClick();
                      onClose();
                    }}
                    className="px-3 py-1 bg-[#ece9d8] hover:bg-[#dedac7] text-black text-xs font-semibold rounded-[3px] border border-[#7f9db9]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-1 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[3px] border border-[#043fa6] shadow-sm flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                    Complete Setup & Claim Pass &gt;
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Ticket Confirmation Screen */
              <div className="space-y-4 py-2">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#e6f7eb] border-2 border-[#52c41a] flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#389e0d]" />
                  </div>
                  <h3 className="font-display font-black text-base text-[#0a1a4a]">
                    HACKER ACCESS GRANTED!
                  </h3>
                  <p className="text-[11px] text-[#444]">
                    Welcome aboard, <strong>{formData.fullName}</strong>. Your setup is 100% complete.
                  </p>
                </div>

                {/* Digital Ticket / CD-Key Box */}
                <div className="bg-[#0c1f52] p-3 rounded border-2 border-[#ffb800] text-[#f5f0dc] shadow-inner font-mono text-xs space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[#8fa8db] border-b border-[#1b3a8a] pb-1">
                    <span>PRODUCT KEY // DEL-NCR</span>
                    <span className="text-[#00ff66] font-pixel">CONFIRMED</span>
                  </div>
                  <div className="font-arcade text-center py-2 text-sm sm:text-base text-[#ffd700] tracking-wider bg-[#06102b] rounded border border-[#1b3a8a]">
                    {ticketNumber}
                  </div>
                  <div className="text-[10px] text-[#c5d8ff] flex justify-between">
                    <span>Attendee: {formData.fullName} ({formData.age}y)</span>
                    <span>Track: {formData.track.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyTicket}
                    className="flex-1 py-1.5 bg-[#ece9d8] hover:bg-[#dedac7] text-[#0a1a4a] text-xs font-bold rounded border border-[#7f9db9] flex items-center justify-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copied ? 'Copied Key!' : 'Copy Product Key'}
                  </button>
                  <a
                    href="https://chat.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-1.5 bg-[#00a854] hover:bg-[#00c060] text-white text-xs font-bold rounded border border-[#006030] flex items-center justify-center gap-1.5 text-center"
                  >
                    Join WhatsApp HQ
                  </a>
                </div>

                <div className="pt-2 border-t border-[#d5d2c2] flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      retroAudio.playClick();
                      onClose();
                      setStep(1);
                    }}
                    className="px-6 py-1 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[3px] border border-[#043fa6]"
                  >
                    Finish (Return to Site)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Wizard Footer Status Bar */}
        <div className="px-3 py-1 bg-[#e0ded0] border-t border-[#d0cec0] text-[10px] text-[#666] flex justify-between">
          <span>Hacker Diaries Setup Engine</span>
          <span>Delhi NCR • 15 Nov 2026</span>
        </div>
      </div>
    </div>
  );
};
