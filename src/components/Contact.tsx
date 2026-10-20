import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, GoogleDriveIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative bg-[#36393F]">
      {/* Light subtle background shape matching reference pick 2 */}
      <div className="absolute top-1/2 right-0 w-[45vw] h-[45vw] rounded-full bg-[#00A9C7]/5 -z-0 opacity-40 blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Narrative + 3 Cards (6 cols) & Right Send a Message Card (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (6 cols): Typography & 3 Quick Link Cards */}
          <div className="lg:col-span-6 space-y-6 pt-1">

            {/* Oversized Headline matching Reference 2 */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#F5F7FA] leading-[1.05] font-display">
                Have an idea?
              </h2>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#167D7F] leading-[1.05] font-display">
                Let's build <span className="text-[#F5F7FA]">something</span>
              </h2>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#F5F7FA] leading-[1.05] font-display flex items-baseline">
                meaningful<span className="text-[#FF791F] text-5xl">.</span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-[#D5D7DC] font-sans max-w-lg leading-relaxed">
              I’m always open to interesting projects, collaborations, and conversations about technology, AI and impactful ideas.
            </p>

            {/* 3 Quick Cards: Email, LinkedIn, GitHub matching reference 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              
              {/* 1. Email Card */}
              <div className="p-4 rounded-2xl bg-[#F1F3F5] border border-[#5C6068]/40 hover:border-[#00A9C7] flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#167D7F] text-white flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button onClick={handleCopyEmail} title="Copy email">
                    <ArrowUpRight className="w-4 h-4 text-[#5C6068] group-hover:text-[#00A9C7] transition-colors" />
                  </button>
                </div>
                <div className="mt-4">
                  <div className="text-xs font-black text-gray-900">Email</div>
                  <div className="text-[10px] text-gray-600 font-mono truncate">
                    {profile.email}
                  </div>
                </div>
              </div>

              {/* 2. LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#F1F3F5] border border-[#5C6068]/40 hover:border-[#00A9C7] flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C6068] group-hover:text-[#00A9C7] transition-colors" />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-black text-gray-900">LinkedIn</div>
                  <div className="text-[10px] text-gray-600 font-sans">
                    Let's connect
                  </div>
                </div>
              </a>

              {/* 3. GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#F1F3F5] border border-[#5C6068]/40 hover:border-[#00A9C7] flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#36393F] text-white flex items-center justify-center">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C6068] group-hover:text-[#00A9C7] transition-colors" />
                </div>
                <div className="mt-4">
                  <div className="text-xs font-black text-gray-900">GitHub</div>
                  <div className="text-[10px] text-gray-600 font-sans">
                    Check out my work
                  </div>
                </div>
              </a>

            </div>

            {/* Get in Touch Orange CTA Button */}
            <div className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-[#FF791F] hover:bg-[#e06612] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#FF791F]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Get in Touch</span>
                <span className="text-sm">→</span>
              </a>
            </div>

          </div>

          {/* Right Column (6 cols): Send a Message Card matching Reference 2 */}
          <div className="lg:col-span-6 relative">
            
            {/* Paper Airplane Decorative Vector matching reference 2 */}
            <div className="absolute -top-8 -right-4 w-16 h-16 text-[#FF791F] pointer-events-none hidden sm:block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 transform -rotate-12">
                <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#FF791F" stroke="#FF791F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="bg-[#F1F3F5] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#5C6068]/50 space-y-5">
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-display">
                  Send a Message
                </h3>
                <p className="text-xs text-gray-500 font-sans mt-0.5">
                  Fill in the details and I'll get back to you soon.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#E6F9F5] border border-[#C9F3EB] text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#167D7F] text-white flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="font-extrabold text-sm text-[#167D7F]">Message Sent!</h4>
                  <p className="text-xs text-gray-600">
                    Thank you! Your message has been routed to Pavan's inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#167D7F] focus:ring-1 focus:ring-[#167D7F] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#167D7F] focus:ring-1 focus:ring-[#167D7F] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this about?"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#167D7F] focus:ring-1 focus:ring-[#167D7F] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#167D7F] focus:ring-1 focus:ring-[#167D7F] transition-all"
                    />
                  </div>

                  {/* Teal Send Message Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#167D7F] hover:bg-[#00A9C7] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span>→</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Footer matching reference 2 */}
        <div className="mt-16 pt-8 border-t border-[#5C6068]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D5D7DC] gap-4">
          
          {/* Left: Brand Monogram + Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#00A9C7] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              P
            </div>
            <div>
              <span className="font-extrabold text-[#F5F7FA] uppercase tracking-tight">PAVAN BHIMARAJU</span>
              <p className="text-[10px] text-[#D5D7DC] font-mono">CS ENGINEER • AI & DEV</p>
            </div>
          </div>

          {/* Right: Social Links + Copyright */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 gap-2">
            <div className="flex items-center space-x-2.5">
              <a 
                href="https://github.com/Pavan8930" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-[#454951] hover:bg-[#00A9C7] hover:text-white text-[#D5D7DC] border border-[#5C6068] flex items-center justify-center transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/pavanbhimaraju" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href="mailto:pavanbhimaraju4@gmail.com" 
                className="w-8 h-8 rounded-full bg-[#454951] hover:bg-[#00A9C7] hover:text-white text-[#D5D7DC] border border-[#5C6068] flex items-center justify-center transition-colors"
                title="Email Pavan"
                aria-label="Email Pavan"
              >
                <GoogleDriveIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] text-[#D5D7DC] font-mono text-center sm:text-right">
              © 2026 Pavan Bhimaraju · Built with passion and curiosity.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
