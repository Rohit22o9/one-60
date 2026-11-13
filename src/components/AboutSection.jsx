import React from 'react';
import { Coffee, Heart, Award, Users, Utensils, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function AboutSection({ onOpenKitchen, onOpenCatering }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C26D43]" />
            <span>Where Good Vibes Brew</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#181513] tracking-tight">
            Our Story: Savor the Flavor, Share the Love
          </h2>
          <div className="w-16 h-0.5 bg-[#404D3C] mx-auto mt-4 mb-6"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            One60 Café was never just about coffee — it was always about connection. Founded by siblings Shabnam and Shaun, One60 was born from a shared dream: to create a space where good food and genuine moments come together.
          </p>
        </div>

        {/* Story Grid with Imagery & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Images Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80" 
                  alt="Cafe interior & coffee bar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-[#EBF0E9] border border-[#C5D5C2] text-stone-800">
                <div className="font-serif text-2xl font-bold text-[#344431]">ONE60</div>
                <div className="text-xs uppercase tracking-wider text-[#404D3C] font-semibold mt-0.5">160 Murray St Mall</div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Perth CBD’s meeting point where Shabnam and Shaun welcome regulars, professionals, and coffee lovers like family.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-2xl bg-[#404D3C] text-white shadow-lg">
                <div className="flex items-center gap-2 text-amber-200 mb-2">
                  <Heart className="w-4 h-4 fill-amber-200" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Sibling Hospitality</span>
                </div>
                <p className="font-serif text-base sm:text-lg font-medium italic leading-snug">
                  “At One60, we’re not just serving food and drinks — we’re serving memories.”
                </p>
                <div className="text-xs text-stone-300 mt-3 font-sans">
                  — Shabnam & Shaun, Founders
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=80" 
                  alt="Barista brewing specialty coffee" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181513]">
              From the Morning Rush to the Afternoon Slowdowns
            </h3>
            
            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              You’ll often find <strong className="font-medium text-stone-900">Shabnam</strong> behind the counter, remembering names, sharing smiles, and making sure everything feels just right — because to her, every customer is like family.
            </p>

            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              <strong className="font-medium text-stone-900">Shaun</strong>, on the other hand, is always buzzing behind the scenes — ensuring your favourite wraps, muffins, and lattes are just as good (if not better) than the last time you visited. (With just a little healthy sibling rivalry over who makes the better flat white!)
            </p>

            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              While our specialty beans are roasted with care in Melbourne, the warmth and love you feel here is 100% local to Perth. Plus, through our culinary collaboration with <strong className="font-medium text-[#404D3C]">The Daily Drop</strong>, our state-of-the-art commercial kitchen powers boardroom catering and certified kitchen facility hire.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#EBF0E9] text-[#404D3C] flex items-center justify-center mb-2.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base">Australian Coffee</h4>
                <p className="text-xs text-stone-600 mt-1">Melbourne-roasted specialty beans paired with rich WA dairy & plant milks.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base">The Book Café</h4>
                <p className="text-xs text-stone-600 mt-1">A cozy cultural corner for book lovers to browse, borrow, and read.</p>
              </div>

              <div 
                onClick={onOpenCatering}
                className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs cursor-pointer hover:border-[#404D3C] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#C26D43] flex items-center justify-center mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-[#404D3C] transition-colors">CBD Office Catering</h4>
                <p className="text-xs text-stone-600 mt-1">Breakfast boxes, artisan focaccias, and sweet slice dessert platters.</p>
              </div>

              <div 
                onClick={onOpenKitchen}
                className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs cursor-pointer hover:border-[#404D3C] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-purple-700 transition-colors">Commercial Kitchen</h4>
                <p className="text-xs text-stone-600 mt-1">Daily Drop culinary partnership & certified kitchen shift hire.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
