import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

/**
 * Official Denshi Innovation Club Logo
 * Exact visual from official uploaded asset:
 * Bold "DC" with bulb inside 'D', electric blue 'C',
 * and "DENSHI INNOVATION CLUB" typography below.
 */
export const DenshiLogo: React.FC<LogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'dark',
}) => {
  const isDarkTheme = variant === 'dark';

  return (
    <div className={`inline-flex items-center justify-center shrink-0 bg-transparent ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-contain"
        aria-label="Denshi Innovation Club Official Logo"
      >
        <g transform="translate(65, 30)">
          {/* Letter D */}
          <path
            d="M 50,40 L 155,40 C 225,40 260,78 260,140 C 260,202 225,240 155,240 L 50,240 Z M 95,78 L 145,78 C 188,78 215,102 215,140 C 215,178 188,202 145,202 L 95,202 Z"
            fill={isDarkTheme ? '#FFFFFF' : '#051329'}
            fillRule="evenodd"
          />

          {/* Bulb Circuit Inside D */}
          <circle cx="138" cy="115" r="18" fill="none" stroke={isDarkTheme ? '#2563EB' : '#1668E8'} strokeWidth="7" />
          <rect x="134.5" y="128" width="7" height="52" rx="3.5" fill={isDarkTheme ? '#2563EB' : '#1668E8'} />
          <rect x="118" y="184" width="40" height="6.5" rx="3.25" fill={isDarkTheme ? '#2563EB' : '#1668E8'} />
          <rect x="123" y="195" width="30" height="6.5" rx="3.25" fill={isDarkTheme ? '#2563EB' : '#1668E8'} />
          <rect x="129" y="206" width="18" height="6" rx="3" fill={isDarkTheme ? '#2563EB' : '#1668E8'} />

          {/* Letter C */}
          <path
            d="M 405,75 C 380,52 346,40 305,40 C 225,40 178,92 178,140 C 178,188 225,240 305,240 C 346,240 380,228 405,205 L 372,174 C 354,192 332,201 305,201 C 252,201 222,168 222,140 C 222,112 252,79 305,79 C 332,79 354,88 372,106 Z"
            transform="translate(68, 0)"
            fill={isDarkTheme ? '#2563EB' : '#1668E8'}
          />
        </g>

        {/* DENSHI */}
        <text
          x="300"
          y="345"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Montserrat', 'Inter', 'Outfit', sans-serif"
          fontSize="68"
          fontWeight="900"
          letterSpacing="18"
          fill={isDarkTheme ? '#FFFFFF' : '#051329'}
        >
          DENSHI
        </text>

        {/* INNOVATION CLUB */}
        <text
          x="300"
          y="388"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Montserrat', 'Inter', 'Outfit', sans-serif"
          fontSize="21"
          fontWeight="800"
          letterSpacing="14"
          fill={isDarkTheme ? '#E5E1D8' : '#051329'}
        >
          INNOVATION CLUB
        </text>
      </svg>
    </div>
  );
};

export interface SincetLogoProps extends LogoProps {
  href?: string;
  disableLink?: boolean;
}

/**
 * Official Sir Isaac Newton College of Engineering & Technology Logo
 * Links directly to the campus location on Google Maps
 */
export const SincetLogo: React.FC<SincetLogoProps> = ({
  className = 'h-10 w-auto',
  href = 'https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9',
  disableLink = false,
}) => {
  const content = (
    <img
      src="/logos/sincet-logo.webp"
      alt="Sir Isaac Newton College of Engineering and Technology Official Logo"
      className="w-full h-full object-contain"
      referrerPolicy="no-referrer"
    />
  );

  if (disableLink || !href) {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="View Sir Isaac Newton College of Engineering and Technology on Google Maps"
      className={`inline-flex items-center justify-center shrink-0 hover:opacity-85 transition-opacity cursor-pointer ${className}`}
    >
      {content}
    </a>
  );
};

/**
 * Official Skill Development Cell Logo
 */
export const SdcLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/logos/sdc-logo.png"
        alt="Skill Development Cell SINCET Official Logo"
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

/**
 * Official Institutional Alliance Lockup:
 * Denshi Innovation Club (Primary) × Sir Isaac Newton College of Engineering and Technology × Skill Development Cell
 */
export const InstitutionalTrio: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-5 p-3.5 sm:p-4 bg-[#0e1013]/90 border border-white/15 backdrop-blur-md">
      {/* Primary: Denshi */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center">
          <DenshiLogo variant="dark" className="h-9 sm:h-11 w-auto" />
        </div>
        <div className="hidden sm:block">
          <span className="text-[11px] font-mono text-[#ff441f] font-bold tracking-widest block uppercase">
            PRIMARY INITIATIVE
          </span>
          <span className="text-xs font-display font-bold text-white tracking-wide">
            Denshi Innovation Club
          </span>
        </div>
      </div>

      <span className="text-[#71717a] font-mono text-sm select-none">×</span>

      {/* College: SINCET */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center">
          <SincetLogo className="h-8 sm:h-9 w-auto" />
        </div>
        {!compact && (
          <div className="hidden md:block text-left">
            <span className="text-[9px] font-mono text-[#71717a] tracking-wider block uppercase">
              INSTITUTION
            </span>
            <a
              href="https://maps.app.goo.gl/oZYkpSzd2g4SRC7a9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-institution text-[11px] text-[#d4d4cf] hover:text-white font-bold leading-tight block max-w-[200px] truncate transition-colors cursor-pointer"
              title="View College Campus on Google Maps"
            >
              Sir Isaac Newton College
            </a>
          </div>
        )}
      </div>

      <span className="text-[#71717a] font-mono text-sm select-none">×</span>

      {/* Sponsor: SDC */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center">
          <SdcLogo className="h-8 sm:h-9 w-auto" />
        </div>
        {!compact && (
          <div className="hidden md:block text-left">
            <span className="text-[9px] font-mono text-[#71717a] tracking-wider block uppercase">
              SUPPORTING CELL
            </span>
            <span className="text-[11px] font-mono text-[#d4d4cf] font-medium leading-tight block max-w-[150px] truncate">
              Skill Development Cell
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
