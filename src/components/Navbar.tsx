import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GoogleDriveIcon } from './SocialIcons';

interface NavbarProps {
  onOpenAgent: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAgent, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ASK', href: '#agent', id: 'agent' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'BEYOND CODE', href: '#beyond-code', id: 'beyond-code' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#C6D0D9]/95 backdrop-blur-md shadow-sm border-b border-[#3A0F34]/15 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity matching reference */}
          <a href="#agent" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#3A0F34] flex items-center justify-center font-black text-[#EAAA00] text-lg shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-[#3A0F34] group-hover:text-[#EAAA00] transition-colors leading-tight">
                PAVAN BHIMARAJU
              </span>
              <span className="text-[10px] tracking-wider uppercase font-bold text-[#3A0F34]/80">
                CS ENGINEER • AI & DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs font-bold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#3A0F34] font-black' 
                      : 'text-[#3A0F34]/75 hover:text-[#3A0F34]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EAAA00] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Social Icons matching reference */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://github.com/Pavan8930"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#3A0F34] hover:bg-[#EAAA00] hover:text-[#3A0F34] flex items-center justify-center transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/pavanbhimaraju"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#3A0F34] hover:bg-[#EAAA00] hover:text-[#3A0F34] flex items-center justify-center transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:pavanbhimaraju4@gmail.com"
              className="w-8 h-8 rounded-full bg-white text-[#3A0F34] hover:bg-[#EAAA00] hover:text-[#3A0F34] flex items-center justify-center transition-all shadow-sm"
              title="Google Drive / Resume"
            >
              <GoogleDriveIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAgent}
              className="flex items-center space-x-1 px-3 py-1.5 bg-[#EAAA00] hover:bg-[#D49800] text-[#3A0F34] font-black text-xs rounded-full shadow-xs cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3A0F34] hover:text-[#EAAA00] cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#C6D0D9] border-b border-[#3A0F34]/15 px-6 py-4 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold uppercase tracking-wider text-[#3A0F34] hover:text-[#EAAA00]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center space-x-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAgent();
              }}
              className="w-full py-2.5 bg-[#EAAA00] hover:bg-[#D49800] text-[#3A0F34] font-black rounded-lg text-sm flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>Ask About Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
