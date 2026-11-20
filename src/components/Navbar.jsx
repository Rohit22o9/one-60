import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
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
    { name: "Specialty Coffee", href: "#coffee" },
    { name: "Menu", href: "#menu" },
    { name: "Corporate Catering", href: "#catering" },
    { name: "The Book Café", href: "#book-cafe" },
    { name: "Kitchen Hire", href: "#kitchen" },
    { name: "Location & Hours", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      {showBanner && (
        <div className="bg-[#404D3C] text-[#FAF8F5] text-xs font-medium py-2 px-4 transition-all border-b border-[#4d5c49]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200/80' 
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-3.5 border-b border-stone-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Official Brand Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <Logo 
              variant="dark" 
              className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105 duration-200"
            />
            <div className="hidden sm:flex flex-col border-l border-stone-300 pl-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-700 leading-tight">
                Murray St Mall
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-[#404D3C]">
                Perth CBD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 text-[12px] font-semibold tracking-wider uppercase text-stone-700">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#404D3C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#404D3C] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            
            {/* Takeaway Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-800 transition-colors"
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

            {/* Corporate Catering CTA (Replaces Book Table) */}
            <button
              onClick={onOpenCatering}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2f392c] hover:shadow-md transition-all duration-300"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate Catering</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-800 text-sm font-semibold uppercase tracking-wider hover:text-[#404D3C] py-1 border-b border-stone-100"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatering();
                }}
                className="w-full py-3 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Corporate Catering Quote</span>
              </button>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-2.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
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
