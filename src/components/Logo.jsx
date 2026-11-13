import React from 'react';
import one60Logo from '../assets/one60-logo.png';
import one60LogoWhite from '../assets/one60-logo-white.png';
import logoGreen from '../assets/logo-green.png';

export default function Logo({ 
  variant = "dark", // "dark", "white", "badge"
  className = "h-8 w-auto",
  alt = "ONE60 Cafe"
}) {
  if (variant === "badge") {
    return (
      <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-[#404D3C] border border-[#52634d] shadow-xs">
        <img 
          src={one60LogoWhite} 
          alt={alt} 
          className={className} 
          loading="eager"
        />
      </div>
    );
  }

  const src = variant === "white" ? one60LogoWhite : one60Logo;

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} object-contain select-none`}
      loading="eager"
    />
  );
}
