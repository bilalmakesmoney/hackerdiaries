import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft 
} from 'lucide-react';
import { 
  qrCards, 
  InteractiveHolographicCard 
} from './HolographicBreakCard';
import { retroAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface QRCardPageProps {
  onBack: () => void;
}

export const QRCardPage: React.FC<QRCardPageProps> = ({ onBack }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    retroAudio.playAlert();
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#10b981', '#00e5ff', '#ffd700', '#ff2a85'],
      });
    } catch {}
  }, []);

  const handleNextCard = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    retroAudio.playClick();

    setTimeout(() => {
      const nextIdx = (cardIndex + 1) % qrCards.length;
      setCardIndex(nextIdx);
      retroAudio.playAlert();

      const nextCard = qrCards[nextIdx];
      if (nextCard && !nextCard.isLocked && nextCard.type === 'buff') {
        try {
          confetti({
            particleCount: 45,
            spread: 65,
            origin: { y: 0.6 },
            colors: ['#10b981', '#00e5ff', '#ffd700', '#ffffff'],
          });
        } catch {}
      }

      setTimeout(() => {
        setIsFlipping(false);
      }, 200);
    }, 150);
  };

  const currentCard = qrCards[cardIndex % qrCards.length];

  return (
    <div className="min-h-screen bg-[#04081c] text-[#f5f0dc] relative selection:bg-[#ffb800] selection:text-[#0a1a4a] flex flex-col items-center justify-between p-4 sm:p-6 overflow-x-hidden">
      {/* Background Scanlines */}
      <div className="fixed inset-0 scanlines pointer-events-none opacity-40 z-0" />
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(#4dd8ff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header */}
      <header className="w-full max-w-4xl flex items-center justify-between z-10 py-2 border-b border-[#1e3a8a]/70">
        <button
          type="button"
          onClick={() => {
            retroAudio.playClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0c1f52] border border-[#1e4499] text-xs sm:text-sm font-pixel text-[#c2d4f8] hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAIN SITE</span>
        </button>
      </header>

      {/* Main Content: Heading, Centered Card & Action */}
      <main className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center my-6 z-10 space-y-6">
        
        {/* Simple Heading */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-wide">
            YOUR SECRET <span className="gold-text-stroke text-[#ffc83b]">VENUE CARD</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#adc2ea] font-sans max-w-md mx-auto">
            1 Buff &amp; 1 Constraint sample unlocked. Click or tap the card to cycle through cards!
          </p>
        </div>

        {/* Centered 3D Card (Changes on Click) */}
        <div className="w-full flex justify-center items-center">
          <InteractiveHolographicCard 
            card={currentCard} 
            onClick={handleNextCard}
            isFlipping={isFlipping}
          />
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="w-full max-w-4xl text-center py-3 text-xs font-mono text-[#8fa8db] border-t border-[#1e3a8a]/50 z-10">
        Hacker Diaries 2026 • Venue Discovery Cards
      </footer>
    </div>
  );
};
