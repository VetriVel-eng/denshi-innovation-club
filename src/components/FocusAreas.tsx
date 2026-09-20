import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { focusAreas } from '../data';
import { Sparkles, CheckCircle2, ArrowRight, X, Layers, ExternalLink } from 'lucide-react';
import type { FocusArea } from '../types';
import { smoothScrollToElement } from '../utils/smoothScroll';

export const FocusAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);

  const openModal = (area: FocusArea) => {
    setSelectedArea(area);
  };

  const closeModal = () => {
    setSelectedArea(null);
  };

  return (
    <section id="focus-areas" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <div className="flex items-center gap-2">
            <span className="text-[#0B4ECF] font-bold">02 / FOCUS AREAS</span>
            <span className="hidden sm:inline text-[#E5E1D8]">|</span>
            <span className="hidden sm:inline">CURRICULUM &amp; MANDATE</span>
          </div>
          <span className="text-[11px] font-mono text-[#0B4ECF] bg-white px-2.5 py-1 border border-[#E5E1D8] rounded-md shadow-2xs">
            CLICK CARD TO VIEW DETAILED DOSSIER
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.08]">
              Six strategic focus areas shaping our student community.
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-mono text-[#575754] uppercase tracking-wider leading-relaxed">
            Practical skills, domain clarity, and career trajectories beyond textbook syllabi.
          </div>
        </div>

        {/* Clean Bento Grid (No inline accordion expansion) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.id}
              id={`focus-card-${area.id}`}
              onClick={() => openModal(area)}
              className="group relative bg-[#FDFCFB] hover:bg-gradient-to-br hover:from-[#0EA5E9]/85 hover:via-[#6366F1]/85 hover:to-[#9333EA]/85 border border-[#E5E1D8] hover:border-[#0EA5E9] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#6366F1]/25 flex flex-col justify-between cursor-pointer black-corners"
            >
              <div>
                {/* Top Row: Number & Domain Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-bold text-[#0B4ECF] group-hover:text-white transition-colors">
                    {area.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#FBF9F5] group-hover:bg-sky-900/40 group-hover:border-sky-400 group-hover:text-sky-100 border border-[#E5E1D8] text-[#575754] rounded-md transition-colors">
                    STRATEGIC DOMAIN
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-[#141413] group-hover:text-white transition-colors mb-2">
                  {area.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm sm:text-base text-[#3B3B38] group-hover:text-sky-50 font-display font-medium leading-relaxed mb-6 line-clamp-3 transition-colors">
                  {area.tagline}
                </p>

                {/* Key Pillars */}
                <div className="space-y-2 pt-4 border-t border-[#EFECE6] group-hover:border-sky-400/30 mb-6 transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#848480] group-hover:text-sky-200 block font-bold transition-colors">
                    KEY PILLARS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.keyPillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#FBF9F5] group-hover:bg-sky-900/50 group-hover:border-sky-400 group-hover:text-sky-100 border border-[#E5E1D8] text-[#575754] rounded-md transition-colors"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="pt-4 border-t border-[#EFECE6] group-hover:border-sky-400/30 flex items-center justify-between text-xs font-mono font-bold text-[#0B4ECF] group-hover:text-white uppercase tracking-wider transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Inspect Full Dossier</span>
                <div className="w-8 h-8 rounded-lg bg-[#0B4ECF]/10 group-hover:bg-white group-hover:text-[#6366F1] text-[#0B4ECF] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup for Focus Area */}
        <AnimatePresence>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FBF9F5] border border-[#E5E1D8] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#E5E1D8] text-[#141413] hover:bg-[#0B4ECF] hover:text-white transition-all shadow-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B4ECF] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-xs">
                    DOMAIN {selectedArea.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#848480]">
                    DENSHI INNOVATION CLUB CURRICULUM
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#141413] mb-3">
                  {selectedArea.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#575754] mb-8 pb-6 border-b border-[#E5E1D8]">
                  {selectedArea.tagline}
                </p>

                {/* Foundational Scope */}
                <div className="mb-8">
                  <div className="text-[11px] font-mono text-[#848480] uppercase tracking-widest mb-2 font-bold">
                    FOUNDATIONAL SCOPE &amp; OBJECTIVE
                  </div>
                  <p className="text-base text-[#141413] leading-relaxed bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                    {selectedArea.description}
                  </p>
                </div>

                {/* Initiatives & Outcomes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  
                  {/* Club Initiatives */}
                  <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-2xs">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-[#0B4ECF]" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413]">
                        CLUB INITIATIVES
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedArea.initiatives?.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#575754] flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B4ECF] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Student Outcomes */}
                  <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-4 h-4 text-[#0B4ECF]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413]">
                          STUDENT OUTCOME
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#141413] font-medium leading-relaxed mb-4">
                        {selectedArea.studentOutcome}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#EFECE6]">
                      <span className="font-mono text-[10px] uppercase text-[#848480] block font-bold mb-2">
                        CORE PILLARS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedArea.keyPillars.map((p) => (
                          <span key={p} className="px-2.5 py-1 bg-[#FBF9F5] border border-[#E5E1D8] text-[11px] font-mono text-[#575754] rounded-md">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Modal Action */}
                <div className="pt-6 border-t border-[#E5E1D8] flex items-center justify-between">
                  <a
                    href="#events"
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                      smoothScrollToElement('#events');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B4ECF] text-white font-lemonmilk text-xs tracking-wider rounded-xl shadow-md hover:bg-[#093db5] transition-colors"
                  >
                    <span>Explore Related Events</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-3 bg-white border border-[#E5E1D8] text-[#141413] font-lemonmilk text-xs tracking-wider rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Close Dossier
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
