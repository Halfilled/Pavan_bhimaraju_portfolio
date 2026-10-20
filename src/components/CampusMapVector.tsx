import React from 'react';

interface CampusMapVectorProps {
  activeNumber: number;
  onSelectPin: (num: number) => void;
}

export const CampusMapVector: React.FC<CampusMapVectorProps> = ({ activeNumber, onSelectPin }) => {
  // 6 Verified Landmark Pin Coordinates in the Isometric Coordinate System
  const pins = [
    { num: 1, x: 165, y: 145, title: 'BiZverve · Vice President' },
    { num: 2, x: 575, y: 220, title: "Institution's Innovation Council (IIC)" },
    { num: 3, x: 385, y: 65, title: 'Entrepreneurship Cell (E-Cell)' },
    { num: 4, x: 645, y: 38, title: 'Street Cause NGO ANITS' },
    { num: 5, x: 265, y: 315, title: 'Street Cause Visakhapatnam' },
    { num: 6, x: 685, y: 360, title: 'ANITS Technical & Innovation Summit' },
  ];

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 580" 
      className="w-full h-full block select-none drop-shadow-md"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="40%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="grassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D1FAE5" />
          <stop offset="100%" stopColor="#A7F3D0" />
        </linearGradient>
        <linearGradient id="pitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="skylightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0B1F33" floodOpacity="0.08" />
        </filter>
        <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0B1F33" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. BASE TERRAIN (Realistic Isometric Island) */}
      <g filter="url(#mapShadow)">
        <polygon points="40,360 490,560 490,578 40,378" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <polygon points="490,560 960,260 960,278 490,578" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
        <polygon points="500,20 960,260 490,560 40,360" fill="url(#groundGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
      </g>

      {/* 2. ROADS & INTERNAL PATHWAYS */}
      <polygon points="70,345 520,70 565,95 115,370" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <polygon points="180,105 890,460 845,485 135,130" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <polygon points="430,285 780,110 820,130 470,305" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      <polygon points="250,440 600,265 640,285 290,460" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />

      {/* Road Centerlines */}
      <line x1="92" y1="357" x2="542" y2="82" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6,6" opacity="0.9" />
      <line x1="157" y1="117" x2="867" y2="472" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6,6" opacity="0.9" />

      {/* 3. SPORTS ZONE (Running Track + Soccer Pitch beside Pin 5) */}
      <g transform="translate(80, 390)">
        <path d="M 40,20 L 140,70 A 25 15 0 0 1 125,100 L 25,50 A 25 15 0 0 1 40,20 Z" fill="url(#trackGrad)" stroke="#DC2626" strokeWidth="1.5" />
        <path d="M 45,28 L 135,73 A 15 9 0 0 1 123,92 L 33,47 A 15 9 0 0 1 45,28 Z" fill="url(#pitchGrad)" stroke="#059669" strokeWidth="1" />
        <line x1="89" y1="50" x2="79" y2="70" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        <ellipse cx="84" cy="60" rx="8" ry="4" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.9" />
      </g>

      {/* 4. GREEN PARKS & LANDSCAPING */}
      <polygon points="120,240 280,160 380,210 220,290" fill="url(#grassGrad)" stroke="#6EE7B7" strokeWidth="1" />
      <ellipse cx="250" cy="225" rx="45" ry="22" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
      <ellipse cx="250" cy="225" rx="20" ry="10" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
      <polygon points="540,290 740,190 820,230 620,330" fill="url(#grassGrad)" stroke="#6EE7B7" strokeWidth="1" />

      {/* Trees */}
      <g transform="translate(150,230)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(180,215)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(210,200)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(280,190)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(310,205)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(340,220)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(190,260)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(220,275)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(270,260)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(300,245)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(250,225)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(570,280)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(600,265)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(630,250)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(680,230)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(710,215)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(750,210)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(590,310)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(620,295)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(660,275)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(700,255)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(730,240)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(390,480)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(420,495)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(450,510)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(320,370)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(350,355)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>
        <g transform="translate(380,340)"><ellipse cx="0" cy="5" rx="7" ry="3.5" fill="#0B1F33" opacity="0.1" /><circle cx="0" cy="0" r="6" fill="#10B981" stroke="#047857" strokeWidth="0.8" /><circle cx="-1.5" cy="-1.5" r="2.2" fill="#34D399" /></g>

      {/* 5. ARCHITECTURAL CAMPUS BUILDINGS (All 6 Verified Landmarks) */}
      {/* Landmark 1: BiZverve */}
        <g id="bldg-1" className="transition-all hover:brightness-105">
        <polygon points="97.7,175.0 115.0,185.0 115.0,157.0 97.7,147.0" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
        <polygon points="115.0,185.0 145.3,167.5 145.3,139.5 115.0,157.0" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="125.1" y1="169.8" x2="130.7" y2="166.6" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="135.2" y1="164.0" x2="140.8" y2="160.8" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="125.1" y1="160.5" x2="130.7" y2="157.3" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="135.2" y1="154.7" x2="140.8" y2="151.5" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="97.7,147.0 115.0,157.0 145.3,139.5 128.0,129.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="0.8" />
        <polygon points="150.8,181.0 175.0,195.0 175.0,161.0 150.8,147.0" fill="#FB923C" stroke="#C2410C" strokeWidth="0.8" />
        <polygon points="175.0,195.0 231.3,162.5 231.3,128.5 175.0,161.0" fill="#EA580C" stroke="#C2410C" strokeWidth="0.8" />
        <line x1="184.4" y1="178.2" x2="189.5" y2="175.3" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="193.8" y1="172.8" x2="198.9" y2="169.9" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="203.1" y1="167.4" x2="208.3" y2="164.4" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="212.5" y1="162.0" x2="217.7" y2="159.0" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="221.9" y1="156.6" x2="227.1" y2="153.6" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="184.4" y1="166.9" x2="189.5" y2="163.9" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="193.8" y1="161.5" x2="198.9" y2="158.5" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="203.1" y1="156.1" x2="208.3" y2="153.1" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="212.5" y1="150.7" x2="217.7" y2="147.7" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="221.9" y1="145.2" x2="227.1" y2="142.3" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="150.8,147.0 175.0,161.0 231.3,128.5 207.0,114.5" fill="#F8FAFC" stroke="#C2410C" strokeWidth="0.8" />
        </g>
        {/* Landmark 2: IIC Innovation Auditorium */}
        <g id="bldg-2" className="transition-all hover:brightness-105">
          {/* Side terracotta wing */}
          <polygon points="500,290 540,313 540,295 500,272" fill="#EA580C" stroke="#C2410C" strokeWidth="0.8" />
          <polygon points="460,267 500,290 500,272 460,249" fill="#FB923C" stroke="#C2410C" strokeWidth="0.8" />
          <polygon points="460,249 500,272 540,295 500,272" fill="#F8FAFC" stroke="#C2410C" strokeWidth="0.8" />
          {/* Main Sweeping Wedge Auditorium */}
          {/* Left facade (glass curved front) */}
          <polygon points="530,305 600,265 600,225 530,265" fill="#0284C7" stroke="#0369A1" strokeWidth="1" />
          <line x1="550" y1="294" x2="550" y2="254" stroke="#7DD3FC" strokeWidth="1.5" />
          <line x1="575" y1="279" x2="575" y2="239" stroke="#7DD3FC" strokeWidth="1.5" />
          {/* Right side facade */}
          <polygon points="600,265 670,230 670,210 600,225" fill="#0369A1" stroke="#075985" strokeWidth="1" />
          {/* Roof Wedge */}
          <polygon points="530,265 600,225 670,210 590,200" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
          {/* Iconic Oval Cyan Skylight */}
          <ellipse cx="615" cy="225" rx="22" ry="11" fill="url(#skylightGrad)" stroke="#38BDF8" strokeWidth="1.5" />
          <ellipse cx="615" cy="225" rx="14" ry="7" fill="#E0F2FE" opacity="0.4" />
        </g>
        {/* Landmark 3: E-Cell */}
        <g id="bldg-3" className="transition-all hover:brightness-105">
        <polygon points="352.7,95.0 370.0,105.0 370.0,83.0 352.7,73.0" fill="#0D9488" stroke="#0F766E" strokeWidth="0.8" />
        <polygon points="370.0,105.0 401.2,87.0 401.2,65.0 370.0,83.0" fill="#14B8A6" stroke="#0F766E" strokeWidth="0.8" />
        <line x1="377.8" y1="89.5" x2="382.1" y2="87.0" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="385.6" y1="85.0" x2="389.9" y2="82.5" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="393.4" y1="80.5" x2="397.7" y2="78.0" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="352.7,73.0 370.0,83.0 401.2,65.0 383.9,55.0" fill="#F1F5F9" stroke="#0F766E" strokeWidth="0.8" />
        <polygon points="412.7,70.0 430.0,80.0 430.0,58.0 412.7,48.0" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
        <polygon points="430.0,80.0 461.2,62.0 461.2,40.0 430.0,58.0" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.8" />
        <line x1="437.8" y1="64.5" x2="442.1" y2="62.0" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="445.6" y1="60.0" x2="449.9" y2="57.5" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="453.4" y1="55.5" x2="457.7" y2="53.0" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="412.7,48.0 430.0,58.0 461.2,40.0 443.9,30.0" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
        </g>
        {/* Landmark 4: Street Cause NGO ANITS */}
        <g id="bldg-4" className="transition-all hover:brightness-105">
        <polygon points="614.7,62.5 645.0,80.0 645.0,52.0 614.7,34.5" fill="#F8FAFC" stroke="#475569" strokeWidth="0.8" />
        <polygon points="645.0,80.0 684.0,57.5 684.0,29.5 645.0,52.0" fill="#64748B" stroke="#475569" strokeWidth="0.8" />
        <line x1="652.8" y1="66.2" x2="657.1" y2="63.7" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="660.6" y1="61.7" x2="664.9" y2="59.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="668.4" y1="57.2" x2="672.7" y2="54.7" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="676.2" y1="52.7" x2="680.5" y2="50.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="652.8" y1="56.8" x2="657.1" y2="54.4" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="660.6" y1="52.3" x2="664.9" y2="49.9" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="668.4" y1="47.8" x2="672.7" y2="45.4" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="676.2" y1="43.3" x2="680.5" y2="40.9" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="614.7,34.5 645.0,52.0 684.0,29.5 653.7,12.0" fill="#E2E8F0" stroke="#475569" strokeWidth="0.8" />
        <polygon points="615.9,51.0 635.0,62.0 635.0,20.0 615.9,9.0" fill="#E2E8F0" stroke="#0B1F33" strokeWidth="0.8" />
        <polygon points="635.0,62.0 659.2,48.0 659.2,6.0 635.0,20.0" fill="#0B1F33" stroke="#0B1F33" strokeWidth="0.8" />
        <line x1="643.1" y1="46.8" x2="647.5" y2="44.3" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="651.2" y1="42.2" x2="655.6" y2="39.6" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="643.1" y1="36.3" x2="647.5" y2="33.8" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="651.2" y1="31.7" x2="655.6" y2="29.1" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="643.1" y1="25.8" x2="647.5" y2="23.3" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="651.2" y1="21.2" x2="655.6" y2="18.6" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="615.9,9.0 635.0,20.0 659.2,6.0 640.2,-5.0" fill="#00A9C2" stroke="#0B1F33" strokeWidth="0.8" />
        {/* Crane */}
        <g transform="translate(800, 110)">
          <line x1="0" y1="0" x2="0" y2="-55" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="-15" y1="-55" x2="45" y2="-55" stroke="#F59E0B" strokeWidth="2" />
          <line x1="0" y1="-70" x2="0" y2="-55" stroke="#F59E0B" strokeWidth="2" />
          <line x1="0" y1="-70" x2="-15" y2="-55" stroke="#F59E0B" strokeWidth="1" />
          <line x1="0" y1="-70" x2="45" y2="-55" stroke="#F59E0B" strokeWidth="1" />
        </g>
        </g>
        {/* Landmark 5: Street Cause Visakhapatnam Sports Pavilion */}
        <g id="bldg-5" className="transition-all hover:brightness-105">
        <polygon points="252.3,334.0 280.0,350.0 280.0,325.0 252.3,309.0" fill="#0284C7" stroke="#0284C7" strokeWidth="0.8" />
        <polygon points="280.0,350.0 327.6,322.5 327.6,297.5 280.0,325.0" fill="#0369A1" stroke="#0284C7" strokeWidth="0.8" />
        <line x1="287.9" y1="332.9" x2="292.3" y2="330.4" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="295.9" y1="328.3" x2="300.2" y2="325.8" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="303.8" y1="323.8" x2="308.2" y2="321.2" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="311.8" y1="319.2" x2="316.1" y2="316.6" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="319.7" y1="314.6" x2="324.1" y2="312.1" stroke="#BAE6FD" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="252.3,309.0 280.0,325.0 327.6,297.5 299.9,281.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="0.8" />
        <line x1="260" y1="315" x2="295" y2="335" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="270" y1="310" x2="305" y2="330" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="280" y1="305" x2="315" y2="325" stroke="#38BDF8" strokeWidth="1.5" />
        </g>
        {/* Landmark 6: Technical Symposium Hall */}
        <g id="bldg-6" className="transition-all hover:brightness-105">
        <polygon points="540.9,419.0 560.0,430.0 560.0,406.0 540.9,395.0" fill="#EA580C" stroke="#9A3412" strokeWidth="0.8" />
        <polygon points="560.0,430.0 592.9,411.0 592.9,387.0 560.0,406.0" fill="#C2410C" stroke="#9A3412" strokeWidth="0.8" />
        <line x1="568.2" y1="413.2" x2="572.8" y2="410.6" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="576.5" y1="408.5" x2="581.0" y2="405.9" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="584.7" y1="403.8" x2="589.2" y2="401.1" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="540.9,395.0 560.0,406.0 592.9,387.0 573.9,376.0" fill="#FFF7ED" stroke="#9A3412" strokeWidth="0.8" />
        <polygon points="654.7,392.5 685.0,410.0 685.0,372.0 654.7,354.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="0.8" />
        <polygon points="685.0,410.0 741.3,377.5 741.3,339.5 685.0,372.0" fill="#0F172A" stroke="#0F172A" strokeWidth="0.8" />
        <line x1="694.4" y1="395.1" x2="699.5" y2="392.1" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="703.8" y1="389.7" x2="708.9" y2="386.7" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="713.1" y1="384.2" x2="718.3" y2="381.3" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="722.5" y1="378.8" x2="727.7" y2="375.9" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="731.9" y1="373.4" x2="737.1" y2="370.4" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="694.4" y1="385.6" x2="699.5" y2="382.6" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="703.8" y1="380.2" x2="708.9" y2="377.2" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="713.1" y1="374.8" x2="718.3" y2="371.8" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="722.5" y1="369.3" x2="727.7" y2="366.4" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="731.9" y1="363.9" x2="737.1" y2="360.9" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="694.4" y1="376.1" x2="699.5" y2="373.1" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="703.8" y1="370.7" x2="708.9" y2="367.7" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="713.1" y1="365.2" x2="718.3" y2="362.3" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="722.5" y1="359.8" x2="727.7" y2="356.9" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="731.9" y1="354.4" x2="737.1" y2="351.4" stroke="#00E5FF" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="654.7,354.5 685.0,372.0 741.3,339.5 711.0,322.0" fill="#F0FDFA" stroke="#0F172A" strokeWidth="0.8" />
        </g>
        {/* Center Academic Block */}
        <g opacity="0.95">
        <polygon points="431.0,187.5 470.0,210.0 470.0,184.0 431.0,161.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="0.8" />
        <polygon points="470.0,210.0 522.0,180.0 522.0,154.0 470.0,184.0" fill="#64748B" stroke="#64748B" strokeWidth="0.8" />
        <line x1="478.7" y1="192.0" x2="483.4" y2="189.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="487.3" y1="187.0" x2="492.1" y2="184.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="496.0" y1="182.0" x2="500.7" y2="179.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="504.6" y1="177.0" x2="509.4" y2="174.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <line x1="513.3" y1="172.0" x2="518.1" y2="169.2" stroke="#38BDF8" strokeWidth="2.0" strokeLinecap="round" opacity="0.9" />
        <polygon points="431.0,161.5 470.0,184.0 522.0,154.0 483.0,131.5" fill="#F8FAFC" stroke="#64748B" strokeWidth="0.8" />
        </g>

      {/* 6. INTERACTIVE NUMBERED PINS (Exactly 6 Unique Pins, 1 to 6) */}
      {pins.map((pin) => {
        const isSelected = activeNumber === pin.num;
        const color = isSelected ? '#FF791F' : '#167D7F';

        return (
          <g 
            key={pin.num}
            transform={`translate(${pin.x}, ${pin.y})`}
            onClick={() => onSelectPin(pin.num)}
            className="cursor-pointer group focus:outline-none"
            role="button"
            tabIndex={0}
            aria-label={`Select landmark ${pin.num}: ${pin.title}`}
          >
            {/* Animated Radar Ring for Active Pin */}
            {isSelected && (
              <circle cx="0" cy="2" r="16" fill="none" stroke="#FF791F" strokeWidth="2" opacity="0.6">
                <animate attributeName="r" values="14;28" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Pin Shape with Drop Shadow */}
            <g filter="url(#pinShadow)" className="transition-transform duration-200 group-hover:scale-115">
              {/* Teardrop Pointer */}
              <path 
                d="M -12,-8 C -12,-18 12,-18 12,-8 C 12,0 0,16 0,16 C 0,16 -12,0 -12,-8 Z" 
                fill={color} 
                stroke="#FFFFFF" 
                strokeWidth="1.5"
              />
              {/* Inner White Circle */}
              <circle cx="0" cy="-8" r="8" fill="#FFFFFF" />
              {/* Number Text */}
              <text 
                x="0" 
                y="-4.5" 
                textAnchor="middle" 
                fill={color} 
                fontSize="10" 
                fontWeight="900" 
                fontFamily="system-ui, sans-serif"
              >
                {pin.num}
              </text>
            </g>

            {/* Floating Label Tooltip on Hover */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <rect 
                x="-65" 
                y={pin.y < 55 ? 20 : -38} 
                width="130" 
                height="22" 
                rx="6" 
                fill="#36393F" 
                opacity="0.95" 
              />
              <text 
                x="0" 
                y={pin.y < 55 ? 35 : -23} 
                textAnchor="middle" 
                fill="#FFFFFF" 
                fontSize="9.5" 
                fontWeight="bold" 
                fontFamily="system-ui, sans-serif"
              >
                {pin.num}. {pin.title.length > 20 ? pin.title.substring(0, 18) + '...' : pin.title}
              </text>
            </g>
          </g>
        );
      })}

    </svg>
  );
};
