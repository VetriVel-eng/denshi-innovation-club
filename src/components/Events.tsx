import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { completedEvents } from '../data';
import { EventItem } from '../types';
import { EventModal } from './EventModal';

export const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const event = completedEvents[0];

  return (
    <section id="events" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <span className="text-[#0B4ECF] font-bold">03 / EVENTS &amp; ARCHIVE</span>
          <span>RECORDED WORKSHOPS</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-[11px] font-mono text-[#D94824] uppercase tracking-widest font-bold mb-2">
            INAUGURAL WORKSHOP ARCHIVE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight">
            Claude AI Workshop — August 19, 2026
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-[#3B3B38] font-display font-medium leading-relaxed">
            A student-led interactive sprint hosted by Denshi Innovation Club at the Skill Development Cell, empowering participants with practical generative AI capabilities.
          </p>
        </div>

        {/* Editorial Case Study Block */}
        <div className="bg-white border border-[#E5E1D8] black-corners rounded-2xl overflow-hidden shadow-xs">
          
          {/* Metadata Header Bar */}
          <div className="px-6 sm:px-10 py-5 border-b border-[#E5E1D8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-6 text-[#575754]">
              <span className="flex items-center gap-1.5 text-[#141413] font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#0B4ECF]" />
                19 August 2026
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#848480]" />
                SDC Computer Lab, SINCET
              </span>
            </div>
            <span className="px-2.5 py-1 bg-[#FBF9F5] border border-[#E5E1D8] text-[10px] font-mono uppercase tracking-wider text-[#0B4ECF] font-bold">
              OFFICIALLY COMPLETED
            </span>
          </div>

          {/* Body Content Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Context & Outcomes */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-xs font-mono text-[#848480] uppercase tracking-widest mb-2">
                  OVERVIEW & PURPOSE
                </h3>
                <p className="text-base sm:text-lg text-[#3B3B38] font-display font-medium leading-relaxed">
                  The workshop was structured to demystify generative AI and establish practical tool confidence. By the conclusion of the hands-on session, attendees with zero prior AI exposure were formulating prompts and deploying Claude comfortably for engineering tasks.
                </p>
              </div>

              {/* Verified Outcomes */}
              <div className="border-t border-[#EFECE6] pt-6 space-y-3">
                <h4 className="text-xs font-mono text-[#848480] uppercase tracking-widest">
                  DOCUMENTED OUTCOMES
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-[#575754]">
                  {event.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#0B4ECF] font-mono font-bold shrink-0">0{idx + 1}</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#0B4ECF] transition-colors"
                >
                  <span>View Full Curriculum & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Practical Tasks + Topics */}
            <div className="lg:col-span-6 lg:border-l lg:border-[#EFECE6] lg:pl-10 space-y-6">
              <div>
                <h3 className="text-xs font-mono text-[#848480] uppercase tracking-widest mb-4">
                  PRACTICAL SPRINT STATIONS
                </h3>

                <div className="space-y-4">
                  {event.practicalTasks.map((task) => (
                    <div
                      key={task.number}
                      className="group p-4 bg-[#FBF9F5] border border-[#E5E1D8] black-corners-sm rounded-xl space-y-1 hover:bg-gradient-to-br hover:from-[#0EA5E9]/85 hover:via-[#6366F1]/85 hover:to-[#9333EA]/85 hover:border-[#0EA5E9] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#0B4ECF] group-hover:text-white uppercase tracking-wider transition-colors">
                          TASK 0{task.number}
                        </span>
                        <span className="text-[10px] font-mono text-[#848480] group-hover:text-sky-100 group-hover:bg-sky-900/40 group-hover:border-sky-400 uppercase px-2 py-0.5 rounded transition-colors">
                          HANDS-ON
                        </span>
                      </div>
                      <h4 className="text-base font-display font-bold text-[#141413] group-hover:text-white transition-colors">
                        {task.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#3B3B38] group-hover:text-sky-50 font-display font-medium leading-relaxed transition-colors">
                        {task.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topic Pills */}
              <div className="border-t border-[#EFECE6] pt-5">
                <h4 className="text-[11px] font-mono text-[#848480] uppercase tracking-widest mb-2.5">
                  SESSION MODULES
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {event.topicsAndActivities.slice(0, 8).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] font-mono bg-white border border-[#E5E1D8] text-[#575754]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
