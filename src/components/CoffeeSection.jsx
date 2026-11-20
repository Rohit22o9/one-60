import React from 'react';
import { Coffee, Flame, Droplets, Sparkles, Award, ArrowUpRight } from 'lucide-react';
import { coffeeBarista, icedCoffee } from '../assets/photos';

export default function CoffeeSection({ onSelectCoffee }) {
  const beans = [
    {
      name: "ONE60 House Blend (Hot Coffee)",
      origin: "Colombian & South American Highlands",
      notes: "Dark Belgian Chocolate, Roasted Hazelnut, Caramel Fudge & Creamy Body",
      process: "Washed Arabica Roast",
      bestFor: "Flat White, Latte, Cappuccino & Espresso",
      badge: "House Hot Coffee",
      description: "Our signature blend extracted daily on our commercial espresso bar. Formulated to pair flawlessly with local WA dairy milk and MilkLab oat, almond & soy."
    },
    {
      name: "Single Origin Citrus Roast (Iced Coffee)",
      origin: "Colombian Huila & High Altitude Micro-Lots",
      notes: "Candied Orange Peel, Jasmine Blossom, Peach Nectar & Brown Sugar",
      process: "Honey Process & Light-Medium Roast",
      bestFor: "Iced Latte, Iced Long Black & Citrus Cold Brew",
      badge: "Signature Iced Coffee",
      description: "Roasted specifically to shine over crystal ice. Served with our signature twist of fresh orange peel to elevate natural aromatic fruit notes."
    },
    {
      name: "Slow Steep Cold Drip Bean (Cold Brew)",
      origin: "Single Estate High Altitude Washed",
      notes: "Bergamot Tea, Silky Honeycomb, Crisp Red Apple & Smooth Cocoa",
      process: "8-Hour Slow Ice Water Extraction",
      bestFor: "Straight Cold Drip & Nitro Reserve",
      badge: "8-Hour Extraction",
      description: "Extracted drop-by-drop over eight slow hours. A velvety, sweet, low-acidity coffee experience with incredible clarity of flavor."
    }
  ];

  return (
    <section id="coffee" className="py-24 md:py-32 bg-[#181513] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Glow Backgrounds */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#404D3C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            <Coffee className="w-3.5 h-3.5" />
            <span>The Heart of Our Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Specialty Coffee: From Blossom to Cup
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-6"></div>
          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Coffee is the cornerstone of One60. Our shop’s soothing botanical green identity honors the complete journey: from the fragrant white blossoms on Colombian slopes to the precision-roasted beans in your cup.
          </p>
        </div>

        {/* Feature Wall Story Banner with Real Barista & Iced Coffee Images */}
        <div className="rounded-3xl bg-gradient-to-r from-[#212B1F] via-[#2A3727] to-[#1E261C] border border-[#404D3C]/60 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story description */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Our In-Store Feature Wall Story</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Colombian Maiden & The Coffee Blossom
              </h3>
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                When you step into One60, our centerpiece feature wall immediately catches your eye: the Colombian maiden holding fresh coffee cherries, surrounded by blooming coffee blossoms and lush green foliage.
              </p>
              <p className="text-stone-300 text-sm font-light leading-relaxed">
                Every shade of green in our café is drawn directly from this story. It represents our reverence for the farmers who cultivate the trees, the roasters who unlock their sweetness, and Shaun & Shabnam’s commitment to serving you the finest coffee in Perth CBD.
              </p>
            </div>

            {/* Real photos preview */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-white/20 shadow-lg">
                <img 
                  src={coffeeBarista} 
                  alt="Espresso Barista Craft at One60" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-white/20 shadow-lg">
                <img 
                  src={icedCoffee} 
                  alt="Signature Iced Coffee with Orange Twist" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3 Dedicated Bean Profiles: Hot, Iced, Cold Drip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {beans.map((bean, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.07] hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#404D3C]/60 text-emerald-200 border border-[#52634d]">
                    {bean.badge}
                  </span>
                  <Coffee className="w-5 h-5 text-stone-400 group-hover:text-[#C5A059] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  {bean.name}
                </h3>
                <div className="text-xs text-[#C5A059] font-medium tracking-wide uppercase mb-3">
                  {bean.origin}
                </div>

                <p className="text-xs text-stone-300 font-light mb-4 leading-relaxed">
                  {bean.description}
                </p>

                <div className="space-y-3 py-3 border-y border-white/10 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-400 font-medium">Tasting Notes:</span>
                    <p className="text-emerald-200 mt-0.5 font-light leading-relaxed">{bean.notes}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 font-medium">Process:</span>
                    <p className="text-stone-200 mt-0.5 font-light">{bean.process}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 font-medium">Best Brewed As:</span>
                    <p className="text-stone-200 mt-0.5 font-light">{bean.bestFor}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 flex items-center justify-between text-xs font-semibold text-stone-300 group-hover:text-white">
                <span>Dine-In & Takeaway Ready</span>
                <span className="flex items-center gap-1 text-[#C5A059]">
                  Brewed Fresh Daily
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brew Bar Highlights Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border border-white/10 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Daily Barista Dial-In</h4>
              <p className="text-xs text-stone-400 mt-1">Calibrated every morning for temperature, grind micron size, and silky extraction.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Single Origin Iced Bar</h4>
              <p className="text-xs text-stone-400 mt-1">Light-medium roast iced coffees served with citrus garnish to complement natural stone fruit acidity.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">MilkLab Plant Milks</h4>
              <p className="text-xs text-stone-400 mt-1">Color-coded barista milk steaming with Oatly Barista, MilkLab Almond, Soy & Lactose-Free.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Kyoto Cold Drip</h4>
              <p className="text-xs text-stone-400 mt-1">Eight hours of slow filtration producing pure, sweet, low-acid cold coffee.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
