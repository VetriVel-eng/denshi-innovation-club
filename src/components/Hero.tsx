import React from 'react';
import { ArrowRight, ArrowDownRight, Compass, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { clubInfo } from '../data';
import { HeroLogo3D } from './HeroLogo3D';
import { SincetLogo, SdcLogo } from './OfficialLogos';
import { smoothScrollToElement } from '../utils/smoothScroll';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollToElement(href);
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 md:pb-24 border-b border-[#E5E1D8] bg-[#FBF9F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Institutional Header Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8D4C9] pb-4 mb-8 sm:mb-12 text-xs font-display font-medium tracking-wide uppercase text-[#3B3B38]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#0B4ECF] shrink-0 shadow-sm" />
            <a
              id="hero-institution-name"
              href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm sm:text-base font-bold text-[#141413] hover:text-[#0B4ECF] tracking-tight normal-case transition-colors cursor-pointer"
              title="Open College Campus on Google Maps"
            >
              Sir Isaac Newton College of Engineering and Technology
            </a>
          </div>
          <div className="flex items-center gap-3 font-display font-bold text-xs sm:text-sm text-[#262624]">
            <span className="text-[#0B4ECF]">B.E. ECE DEPARTMENT</span>
            <span className="text-[#D8D4C9]">|</span>
            <span>SKILL DEVELOPMENT CELL</span>
            <span className="text-[#D8D4C9]">|</span>
            <a
              href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B4ECF] inline-flex items-center gap-1 transition-colors cursor-pointer"
              title="Open Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0B4ECF]" />
              <span>NAGAPATTINAM</span>
            </a>
          </div>
        </div>

        {/* Editorial Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Typographic Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Institutional Label */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-display font-extrabold uppercase tracking-[0.2em] text-[#0B4ECF]">
                STUDENT INNOVATION CLUB
              </span>
              <span className="h-0.5 w-12 bg-[#0B4ECF]/30" />
            </div>

            {/* Giant Editorial Wordmark Lockup */}
            <div className="space-y-1">
              <h1 className="font-lemonmilk font-bold text-5xl sm:text-7xl md:text-8xl lg:text-8xl tracking-wide leading-[0.92] uppercase fire-gradient-text pb-1">
                DENSHI
              </h1>
              {/* <h1 className="font-lemonmilk font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-[0.92] uppercase fire-gradient-text pb-1">
                DENSHI
              </h1> */}
              <div className="pt-1 flex flex-wrap items-baseline gap-3">
                <span className="font-lemonmilk font-bold text-2xl sm:text-4xl md:text-5xl lg:text-4xl tracking-wider uppercase fire-gradient-text">
                  INNOVATION CLUB
                </span>
              </div>
            </div>

            {/* Guiding Tenet in Editorial Italic Serif */}
            <div className="pt-2">
              <p className="font-serif italic text-2xl sm:text-4xl text-[#141413] leading-snug">
                “Learn What Matters. Build What’s Next”
              </p>
            </div>

            {/* Concise One-Line Description */}
            <p className="text-lg sm:text-md text-[#2E2E2B] font-display font-medium leading-relaxed max-w-xl">
              A student-led technology and engineering community advancing electronics, AI tool competence, and practical project exploration for future careers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3">
              <a
                id="hero-primary-cta"
                href="#events"
                onClick={(e) => scrollToSection(e, '#events')}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-8 sm:py-4.5 bg-[#141413] text-white font-lemonmilk font-bold text-xs sm:text-sm tracking-wider uppercase overflow-hidden shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-[#0B4ECF]/25 hover:bg-[#0B4ECF] active:scale-[0.97] transition-all duration-150 active:duration-0 rounded-xl cursor-pointer select-none touch-manipulation"
              >
                {/* Subtle animated light sweep on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out pointer-events-none" />
                <span className="relative z-10">Explore Events</span>
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>
{/* 
              <a
                id="hero-secondary-cta"
                href="#team"
                onClick={(e) => scrollToSection(e, '#team')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 sm:px-7 sm:py-4.5 bg-white border-2 border-[#141413] text-[#141413] font-lemonmilk font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm hover:shadow-md hover:bg-[#141413] hover:text-white active:scale-[0.97] transition-all duration-150 active:duration-0 rounded-xl cursor-pointer select-none touch-manipulation"
              >
                <span>Meet the Team</span>
                <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#848480] group-hover:text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200" />
              </a> */}

              <a
                id="hero-register-cta"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeUP1c0T7wn9ehs2ZRfxw4sdA8o9bDX41435ROh54HvT7OqEg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-8 sm:py-4.5 bg-gradient-to-r from-[#EF4444] via-[#F97316] to-[#EAB308] text-white font-lemonmilk font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.97] transition-all duration-150 active:duration-0 rounded-xl border-2 border-white/30 overflow-hidden select-none touch-manipulation"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Register Now</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 bg-white/25 rounded text-[9px] font-mono tracking-widest text-white uppercase">
                    Live
                  </span>
                </span>
                <ExternalLink className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </a>
            </div>

            {/* Micro Patron Alliance Badge */}
            <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap items-center gap-6 text-[11px] font-mono text-[#575754]">
              <div className="flex items-center gap-2">
                <span className="text-[#848480] uppercase">In Partnership With:</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-20 w-auto flex items-center">
                  <SincetLogo className="h-20 w-auto" />
                </div>
                <span className="text-[#848480]">×</span>
                <div className="h-20 w-auto flex items-center">
                  <SdcLogo className="h-20 w-auto" />
                </div>
              </div>
            </div>

          </div>

          {/* Integrated 3D Rotating Plinth Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <div className="w-full flex items-center justify-center bg-transparent">
              {/* 3D Rotating Logo */}
              <HeroLogo3D />
            </div>
          </div>

        </div>

        {/* Editorial Baseline Index Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#E5E1D8]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold">
              01 / IDENTITY
            </span>
            <h2 className="text-sm font-display font-bold text-[#141413]">
              B.E. ECE Student Initiative
            </h2>
            <p className="text-xs text-[#575754] leading-relaxed">
              Founded and organized by engineering students to explore emerging technologies together.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold">
              02 / FOUNDATION
            </span>
            <h2 className="text-sm font-display font-bold text-[#141413]">
              Skill Development Cell
            </h2>
            <p className="text-xs text-[#575754] leading-relaxed">
              Incubated with institutional mentorship, laboratory facilities, and elite training guidance.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold">
              03 / METHODOLOGY
            </span>
            <h2 className="text-sm font-display font-bold text-[#141413]">
              Learn • Build • Share • Grow
            </h2>
            <p className="text-xs text-[#575754] leading-relaxed">
              A peer-to-peer cyclic loop turning theoretical curriculum into practical tool proficiency.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold">
              04 / RECORD
            </span>
            <h2 className="text-sm font-display font-bold text-[#141413]">
              Inaugural Claude AI Workshop
            </h2>
            <p className="text-xs text-[#575754] leading-relaxed">
              Held on August 19, 2026, delivering hands-on generative AI prompting challenges to the full cohort.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
