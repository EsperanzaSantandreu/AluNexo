import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/logo.png"
      alt="AluNexo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};