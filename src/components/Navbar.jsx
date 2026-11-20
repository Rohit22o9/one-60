import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Phone,
  Briefcase
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import Logo from './Logo';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenCatering
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Coffee", href: "#coffee" },
    { name: "Menu", href: "#menu" },
    { name: "Catering", href: "#catering" },
    { name: "Book Café", href: "#book-cafe" },
    { name: "Kitchen Hire", href: "#kitchen" },
    { name: "Location & Hours", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      {showBanner && (
        <div className="bg-[#404D3C] text-[#FAF8F5] text-xs font-medium py-2 px-4 sm:px-8 transition-all border-b border-[#4d5c49]">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-amber-200">Where Good Vibes Brew:</span>
              <span className="hidden sm:inline text-stone-200">160 Murray St Mall, Perth CBD</span>
              <span className="text-amber-200/60">•</span>
              <span className="text-stone-200">Open 7 Days & Catering Every Day (3 Days Notice)</span>
            </div>
            <div className="flex items-center gap-4 text-xs shrink-0">
              <a 
                href={`tel:${CAFE_INFO.phone}`} 
                className="hidden md:flex items-center gap-1.5 hover:text-amber-200 transition-colors text-stone-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CAFE_INFO.phone}</span>
              </a>
              <button 
                onClick={() => setShowBanner(false)}
                className="text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/98 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80' 
            : 'bg-[#FAF8F5]/95 backdrop-blur-sm py-4 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          
          {/* Logo & Official Brand Identity with Generous Right Margin */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0 mr-4 lg:mr-8 xl:mr-10">
            <Logo 
              variant="dark" 
              className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105 duration-200"
            />
            <div className="hidden md:flex flex-col border-l border-stone-300/80 pl-3.5">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-stone-700 leading-tight whitespace-nowrap">
                Murray St Mall
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] font-medium text-[#404D3C] whitespace-nowrap">
                Perth CBD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Centered, Generous Spacing, Never Wraps */}
          <div className="hidden xl:flex items-center justify-center space-x-6 2xl:space-x-8 text-[12px] 2xl:text-[13px] font-semibold tracking-wider uppercase text-stone-700 flex-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#404D3C] transition-colors py-1 relative whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#404D3C] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs with Left Breathing Space */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0 ml-auto xl:ml-8">
            
            {/* Takeaway Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-stone-200/60 text-stone-800 transition-colors cursor-pointer"
              title="View Takeaway Bag"
              aria-label="View Takeaway Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#404D3C] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Corporate Catering Button */}
            <button
              onClick={onOpenCatering}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2f392c] hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate Catering</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-200/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-t border-stone-200 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-800 text-sm font-semibold uppercase tracking-wider hover:text-[#404D3C] py-2 border-b border-stone-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-stone-400 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatering();
                }}
                className="w-full py-3.5 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Briefcase className="w-4 h-4" />
                <span>Corporate Catering Quote</span>
              </button>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-3 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#404D3C]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
