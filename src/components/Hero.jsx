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
  ChevronRight,
  Play,
  Pause
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
      pillName: "Morning Brew",
      tag: "Signature Morning Ritual",
      title: "Fresh Roasted Coffee & Bakery",
      desc: "160 Murray Street Mall • Colombian Roast & Sibling Warmth",
      ctaText: "Coffee Menu",
      ctaHref: "#menu"
    },
    {
      image: coffeeBarista,
      pillName: "Barista Craft",
      tag: "Barista Extraction",
      title: "Commercial Espresso Bar",
      desc: "Calibrated daily with WA dairy & MilkLab alternative milks",
      ctaText: "Coffee Story",
      ctaHref: "#coffee"
    },
    {
      image: dishSpread,
      pillName: "Artisan Brunch",
      tag: "All-Day Kitchen Menu",
      title: "Fresh Sourdough & Brunch Feasts",
      desc: "Crafted fresh in-house using premium Western Australian produce",
      ctaText: "View Dishes",
      ctaHref: "#menu"
    },
    {
      image: cateringSliders,
      pillName: "Catering Boxes",
      tag: "CBD Corporate Catering",
      title: "Brioche & Charcoal Slider Boxes",
      desc: "Delivered 7 days a week across Perth CBD (3 days notice)",
      ctaText: "Platters",
      ctaHref: "#catering"
    },
    {
      image: cabinetFocaccias,
      pillName: "Daily Cabinet",
      tag: "Fresh Daily Display Cabinet",
      title: "Paninis & Rosemary Focaccias",
      desc: "Freshly baked each morning: ready to grab or toast warm",
      ctaText: "Cabinet",
      ctaHref: "#menu"
    },
    {
      image: icedCoffee,
      pillName: "Cold Bar",
      tag: "Single Origin Cold Bar",
      title: "Signature Iced Coffee & Cold Brew",
      desc: "Crisp notes of jasmine, stone fruit & orange peel over ice",
      ctaText: "Cold Drip",
      ctaHref: "#coffee"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4500;
  const TICK_INTERVAL = 50;

  // Smooth progress bar and auto-advance timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleSelectSlide = (idx) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 min-h-[calc(100vh-60px)] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEB] to-[#FAF8F5]">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#404D3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-between">
            
            {/* Location Pill & Operating Status */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-stone-200/90 shadow-2xs text-[11px] sm:text-xs font-medium text-stone-700 backdrop-blur-xs">
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
            </div>

            {/* Main Headline with Official Brand */}
            <div>
              <div className="mb-2">
                <Logo 
                  variant="dark" 
                  className="h-9 sm:h-10 w-auto mb-2" 
                />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-medium tracking-tight text-[#181513] leading-[1.12]">
                Specialty Coffee. <br />
                <span className="italic font-normal text-[#404D3C]">Savor the Flavor,</span> <br />
                Share the Love.
              </h1>
            </div>

            {/* Sub-paragraph */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light leading-relaxed">
              Founded by siblings Shabnam and Shaun, ONE60 is Perth CBD’s vibrant sanctuary. Inspired by our Colombian coffee feature wall, we celebrate the complete journey from blossoms and beans to your morning cup. Enjoy artisan focaccias, the cozy Book Café corner, and corporate catering across Perth.
            </p>

            {/* Action Buttons: Clean 3-button layout */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#404D3C] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#2f392c] shadow-md hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                <span>Explore Daily Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
              </a>

              <button
                onClick={onOpenCatering}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-stone-50 hover:border-stone-400 shadow-xs transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#404D3C]" />
                <span>Corporate Catering</span>
              </button>

              <a
                href="#coffee"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#EBF0E9] border border-[#C5D5C2] text-[#344431] text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-[#dfe8dc] transition-all duration-300 whitespace-nowrap"
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Coffee Story</span>
              </a>
            </div>

            {/* Highlight Badges / Quick Trust Factors (Aligned with right column bottom) */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">4.9 / 5.0</div>
                  <div className="text-[10px] text-stone-500">Google Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF0E9] flex items-center justify-center text-[#404D3C] shrink-0">
                  <BookOpen className="w-4 h-4 text-[#404D3C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">The Book Café</div>
                  <div className="text-[10px] text-stone-500">Curated by Amir</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Catering 7 Days</div>
                  <div className="text-[10px] text-stone-500">3 Days Notice</div>
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
                  <div className="text-xs font-bold text-stone-900 group-hover:text-purple-700 transition-colors leading-tight">Kitchen Hire</div>
                  <div className="text-[10px] text-stone-500">Daily Drop</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: FULL-HEIGHT BALANCED SLIDESHOW (Properly fills vertical & horizontal space) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full">
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C5A059] rounded-tr-3xl pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C5A059] rounded-bl-3xl pointer-events-none z-20" />

              {/* Main Showcase Viewport: aspect-[4/3] with generous height matching the left column */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] max-h-[440px] sm:max-h-[470px] lg:max-h-[490px] w-full bg-stone-950 group"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
              >
                
                {/* Real Photos with Ken Burns Breathing Animation */}
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide 
                        ? 'opacity-100 z-10 pointer-events-auto' 
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className={`w-full h-full object-cover object-center ${
                        idx === currentSlide ? 'animate-kenburns' : ''
                      }`}
                    />

                    {/* Multi-layered cinematic gradient shadows */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                  </div>
                ))}

                {/* Top Glowing Progress Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-30">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Glass Header Bar: Counter, Tag & Play/Pause */}
                <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-serif font-bold tracking-wider border border-white/20 flex items-center gap-1.5 shadow-lg">
                      <span className="text-[#C5A059]">0{currentSlide + 1}</span>
                      <span className="text-stone-400">/</span>
                      <span className="text-stone-300">0{slides.length}</span>
                    </span>

                    <span className="inline-flex px-3 py-1 rounded-full bg-[#404D3C]/90 backdrop-blur-md text-emerald-200 text-[11px] font-semibold uppercase tracking-wider border border-white/20 items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                      <span>{slides[currentSlide].tag}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={togglePlayPause}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
                    aria-label={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                </div>

                {/* Left/Right Floating Navigation Chevrons */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-[#404D3C] backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-110 shadow-xl"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-[#404D3C] backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-110 shadow-xl"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dynamic Glass Caption Overlay (Bottom) */}
                <div className="absolute bottom-4 inset-x-4 z-30 pointer-events-auto">
                  <div className="p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 shadow-xl text-white">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-300 mb-1 font-semibold">
                      <span>160 Murray St Mall</span>
                      <span className="text-stone-300 normal-case font-light text-[11px]">Hover to pause</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight text-white mb-1">
                      {slides[currentSlide].title}
                    </h3>

                    <p className="text-xs text-stone-300 font-light line-clamp-1 mb-2.5">
                      {slides[currentSlide].desc}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <a
                        href={slides[currentSlide].ctaHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-white transition-colors group/link"
                      >
                        <span>{slides[currentSlide].ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>

                      <span className="text-[10px] text-stone-400 font-mono">
                        Perth CBD
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Complete 6-Column Thumbnail Navigation Grid (Never cut off, fills width) */}
              <div className="mt-3">
                <div className="grid grid-cols-6 gap-2">
                  {slides.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectSlide(idx)}
                      className={`flex flex-col sm:flex-row items-center gap-1.5 p-1.5 sm:px-2 sm:py-1.5 rounded-xl border transition-all cursor-pointer text-left ${
                        idx === currentSlide
                          ? 'bg-white border-[#404D3C] shadow-md ring-2 ring-[#404D3C]/30 scale-102'
                          : 'bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300 opacity-75 hover:opacity-100'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}: ${slide.pillName}`}
                    >
                      <div className="w-6 h-6 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                        <img 
                          src={slide.image} 
                          alt={slide.pillName} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-bold text-stone-900 leading-none">
                          0{idx + 1}
                        </div>
                        <div className="hidden md:block text-[9px] text-[#404D3C] font-semibold leading-tight truncate">
                          {slide.pillName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
