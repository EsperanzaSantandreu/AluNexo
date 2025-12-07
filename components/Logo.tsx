import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="AluNexo Logo"
    >
      {/* Outer Square Frame */}
      <rect 
        x="10" 
        y="10" 
        width="80" 
        height="80" 
        stroke="currentColor" 
        strokeWidth="8" 
      />
      
      {/* Inner Architectural Shape (Stylized 'a' / Window Profile) */}
      <path 
        d="M 65 25 L 65 75 L 50 75 L 50 55 L 35 55 L 35 25 L 65 25 Z M 50 40 L 50 25 L 35 25 L 35 40 L 50 40 Z" 
        fill="currentColor" 
        fillRule="evenodd"
      />
      {/* Refined construction: Vertical Right Bar + Top Left Square Block */}
      <rect x="60" y="25" width="15" height="50" fill="currentColor" />
      <rect x="25" y="25" width="35" height="15" fill="currentColor" />
      <rect x="25" y="25" width="15" height="35" fill="currentColor" />
      <rect x="25" y="45" width="35" height="15" fill="currentColor" />
    </svg>
  );
};