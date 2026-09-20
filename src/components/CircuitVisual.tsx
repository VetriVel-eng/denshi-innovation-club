// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Activity, Radio, Binary, Sparkles } from 'lucide-react';

export const CircuitVisual: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background ambient glow - restrained and subtle */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/30 via-slate-900/40 to-teal-950/20 rounded-3xl blur-2xl -z-10" />
      
      {/* Outer framing chassis */}
      <div className="relative w-full h-full rounded-2xl border border-slate-800/80 bg-[#090d16]/90 p-5 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-circuit-grid opacity-60 pointer-events-none" />

        {/* Top header telemetry */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/70 pb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-cyan-400 font-semibold tracking-wider">DENSHI::IC-CORE</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-emerald-400" /> 100% READY
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">ECE::SDC</span>
          </div>
        </div>

        {/* Central Circuit & Microprocessor Die */}
        <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center">
          {/* Circuit SVG Traces */}
          <svg className="w-full h-56 max-w-xs" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
              <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left Bus Traces */}
            <path d="M 20 40 L 80 40 L 105 75" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 10 70 L 70 70 L 105 85" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M 15 110 L 105 110" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.7" />
            <path d="M 25 150 L 75 150 L 105 130" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M 20 180 L 80 180 L 105 145" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Right Bus Traces */}
            <path d="M 300 40 L 240 40 L 215 75" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 310 70 L 250 70 L 215 85" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M 305 110 L 215 110" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.7" />
            <path d="M 295 150 L 245 150 L 215 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M 300 180 L 240 180 L 215 145" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Signal Pulse animations along paths */}
            <circle cx="55" cy="70" r="2.5" fill="#22d3ee">
              <animate attributeName="cx" values="10;105" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0.8;0" dur="3s" repeatCount="indefinite" />
            </circle>

            <circle cx="60" cy="110" r="2.5" fill="#34d399">
              <animate attributeName="cx" values="15;105" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0.7;0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            <circle cx="260" cy="110" r="2.5" fill="#38bdf8">
              <animate attributeName="cx" values="305;215" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0.7;0" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* Connection nodes on PCB */}
            <circle cx="10" cy="70" r="3" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
            <circle cx="15" cy="110" r="3" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="310" cy="70" r="3" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
            <circle cx="305" cy="110" r="3" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />

            {/* Central Microchip Body */}
            <rect x="105" y="60" width="110" height="100" rx="10" fill="#0b1120" stroke="#1e293b" strokeWidth="2" />
            <rect x="110" y="65" width="100" height="90" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />

            {/* IC Silicon Center Die */}
            <rect x="125" y="80" width="70" height="60" rx="5" fill="#080e1a" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.6" />
            
            {/* Inner Silicon Traces */}
            <line x1="135" y1="92" x2="185" y2="92" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="135" y1="105" x2="185" y2="105" stroke="#34d399" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="135" y1="118" x2="185" y2="118" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="160" y1="85" x2="160" y2="135" stroke="#334155" strokeWidth="0.8" />

            {/* IC Pins - Top & Bottom */}
            {[-25, -15, -5, 5, 15, 25].map((offset, i) => (
              <React.Fragment key={i}>
                <rect x={160 + offset - 2} y={54} width="4" height="6" fill="#64748b" rx="1" />
                <rect x={160 + offset - 2} y={160} width="4" height="6" fill="#64748b" rx="1" />
              </React.Fragment>
            ))}

            {/* IC Pins - Left & Right */}
            {[-25, -15, -5, 5, 15, 25].map((offset, i) => (
              <React.Fragment key={`lr-${i}`}>
                <rect x={99} y={110 + offset - 2} width="6" height="4" fill="#64748b" rx="1" />
                <rect x={215} y={110 + offset - 2} width="6" height="4" fill="#64748b" rx="1" />
              </React.Fragment>
            ))}

            {/* Chip Marking text */}
            <text x="160" y="103" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
              DENSHI-01
            </text>
            <text x="160" y="115" textAnchor="middle" fill="#06b6d4" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5">
              ECE :: SINCET
            </text>
          </svg>

          {/* Module interactive badges below chip */}
          <div className="grid grid-cols-3 gap-2 w-full mt-2">
            <button
              onClick={() => setActivePin('ai')}
              className={`p-2 rounded-lg border text-left transition-all ${
                activePin === 'ai'
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-200'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium">
                <Cpu className="w-3 h-3 text-cyan-400" />
                AI Logic
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-mono">Claude AI • ML</div>
            </button>

            <button
              onClick={() => setActivePin('embedded')}
              className={`p-2 rounded-lg border text-left transition-all ${
                activePin === 'embedded'
                  ? 'border-emerald-500 bg-emerald-950/40 text-emerald-200'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium">
                <Zap className="w-3 h-3 text-emerald-400" />
                Circuits
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-mono">VLSI • Embedded</div>
            </button>

            <button
              onClick={() => setActivePin('iot')}
              className={`p-2 rounded-lg border text-left transition-all ${
                activePin === 'iot'
                  ? 'border-sky-500 bg-sky-950/40 text-sky-200'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium">
                <Radio className="w-3 h-3 text-sky-400" />
                Sensors
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-mono">IoT • Protocols</div>
            </button>
          </div>
        </div>

        {/* Bottom Hardware Architecture Status */}
        <div className="relative z-10 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>COMMUNITY PROTOCOL</span>
          </div>
          <a
            href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
            title="Open Location on Google Maps"
          >
            PAPPAKOVIL, NAGAPATTINAM
          </a>
        </div>
      </div>
    </div>
  );
};
