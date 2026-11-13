import React from 'react';
import { 
  UtensilsCrossed, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Building2
} from 'lucide-react';
import { KITCHEN_FEATURES } from '../data/cafeData';

export default function KitchenBookingSection({ onOpenKitchen }) {
  return (
    <section id="kitchen" className="py-20 md:py-28 bg-[#181513] text-white relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C26D43]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Commercial Infrastructure & Venue Hire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Commercial Kitchen Booking & Private Events
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            In collaborative partnership with <strong className="text-white font-medium">The Daily Drop</strong>, Cafe One 60 offers a fully licensed, council-registered commercial kitchen and private CBD event space.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Interactive Details & Shift Options */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-[#E8CFC2]">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>HACCP & City of Perth Food Registered Facility</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              State-of-the-Art Kitchen Production in Perth CBD
            </h3>

            <p className="text-stone-300 font-light leading-relaxed text-sm sm:text-base">
              Whether you are an emerging artisan baker, a catering company looking for overflow production capacity, or a brand hosting an intimate supper club, our kitchen provides high-spec commercial grade equipment in a prime location.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="text-[#C5A059] font-serif font-bold text-lg mb-1">Kitchen Shifts</div>
                <div className="text-xs text-stone-300">
                  Morning, Afternoon & Overnight production slots with cold room access.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="text-[#C5A059] font-serif font-bold text-lg mb-1">Private Venue Hire</div>
                <div className="text-xs text-stone-300">
                  After-hours Murray St Mall venue hire for up to 75 guests (launches, sundowners).
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="text-[#C5A059] font-serif font-bold text-lg mb-1">Barista Training Lab</div>
                <div className="text-xs text-stone-300">
                  Dedicated multi-group espresso station for masterclasses & tastings.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                <div className="text-[#C5A059] font-serif font-bold text-lg mb-1">The Daily Drop Synergy</div>
                <div className="text-xs text-stone-300">
                  Seamless culinary booking integration with our team.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenKitchen}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C26D43] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#a65832] transition-colors shadow-lg"
              >
                <span>Book Kitchen Shift / Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Feature Image & Facility Spec Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[4/3] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                alt="Commercial Kitchen Setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Specs Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#181513]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs text-[#C5A059] font-semibold uppercase tracking-wider mb-2">
                  <span>Available Equipment Spec</span>
                  <span>160 Murray St Mall</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Rational Combi Ovens</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>6-Burner Commercial Gas Range</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Walk-In Coolroom & Freezers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Commercial Dishwasher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

