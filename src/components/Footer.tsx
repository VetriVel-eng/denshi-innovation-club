import React from 'react';
import { clubInfo, clubContact } from '../data';
import { ArrowUp } from 'lucide-react';
import { SincetLogo, SdcLogo } from './OfficialLogos';
import { smoothScrollTo, smoothScrollToElement } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollToElement(href);
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Focus Areas', href: '#focus-areas' },
    { name: 'Events', href: '#events' },
    { name: 'Our Work', href: '#work' },
    { name: 'Team', href: '#team' },
    { name: 'Supporters', href: '#supporter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#141413] text-[#A1A19D] font-mono text-xs border-t border-[#2A2A28] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Official Logos Collaboration Strip */}
        <div className="mb-14 p-6 sm:p-8 bg-[#1B1B19] border border-[#2E2E2B]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#787874] mb-6 flex items-center justify-between border-b border-[#2E2E2B] pb-3">
            <span>OFFICIAL ALLIANCE &amp; PARTNERSHIP</span>
            <span className="text-[#3B82F6]">REGISTERED MARKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Logo 1: Denshi */}
            <div className="flex items-center gap-4 p-4 bg-[#141413] border border-[#2E2E2B]">
              <div className="h-12 w-12 shrink-0 flex items-center justify-center">
                <img
                  src="/logos/denshi-logo-dark.svg"
                  alt="Denshi Innovation Club"
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[9px] text-[#3B82F6] font-bold block uppercase tracking-wider">
                  PRIMARY CLUB
                </span>
                <span className="text-xs font-display font-bold text-white block">
                  Denshi Innovation Club
                </span>
                <span className="text-[10px] text-[#787874]">B.E. ECE Department</span>
              </div>
            </div>

            {/* Logo 2: SINCET */}
            <a
              href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#141413] border border-[#2E2E2B] hover:border-[#3B82F6] transition-colors group cursor-pointer"
              title="View Sir Isaac Newton College of Engineering and Technology on Google Maps"
            >
              <div className="h-12 w-auto shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                <SincetLogo disableLink={true} className="h-10 w-auto" />
              </div>
              <div>
                <span className="text-[9px] text-[#787874] block uppercase tracking-wider">
                  INSTITUTION
                </span>
                <span className="text-xs font-institution font-bold text-white block leading-tight group-hover:text-[#3B82F6] transition-colors">
                  Sir Isaac Newton College of Engineering and Technology
                </span>
                <span className="text-[10px] text-[#787874] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  Pappakovil, Nagapattinam
                </span>
              </div>
            </a>

            {/* Logo 3: SDC */}
            <div className="flex items-center gap-4 p-4 bg-[#141413] border border-[#2E2E2B]">
              <div className="h-12 w-auto shrink-0 flex items-center justify-center">
                <SdcLogo className="h-10 w-auto" />
              </div>
              <div>
                <span className="text-[9px] text-[#3B82F6] font-bold block uppercase tracking-wider">
                  SUPPORTING CELL
                </span>
                <span className="text-xs font-display font-bold text-white block leading-tight">
                  Skill Development Cell
                </span>
                <span className="text-[10px] text-[#787874]">Innovation &amp; Training</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2E2B]">
          
          {/* Identity Column */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="font-lemonmilk font-bold text-2xl sm:text-3xl text-white tracking-wide uppercase block">
                DENSHI INNOVATION CLUB
              </span>
              <span className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest block">
                STUDENT INNOVATION CELL · B.E. ECE
              </span>
            </div>
            <p className="text-xs text-[#A1A19D] leading-relaxed max-w-md">
              A student-led technology collective founded by B.E. ECE students of Sir Isaac Newton College of Engineering and Technology, supported by the Skill Development Cell.
            </p>
            <div className="pt-2 text-[11px] text-[#787874] space-y-1">
              <div>
                Location:{' '}
                <a
                  href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A19D] hover:text-[#3B82F6] underline decoration-dotted transition-colors"
                  title="Open Location on Google Maps"
                >
                  Pappakovil, Nagapattinam, Tamil Nadu — 611102
                </a>
              </div>
              <div className="text-white">
                E-mail:{' '}
                <a
                  href="mailto:denshiic@gmail.com"
                  className="text-white hover:text-[#3B82F6] transition-colors underline decoration-dotted"
                  title="Email Denshi Innovation Club"
                >
                  denshiic@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-white font-bold mb-4">
              EDITORIAL DIRECTORY
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-white transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Big, Bold, Center-Aligned Lemon Milk Wordmark Section */}
        <div className="py-12 sm:py-16 text-center border-b border-[#2E2E2B] space-y-3">
          <div className="flex items-center justify-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-[#3B82F6]">
            <span className="w-8 h-px bg-[#3B82F6]/50" />
            <span>LEARN WHAT MATTERS · BUILD WHAT'S NEXT</span>
            <span className="w-8 h-px bg-[#3B82F6]/50" />
          </div>
          
          <h2 className="font-lemonmilk font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider text-white uppercase leading-tight">
            DENSHI INNOVATION CLUB
          </h2>
          
          <p className="text-xs sm:text-sm font-mono text-[#787874] uppercase tracking-widest max-w-2xl mx-auto">
            Sir Isaac Newton College of Engineering and Technology · Skill Development Cell
          </p>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#787874]">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-lemonmilk text-[#A1A19D]">DENSHI INNOVATION CLUB</span> · Sir Isaac Newton College of Engineering and Technology. All rights reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-[#3B82F6] transition-colors self-center sm:self-auto cursor-pointer"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
