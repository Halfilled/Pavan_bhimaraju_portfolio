import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Minus, User, Code, FolderGit2, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
}

interface PersonalAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
}

export const PersonalAgentModal: React.FC<PersonalAgentModalProps> = ({
  isOpen,
  onClose,
  initialQuestion
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'agent',
      text: "Hello, this is Pavan’s agent. You can ask me anything about Pavan’s projects, skills, leadership, experience, or background.",
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuestion) {
      handleUserSubmit(initialQuestion);
    }
  }, [initialQuestion]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const getAgentResponse = (query: string): { text: string; links?: { label: string; url: string }[] } => {
    const q = query.toLowerCase();

    if (q.includes('gitguardian') || q.includes('security') || q.includes('agentic')) {
      return {
        text: "GitGuardian AI is Pavan's signature AI engineering project: an agentic code security review platform. It orchestrates specialized agents using LangGraph for static analysis, security auditing, and architecture evaluation. Built with Django, DRF, LangGraph, LangChain, Celery, Redis, and OpenAI, it accepts GitHub URLs or ZIP files, processes scans asynchronously, and generates downloadable PDF reports.",
        links: [
          { label: 'View GitHub Repository', url: 'https://github.com/Pavan8930/gitguardian-ai' },
          { label: 'Jump to Project Browser', url: '#projects' }
        ]
      };
    }

    if (q.includes('project') || q.includes('built') || q.includes('mostly')) {
      return {
        text: "Pavan has engineered several real-world applications:\n1. GitGuardian AI — Agentic AI code security review platform (LangGraph, Celery, Redis, OpenAI).\n2. Smart Hospital Queue & Appointment System — Distributed queue management platform (Django, PostgreSQL, Redis, Celery).\n3. Healthcare Management System — Full-stack platform with Stripe/PayPal payments & RBAC.\n4. Teen Wellness App — Habit streaks and youth mental wellness analytics from his TEKNOV8R internship.\n5. Real-Time Chat Application — Full-duplex WebSocket messaging engine (Django Channels & Tailwind).",
        links: [
          { label: 'GitGuardian AI Repo', url: 'https://github.com/Pavan8930/gitguardian-ai' },
          { label: 'Hospital Queue Repo', url: 'https://github.com/Pavan8930/hospital-queue-system' }
        ]
      };
    }

    if (q.includes('technology') || q.includes('stack') || q.includes('use') || q.includes('skill')) {
      return {
        text: "Pavan's technical repertoire spans:\n• AI & Data: LangGraph, LangChain, OpenAI API, Python, NumPy, Pandas.\n• Programming & CS: Python (DSA & OOP), JavaScript (ES6+), SQL, Operating Systems, Computer Networks.\n• Web & Distributed: Django, Django REST Framework, Flask, Celery, Redis, WebSockets (Channels), Tailwind CSS, Bootstrap.\n• Developer Tools: Git, GitHub, Docker, VS Code, Android Studio.\nHe actively solves Data Structures & Algorithms challenges on LeetCode using Python.",
        links: [
          { label: 'View LeetCode Profile', url: 'https://leetcode.com/u/pavanbhimaraju/' },
          { label: 'Explore Skill Constellation', url: '#skills' }
        ]
      };
    }

    if (q.includes('leadership') || q.includes('ecell') || q.includes('iit bombay') || q.includes('bizverve') || q.includes('street cause')) {
      return {
        text: "Pavan holds major leadership credentials:\n• Vice President, BiZverve (Business & Entrepreneurship Club): Organized an inter-college summit for 250+ participants across Vizag.\n• E-Cell President: Led the ANITS team to the Grand Finals of the National Entrepreneurship Challenge at IIT Bombay.\n• IIC Coordinator: Spearheaded Department of CSE innovation and patent awareness programs.\n• Divisional President & Executive Board Member, Street Cause NGO: Coordinated city-wide social impact and student community welfare.",
        links: [
          { label: 'Explore Campus Map & Leadership', url: '#beyond-code' },
          { label: 'View Achievements Gallery', url: '#achievements' }
        ]
      };
    }

    if (q.includes('goal') || q.includes('about') || q.includes('career') || q.includes('who')) {
      return {
        text: "Pavan is a Computer Science Engineering student (2023–2027) with an 8.27 CGPA at ANITS, Visakhapatnam. He specializes in AI systems, scalable backend architectures, and algorithmic problem solving. He is eager to take on Software Engineering, Full-Stack, or AI-focused roles where he can deploy reliable, high-performance distributed solutions.",
        links: [
          { label: 'Email Pavan', url: 'mailto:pavanbhimaraju4@gmail.com' },
          { label: 'Connect on LinkedIn', url: 'https://linkedin.com/in/pavanbhimaraju' }
        ]
      };
    }

    return {
      text: "Pavan is a Computer Science Engineer specializing in AI (GitGuardian AI), distributed backends (Hospital Queue System, Celery, Redis), and entrepreneurship leadership (IIT Bombay NEC finalist, BiZverve VP). You can ask me about his projects, skills, TEKNOV8R internship, or contact information!",
      links: [
        { label: 'Pavan’s GitHub', url: 'https://github.com/Pavan8930' },
        { label: 'Pavan’s LinkedIn', url: 'https://linkedin.com/in/pavanbhimaraju' }
      ]
    };
  };

  const handleUserSubmit = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: queryText,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const resp = getAgentResponse(queryText);
      const agentMsg: Message = {
        sender: 'agent',
        text: resp.text,
        timestamp: 'Just now',
        links: resp.links
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 400);
  };

  const suggestedCards = [
    {
      label: "Want to know about me?",
      icon: <User className="w-4 h-4 text-[#00A9C7]" />,
      bg: "bg-[#DCEFEF]/70",
      border: "border-[#BCE4E6]",
      query: "Want to know about me?"
    },
    {
      label: "What technologies do I mostly use?",
      icon: <Code className="w-4 h-4 text-[#167D7F]" />,
      bg: "bg-white",
      border: "border-gray-200",
      query: "What technologies do he mostly use?"
    },
    {
      label: "What projects has Pavan built?",
      icon: <FolderGit2 className="w-4 h-4 text-[#FF791F]" />,
      bg: "bg-[#FFF4EC]",
      border: "border-[#FFE5D2]",
      query: "What projects has Pavan built?"
    },
    {
      label: "Tell me about my leadership experience.",
      icon: <Users className="w-4 h-4 text-[#167D7F]" />,
      bg: "bg-[#E6F9F5]",
      border: "border-[#C9F3EB]",
      query: "Tell me about his leadership experience."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container matching reference pick 5 exactly */}
      <div className="relative w-full max-w-3xl bg-[#F1F3F5] rounded-3xl shadow-2xl border border-[#5C6068] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Vibrant Gradient Header */}
        <div className="bg-gradient-to-r from-[#00A9C7] to-[#167D7F] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base tracking-wide">
                PAVAN'S AI PERSONAL AGENT
              </h3>
              <p className="text-[11px] text-white/80 font-sans">
                Knowledge Base: Projects, Skills, Leadership & Experience
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F1F3F5]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'agent' && (
                <div className="w-8 h-8 rounded-lg bg-[#00A9C7] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.sender === 'agent' && (
                  <div className="flex items-center space-x-1.5 text-[11px] text-gray-500 font-medium mb-1">
                    <span className="font-bold text-gray-800">PAVAN'S AI AGENT</span>
                    <span>• {msg.timestamp}</span>
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#00A9C7] text-white font-medium rounded-br-sm shadow-sm'
                      : 'bg-white text-gray-800 border-2 border-[#00A9C7]/20 border-l-4 border-l-[#00A9C7] shadow-soft-card rounded-tl-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-wrap gap-2">
                      {msg.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target={link.url.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          onClick={() => {
                            if (link.url.startsWith('#')) onClose();
                          }}
                          className="inline-flex items-center space-x-1 px-3 py-1 bg-[#DCEFEF] hover:bg-[#00A9C7] hover:text-white text-[#167D7F] text-xs font-bold rounded-lg transition-colors"
                        >
                          <span>{link.label}</span>
                          <span>→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-xs text-gray-400 font-medium pl-11">
              <span className="w-2 h-2 rounded-full bg-[#00A9C7] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#167D7F] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#FF791F] animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1 text-gray-500">Pavan's agent is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions Grid matching reference 5 */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF791F]" />
            <span>SUGGESTED QUESTIONS:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {suggestedCards.map((card, cIdx) => (
              <button
                key={cIdx}
                onClick={() => handleUserSubmit(card.query)}
                className={`p-3 rounded-2xl ${card.bg} border ${card.border} hover:shadow-md transition-all text-left flex items-center justify-between group cursor-pointer`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-white rounded-lg shadow-xs shrink-0">
                    {card.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">
                    {card.label}
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all text-xs">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Question Input Field matching reference 5 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserSubmit(inputValue);
          }}
          className="p-4 bg-[#F1F3F5] border-t border-gray-200 flex items-center space-x-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything about Pavan’s projects, skills, leadership, or background..."
            className="flex-1 bg-white border border-gray-300 rounded-2xl px-5 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00A9C7] focus:ring-1 focus:ring-[#00A9C7] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-6 py-3 bg-[#00A9C7] disabled:bg-gray-300 disabled:text-gray-500 hover:bg-[#0092ad] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>ASK</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
