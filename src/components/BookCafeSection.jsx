import React, { useState } from 'react';
import { BookOpen, Coffee, Heart, Sparkles, BookMarked, Globe2, Compass } from 'lucide-react';
import { BOOK_CAFE_INFO } from '../data/cafeData';
import { bookCafeNook } from '../assets/photos';

export default function BookCafeSection() {
  const [activeTab, setActiveTab] = useState(0);

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
      desc: "Explore the growing regions of Colombia, Ethiopia, and Central America — mirroring the story depicted on One60's Colombian wall mural.",
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
          
          {/* Left: Real Corner Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-300">
              <img 
                src={bookCafeNook} 
                alt="Book Cafe Corner and Coffee Nook at One60" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[#404D3C] text-xs font-bold uppercase tracking-wider">
                    <BookMarked className="w-4 h-4" />
                    <span>Curated by Amir</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EBF0E9] text-[#404D3C]">
                    Persian & International
                  </span>
                </div>
                <p className="font-serif italic text-sm text-stone-800">
                  “Take a book, trade a book, or stay awhile with a freshly poured flat white.”
                </p>
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
