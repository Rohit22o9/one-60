import React from 'react';
import { Coffee, Flame, Droplets, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export default function CoffeeSection({ onSelectCoffee }) {
  const beans = [
    {
      name: "One 60 House Signature Blend",
      partner: "Grinders Master Roasters",
      notes: "Dark Chocolate, Roasted Hazelnut, Caramel Fudge & Creamy Body",
      process: "Washed & Natural Arabica",
      bestFor: "Milk Coffees, Flat Whites & Espresso",
      badge: "House Favorite"
    },
    {
      name: "Ethiopian Yirgacheffe Washed",
      partner: "Single Origin Reserve",
      notes: "Bergamot, Jasmine Blossom, Candied Peach & Honeyed Black Tea",
      process: "Slow African Bed Washed",
      bestFor: "Long Black, Batch Brew & Pour Over",
      badge: "Single Origin"
    },
    {
      name: "Colombian Huila Excelso Decaf",
      partner: "Swiss Water Process (99.9% Caffeine-Free)",
      notes: "Brown Sugar, Red Apple Crisp, Toasted Walnut & Milk Cocoa",
      process: "Chemical-Free Mountain Water",
      bestFor: "Any Style — Rich Without the Buzz",
      badge: "Clean Decaf"
    }
  ];

  return (
    <section id="coffee" className="py-20 md:py-28 bg-[#181513] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Glow Backgrounds */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#C26D43]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            <Coffee className="w-3.5 h-3.5" />
            <span>The Coffee Program</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Obsessively Roasted. Precision Extracted.
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-6"></div>
          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
            Inspired by the benchmark specialty roasteries of Perth and Melbourne, our espresso bar is powered by world-class machinery, calibrated daily to honor every origin’s unique terroir.
          </p>
        </div>

        {/* Feature Grid: 3 Coffee Roasts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {beans.map((bean, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.07] hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C26D43]/20 text-[#E8CFC2] border border-[#C26D43]/40">
                    {bean.badge}
                  </span>
                  <Coffee className="w-5 h-5 text-stone-400 group-hover:text-[#C5A059] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  {bean.name}
                </h3>
                <div className="text-xs text-[#C5A059] font-medium tracking-wide uppercase mb-4">
                  {bean.partner}
                </div>

                <div className="space-y-3 py-3 border-y border-white/10 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-400 font-medium">Tasting Notes:</span>
                    <p className="text-stone-200 mt-0.5 font-light leading-relaxed">{bean.notes}</p>
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
                  Available at Bar
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
              <p className="text-xs text-stone-400 mt-1">Calibrated every morning for humidity, temperature, and grind consistency.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Droplets className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">8-Hour Cold Drip</h4>
              <p className="text-xs text-stone-400 mt-1">Slow ice-extracted single origin cold drip for clean, sweet, silky coffee.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Alternative Milk Craft</h4>
              <p className="text-xs text-stone-400 mt-1">Steamed to perfection with Oatly Barista, Bonsoy, Almond, and Macadamia.</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">Kyoto Matcha & Prana Chai</h4>
              <p className="text-xs text-stone-400 mt-1">Ceremonial Japanese matcha & wet-pot organic spiced sticky chai leaves.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

