import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Star, 
  Coffee, 
  Briefcase, 
  UtensilsCrossed, 
  BookOpen,
  Sparkles
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import Logo from './Logo';
import { takeawayCup, dishSpread } from '../assets/photos';

export default function Hero({ onOpenCatering, onOpenKitchen }) {
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
                Specialty Coffee. <br />
                <span className="italic font-normal text-[#404D3C]">Savor the Flavor,</span> <br />
                Share the Love.
              </h1>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
              Founded by siblings Shabnam and Shaun, ONE60 is Perth CBD’s vibrant sanctuary. Inspired by our Colombian coffee feature wall, we celebrate the complete journey from blossoms and beans to your morning cup. Enjoy artisan focaccias, the cozy Book Café corner, and corporate catering across Perth.
            </p>

            {/* Action Buttons (Table Reservation REMOVED) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#404D3C] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#2f392c] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span>Explore Daily Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </a>

              <button
                onClick={onOpenCatering}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 text-sm font-semibold tracking-wide uppercase hover:bg-stone-50 hover:border-stone-400 shadow-xs transition-all duration-300"
              >
                <Briefcase className="w-4 h-4 text-[#404D3C]" />
                <span>Corporate Catering</span>
              </button>

              <a
                href="#coffee"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#EBF0E9] border border-[#C5D5C2] text-[#344431] text-sm font-semibold tracking-wide uppercase hover:bg-[#dfe8dc] transition-all duration-300"
              >
                <Coffee className="w-4 h-4" />
                <span>Our Coffee Story</span>
              </a>
            </div>

            {/* Highlight Badges / Quick Trust Factors */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">4.9 / 5.0 Google</div>
                  <div className="text-[11px] text-stone-500">Perth Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF0E9] flex items-center justify-center text-[#404D3C] shrink-0">
                  <BookOpen className="w-4 h-4 text-[#404D3C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">The Book Café</div>
                  <div className="text-[11px] text-stone-500">Curated by Amir</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Catering 7 Days</div>
                  <div className="text-[11px] text-stone-500">3 Days Notice</div>
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

          {/* Right Column: Visual Collage with Real Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image - Real Takeaway Cup & Croissant */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
                <img 
                  src={takeawayCup} 
                  alt="Cafe One 60 Perth Signature Coffee Cup & Croissant"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-[#404D3C]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Fresh Roasted Daily</span>
                </div>

                {/* Bottom Story Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                    160 Murray Street Mall, Perth CBD
                  </div>
                  <p className="font-serif text-lg font-medium">
                    Shabnam & Shaun’s Warm Perth Meeting Point
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Open 7 Days • From 7:30 AM weekdays
                  </p>
                </div>
              </div>

              {/* Secondary Floating Mini Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-8 p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xl items-center gap-3 max-w-xs animate-bounce-slight">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                  <img src={dishSpread} alt="Breakfast dish" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Artisan Focaccias & Food</div>
                  <div className="text-[11px] text-[#404D3C] font-semibold">Freshly baked in-house</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
