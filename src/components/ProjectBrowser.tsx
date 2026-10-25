import React, { useState, useMemo } from 'react';
import { 
  Lock, 
  Search, 
  SlidersHorizontal, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  RotateCw, 
  Star, 
  Share2, 
  ArrowLeft,
  ShieldCheck,
  Activity,
  CreditCard,
  Flame,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectBrowserProps {
  selectedProjectId?: string;
  onSelectProject?: (id: string) => void;
}

export const ProjectBrowser: React.FC<ProjectBrowserProps> = ({
  selectedProjectId: initialSelectedId,
  onSelectProject
}) => {
  const allProjects = PORTFOLIO_DATA.projects;

  // Active open project view inside the browser card
  // Initially null (shows the Project Hub with 5 circular selectors), or set when user clicks a circle
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Search filter query
  const [searchQuery, setSearchQuery] = useState('');

  // Slug mapping for browser address bar
  const slugMap: Record<string, string> = {
    'gitguardian-ai': 'gitguardian-ai',
    'hospital-queue-system': 'hospital-queue-system',
    'healthcare-management-system': 'healthcare-management',
    'teen-wellness-app': 'teen-wellness',
    'realtime-chat-app': 'real-time-chat'
  };
  
  // Sync external project selection if triggered from another section
  React.useEffect(() => {
    if (initialSelectedId) {
      setActiveProjectId(initialSelectedId);
    }
  }, [initialSelectedId]);

  // Open project detail inside same browser card
  const handleOpenProject = (id: string) => {
    setActiveProjectId(id);
    if (onSelectProject) {
      onSelectProject(id);
    }
  };

  // Close project detail and restore original Project Hub view
  const handleCloseProject = () => {
    setActiveProjectId(null);
  };

  // Currently active project data
  const currentProject = useMemo(() => {
    if (!activeProjectId) return null;
    return allProjects.find((p) => p.id === activeProjectId) || null;
  }, [activeProjectId, allProjects]);

  // Current browser address text
  const currentAddress = useMemo(() => {
    if (!activeProjectId) {
      return 'pavan.dev/projects';
    }
    const slug = slugMap[activeProjectId] || activeProjectId;
    return `pavan.dev/projects/${slug}`;
  }, [activeProjectId]);

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return allProjects;
    const q = searchQuery.toLowerCase();
    return allProjects.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchTagline = p.tagline.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchTech = p.technologies.some((t) => t.toLowerCase().includes(q));
      const matchFeatures = p.features.some((f) => f.toLowerCase().includes(q));
      return matchName || matchTagline || matchCategory || matchTech || matchFeatures;
    });
  }, [allProjects, searchQuery]);

  // Render SVG icons matching the reference image (editorial styling)
  const renderProjectIcon = (id: string) => {
    switch (id) {
      case 'gitguardian-ai':
        // Shield with Keyhole (Deep Aubergine)
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#3A0F34]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm0 6c1.66 0 3 1.34 3 3 0 1.3-.84 2.4-2 2.82V16h-2v-2.18c-1.16-.42-2-1.52-2-2.82 0-1.66 1.34-3 3-3z" />
          </svg>
        );
      case 'hospital-queue-system':
        // Calendar with Clock
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#EAAA00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <circle cx="16" cy="16" r="4" fill="#FFF4D6" stroke="#EAAA00" strokeWidth="2" />
            <polyline points="16 14 16 16 18 16" stroke="#EAAA00" strokeWidth="2" />
          </svg>
        );
      case 'healthcare-management-system':
        // Medical First Aid Briefcase with Cross
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#3A0F34]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-2h4v2h-4V5zm3 11h-2v-2H9v-2h2v-2h2v2h2v2h-2v2z" />
          </svg>
        );
      case 'teen-wellness-app':
        // Lotus Blossom / Wellness Petals
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#EAAA00]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-1.5 3-3.5 5.5-3.5 8 0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-2.5-2-5-3.5-8zm-5 6c-2 2-3 4-3 6 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.5-2-1.5-.5-3-2-4.5-4.5v-3.5zm10 0v3.5c-1.5 2.5-3 4-4.5 4.5.7 1.2 2 2 3.5 2 2.2 0 4-1.8 4-4 0-2-1-4-3-6z" />
          </svg>
        );
      case 'realtime-chat-app':
        // Chat / Speech Bubble with Lines
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#3A0F34]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9H7v-2h10v2zm0-3H7V6h10v2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Node styles matching reference rings and top dot accents
  const getNodeVisualConfig = (id: string) => {
    switch (id) {
      case 'gitguardian-ai':
        return {
          ringBorder: 'border-[#3A0F34]/20',
          dotColor: 'bg-[#EAAA00]',
          glowBg: 'rgba(234, 170, 0, 0.12)',
          accentColor: '#EAAA00',
          shortName: 'GitGuardian AI'
        };
      case 'hospital-queue-system':
        return {
          ringBorder: 'border-[#3A0F34]/20',
          dotColor: 'bg-[#3A0F34]',
          glowBg: 'rgba(58, 15, 52, 0.08)',
          accentColor: '#3A0F34',
          shortName: 'Smart Hospital Queue System'
        };
      case 'healthcare-management-system':
        return {
          ringBorder: 'border-[#3A0F34]/20',
          dotColor: 'bg-[#EAAA00]',
          glowBg: 'rgba(234, 170, 0, 0.12)',
          accentColor: '#EAAA00',
          shortName: 'Healthcare Management'
        };
      case 'teen-wellness-app':
        return {
          ringBorder: 'border-[#3A0F34]/20',
          dotColor: 'bg-[#3A0F34]',
          glowBg: 'rgba(58, 15, 52, 0.08)',
          accentColor: '#3A0F34',
          shortName: 'Teen Wellness App'
        };
      case 'realtime-chat-app':
        return {
          ringBorder: 'border-[#3A0F34]/20',
          dotColor: 'bg-[#EAAA00]',
          glowBg: 'rgba(234, 170, 0, 0.12)',
          accentColor: '#EAAA00',
          shortName: 'Real-Time Chat Application'
        };
      default:
        return {
          ringBorder: 'border-[#3A0F34]/15',
          dotColor: 'bg-[#3A0F34]',
          glowBg: 'rgba(58, 15, 52, 0.05)',
          accentColor: '#3A0F34',
          shortName: 'Project'
        };
    }
  };

  // Dedicated Visual Picture / Mockup for each project
  const renderProjectPicture = (id: string) => {
    switch (id) {
      case 'gitguardian-ai':
        return (
          <div className="w-full bg-[#3A0F34] rounded-2xl p-5 text-white shadow-xl border border-[#3A0F34]/30 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAAA00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-white/60 pl-2">gitguardian-ai // security-console</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#EAAA00]/20 text-[#EAAA00] text-[10px] font-bold">
                ● ACTIVE
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAAA00]/20 flex items-center justify-center text-[#EAAA00]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Repository Security Score</div>
                    <div className="text-[11px] text-white/60 font-mono">AST & Vulnerability Inspection</div>
                  </div>
                </div>
                <span className="text-xl font-black text-[#EAAA00] font-mono">98/100</span>
              </div>

              <div className="p-3 rounded-xl bg-black/20 border border-white/10 space-y-2">
                <div className="text-[10px] font-mono uppercase text-white/60">Agentic Orchestration:</div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono">
                  <span className="px-2 py-1 rounded bg-white/10 text-[#EAAA00]">Static AST</span>
                  <span className="text-white/40">→</span>
                  <span className="px-2 py-1 rounded bg-[#EAAA00]/20 text-[#EAAA00]">LangGraph Agent</span>
                  <span className="text-white/40">→</span>
                  <span className="px-2 py-1 rounded bg-white/10 text-white">Remediate</span>
                </div>
              </div>

              <div className="text-[11px] text-white/70 font-mono flex items-center justify-between pt-1">
                <span>Celery & Redis Background Queue</span>
                <span className="text-[#EAAA00]">PDF Report Ready ✓</span>
              </div>
            </div>
          </div>
        );

      case 'hospital-queue-system':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-[#3A0F34] shadow-xl border border-[#3A0F34]/15 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAAA00] animate-pulse" />
                <span className="font-extrabold text-[#3A0F34]">Smart Hospital Live Queue</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#EAAA00]/20 text-[#3A0F34] font-mono text-[10px] font-bold">
                LIVE DISPLAY
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#3A0F34] to-[#4E1746] text-white flex items-center justify-between shadow-md">
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#EAAA00]">
                    NOW SERVING
                  </div>
                  <div className="text-3xl font-black font-mono mt-0.5">TOKEN #A-42</div>
                  <div className="text-xs text-white/70 mt-1">Dr. Sharma · Room 102 (General Medicine)</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-[#EAAA00] text-[#3A0F34] font-mono text-[11px] font-bold">
                    In Consultation
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#C6D0D9]/30 border border-[#3A0F34]/10">
                  <span className="text-[#3A0F34]/60 block text-[10px]">NEXT PATIENT</span>
                  <span className="font-black text-[#3A0F34]">Token #A-43</span>
                  <span className="text-[10px] text-[#3A0F34]/60 block">Est: 4 mins</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#C6D0D9]/30 border border-[#3A0F34]/10">
                  <span className="text-[#3A0F34]/60 block text-[10px]">WAITING QUEUE</span>
                  <span className="font-black text-[#3A0F34]">6 Patients</span>
                  <span className="text-[10px] text-[#EAAA00] block font-bold">SMS Dispatched ✓</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'healthcare-management-system':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-[#3A0F34] shadow-xl border border-[#3A0F34]/15 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3A0F34]" />
                <span className="font-extrabold text-[#3A0F34]">Clinical Practice Portal</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#3A0F34]/10 text-[#3A0F34] font-mono text-[10px] font-bold">
                RBAC SECURE
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-[#C6D0D9]/30 border border-[#3A0F34]/10">
                  <span className="text-lg font-black text-[#3A0F34] block">1,240</span>
                  <span className="text-[10px] font-mono text-[#3A0F34]/60 uppercase">Consults</span>
                </div>
                <div className="p-3 rounded-xl bg-[#C6D0D9]/30 border border-[#3A0F34]/10">
                  <span className="text-lg font-black text-[#3A0F34] block">100%</span>
                  <span className="text-[10px] font-mono text-[#3A0F34]/60 uppercase">Stripe / PayPal</span>
                </div>
                <div className="p-3 rounded-xl bg-[#C6D0D9]/30 border border-[#3A0F34]/10">
                  <span className="text-lg font-black text-[#EAAA00] block">18</span>
                  <span className="text-[10px] font-mono text-[#3A0F34]/60 uppercase">Doctors</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#C6D0D9]/40 border border-[#3A0F34]/15 text-xs space-y-1">
                <div className="flex justify-between font-bold text-[#3A0F34]">
                  <span>Patient Appointment Confirmed</span>
                  <span className="text-[#3A0F34] font-black text-[11px]">Paid Online ✓</span>
                </div>
                <div className="text-[11px] text-[#3A0F34]/70">
                  Automated invoice & appointment schedule delivered via transactional email API.
                </div>
              </div>
            </div>
          </div>
        );

      case 'teen-wellness-app':
        return (
          <div className="w-full bg-[#3A0F34] rounded-2xl p-5 text-white shadow-xl font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-[#EAAA00] text-[10px] tracking-widest uppercase">
                TEKNOV8R INTERNSHIP
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-[#EAAA00] text-[10px] font-bold">
                MOBILE COMPANION
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/70">DAILY HABIT STREAK</span>
                  <div className="text-2xl font-black flex items-center space-x-1.5 mt-0.5">
                    <span>🔥 14 Days</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-[#EAAA00] flex items-center justify-center font-bold text-xs text-[#EAAA00]">
                  85%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] text-white/70 block font-mono">PILLARS</span>
                  <span className="font-bold text-white text-[11px]">Mindfulness & Habits</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] text-[#EAAA00] block font-mono">RESEARCH</span>
                  <span className="font-bold text-white text-[11px]">Teen User Personas</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'realtime-chat-app':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-[#3A0F34] shadow-xl border border-[#3A0F34]/15 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAAA00] animate-pulse" />
                <span className="font-extrabold text-[#3A0F34]">#engineering-chat</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#EAAA00]/20 text-[#3A0F34] font-mono text-[10px] font-bold">
                WEBSOCKETS CONNECTED
              </span>
            </div>

            <div className="pt-4 space-y-2.5 text-xs">
              <div className="p-2.5 rounded-2xl rounded-tl-sm bg-[#C6D0D9]/40 max-w-[85%] text-[#3A0F34]">
                <div className="font-bold text-[10px] text-[#3A0F34]/60 mb-0.5">Teammate</div>
                Pavan, is the Django Channels ASGI connection handling real-time rooms?
              </div>

              <div className="p-2.5 rounded-2xl rounded-tr-sm bg-[#3A0F34] text-white ml-auto max-w-[85%]">
                <div className="font-bold text-[10px] text-[#EAAA00] mb-0.5 text-right">Pavan</div>
                Yes! Full-duplex WebSockets with instant broadcast and zero HTTP polling. 🚀
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#3A0F34]/60 border-t border-gray-100">
                <span>Latency: &lt;18ms</span>
                <span className="text-[#3A0F34] font-bold">PostgreSQL History Saved ✓</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#C6D0D9] relative select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single-line heading aligned with the left edge of the browser card */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#3A0F34] font-display whitespace-nowrap">
            MY <span className="text-[#3A0F34]">PROJECTS</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#EAAA00] rounded-full mt-3" />
        </div>

        {/* ONE LARGE ELEGANT BROWSER-INSPIRED CONTENT AREA */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#3A0F34]/15 overflow-hidden relative transition-all duration-300">
          
          {/* BROWSER TOP CHROME BAR */}
          <div className="bg-[#E8EDF2] border-b border-[#3A0F34]/15 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            
            {/* Left: Window Controls + History Arrows */}
            <div className="flex items-center space-x-3">
              {/* 3 Window Control Circles */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleCloseProject}
                  aria-label="Close project view"
                  className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:opacity-80 transition-opacity" 
                />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Navigation History Controls */}
              <div className="flex items-center space-x-1 pl-2 text-[#3A0F34]/60">
                <button
                  onClick={handleCloseProject}
                  disabled={!activeProjectId}
                  aria-label="Back to project hub"
                  className={`p-1 rounded hover:bg-[#C6D0D9] transition-colors ${
                    activeProjectId ? 'text-[#3A0F34] cursor-pointer' : 'text-[#3A0F34]/30 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled
                  aria-label="Forward"
                  className="p-1 rounded text-[#3A0F34]/30 cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (!activeProjectId) {
                      setSearchQuery('');
                    }
                  }}
                  aria-label="Refresh view"
                  className="p-1 rounded hover:bg-[#C6D0D9] text-[#3A0F34] transition-colors cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center: Clean Address Bar */}
            <div className="flex-1 max-w-xl mx-auto px-2">
              <div className="bg-white rounded-full px-4 py-1.5 border border-[#3A0F34]/15 shadow-xs flex items-center justify-center space-x-2 text-xs font-mono text-[#3A0F34]">
                <Lock className="w-3.5 h-3.5 text-[#EAAA00] shrink-0" />
                <span className="truncate tracking-wide select-all font-medium">
                  {currentAddress}
                </span>
              </div>
            </div>

            {/* Right: Browser Icons */}
            <div className="flex items-center space-x-2 text-[#3A0F34]/60 pr-1">
              <button 
                aria-label="Bookmark" 
                className="p-1.5 rounded hover:bg-[#C6D0D9] hover:text-[#3A0F34] transition-colors"
              >
                <Star className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.origin + '#' + currentAddress);
                  }
                }}
                title="Copy link"
                aria-label="Share" 
                className="p-1.5 rounded hover:bg-[#C6D0D9] hover:text-[#3A0F34] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* INNER BROWSER PAGE VIEWPORT */}
          <div className="relative min-h-[720px] lg:min-h-[760px] bg-gradient-to-b from-[#F7F9FB] via-[#F0F3F6] to-[#F7F9FB] p-6 sm:p-10 lg:p-12 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
            
            {/* Subtle Ambient Background Glows */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#EAAA00]/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3A0F34]/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#C6D0D9]/40 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* 
              VIEW CONDITIONAL:
              If activeProjectId is null -> SHOW MAIN PROJECT HUB (5 Circular Selectors)
              If activeProjectId is set -> SHOW SELECTED PROJECT DETAILS INSIDE THE SAME CARD!
            */}
            {!currentProject ? (
              /* ============================================================ */
              /* STATE A: THE PROJECT HUB VIEW                                */
              /* ============================================================ */
              <div className="pt-6 sm:pt-10 pb-12 sm:pb-20 lg:pb-24 flex flex-col items-center animate-fadeIn">
                
                {/* Main Heading */}
                <div className="text-center space-y-2 mb-6">
                  <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#3A0F34]">
                    Pavan's <span className="text-[#3A0F34]">Project</span> <span className="text-[#EAAA00]">Hub</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#3A0F34]/70 font-sans max-w-xl mx-auto">
                    Explore the projects I've built, learned from and grown with.
                  </p>
                </div>

                {/* Pill Search Field with Sliders Filter Icon */}
                <div className="w-full max-w-2xl mx-auto mb-10">
                  <div className="relative flex items-center">
                    <Search className="w-5 h-5 text-[#3A0F34]/40 absolute left-4 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for projects, technologies or keywords..."
                      className="w-full pl-12 pr-12 py-3.5 bg-white rounded-full border border-[#3A0F34]/20 shadow-xs text-sm text-[#3A0F34] placeholder-[#3A0F34]/40 focus:outline-none focus:ring-2 focus:ring-[#EAAA00] focus:border-transparent transition-all"
                    />
                    <div className="absolute right-4 text-[#3A0F34]/40 hover:text-[#3A0F34] cursor-pointer">
                      <SlidersHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                  {searchQuery && (
                    <div className="mt-2 text-center text-xs font-mono text-[#3A0F34]/70">
                      Showing {filteredProjects.length} of {allProjects.length} projects
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-[#EAAA00] font-bold hover:underline"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>

                {/* Left-Aligned Heading: "My Work ──" */}
                <div className="w-full flex items-center mb-6 pl-2 sm:pl-4">
                  <h3 className="text-xl sm:text-2xl font-black text-[#3A0F34] tracking-tight font-display">
                    My Work
                  </h3>
                  <div className="h-0.5 w-12 bg-[#EAAA00] ml-3 rounded-full" />
                </div>

                {/* FIVE CIRCULAR PROJECT SELECTORS (Refined slightly smaller size) */}
                {filteredProjects.length > 0 ? (
                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 justify-items-center items-start pt-2">
                    {filteredProjects.map((proj) => {
                      const visual = getNodeVisualConfig(proj.id);

                      return (
                        <div key={proj.id} className="flex flex-col items-center group">
                          {/* Circular Project Selector with Top Dot Accent & Glow (Refined Size) */}
                          <button
                            onClick={() => handleOpenProject(proj.id)}
                            className="relative flex items-center justify-center p-2.5 sm:p-3 rounded-full transition-transform duration-300 group-hover:scale-105 cursor-pointer focus:outline-none"
                            style={{
                              backgroundColor: visual.glowBg
                            }}
                            title={`Open ${proj.name}`}
                          >
                            {/* Outer Subtle Orbit Ring */}
                            <div className={`absolute inset-0 rounded-full border ${visual.ringBorder} pointer-events-none`} />

                            {/* Top 12 O'Clock Dot Accent */}
                            <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${visual.dotColor} shadow-xs ring-2 ring-white`} />

                            {/* Inner White Button Disc (Slightly Smaller & Elegant) */}
                            <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full bg-white shadow-md border border-[#3A0F34]/15 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-[#EAAA00]">
                              {renderProjectIcon(proj.id)}
                            </div>
                          </button>

                          {/* Project Name Below Circle */}
                          <span className="font-bold text-xs text-[#3A0F34] text-center mt-2.5 max-w-[125px] leading-tight group-hover:text-[#EAAA00] transition-colors">
                            {visual.shortName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full py-16 text-center text-[#3A0F34]/70 font-sans">
                    <p className="text-base font-semibold">No projects found matching "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-3 px-4 py-1.5 rounded-full bg-[#EAAA00] text-[#3A0F34] text-xs font-mono font-bold hover:bg-[#D49800] transition-colors"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}

              </div>
            ) : (
              /* ============================================================ */
              /* STATE B: SELECTED PROJECT DETAILS (CONCISE & PICTURE)         */
              /* ============================================================ */
              <div className="pt-6 sm:pt-8 animate-fadeIn">
                
                {/* Top Return & Close Action Strip */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#3A0F34]/15">
                  <button
                    onClick={handleCloseProject}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold text-[#3A0F34] hover:text-[#EAAA00] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Project Hub</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#3A0F34]/50 hidden sm:inline">
                      Press × to return
                    </span>
                    <button
                      onClick={handleCloseProject}
                      aria-label="Close project view"
                      className="w-8 h-8 rounded-full bg-white hover:bg-[#C6D0D9] border border-[#3A0F34]/15 text-[#3A0F34] flex items-center justify-center transition-colors text-lg font-bold cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main Project Detail Grid: Concise Left Column + Project Picture Right Column */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column (6 cols): Concise Relevant Content */}
                  <div className="lg:col-span-6 space-y-5">
                    
                    {/* Header Badges & Title */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#3A0F34] text-[#EAAA00] text-xs font-mono font-bold uppercase">
                          {currentProject.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#EAAA00]/20 text-[#3A0F34] border border-[#EAAA00]/30 text-xs font-mono font-bold uppercase">
                          {currentProject.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3A0F34] font-display tracking-tight leading-tight">
                        {currentProject.name}
                      </h2>

                      <p className="text-sm sm:text-base font-semibold text-[#3A0F34]/80 font-sans">
                        {currentProject.tagline}
                      </p>
                    </div>

                    {/* Concise Relevant Overview */}
                    <p className="text-sm sm:text-base text-[#3A0F34]/80 leading-relaxed font-sans">
                      {currentProject.description}
                    </p>

                    {/* Top 3 Relevant Highlights Only */}
                    <div className="space-y-2 pt-1">
                      {currentProject.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#EAAA00] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#3A0F34] leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies (Compact labels) */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {currentProject.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-[#3A0F34]/15 text-[#3A0F34] text-xs font-mono font-semibold shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verified Links & Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {currentProject.githubUrl ? (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#3A0F34] text-white text-xs font-mono font-bold hover:bg-[#4E1746] transition-colors shadow-sm"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-[#EAAA00]" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#3A0F34]/5 text-[#3A0F34]/70 text-xs font-mono font-medium">
                          <span>Institutional / Private Repository</span>
                        </div>
                      )}

                      <button
                        onClick={handleCloseProject}
                        className="px-4 py-2 rounded-full border border-[#3A0F34]/25 text-[#3A0F34] text-xs font-mono font-bold hover:bg-white transition-colors"
                      >
                        Return to Hub
                      </button>
                    </div>

                  </div>

                  {/* Right Column (6 cols): The Visual Picture According to the Project */}
                  <div className="lg:col-span-6 flex flex-col items-center">
                    {renderProjectPicture(currentProject.id)}
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
