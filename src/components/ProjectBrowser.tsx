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

  // Render SVG icons matching the reference image (slightly smaller size for refined circle)
  const renderProjectIcon = (id: string) => {
    switch (id) {
      case 'gitguardian-ai':
        // Shield with Keyhole (Deep blue/cyan)
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm0 6c1.66 0 3 1.34 3 3 0 1.3-.84 2.4-2 2.82V16h-2v-2.18c-1.16-.42-2-1.52-2-2.82 0-1.66 1.34-3 3-3z" />
          </svg>
        );
      case 'hospital-queue-system':
        // Calendar with Clock
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#00A9C2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <circle cx="16" cy="16" r="4" fill="#E6F8FA" stroke="#00A9C2" strokeWidth="2" />
            <polyline points="16 14 16 16 18 16" stroke="#00A9C2" strokeWidth="2" />
          </svg>
        );
      case 'healthcare-management-system':
        // Medical First Aid Briefcase with Cross
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0877B9]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-2h4v2h-4V5zm3 11h-2v-2H9v-2h2v-2h2v2h2v2h-2v2z" />
          </svg>
        );
      case 'teen-wellness-app':
        // Lotus Blossom / Wellness Petals
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#167D7F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-1.5 3-3.5 5.5-3.5 8 0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-2.5-2-5-3.5-8zm-5 6c-2 2-3 4-3 6 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.5-2-1.5-.5-3-2-4.5-4.5v-3.5zm10 0v3.5c-1.5 2.5-3 4-4.5 4.5.7 1.2 2 2 3.5 2 2.2 0 4-1.8 4-4 0-2-1-4-3-6z" />
          </svg>
        );
      case 'realtime-chat-app':
        // Chat / Speech Bubble with Lines
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0877B9]" viewBox="0 0 24 24" fill="currentColor">
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
          ringBorder: 'border-orange-300',
          dotColor: 'bg-[#FF791F]',
          glowBg: 'rgba(255, 121, 31, 0.12)',
          accentColor: '#FF791F',
          shortName: 'GitGuardian AI'
        };
      case 'hospital-queue-system':
        return {
          ringBorder: 'border-cyan-300',
          dotColor: 'bg-[#00A9C7]',
          glowBg: 'rgba(0, 169, 199, 0.12)',
          accentColor: '#00A9C7',
          shortName: 'Smart Hospital Queue System'
        };
      case 'healthcare-management-system':
        return {
          ringBorder: 'border-blue-300',
          dotColor: 'bg-[#0877B9]',
          glowBg: 'rgba(8, 119, 185, 0.12)',
          accentColor: '#0877B9',
          shortName: 'Healthcare Management'
        };
      case 'teen-wellness-app':
        return {
          ringBorder: 'border-teal-300',
          dotColor: 'bg-[#167D7F]',
          glowBg: 'rgba(22, 125, 127, 0.12)',
          accentColor: '#167D7F',
          shortName: 'Teen Wellness App'
        };
      case 'realtime-chat-app':
        return {
          ringBorder: 'border-sky-300',
          dotColor: 'bg-[#0877B9]',
          glowBg: 'rgba(8, 119, 185, 0.12)',
          accentColor: '#0877B9',
          shortName: 'Real-Time Chat Application'
        };
      default:
        return {
          ringBorder: 'border-gray-200',
          dotColor: 'bg-gray-400',
          glowBg: 'rgba(156, 163, 175, 0.1)',
          accentColor: '#0877B9',
          shortName: 'Project'
        };
    }
  };

  // Dedicated Visual Picture / Mockup for each project
  const renderProjectPicture = (id: string) => {
    switch (id) {
      case 'gitguardian-ai':
        return (
          <div className="w-full bg-[#0B1F33] rounded-2xl p-5 text-white shadow-xl border border-gray-800 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-gray-400 pl-2">gitguardian-ai // security-console</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold">
                ● ACTIVE
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00A9C2]/20 flex items-center justify-center text-[#00A9C2]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Repository Security Score</div>
                    <div className="text-[11px] text-gray-400 font-mono">AST & Vulnerability Inspection</div>
                  </div>
                </div>
                <span className="text-xl font-black text-emerald-400 font-mono">98/100</span>
              </div>

              <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2">
                <div className="text-[10px] font-mono uppercase text-gray-400">Agentic Orchestration:</div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono">
                  <span className="px-2 py-1 rounded bg-cyan-950 text-cyan-300">Static AST</span>
                  <span className="text-gray-600">→</span>
                  <span className="px-2 py-1 rounded bg-orange-950 text-orange-300">LangGraph Agent</span>
                  <span className="text-gray-600">→</span>
                  <span className="px-2 py-1 rounded bg-emerald-950 text-emerald-300">Remediate</span>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 font-mono flex items-center justify-between pt-1">
                <span>Celery & Redis Background Queue</span>
                <span className="text-cyan-300">PDF Report Ready ✓</span>
              </div>
            </div>
          </div>
        );

      case 'hospital-queue-system':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-gray-800 shadow-xl border border-gray-200 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00A9C2] animate-pulse" />
                <span className="font-extrabold text-[#0B1F33]">Smart Hospital Live Queue</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#E6F8FA] text-[#00A9C2] font-mono text-[10px] font-bold">
                LIVE DISPLAY
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#00A9C2] to-[#0877B9] text-white flex items-center justify-between shadow-md">
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-cyan-100">
                    NOW SERVING
                  </div>
                  <div className="text-3xl font-black font-mono mt-0.5">TOKEN #A-42</div>
                  <div className="text-xs text-cyan-100 mt-1">Dr. Sharma · Room 102 (General Medicine)</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 text-white font-mono text-[11px] font-bold">
                    In Consultation
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-gray-400 block text-[10px]">NEXT PATIENT</span>
                  <span className="font-black text-gray-800">Token #A-43</span>
                  <span className="text-[10px] text-gray-500 block">Est: 4 mins</span>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-gray-400 block text-[10px]">WAITING QUEUE</span>
                  <span className="font-black text-gray-800">6 Patients</span>
                  <span className="text-[10px] text-[#00A9C2] block">SMS Dispatched ✓</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'healthcare-management-system':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-gray-800 shadow-xl border border-gray-200 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0877B9]" />
                <span className="font-extrabold text-[#0B1F33]">Clinical Practice Portal</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0877B9] font-mono text-[10px] font-bold">
                RBAC SECURE
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-black text-[#0B1F33] block">1,240</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Consults</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-black text-emerald-600 block">100%</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Stripe / PayPal</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-black text-[#0877B9] block">18</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Doctors</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs space-y-1">
                <div className="flex justify-between font-bold text-[#0B1F33]">
                  <span>Patient Appointment Confirmed</span>
                  <span className="text-emerald-600 text-[11px]">Paid Online ✓</span>
                </div>
                <div className="text-[11px] text-gray-500">
                  Automated invoice & appointment schedule delivered via transactional email API.
                </div>
              </div>
            </div>
          </div>
        );

      case 'teen-wellness-app':
        return (
          <div className="w-full bg-gradient-to-br from-[#167D7F] to-[#0A484A] rounded-2xl p-5 text-white shadow-xl font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-teal-600/50 text-xs">
              <span className="font-mono text-teal-200 text-[10px] tracking-widest uppercase">
                TEKNOV8R INTERNSHIP
              </span>
              <span className="px-2 py-0.5 rounded-full bg-teal-800 text-teal-200 text-[10px] font-bold">
                MOBILE COMPANION
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-200">DAILY HABIT STREAK</span>
                  <div className="text-2xl font-black flex items-center space-x-1.5 mt-0.5">
                    <span>🔥 14 Days</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-3 border-teal-300 flex items-center justify-center font-bold text-xs">
                  85%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] text-teal-200 block font-mono">PILLARS</span>
                  <span className="font-bold text-white text-[11px]">Mindfulness & Habits</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] text-teal-200 block font-mono">RESEARCH</span>
                  <span className="font-bold text-white text-[11px]">Teen User Personas</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'realtime-chat-app':
        return (
          <div className="w-full bg-white rounded-2xl p-5 text-gray-800 shadow-xl border border-gray-200 font-sans">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-extrabold text-[#0B1F33]">#engineering-chat</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-mono text-[10px] font-bold">
                WEBSOCKETS CONNECTED
              </span>
            </div>

            <div className="pt-4 space-y-2.5 text-xs">
              <div className="p-2.5 rounded-2xl rounded-tl-sm bg-gray-100 max-w-[85%] text-gray-700">
                <div className="font-bold text-[10px] text-gray-500 mb-0.5">Teammate</div>
                Pavan, is the Django Channels ASGI connection handling real-time rooms?
              </div>

              <div className="p-2.5 rounded-2xl rounded-tr-sm bg-[#0877B9] text-white ml-auto max-w-[85%]">
                <div className="font-bold text-[10px] text-blue-200 mb-0.5 text-right">Pavan</div>
                Yes! Full-duplex WebSockets with instant broadcast and zero HTTP polling. 🚀
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-gray-400 border-t border-gray-100">
                <span>Latency: &lt;18ms</span>
                <span>PostgreSQL History Saved ✓</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#36393F] relative select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single-line heading aligned with the left edge of the browser card */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F7FA] font-display whitespace-nowrap">
            MY <span className="text-[#00A9C7]">PROJECTS</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#FF791F] rounded-full mt-3" />
        </div>

        {/* ONE LARGE ELEGANT BROWSER-INSPIRED CONTENT AREA */}
        <div className="bg-[#F1F3F5] rounded-3xl shadow-2xl border border-[#5C6068]/60 overflow-hidden relative transition-all duration-300">
          
          {/* BROWSER TOP CHROME BAR */}
          <div className="bg-[#E4E7EB] border-b border-[#5C6068]/40 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            
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
              <div className="flex items-center space-x-1 pl-2 text-gray-500">
                <button
                  onClick={handleCloseProject}
                  disabled={!activeProjectId}
                  aria-label="Back to project hub"
                  className={`p-1 rounded hover:bg-gray-200 transition-colors ${
                    activeProjectId ? 'text-gray-700 cursor-pointer' : 'text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled
                  aria-label="Forward"
                  className="p-1 rounded text-gray-300 cursor-not-allowed"
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
                  className="p-1 rounded hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center: Clean Address Bar */}
            <div className="flex-1 max-w-xl mx-auto px-2">
              <div className="bg-white rounded-full px-4 py-1.5 border border-gray-200 shadow-xs flex items-center justify-center space-x-2 text-xs font-mono text-gray-700">
                <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span className="truncate tracking-wide select-all font-medium">
                  {currentAddress}
                </span>
              </div>
            </div>

            {/* Right: Browser Icons */}
            <div className="flex items-center space-x-2 text-gray-500 pr-1">
              <button 
                aria-label="Bookmark" 
                className="p-1.5 rounded hover:bg-gray-200 transition-colors"
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
                className="p-1.5 rounded hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* INNER BROWSER PAGE VIEWPORT */}
          <div className="relative min-h-[720px] lg:min-h-[760px] bg-gradient-to-b from-[#F1F3F5] via-[#EAECEF] to-[#F1F3F5] p-6 sm:p-10 lg:p-12 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
            
            {/* Subtle Ambient Background Glows */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#DCEFEF]/40 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/4 right-8 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

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
                  <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#0B1F33]">
                    Pavan's <span className="text-[#00A9C7]">Project</span> <span className="text-[#FF791F]">Hub</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
                    Explore the projects I've built, learned from and grown with.
                  </p>
                </div>

                {/* Pill Search Field with Sliders Filter Icon */}
                <div className="w-full max-w-2xl mx-auto mb-10">
                  <div className="relative flex items-center">
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for projects, technologies or keywords..."
                      className="w-full pl-12 pr-12 py-3.5 bg-white rounded-full border border-gray-300 shadow-xs text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A9C7] focus:border-transparent transition-all"
                    />
                    <div className="absolute right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                      <SlidersHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                  {searchQuery && (
                    <div className="mt-2 text-center text-xs font-mono text-gray-500">
                      Showing {filteredProjects.length} of {allProjects.length} projects
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-[#00A9C7] font-bold hover:underline"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>

                {/* Left-Aligned Heading: "My Work ──" */}
                <div className="w-full flex items-center mb-6 pl-2 sm:pl-4">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1F33] tracking-tight font-display">
                    My Work
                  </h3>
                  <div className="h-0.5 w-12 bg-gray-300 ml-3 rounded-full" />
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
                            <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-transparent">
                              {renderProjectIcon(proj.id)}
                            </div>
                          </button>

                          {/* Project Name Below Circle */}
                          <span className="font-bold text-xs text-[#0B1F33] text-center mt-2.5 max-w-[125px] leading-tight group-hover:text-[#00A9C7] transition-colors">
                            {visual.shortName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-full py-16 text-center text-gray-500 font-sans">
                    <p className="text-base font-semibold">No projects found matching "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-3 px-4 py-1.5 rounded-full bg-[#DCEFEF] text-[#167D7F] text-xs font-mono font-bold hover:bg-[#c9e8e8] transition-colors"
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
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-200">
                  <button
                    onClick={handleCloseProject}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold text-[#00A9C7] hover:text-[#0B1F33] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Project Hub</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                      Press × to return
                    </span>
                    <button
                      onClick={handleCloseProject}
                      aria-label="Close project view"
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black flex items-center justify-center transition-colors text-lg font-bold cursor-pointer"
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
                        <span className="px-3 py-1 rounded-full bg-[#DCEFEF] text-[#167D7F] text-xs font-mono font-bold uppercase">
                          {currentProject.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-orange-100 text-[#FF791F] text-xs font-mono font-bold uppercase">
                          {currentProject.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F33] font-display tracking-tight leading-tight">
                        {currentProject.name}
                      </h2>

                      <p className="text-sm sm:text-base font-semibold text-[#167D7F] font-sans">
                        {currentProject.tagline}
                      </p>
                    </div>

                    {/* Concise Relevant Overview */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                      {currentProject.description}
                    </p>

                    {/* Top 3 Relevant Highlights Only */}
                    <div className="space-y-2 pt-1">
                      {currentProject.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00A9C7] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-800 leading-snug">
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
                            className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-800 text-xs font-mono font-semibold shadow-2xs"
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
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#36393F] text-white text-xs font-mono font-bold hover:bg-[#00A9C7] transition-colors shadow-sm"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-mono font-medium">
                          <span>Institutional / Private Repository</span>
                        </div>
                      )}

                      <button
                        onClick={handleCloseProject}
                        className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-xs font-mono font-bold hover:bg-gray-100 transition-colors"
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
