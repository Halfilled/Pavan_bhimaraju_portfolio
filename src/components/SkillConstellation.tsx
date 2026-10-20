import React, { useState, useRef, useEffect } from 'react';
import { X, Brain, Code, Globe, Wrench, Sparkles, ExternalLink } from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  usedIn: string[];
  iconType: string;
}

interface ParentCategory {
  id: string;
  title: string;
  color: string;
  activeBorder: string;
  glowColor: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

interface SkillConstellationProps {
  onSelectProject?: (projectId: string) => void;
}

export const SkillConstellation: React.FC<SkillConstellationProps> = ({ onSelectProject }) => {
  // Requirement 6: Initially show only root and 4 parent nodes. Hide children initially.
  const [expandedParentId, setExpandedParentId] = useState<string | null>(null);
  const [selectedChildSkill, setSelectedChildSkill] = useState<SkillItem | null>(null);

  const treeContainerRef = useRef<HTMLDivElement>(null);
  const rootNodeRef = useRef<HTMLDivElement>(null);
  const parentNodeRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const childNodeRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const [parentLines, setParentLines] = useState<{ x1: number; y1: number; x2: number; y2: number; id: string }[]>([]);
  const [childLines, setChildLines] = useState<{ x1: number; y1: number; x2: number; y2: number; id: string }[]>([]);

  const categories: ParentCategory[] = [
    {
      id: 'ai-data',
      title: 'AI & Data',
      color: '#00A9C7',
      activeBorder: 'border-[#00A9C7]',
      glowColor: 'rgba(0, 169, 199, 0.25)',
      icon: <Brain className="w-9 h-9 text-[#00A9C7]" />,
      skills: [
        {
          id: 'python-ai',
          name: 'Python',
          category: 'Programming Language · AI & Data',
          description: 'Used for programming and data-related tasks, including data processing and AI-oriented application development across Pavan’s projects.',
          usedIn: ['Data Analysis', 'Machine Learning', 'GitGuardian AI'],
          iconType: 'python'
        },
        {
          id: 'data-analysis',
          name: 'Data Analysis',
          category: 'Analytics & Processing',
          description: 'Extracting, aggregating, and transforming structured datasets using Pandas and NumPy to glean actionable engineering insights.',
          usedIn: ['Pandas', 'NumPy'],
          iconType: 'chart'
        },
        {
          id: 'numpy',
          name: 'NumPy',
          category: 'Scientific Computing',
          description: 'Vectorized mathematical array processing, multi-dimensional slicing, and algorithmic calculations.',
          usedIn: ['Scientific Math', 'Data Analysis'],
          iconType: 'numpy'
        },
        {
          id: 'pandas',
          name: 'Pandas',
          category: 'Data Manipulation',
          description: 'Tabular DataFrames manipulation, CSV/JSON dataset cleansing, filtering, grouping, and statistical summaries.',
          usedIn: ['Data Analysis', 'Feature Prep'],
          iconType: 'pandas'
        },
        {
          id: 'ai-llms',
          name: 'AI & LLMs',
          category: 'Agentic Workflows',
          description: 'Building multi-agent autonomous code security audit systems with LangGraph, LangChain, and OpenAI LLM APIs.',
          usedIn: ['GitGuardian AI', 'Agent Workflows'],
          iconType: 'llm'
        },
        {
          id: 'machine-learning',
          name: 'Machine Learning',
          category: 'Predictive Modeling',
          description: 'Applied machine learning fundamentals, feature engineering, classification models, and algorithmic evaluations where supported by coursework.',
          usedIn: ['Python', 'Data Analysis'],
          iconType: 'ml'
        }
      ]
    },
    {
      id: 'programming-dsa',
      title: 'Programming & DSA',
      color: '#FF791F',
      activeBorder: 'border-[#FF791F]',
      glowColor: 'rgba(255, 121, 31, 0.25)',
      icon: <Code className="w-9 h-9 text-[#FF791F]" />,
      skills: [
        {
          id: 'python-core',
          name: 'Python',
          category: 'Primary Language · Algorithms',
          description: 'Primary programming language for problem-solving, algorithmic challenge implementations, object-oriented design, and clean scripting.',
          usedIn: ['LeetCode', 'DSA', 'Backend Systems'],
          iconType: 'python'
        },
        {
          id: 'java',
          name: 'Java',
          category: 'Object-Oriented Language',
          description: 'NPTEL certified (IIT Kharagpur) in Java programming: OOP design principles, collections framework, multi-threading, and exception handling.',
          usedIn: ['NPTEL IIT Kharagpur', 'Coursework'],
          iconType: 'java'
        },
        {
          id: 'data-structures-algo',
          name: 'Data Structures & Algorithms',
          category: 'Computer Science Core',
          description: 'Hands-on mastery of arrays, linked lists, trees, graphs, heaps, dynamic programming, and asymptotic algorithmic complexity analysis.',
          usedIn: ['LeetCode Solver', 'ANITS Core'],
          iconType: 'tree'
        },
        {
          id: 'problem-solving',
          name: 'Problem Solving',
          category: 'Analytical Thinking',
          description: 'Systematic approach to breaking down complex technical challenges into optimal, scalable code solutions on LeetCode.',
          usedIn: ['LeetCode', 'Competitive Practice'],
          iconType: 'bulb'
        }
      ]
    },
    {
      id: 'web-backend',
      title: 'Web Development & Backend',
      color: '#0877B9',
      activeBorder: 'border-[#0877B9]',
      glowColor: 'rgba(8, 119, 185, 0.25)',
      icon: <Globe className="w-9 h-9 text-[#0877B9]" />,
      skills: [
        {
          id: 'html-css',
          name: 'HTML & CSS',
          category: 'Frontend Foundations',
          description: 'Semantic markup, accessible layout architecture, responsive Flexbox/Grid systems, and custom design systems.',
          usedIn: ['Healthcare Platform', 'Teen Wellness App'],
          iconType: 'html'
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          category: 'Client Scripting',
          description: 'Modern ES6+ syntax, asynchronous event loops, DOM manipulation, promises, and interactive client components.',
          usedIn: ['Web Apps', 'Interactive UI'],
          iconType: 'js'
        },
        {
          id: 'django',
          name: 'Django',
          category: 'Full-Stack Framework',
          description: 'Model-View-Template architecture, ORM optimization, auth middleware, and secure web application development.',
          usedIn: ['GitGuardian AI', 'Hospital Queue System'],
          iconType: 'django'
        },
        {
          id: 'drf',
          name: 'Django REST',
          category: 'API Engineering',
          description: 'Building secure, high-throughput RESTful APIs with token auth, serializers, ViewSets, and rate limiting.',
          usedIn: ['GitGuardian AI', 'Hospital Queue System'],
          iconType: 'drf'
        },
        {
          id: 'flask',
          name: 'Flask',
          category: 'Microservices',
          description: 'Lightweight microservice creation, dynamic routing, request handlers, and rapid backend prototyping.',
          usedIn: ['Microservices', 'API Tools'],
          iconType: 'flask'
        },
        {
          id: 'sql-databases',
          name: 'SQL & Databases',
          category: 'Relational Databases',
          description: 'PostgreSQL and SQLite relational schema design, query optimization, indexing, and ACID transaction safety.',
          usedIn: ['Hospital Queue', 'Healthcare Management'],
          iconType: 'db'
        },
        {
          id: 'apis',
          name: 'APIs & WebSockets',
          category: 'Distributed Integration',
          description: 'REST API design, Stripe/PayPal checkout integrations, transactional email endpoints, and real-time WebSockets with Django Channels.',
          usedIn: ['Real-Time Chat', 'Payment Workflows'],
          iconType: 'api'
        },
        {
          id: 'bootstrap',
          name: 'Bootstrap',
          category: 'UI Toolkit',
          description: 'Rapid responsive web layout design, component grids, and administrative portal prototyping.',
          usedIn: ['Healthcare Management System'],
          iconType: 'bootstrap'
        },
        {
          id: 'tailwind-css',
          name: 'Tailwind CSS',
          category: 'Utility Styling',
          description: 'Designing highly responsive, custom design token architectures with zero layout bloat and fast execution.',
          usedIn: ['Real-Time Chat App', 'Portfolio'],
          iconType: 'tailwind'
        }
      ]
    },
    {
      id: 'tools-dev',
      title: 'Tools & Development',
      color: '#167D7F',
      activeBorder: 'border-[#167D7F]',
      glowColor: 'rgba(22, 125, 127, 0.25)',
      icon: <Wrench className="w-9 h-9 text-[#167D7F]" />,
      skills: [
        {
          id: 'git-github',
          name: 'Git & GitHub',
          category: 'Version Control',
          description: 'Branch management, Git workflow hygiene, collaborative pull requests, release tagging, and open-source repository maintenance.',
          usedIn: ['GitGuardian AI', 'Hospital Queue', 'Team Projects'],
          iconType: 'github'
        },
        {
          id: 'vs-code',
          name: 'VS Code',
          category: 'Primary IDE',
          description: 'Optimized workspace configuration, Python/Django debugger tooling, linting, and integrated AI workflows.',
          usedIn: ['Daily Development', 'Debugging'],
          iconType: 'vscode'
        },
        {
          id: 'atom',
          name: 'Atom',
          category: 'Editor Tooling',
          description: 'Lightweight code editing, markdown documentation drafting, and quick script modifications.',
          usedIn: ['Documentation', 'Scripting'],
          iconType: 'atom'
        },
        {
          id: 'android-studio',
          name: 'Android Studio',
          category: 'Mobile Dev Tooling',
          description: 'SDK configuration, device emulation, mobile UI inspection, and debugging core mobile application components.',
          usedIn: ['Teen Wellness App', 'TEKNOV8R Internship'],
          iconType: 'android'
        }
      ]
    }
  ];

  // Dynamic SVG connector calculation touching the nodes cleanly
  const recalculateLines = () => {
    if (!treeContainerRef.current) return;
    const containerRect = treeContainerRef.current.getBoundingClientRect();

    // 1. Root center-bottom to each of the 4 parent nodes center-top
    if (rootNodeRef.current) {
      const rootRect = rootNodeRef.current.getBoundingClientRect();
      const rootBottomX = rootRect.left + rootRect.width / 2 - containerRect.left;
      const rootBottomY = rootRect.bottom - containerRect.top;

      const newParentLines = categories.map((cat) => {
        const pEl = parentNodeRefs.current[cat.id];
        if (pEl) {
          const pRect = pEl.getBoundingClientRect();
          return {
            x1: rootBottomX,
            y1: rootBottomY,
            x2: pRect.left + pRect.width / 2 - containerRect.left,
            y2: pRect.top - containerRect.top,
            id: cat.id
          };
        }
        return null;
      }).filter(Boolean) as { x1: number; y1: number; x2: number; y2: number; id: string }[];

      setParentLines(newParentLines);
    }

    // 2. Active selected parent center-bottom directly to its children center-top
    if (expandedParentId && parentNodeRefs.current[expandedParentId]) {
      const parentEl = parentNodeRefs.current[expandedParentId];
      if (parentEl) {
        const pRect = parentEl.getBoundingClientRect();
        const parentBottomX = pRect.left + pRect.width / 2 - containerRect.left;
        const parentBottomY = pRect.bottom - containerRect.top;

        const activeCat = categories.find(c => c.id === expandedParentId);
        if (activeCat) {
          const newChildLines = activeCat.skills.map((skill) => {
            const cEl = childNodeRefs.current[skill.id];
            if (cEl) {
              const cRect = cEl.getBoundingClientRect();
              return {
                x1: parentBottomX,
                y1: parentBottomY,
                x2: cRect.left + cRect.width / 2 - containerRect.left,
                y2: cRect.top - containerRect.top,
                id: skill.id
              };
            }
            return null;
          }).filter(Boolean) as { x1: number; y1: number; x2: number; y2: number; id: string }[];

          setChildLines(newChildLines);
        }
      }
    } else {
      setChildLines([]);
    }
  };

  useEffect(() => {
    recalculateLines();
    const timer1 = setTimeout(recalculateLines, 50);
    const timer2 = setTimeout(recalculateLines, 150);
    const handleResize = () => recalculateLines();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', handleResize);
    };
  }, [expandedParentId, selectedChildSkill]);

  const handleParentClick = (id: string) => {
    if (expandedParentId === id) {
      setExpandedParentId(null);
      setSelectedChildSkill(null);
    } else {
      setExpandedParentId(id);
      setSelectedChildSkill(null);
    }
  };

  const activeCategory = categories.find(c => c.id === expandedParentId);

  // SVG Helper Icons for Child Nodes - All clean vector graphics, matching Python (No text touching edges!)
  const renderChildIcon = (type: string) => {
    switch (type) {
      case 'python':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.47 2 6.88 4.41 6.88 4.41l.01 2.59h5.19v.88H4.62S2 7.57 2 12.09c0 4.53 2.29 4.35 2.29 4.35h1.37v-2.06s-.07-2.45 2.41-2.45h4.15v-.86H8.08s-.86-.06-.86-.88c0-.83.86-.84.86-.84h7.02s1.95.28 1.95-2.07c0-2.34-1.95-2.08-1.95-2.08H12V2zm-1.34 1.48c.45 0 .82.37.82.82s-.37.82-.82.82-.82-.37-.82-.82.37-.82.82-.82zM12 22c5.53 0 5.12-2.41 5.12-2.41l-.01-2.59h-5.19v-.88h7.46s2.62.31 2.62-4.21c0-4.53-2.29-4.35-2.29-4.35h-1.37v2.06s.07 2.45-2.41 2.45h-4.15v.86h4.14s.86.06.86.88c0 .83-.86.84-.86.84H8.9s-1.95-.28-1.95 2.07c0 2.34 1.95 2.08 1.95 2.08H12v2zm1.34-1.48c-.45 0-.82-.37-.82-.82s.37-.82.82-.82.82.37.82.82-.37.82-.82.82z" fill="#00A9C2" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#00A9C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      case 'numpy':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#00A9C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
          </svg>
        );
      case 'pandas':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#00A9C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="10" y1="4" x2="10" y2="20" />
          </svg>
        );
      case 'llm':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#00A9C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2M8 4h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <circle cx="9" cy="9" r="1" fill="#00A9C2" />
            <circle cx="15" cy="9" r="1" fill="#00A9C2" />
            <path d="M10 13h4M6 18v2M18 18v2M9 22h6" />
          </svg>
        );
      case 'ml':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#00A9C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        );
      case 'java':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
          </svg>
        );
      case 'tree':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="6" cy="19" r="2.5" />
            <circle cx="18" cy="19" r="2.5" />
            <path d="M10.5 7.2L7.5 16.8M13.5 7.2L16.5 16.8" />
          </svg>
        );
      case 'bulb':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3 2 5.5 3 7h8c1-1.5 3-4 3-7a7 7 0 0 0-7-7z" />
          </svg>
        );
      case 'html':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'js':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10 13a1 1 0 0 1 1 1v2a2 2 0 0 1-4 0M14 17h2a1.5 1.5 0 0 0 0-3h-2" />
          </svg>
        );
      case 'django':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M8 8v8a2 2 0 0 1-2-2M14 8v8M14 12a3 3 0 0 1 3-3v0a3 3 0 0 1 0 6" />
          </svg>
        );
      case 'drf':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="6" rx="2" />
            <rect x="2" y="15" width="20" height="6" rx="2" />
            <path d="M6 9v6M18 9v6" />
          </svg>
        );
      case 'flask':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6M10 3v6l-4 9a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-9V3" />
          </svg>
        );
      case 'db':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case 'api':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2" />
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
          </svg>
        );
      case 'bootstrap':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#0877B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#0877B9" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#167D7F" />
          </svg>
        );
      case 'vscode':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#167D7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <path d="M7 8l4 4-4 4M13 16h4" />
          </svg>
        );
      case 'atom':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#167D7F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2" fill="#167D7F" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
          </svg>
        );
      case 'android':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0004 0-.5511.4482-.9993 1-.9993.5511 0 .9993.4482.9993.9993 0 .5518-.4482 1.0004-.9993 1.0004m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0004 0-.5511.4482-.9993 1-.9993.5511 0 .9993.4482.9993.9993 0 .5518-.4482 1.0004-.9993 1.0004m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8 12 8s-3.5902.4116-5.1368 1.0906L4.841 5.4475a.4162.4162 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" fill="#167D7F" />
          </svg>
        );
      default:
        return <Sparkles className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="relative w-full py-24 bg-[#36393F] overflow-hidden select-none"
    >
      
      {/* Background Soft Glow matching Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[600px] bg-[#00A9C7]/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 
          REQUIREMENT 1 & 2:
          ONE UNIFIED, WIDE COMPOSITION WITHOUT SEPARATE CARDS!
          - No large white rounded box enclosing the tree.
          - Left: Heading "MY SKILLS", clean subtitle, and small orange underline.
          - Right: Wide hierarchical interactive tree directly on the continuous background.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Heading & Short Introduction (No card box) */}
          <div className="lg:col-span-3 space-y-4 pt-4 lg:sticky lg:top-28">
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F7FA] font-display leading-[0.95]">
                MY <br />
                <span className="text-[#00A9C7]">SKILLS</span>
              </h2>
              <div className="h-1.5 w-16 bg-[#FF791F] rounded-full mt-3" />
            </div>

            <p className="text-sm sm:text-base text-[#D5D7DC] font-sans leading-relaxed pt-2">
              A structured view of my engineering competencies, technical foundations, and project experience.
            </p>

            <div className="pt-2 text-xs font-mono text-[#D5D7DC] flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${expandedParentId ? 'bg-[#00A9C7] animate-pulse' : 'bg-[#5C6068]'}`} />
              <span>{expandedParentId ? `${activeCategory?.title} Active` : 'Select a domain to inspect'}</span>
            </div>
          </div>

          {/* RIGHT SIDE: Complete Wide Hierarchical Tree Directly on the Continuous Background */}
          <div className="lg:col-span-9 flex flex-col items-center">
            
            {/* The Tree Area (No enclosing card, purely open on page background) */}
            <div 
              ref={treeContainerRef}
              className="relative w-full flex flex-col items-center overflow-visible py-2"
            >
              
              {/* Dynamic SVG Connector Lines Overlay */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ overflow: 'visible' }}
              >
                {/* 1. Straight Angular Lines from Root to the 4 Parent Nodes */}
                {parentLines.map((line) => {
                  const isCatExpanded = expandedParentId === line.id;
                  const cat = categories.find(c => c.id === line.id);
                  return (
                    <line
                      key={`root-parent-${line.id}`}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke={isCatExpanded ? (cat?.color || '#00A9C7') : '#5C6068'}
                      strokeWidth={isCatExpanded ? '3.5' : '2'}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* 2. Direct Angular Lines from Selected Parent Directly to Its Children */}
                {childLines.map((line) => (
                  <line
                    key={`parent-child-${line.id}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={activeCategory?.color || '#00A9C7'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                ))}
              </svg>

              {/* LEVEL 1: THE ROOT NODE ("MY SKILLS") */}
              <div 
                ref={rootNodeRef}
                className="relative z-20 flex flex-col items-center mb-10 sm:mb-14"
              >
                <div className="relative group cursor-default">
                  {/* Orbit Ring */}
                  <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#00A9C7] opacity-70 animate-spin-slow pointer-events-none" />
                  
                  {/* Glowing Disc */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#36393F] to-[#25272B] border-4 border-[#00A9C7] shadow-xl flex flex-col items-center justify-center text-center p-3 text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#00A9C7] font-bold">
                      CORE
                    </span>
                    <span className="text-sm sm:text-base font-black uppercase tracking-wider leading-tight text-[#F5F7FA]">
                      MY<br />SKILLS
                    </span>
                  </div>
                </div>
              </div>

              {/* LEVEL 2: THE 4 PARENT NODES (Wide distribution, balanced spacing) */}
              <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-20 mb-8">
                {categories.map((cat) => {
                  const isExpanded = expandedParentId === cat.id;

                  return (
                    <div key={cat.id} className="flex flex-col items-center">
                      <button
                        ref={el => { parentNodeRefs.current[cat.id] = el; }}
                        onClick={() => handleParentClick(cat.id)}
                        className={`w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-[#F1F3F5] transition-all duration-300 flex flex-col items-center justify-center p-3 text-center group cursor-pointer relative ${
                          isExpanded
                            ? `ring-4 ${cat.activeBorder} shadow-2xl scale-105 z-30`
                            : 'border-2 border-[#5C6068]/40 hover:border-[#00A9C7] shadow-md hover:scale-102'
                        }`}
                        style={{
                          boxShadow: isExpanded ? `0 12px 32px ${cat.glowColor}` : undefined
                        }}
                        title={`Click to ${isExpanded ? 'collapse' : 'expand'} ${cat.title}`}
                      >
                        {/* Parent Icon */}
                        <div className="mb-1.5 transform group-hover:scale-110 transition-transform">
                          {cat.icon}
                        </div>

                        {/* Parent Title */}
                        <span className="font-extrabold text-xs sm:text-sm text-gray-900 uppercase tracking-tight leading-tight px-1 max-w-[130px]">
                          {cat.title}
                        </span>

                        {/* Action badge */}
                        <span 
                          className="mt-1 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase"
                          style={{
                            backgroundColor: isExpanded ? cat.color : '#E4E7EB',
                            color: isExpanded ? '#FFFFFF' : '#4B5563'
                          }}
                        >
                          {isExpanded ? 'EXPANDED' : 'CLICK TO VIEW'}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* 
                REQUIREMENT 3 & 4:
                EXPANDED CHILD BRANCH CENTERED BENEATH ITS ACTIVE PARENT
                - Equal horizontal spacing between child nodes.
                - Each child label directly below its own circle.
                - Readable text with clean two-line wrapping, no label overlap.
                - Direct angular SVG connector lines visibly meeting parent and child circles.
              */}
              {activeCategory && (
                <div className="w-full mt-2 pt-4 flex flex-col items-center relative z-20 animate-fadeIn">
                  
                  {/* Clean Child Nodes Row: All arranged equally in a single balanced row, medium size */}
                  <div className="flex items-start justify-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full max-w-full overflow-x-auto py-2 px-1 scrollbar-none">
                    {activeCategory.skills.map((skill) => {
                      const isSelected = selectedChildSkill?.id === skill.id;

                      return (
                        <div key={skill.id} className="flex flex-col items-center flex-shrink-0 w-16 sm:w-18 md:w-20">
                          <button
                            ref={el => { childNodeRefs.current[skill.id] = el; }}
                            onClick={() => setSelectedChildSkill(isSelected ? null : skill)}
                            className={`w-13 h-13 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-full bg-[#F1F3F5] transition-all duration-200 flex items-center justify-center p-2 group cursor-pointer relative ${
                              isSelected
                                ? 'ring-3 ring-[#FF791F] shadow-md scale-105 z-30'
                                : 'border-2 border-[#5C6068]/40 hover:border-[#00A9C7] shadow-sm hover:scale-103'
                            }`}
                            title={skill.name}
                          >
                            {renderChildIcon(skill.iconType)}
                          </button>

                          {/* Child Label directly below circle (clean wrapping, no clipping) */}
                          <span className={`text-[10px] sm:text-[11px] font-bold font-sans mt-2 tracking-tight text-center leading-snug w-full px-0.5 ${
                            isSelected ? 'text-[#FF791F]' : 'text-[#F5F7FA]'
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

            </div>

            {/* 
              REQUIREMENT 5:
              DESCRIPTION AREA DIRECTLY BELOW THE TREE WITHOUT ANOTHER CARD BOX!
              - Seamlessly integrated into the continuous background.
              - Refined medium size, spacious and readable with no heavy borders.
              - Features skill name, category, natural description, verified relevance, and × close control.
            */}
            {selectedChildSkill && (
              <div className="w-full max-w-2xl mt-8 pt-6 border-t border-[#5C6068] animate-fadeIn">
                <div className="relative pl-5 border-l-3 border-l-[#FF791F]">
                  
                  {/* Close button × */}
                  <button
                    onClick={() => setSelectedChildSkill(null)}
                    className="absolute top-0 right-0 w-7 h-7 rounded-full hover:bg-[#5C6068]/30 text-[#D5D7DC] hover:text-[#F5F7FA] flex items-center justify-center transition-colors text-lg font-bold"
                    aria-label="Close skill description"
                  >
                    ×
                  </button>

                  {/* Header: Skill Name + Category */}
                  <div className="space-y-0.5 mb-2 pr-8">
                    <h3 className="font-black text-xl sm:text-2xl text-[#F5F7FA] leading-tight font-display">
                      {selectedChildSkill.name}
                    </h3>
                    <span className="text-xs font-mono text-[#00A9C7] font-bold tracking-wide">
                      {selectedChildSkill.category}
                    </span>
                  </div>

                  {/* Natural concise description */}
                  <p className="text-sm sm:text-base text-[#D5D7DC] font-sans leading-relaxed my-2 max-w-2xl">
                    "{selectedChildSkill.description}"
                  </p>

                  {/* Verified Project Associations Strip */}
                  <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-mono uppercase font-bold text-[#D5D7DC]/70">
                        VERIFIED RELEVANCE:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedChildSkill.usedIn.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-[#36393F] text-[#00A9C7] border border-[#5C6068] text-xs font-mono font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Link to Project Section if applicable */}
                    {onSelectProject && selectedChildSkill.usedIn.some(t => t.includes('GitGuardian') || t.includes('Hospital')) && (
                      <button
                        onClick={() => {
                          const pId = selectedChildSkill.usedIn.some(t => t.includes('GitGuardian')) ? 'gitguardian-ai' : 'hospital-queue-system';
                          onSelectProject(pId);
                          const el = document.getElementById('projects');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#FF791F] hover:text-[#F5F7FA] uppercase transition-colors"
                      >
                        <span>View in Project Browser</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}
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
