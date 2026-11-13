import React, { useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sparkles,
  Heart,
  CheckCircle2
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
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-[#2A1F1B] to-stone-900 p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C26D43]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The One 60 VIP Club</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Enjoy 10% Off Your First Visit
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-xl">
                Subscribe for private menu previews, seasonal Grinders reserve bean drops, and priority corporate catering discounts for your office.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Welcome to the club! Check your inbox for your 10% code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#C26D43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a65832] transition-colors whitespace-nowrap"
                  >
                    Join Club
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
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#181513] flex items-center justify-center font-serif text-lg font-bold">
                160
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                CAFE ONE 60
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Perth CBD’s destination for barista-crafted Grinders coffee, European crêpes, gourmet lunch paninis, and premium corporate office catering.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                160 Murray Street Mall, Perth WA 6000
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                {CAFE_INFO.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                {CAFE_INFO.email}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Explore</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story & Founders</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">All-Day Kitchen Menu</a></li>
              <li><a href="#coffee" className="hover:text-white transition-colors">Specialty Coffee Roasts</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Visual Atmosphere</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Services</h4>
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Trading Times</h4>
            <div className="text-xs text-stone-300 space-y-1 font-light">
              <p><strong className="text-white">Mon–Thu:</strong> 7:30am – 5:00pm</p>
              <p><strong className="text-white">Friday:</strong> 7:30am – 6:00pm</p>
              <p><strong className="text-white">Saturday:</strong> 7:30am – 5:00pm</p>
              <p><strong className="text-white">Sunday:</strong> 8:30am – 5:00pm</p>
            </div>
            
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#C26D43] font-semibold block">
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
          <p>© {new Date().getFullYear()} Cafe One 60 Perth. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-300 transition-colors">HACCP Certifications</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
