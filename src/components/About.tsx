import React, { useState } from 'react';
import { motion } from 'motion/react';
import { aboutContent } from '../data';
import { Eye, Wrench, BookOpen, Share2, TrendingUp, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activeCycle, setActiveCycle] = useState<number>(0);

  const pillars = [
    { title: 'Clarity', desc: 'Demystifying industry domains, tools, and modern technical career paths.', icon: Eye },
    { title: 'Skills', desc: 'Hands-on tool literacy, prompt engineering, and hardware debugging.', icon: Wrench },
    { title: 'Learning', desc: 'Active experimentation across electronics, AI models, and software.', icon: BookOpen },
    { title: 'Sharing', desc: 'Peer-to-peer mentoring and open knowledge transfer across batches.', icon: Share2 },
    { title: 'Growth', desc: 'Building verifiable project portfolios and team confidence.', icon: TrendingUp },
  ];

  return (
    <section id="about" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 border-b border-[#E5E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-12 text-xs font-mono uppercase tracking-widest text-[#848480]">
          <span className="text-[#0B4ECF] font-bold">01 / ABOUT &amp; MANIFESTO</span>
          <span>STUDENT-LED INITIATIVE</span>
        </div>

        {/* Editorial Split Layout: Big Statement + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.08]">
              Learning becomes profound when knowledge is shared.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#575754]">
              Bridging university curriculum and real-world technology through student initiative.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base sm:text-lg text-[#3B3B38] font-display font-medium leading-relaxed">
            <p>
              Denshi Innovation Club is a student-driven initiative by B.E. Electronics and Communication Engineering students at Sir Isaac Newton College of Engineering and Technology, supported by the Skill Development Cell.
            </p>
            <p>
              We believe practical competence flourishes in an open sandbox. Through hands-on workshops, peer mentoring, and hardware tasks, we equip fellow students with the confidence to explore emerging technologies and build clear career trajectories.
            </p>
          </div>
        </div>

        {/* Side-by-Side: The Operational Cycle & Core Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: The 4-Stage Operational Cycle */}
          <div className="bg-white border border-[#E5E1D8] black-corners rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold mb-0.5">
                    PROCESS ARCHITECTURE
                  </span>
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#141413]">
                    THE OPERATIONAL CYCLE
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#848480] bg-[#FBF9F5] px-3 py-1 rounded-full border border-[#E5E1D8]">
                  4-STAGE LOOP
                </span>
              </div>

              {/* 2x2 Grid of Operational Cycle Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.learningCycle.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="group p-4 sm:p-5 bg-[#FBF9F5] border border-[#E5E1D8] black-corners-sm rounded-xl hover:border-[#0EA5E9] hover:bg-gradient-to-br hover:from-[#0EA5E9]/85 hover:via-[#6366F1]/85 hover:to-[#9333EA]/85 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-mono text-xl font-bold text-[#0B4ECF] group-hover:text-white transition-colors">
                          {item.step}
                        </span>
                        <span className="text-[9px] font-mono text-[#848480] group-hover:text-sky-100 group-hover:bg-sky-900/40 group-hover:border-sky-400 uppercase tracking-wider px-2 py-0.5 bg-white border border-[#E5E1D8] rounded-md transition-colors">
                          STAGE {idx + 1}
                        </span>
                      </div>
                      <h4 className="text-base font-display font-bold text-[#141413] group-hover:text-white transition-colors mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#3B3B38] group-hover:text-sky-50 font-display font-medium leading-relaxed transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Indicator Note */}
            <div className="mt-6 pt-4 border-t border-[#EFECE6] flex items-center justify-between text-[10px] font-mono text-[#848480]">
              <span>ITERATIVE APPLIED LEARNING</span>
              <span className="text-[#0B4ECF] font-semibold">CONTINUOUS FEEDBACK</span>
            </div>
          </div>

          {/* RIGHT COLUMN: 5 Core Tenets */}
          <div className="bg-white border border-[#E5E1D8] black-corners rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#0B4ECF] uppercase tracking-widest block font-bold mb-0.5">
                    PHILOSOPHICAL FOUNDATION
                  </span>
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#141413]">
                    CORE TENETS
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#848480] bg-[#FBF9F5] px-3 py-1 rounded-full border border-[#E5E1D8]">
                  5 PILLARS
                </span>
              </div>

              {/* List of 5 Tenets */}
              <div className="space-y-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="group p-3 sm:p-3.5 bg-[#FBF9F5] border border-[#E5E1D8] black-corners-sm rounded-xl hover:border-[#0EA5E9] hover:bg-gradient-to-br hover:from-[#0EA5E9]/85 hover:via-[#6366F1]/85 hover:to-[#9333EA]/85 transition-all duration-300 flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-white group-hover:bg-sky-900/40 group-hover:border-sky-400 border border-[#E5E1D8] flex items-center justify-center text-[#0B4ECF] group-hover:text-white transition-colors shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-display font-bold text-sm text-[#141413] group-hover:text-white transition-colors">
                          {pillar.title}
                        </div>
                        <p className="text-xs sm:text-sm text-[#3B3B38] group-hover:text-sky-50 font-display font-medium leading-relaxed transition-colors">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Indicator Note */}
            <div className="mt-6 pt-4 border-t border-[#EFECE6] flex items-center justify-between text-[10px] font-mono text-[#848480]">
              <span>PEER MENTORSHIP VALUES</span>
              <span className="text-[#141413] font-semibold">STUDENT DRIVEN</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
