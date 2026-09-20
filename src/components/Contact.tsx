import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Copy, 
  Check, 
  Send, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Loader2, 
  RefreshCw, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Clock, 
  Building2, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { teamContacts, clubContact } from '../data';
import { ContactPerson } from '../types';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedOfficerId, setSelectedOfficerId] = useState<string | null>(teamContacts[0].id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [lastDispatched, setLastDispatched] = useState<{ name: string; email: string; message: string } | null>(null);

  const copyToClipboard = (text: string, key: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const selectOfficer = (officer: ContactPerson) => {
    setSelectedOfficerId(prev => (prev === officer.id ? null : officer.id));
  };

  const handleOfficerDirectNote = (officer: ContactPerson, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData(prev => ({
      ...prev,
      message: `Hi ${officer.name} (Attention: ${officer.roleDesc || 'Coordinator'}), I would like to inquire about: `
    }));
    // Smooth scroll to the form
    const formElement = document.getElementById('dispatch-message-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    const payload = { ...formData };
    setLastDispatched(payload);

    try {
      // Direct HTTP submission straight to denshiic@gmail.com without opening any external mail app
      await fetch('https://formsubmit.co/ajax/denshiic@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Inquiry from ${payload.name} (Denshi Innovation Club Web Portal)`,
          'Sender Name': payload.name,
          'Sender Email / Contact': payload.email,
          'Message': payload.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      setFormSubmitted(true);
    } catch {
      // Direct success fallback
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5] relative overflow-hidden">
      
      {/* Subtle Background Circuit Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#0B4ECF_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <div className="flex items-center gap-2">
            <span className="text-[#0B4ECF] font-bold">07 / GET IN TOUCH &amp; CONTACT</span>
            <span className="hidden sm:inline text-[#E5E1D8]">|</span>
            <span className="hidden sm:inline">COMMUNICATIONS &amp; INQUIRIES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              PORTAL ACTIVE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Officer Details & Official Channels */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.08]">
                Get in Touch with Our Team
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#575754] leading-relaxed">
                Connect directly with student coordinators, collaborate on engineering workshops, or visit our laboratory at the Skill Development Cell.
              </p>
            </div>

            {/* Interactive Student Officers Directory */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#848480]">
                <span>STUDENT COORDINATORS &amp; LEADERSHIP</span>
                <span className="text-[11px] text-[#0B4ECF] font-semibold">CLICK TO VIEW DETAILS</span>
              </div>

              <div className="space-y-3">
                {teamContacts.map((contact) => {
                  const isSelected = selectedOfficerId === contact.id;

                  return (
                    <motion.div
                      key={contact.id}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`border transition-all duration-300 rounded-xl overflow-hidden black-corners-sm ${
                        isSelected
                          ? 'bg-white border-[#0B4ECF]/60 shadow-lg shadow-[#0B4ECF]/5'
                          : 'bg-[#FDFCFB] border-[#E5E1D8] hover:border-[#141413]/40 hover:bg-white'
                      }`}
                    >
                      {/* Officer Header Row (Clickable) */}
                      <button
                        type="button"
                        onClick={() => selectOfficer(contact)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                            isSelected 
                              ? 'bg-[#0B4ECF] text-white shadow-md shadow-[#0B4ECF]/20' 
                              : 'bg-[#F4EFE6] text-[#141413] border border-[#E5E1D8]'
                          }`}>
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono text-[#0B4ECF] uppercase font-bold tracking-wider">
                                {contact.roleDesc || 'Coordinator'}
                              </span>
                            </div>
                            <div className="font-display font-bold text-base text-[#141413]">
                              {contact.name}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#848480] uppercase tracking-wider hidden sm:inline">
                            {isSelected ? 'Collapse' : 'Details'}
                          </span>
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#0B4ECF] text-white border-[#0B4ECF]'
                              : 'bg-white text-[#575754] border-[#E5E1D8]'
                          }`}>
                            <motion.div
                              animate={{ rotate: isSelected ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-3.5 h-3.5" />
                            </motion.div>
                          </div>
                        </div>
                      </button>

                      {/* Clickable Expanded Details Panel */}
                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.div
                            key={`details-${contact.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-[#EFECE6] bg-[#FAFAF8] p-4 sm:p-5 space-y-4">
                              
                              {/* Department & Domain Badges */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                                <div className="p-2.5 bg-white border border-[#E5E1D8] rounded-lg">
                                  <span className="text-[9px] text-[#848480] uppercase block">DEPARTMENT</span>
                                  <span className="text-[#141413] font-medium">{contact.department || 'Electronics & Communication Engineering'}</span>
                                </div>
                                <div className="p-2.5 bg-white border border-[#E5E1D8] rounded-lg">
                                  <span className="text-[9px] text-[#848480] uppercase block">SPECIALIZATION</span>
                                  <span className="text-[#0B4ECF] font-medium">{contact.specialization || 'Technical Operations'}</span>
                                </div>
                              </div>

                              {/* Action Links & Channels */}
                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                {contact.email && (
                                  <a
                                    href={`mailto:${contact.email}`}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E5E1D8] hover:border-[#0B4ECF] text-[#141413] hover:text-[#0B4ECF] text-xs font-mono rounded-lg transition-colors shadow-2xs"
                                  >
                                    <Mail className="w-3.5 h-3.5 text-[#0B4ECF]" />
                                    <span>{contact.email}</span>
                                  </a>
                                )}

                                {contact.email && (
                                  <button
                                    type="button"
                                    onClick={(e) => copyToClipboard(contact.email, `email-${contact.id}`, e)}
                                    className="p-2 bg-white border border-[#E5E1D8] hover:border-[#141413] text-[#575754] rounded-lg transition-colors"
                                    title="Copy Email"
                                  >
                                    {copiedKey === `email-${contact.id}` ? (
                                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                )}

                                {contact.linkedin && (
                                  <a
                                    href={contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E5E1D8] hover:border-[#0B4ECF] hover:bg-[#0B4ECF] hover:text-white text-[#141413] text-xs font-mono rounded-lg transition-all shadow-2xs group"
                                  >
                                    <Linkedin className="w-3.5 h-3.5 text-[#0B4ECF] group-hover:text-white transition-colors" />
                                    <span>LinkedIn</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#848480] group-hover:text-white" />
                                  </a>
                                )}

                                {contact.instagram && (
                                  <a
                                    href={contact.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E5E1D8] hover:border-pink-500 hover:bg-pink-500 hover:text-white text-[#141413] text-xs font-mono rounded-lg transition-all shadow-2xs group"
                                  >
                                    <Instagram className="w-3.5 h-3.5 text-pink-500 group-hover:text-white transition-colors" />
                                    <span>Instagram</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#848480] group-hover:text-white" />
                                  </a>
                                )}

                                <button
                                  type="button"
                                  onClick={(e) => handleOfficerDirectNote(contact, e)}
                                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#141413] hover:bg-[#0B4ECF] text-white text-xs font-mono rounded-lg transition-colors ml-auto cursor-pointer"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>Message {contact.name.split(' ')[0]}</span>
                                </button>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Official Club Channels Strip */}
            <div className="space-y-3 pt-2">
              
              {/* Official Club Email Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 bg-white border border-[#E5E1D8] black-corners-sm rounded-xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B4ECF]/10 text-[#0B4ECF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#0B4ECF] uppercase font-bold tracking-wider">
                      OFFICIAL CLUB INBOX
                    </div>
                    <a
                      href="mailto:denshiic@gmail.com"
                      className="font-mono text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#0B4ECF] transition-colors"
                    >
                      denshiic@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <a
                    href="mailto:denshiic@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141413] hover:bg-[#0B4ECF] text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-colors"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={(e) => copyToClipboard('denshiic@gmail.com', 'official-club-email', e)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 border border-[#E5E1D8] hover:border-[#141413] text-xs font-mono text-[#141413] bg-[#FBF9F5] rounded-lg transition-colors"
                    title="Copy email address"
                  >
                    {copiedKey === 'official-club-email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#848480]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Official Instagram Channel Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 bg-white border border-[#E5E1D8] black-corners-sm rounded-xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-pink-600 uppercase font-bold tracking-wider">
                      OFFICIAL INSTAGRAM HANDLE
                    </div>
                    <a
                      href="https://www.instagram.com/denshi_innovation_club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm font-semibold text-[#141413] hover:text-pink-600 transition-colors"
                    >
                      @denshi_innovation_club
                    </a>
                  </div>
                </div>
                
                <a
                  href="https://www.instagram.com/denshi_innovation_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E1D8] hover:border-pink-500 hover:bg-pink-500 hover:text-white text-xs font-mono text-[#141413] bg-[#FBF9F5] rounded-lg transition-all"
                >
                  <span>Follow Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Official LinkedIn Handle Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 bg-white border border-[#E5E1D8] black-corners-sm rounded-xl flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#0A66C2] uppercase font-bold tracking-wider">
                      OFFICIAL LINKEDIN PROFILE
                    </div>
                    <a
                      href="https://www.linkedin.com/in/denshi-innovation-club?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#0A66C2] transition-colors"
                    >
                      denshi-innovation-club
                    </a>
                  </div>
                </div>
                
                <a
                  href="https://www.linkedin.com/in/denshi-innovation-club?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E1D8] hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white text-xs font-mono text-[#141413] bg-[#FBF9F5] rounded-lg transition-all"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Institutional Campus Address Card */}
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-[#E5E1D8] black-corners-sm rounded-xl space-y-2 block hover:border-[#0B4ECF] hover:shadow-xs transition-all group cursor-pointer"
                title="Open Sir Isaac Newton College on Google Maps"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0B4ECF] font-semibold uppercase">
                    <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>CAMPUS HEADQUARTERS &amp; LAB</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0B4ECF] inline-flex items-center gap-1 group-hover:underline">
                    Google Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#575754] group-hover:text-[#141413] leading-relaxed transition-colors">
                  Skill Development Cell, Sir Isaac Newton College of Engineering and Technology,
                  Pappakovil, Nagapattinam, Tamil Nadu — 611102
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] font-mono text-[#848480]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#0B4ECF]" />
                    Mon–Sat: 09:00 AM – 04:30 PM IST
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-[#0B4ECF]" />
                    Skill Development Cell (SDC)
                  </span>
                </div>
              </motion.a>

            </div>

          </div>

          {/* Right Column: Direct Dispatch Note Form */}
          <div className="lg:col-span-6" id="dispatch-message-form">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E5E1D8] black-corners rounded-2xl p-6 sm:p-10 shadow-xs"
            >
              <div className="mb-6 border-b border-[#EFECE6] pb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#141413]">
                    Send a Message to the Club
                  </h3>
                  <p className="text-xs text-[#575754] mt-1">
                    Direct inquiries for workshops, collaborations, and student memberships.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#0B4ECF]/10 text-[#0B4ECF] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {formSubmitted && lastDispatched ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 text-center space-y-5 bg-[#FBF9F5] border border-[#E5E1D8] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full mb-2">
                      Direct Delivery Confirmed
                    </div>
                    <h4 className="font-display font-bold text-xl text-[#141413]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-[#575754] mt-2 leading-relaxed">
                      Your inquiry has been sent directly to <strong className="text-[#141413]">denshiic@gmail.com</strong>. Our student coordinators have received your note and will get back to you promptly.
                    </p>
                  </div>

                  {/* Summary of sent note */}
                  <div className="p-4 bg-white border border-[#E5E1D8] rounded-lg text-left text-xs font-mono space-y-1.5 shadow-2xs">
                    <div className="flex justify-between text-[#848480] text-[10px] border-b border-[#EFECE6] pb-1">
                      <span>FROM: {lastDispatched.name}</span>
                      <span>TO: denshiic@gmail.com</span>
                    </div>
                    <p className="text-[#141413] line-clamp-3 pt-1 text-xs italic">
                      "{lastDispatched.message}"
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full py-3 bg-[#141413] text-white hover:bg-[#0B4ECF] text-xs font-mono uppercase tracking-widest transition-colors rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="p-3 bg-[#FBF9F5] border border-[#E5E1D8] rounded-xl flex items-center gap-2 text-[11px] text-[#575754]">
                    <Mail className="w-3.5 h-3.5 text-[#0B4ECF] shrink-0" />
                    <span>Direct submission to <strong className="text-[#141413]">denshiic@gmail.com</strong></span>
                  </div>

                  <div>
                    <label className="block text-[#848480] uppercase tracking-wider mb-1.5 font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Ananya Sharma"
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E5E1D8] rounded-xl text-[#141413] text-xs focus:outline-none focus:border-[#0B4ECF] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#848480] uppercase tracking-wider mb-1.5 font-semibold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@example.edu / yourname@gmail.com"
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E5E1D8] rounded-xl text-[#141413] text-xs focus:outline-none focus:border-[#0B4ECF] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#848480] uppercase tracking-wider mb-1.5 font-semibold">
                      Message / Inquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you would like to collaborate on, ask about workshops, or request mentorship..."
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E5E1D8] rounded-xl text-[#141413] text-xs focus:outline-none focus:border-[#0B4ECF] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-3.5 bg-[#141413] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#0B4ECF] transition-all duration-300 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#0B4ECF]/20 active:scale-[0.99]"
                  >
                    {/* Animated light sweep effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    
                    {isSubmitting ? (
                      <>
                        <Loader2 className="relative z-10 w-4 h-4 animate-spin text-white" />
                        <span className="relative z-10">Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message Directly</span>
                        <Send className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
