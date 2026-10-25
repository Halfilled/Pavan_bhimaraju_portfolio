import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Minus, User, Code, FolderGit2, Users } from 'lucide-react';

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
    const q = query.toLowerCase().trim();

    // 1. Specific GitGuardian / Code Security query
    if (q.includes('gitguardian') || q.includes('security review') || q.includes('agentic')) {
      return {
        text: "GitGuardian AI is Pavan's signature AI engineering project: an agentic code security review platform. It orchestrates specialized agents using LangGraph for static analysis, security auditing, and architecture evaluation. Built with Django, DRF, LangGraph, LangChain, Celery, Redis, and OpenAI, it accepts GitHub URLs or ZIP files, processes scans asynchronously, and generates downloadable PDF reports.",
        links: [
          { label: 'View GitHub Repository', url: 'https://github.com/Pavan8930/gitguardian-ai' },
          { label: 'Jump to Project Browser', url: '#projects' }
        ]
      };
    }

    // 2. Question: “What projects have I built?” / Projects query
    if (q.includes('project') || q.includes('built') || q.includes('application') || q.includes('portfolio work') || q.includes('hospital queue') || q.includes('chat app') || q.includes('wellness app')) {
      return {
        text: "Pavan has engineered several real-world applications across AI and scalable backend systems:\n\n• **Healthcare Management System**: A full-stack clinical practice portal featuring role-based access control (RBAC), multi-doctor appointment scheduling, Stripe and PayPal payment integration, and automated invoice delivery.\n\n• **Teen Wellness App**: A mobile wellness companion developed during his TEKNOV8R internship, delivering habit-tracking streaks, teenage mental wellness analytics, and responsive UI components.\n\n• **Real-Time Chat Application**: A full-duplex WebSocket messaging engine built with Django Channels and ASGI, providing sub-20ms broadcast latency, multi-room channels, and persistent PostgreSQL chat history.\n\n• **GitGuardian AI**: An autonomous agentic code security review platform orchestrating specialized LangGraph agents for static AST inspection, security vulnerability scoring, and automated PDF remediation reports.\n\n• **Smart Hospital Queue & Appointment Management System**: A distributed hospital queue orchestration platform managing patient appointments, live queue token displays, automated doctor room assignments, and SMS alerts via Redis and Celery.",
        links: [
          { label: 'GitGuardian AI Repo', url: 'https://github.com/Pavan8930/gitguardian-ai' },
          { label: 'Hospital Queue Repo', url: 'https://github.com/Pavan8930/hospital-queue-system' },
          { label: 'Jump to Project Browser', url: '#projects' }
        ]
      };
    }

    // 3. Question: “What technologies do I use?” / Technologies query
    if (q.includes('technolog') || q.includes('stack') || q.includes('skill') || q.includes('tools') || q.includes('languages') || (q.includes('what') && q.includes('use')) || q.includes('what tech')) {
      return {
        text: "I work with Python, JavaScript, SQL, HTML, and CSS. My main frameworks include Django, Django REST Framework, and Flask, along with Bootstrap and Tailwind CSS. I also use Git and GitHub, and work with libraries such as NumPy and Pandas. My key technical interests include AI/LLMs, backend development, and Data Structures & Algorithms.",
        links: [
          { label: 'View LeetCode Profile', url: 'https://leetcode.com/u/pavanbhimaraju/' },
          { label: 'Explore Skill Constellation', url: '#skills' }
        ]
      };
    }

    // 4. AI & LLMs specific query
    if (q.includes('ai & llm') || q.includes('ai & llms') || q.includes('llm')) {
      return {
        text: "In AI & LLMs, Pavan develops agentic workflows and multi-agent systems using LangGraph, LangChain, and the OpenAI API. His flagship AI project, GitGuardian AI, coordinates autonomous agents to execute static code analysis, security auditing, and automated remediation reporting.",
        links: [
          { label: 'GitGuardian AI Repository', url: 'https://github.com/Pavan8930/gitguardian-ai' },
          { label: 'Explore AI & Data Skills', url: '#skills' }
        ]
      };
    }

    // 5. Backend Systems specific query
    if (q.includes('backend system') || q.includes('backend')) {
      return {
        text: "In Backend Systems, Pavan specializes in building scalable, distributed web architectures using Python, Django, Django REST Framework, Flask, PostgreSQL, Redis, Celery, and WebSockets (Django Channels). He focuses on asynchronous background task queues, real-time messaging, and robust database design.",
        links: [
          { label: 'Hospital Queue System Repo', url: 'https://github.com/Pavan8930/hospital-queue-system' },
          { label: 'Explore Web & Backend Skills', url: '#skills' }
        ]
      };
    }

    // 6. Leadership Query
    if (q.includes('leadership') || q.includes('ecell') || q.includes('iit bombay') || q.includes('bizverve') || q.includes('street cause')) {
      return {
        text: "Pavan holds major leadership credentials:\n• Vice President, BiZverve (Business & Entrepreneurship Club): Organized an inter-college summit for 250+ participants across Vizag.\n• E-Cell President: Led the ANITS team to the Grand Finals of the National Entrepreneurship Challenge at IIT Bombay.\n• IIC Coordinator: Spearheaded Department of CSE innovation and patent awareness programs.\n• Divisional President & Executive Board Member, Street Cause NGO: Coordinated city-wide social impact and student community welfare.",
        links: [
          { label: 'Explore Campus Map & Leadership', url: '#beyond-code' },
          { label: 'View Achievements Gallery', url: '#achievements' }
        ]
      };
    }

    // 7. General About / Bio / Career Query
    if (q.includes('goal') || q.includes('about') || q.includes('career') || q.includes('who') || q.includes('know about me') || q.includes('background')) {
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
      icon: <User className="w-4 h-4 text-[#EAAA00]" />,
      bg: "bg-[#C6D0D9]/40",
      border: "border-[#3A0F34]/15",
      query: "Want to know about me?"
    },
    {
      label: "What technologies do I use?",
      icon: <Code className="w-4 h-4 text-[#3A0F34]" />,
      bg: "bg-white",
      border: "border-[#3A0F34]/15",
      query: "What technologies do I use?"
    },
    {
      label: "What projects have I built?",
      icon: <FolderGit2 className="w-4 h-4 text-[#EAAA00]" />,
      bg: "bg-[#C6D0D9]/40",
      border: "border-[#3A0F34]/15",
      query: "What projects have I built?"
    },
    {
      label: "Tell me about my leadership experience.",
      icon: <Users className="w-4 h-4 text-[#3A0F34]" />,
      bg: "bg-white",
      border: "border-[#3A0F34]/15",
      query: "Tell me about my leadership experience."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#3A0F34]/70 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#3A0F34]/20 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-[#3A0F34] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#EAAA00]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base tracking-wide text-white">
                PAVAN'S AI PERSONAL AGENT
              </h3>
              <p className="text-[11px] text-white/70 font-sans">
                Knowledge Base: Projects, Skills, Leadership & Experience
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Minimize modal"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#C6D0D9]/20">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'agent' && (
                <div className="w-8 h-8 rounded-lg bg-[#3A0F34] text-[#EAAA00] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.sender === 'agent' && (
                  <div className="flex items-center space-x-1.5 text-[11px] text-[#3A0F34]/60 font-medium mb-1">
                    <span className="font-bold text-[#3A0F34]">PAVAN'S AI AGENT</span>
                    <span>• {msg.timestamp}</span>
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#3A0F34] text-white font-medium rounded-br-sm shadow-sm'
                      : 'bg-white text-[#3A0F34] border border-[#3A0F34]/15 border-l-4 border-l-[#EAAA00] shadow-sm rounded-tl-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#3A0F34]/10 flex flex-wrap gap-2">
                      {msg.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target={link.url.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          onClick={() => {
                            if (link.url.startsWith('#')) onClose();
                          }}
                          className="inline-flex items-center space-x-1 px-3 py-1 bg-[#C6D0D9] hover:bg-[#EAAA00] text-[#3A0F34] text-xs font-bold rounded-lg transition-colors"
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
            <div className="flex items-center space-x-2 text-xs text-[#3A0F34]/60 font-medium pl-11">
              <span className="w-2 h-2 rounded-full bg-[#3A0F34] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#EAAA00] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#4E1746] animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1 text-[#3A0F34]/70">Pavan's agent is typing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions Grid */}
        <div className="p-4 bg-white border-t border-[#3A0F34]/15">
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-[#3A0F34]/60 uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#EAAA00]" />
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
                  <span className="text-xs font-bold text-[#3A0F34] leading-tight">
                    {card.label}
                  </span>
                </div>
                <span className="text-[#3A0F34]/40 group-hover:text-[#EAAA00] group-hover:translate-x-0.5 transition-all text-xs">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Question Input Field */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserSubmit(inputValue);
          }}
          className="p-4 bg-[#E8EDF2] border-t border-[#3A0F34]/15 flex items-center space-x-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything about Pavan’s projects, skills, leadership, or background..."
            className="flex-1 bg-white border border-[#3A0F34]/20 rounded-2xl px-5 py-3 text-xs sm:text-sm text-[#3A0F34] placeholder-[#3A0F34]/40 focus:outline-none focus:border-[#EAAA00] focus:ring-1 focus:ring-[#EAAA00] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-6 py-3 bg-[#EAAA00] disabled:bg-gray-200 disabled:text-gray-400 hover:bg-[#D49800] text-[#3A0F34] font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>ASK</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
