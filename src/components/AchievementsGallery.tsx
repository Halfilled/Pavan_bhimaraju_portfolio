import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Building, Calendar, CheckCircle2 } from 'lucide-react';

interface AchievementPoster {
  id: string;
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

  // 5 Verified Cards harmonized with Ice Silver, Deep Aubergine, and Marigold
  const posters: AchievementPoster[] = [
    {
      id: 'national-entrepreneurship-challenge',
      badgeLabel: 'IIT BOMBAY E-CELL',
      headlineLines: ['NATIONAL', 'ENTREPRENEURSHIP', 'CHALLENGE'],
      headlineColor: 'text-[#3A0F34]',
      headlineHighlightWord: 'CHALLENGE',
      headlineHighlightColor: 'text-[#EAAA00]',
      headlineSize: 'text-3xl sm:text-4xl lg:text-[2.65rem]',
      supportingItems: [
        'IIT Bombay',
        'National Finalist Team',
        'Venture Incubation'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F4F7F9] to-[#DDE3E8]',
        border: 'border-[#3A0F34]/15 hover:border-[#EAAA00]',
        badgeBg: 'bg-[#3A0F34]',
        badgeText: 'text-[#EAAA00]',
        stampColor: '#EAAA00',
        accentGlow: 'rgba(234, 170, 0, 0.15)',
        decorColor: '#EAAA00',
        cardTextColor: 'text-[#3A0F34]',
        subTextColor: 'text-[#3A0F34]'
      },
      modal: {
        title: 'National Entrepreneurship Challenge (NEC)',
        subtitle: 'National Finalist Delegation · IIT Bombay',
        issuer: 'Entrepreneurship Cell, IIT Bombay',
        date: 'National Level Competition',
        scoreOrResult: 'Qualified for National Finals',
        overview: 'Participated in the premier National Entrepreneurship Challenge conducted by IIT Bombay. Led our collegiate team through rigorous enterprise pitching, venture validation, and operational roadmap challenges to successfully qualify for the National Finals at IIT Bombay.',
        highlights: [
          'Led the institutional collegiate team to qualify for the prestigious National Finals held at IIT Bombay.',
          'Formulated structured business models, feasibility analyses, and market-entry strategies under competitive scrutiny.',
          'Represented ANITS on a national platform, competing with top collegiate innovation cells across India.',
          'Executed campus-wide entrepreneurship drives, mentoring peers on pitch deck curation and startup frameworks.'
        ]
      }
    },
    {
      id: 'bizverve-summit',
      badgeLabel: 'BIZVERVE · ANITS',
      headlineLines: ['BIZVERVE', 'ENTREPRENEURSHIP', 'SUMMIT'],
      headlineColor: 'text-[#3A0F34]',
      headlineHighlightWord: 'SUMMIT',
      headlineHighlightColor: 'text-[#EAAA00]',
      headlineSize: 'text-3xl sm:text-4xl lg:text-[2.65rem]',
      supportingItems: [
        'Vice President · BiZverve',
        '250+ Regional Participants',
        'Business & Skill Conclave'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F6F4F7] to-[#E9DEE7]',
        border: 'border-[#3A0F34]/15 hover:border-[#EAAA00]',
        badgeBg: 'bg-[#EAAA00]/20',
        badgeText: 'text-[#3A0F34]',
        stampColor: '#3A0F34',
        accentGlow: 'rgba(58, 15, 52, 0.12)',
        decorColor: '#3A0F34',
        cardTextColor: 'text-[#3A0F34]',
        subTextColor: 'text-[#3A0F34]'
      },
      modal: {
        title: 'BiZverve Entrepreneurship Summit',
        subtitle: 'Flagship Inter-College Startup & Skills Conclave',
        issuer: 'BiZverve · Business & Entrepreneurship Club, ANITS',
        date: 'Executive Leadership Tenure',
        scoreOrResult: '250+ Participants Across Visakhapatnam',
        overview: 'Served as Vice President of BiZverve, the official Business and Entrepreneurship Club at ANITS. Spearheaded the planning, curation, and execution of the premier inter-college entrepreneurship summit, welcoming over 250+ students from across Visakhapatnam, while orchestrating hands-on workshops centered on business fundamentals, venture ideation, and skill development.',
        highlights: [
          'Organized a landmark inter-college summit uniting 250+ student entrepreneurs, innovators, and delegates across Visakhapatnam.',
          'Directed workshops covering business fundamentals, pitch building, financial forecasting, and modern skill development.',
          'Managed cross-functional student committees, keynote speaker sessions, interactive panel discussions, and founder showcases.',
          'Fostered cross-college collaboration and established lasting regional entrepreneurial networks.'
        ]
      }
    },
    {
      id: 'web-dev-internship',
      badgeLabel: 'TEKNOV8R INTERNSHIP',
      headlineLines: ['WEB', 'DEVELOPMENT', 'INTERNSHIP'],
      headlineColor: 'text-[#3A0F34]',
      headlineHighlightWord: 'INTERNSHIP',
      headlineHighlightColor: 'text-[#EAAA00]',
      headlineSize: 'text-4xl sm:text-5xl lg:text-[3.25rem]',
      supportingItems: [
        'TEKNOV8R · May–July 2025',
        'Teen Wellness Mobile App',
        'UI Screens & Core Features'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F4F7F9] to-[#DDE3E8]',
        border: 'border-[#3A0F34]/15 hover:border-[#EAAA00]',
        badgeBg: 'bg-[#3A0F34]',
        badgeText: 'text-[#EAAA00]',
        stampColor: '#EAAA00',
        accentGlow: 'rgba(234, 170, 0, 0.15)',
        decorColor: '#EAAA00',
        cardTextColor: 'text-[#3A0F34]',
        subTextColor: 'text-[#3A0F34]'
      },
      modal: {
        title: 'Web Development Internship',
        subtitle: 'Teen Wellness Mobile Application Engineering',
        issuer: 'TEKNOV8R',
        date: 'May–July 2025',
        scoreOrResult: 'Completed Internship with Distinction',
        overview: 'Worked as a Web Development Intern at TEKNOV8R from May to July 2025. Contributed directly to the engineering of the Teen Wellness mobile application, crafting responsive, accessible UI screens, integrating core user-centric features, and systematically resolving technical bugs and interface anomalies.',
        highlights: [
          'Contributed to the core development lifecycle of the Teen Wellness mobile application.',
          'Built polished, responsive UI screens ensuring seamless navigation, accessibility, and visual consistency.',
          'Implemented essential wellness tracking features and intuitive interactive components.',
          'Conducted root-cause debugging, performance profiling, and bug fixes to optimize app stability.'
        ]
      }
    },
    {
      id: 'iic-innovation-coordinator',
      badgeLabel: 'IIC · ANITS',
      headlineLines: ['INNOVATION', 'AND', 'ENTREPRENEURSHIP'],
      headlineColor: 'text-[#3A0F34]',
      headlineHighlightWord: 'INNOVATION',
      headlineHighlightColor: 'text-[#EAAA00]',
      headlineSize: 'text-3xl sm:text-4xl lg:text-[2.65rem]',
      supportingItems: [
        'IIC Coordinator · ANITS',
        'Student & Faculty Drives',
        'Creative Solutions & Ideation'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F6F4F7] to-[#E9DEE7]',
        border: 'border-[#3A0F34]/15 hover:border-[#EAAA00]',
        badgeBg: 'bg-[#EAAA00]/20',
        badgeText: 'text-[#3A0F34]',
        stampColor: '#3A0F34',
        accentGlow: 'rgba(58, 15, 52, 0.12)',
        decorColor: '#3A0F34',
        cardTextColor: 'text-[#3A0F34]',
        subTextColor: 'text-[#3A0F34]'
      },
      modal: {
        title: "Institution's Innovation Council (IIC)",
        subtitle: 'Departmental Innovation & Entrepreneurship Coordinator',
        issuer: "Institution's Innovation Council (MoE Cell) · ANITS",
        date: 'Coordinator Tenure',
        scoreOrResult: 'IIC Departmental Coordinator',
        overview: "Served as the Institution's Innovation Council (IIC) Coordinator at ANITS, serving as a primary catalyst connecting students and faculty. Actively coordinated departmental innovation, design thinking, and entrepreneurship initiatives, inspiring students to turn creative concepts into viable, impactful solutions.",
        highlights: [
          'Coordinated departmental innovation and entrepreneurship symposiums, hackathons, and ideation roundtables.',
          'Served as an active bridge between faculty mentors and passionate student innovators.',
          'Encouraged multidisciplinary student cohorts to tackle real-world problems with inventive solutions.',
          'Promoted intellectual property awareness, creative design methodology, and institutional innovation roadmaps.'
        ]
      }
    },
    {
      id: 'ecell-president',
      badgeLabel: 'E-CELL ANITS',
      headlineLines: ['E-CELL', 'CAMPUS', 'LEADERSHIP'],
      headlineColor: 'text-[#3A0F34]',
      headlineHighlightWord: 'LEADERSHIP',
      headlineHighlightColor: 'text-[#EAAA00]',
      headlineSize: 'text-4xl sm:text-5xl lg:text-[3.25rem]',
      supportingItems: [
        'E-Cell President',
        'Venture Incubation Pipeline',
        'Entrepreneurship Ecosystem'
      ],
      theme: {
        bg: 'bg-gradient-to-br from-[#FFFFFF] via-[#F4F7F9] to-[#DDE3E8]',
        border: 'border-[#3A0F34]/15 hover:border-[#EAAA00]',
        badgeBg: 'bg-[#3A0F34]',
        badgeText: 'text-[#EAAA00]',
        stampColor: '#EAAA00',
        accentGlow: 'rgba(234, 170, 0, 0.15)',
        decorColor: '#EAAA00',
        cardTextColor: 'text-[#3A0F34]',
        subTextColor: 'text-[#3A0F34]'
      },
      modal: {
        title: 'Entrepreneurship Cell (E-Cell) Leadership',
        subtitle: 'President · Campus Innovation & Venture Ecosystem',
        issuer: 'Entrepreneurship Cell (E-Cell) · ANITS',
        date: 'Presidential Tenure',
        scoreOrResult: 'President, E-Cell',
        overview: 'Served as President of the Entrepreneurship Cell (E-Cell) at ANITS, spearheading institutional initiatives that inspire, mentor, and empower student builders. Championed early-stage venture exploration, structured bootcamps, and business model validation, fostering a vibrant culture of innovation across campus.',
        highlights: [
          'Led the campus Entrepreneurship Cell as President, defining the strategic roadmap for venture development.',
          'Cultivated an active ecosystem encouraging students to explore disruptive business ideas and commercialization.',
          'Organized venture pitch days, founder fireside chats, and structured entrepreneurial incubation bootcamps.',
          'Mentored early-stage student teams in problem validation, MVP scoping, and investor presentation readiness.'
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

  // Staggered vertical alternating offset classes:
  const getStaggerClass = (index: number) => {
    return index % 2 === 0 
      ? '-translate-y-3 sm:-translate-y-6 lg:-translate-y-7' 
      : 'translate-y-3 sm:translate-y-6 lg:translate-y-7';
  };

  // Render stylized isometric abstract artwork inside cards
  const renderCardArtwork = (id: string, color: string) => {
    switch (id) {
      case 'national-entrepreneurship-challenge':
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,12 82,30 50,48 18,30" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2.5" />
            <polygon points="18,30 50,48 50,78 18,60" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2.5" />
            <polygon points="82,30 50,48 50,78 82,60" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="2.5" />
            <circle cx="50" cy="30" r="6" fill="#EAAA00" />
          </svg>
        );
      case 'bizverve-summit':
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <path d="M50 12L85 32V68L50 88L15 68V32L50 12Z" stroke={color} strokeWidth="2.5" fill="white" fillOpacity="0.7" />
            <polygon points="50,25 75,40 75,65 50,80 25,65 25,40" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
            <circle cx="50" cy="50" r="12" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill="#EAAA00" />
          </svg>
        );
      case 'web-dev-internship':
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,32 50,54 10,32" fill="white" fillOpacity="0.85" stroke={color} strokeWidth="2.5" />
            <polygon points="50,26 90,48 50,70 10,48" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2.5" />
            <polygon points="50,42 90,64 50,86 10,64" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2.5" />
          </svg>
        );
      case 'iic-innovation-coordinator':
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,35 50,55 15,35" fill="white" fillOpacity="0.8" stroke={color} strokeWidth="2.5" />
            <polygon points="50,55 85,35 85,75 50,95" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2.5" />
            <polygon points="50,55 15,35 15,75 50,95" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2.5" />
            <circle cx="50" cy="40" r="8" fill="#EAAA00" />
            <path d="M50 20V26M50 54V60M30 40H36M64 40H70" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'ecell-president':
        return (
          <svg className="w-28 h-28 sm:w-32 sm:h-32 opacity-75" viewBox="0 0 100 100" fill="none">
            <polygon points="50,14 84,34 50,54 16,34" fill="white" fillOpacity="0.85" stroke={color} strokeWidth="2.5" />
            <polygon points="16,34 50,54 50,84 16,64" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2.5" />
            <polygon points="84,34 50,54 50,84 84,64" fill={color} fillOpacity="0.32" stroke={color} strokeWidth="2.5" />
            <polygon points="50,22 65,34 50,46 35,34" fill="#3A0F34" fillOpacity="0.8" />
            <circle cx="50" cy="34" r="4" fill="#EAAA00" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-[#C6D0D9] select-none overflow-hidden">
      
      {/* Huge Faint Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[15vw] font-black uppercase text-[#3A0F34]/[0.04] tracking-widest font-poster whitespace-nowrap z-0">
        AWARDS & HONORS
      </div>

      {/* Standardized container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Left/Right Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 lg:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#3A0F34] font-display whitespace-nowrap">
              HONORS & <span className="text-[#3A0F34]">ACHIEVEMENTS</span>
            </h2>
            <div className="h-1.5 w-16 bg-[#EAAA00] rounded-full mt-3" />
            <p className="text-sm sm:text-base text-[#3A0F34]/70 font-sans mt-2.5">
              Distinctions, certifications, competitive finals, and verified leadership milestones.
            </p>
          </div>

          {/* Carousel Arrow Navigation */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#3A0F34]/60 hidden sm:inline mr-2">
              Browse Honors:
            </span>
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#3A0F34]/20 text-[#3A0F34] shadow-md hover:bg-[#EAAA00] hover:border-[#EAAA00] hover:text-[#3A0F34] transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
              aria-label="Previous achievement card"
              title="Previous card"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#3A0F34]/20 text-[#3A0F34] shadow-md hover:bg-[#EAAA00] hover:border-[#EAAA00] hover:text-[#3A0F34] transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#EAAA00]"
              aria-label="Next achievement card"
              title="Next card"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>

      {/* HORIZONTAL STAGGERED POSTER CAROUSEL */}
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
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#3A0F34]/50 block pt-0.5 font-semibold">
                      PAVAN BHIMARAJU · PORTFOLIO
                    </div>
                  </div>
                </div>

                {/* MAIN DISPLAY HEADLINE */}
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

                {/* Abstract Geometric Graphic Element */}
                <div className="absolute right-4 bottom-24 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {renderCardArtwork(poster.id, poster.theme.decorColor)}
                </div>

                {/* Bottom Section: Supporting Text + Interactive Prompt */}
                <div className="pt-4 border-t border-[#3A0F34]/15 relative z-10 space-y-2.5">
                  
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
                    <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-[#3A0F34] flex items-center space-x-1 group-hover:text-[#EAAA00] transition-colors">
                      <span>Explore details</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>

                    <span className="w-2 h-2 rounded-full bg-[#EAAA00] animate-ping" />
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* EXPANDED DEDICATED DETAIL MODAL VIEW */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3A0F34]/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#3A0F34]/20 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header Banner */}
            <div className={`p-6 sm:p-8 ${selectedPoster.theme.bg} border-b border-[#3A0F34]/15 relative overflow-hidden text-[#3A0F34]`}>
              
              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-[#EAAA00] text-[#3A0F34] hover:text-[#3A0F34] shadow-sm flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-2">
                <span className={`inline-block px-3 py-1 rounded-md ${selectedPoster.theme.badgeBg} ${selectedPoster.theme.badgeText} text-xs font-mono font-black uppercase tracking-wider border border-black/5 shadow-xs`}>
                  {selectedPoster.badgeLabel}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display leading-tight">
                  {selectedPoster.modal.title}
                </h3>

                <p className="text-sm sm:text-base font-sans font-medium text-[#3A0F34]/80">
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
                <div className="p-3.5 rounded-2xl bg-[#C6D0D9]/30 border border-[#3A0F34]/15 flex items-center space-x-3">
                  <Building className="w-5 h-5 text-[#EAAA00] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#3A0F34]/60">Awarding Institution</div>
                    <div className="text-xs sm:text-sm font-bold text-[#3A0F34]">{selectedPoster.modal.issuer}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#C6D0D9]/30 border border-[#3A0F34]/15 flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#EAAA00] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#3A0F34]/60">Timeline / Status</div>
                    <div className="text-xs sm:text-sm font-bold text-[#3A0F34]">
                      {selectedPoster.modal.date} {selectedPoster.modal.scoreOrResult ? `· ${selectedPoster.modal.scoreOrResult}` : ''}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#3A0F34] font-mono">
                  Overview & Context
                </h4>
                <p className="text-sm sm:text-base text-[#3A0F34]/80 font-sans leading-relaxed">
                  {selectedPoster.modal.overview}
                </p>
              </div>

              {/* Key Highlights / Outcomes */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#3A0F34] font-mono">
                  Key Accomplishments & Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedPoster.modal.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#3A0F34]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#EAAA00] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#E8EDF2] border-t border-[#3A0F34]/15 flex items-center justify-between">
              <span className="text-xs font-mono text-[#3A0F34]/60">
                Pavan Bhimaraju · Verified Achievement
              </span>

              <button
                onClick={() => setSelectedPoster(null)}
                className="px-5 py-2 rounded-xl bg-[#3A0F34] text-white text-xs sm:text-sm font-bold hover:bg-[#4E1746] transition-colors cursor-pointer"
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
