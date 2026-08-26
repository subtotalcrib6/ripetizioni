import React from 'react';

interface CircuitBackgroundProps {
  className?: string;
  withMask?: boolean; // Se true, sfuma i bordi per dare un effetto luce morbido
}

export const CircuitBackground: React.FC<CircuitBackgroundProps> = ({
  className = '',
  withMask = true
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={
        withMask
          ? {
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)'
            }
          : undefined
      }
    >
      <svg
        className="w-full h-full text-blue-600/20 dark:text-sky-400/25 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="circuit-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid trace lines */}
            <path
              d="M0 30 H40 L60 50 H120 M120 90 H80 L60 70 H0 M30 0 V40 L50 60 V120 M90 120 V80 L70 60 V0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="none"
            />
            {/* Circuit nodes / solder pads */}
            <circle cx="40" cy="30" r="3" fill="currentColor" />
            <circle cx="80" cy="90" r="3" fill="currentColor" />
            <circle cx="50" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="30" cy="40" r="3" fill="currentColor" />
            <circle cx="90" cy="80" r="3" fill="currentColor" />
            <circle cx="60" cy="50" r="2.5" fill="currentColor" />
            <circle cx="60" cy="70" r="2.5" fill="currentColor" />
            
            {/* Micro chip representation */}
            <rect
              x="52"
              y="52"
              width="16"
              height="16"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      </svg>
    </div>
  );
};
