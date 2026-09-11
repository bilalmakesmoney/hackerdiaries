import React, { useState } from 'react';
import { Minus, Square, X, Terminal, Disc, FileText, HelpCircle, HardDrive, CheckCircle2 } from 'lucide-react';
import { retroAudio } from '../utils/audio';

interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  icon?: 'terminal' | 'disc' | 'file' | 'help' | 'drive';
  statusBarText?: string;
  secondaryStatus?: string;
  className?: string;
  showMenuBar?: boolean;
  initialMinimized?: boolean;
  windowId?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  children,
  icon = 'file',
  statusBarText = 'Ready',
  secondaryStatus = '100% Free // Under 18',
  className = '',
  showMenuBar = true,
  initialMinimized = false,
  windowId,
}) => {
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const [isMaximized, setIsMaximized] = useState(false);

  const getIcon = () => {
    switch (icon) {
      case 'terminal':
        return <Terminal className="w-4 h-4 text-[#ffd700]" />;
      case 'disc':
        return <Disc className="w-4 h-4 text-[#4dd8ff]" />;
      case 'help':
        return <HelpCircle className="w-4 h-4 text-[#ffd700]" />;
      case 'drive':
        return <HardDrive className="w-4 h-4 text-[#4dd8ff]" />;
      default:
        return <FileText className="w-4 h-4 text-[#ffffff]" />;
    }
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    retroAudio.playClick();
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    retroAudio.playClick();
    setIsMaximized(!isMaximized);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    retroAudio.playAlert();
    // Re-minimize or show playful toast
    setIsMinimized(true);
  };

  return (
    <div
      id={windowId}
      className={`rounded-t-lg rounded-b-none md:rounded-b shadow-2xl border-2 border-[#194090] bg-[#0c1f52] overflow-hidden transition-all duration-200 ${
        isMaximized ? 'w-full ring-2 ring-[#ffb800]' : ''
      } ${className}`}
    >
      {/* Windows XP Classic Title Bar */}
      <div
        className="xp-titlebar px-3 py-1.5 flex items-center justify-between select-none cursor-pointer border-b border-[#04338c]"
        onClick={() => {
          if (isMinimized) {
            retroAudio.playClick();
            setIsMinimized(false);
          }
        }}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex-shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            {getIcon()}
          </div>
          <span className="font-bold text-xs sm:text-sm text-white tracking-wide truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {title}
          </span>
        </div>

        {/* Window Controls (Min, Max, Close) */}
        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleMinimize}
            className="w-5 h-5 bg-[#0055ea] hover:bg-[#2070ff] active:bg-[#003da8] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner"
            title={isMinimized ? "Restore" : "Minimize"}
            aria-label="Minimize Window"
          >
            <Minus className="w-3 h-3 stroke-[3]" />
          </button>
          <button
            type="button"
            onClick={handleMaximize}
            className="w-5 h-5 bg-[#0055ea] hover:bg-[#2070ff] active:bg-[#003da8] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner"
            title={isMaximized ? "Normal Size" : "Maximize"}
            aria-label="Maximize Window"
          >
            <Square className="w-2.5 h-2.5 stroke-[3]" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-5 h-5 bg-[#d93829] hover:bg-[#f04f3f] active:bg-[#a62214] text-white rounded-[2px] flex items-center justify-center border border-white/40 shadow-inner ml-0.5"
            title="Close / Collapse"
            aria-label="Close Window"
          >
            <X className="w-3 h-3 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Menu Bar (File, Edit, View, Help) */}
      {!isMinimized && showMenuBar && (
        <div className="hidden sm:flex items-center gap-4 px-3 py-1 bg-[#0f2868] border-b border-[#081742] text-[11px] font-mono text-[#c5d8ff] select-none">
          <span className="hover:text-white cursor-pointer hover:underline"><u>F</u>ile</span>
          <span className="hover:text-white cursor-pointer hover:underline"><u>E</u>dit</span>
          <span className="hover:text-white cursor-pointer hover:underline"><u>V</u>iew</span>
          <span className="hover:text-white cursor-pointer hover:underline"><u>B</u>uild</span>
          <span className="hover:text-white cursor-pointer hover:underline"><u>H</u>elp</span>
          <span className="ml-auto text-[10px] text-[#ffc83b] flex items-center gap-1 font-pixel">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4dd8ff]" />
            ONLINE
          </span>
        </div>
      )}

      {/* Window Body Container */}
      {!isMinimized ? (
        <div className="bg-[#09173d] p-4 sm:p-6 text-[#f5f0dc] relative">
          {children}
        </div>
      ) : (
        <div 
          onClick={handleMinimize}
          className="bg-[#09173d] py-2 px-4 text-xs text-[#ffd700] font-pixel text-center cursor-pointer hover:bg-[#0c1f52]"
        >
          [ WINDOW MINIMIZED — CLICK TITLE BAR OR HERE TO EXPAND ]
        </div>
      )}

      {/* Classic OS Inset Status Bar at Bottom */}
      {!isMinimized && (
        <div className="bg-[#071330] border-t border-[#132c6b] px-3 py-1 flex items-center justify-between text-[11px] font-mono text-[#8ca3d4] select-none">
          <div className="flex items-center gap-2 truncate">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4dd8ff] flex-shrink-0" />
            <span className="truncate">{statusBarText}</span>
          </div>
          <div className="flex items-center gap-3 pl-2 flex-shrink-0 text-[10px]">
            <span className="hidden sm:inline border-l border-[#1b3a8a] pl-2 text-[#ffb800]">
              {secondaryStatus}
            </span>
            <span className="font-bold text-[#4dd8ff] tracking-tighter">///</span>
          </div>
        </div>
      )}
    </div>
  );
};
