import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  ShoppingBag, 
  Calendar, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Phone,
  Briefcase,
  UtensilsCrossed
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenReservation, 
  onOpenCatering,
  onOpenKitchen
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Specialty Coffee", href: "#coffee" },
    { name: "Corporate Catering", href: "#catering" },
    { name: "Kitchen & Venue Hire", href: "#kitchen" },
    { name: "Gallery", href: "#gallery" },
    { name: "Hours & Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      {showBanner && (
        <div className="bg-[#181513] text-[#FAF8F5] text-xs font-medium py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-[#D4AF37]">Open Today:</span>
              <span className="hidden sm:inline">160 Murray St Mall, Perth CBD</span>
              <span className="text-[#C5A059]">•</span>
              <span>Now accepting Corporate Catering & Kitchen Hire bookings</span>
            </div>
            <div className="flex items-center gap-4 text-xs shrink-0">
              <a 
                href={`tel:${CAFE_INFO.phone}`} 
                className="hidden md:flex items-center gap-1 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CAFE_INFO.phone}</span>
              </a>
              <button 
                onClick={() => setShowBanner(false)}
                className="text-stone-400 hover:text-white transition-colors"
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
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80' 
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-4 border-b border-stone-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#181513] text-[#FAF8F5] flex items-center justify-center font-serif text-lg tracking-wider font-bold shadow-sm group-hover:bg-[#C26D43] transition-colors">
              160
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#181513] group-hover:text-[#C26D43] transition-colors leading-tight">
                CAFE ONE 60
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">
                160 Murray St Mall • Perth
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[13px] font-medium tracking-wide uppercase text-stone-700">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#C26D43] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C26D43] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            
            {/* Takeaway Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-800 transition-colors"
              title="View Takeaway Bag"
              aria-label="View Takeaway Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C26D43] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Reservation CTA */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181513] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] hover:shadow-lg transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-wider text-stone-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-200/50 hover:text-[#C26D43] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#181513] text-white font-medium text-sm hover:bg-[#C26D43] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatering();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-200 text-stone-900 font-medium text-sm hover:bg-stone-300 transition-colors"
              >
                <Briefcase className="w-4 h-4 text-[#C26D43]" />
                <span>Corporate Catering Inquiry</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenKitchen();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-stone-300 text-stone-800 font-medium text-sm hover:bg-stone-100 transition-colors"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C26D43]" />
                <span>Commercial Kitchen & Hire</span>
              </button>
            </div>

            <div className="pt-3 text-xs text-stone-500 flex flex-col gap-1 border-t border-stone-200">
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C26D43]" /> 160 Murray Street Mall, Perth WA 6000</p>
              <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C26D43]" /> Mon–Sat 7:30am–5pm | Sun 8:30am–5pm</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

