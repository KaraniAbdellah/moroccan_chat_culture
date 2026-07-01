import React from 'react';
import { LuLayoutGrid, LuStar } from 'react-icons/lu';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 md:px-8 py-5 bg-transparent absolute top-0 left-0 w-full z-20">
      {/* Menu */}
      <button
        className="flex items-center justify-center bg-[#241C15]/30 hover:bg-[#241C15]/45 text-[#F2E8D5] p-3 rounded-2xl backdrop-blur-md border border-[#F2E8D5]/15 transition-colors shadow-sm"
        aria-label="Faryan l-menu"
      >
        <LuLayoutGrid className="w-5 h-5" />
      </button>

      {/* Wordmark */}
      <div className="flex items-center gap-2 select-none">
        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#C1502E] shadow-md">
          <LuStar className="w-3.5 h-3.5 text-[#F2E8D5]" />
        </span>
        <div className="flex flex-col leading-none">
          <span
            className="text-[#F2E8D5] text-lg font-bold tracking-wide"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            Atlas
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#D4A017]">
            Darija AI
          </span>
        </div>
      </div>

      {/* Status pill */}
      <div className="hidden sm:flex items-center gap-1.5 bg-[#241C15]/30 backdrop-blur-md border border-[#F2E8D5]/15 rounded-full px-3.5 py-2 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6FA98A] animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F2E8D5]/85">
          Online
        </span>
      </div>
    </header>
  );
}