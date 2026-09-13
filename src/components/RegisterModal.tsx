import React, { useState } from 'react';
import { Clock, X, Mail, Check, Send } from 'lucide-react';
import { retroAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);

  if (!isOpen) return null;

  // Submit email to waitlist
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    retroAudio.playSuccess();

    // Persist email in local storage list for the organizer
    try {
      const existing = JSON.parse(localStorage.getItem('hacker_diaries_waitlist') || '[]');
      existing.push({
        email: email.trim(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('hacker_diaries_waitlist', JSON.stringify(existing));
    } catch {}

    setIsNotified(true);

    try {
      confetti({
        particleCount: 70,
        spread: 75,
        origin: { y: 0.55 },
        colors: ['#ffd700', '#4dd8ff', '#f5f0dc', '#0055ea'],
      });
    } catch {}
  };

  const handleClose = () => {
    retroAudio.playClick();
    onClose();
    setTimeout(() => {
      setIsNotified(false);
      setEmail('');
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-md max-h-[92vh] overflow-y-auto bg-[#ece9d8] text-[#111111] rounded-t-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-[#0055ea] font-sans">
        {/* Titlebar */}
        <div className="xp-titlebar px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffd700] text-[#0a1a4a] flex items-center justify-center font-pixel text-[9px] font-bold">
              i
            </span>
            <span className="text-xs font-bold text-white tracking-wide truncate">
              Hacker Diaries — Registration Waitlist
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-5 h-5 bg-[#d93829] hover:bg-[#f04f3f] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 bg-[#f0eee0] space-y-4">
          {!isNotified ? (
            <>
              {/* Header Badge & Title */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0d2159] border border-[#ffd700]/50 text-[#ffd700] font-pixel text-[10px]">
                  <Clock className="w-3 h-3 text-[#ffd700] animate-pulse" />
                  <span>REGISTRATION WILL BE OPEN SOON</span>
                </div>

                <h3 className="font-display font-black text-xl text-[#0a1a4a] leading-tight">
                  Registrations Open Soon!
                </h3>

                <p className="text-xs text-[#444] font-sans leading-relaxed max-w-xs mx-auto">
                  Builder applications for Hacker Diaries will open shortly. Drop your email below to get the official registration link sent straight to your inbox.
                </p>
              </div>

              {/* Email Waitlist Form */}
              <form onSubmit={handleNotifySubmit} className="space-y-3 bg-[#e4e1d0] p-4 rounded-lg border border-[#c4c0ae]">
                <div>
                  <label className="block text-[11px] font-bold text-[#222] mb-1">
                    Your Email Address:
                  </label>
                  <div className="flex gap-2">
                    <input
                      required
                      type="email"
                      placeholder="builder@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-white border border-[#7f9db9] shadow-inner text-xs text-black focus:outline-none focus:ring-1 focus:ring-[#0055ea] rounded-[2px]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[2px] border border-[#043fa6] shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0 active:translate-y-[1px]"
                    >
                      <Send className="w-3.5 h-3.5 text-[#ffd700]" />
                      <span>Notify Me</span>
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-[#666] leading-snug">
                  * We will send you an email with the application link the moment slots open. No spam ever.
                </p>
              </form>

              {/* Footer row */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#d5d2c2]">
                <span className="text-[10px] text-[#666]">
                  Strictly Under-18 • 100% Free
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-1 bg-[#ece9d8] hover:bg-[#dedac7] text-black text-xs font-semibold rounded-[3px] border border-[#7f9db9] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            /* Success confirmation */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#0d2159] border-2 border-[#4dd8ff] flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 text-[#ffd700]" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display font-black text-xl text-[#0a1a4a]">
                  You&apos;re On The List!
                </h3>
                <p className="text-xs text-[#333] px-2 leading-relaxed">
                  We have saved <span className="font-bold text-[#0055ea]">{email}</span>.
                </p>
                <div className="p-3 bg-[#e4e1d0] rounded-lg border border-[#c4c0ae] text-xs text-[#444] text-left space-y-1 font-mono">
                  <div className="flex items-center gap-1.5 text-[#0a1a4a] font-bold">
                    <Check className="w-4 h-4 text-[#28a745]" />
                    <span>Notification queued:</span>
                  </div>
                  <p className="text-[11px] text-[#555] leading-relaxed">
                    You will receive an email invitation directly at <strong>{email}</strong> the second registrations go live.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[3px] border border-[#043fa6] shadow-sm cursor-pointer"
                >
                  OK (Back to Site)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer status bar */}
        <div className="px-3 py-1 bg-[#e0ded0] border-t border-[#d0cec0] text-[10px] text-[#666] flex justify-between">
          <span>Hacker Diaries • Under-18 Hackathon</span>
          <span>Status: Email Alert Protocol</span>
        </div>
      </div>
    </div>
  );
};
