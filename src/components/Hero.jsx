import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Star, 
  Coffee, 
  Briefcase, 
  UtensilsCrossed, 
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { 
  takeawayCup, 
  coffeeBarista, 
  dishSpread, 
  cateringSliders, 
  cabinetFocaccias, 
  icedCoffee 
} from '../assets/photos';

export default function Hero({ onOpenCatering, onOpenKitchen }) {
  const slides = [
    {
      image: takeawayCup,
      tag: "Signature Morning Ritual",
      title: "Fresh Roasted Coffee & Artisan Bakery",
      desc: "160 Murray Street Mall • Colombian Roast & Warm Sibling Hospitality"
    },
    {
      image: coffeeBarista,
      tag: "Barista Espresso Craft",
      title: "Commercial Espresso Bar & Latte Art",
      desc: "Calibrated daily with local WA dairy & MilkLab alternative milks"
    },
    {
      image: dishSpread,
      tag: "All-Day Kitchen Menu",
      title: "Fresh Sourdough, Poached Eggs & Bowls",
      desc: "Crafted fresh in-house using premium Western Australian produce"
    },
    {
      image: cateringSliders,
      tag: "CBD Corporate Catering",
      title: "Brioche & Activated Charcoal Slider Boxes",
      desc: "Delivered 7 days a week across Perth CBD with 3 days notice"
    },
    {
      image: cabinetFocaccias,
      tag: "Fresh Daily Display Cabinet",
      title: "Artisan Paninis & Rosemary Focaccias",
      desc: "Freshly baked each morning: ready to grab or toast warm"
    },
    {
      image: icedCoffee,
      tag: "Single Origin Cold Bar",
      title: "Signature Iced Coffee with Orange Twist",
      desc: "Crisp notes of jasmine, stone fruit & dark cocoa over ice"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

            {/* Action Buttons */}
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 text-sm font-semibold tracking-wide uppercase hover:bg-stone-50 hover:border-stone-400 shadow-xs transition-all duration-300 cursor-pointer"
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

          {/* Right Column: INTERACTIVE HERO SLIDESHOW (MULTIPLE REAL PHOTOS) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative mx-auto max-w-md lg:max-w-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Slideshow Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-900">
                
                {/* Slides mapping */}
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === currentSlide 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-900/10" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-[#404D3C]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>{slide.tag}</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1">
                        160 Murray St Mall • Slide {idx + 1} of {slides.length}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1 font-light line-clamp-2">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Left/Right Arrow Navigation Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-105"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-105"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Slide Indicators / Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? 'w-7 bg-amber-300 shadow'
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

              {/* Secondary Floating Mini Card with Live Active Slide Info */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 p-3 rounded-2xl bg-white border border-stone-200 shadow-xl items-center gap-3 max-w-xs z-30">
                <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                  <img 
                    src={slides[currentSlide].image} 
                    alt="Active thumbnail" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 line-clamp-1">
                    {slides[currentSlide].title}
                  </div>
                  <div className="text-[11px] text-[#404D3C] font-semibold">
                    {slides[currentSlide].tag}
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
