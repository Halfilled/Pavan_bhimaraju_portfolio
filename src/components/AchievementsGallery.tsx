import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink, Award, CheckCircle2, Calendar, Building, Sparkles, MapPin } from 'lucide-react';

interface AchievementPoster {
  id: string;
  cardNum: string;
  badgeLabel: string;
  headlineLines: string[];
  headlineColor: string;
  headlineHighlightWord?: string;
  headlineHighlightColor?: string;
  headlineSize: string;
  supportingItems: string[];
  theme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    stampColor: string;
    accentGlow: string;
    decorColor: string;
    cardTextColor: string;
    subTextColor: string;
  };
  modal: {
    title: string;
    subtitle: string;
    issuer: string;
    date: string;
    scoreOrResult?: string;
    overview: string;
    highlights: string[];
  };
}

export const AchievementsGallery: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<AchievementPoster | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 5 Verified Cards with softer, lighter pastel tinted themes matching Pavan's portfolio palette
  const posters: AchievementPoster[] = [
    {
      id: 'nptel-java',
      cardNum: '01',
      badgeLabel: 'NPTEL · IIT KHARAGPUR',
      headlineLines: ['NPTEL', 'JAVA'],
      headlineColor: 'text-[#0B1F33]',
      headlineHighlightWord: 'JAVA',
      headlineHighlightColor: 'text-[#D97706]',
      headlineSize: 'text-6xl sm:text-7xl lg:text-8xl',
      supportingItems: [
        'Programming in Java',
        'IIT Kharagpur',
        '2024',
        'Score: 86%'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FEF0D0]',
        border: 'border-[#FDE68A]',
        badgeBg: 'bg-[#FEF3C7]',
        badgeText: 'text-[#92400E]',
        stampColor: '#D97706',
        accentGlow: 'rgba(245, 158, 11, 0.15)',
        decorColor: '#D97706',
        cardTextColor: 'text-[#0B1F33]',
        subTextColor: 'text-[#92400E]'
      },
      modal: {
        title: 'NPTEL Programming in Java',
        subtitle: 'Elite + Silver National Certification',
        issuer: 'IIT Kharagpur & Ministry of Education, Govt. of India',
        date: '2024',
        scoreOrResult: 'Score: 86% (Top Performer)',
        overview: 'Comprehensive certification program conducted by IIT Kharagpur covering foundational and advanced Java paradigms. Demonstrated in-depth proficiency in object-oriented programming principles, modern concurrent architectures, and runtime robustness.',
        highlights: [
          'Scored 86% with Elite + Silver medal recognition from IIT Kharagpur faculty.',
          'Mastered Java Collections Framework, Generics, Stream API, and Lambda expressions.',
          'Implemented multi-threaded process synchronizations, thread safety, and JVM memory profiling.',
          'Rigorous 12-week national curriculum with proctored in-person algorithmic examinations.'
        ]
      }
    },
    {
      id: 'smart-india-hackathon',
      cardNum: '02',
      badgeLabel: 'MINISTRY OF EDUCATION',
      headlineLines: ['SMART', 'INDIA', 'SIH'],
      headlineColor: 'text-[#0B1F33]',
      headlineHighlightWord: 'SIH',
      headlineHighlightColor: 'text-[#F97316]',
      headlineSize: 'text-5xl sm:text-6xl lg:text-7xl',
      supportingItems: [
        'Blue Sprout',
        'Smart Rainwater Assessment Application'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFF9F6] via-[#FFF0E8] to-[#FED7C8]',
        border: 'border-[#FFC7B0]',
        badgeBg: 'bg-[#FFEDD5]',
        badgeText: 'text-[#C2410C]',
        stampColor: '#EA580C',
        accentGlow: 'rgba(234, 88, 12, 0.15)',
        decorColor: '#F97316',
        cardTextColor: 'text-[#0B1F33]',
        subTextColor: 'text-[#C2410C]'
      },
      modal: {
        title: 'Smart India Hackathon (SIH)',
        subtitle: 'Blue Sprout — Smart Rainwater Assessment System',
        issuer: 'Ministry of Education Innovation Cell · Govt. of India',
        date: 'National Level Hackathon',
        scoreOrResult: 'Selected Innovation Solution',
        overview: 'Conceived and engineered "Blue Sprout", an automated rainwater harvesting feasibility and catchment assessment platform built for the Smart India Hackathon to solve urban groundwater depletion.',
        highlights: [
          'Engineered algorithmic rainwater harvesting volume calculators based on historical rainfall and rooftop catchment.',
          'Built GIS mapping utilities to analyze soil permeability, runoff coefficients, and recharge pit dimensions.',
          'Developed an interactive consumer calculator providing cost estimation and return-on-investment metrics.',
          'Presented the complete end-to-end technical prototype to national evaluators and jury panels.'
        ]
      }
    },
    {
      id: 'web-dev-internship',
      cardNum: '03',
      badgeLabel: 'ENGINEERING INTERNSHIP',
      headlineLines: ['WEB', 'DEVELOPMENT', 'INTERNSHIP'],
      headlineColor: 'text-[#0B1F33]',
      headlineHighlightWord: 'INTERNSHIP',
      headlineHighlightColor: 'text-[#2563EB]',
      headlineSize: 'text-4xl sm:text-5xl lg:text-[3.25rem]',
      supportingItems: [
        'TEKNOV8R',
        'May–July 2025'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#DBEAFE]',
        border: 'border-[#BFDBFE]',
        badgeBg: 'bg-[#DBEAFE]',
        badgeText: 'text-[#1E40AF]',
        stampColor: '#2563EB',
        accentGlow: 'rgba(37, 99, 235, 0.15)',
        decorColor: '#3B82F6',
        cardTextColor: 'text-[#0B1F33]',
        subTextColor: 'text-[#1E40AF]'
      },
      modal: {
        title: 'Full-Stack Web Development Internship',
        subtitle: 'Enterprise Software Engineering & Architecture',
        issuer: 'TEKNOV8R',
        date: 'May–July 2025',
        scoreOrResult: 'Completed Internship with Distinction',
        overview: 'Selected for an intensive Web Development Internship at TEKNOV8R, contributing to production-grade client portals, robust API integrations, and modern reactive interface systems.',
        highlights: [
          'Collaborated with senior software architects to develop modular, reusable React and Django frontend components.',
          'Implemented secure REST endpoints, JWT authentication workflows, and token refresh mechanisms.',
          'Optimized SQL query execution plans and database indexing strategies to boost page load performance.',
          'Adhered to industry Git branching hygiene, automated CI testing, and responsive cross-browser audits.'
        ]
      }
    },
    {
      id: 'national-entrepreneurship-challenge',
      cardNum: '04',
      badgeLabel: 'IIT BOMBAY E-CELL',
      headlineLines: ['NATIONAL', 'ENTREPRENEURSHIP', 'CHALLENGE'],
      headlineColor: 'text-[#0B1F33]',
      headlineHighlightWord: 'CHALLENGE',
      headlineHighlightColor: 'text-[#00A9C2]',
      headlineSize: 'text-3xl sm:text-4xl lg:text-[2.65rem]',
      supportingItems: [
        'IIT Bombay',
        'Team qualified for the finals'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#F6FBFC] via-[#EBF7F9] to-[#D5F0F5]',
        border: 'border-[#A5E3EB]',
        badgeBg: 'bg-[#D5F0F5]',
        badgeText: 'text-[#0E7490]',
        stampColor: '#00A9C2',
        accentGlow: 'rgba(0, 169, 194, 0.15)',
        decorColor: '#00A9C2',
        cardTextColor: 'text-[#0B1F33]',
        subTextColor: 'text-[#0E7490]'
      },
      modal: {
        title: 'National Entrepreneurship Challenge (NEC)',
        subtitle: 'National Finalist Delegation',
        issuer: 'Entrepreneurship Cell, IIT Bombay',
        date: 'National Level Competition',
        scoreOrResult: 'Qualified for National Finals',
        overview: 'Spearheaded the official ANITS collegiate entrepreneurship team in the National Entrepreneurship Challenge conducted by IIT Bombay, competing across enterprise pitch rounds and venture creation tasks.',
        highlights: [
          'Led our institution’s delegation to qualify for the prestigious National Finals at IIT Bombay.',
          'Curated and submitted venture market research, financial forecasting models, and customer acquisition hypotheses.',
          'Conducted campus-wide awareness campaigns, founder masterclasses, and entrepreneurial workshops.',
          'Ranked among premier participating collegiate entrepreneurship cells across India.'
        ]
      }
    },
    {
      id: 'bizverve-vice-president',
      cardNum: '05',
      badgeLabel: 'LEADERSHIP TENURE',
      headlineLines: ['BIZVERVE', 'VICE', 'PRESIDENT'],
      headlineColor: 'text-[#0B1F33]',
      headlineHighlightWord: 'PRESIDENT',
      headlineHighlightColor: 'text-[#0D9488]',
      headlineSize: 'text-4xl sm:text-5xl lg:text-[3.5rem]',
      supportingItems: [
        'Entrepreneurship Club',
        'ANITS'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#F6FDFB] via-[#E6F8F4] to-[#D1F2EA]',
        border: 'border-[#99EAD8]',
        badgeBg: 'bg-[#CCFBF1]',
        badgeText: 'text-[#0F766E]',
        stampColor: '#0F766E',
        accentGlow: 'rgba(13, 148, 136, 0.15)',
        decorColor: '#14B8A6',
        cardTextColor: 'text-[#0B1F33]',
        subTextColor: 'text-[#0F766E]'
      },
      modal: {
        title: 'BiZverve Vice President',
        subtitle: 'Executive Leadership & Startup Ecosystem Development',
        issuer: 'BiZverve · ANITS',
        date: 'Executive Tenure',
        scoreOrResult: 'Executive Leadership Board',
        overview: 'Served as Vice President of BiZverve, steering collegiate entrepreneurship drives, inter-college summits, and cross-disciplinary technical incubations at ANITS.',
        highlights: [
          'Organized and executed a flagship regional inter-college startup summit bringing together 250+ student founders and innovators.',
          'Conducted interactive speaker series hosting industry leaders, alumni entrepreneurs, and venture mentors.',
          'Mentored early-stage student concepts and facilitated pitch reviews, prototyping sessions, and investor presentations.',
          'Cultivated strategic partnerships between student builders and institutional innovation bodies.'
        ]
      }
    }
  ];

  // Carousel scroll functions
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Staggered vertical alternating offset classes matching the reference image:
  // Card 0: higher (-translate-y-6)
  // Card 1: lower (+translate-y-6)
  // Card 2: higher (-translate-y-6)
  // Card 3: lower (+translate-y-6)
  // Card 4: higher (-translate-y-6)
  const getStaggerClass = (index: number) => {
    return index % 2 === 0 
      ? '-translate-y-3 sm:-translate-y-6 lg:-translate-y-7' 
      : 'translate-y-3 sm:translate-y-6 lg:translate-y-7';
  };

  // Render stylized isometric abstract artwork inside cards to match the reference's editorial flair
  const renderCardArtwork = (id: string, color: string) => {
    switch (id) {
      case 'nptel-java':
        // Layered isometric block with stamp
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,35 50,55 15,35" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2.5" />
            <polygon points="15,35 50,55 50,85 15,65" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2.5" />
            <polygon points="85,35 50,55 50,85 85,65" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2.5" />
            <circle cx="50" cy="35" r="8" fill="#F97316" />
            <path d="M47 35L49 37L54 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'smart-india-hackathon':
        // Isometric stepped pyramid / water catchment ripples
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <path d="M50 15L80 32V68L50 85L20 68V32L50 15Z" stroke={color} strokeWidth="2.5" fill="white" fillOpacity="0.6" />
            <path d="M50 28L70 40V60L50 72L30 60V40L50 28Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" />
            <circle cx="50" cy="50" r="10" fill="white" />
            <circle cx="50" cy="50" r="4" fill="#EA580C" />
          </svg>
        );
      case 'web-dev-internship':
        // Isometric 3D component layers / browser cards
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,32 50,54 10,32" fill="white" fillOpacity="0.85" stroke={color} strokeWidth="2.5" />
            <polygon points="50,26 90,48 50,70 10,48" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2.5" />
            <polygon points="50,42 90,64 50,86 10,64" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2.5" />
          </svg>
        );
      case 'national-entrepreneurship-challenge':
        // Ascending geometric staircase / trophy beacon
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,12 82,30 50,48 18,30" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2.5" />
            <polygon points="18,30 50,48 50,78 18,60" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2.5" />
            <polygon points="82,30 50,48 50,78 82,60" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="2.5" />
            <circle cx="50" cy="30" r="6" fill="#F97316" />
          </svg>
        );
      case 'bizverve-vice-president':
        // Isometric folding prism / growth crest
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,35 50,55 15,35" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2.5" />
            <polygon points="50,55 85,35 85,75 50,95" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2.5" />
            <polygon points="50,55 15,35 15,75 50,95" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-[#36393F] select-none overflow-hidden">
      
      {/* Huge Faint Watermark Text echoing reference background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[15vw] font-black uppercase text-white/[0.04] tracking-widest font-poster whitespace-nowrap z-0">
        AWARDS & HONORS
      </div>

      {/* Standardized container matching Hero, My Skills, My Projects, and Beyond the Code */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Left/Right Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 lg:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] font-display whitespace-nowrap">
              HONORS & <span className="text-[#00A9C7]">ACHIEVEMENTS</span>
            </h2>
            <div className="h-1.5 w-16 bg-[#FF791F] rounded-full mt-3" />
            <p className="text-sm sm:text-base text-[#D5D7DC] font-sans mt-2.5">
              Distinctions, certifications, competitive finals, and verified leadership milestones.
            </p>
          </div>

          {/* Carousel Arrow Navigation matching Reference */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#D5D7DC] hidden sm:inline mr-2">
              Browse Honors:
            </span>
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#454951] border border-[#5C6068] text-[#F5F7FA] shadow-md hover:bg-[#00A9C7] hover:border-[#00A9C7] hover:text-white transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#00A9C7]"
              aria-label="Previous achievement card"
              title="Previous card"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#454951] border border-[#5C6068] text-[#F5F7FA] shadow-md hover:bg-[#00A9C7] hover:border-[#00A9C7] hover:text-white transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#00A9C7]"
              aria-label="Next achievement card"
              title="Next card"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>

      {/* 
        HORIZONTAL STAGGERED POSTER CAROUSEL
        - Overflow-x scroll with alternating vertical translation (staggered up-and-down).
        - Softer, lighter pastel tinted cards that blend seamlessly with the portfolio background.
        - Partial neighbor cards peek at the edges.
        - Bold, funky, condensed typography that fills the poster.
      */}
      <div 
        ref={carouselRef}
        className="w-full overflow-x-auto scrollbar-none scroll-smooth pb-16 pt-8 px-4 sm:px-8 lg:px-12 relative z-10"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-10 min-w-max mx-auto py-10 px-4">
          
          {posters.map((poster, index) => {
            const staggerOffset = getStaggerClass(index);

            return (
              <div
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                style={{ scrollSnapAlign: 'center' }}
                className={`relative w-[280px] sm:w-[320px] lg:w-[340px] h-[480px] sm:h-[510px] lg:h-[530px] rounded-3xl ${poster.theme.bg} ${poster.theme.border} border-2 shadow-xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 transform ${staggerOffset} hover:scale-[1.03] hover:z-30 hover:shadow-2xl group select-none`}
              >
                
                {/* Top Poster Meta Row */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className={`inline-block px-2.5 py-1 rounded-md ${poster.theme.badgeBg} ${poster.theme.badgeText} text-[10px] sm:text-[11px] font-mono font-black tracking-wider uppercase border border-black/5 shadow-xs`}>
                      {poster.badgeLabel}
                    </span>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block pt-0.5 font-semibold">
                      PAVAN BHIMARAJU · PORTFOLIO
                    </div>
                  </div>

                  {/* Stamp Number */}
                  <div className="text-right">
                    <span className="font-poster text-2xl sm:text-3xl font-black text-gray-400/80 tracking-normal block leading-none">
                      #{poster.cardNum}
                    </span>
                  </div>
                </div>

                {/* 
                  MAIN DISPLAY HEADLINE:
                  Oversized, bold, funky condensed poster typography stacked across multiple lines
                  (Bebas Neue / Anton font system)
                */}
                <div className="my-auto py-2">
                  <div className="flex flex-col space-y-0 tracking-tight font-poster leading-[0.88] select-none">
                    {poster.headlineLines.map((line, lIdx) => {
                      const isHighlight = poster.headlineHighlightWord === line;
                      const wordColor = isHighlight ? poster.headlineHighlightColor : poster.headlineColor;

                      return (
                        <span 
                          key={lIdx}
                          className={`${poster.headlineSize} font-black ${wordColor} group-hover:tracking-normal transition-all duration-300`}
                        >
                          {line}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Abstract Geometric Graphic Element echoing the reference */}
                <div className="absolute right-4 bottom-24 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {renderCardArtwork(poster.id, poster.theme.decorColor)}
                </div>

                {/* Bottom Section: Supporting Text + Interactive Prompt */}
                <div className="pt-4 border-t border-black/10 relative z-10 space-y-2.5">
                  
                  {/* Verified Supporting Details */}
                  <div className="space-y-0.5">
                    {poster.supportingItems.map((item, iIdx) => (
                      <div 
                        key={iIdx} 
                        className={`text-xs sm:text-[13px] font-sans font-bold ${poster.theme.cardTextColor} leading-tight`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Interactive Tap Prompt */}
                  <div className="flex items-center justify-between pt-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-extrabold ${poster.theme.subTextColor} flex items-center space-x-1 group-hover:text-[#0B1F33] transition-colors`}>
                      <span>Explore details</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>

                    <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* 
        EXPANDED DEDICATED DETAIL MODAL VIEW
        Triggered when any poster card is clicked, returning seamlessly on close.
      */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#36393F]/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#F1F3F5] rounded-3xl shadow-2xl border border-[#5C6068] overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header Banner matching Soft Poster Theme */}
            <div className={`p-6 sm:p-8 ${selectedPoster.theme.bg} border-b ${selectedPoster.theme.border} relative overflow-hidden text-[#0B1F33]`}>
              
              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-[#FF791F] text-[#0B1F33] hover:text-white shadow-sm flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-2">
                <span className={`inline-block px-3 py-1 rounded-md ${selectedPoster.theme.badgeBg} ${selectedPoster.theme.badgeText} text-xs font-mono font-black uppercase tracking-wider border border-black/5 shadow-xs`}>
                  {selectedPoster.badgeLabel} · #{selectedPoster.cardNum}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight">
                  {selectedPoster.modal.title}
                </h3>

                <p className="text-sm sm:text-base font-sans font-medium text-gray-700">
                  {selectedPoster.modal.subtitle}
                </p>
              </div>

              {/* Background watermark badge */}
              <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
                {renderCardArtwork(selectedPoster.id, selectedPoster.theme.decorColor)}
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* Metadata Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 flex items-center space-x-3">
                  <Building className="w-5 h-5 text-[#00A9C7] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Awarding Institution</div>
                    <div className="text-xs sm:text-sm font-bold text-[#0B1F33]">{selectedPoster.modal.issuer}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#FF791F] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Timeline / Status</div>
                    <div className="text-xs sm:text-sm font-bold text-[#0B1F33]">
                      {selectedPoster.modal.date} {selectedPoster.modal.scoreOrResult ? `· ${selectedPoster.modal.scoreOrResult}` : ''}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#167D7F] font-mono">
                  Overview & Context
                </h4>
                <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                  {selectedPoster.modal.overview}
                </p>
              </div>

              {/* Key Highlights / Outcomes */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#167D7F] font-mono">
                  Key Accomplishments & Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedPoster.modal.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#E4E7EB] border-t border-[#5C6068]/30 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">
                Pavan Bhimaraju · Verified Achievement
              </span>

              <button
                onClick={() => setSelectedPoster(null)}
                className="px-5 py-2 rounded-xl bg-[#36393F] text-white text-xs sm:text-sm font-bold hover:bg-[#00A9C7] transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
