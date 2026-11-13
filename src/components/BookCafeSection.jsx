import React from 'react';
import { BookOpen, Coffee, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { BOOK_CAFE_INFO } from '../data/cafeData';

export default function BookCafeSection({ onOpenReservation }) {
  return (
    <section id="book-cafe" className="py-20 md:py-24 bg-[#F2EDE4] relative overflow-hidden">
      {/* Background Subtle Shape */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#404D3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image / Visual Corner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-300">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80" 
                alt="Book Cafe Corner at One60" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200">
                <div className="flex items-center gap-2 text-[#404D3C] text-xs font-bold uppercase tracking-wider mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Cultural Corner</span>
                </div>
                <p className="font-serif italic text-sm text-stone-800">
                  “Take a book, leave a book, or stay awhile with a warm flat white.”
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Invitation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-300/80">
              <Sparkles className="w-3.5 h-3.5 text-[#C26D43]" />
              <span>A Unique Perth CBD Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
              The Book Café at One60
            </h2>

            <div className="w-16 h-0.5 bg-[#404D3C]"></div>

            <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              Inside the cozy and welcoming space of Café ONE60, discover a unique cultural corner where books and coffee come together in perfect harmony.
            </p>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Whether you are taking a quiet 20-minute break between meetings in the CBD, catching up on Western Australian literature, or trading your favorite read on our community exchange shelf, our Book Café is your peaceful retreat in the Murray Street Mall.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#404D3C]/10 text-[#404D3C] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Community Exchange</div>
                  <div className="text-[11px] text-stone-500">Curated fiction & art books</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C26D43] flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Unhurried Atmosphere</div>
                  <div className="text-[11px] text-stone-500">Wi-Fi & comfortable seating</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2f392c] transition-colors shadow-md"
              >
                <span>Reserve a Reading Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

