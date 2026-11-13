import React from 'react';

export default function Logo({ 
  variant = "dark", // "dark", "light", "badge", "white"
  className = "",
  size = "md" 
}) {
  // Sizes
  const sizeClasses = {
    sm: "h-7",
    md: "h-9",
    lg: "h-12",
    xl: "h-16"
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#404D3C] text-white shadow-sm border border-[#4e5d4a] ${className}`}>
        <img 
          src="/one60-logo-white.png" 
          alt="ONE60 Cafe Perth" 
          className={`${currentSize} w-auto object-contain`}
          onError={(e) => {
            // Fallback to SVG if image not loaded
            e.target.style.display = 'none';
          }}
        />
      </div>
    );
  }

  if (variant === "white") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img 
          src="/one60-logo-white.png" 
          alt="ONE60 Cafe Perth" 
          className={`${currentSize} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img 
        src={variant === "light" ? "/one60-logo-white.png" : "/one60-logo.png"} 
        alt="ONE60 Cafe Perth" 
        className={`${currentSize} w-auto object-contain`}
      />
    </div>
  );
}
