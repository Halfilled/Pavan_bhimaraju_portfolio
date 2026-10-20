import React from 'react';
import { ArrowRight, Bot, Layers, Users } from 'lucide-react';

interface HeroProps {
  onOpenAgent: (initialQuery?: string) => void;
  isAgentOpen?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAgent }) => {
  const quickPills = [
    {
      title: "AI & LLMs",
      subtitle: "Explore. Build. Solve.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00A9C7]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 0-4 4v1H7a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.82V15a3 3 0 0 0 3 3h1v1a3 3 0 0 0 6 0v-1h1a3 3 0 0 0 3-3v-1.18A3 3 0 0 0 20 11V10a3 3 0 0 0-3-3h-1V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      ),
      bg: "bg-[#00A9C7]/15"
    },
    {
      title: "Backend Systems",
      subtitle: "Design. Develop. Scale.",
      icon: <Layers className="w-5 h-5 text-[#167D7F]" />,
      bg: "bg-[#167D7F]/15"
    },
    {
      title: "Leadership",
      subtitle: "Organize. Collaborate. Create Impact.",
      icon: <Users className="w-5 h-5 text-[#FF791F]" />,
      bg: "bg-[#FF791F]/15"
    }
  ];

  return (
    <section 
      id="agent" 
      className="relative w-full h-[100vh] min-h-[640px] max-h-[1080px] pt-16 flex items-center bg-[#36393F] overflow-hidden select-none"
    >
      
      {/* 
        FULL SCREEN EDGE-TO-EDGE VECTOR SVG CANVAS:
        Takes up the entire right screen from center to the right window edge.
        Zero margin, zero padding, zero empty gutters on the right or edges!
      */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <svg 
          className="absolute top-0 right-0 w-full h-full lg:w-[65%] xl:w-[60%] object-cover object-right" 
          viewBox="0 0 1000 900" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Smooth Ambient Background Glow extending to the edge */}
            <radialGradient id="skyGlowFull" cx="70%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#454951" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#36393F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#36393F" stopOpacity="0" />
            </radialGradient>

            {/* Circle Cyan Gradient */}
            <linearGradient id="circleGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A9C7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#167D7F" stopOpacity="0.15" />
            </linearGradient>

            {/* Dark Deep Charcoal Slab */}
            <linearGradient id="darkCobaltSlabFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#25272C" />
              <stop offset="50%" stopColor="#1B1C20" />
              <stop offset="100%" stopColor="#141518" />
            </linearGradient>

            {/* Vibrant Electric Cyan Slab */}
            <linearGradient id="cyanSlabFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A9C7" />
              <stop offset="60%" stopColor="#008EA7" />
              <stop offset="100%" stopColor="#06697C" />
            </linearGradient>

            {/* Signal Orange Gradient */}
            <linearGradient id="orangeGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF791F" />
              <stop offset="100%" stopColor="#E66512" />
            </linearGradient>
          </defs>

          {/* 1. Large Ambient Sky Gradient reaching edge */}
          <rect width="1000" height="900" fill="url(#skyGlowFull)" />

          {/* 2. Dotted Coordinate Matrix in Upper Left */}
          <g opacity="0.45" fill="#00A9C7">
            {[...Array(6)].map((_, r) =>
              [...Array(8)].map((_, c) => (
                <circle 
                  key={`${r}-${c}`} 
                  cx={180 + c * 22} 
                  cy={240 + r * 22} 
                  r="2" 
                />
              ))
            )}
          </g>

          {/* 3. Soft Geometric Disc */}
          <circle cx="620" cy="460" r="250" fill="url(#circleGradFull)" />

          {/* 4. Diagonal Wireframe Construction Line 1 */}
          <line x1="180" y1="360" x2="380" y2="160" stroke="#00A9C7" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="380" y1="160" x2="480" y2="260" stroke="#00A9C7" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* 5. Precision Orange Coordinate Anchor Dot */}
          <circle cx="280" cy="320" r="10" fill="url(#orangeGradFull)" />
          <circle cx="280" cy="320" r="16" stroke="#FF791F" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* 6. Vertical Guide Line */}
          <line x1="460" y1="80" x2="460" y2="340" stroke="#5C6068" strokeWidth="2.5" />

          {/* 7. Diagonal Orange Accent Ray */}
          <line x1="440" y1="410" x2="590" y2="200" stroke="#FF791F" strokeWidth="2.5" />

          {/* 8. The Sharp Signal Orange Angular Wedge Pillar */}
          <polygon 
            points="380,480 415,440 415,820 380,780" 
            fill="url(#orangeGradFull)" 
          />
          <polygon 
            points="380,480 415,440 415,480" 
            fill="#FFA86B" 
          />

          {/* 9. Light Charcoal Triangular Facet */}
          <polygon 
            points="415,440 620,350 620,820 415,820" 
            fill="#454951" 
            opacity="0.85" 
          />

          {/* 10. Large Main Diagonal Electric Cyan Slab */}
          <polygon 
            points="460,900 700,340 840,340 600,900" 
            fill="url(#cyanSlabFull)" 
          />

          {/* 11. Large Deep Dark Monolith reaching full right edge (x=1000) */}
          <polygon 
            points="580,900 800,220 1000,160 1000,900" 
            fill="url(#darkCobaltSlabFull)" 
          />

          {/* 12. Monolith Surface Detail & Highlights */}
          <line x1="800" y1="220" x2="580" y2="900" stroke="#00A9C7" strokeWidth="2" strokeOpacity="0.7" />
          <line x1="840" y1="210" x2="620" y2="900" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.25" />

          {/* 13. Deep Lower Left Orange Wedge Border */}
          <polygon 
            points="240,900 500,560 540,600 280,900" 
            fill="url(#orangeGradFull)" 
            opacity="0.9"
          />

          {/* 14. Floating Cyan Precision Guide Line at bottom right reaching edge */}
          <line x1="680" y1="860" x2="820" y2="670" stroke="#00A9C7" strokeWidth="2.5" />
        </svg>

        {/* Soft Left Edge Fade into charcoal page */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#36393F] to-transparent pointer-events-none" />
      </div>

      {/* 
        LEFT SIDE CONTENT CONTAINER:
        Standardized to max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 for uniform left alignment across the site!
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols): Content spanning smoothly from the left side */}
          <div className="lg:col-span-7 space-y-6 max-w-xl xl:max-w-2xl py-2">
            
            {/* Small tracking subhead */}
            <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D5D7DC] uppercase font-bold">
              BUILD • LEARN • CREATE • IMPACT
            </div>

            {/* Headline matching user font & styling */}
            <div className="space-y-0.5">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#F5F7FA] leading-[0.92] uppercase font-display">
                PAVAN
              </h1>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#00A9C7] leading-[0.92] uppercase font-display">
                BHIMARAJU
              </h1>
              <div className="h-1.5 w-16 bg-[#FF791F] rounded-full mt-3" />
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-[#D5D7DC] font-sans leading-relaxed pt-1 max-w-xl">
              Computer Science student building AI-powered applications and thoughtful software experiences. Exploring technology, entrepreneurship, and ideas that create real impact.
            </p>

            {/* 3 Reference Pill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {quickPills.map((pill, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenAgent(`Tell me about your ${pill.title} work`)}
                  className="p-4 rounded-2xl bg-[#F1F3F5] border border-[#5C6068]/40 shadow-soft-card flex items-start space-x-3 hover:shadow-md hover:border-[#00A9C7] transition-all cursor-pointer group"
                >
                  <div className={`p-2.5 rounded-xl ${pill.bg} shrink-0 group-hover:scale-105 transition-transform`}>
                    {pill.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                      {pill.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">
                      {pill.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature CTA: "Ask About Me" button with playful rays */}
            <div className="pt-3 flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => onOpenAgent()}
                  className="group inline-flex items-center space-x-3 px-7 py-3.5 bg-[#00A9C7] hover:bg-[#0092ad] text-white font-extrabold text-sm sm:text-base rounded-full shadow-lg shadow-[#00A9C7]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Bot className="w-5 h-5 text-white" />
                  <span>Ask About Me</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Decorative small rays matching screenshot */}
                <div className="absolute -top-2.5 -right-2 text-[#00A9C7] pointer-events-none">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <path d="M8 1v3M15 8h-3M13 3l-2 2" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column spacer to let full-bleed graphics show through */}
          <div className="hidden lg:block lg:col-span-5 h-[500px] pointer-events-none" />

        </div>

      </div>

    </section>
  );
};
