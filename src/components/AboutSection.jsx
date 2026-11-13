import React from 'react';
import { Coffee, Heart, Award, Users, Utensils, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenKitchen, onOpenCatering }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#181513] tracking-tight">
            Crafting Warmth, Community & Flavor in the Heart of Perth
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-6"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            Founded by sibling duo Shaun and Shabnam, Cafe One 60 was built on a simple conviction: that a city café should feel like an extension of home—where world-class coffee meets unhurried culinary craftsmanship.
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
              <div className="p-5 rounded-2xl bg-[#F4EFEB] border border-stone-200 text-stone-800">
                <div className="font-serif text-2xl font-bold text-[#181513]">160</div>
                <div className="text-xs uppercase tracking-wider text-[#C26D43] font-semibold mt-0.5">Murray St Mall</div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Perth CBD’s central meeting point for breakfast meetings, shoppers, commuters, and weekend brunch lovers.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-2xl bg-[#181513] text-white">
                <div className="flex items-center gap-2 text-amber-300 mb-2">
                  <Award className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Excellence</span>
                </div>
                <p className="font-serif text-lg font-medium italic">
                  “From our signature crêpes to executive boardroom platters, every dish is crafted with pride.”
                </p>
                <div className="text-xs text-stone-400 mt-3">— Shaun & Shabnam, Founders</div>
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
              Where European Cafe Tradition Meets Western Australian Produce
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              From our double-shot espresso extractions using hand-selected Grinders Reserve beans to our hand-stretched focaccias and house-whisked yuzu hollandaise, everything we do is intentional.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              We also partner closely with <strong className="font-medium text-stone-800">The Daily Drop</strong>, operating our fully licensed commercial kitchen facility that caters to Perth CBD corporate clients, culinary pop-ups, and specialized kitchen hire shifts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C26D43] flex items-center justify-center mb-2.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base">Specialty Beans</h4>
                <p className="text-xs text-stone-600 mt-1">Exclusive Grinders Reserve single origin and seasonal espresso blends.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base">All-Day Kitchen</h4>
                <p className="text-xs text-stone-600 mt-1">House-made French crêpes, gourmet paninis, and wholesome brunch classics.</p>
              </div>

              <div 
                onClick={onOpenCatering}
                className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs cursor-pointer hover:border-[#C26D43] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#C26D43] flex items-center justify-center mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-[#C26D43] transition-colors">Corporate Catering</h4>
                <p className="text-xs text-stone-600 mt-1">Direct boardroom & office deliveries across St Georges Terrace & CBD.</p>
              </div>

              <div 
                onClick={onOpenKitchen}
                className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs cursor-pointer hover:border-[#C26D43] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-purple-700 transition-colors">Commercial Kitchen</h4>
                <p className="text-xs text-stone-600 mt-1">HACCP-certified kitchen facility hire & after-hours event hosting.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

