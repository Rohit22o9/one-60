import React, { useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sparkles,
  Heart,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReservation, onOpenCatering, onOpenKitchen }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#181513] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* VIP Club Subscription Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#212B1F] via-[#2E3B2C] to-[#212B1F] p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#404D3C]/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-200 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stay in the Loop with ONE60</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Where Good Vibes Brew & Memories Are Made
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-xl">
                Subscribe for private menu updates from Shabnam and Shaun, seasonal roasts, and priority catering discounts for your Perth CBD office.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Welcome to the One60 community! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2f392c] transition-colors whitespace-nowrap shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <img 
                src="/one60-logo-white.png" 
                alt="ONE60 Cafe Perth" 
                className="h-10 w-auto object-contain mb-3" 
              />
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Founded by Shabnam and Shaun. A Perth CBD favorite built on good coffee, great food, the Book Café cultural corner, and genuine community spirit.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300" />
                160 Murray Street Mall, Perth WA 6000
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300" />
                {CAFE_INFO.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300" />
                {CAFE_INFO.email}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Explore</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story (Shabnam & Shaun)</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">All-Day Kitchen Menu</a></li>
              <li><a href="#book-cafe" className="hover:text-white transition-colors">The Book Café Corner</a></li>
              <li><a href="#coffee" className="hover:text-white transition-colors">Australian Specialty Coffee</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location & Trading Hours</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Services</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={onOpenReservation} className="hover:text-white transition-colors text-left">
                  Table Reservations
                </button>
              </li>
              <li>
                <button onClick={onOpenCatering} className="hover:text-white transition-colors text-left">
                  Corporate Office Catering
                </button>
              </li>
              <li>
                <button onClick={onOpenKitchen} className="hover:text-white transition-colors text-left">
                  Commercial Kitchen Hire
                </button>
              </li>
              <li>
                <button onClick={onOpenKitchen} className="hover:text-white transition-colors text-left">
                  Private Evening Venue Hire
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Synergies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200">Trading Times</h4>
            <div className="text-xs text-stone-300 space-y-1 font-light">
              <p><strong className="text-white">Mon–Thu:</strong> 7:30am – 5:00pm</p>
              <p><strong className="text-white">Friday:</strong> 7:30am – 6:00pm</p>
              <p><strong className="text-white">Saturday:</strong> 7:30am – 5:00pm</p>
              <p><strong className="text-white">Sunday:</strong> 8:30am – 5:00pm</p>
            </div>
            
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                Synergy Partner
              </span>
              <p className="text-xs text-stone-400 mt-0.5">
                Powered in culinary collaboration with <strong className="text-stone-200">The Daily Drop</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} One60 Cafe Perth. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="https://www.one60cafe.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Official Website</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
