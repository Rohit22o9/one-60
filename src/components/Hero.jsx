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
  Sparkles
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReservation, onOpenCatering, onOpenKitchen }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5]">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#C26D43]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Pill & Operating Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-200/80 shadow-xs text-xs font-medium text-stone-700 backdrop-blur-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-stone-900">Perth CBD</span>
              <span className="text-stone-300">|</span>
              <span className="flex items-center gap-1 text-stone-600">
                <MapPin className="w-3 h-3 text-[#C26D43]" />
                160 Murray Street Mall
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#181513] leading-[1.12]">
              Artisan Coffee. <br />
              <span className="italic font-normal text-[#C26D43]">All-Day Dining.</span> <br />
              The Spirit of Perth.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
              Nestled in the bustling heart of Murray Street Mall, Cafe One 60 blends European café warmth with Western Australia’s finest specialty roasts, house-made French crêpes, gourmet pressed paninis, and premier corporate office catering.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#181513] text-[#FAF8F5] text-sm font-semibold tracking-wide uppercase hover:bg-[#C26D43] shadow-md hover:shadow-xl transition-all duration-300"
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
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FAF0EA] border border-[#E8CFC2] text-[#A64B24] text-sm font-semibold tracking-wide uppercase hover:bg-[#F5E2D6] transition-all duration-300"
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
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                  <Coffee className="w-4 h-4 text-[#C26D43]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Grinders Coffee</div>
                  <div className="text-[11px] text-stone-500">Specialty Beans</div>
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
                  <div className="text-xs font-bold text-stone-900 group-hover:text-purple-700 transition-colors">Commercial Kitchen</div>
                  <div className="text-[11px] text-stone-500">Booking & Hire</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Collage & Hero Card (Higher Ground / Copia / Grounds style) */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200 text-stone-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#C26D43]">
                        Heritage & Modernity
                      </div>
                      <div className="font-serif text-lg font-bold text-stone-900">
                        160 Murray Street Mall
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-stone-100 font-medium text-stone-700">
                      CBD Heart
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-stone-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Open 7 Days • From 7:30 AM weekdays</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Artisan Coffee */}
              <div className="absolute -top-6 -left-6 sm:-left-8 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-stone-200 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80" 
                    alt="Latte art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">Barista Crafted</div>
                  <div className="text-xs text-stone-500">Grinders Specialty Reserve</div>
                </div>
              </div>

              {/* Floating Badge 2: Commercial Kitchen Partnership */}
              <div 
                onClick={onOpenKitchen}
                className="absolute -bottom-6 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-[#181513] text-white shadow-xl cursor-pointer hover:bg-[#C26D43] transition-colors flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider">Kitchen Facility</div>
                  <div className="text-xs text-stone-300">Commercial prep & event hire</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

