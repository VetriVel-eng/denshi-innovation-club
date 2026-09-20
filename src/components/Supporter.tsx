import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { clubInfo } from '../data';
import { SincetLogo, SdcLogo } from './OfficialLogos';

export const Supporter: React.FC = () => {
  return (
    <section id="supporter" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <span className="text-[#0B4ECF] font-bold">06 / SUPPORTERS &amp; PATRONS</span>
          <span>OFFICIAL INSTITUTIONAL BACKING</span>
        </div>

        {/* Clean Editorial Showcase */}
        <div className="bg-white border border-[#E5E1D8] black-corners rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Logos cleanly presented */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-mono text-[#0B4ECF] uppercase tracking-widest font-bold block">
                ACADEMIC PATRONS &amp; SUPPORTERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#141413] tracking-tight">
                Supported by Institutional Leadership
              </h2>
              <p className="text-sm text-[#575754] leading-relaxed">
                Denshi Innovation Club operates under the academic guidance of the Department of Electronics &amp; Communication Engineering and the mentorship of the Skill Development Cell at SINCET.
              </p>

              {/* Both Actual Uploaded Logos Displayed Cleanly */}
              <div className="pt-4 flex flex-wrap items-center gap-8">
                
                {/* Logo 1: SINCET (Click to open campus location) */}
                <div className="flex items-center justify-center py-1">
                  <SincetLogo
                    className="h-16 sm:h-20 w-auto hover:opacity-85 transition-opacity"
                    href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                  />
                </div>

                {/* Logo 2: SDC */}
                <div className="flex items-center justify-center py-1">
                  <img
                    src="/logos/sdc-logo.png"
                    alt="Skill Development Cell SINCET Official Logo"
                    className="h-16 sm:h-20 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>

            {/* Right: Academic Organization Details */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#EFECE6] lg:pl-12 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-[#848480] uppercase tracking-widest block mb-1">
                  OFFICIAL SPONSORING ENTITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#141413]">
                  {clubInfo.supportingOrganization}
                </h3>
                <a
                  href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#575754] hover:text-[#0B4ECF] mt-1 inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                  title="Open Campus Location on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0B4ECF] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-2 group-hover:underline">Pappakovil, Nagapattinam, Tamil Nadu — 611102</span>
                  <ArrowUpRight className="w-3 h-3 text-[#0B4ECF] opacity-70 group-hover:opacity-100" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-[#575754] leading-relaxed">
                The Skill Development Cell provides state-of-the-art laboratory infrastructure, specialized computing resources, faculty mentorship, and structured training programs that enable student innovators to build real-world capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EFECE6] text-xs font-mono">
                <a
                  href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#FBF9F5] border border-[#E5E1D8] black-corners-sm rounded-xl hover:border-[#0B4ECF] space-y-1 block transition-colors group cursor-pointer"
                  title="View College Campus on Google Maps"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#848480] block text-[10px] uppercase">COLLEGE AFFILIATION</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0B4ECF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-institution text-[#141413] group-hover:text-[#0B4ECF] font-bold block text-sm transition-colors">
                    Sir Isaac Newton College of Engineering and Technology
                  </span>
                  <span className="text-[#575754] block">B.E. ECE Department</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#FBF9F5] border border-[#E5E1D8] black-corners-sm rounded-xl hover:border-[#0B4ECF] space-y-1 block transition-colors group cursor-pointer"
                  title="View Skill Development Cell & Campus on Google Maps"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#848480] block text-[10px] uppercase">TRAINING ECOSYSTEM</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0B4ECF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-institution text-[#141413] group-hover:text-[#0B4ECF] font-bold block text-sm transition-colors">
                    Sir Isaac Newton College of Engineering and Technology
                  </span>
                  <span className="text-[#575754] block">Skill Development Cell, Pappakovil, Nagapattinam</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
