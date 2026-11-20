import React, { useState } from 'react';
import { 
  CATERING_PACKAGES, 
  CATERING_PLATTERS 
} from '../data/cafeData';
import { 
  Briefcase, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Truck, 
  Clock, 
  AlertCircle,
  Plus,
  Minus,
  Coffee,
  Sparkles,
  Layers
} from 'lucide-react';
import { 
  cateringQuad, 
  cateringSliders, 
  cateringWraps, 
  cateringFocaccia, 
  cateringPastry, 
  takeawayCup 
} from '../assets/photos';

export default function CateringSection({ onOpenCateringWithPackage }) {
  // Calculator Mode: "by-guests" OR "by-platters"
  const [calcMode, setCalcMode] = useState("by-platters");

  // Mode 1: Guest count state
  const [guestCount, setGuestCount] = useState(20);
  const [guestIncludeCoffee, setGuestIncludeCoffee] = useState(true);
  const [guestPackageId, setGuestPackageId] = useState(CATERING_PACKAGES[1].id);

  // Mode 2: Multi-item platter quantities
  const [platterQuantities, setPlatterQuantities] = useState({
    "plat-focaccia": 2,
    "plat-sliders": 1,
    "plat-wraps": 1,
    "plat-fruit": 1,
    "plat-pastry": 1,
    "plat-coffee-thermos": 2
  });

  // Calculations for Mode 1 (By Guests)
  const activeGuestPkg = CATERING_PACKAGES.find(p => p.id === guestPackageId) || CATERING_PACKAGES[0];
  const guestCoffeeCost = guestIncludeCoffee ? 4.50 : 0;
  const guestPricePerPerson = activeGuestPkg.pricePerPerson + guestCoffeeCost;
  const guestEstimatedTotal = guestPricePerPerson * guestCount;
  const recommendedPlatterCount = Math.ceil(guestCount / 6);

  // Calculations for Mode 2 (By Platters & Items)
  const handleQuantityChange = (id, delta) => {
    setPlatterQuantities(prev => {
      const current = prev[id] || 0;
      const nextVal = Math.max(0, current + delta);
      return { ...prev, [id]: nextVal };
    });
  };

  const multiItemTotal = CATERING_PLATTERS.reduce((sum, platter) => {
    const qty = platterQuantities[platter.id] || 0;
    return sum + (platter.unitPrice * qty);
  }, 0);

  const totalFoodPlatters = CATERING_PLATTERS
    .filter(p => p.id !== "plat-coffee-thermos")
    .reduce((sum, platter) => sum + (platterQuantities[platter.id] || 0), 0);

  const estimatedMinGuests = CATERING_PLATTERS
    .filter(p => p.id !== "plat-coffee-thermos")
    .reduce((sum, platter) => {
      const qty = platterQuantities[platter.id] || 0;
      return sum + ((platter.servingsPerPlatter - 1) * qty);
    }, 0);

  const estimatedMaxGuests = CATERING_PLATTERS
    .filter(p => p.id !== "plat-coffee-thermos")
    .reduce((sum, platter) => {
      const qty = platterQuantities[platter.id] || 0;
      return sum + ((platter.servingsPerPlatter + 2) * qty);
    }, 0);

  const avgCostPerPerson = estimatedMinGuests > 0 
    ? (multiItemTotal / ((estimatedMinGuests + estimatedMaxGuests) / 2)).toFixed(2)
    : 0;

  return (
    <section id="catering" className="py-20 md:py-28 bg-[#F4EFEB] relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#404D3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Perth CBD Boardroom & Corporate Catering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Corporate Catering & Boardroom Feasts
          </h2>
          <div className="w-16 h-0.5 bg-[#404D3C] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            Delivering artisanal morning teas, mini slider boxes, gourmet focaccias, and sweet slice dessert platters across St Georges Terrace, Brookfield Place, and Perth CBD.
          </p>
        </div>

        {/* Essential Rules Notice Banner: 3 Days Notice & Open 7 Days */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#404D3C]/30 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-900 block">
                  Notice Requirement
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  Minimum 3 Days Notice Required
                </span>
                <p className="text-[11px] text-stone-500 font-light">
                  To prepare fresh artisan bakery dough & fillings.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:border-l md:border-stone-200 md:pl-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF0E9] text-[#404D3C] flex items-center justify-center shrink-0 border border-[#C5D5C2]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#404D3C] block">
                  Delivery Coverage
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-900">
                  Open & Catering 7 Days a Week
                </span>
                <p className="text-[11px] text-stone-500 font-light">
                  Including Sunday CBD boardrooms & corporate seminars.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* TWO-WAY INSTANT CATERING CALCULATOR (OWNER'S REQUEST) */}
        <div className="rounded-3xl bg-white border border-stone-200 shadow-xl overflow-hidden mb-16">
          
          {/* Header & Mode Switch Tabs */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#EBF0E9] text-[#404D3C] flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    Interactive Catering Cost Estimator
                  </h3>
                  <p className="text-xs text-stone-500 font-light">
                    Choose to calculate by your guest head-count, or itemize specific platters directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center p-1 bg-stone-200/80 rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setCalcMode("by-platters")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  calcMode === "by-platters"
                    ? 'bg-[#404D3C] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                1. Select by Platters
              </button>
              <button
                type="button"
                onClick={() => setCalcMode("by-guests")}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  calcMode === "by-guests"
                    ? 'bg-[#404D3C] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                2. Calculate by Guests
              </button>
            </div>
          </div>

          {/* MODE 1: MULTI-ITEM PLATTER SELECTOR */}
          {calcMode === "by-platters" && (
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Platter Line Items List */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Catering Platter Selection
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Quantity & Servings
                    </span>
                  </div>

                  {CATERING_PLATTERS.map((platter) => {
                    const qty = platterQuantities[platter.id] || 0;
                    return (
                      <div 
                        key={platter.id}
                        className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          qty > 0 
                            ? 'bg-[#F9FAF8] border-[#404D3C]/40 shadow-xs' 
                            : 'bg-white border-stone-200/70 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                            <img 
                              src={platter.image} 
                              alt={platter.name}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div>
                            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base leading-tight">
                              {platter.name}
                            </h4>
                            <div className="text-xs text-[#404D3C] font-semibold mt-0.5">
                              ${platter.unitPrice.toFixed(2)} per platter
                            </div>
                            <p className="text-[11px] text-stone-500 font-light mt-0.5">
                              {platter.servesText}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-end gap-3 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(platter.id, -1)}
                            disabled={qty === 0}
                            className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
                            aria-label={`Decrease ${platter.name}`}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-8 text-center font-bold text-sm text-stone-900">
                            {qty}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleQuantityChange(platter.id, 1)}
                            className="w-8 h-8 rounded-lg bg-[#404D3C] hover:bg-[#2f392c] text-white flex items-center justify-center transition-colors cursor-pointer"
                            aria-label={`Increase ${platter.name}`}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Live Platter Order Summary Box */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#F2EDE4] p-6 sm:p-7 border border-stone-300/80 shadow-md sticky top-28">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#404D3C] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Platter Estimate Summary</span>
                    </div>

                    <div className="border-b border-stone-200 pb-4 mb-4">
                      <div className="text-xs text-stone-500">Estimated Total (ex GST)</div>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                        ${multiItemTotal.toFixed(2)}
                      </div>
                      <div className="text-xs text-stone-600 mt-1">
                        +10% GST calculated on final tax invoice
                      </div>
                    </div>

                    {/* Capacity Indicator (Owner's exact request) */}
                    <div className="p-4 rounded-xl bg-white border border-[#404D3C]/20 space-y-2 mb-5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-stone-600 font-medium flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-[#404D3C]" />
                          Total Food Platters:
                        </span>
                        <span className="font-bold text-stone-900">{totalFoodPlatters} platters</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-stone-600 font-medium flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-emerald-600" />
                          Estimated Guests Fed:
                        </span>
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {totalFoodPlatters === 0 ? "0 guests" : `~${estimatedMinGuests} – ${estimatedMaxGuests} guests`}
                        </span>
                      </div>

                      {totalFoodPlatters > 0 && (
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-100">
                          <span className="text-stone-500">Avg. Per Person:</span>
                          <span className="font-semibold text-stone-700">~${avgCostPerPerson} / guest</span>
                        </div>
                      )}
                    </div>

                    {/* Notice Callout */}
                    <div className="flex items-start gap-2 text-[11px] text-amber-800 bg-amber-50/80 p-3 rounded-lg border border-amber-200/60 mb-5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>
                        All catering requires a minimum of <strong>3 days prior notice</strong>. Special dietary requirements can be accommodated.
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenCateringWithPackage({
                        id: "custom-platters",
                        name: "Custom Multi-Item Platter Order",
                        pricePerPerson: avgCostPerPerson,
                        estimatedTotal: multiItemTotal,
                        summary: `${totalFoodPlatters} platters selected (feeds ~${estimatedMinGuests}-${estimatedMaxGuests} people)`
                      })}
                      className="w-full py-3.5 rounded-xl bg-[#404D3C] hover:bg-[#2f392c] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Proceed to Catering Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* MODE 2: CALCULATE BY GUESTS */}
          {calcMode === "by-guests" && (
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                      Guest Head-Count Estimator
                    </h4>
                    <p className="text-xs text-stone-600 font-light">
                      Adjust your guest numbers to see recommended platter counts and per-person cost.
                    </p>
                  </div>

                  {/* Slider Control */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#404D3C]" />
                        <span>Expected Number of Guests:</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#EBF0E9] text-[#404D3C] font-bold text-sm">
                        {guestCount} Guests
                      </span>
                    </div>

                    <input
                      type="range"
                      min="8"
                      max="100"
                      step="1"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#404D3C]"
                    />

                    <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                      <span>8 guests (min)</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75</span>
                      <span>100+ guests</span>
                    </div>
                  </div>

                  {/* Catering Package Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      Select Package Style:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CATERING_PACKAGES.map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => setGuestPackageId(pkg.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            guestPackageId === pkg.id
                              ? 'bg-[#EBF0E9]/60 border-[#404D3C] ring-1 ring-[#404D3C]'
                              : 'bg-white border-stone-200 hover:border-stone-300'
                          }`}
                        >
                          <div className="font-semibold text-stone-900 text-xs">{pkg.name}</div>
                          <div className="text-[11px] text-[#404D3C] font-bold mt-0.5">
                            ${pkg.pricePerPerson.toFixed(2)} / person
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add Coffee Checkbox */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Coffee className="w-4 h-4 text-[#404D3C]" />
                      <div>
                        <div className="text-xs font-bold text-stone-900">Include Colombian Coffee & Teas</div>
                        <div className="text-[11px] text-stone-500">Includes thermal pump airpots, cups, and milks (+$4.50/person)</div>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={guestIncludeCoffee}
                      onChange={(e) => setGuestIncludeCoffee(e.target.checked)}
                      className="w-4 h-4 rounded text-[#404D3C] focus:ring-[#404D3C] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Right: Guest Calculation Result */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#F2EDE4] p-6 sm:p-7 border border-stone-300/80 shadow-md">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#404D3C] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Estimated Quote</span>
                    </div>

                    <div className="border-b border-stone-200 pb-4 mb-4">
                      <div className="text-xs text-stone-500">Estimated Total ({guestCount} Guests)</div>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                        ${guestEstimatedTotal.toFixed(2)}
                      </div>
                      <div className="text-xs text-stone-600 mt-1">
                        ≈ ${guestPricePerPerson.toFixed(2)} per guest
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#404D3C]/20 space-y-2 mb-5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-stone-600 font-medium">Recommended Platters:</span>
                        <span className="font-bold text-[#404D3C]">{recommendedPlatterCount} Large Platters</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-stone-600 font-medium">Notice Window:</span>
                        <span className="font-bold text-amber-700">3 Days Minimum</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenCateringWithPackage({
                        ...activeGuestPkg,
                        guestCount,
                        includeCoffee: guestIncludeCoffee
                      })}
                      className="w-full py-3.5 rounded-xl bg-[#404D3C] hover:bg-[#2f392c] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Inquire for {guestCount} Guests</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* CATERING PACKAGES GRID WITH REAL PHOTOS */}
        <div className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Signature Boardroom Packages
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-light">
              Crafted fresh each morning in our commercial kitchen facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATERING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border bg-white border-stone-200/80 shadow-xs hover:shadow-xl hover:border-[#404D3C]/40 group"
              >
                <div>
                  {/* Real Catering Photo */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-stone-100 border border-stone-200">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#EBF0E9] text-[#404D3C] inline-block mb-2">
                    {pkg.badge}
                  </span>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1 leading-snug">
                    {pkg.name}
                  </h4>
                  
                  <div className="flex items-baseline gap-1 text-[#181513] mb-3">
                    <span className="font-serif text-2xl font-bold">${pkg.pricePerPerson.toFixed(2)}</span>
                    <span className="text-xs text-stone-500 font-medium">/ person (min {pkg.minPeople})</span>
                  </div>

                  <p className="text-xs text-stone-600 font-light mb-4">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 py-3 border-t border-stone-100">
                    {pkg.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#404D3C] shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <button
                    onClick={() => onOpenCateringWithPackage(pkg)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 bg-[#404D3C] text-white hover:bg-[#2f392c] cursor-pointer"
                  >
                    <span>Select & Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
