import React, { useState } from 'react';
import { User, BarChart2, Lightbulb, Trophy, Heart, Code2, Users2, Compass, MapPin } from 'lucide-react';
import { CampusMapVector } from './CampusMapVector';

interface CampusExperienceItem {
  id: string;
  number: number;
  organization: string;
  tagline: string;
  role: string;
  about: string;
  iconType: 'chart' | 'bulb' | 'trophy' | 'heart' | 'users' | 'code';
}

export const CampusExplorer: React.FC = () => {
  const [activeNumber, setActiveNumber] = useState<number>(1);

  // 6 Verified Campus & Leadership Experiences with complete, unshortened organization names
  const campusItems: CampusExperienceItem[] = [
    {
      id: 'bizverve',
      number: 1,
      organization: 'BiZverve',
      tagline: 'Business & Entrepreneurship Club',
      role: 'Vice President',
      about: 'As the Vice President of BiZverve, I contributed to building a strong entrepreneurial ecosystem on campus. I helped plan and execute various entrepreneurship initiatives, coordinated an inter-college summit with 250+ participants from colleges across Visakhapatnam, and organized workshops, speaker sessions and startup-related discussions to inspire students and connect them with industry professionals and alumni.',
      iconType: 'chart'
    },
    {
      id: 'iic-coordinator',
      number: 2,
      organization: "Institution's Innovation Council (IIC)",
      tagline: 'Ministry of Education Innovation Cell · ANITS',
      role: 'Innovation Coordinator',
      about: 'As an Innovation Coordinator at the Institution\'s Innovation Council (IIC), ANITS, I coordinated departmental innovation and ideation events bridging students, faculty, and industry mentors. I helped facilitate student innovation challenges, design thinking hackathons, and intellectual property awareness sessions to foster grassroots technical creativity on campus.',
      iconType: 'bulb'
    },
    {
      id: 'ecell-president',
      number: 3,
      organization: 'Entrepreneurship Cell (E-Cell)',
      tagline: 'National Entrepreneurship Challenge (NEC) Finalist',
      role: 'President',
      about: 'As President of the Entrepreneurship Cell at ANITS, I led strategic entrepreneurship drives, mentored student founders, and spearheaded our campus delegation in IIT Bombay\'s National Entrepreneurship Challenge (NEC), successfully qualifying our team for the national finals while driving campus venture incubation programs.',
      iconType: 'trophy'
    },
    {
      id: 'street-cause-anits',
      number: 4,
      organization: 'Street Cause NGO ANITS',
      tagline: 'Youth Social Impact & Community Outreach',
      role: 'Divisional President',
      about: 'As the Divisional President of Street Cause ANITS, I steered volunteer operations and social impact drives across education, environmental sustainability, and eldercare. I mobilized over 150 student volunteers to orchestrate community fundraisers, rural school infrastructure renovation, and essential aid distribution campaigns across local underserved communities.',
      iconType: 'heart'
    },
    {
      id: 'street-cause-vizag',
      number: 5,
      organization: 'Street Cause Visakhapatnam',
      tagline: 'City Council Board Leadership',
      role: 'Chief Executive Board Member',
      about: 'Serving as a Chief Executive Board Member for Street Cause Visakhapatnam, I oversaw cross-college divisional chapters across the city. I coordinated citywide social impact drives, strategic sponsorship partnerships, and volunteer mobilization to maximize outreach and transparency for community welfare projects.',
      iconType: 'users'
    },
    {
      id: 'anits-tech-summit',
      number: 6,
      organization: 'ANITS Technical & Innovation Summit',
      tagline: 'Department of Computer Science & Engineering',
      role: 'Technical Lead & Coordinator',
      about: 'Coordinated flagship collegiate hackathons, coding contests, and technical symposiums for the Department of Computer Science. I oversaw platform infrastructure, problem statement curations, and participant onboarding for competitive programming and AI engineering challenges.',
      iconType: 'code'
    }
  ];

  const selectedItem = campusItems.find(item => item.number === activeNumber) || campusItems[0];

  const renderRoleIcon = (type: string) => {
    switch (type) {
      case 'chart':
        return <BarChart2 className="w-6 h-6 text-[#EAAA00]" />;
      case 'bulb':
        return <Lightbulb className="w-6 h-6 text-[#3A0F34]" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-[#EAAA00]" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-[#3A0F34]" />;
      case 'users':
        return <Users2 className="w-6 h-6 text-[#EAAA00]" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-[#3A0F34]" />;
      default:
        return <User className="w-6 h-6 text-[#3A0F34]" />;
    }
  };

  return (
    <section id="beyond-code" className="py-16 sm:py-24 relative bg-[#C6D0D9] select-none">
      {/* Standardized container matching Hero, My Skills, and My Projects for uniform left alignment */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. OUTSIDE HEADING AREA (Directly on page background, aligned with My Skills and My Projects) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#3A0F34] font-display whitespace-nowrap">
              BEYOND <span className="text-[#3A0F34]">THE</span> <span className="text-[#EAAA00]">CODE</span>
            </h2>
            <div className="h-1.5 w-16 bg-[#EAAA00] rounded-full mt-3" />
            <p className="text-sm sm:text-base text-[#3A0F34]/70 font-sans mt-2.5">
              My journey beyond academics — communities, leadership and impact.
            </p>
          </div>

          <div className="text-right border-l-2 border-[#EAAA00] pl-4 hidden md:block">
            <span className="text-xs sm:text-sm font-serif italic text-[#3A0F34]/70 block max-w-xs">
              “Building people, ideas and opportunities beyond the screen.”
            </span>
          </div>
        </div>

        {/* 2. MAIN CONTENT CARD (Expanded width, high-clarity 2-column layout) */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl border border-[#3A0F34]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column (7 cols): Interactive Campus Isometric Map Component */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
              
              {/* Top Map Navigator Toolbar */}
              <div className="flex items-center justify-between px-1 text-xs font-mono text-[#3A0F34]/60">
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-[#EAAA00]" />
                  <span className="font-semibold text-[#3A0F34]">ANITS Campus Model</span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#EAAA00]/20 text-[#3A0F34] text-[10px] font-bold border border-[#EAAA00]/30">
                    ● Interactive
                  </span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] text-[#3A0F34]/50 hidden sm:inline">Explore:</span>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setActiveNumber(num)}
                      className={`w-6 h-6 rounded-md text-[11px] font-bold font-mono transition-all cursor-pointer ${
                        activeNumber === num
                          ? 'bg-[#EAAA00] text-[#3A0F34] shadow-xs scale-105'
                          : 'bg-[#C6D0D9]/40 text-[#3A0F34] border border-[#3A0F34]/15 hover:bg-[#EAAA00]/20'
                      }`}
                      aria-label={`Jump to landmark ${num}`}
                      title={`Jump to landmark ${num}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scalable Vector Isometric Campus Map Container */}
              <div 
                className="relative w-full rounded-2xl overflow-hidden border border-[#3A0F34]/15 bg-[#EBF3F7] shadow-inner select-none group"
                style={{ aspectRatio: '1000 / 580' }}
              >
                {/* 
                  High-Definition Isometric Campus Map:
                  Authentic 30° vector isometric layout with crisp buildings, roads, greenery, and running track.
                  Exactly 6 numbered pins (1 to 6) with ZERO duplicates.
                  Active pin highlighted in Marigold (#EAAA00), inactive pins in Deep Aubergine (#3A0F34).
                */}
                <CampusMapVector activeNumber={activeNumber} onSelectPin={setActiveNumber} />

                {/* Compass Rose Indicator in top-right corner */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-xs text-[10px] font-mono text-[#3A0F34]/70 border border-white/60 shadow-xs pointer-events-none flex items-center space-x-1">
                  <span>N</span>
                  <span className="text-[#EAAA00]">↗</span>
                </div>

                {/* Bottom Helper Bar */}
                <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-xs text-[11px] font-sans text-[#3A0F34]/80 border border-white/60 shadow-xs pointer-events-none flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EAAA00]" />
                  <span>Click any landmark pin to inspect</span>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Description Panel for Selected Location (Spacious, Complete Name, No Truncation) */}
            <div className="lg:col-span-5 bg-[#F7F9FB] rounded-2xl p-6 sm:p-7 border border-[#3A0F34]/15 shadow-xs flex flex-col justify-between space-y-5 animate-fadeIn">
              
              <div className="space-y-4">
                {/* Meta Header: Number Badge + Icon + Landmark Badge */}
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center space-x-3">
                    {/* Prominent Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#EAAA00] text-[#3A0F34] font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {selectedItem.number}
                    </div>

                    {/* Role Icon Box */}
                    <div className="w-11 h-11 rounded-2xl bg-white border border-[#3A0F34]/15 flex items-center justify-center shrink-0 shadow-xs">
                      {renderRoleIcon(selectedItem.iconType)}
                    </div>
                  </div>

                  {/* Landmark Location Tag */}
                  <span className="px-3 py-1 rounded-full bg-[#3A0F34] text-[#EAAA00] text-xs font-bold font-mono">
                    Landmark 0{selectedItem.number}
                  </span>
                </div>

                {/* Complete Organization Title - Full width, allows natural 2-line wrap with ZERO truncation */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#3A0F34] leading-snug font-display break-words">
                    {selectedItem.organization}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A0F34]/70 font-sans font-medium">
                    {selectedItem.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#3A0F34]/15" />

                {/* My Role Section */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#3A0F34]/60">
                    My Role
                  </div>
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#3A0F34]/15 text-[#3A0F34] text-xs sm:text-sm font-extrabold">
                    <User className="w-4 h-4 text-[#EAAA00]" />
                    <span>{selectedItem.role}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#3A0F34]/15" />

                {/* About Section */}
                <div className="space-y-1.5">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A0F34]">
                    About
                  </div>
                  <p className="text-sm text-[#3A0F34]/80 font-sans leading-relaxed">
                    {selectedItem.about}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Navigation Status */}
              <div className="pt-3 border-t border-[#3A0F34]/15 text-[11px] font-mono text-[#3A0F34]/60 flex items-center justify-between">
                <span>Campus Leadership Node</span>
                <span className="text-[#3A0F34] font-semibold">{activeNumber} of 6 active</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
