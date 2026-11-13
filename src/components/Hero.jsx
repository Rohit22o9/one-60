import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Star, 
  Coffee, 
  Briefcase, 
  UtensilsCrossed, 
  Clock,
  BookOpen
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import Logo from './Logo';

export default function Hero({ onOpenReservation, onOpenCatering, onOpenKitchen }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEB] to-[#FAF8F5]">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#404D3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Pill & Operating Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/80 shadow-xs text-xs font-medium text-stone-700 backdrop-blur-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-[#404D3C]">Where Good Vibes Brew</span>
              <span className="text-stone-300">|</span>
              <span className="flex items-center gap-1 text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-[#404D3C]" />
                160 Murray Street Mall, Perth CBD
              </span>
            </div>

            {/* Main Headline with Official Brand */}
            <div>
              <div className="mb-2">
                <Logo 
                  variant="dark" 
                  className="h-10 sm:h-12 w-auto mb-3" 
                />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#181513] leading-[1.12]">
                Australian Coffee. <br />
                <span className="italic font-normal text-[#404D3C]">Savor the Flavor,</span> <br />
                Share the Love.
              </h1>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
              Founded by siblings Shabnam and Shaun, ONE60 was born from a shared dream: a space where good food and genuine moments come together. From our Australian-roasted coffee to our cozy Book Café corner, gourmet focaccias, and CBD boardroom catering.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#404D3C] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#2f392c] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 text-sm font-semibold tracking-wide uppercase hover:bg-stone-50 hover:border-stone-400 shadow-xs transition-all duration-300"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>

              <button
                onClick={onOpenCatering}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#EBF0E9] border border-[#C5D5C2] text-[#344431] text-sm font-semibold tracking-wide uppercase hover:bg-[#dfe8dc] transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" />
                <span>Corporate Catering</span>
              </button>
            </div>

            {/* Highlight Badges / Quick Trust Factors */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">4.9 / 5.0</div>
                  <div className="text-[11px] text-stone-500">Perth Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF0E9] flex items-center justify-center text-[#404D3C] shrink-0">
                  <BookOpen className="w-4 h-4 text-[#404D3C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Book Café</div>
                  <div className="text-[11px] text-stone-500">Cultural Corner</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">CBD Catering</div>
                  <div className="text-[11px] text-stone-500">Offices & Boards</div>
                </div>
              </div>

              <div 
                onClick={onOpenKitchen}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-purple-700 shrink-0 transition-colors">
                  <UtensilsCrossed className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 group-hover:text-purple-700 transition-colors">Kitchen Facility</div>
                  <div className="text-[11px] text-stone-500">Daily Drop Synergy</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Collage & Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80" 
                  alt="Cafe One 60 Perth Interior & Coffee"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200 text-stone-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#404D3C]">
                        Shabnam & Shaun
                      </div>
                      <div className="font-serif text-lg font-bold text-stone-900">
                        160 Murray Street Mall
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#EBF0E9] font-semibold text-[#344431]">
                      Perth CBD
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-stone-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Open 7 Days • From 7:30 AM weekdays</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Official Logo Badge on Deep Green */}
              <div className="absolute -top-4 -left-4 sm:-left-6">
                <Logo variant="badge" className="h-6 sm:h-7 w-auto" />
              </div>

              {/* Floating Badge 2: Commercial Kitchen Partnership */}
              <div 
                onClick={onOpenKitchen}
                className="absolute -bottom-6 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-[#181513] text-white shadow-xl cursor-pointer hover:bg-[#404D3C] transition-colors flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Kitchen Facility</div>
                  <div className="text-xs text-stone-300">Daily Drop Partnership</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
