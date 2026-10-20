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
        ? 'bg-[#36393F]/95 backdrop-blur-md shadow-md border-b border-[#5C6068] py-3' 
        : 'bg-[#36393F]/85 backdrop-blur-sm py-4'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity matching reference */}
          <a href="#agent" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#00A9C7] flex items-center justify-center font-black text-white text-lg shadow-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-[#F5F7FA] group-hover:text-[#00A9C7] transition-colors leading-tight">
                PAVAN BHIMARAJU
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#D5D7DC]">
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
                      ? 'text-[#00A9C7]' 
                      : 'text-[#D5D7DC] hover:text-[#00A9C7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A9C7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Social Icons & Key matching reference */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://github.com/Pavan8930"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#454951] hover:bg-[#00A9C7] hover:text-white text-[#D5D7DC] border border-[#5C6068] flex items-center justify-center transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/pavanbhimaraju"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:pavanbhimaraju4@gmail.com"
              className="w-8 h-8 rounded-full bg-[#454951] hover:bg-[#00A9C7] hover:text-white text-[#D5D7DC] border border-[#5C6068] flex items-center justify-center transition-colors"
              title="Google Drive / Resume"
            >
              <GoogleDriveIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAgent}
              className="flex items-center space-x-1 px-3 py-1.5 bg-[#00A9C7] text-white font-bold text-xs rounded-full"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F7FA] hover:text-[#00A9C7]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#36393F] border-b border-[#5C6068] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold uppercase tracking-wider text-[#D5D7DC] hover:text-[#00A9C7]"
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
              className="w-full py-2.5 bg-[#00A9C7] text-white font-bold rounded-lg text-sm flex items-center justify-center space-x-2"
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
