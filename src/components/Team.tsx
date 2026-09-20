import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  ShieldCheck, 
  LayoutGrid, 
  ListFilter, 
  Search, 
  Sparkles, 
  MapPin, 
  ArrowUpRight, 
  GraduationCap,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  CheckCircle2,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';
import { teamMembers, teamContacts, clubContact } from '../data';
import { TeamMember, ContactPerson } from '../types';

/**
 * Generates clean 2-letter initials from student name
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return (first + last).toUpperCase();
}

/**
 * Maps role to normalized tag
 */
function officerTag(role: string): string {
  if (role.toLowerCase().includes('president') && !role.toLowerCase().includes('vice')) return 'PRESIDENT';
  if (role.toLowerCase().includes('vice')) return 'VICE PRES';
  if (role.toLowerCase().includes('secretary')) return 'SECRETARY';
  return 'MEMBER';
}

/**
 * Rich profile descriptions and key technical focus areas
 */
function getMemberBioAndFocus(member: TeamMember): { bio: string; focus: string[]; highlightColor: string } {
  if (member.role === 'President') {
    return {
      bio: 'Leads the Denshi Innovation Club with strategic vision, coordinating major robotics initiatives, university tech partnerships, and academic workshops with the Skill Development Cell.',
      focus: ['Robotics Architecture', 'Strategic Planning', 'Embedded Systems', 'Technical Leadership'],
      highlightColor: 'blue'
    };
  }
  if (member.role === 'Vice President') {
    return {
      bio: 'Drives project delivery, hardware lab operations, and inter-departmental collaboration, ensuring member projects transition smoothly from schematic design to working prototypes.',
      focus: ['Operations Coordination', 'Hardware Prototyping', 'IoT Implementations', 'Team Mentorship'],
      highlightColor: 'purple'
    };
  }
  if (member.role === 'Secretary') {
    return {
      bio: 'Manages official club documentation, technical logs, academic liaisons with college faculty, and coordinates schedules for hands-on workshops and competition submissions.',
      focus: ['Technical Documentation', 'Academic Liaison', 'System Logs', 'Event Organization'],
      highlightColor: 'teal'
    };
  }
  if (member.name.includes('Durgesh')) {
    return {
      bio: 'Core technical coordinator specializing in system architecture, modern web platforms, firmware integration, and practical workshop engineering for cohort projects.',
      focus: ['Technical Architecture', 'Embedded Firmware', 'Web Platforms', 'Hardware-Software Interfacing'],
      highlightColor: 'sky'
    };
  }
  if (member.name.includes('Eswar')) {
    return {
      bio: 'Operations coordinator focusing on component procurement, laboratory workflow management, circuit assembly verification, and practical student bootcamps.',
      focus: ['Operations & Logistics', 'Circuit Assembly', 'Component Sourcing', 'Lab Management'],
      highlightColor: 'indigo'
    };
  }
  if (member.name.includes('Vetri')) {
    return {
      bio: 'Technology coordinator driving sensor integration, IoT telemetry, microcontroller programming, and mentoring junior club members through hardware debugging.',
      focus: ['Sensor Telemetry', 'Microcontrollers', 'Hardware Debugging', 'IoT Protocols'],
      highlightColor: 'emerald'
    };
  }
  return {
    bio: 'Dedicated student innovator participating in embedded hardware projects, circuit layout design, sensor integrations, and collaborative hands-on workshops at SDC SINCET.',
    focus: ['Circuit Prototyping', 'Embedded C / C++', 'Sensor Interfacing', 'Hardware Design'],
    highlightColor: 'slate'
  };
}

export const Team: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'leadership' | 'members'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const leadership = useMemo(() => teamMembers.filter((m) => m.isLeadership), []);
  const generalMembers = useMemo(() => teamMembers.filter((m) => !m.isLeadership), []);

  const filteredMembers = useMemo(() => {
    let list: TeamMember[] = [];
    if (filterMode === 'leadership') {
      list = leadership;
    } else if (filterMode === 'members') {
      list = generalMembers;
    } else {
      list = searchQuery.trim() ? teamMembers : generalMembers;
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        (m.leadershipTitle && m.leadershipTitle.toLowerCase().includes(q))
    );
  }, [filterMode, searchQuery, leadership, generalMembers]);

  // Handle keyboard navigation inside the detail modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedMember) return;
      if (e.key === 'Escape') {
        setSelectedMember(null);
      } else if (e.key === 'ArrowRight') {
        const currIdx = teamMembers.findIndex((m) => m.id === selectedMember.id);
        const nextIdx = (currIdx + 1) % teamMembers.length;
        setSelectedMember(teamMembers[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const currIdx = teamMembers.findIndex((m) => m.id === selectedMember.id);
        const prevIdx = (currIdx - 1 + teamMembers.length) % teamMembers.length;
        setSelectedMember(teamMembers[prevIdx]);
      }
    },
    [selectedMember]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, selectedMember]);

  // Match contact person if available
  const getContactInfo = (member: TeamMember): ContactPerson | undefined => {
    const cleanName = member.name.toLowerCase().replace(/[^a-z]/g, '');
    return teamContacts.find((c) => {
      const contactClean = c.name.toLowerCase().replace(/[^a-z]/g, '');
      return cleanName.includes(contactClean) || contactClean.includes(cleanName);
    });
  };

  return (
    <section id="team" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B4ECF] animate-pulse shadow-[0_0_8px_#0B4ECF]" />
            <span className="text-[#0B4ECF] font-bold">05 / TEAM &amp; MEMBERS</span>
            <span className="text-[#E5E1D8]">|</span>
            <span>12 STUDENT INNOVATORS</span>
          </div>
          <span className="hidden sm:inline-block">B.E. ECE DEPARTMENT · SINCET</span>
        </div>

        {/* Section Title & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight">
              Organizing Team &amp; Members
            </h2>
            <p className="mt-3 text-base text-[#575754] leading-relaxed">
              B.E. Electronics and Communication Engineering students from Sir Isaac Newton College of Engineering and Technology, recognized and supported as Elite Students by the Skill Development Cell.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#0B4ECF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click on any student box below to inspect their complete detailed profile &amp; credentials</span>
            </div>
          </div>

          {/* Controls Bar: Category Filters, Search & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#848480] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roster..."
                className="w-full sm:w-44 pl-8 pr-3 py-2 bg-white rounded-xl border border-[#E5E1D8] text-xs font-mono text-[#141413] focus:outline-none focus:border-[#0B4ECF] focus:ring-2 focus:ring-[#0B4ECF]/20 placeholder:text-[#848480] shadow-sm transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center bg-white rounded-xl border border-[#E5E1D8] p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  filterMode === 'all'
                    ? 'bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white font-semibold shadow-[0_0_12px_rgba(11,78,207,0.35)]'
                    : 'text-[#575754] hover:text-[#141413]'
                }`}
              >
                All (12)
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('leadership')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  filterMode === 'leadership'
                    ? 'bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white font-semibold shadow-[0_0_12px_rgba(11,78,207,0.35)]'
                    : 'text-[#575754] hover:text-[#141413]'
                }`}
              >
                Officers (03)
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('members')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  filterMode === 'members'
                    ? 'bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white font-semibold shadow-[0_0_12px_rgba(11,78,207,0.35)]'
                    : 'text-[#575754] hover:text-[#141413]'
                }`}
              >
                Members (09)
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-white rounded-xl border border-[#E5E1D8] p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#141413] text-white shadow-sm'
                    : 'text-[#848480] hover:text-[#141413]'
                }`}
                title="Curved Cards View"
                aria-label="Curved Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-[#141413] text-white shadow-sm'
                    : 'text-[#848480] hover:text-[#141413]'
                }`}
                title="Roster Ledger View"
                aria-label="Roster Ledger View"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TIER 1: EXECUTIVE COUNCIL FEATURED DOSSIER BOXES
            Curved edges, Glowing borders & rich gradients
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {(filterMode === 'all' || filterMode === 'leadership') && !searchQuery.trim() && (
          <div className="mb-16">
            
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E5E1D8]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0B4ECF]" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#141413]">
                  EXECUTIVE COUNCIL // CORE DIRECTORS
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#848480]">
                GOVERNING OFFICERS · CLICK TO VIEW DOSSIER
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {leadership.map((officer, idx) => {
                const initials = getInitials(officer.name);
                const isPresident = officer.role === 'President';
                const isVP = officer.role === 'Vice President';

                // Customized theme per officer
                const theme = isPresident
                  ? {
                      bgGradient: 'bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-white',
                      borderAccent: 'border-blue-200/80',
                      topGradient: 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600',
                      glowHover: 'hover:shadow-[0_0_35px_rgba(37,99,235,0.32),0_12px_24px_-6px_rgba(37,99,235,0.2)] hover:ring-2 hover:ring-blue-500/60',
                      monogramBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.35)]',
                      tagGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
                      dotColor: 'bg-blue-600'
                    }
                  : isVP
                  ? {
                      bgGradient: 'bg-gradient-to-br from-indigo-50/90 via-purple-50/60 to-white',
                      borderAccent: 'border-purple-200/80',
                      topGradient: 'bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600',
                      glowHover: 'hover:shadow-[0_0_35px_rgba(124,58,237,0.32),0_12px_24px_-6px_rgba(124,58,237,0.2)] hover:ring-2 hover:ring-purple-500/60',
                      monogramBg: 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-[0_0_15px_rgba(124,58,237,0.35)]',
                      tagGradient: 'bg-gradient-to-r from-indigo-600 to-purple-600',
                      dotColor: 'bg-purple-600'
                    }
                  : {
                      bgGradient: 'bg-gradient-to-br from-teal-50/90 via-emerald-50/60 to-white',
                      borderAccent: 'border-teal-200/80',
                      topGradient: 'bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600',
                      glowHover: 'hover:shadow-[0_0_35px_rgba(13,148,136,0.32),0_12px_24px_-6px_rgba(13,148,136,0.2)] hover:ring-2 hover:ring-teal-500/60',
                      monogramBg: 'bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-[0_0_15px_rgba(13,148,136,0.35)]',
                      tagGradient: 'bg-gradient-to-r from-teal-600 to-emerald-600',
                      dotColor: 'bg-teal-600'
                    };

                const roleDesc = isPresident
                  ? 'Executive Leadership & Overall Strategic Direction'
                  : isVP
                  ? 'Operations, Coordination & Project Execution'
                  : 'Records, Communications & Academic Liaison';

                return (
                  <motion.div
                    key={officer.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedMember(officer)}
                    className={`group relative rounded-3xl overflow-hidden border ${theme.borderAccent} ${theme.bgGradient} ${theme.glowHover} transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(11,78,207,0.08)] flex flex-col justify-between cursor-pointer`}
                  >
                    {/* Top Architectural Gradient Glow Strip */}
                    <div className={`h-1.5 w-full ${theme.topGradient}`} />

                    <div className="p-6 sm:p-7 space-y-5">
                      {/* Top Meta Line: Index + Role Badge or Cancel Button */}
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${theme.dotColor} animate-pulse`} />
                          <span className="font-bold text-[#141413]">OFFICER // 0{idx + 1}</span>
                        </div>
                        {selectedMember?.id === officer.id ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMember(null);
                            }}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-[10px] font-mono uppercase font-bold shadow-sm transition-all"
                            title="Cancel selection"
                            aria-label="Cancel selection"
                          >
                            <span>Cancel</span>
                            <X className="w-3 h-3" />
                          </button>
                        ) : (
                          <span className={`px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-wider font-semibold shadow-sm ${theme.tagGradient}`}>
                            {officer.leadershipTitle}
                          </span>
                        )}
                      </div>

                      {/* Monogram Seal & Student Identity */}
                      <div className="flex items-start gap-4">
                        {/* Curved Glowing Monogram Badge */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 font-mono font-bold text-lg transition-transform duration-300 group-hover:scale-105 ${theme.monogramBg}`}>
                          {initials}
                        </div>

                        {/* Name & Academic Designation */}
                        <div className="space-y-1">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#141413] leading-snug group-hover:text-[#0B4ECF] transition-colors">
                            {officer.name}
                          </h3>
                          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0B4ECF] uppercase tracking-wide">
                            <span>{officer.role}</span>
                          </div>
                        </div>
                      </div>

                      {/* Role Brief / Responsibilities */}
                      <p className="text-xs text-[#575754] leading-relaxed border-t border-black/5 pt-3">
                        {roleDesc}
                      </p>

                      {/* Technical Credentials Box with Curves & Glow */}
                      <div className="p-3.5 bg-white/80 rounded-2xl border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-2 text-xs font-mono backdrop-blur-xs">
                        <div className="flex items-center justify-between text-[#848480] text-[10px] uppercase">
                          <span>DEPARTMENT</span>
                          <span className="text-[#141413] font-semibold">B.E. ECE</span>
                        </div>
                        <div className="text-[#575754] text-[11px] leading-tight">
                          Sir Isaac Newton College of Engineering &amp; Technology
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Chip with Inspect Indicator */}
                    <div className="px-6 py-3.5 bg-white/70 border-t border-black/5 rounded-b-3xl flex items-center justify-between text-[11px] font-mono text-[#575754]">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Elite Student · SDC</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#0B4ECF] font-semibold opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TIER 2: GENERAL COHORT MEMBERS & INNOVATORS
            Curved, Glowing & Gradient Boxes with Click-to-Inspect
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div>
          
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#E5E1D8]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0B4ECF]" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#141413]">
                {filterMode === 'leadership'
                  ? 'OFFICER DIRECTORY'
                  : filterMode === 'members'
                  ? 'GENERAL MEMBERS COHORT (09)'
                  : 'STUDENT INNOVATORS REGISTER (12)'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#848480]">
              SHOWING {filteredMembers.length} OF {teamMembers.length} · CLICK BOX FOR DOSSIER
            </span>
          </div>

          {/* View Mode 1: Curved, Glowing & Gradient Modular Boxes (Default) */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, index) => {
                const initials = getInitials(member.name);
                const isOfficer = member.isLeadership;

                return (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedMember(member)}
                    className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer ${
                      isOfficer
                        ? 'border-blue-200/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 shadow-[0_4px_20px_-2px_rgba(11,78,207,0.12)] hover:shadow-[0_0_30px_rgba(11,78,207,0.3),0_12px_24px_-6px_rgba(11,78,207,0.2)] hover:ring-2 hover:ring-blue-500/60'
                        : 'border-[#E5E1D8] bg-gradient-to-br from-white via-[#FBF9F5] to-[#F1EDE4] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_0_28px_rgba(11,78,207,0.22),0_10px_20px_-4px_rgba(11,78,207,0.14)] hover:border-[#0B4ECF]/50 hover:ring-2 hover:ring-[#0B4ECF]/40 hover:from-white hover:via-sky-50/30 hover:to-blue-50/40'
                    }`}
                  >
                    {/* Top Subtle Gradient Edge Highlight */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${
                      isOfficer
                        ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600'
                        : 'bg-gradient-to-r from-[#E5E1D8] via-[#0B4ECF]/30 to-[#E5E1D8] group-hover:from-[#0B4ECF] group-hover:to-[#38BDF8] transition-all duration-300'
                    }`} />

                    <div>
                      {/* Top Card Meta Bar */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#848480] uppercase tracking-wider pb-3 border-b border-black/5 mb-4">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isOfficer ? 'bg-[#0B4ECF] shadow-[0_0_6px_#0B4ECF]' : 'bg-[#A1A19D] group-hover:bg-[#0B4ECF]'} transition-colors`} />
                          <span>COHORT #{String(index + 1).padStart(2, '0')}</span>
                        </span>
                        {selectedMember?.id === member.id ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMember(null);
                            }}
                            className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-[9px] font-mono uppercase font-bold shadow-sm transition-all"
                            title="Cancel selection"
                            aria-label="Cancel selection"
                          >
                            <span>Cancel</span>
                            <X className="w-2.5 h-2.5" />
                          </button>
                        ) : (
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all ${
                            isOfficer
                              ? 'bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white shadow-xs'
                              : 'bg-white/80 border border-[#E5E1D8] text-[#575754] group-hover:border-[#0B4ECF]/40 group-hover:text-[#0B4ECF]'
                          }`}>
                            {isOfficer ? officerTag(member.role) : 'MEMBER'}
                          </span>
                        )}
                      </div>

                      {/* Monogram + Name Lockup with Curves & Glow */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 font-mono font-bold text-sm transition-all duration-300 group-hover:scale-105 ${
                          isOfficer
                            ? 'bg-gradient-to-br from-[#0B4ECF] via-[#1D4ED8] to-[#2563EB] text-white border-blue-400/30 shadow-[0_0_15px_rgba(11,78,207,0.35)]'
                            : 'bg-gradient-to-br from-[#1E293B] to-[#475569] text-white border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.1)] group-hover:from-[#0B4ECF] group-hover:to-[#0284C7] group-hover:shadow-[0_0_15px_rgba(11,78,207,0.3)]'
                        }`}>
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-base sm:text-lg text-[#141413] group-hover:text-[#0B4ECF] transition-colors truncate">
                            {member.name}
                          </h4>
                          <span className="font-mono text-xs text-[#0B4ECF] block truncate uppercase font-semibold">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      {/* Academic Meta in Curved Box */}
                      <div className="space-y-1 text-xs text-[#575754] font-mono mb-4 p-3 bg-white/70 rounded-xl border border-black/5">
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <GraduationCap className="w-3.5 h-3.5 text-[#0B4ECF] shrink-0" />
                          <span className="truncate font-semibold text-[#141413]">{member.department}</span>
                        </div>
                        <div className="text-[10px] text-[#848480] pl-5 truncate">
                          {member.institution}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accreditation Pill with Click Action */}
                    <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Elite Student · SDC</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#0B4ECF] font-semibold group-hover:translate-x-0.5 transition-transform">
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* View Mode 2: Clean Swiss Roster Ledger Table */
            <div className="rounded-3xl border border-[#E5E1D8] bg-white divide-y divide-[#E5E1D8] overflow-hidden shadow-sm">
              {filteredMembers.map((member, index) => {
                const initials = getInitials(member.name);
                const isOfficer = member.isLeadership;

                return (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#848480] w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs text-white transition-all group-hover:scale-105 ${
                        isOfficer
                          ? 'bg-gradient-to-br from-[#0B4ECF] to-[#2563EB] shadow-[0_0_10px_rgba(11,78,207,0.35)]'
                          : 'bg-gradient-to-br from-[#1E293B] to-[#475569] group-hover:from-[#0B4ECF] group-hover:to-[#0284C7]'
                      }`}>
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-[#141413] group-hover:text-[#0B4ECF] transition-colors flex items-center gap-2">
                          <span>{member.name}</span>
                          {isOfficer && (
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white font-semibold shadow-xs">
                              {member.leadershipTitle}
                            </span>
                          )}
                        </h4>
                        <span className="text-xs text-[#575754] font-mono sm:hidden block">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#575754] font-mono">
                      <span className="hidden sm:inline-block text-[#0B4ECF] uppercase font-semibold">
                        {member.role}
                      </span>
                      <span className="text-[#848480] hidden md:inline-block">
                        {member.department}
                      </span>
                      <span className="text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#FBF9F5] border border-[#E5E1D8] text-emerald-700 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Elite Student, SDC</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#0B4ECF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty State when Search Query Yields No Results */}
          {filteredMembers.length === 0 && (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#E5E1D8] space-y-3 shadow-sm">
              <Users className="w-8 h-8 text-[#848480] mx-auto" />
              <h4 className="font-display font-bold text-base text-[#141413]">
                No Members Matching “{searchQuery}”
              </h4>
              <p className="text-xs font-mono text-[#575754]">
                Try searching by first or last name, or clear the search field to view the full cohort.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white text-xs font-mono uppercase tracking-wider shadow-sm hover:shadow-[0_0_15px_rgba(11,78,207,0.35)] transition-all"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ACADEMIC COHORT METRIC STRIP (Curved & Glowing)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-16 pt-8 border-t border-[#E5E1D8] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-[0_0_20px_rgba(11,78,207,0.15)] transition-all">
            <span className="text-[10px] font-mono text-[#848480] uppercase block">TOTAL COHORT</span>
            <span className="text-3xl font-display font-bold text-[#141413] block mt-1">12</span>
            <span className="text-[10px] font-mono text-[#0B4ECF] font-semibold">Student Engineers</span>
          </div>

          <div className="p-5 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-[0_0_20px_rgba(11,78,207,0.15)] transition-all">
            <span className="text-[10px] font-mono text-[#848480] uppercase block">DEPARTMENT</span>
            <span className="text-sm font-display font-bold text-[#141413] block mt-1">B.E. ECE</span>
            <span className="text-[10px] font-mono text-[#575754]">Electronics &amp; Comm.</span>
          </div>

          <div className="p-5 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-[0_0_20px_rgba(11,78,207,0.15)] transition-all">
            <span className="text-[10px] font-mono text-[#848480] uppercase block">INCUBATION</span>
            <span className="text-sm font-display font-bold text-[#141413] block mt-1">SDC SINCET</span>
            <span className="text-[10px] font-mono text-[#575754]">Skill Development Cell</span>
          </div>

          <a
            href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl border border-[#E5E1D8] hover:border-[#0B4ECF] hover:shadow-[0_0_25px_rgba(11,78,207,0.22)] transition-all group cursor-pointer block"
            title="Open Campus Location on Google Maps"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#848480] uppercase">CAMPUS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B4ECF] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <span className="text-sm font-display font-bold text-[#141413] group-hover:text-[#0B4ECF] block mt-1 transition-colors">
              Pappakovil
            </span>
            <span className="text-[10px] font-mono text-[#575754] flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-[#0B4ECF]" />
              Nagapattinam
            </span>
          </a>
        </div>

      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INTERACTIVE DETAILED DOSSIER MODAL
          View student profile in full detail when clicked
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-white via-[#FCFBF9] to-[#F5F2EB] rounded-3xl border border-[#0B4ECF]/30 shadow-[0_0_50px_rgba(11,78,207,0.35),0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden z-10 my-8 text-left"
            >
              {/* Top Gradient Glowing Stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-[#0B4ECF] via-[#38BDF8] to-[#818CF8]" />

              {/* Close Button & Quick Navigation */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0B4ECF] shadow-[0_0_8px_#0B4ECF]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0B4ECF] font-bold">
                      STUDENT DOSSIER // {selectedMember.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Previous Member Button */}
                    <button
                      type="button"
                      onClick={() => {
                        const currIdx = teamMembers.findIndex((m) => m.id === selectedMember.id);
                        const prevIdx = (currIdx - 1 + teamMembers.length) % teamMembers.length;
                        setSelectedMember(teamMembers[prevIdx]);
                      }}
                      className="p-1.5 rounded-xl border border-[#E5E1D8] text-[#575754] hover:text-[#141413] hover:bg-white transition-colors"
                      title="Previous Member (Left Arrow)"
                      aria-label="Previous Member"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {/* Next Member Button */}
                    <button
                      type="button"
                      onClick={() => {
                        const currIdx = teamMembers.findIndex((m) => m.id === selectedMember.id);
                        const nextIdx = (currIdx + 1) % teamMembers.length;
                        setSelectedMember(teamMembers[nextIdx]);
                      }}
                      className="p-1.5 rounded-xl border border-[#E5E1D8] text-[#575754] hover:text-[#141413] hover:bg-white transition-colors"
                      title="Next Member (Right Arrow)"
                      aria-label="Next Member"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    {/* Cancel Option In The Top Right of the Box */}
                    <button
                      type="button"
                      onClick={() => setSelectedMember(null)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 hover:border-red-600 transition-all ml-1 text-xs font-mono font-bold shadow-xs cursor-pointer group"
                      title="Cancel / Close (ESC)"
                      aria-label="Cancel and Close Dossier"
                    >
                      <span>Cancel</span>
                      <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Profile Header Block */}
                {(() => {
                  const initials = getInitials(selectedMember.name);
                  const isOfficer = selectedMember.isLeadership;
                  const { bio, focus } = getMemberBioAndFocus(selectedMember);
                  const contact = getContactInfo(selectedMember);

                  return (
                    <div className="space-y-6">
                      
                      {/* Name & Monogram Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 font-mono font-bold text-2xl text-white shadow-[0_0_25px_rgba(11,78,207,0.4)] ${
                          isOfficer
                            ? 'bg-gradient-to-br from-[#0B4ECF] via-[#2563EB] to-[#4F46E5]'
                            : 'bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0B4ECF]'
                        }`}>
                          {initials}
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold text-white ${
                              isOfficer
                                ? 'bg-gradient-to-r from-[#0B4ECF] to-[#2563EB]'
                                : 'bg-[#141413]'
                            }`}>
                              {selectedMember.role}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>Elite Student · SDC</span>
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#141413]">
                            {selectedMember.name}
                          </h3>

                          {selectedMember.leadershipTitle && (
                            <p className="text-xs font-mono font-semibold text-[#0B4ECF] uppercase">
                              Official Governing Designation: {selectedMember.leadershipTitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Academic & Incubation Credentials Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3.5 rounded-2xl bg-white border border-[#E5E1D8]">
                          <span className="text-[10px] text-[#848480] uppercase block">ACADEMIC PROGRAM</span>
                          <span className="font-bold text-[#141413] block mt-0.5">{selectedMember.department}</span>
                          <span className="text-[11px] text-[#575754]">Electronics &amp; Communication</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-[#E5E1D8]">
                          <span className="text-[10px] text-[#848480] uppercase block">INCUBATION CELL</span>
                          <span className="font-bold text-[#141413] block mt-0.5">Skill Development Cell</span>
                          <span className="text-[11px] text-emerald-700 font-semibold">Recognized Elite Student</span>
                        </div>
                      </div>

                      {/* Campus Affiliation with Google Maps Link */}
                      <a
                        href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-200 hover:border-[#0B4ECF] hover:shadow-[0_0_20px_rgba(11,78,207,0.2)] transition-all flex items-center justify-between group cursor-pointer"
                        title="View Campus on Google Maps"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#0B4ECF] shadow-xs">
                            <MapPin className="w-5 h-5 text-[#0B4ECF]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#0B4ECF] uppercase font-bold block">
                              INSTITUTIONAL CAMPUS LOCATION
                            </span>
                            <span className="text-xs sm:text-sm font-display font-bold text-[#141413] group-hover:text-[#0B4ECF] transition-colors block">
                              Sir Isaac Newton College of Engineering and Technology
                            </span>
                            <span className="text-[11px] font-mono text-[#575754]">
                              Pappakovil, Nagapattinam, Tamil Nadu — 611102
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[#0B4ECF] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      {/* Direct Connect / Social Links */}
                      {contact ? (
                        <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[#848480] uppercase tracking-wider">
                              COORDINATOR CONTACT CHANNELS
                            </span>
                            <span className="text-[10px] font-mono text-[#0B4ECF] font-semibold">
                              DIRECT INQUIRY
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2.5">
                            {contact.linkedin && (
                              <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
                              >
                                <Linkedin className="w-3.5 h-3.5" />
                                <span>LinkedIn Profile</span>
                              </a>
                            )}
                            {contact.instagram && (
                              <a
                                href={contact.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-pink-500/10 text-pink-600 hover:bg-pink-600 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
                              >
                                <Instagram className="w-3.5 h-3.5" />
                                <span>Instagram</span>
                              </a>
                            )}
                            {contact.email && (
                              <a
                                href={`mailto:${contact.email}`}
                                className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-[#0B4ECF] hover:bg-[#0B4ECF] hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>{contact.email}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-white border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                          <div>
                            <span className="text-[10px] text-[#848480] uppercase block">OFFICIAL CLUB COMMUNICATION</span>
                            <span className="text-[#141413]">Inquiries handled via Denshi Innovation Club</span>
                          </div>
                          <a
                            href="mailto:denshiic@gmail.com"
                            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#0B4ECF] to-[#2563EB] text-white hover:shadow-[0_0_12px_rgba(11,78,207,0.4)] transition-all flex items-center justify-center gap-1.5 text-xs font-semibold self-start sm:self-auto"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>denshiic@gmail.com</span>
                          </a>
                        </div>
                      )}

                    </div>
                  );
                })()}
              </div>

              {/* Bottom Footer Action in Modal */}
              <div className="px-6 py-4 bg-[#F5F2EB] border-t border-[#E5E1D8] flex items-center justify-between text-xs font-mono text-[#848480]">
                <span>Denshi Innovation Club · SDC Cohort</span>
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E1D8] text-[#575754] hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all font-semibold shadow-2xs text-xs font-mono"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel &amp; Close [Esc]</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
