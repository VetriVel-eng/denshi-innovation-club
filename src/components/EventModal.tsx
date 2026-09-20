import React from 'react';
import { motion } from 'motion/react';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Smooth Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-[#141413]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Editorial Dossier Dialog */}
      <motion.div
        id="event-detail-dialog"
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl border border-[#E5E1D8] black-corners rounded-2xl bg-white text-[#141413] p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#575754] hover:text-[#141413] hover:bg-[#FBF9F5] transition-colors"
          aria-label="Close dossier"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Classification Header */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#0B4ECF] font-bold tracking-widest uppercase">
          <span>ARCHIVAL WORKSHOP DOSSIER // {event.displayDate}</span>
        </div>

        {/* Event Title */}
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#141413] tracking-tight mb-4">
          {event.title}
        </h2>

        {/* Metadata Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-[#E5E1D8] py-4 my-6 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-[#848480] uppercase block">CONDUCTION DATE</span>
            <span className="text-[#141413] font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0B4ECF]" />
              {event.displayDate}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[#848480] uppercase block">VENUE &amp; INSTITUTION</span>
            <span className="text-[#141413] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0B4ECF]" />
              {event.location}
            </span>
          </div>
        </div>

        {/* Full Narrative */}
        <div className="space-y-4 mb-8 text-sm sm:text-base text-[#575754] leading-relaxed">
          <p>{event.fullDescription}</p>
        </div>

        {/* Practical Sprints */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xs font-mono text-[#848480] uppercase tracking-widest">
            THREE PRACTICAL SPRINTS CONDUCTED
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {event.practicalTasks.map((task) => (
              <div
                key={task.number}
                className="p-4 bg-[#FBF9F5] border border-[#E5E1D8] flex items-start gap-4"
              >
                <span className="font-mono font-bold text-lg text-[#0B4ECF]">
                  0{task.number}
                </span>
                <div>
                  <div className="font-display font-bold text-sm text-[#141413]">
                    {task.title}
                  </div>
                  <p className="text-xs text-[#575754] mt-0.5">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes and Highlights */}
        <div className="border-t border-[#E5E1D8] pt-6 space-y-3">
          <h4 className="text-xs font-mono text-[#848480] uppercase tracking-widest">
            OFFICIAL PARTICIPANT OUTCOMES
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-[#575754]">
            {event.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0B4ECF] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Modal Bar */}
        <div className="mt-8 pt-6 border-t border-[#E5E1D8] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#141413] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#0B4ECF] transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </motion.div>
    </div>
  );
};
