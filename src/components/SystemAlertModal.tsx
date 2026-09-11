import React, { useEffect, useState } from 'react';
import { AlertTriangle, Info, Check, X, Send, Sparkles } from 'lucide-react';
import { retroAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface SystemAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  type?: 'sponsor' | 'alert' | 'newsletter';
}

export const SystemAlertModal: React.FC<SystemAlertModalProps> = ({
  isOpen,
  onClose,
  title = 'System Warning: 0x8004100E',
  type = 'sponsor',
}) => {
  const [formData, setFormData] = useState({
    companyOrName: '',
    email: '',
    message: '',
    budgetOrTier: 'Gold ($1,500 / ₹1,25,000)',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      retroAudio.playAlert();
    } else {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    retroAudio.playSuccess();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f5c518', '#4dd8ff', '#ffffff', '#1e3a8a'],
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs select-none">
      <div className="w-full max-w-md bg-[#ece9d8] text-[#111111] rounded-t-md shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-2 border-[#0055ea] overflow-hidden font-sans">
        {/* Classic Windows XP Blue Dialog Header */}
        <div className="xp-titlebar px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#f5c518] flex items-center justify-center text-[9px] text-black font-bold">!</span>
            <span className="text-xs font-bold text-white tracking-wide truncate">
              {type === 'sponsor' ? 'Hacker Diaries — Sponsor Inquiry Protocol' : title}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onClose();
            }}
            className="w-5 h-5 bg-[#d93829] hover:bg-[#f04f3f] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner"
            aria-label="Close dialog"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>

        {/* Dialog Content Area */}
        <div className="p-4 sm:p-5 bg-[#f0eee0]">
          {!isSubmitted ? (
            <div className="flex gap-4 items-start">
              {/* Retro Yellow Warning Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#ffcc00] border-2 border-[#cc9900] flex items-center justify-center shadow-md">
                  <AlertTriangle className="w-6 h-6 text-[#7a4800]" />
                </div>
              </div>

              {/* Form / Prompt Body */}
              <div className="flex-1 text-xs space-y-3">
                {type === 'sponsor' ? (
                  <>
                    <p className="font-bold text-[#1a2d54] text-sm leading-tight">
                      Attention: Partner with 300+ under-18 software architects, hardware builders, & teen founders.
                    </p>
                    <p className="text-[#444444] text-[11px] leading-relaxed">
                      Sponsorship tiers are currently opening for Title, Track, API, Food & Hardware. Connect directly with high-agency high schoolers in Delhi NCR on 15 Nov 2026.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-2 mt-2">
                      <div>
                        <label className="block text-[11px] font-bold text-[#222] mb-0.5">
                          Organization / Sponsor Name:
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Acme Cloud / Venture Guild"
                          value={formData.companyOrName}
                          onChange={(e) => setFormData({ ...formData, companyOrName: e.target.value })}
                          className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black focus:outline-none focus:ring-1 focus:ring-[#0055ea]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#222] mb-0.5">
                          Work Email:
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="partner@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black focus:outline-none focus:ring-1 focus:ring-[#0055ea]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#222] mb-0.5">
                          Tier / Interest:
                        </label>
                        <select
                          value={formData.budgetOrTier}
                          onChange={(e) => setFormData({ ...formData, budgetOrTier: e.target.value })}
                          className="w-full px-2 py-1 bg-white border border-[#7f9db9] shadow-inner text-xs text-black focus:outline-none"
                        >
                          <option>Title Sponsor (Keynote + Grand Prize)</option>
                          <option>Track Sponsor (AI / Web3 / Hardware)</option>
                          <option>Food & Midnight Pizza Patron</option>
                          <option>Community & Media Partner</option>
                          <option>Custom Swag / CD-R Mixtape Sponsor</option>
                        </select>
                      </div>

                      <div className="pt-2 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            retroAudio.playClick();
                            onClose();
                          }}
                          className="px-4 py-1 bg-[#ece9d8] hover:bg-[#dedac7] text-black text-xs font-semibold rounded-[3px] border border-[#7f9db9] active:translate-y-[1px]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[3px] border border-[#043fa6] shadow-sm flex items-center gap-1 active:translate-y-[1px]"
                        >
                          <Send className="w-3 h-3" />
                          Send Inquiry
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-sm text-[#111]">
                      System Notice: Hacker Diaries 2026 Dispatch
                    </p>
                    <p className="text-[#333]">
                      Join our verified WhatsApp bulletin or drop your email to receive early syllabus drops and mentor reveals.
                    </p>
                    <div className="pt-3 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-1 bg-[#0055ea] text-white text-xs font-bold rounded-[3px]"
                      >
                        OK
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div className="py-4 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e6f7eb] border-2 border-[#52c41a] flex items-center justify-center">
                <Check className="w-6 h-6 text-[#389e0d]" />
              </div>
              <h3 className="font-bold text-sm text-[#1b4317]">
                Dispatch Sent Successfully!
              </h3>
              <p className="text-xs text-[#444] px-4">
                Thank you, <strong>{formData.companyOrName || 'Partner'}</strong>. The Hacker Diaries lead organizers will review your packet and ping <span className="underline">{formData.email}</span> within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    retroAudio.playClick();
                    onClose();
                  }}
                  className="px-6 py-1.5 bg-[#0055ea] hover:bg-[#1a68ff] text-white text-xs font-bold rounded-[3px] border border-[#043fa6]"
                >
                  OK (Close Dialog)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Windows XP Dialog Footer Inset */}
        <div className="px-3 py-1 bg-[#e0ded0] border-t border-[#d0cec0] text-[10px] text-[#666] flex justify-between">
          <span>ErrorCode: 0x00_HACKER_DIARIES</span>
          <span>Status: 200 OK</span>
        </div>
      </div>
    </div>
  );
};
