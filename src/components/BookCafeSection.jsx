import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Coffee, 
  Heart, 
  Sparkles, 
  BookMarked, 
  Globe2, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { 
  bookCafeNook, 
  coffeeBarista, 
  bookReadingTable, 
  bookCornerCoffee, 
  icedCoffee 
} from '../assets/photos';

export default function BookCafeSection() {
  const [activeTab, setActiveTab] = useState(0);

  // Slideshow slides for Book Cafe Section
  const bookSlides = [
    {
      image: bookCafeNook,
      pillName: "Reading Nook",
      tag: "Cultural Corner",
      title: "The Book Café Reading Nook",
      desc: "Located directly in front of the coffee machine for unhurried contemplation"
    },
    {
      image: coffeeBarista,
      pillName: "Barista Craft",
      tag: "Coffee Meets Literature",
      title: "Fresh Espresso Brewing Steps Away",
      desc: "Shaun and Shabnam's baristas crafting your flat white while you read"
    },
    {
      image: bookReadingTable,
      pillName: "Reading Table",
      tag: "Curated by Amir",
      title: "Persian Classics & Global Poetry",
      desc: "Hand-picked bilingual translations, contemporary fiction & philosophy"
    },
    {
      image: bookCornerCoffee,
      pillName: "CBD Sanctuary",
      tag: "Quiet CBD Sanctuary",
      title: "An Unhurried Murray St Mall Retreat",
      desc: "Wi-Fi, cozy seating, and welcoming conversations with our team"
    },
    {
      image: icedCoffee,
      pillName: "Cold Brew Read",
      tag: "Afternoon Companion",
      title: "Signature Brews & Deep Stories",
      desc: "Trade a book from your collection on our community exchange shelf"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4500;
  const TICK_INTERVAL = 50;

  // Auto-advance slideshow with progress
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrentSlide((curr) => (curr + 1) % bookSlides.length);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying, bookSlides.length]);

  const handleSelectSlide = (idx) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bookSlides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bookSlides.length) % bookSlides.length);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const featuredBooks = [
    {
      title: "Rumi: The Book of Love",
      subtitle: "Poems of Ecstasy and Longing",
      author: "Translated by Coleman Barks",
      category: "Persian & Bilingual Poetry",
      desc: "Timeless Persian verse exploring deep human connection, love, and spiritual warmth. Available on our featured reading shelf in both Persian and English.",
      status: "Book of the Week"
    },
    {
      title: "The Blind Owl (Bof-e Koor)",
      subtitle: "A Masterpiece of Persian Modernism",
      author: "Sadegh Hedayat",
      category: "International Literature",
      desc: "One of the most acclaimed 20th-century Iranian novels, presented with literary commentary and bilingual reference notes.",
      status: "Featured Classic"
    },
    {
      title: "The World Atlas of Coffee",
      subtitle: "From Beans to Brewing",
      author: "James Hoffmann",
      category: "Coffee Terroir & Origins",
      desc: "Explore the growing regions of Colombia, Ethiopia, and Central America — mirroring the story depicted on ONE60's Colombian wall mural.",
      status: "In-Store Reference"
    },
    {
      title: "Cloudstreet",
      subtitle: "A Western Australian Epic",
      author: "Tim Winton",
      category: "Local WA Storytelling",
      desc: "A celebrated Perth and Western Australian story of life along the Swan River. Perfect companion for a slow afternoon flat white.",
      status: "Perth Community Shelf"
    }
  ];

  return (
    <section id="book-cafe" className="py-20 md:py-24 bg-[#F2EDE4] relative overflow-hidden">
      {/* Background Subtle Shape */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#404D3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-300/80 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#404D3C]" />
            <span>Cultural Corner • In Front of the Coffee Machine</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            The Book Café at ONE60
          </h2>

          <div className="w-16 h-0.5 bg-[#404D3C] mx-auto mt-4 mb-4"></div>

          <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
            Curated with love by Shabnam’s husband <strong className="font-medium text-stone-900">Amir</strong>, our dedicated Book Café corner is a tranquil cultural sanctuary directly in front of the coffee bar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Left: LUXURY INTERACTIVE SLIDESHOW (REAL PHOTOS) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 w-12 h-12 border-t-2 border-l-2 border-[#404D3C] rounded-tl-2xl pointer-events-none z-20" />
              <div className="absolute -bottom-2.5 -right-2.5 w-12 h-12 border-b-2 border-r-2 border-[#404D3C] rounded-br-2xl pointer-events-none z-20" />

              {/* Viewport Frame */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-950 group"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
              >
                {/* Slides mapping with Ken Burns */}
                {bookSlides.map((slide, idx) => (
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

                    {/* Gradient shadow */}
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

                {/* Top Glass Bar: Counter, Tag & Play/Pause */}
                <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-serif font-bold tracking-wider border border-white/20 flex items-center gap-1.5 shadow-lg">
                      <span className="text-[#C5A059]">0{currentSlide + 1}</span>
                      <span className="text-stone-400">/</span>
                      <span className="text-stone-300">0{bookSlides.length}</span>
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#404D3C] text-[11px] font-semibold uppercase tracking-wider border border-stone-200 shadow-md flex items-center gap-1.5">
                      <BookMarked className="w-3 h-3 text-[#404D3C]" />
                      <span>{bookSlides[currentSlide].tag}</span>
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/50 hover:bg-[#404D3C] backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-110 shadow-xl"
                  aria-label="Previous Book Cafe Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/50 hover:bg-[#404D3C] backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer hover:scale-110 shadow-xl"
                  aria-label="Next Book Cafe Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Glass Caption Card */}
                <div className="absolute bottom-4 inset-x-4 z-30 pointer-events-auto">
                  <div className="p-4 rounded-2xl bg-black/65 backdrop-blur-lg border border-white/20 shadow-2xl text-white">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-1">
                      <span>Curated by Amir</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#404D3C]/90 text-white">
                        In Front of Coffee Bar
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      {bookSlides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 font-light line-clamp-2">
                      {bookSlides[currentSlide].desc}
                    </p>
                  </div>
                </div>

              </div>

              {/* Clickable Thumbnail Strip */}
              <div className="mt-3.5">
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {bookSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectSlide(idx)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all shrink-0 cursor-pointer text-left ${
                        idx === currentSlide
                          ? 'bg-white border-[#404D3C] shadow-md ring-2 ring-[#404D3C]/30 scale-105'
                          : 'bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Jump to Book Cafe slide ${idx + 1}`}
                    >
                      <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
                        <img 
                          src={slide.image} 
                          alt={slide.pillName} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="hidden sm:block">
                        <div className="text-[10px] font-bold text-stone-900 leading-tight">
                          0{idx + 1}
                        </div>
                        <div className="text-[9px] text-[#404D3C] font-semibold leading-tight whitespace-nowrap">
                          {slide.pillName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Showcase of Books */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#404D3C] flex items-center gap-1.5 mb-1">
                <Globe2 className="w-4 h-4" />
                <span>Bilingual & World Literature</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181513]">
                Where Stories Meet Specialty Brews
              </h3>
            </div>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Amir hand-picks our collection from across the globe — celebrating Persian poetry and modern fiction alongside bilingual translations and Australian favorites. Whether you have 15 minutes between CBD meetings or an afternoon to unwind, our community shelf welcomes you.
            </p>

            {/* Book Selector Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredBooks.map((b, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#404D3C] text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {b.title.split(":")[0]}
                </button>
              ))}
            </div>

            {/* Active Book Detail Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {featuredBooks[activeTab].status}
                </span>
                <span className="text-xs text-stone-400 font-medium">
                  {featuredBooks[activeTab].category}
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                {featuredBooks[activeTab].title}
              </h4>
              <div className="text-xs text-[#404D3C] font-semibold">
                By {featuredBooks[activeTab].author}
              </div>

              <p className="text-xs text-stone-600 font-light leading-relaxed pt-1">
                {featuredBooks[activeTab].desc}
              </p>
            </div>

            {/* Exchange Guideline */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EBF0E9] text-[#404D3C] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div className="text-xs text-stone-700">
                <strong className="text-stone-900 font-medium">Community Exchange Shelf:</strong> Feel free to bring a favorite book from your home collection and swap it for one on our shelf.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
