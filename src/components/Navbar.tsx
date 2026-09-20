import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { smoothScrollToElement } from '../utils/smoothScroll';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', index: '01' },
    { label: 'Focus', href: '#focus-areas', id: 'focus-areas', index: '02' },
    { label: 'Events', href: '#events', id: 'events', index: '03' },
    { label: 'Work', href: '#work', id: 'work', index: '04' },
    { label: 'Team', href: '#team', id: 'team', index: '05' },
    { label: 'Supporters', href: '#supporter', id: 'supporter', index: '06' },
    { label: 'Contact', href: '#contact', id: 'contact', index: '07' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      const sections = ['home', ...navLinks.map((l) => l.id)];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    smoothScrollToElement(targetId);
    setActiveSection(targetId.replace(/^#/, ''));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      id="editorial-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E5E1D8] shadow-[0_4px_25px_rgba(11,78,207,0.06)]'
          : 'bg-[#FBF9F5] border-b border-[#E5E1D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity / Left Lockup */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="h-9 w-9 sm:h-24 sm:w-32 flex items-center justify-center">
              <img
                src="/logos/denshi-logo.svg"
                alt="Denshi Innovation Club"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#141413]">
                  DENSHI
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#575754]">
                  INNOVATION CLUB
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#0B4ECF] font-semibold uppercase tracking-wider hidden sm:block">
                B.E. ECE · SINCET × SDC
              </span>
            </div> */}
          </a>

          {/* Center / Desktop Ultra-Attractive Menu Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#F3EFE6]/80 p-1.5 border border-[#E5E1D8] rounded-full shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5 text-xs font-lemonmilk tracking-wider rounded-full ${
                    isActive
                      ? 'bg-[#0B4ECF] text-white shadow-[0_2px_12px_rgba(11,78,207,0.35)] scale-[1.02]'
                      : 'text-[#575754] hover:text-[#141413] hover:bg-white/80'
                  }`}
                >
                  {/* <span className={`text-[9px] font-mono opacity-70 ${isActive ? 'text-white/80' : 'text-[#848480]'}`}>
                    {link.index}
                  </span> */}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-gradient-to-r from-[#0B4ECF] to-[#1D4ED8] text-white font-lemonmilk text-[11px] tracking-widest rounded-full shadow-[0_4px_16px_rgba(11,78,207,0.3)] hover:shadow-[0_6px_20px_rgba(11,78,207,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF] animate-pulse" />
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#141413] hover:text-[#0B4ECF] transition-colors bg-[#F3EFE6] border border-[#E5E1D8] rounded-xl"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-[#E5E1D8] bg-[#FBF9F5] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 font-lemonmilk text-xs tracking-wider rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#0B4ECF] text-white shadow-md'
                        : 'bg-[#F3EFE6]/60 text-[#141413] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono ${isActive ? 'text-white/80' : 'text-[#848480]'}`}>{link.index}</span>
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#848480]'}`} />
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#0B4ECF] to-[#1D4ED8] text-white font-lemonmilk text-xs tracking-widest rounded-xl shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#00C2FF]" />
                  <span>Connect With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
