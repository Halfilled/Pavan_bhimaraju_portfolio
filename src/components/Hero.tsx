import React from 'react';
import { ArrowRight, Briefcase, Layers, Users, Lightbulb } from 'lucide-react';
import pavanPortrait from '../assets/pavan-speaking-podium.png';

interface HeroProps {
  onOpenAgent: (initialQuery?: string) => void;
  isAgentOpen?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAgent }) => {
  const quickPills = [
    {
      title: "AI & LLMs",
      subtitle: "Explore. Build. Solve.",
      icon: <Lightbulb className="w-5 h-5 text-[#EAAA00]" />,
      bg: "bg-[#EAAA00]/15",
      query: "Tell me about your AI & LLMs work"
    },
    {
      title: "Backend Systems",
      subtitle: "Design. Develop. Scale.",
      icon: <Layers className="w-5 h-5 text-[#3A0F34]" />,
      bg: "bg-[#C6D0D9]/80",
      query: "Tell me about your Backend Systems work"
    },
    {
      title: "Leadership",
      subtitle: "Organize. Collaborate. Create Impact.",
      icon: <Users className="w-5 h-5 text-[#EAAA00]" />,
      bg: "bg-[#3A0F34]/10",
      query: "Tell me about your Leadership work"
    }
  ];

  return (
    <section 
      id="agent" 
      className="relative w-full min-h-screen lg:h-screen pt-20 lg:pt-24 pb-8 flex items-center bg-[#C6D0D9] overflow-hidden select-none"
    >
      
      {/* 
        SPLIT BACKGROUND:
        Deep Aubergine panel occupying the far-right portion on desktop (~28%), extending seamlessly to the viewport edges
      */}
      <div className="hidden lg:block absolute inset-y-0 top-0 bottom-0 right-0 h-full w-[27%] xl:w-[28%] 2xl:w-[28%] bg-[#3A0F34] z-0 pointer-events-none">
        {/* Subtle geometric precision lines on the dark panel */}
        <div className="absolute top-24 right-14 w-px h-36 bg-[#EAAA00]/40 pointer-events-none hidden xl:block" />
        <div className="absolute top-56 right-8 w-16 h-0.5 bg-[#EAAA00] transform -rotate-45 pointer-events-none hidden xl:block" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN (7 cols): Editorial Typography, Description, 3 Cards & CTA */}
          <div className="lg:col-span-7 space-y-5 max-w-xl xl:max-w-2xl py-2">
            
            {/* Small introductory line with Marigold vertical accent */}
            <div className="flex items-center space-x-2.5">
              <span className="h-4 w-0.5 bg-[#EAAA00] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#5A3A54] uppercase font-bold">
                BUILD • LEARN • CREATE • IMPACT
              </span>
            </div>

            {/* Large, Prominent Name with Geometric Dot Accent */}
            <div className="relative pt-1">
              <div className="space-y-0.5">
                <h1 className="text-5xl sm:text-7xl xl:text-[5.5rem] font-black tracking-tight text-[#3A0F34] leading-[0.9] uppercase font-display">
                  PAVAN
                </h1>
                <h1 className="text-5xl sm:text-7xl xl:text-[5.5rem] font-black tracking-tight text-[#3A0F34] leading-[0.9] uppercase font-display flex items-baseline">
                  <span>BHIMARAJU</span>
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5 rounded-full bg-[#EAAA00] inline-block ml-1.5 align-baseline" />
                </h1>
              </div>

              {/* 4x4 Subtle Dotted Coordinate Matrix behind/beside name */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 xl:right-10 grid grid-cols-4 gap-3 pointer-events-none opacity-30 hidden sm:grid">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3A0F34]" />
                ))}
              </div>
            </div>

            {/* Introductory Description */}
            <p className="text-sm sm:text-base text-[#5A3A54] font-sans leading-relaxed max-w-xl pt-1">
              Computer Science student building AI-powered applications and thoughtful software experiences. Exploring technology, entrepreneurship, and ideas that create real impact.
            </p>

            {/* Three Compact Information Cards matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {quickPills.map((pill, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenAgent(pill.query)}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#3A0F34]/10 shadow-sm flex items-start space-x-3 hover:border-[#EAAA00] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className={`p-2 rounded-xl ${pill.bg} shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center`}>
                    {pill.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#3A0F34] leading-tight">
                      {pill.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#5A3A54] font-medium mt-1 leading-tight">
                      {pill.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* "Ask About Me" Button with briefcase icon matching reference */}
            <div className="pt-3 flex items-center">
              <button
                onClick={() => onOpenAgent()}
                className="group inline-flex items-center space-x-3 px-7 py-3.5 bg-[#EAAA00] hover:bg-[#D49800] text-[#3A0F34] font-black text-sm sm:text-base rounded-full shadow-lg shadow-[#EAAA00]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Briefcase className="w-5 h-5 text-[#3A0F34]" />
                <span>Ask About Me</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN (5 cols): Large Circular Portrait & Surrounding Geometric Design */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 lg:py-0">
            
            <div className="relative flex items-center justify-center">
              
              {/* 1. Large subtle Ice Silver curved backdrop */}
              <div className="absolute -left-12 -bottom-10 w-[360px] h-[360px] xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-tr from-[#CAD2D8]/50 to-transparent pointer-events-none -z-0 hidden sm:block" />

              {/* 2. Solid Marigold circle at top-left (approx 10:30 o'clock) */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:left-2 xl:left-5 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#EAAA00] shadow-md z-0 pointer-events-none" />

              {/* 3. Circular outer thin outline ring & top-right Marigold arc */}
              <svg 
                className="absolute -inset-5 sm:-inset-7 w-[calc(100%+2.5rem)] sm:w-[calc(100%+3.5rem)] h-[calc(100%+2.5rem)] sm:h-[calc(100%+3.5rem)] pointer-events-none z-10" 
                viewBox="0 0 500 500" 
                fill="none"
              >
                {/* Thin outer concentric ring */}
                <circle cx="250" cy="250" r="226" stroke="#3A0F34" strokeWidth="1.5" strokeOpacity="0.35" />
                {/* Marigold concentric accent arc on top-right */}
                <path d="M 370,60 A 242,242 0 0,1 488,205" stroke="#EAAA00" strokeWidth="3.5" strokeLinecap="round" />
              </svg>

              {/* 4. Small solid Marigold circle at bottom-left (approx 8 o'clock on outer ring) */}
              <div className="absolute bottom-5 left-3 sm:bottom-7 sm:left-5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EAAA00] z-20 pointer-events-none shadow-sm ring-2 ring-white/50" />

              {/* 5. Clean Circular Frame with Pavan's Real Speaking Photograph */}
              <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] xl:w-[400px] xl:h-[400px] rounded-full border-[5px] sm:border-[6px] border-white shadow-2xl overflow-hidden relative z-10 bg-[#CAD2D8] flex items-center justify-center">
                <img 
                  src={pavanPortrait} 
                  alt="Pavan Bhimaraju speaking at podium" 
                  className="w-full h-full object-cover object-center select-none"
                  loading="eager"
                />
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
