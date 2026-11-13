import React, { useState } from 'react';
import { 
  CATERING_PACKAGES 
} from '../data/cafeData';
import { 
  Briefcase, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Coffee
} from 'lucide-react';

export default function CateringSection({ onOpenCateringWithPackage }) {
  const [selectedPackageId, setSelectedPackageId] = useState(CATERING_PACKAGES[1].id);
  const [guestCount, setGuestCount] = useState(15);
  const [includeCoffee, setIncludeCoffee] = useState(true);

  const activePackage = CATERING_PACKAGES.find(p => p.id === selectedPackageId) || CATERING_PACKAGES[0];
  const coffeePerPerson = includeCoffee ? 4.50 : 0;
  const pricePerPersonTotal = activePackage.pricePerPerson + coffeePerPerson;
  const estimatedSubtotal = pricePerPersonTotal * guestCount;

  return (
    <section id="catering" className="py-20 md:py-28 bg-[#F4EFEB] relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C26D43]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Inspired by Perth’s Best CBD Catering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Corporate Catering & Boardroom Platters
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            Delivering artisanal morning teas, gourmet panini boards, and grazing tables across St Georges Terrace, Brookfield Place, and Perth CBD offices.
          </p>
        </div>

        {/* Catering Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                selectedPackageId === pkg.id 
                  ? 'bg-white border-[#C26D43] shadow-xl ring-2 ring-[#C26D43]/20'
                  : 'bg-white/80 border-stone-200/80 shadow-xs hover:shadow-md hover:bg-white'
              }`}
            >
              <div>
                {/* Package Image */}
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-stone-100">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Badge */}
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF0EA] text-[#C26D43] inline-block mb-2">
                  {pkg.badge}
                </span>

                {/* Title & Price */}
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1 leading-snug">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 text-[#181513] mb-3">
                  <span className="font-serif text-2xl font-bold">${pkg.pricePerPerson.toFixed(2)}</span>
                  <span className="text-xs text-stone-500 font-medium">/ person (min {pkg.minPeople})</span>
                </div>

                <p className="text-xs text-stone-600 font-light mb-4">
                  {pkg.description}
                </p>

                {/* Bullet Items */}
                <div className="space-y-2 py-3 border-t border-stone-100">
                  {pkg.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-2">
                <button
                  onClick={() => {
                    setSelectedPackageId(pkg.id);
                    onOpenCateringWithPackage(pkg);
                  }}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    selectedPackageId === pkg.id
                      ? 'bg-[#181513] text-white hover:bg-[#C26D43]'
                      : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                  }`}
                >
                  <span>Select & Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Catering Calculator & Quote Card */}
        <div className="rounded-3xl bg-white border border-stone-200/90 shadow-xl p-8 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0EA] text-[#C26D43] flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Instant Catering Estimate Calculator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                Calculate an immediate estimate for your upcoming CBD corporate lunch, morning tea, or seminar.
              </p>

              {/* Controls */}
              <div className="space-y-4 pt-2">
                
                {/* Guest Count Slider & Number Input */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#C26D43]" />
                      <span>Number of Guests:</span>
                    </span>
                    <span className="text-sm font-bold text-[#181513] bg-stone-100 px-3 py-1 rounded-lg">
                      {guestCount} Guests
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="8"
                    max="150"
                    step="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full accent-[#C26D43] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>Min: 8</span>
                    <span>50</span>
                    <span>100</span>
                    <span>150+ Guests</span>
                  </div>
                </div>

                {/* Package Selector Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Selected Package:
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  >
                    {CATERING_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — ${pkg.pricePerPerson.toFixed(2)}/person
                      </option>
                    ))}
                  </select>
                </div>

                {/* Coffee Addon Checkbox */}
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeCoffee}
                    onChange={(e) => setIncludeCoffee(e.target.checked)}
                    className="w-4 h-4 text-[#C26D43] accent-[#C26D43] rounded"
                  />
                  <div className="flex items-center justify-between w-full text-xs">
                    <span className="flex items-center gap-2 font-medium text-stone-800">
                      <Coffee className="w-4 h-4 text-[#C26D43]" />
                      Add Grinders Specialty Batch Brew & Herbal Tea Thermos
                    </span>
                    <span className="text-stone-500 font-semibold">+$4.50 / guest</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Right: Live Total & CTA Box */}
            <div className="lg:col-span-5 bg-[#181513] text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-300">
                  Estimated Quote Summary
                </span>
                <div className="mt-2 font-serif text-3xl sm:text-4xl font-bold">
                  ${estimatedSubtotal.toFixed(2)} <span className="text-sm font-sans font-normal text-stone-400">+ GST</span>
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  Based on {guestCount} guests at ${pricePerPersonTotal.toFixed(2)}/person
                </div>

                <div className="mt-6 space-y-2 py-4 border-y border-white/10 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Base Package ({activePackage.name}):</span>
                    <span className="font-semibold text-white">${(activePackage.pricePerPerson * guestCount).toFixed(2)}</span>
                  </div>
                  {includeCoffee && (
                    <div className="flex justify-between">
                      <span>Coffee & Tea Station:</span>
                      <span className="font-semibold text-white">${(coffeePerPerson * guestCount).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-400">
                    <span>CBD Direct Delivery (Murray/Terrace):</span>
                    <span className="font-semibold">Complimentary</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenCateringWithPackage({
                    ...activePackage,
                    guestCount,
                    includeCoffee,
                    estimatedTotal: estimatedSubtotal
                  })}
                  className="w-full py-3.5 rounded-full bg-[#C26D43] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#a65832] transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Catering Order / Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-stone-400 mt-2">
                  No immediate charge • We confirm within 2 hours
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C26D43] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">CBD Desk Delivery</h4>
              <p className="text-xs text-stone-500 mt-0.5">Delivered directly to your floor, reception, or boardroom.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Short Notice Accommodated</h4>
              <p className="text-xs text-stone-500 mt-0.5">Orders accepted until 2:00 PM for next-morning delivery.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">Corporate Accounts</h4>
              <p className="text-xs text-stone-500 mt-0.5">14-day or 30-day billing available for established Perth firms.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

