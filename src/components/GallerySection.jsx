import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/cafeData';
import { Sparkles, Camera } from 'lucide-react';

export default function GallerySection() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Moments" },
    { id: "food", label: "Artisan Kitchen" },
    { id: "coffee", label: "Espresso & Brews" },
    { id: "ambience", label: "160 Murray St Vibe" },
    { id: "catering", label: "CBD Catering" }
  ];

  const filteredImages = filter === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>The Visual Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Moments at One 60
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg">
            A glimpse into the daily rhythm of our kitchen, barista bar, and Murray Street Mall terrace.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${filter === cat.id
                  ? 'bg-[#181513] text-[#FAF8F5] shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
                    Cafe One 60 Perth
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white mt-0.5">
                    {img.caption}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Bar with inline SVG */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-50 hover:border-[#C26D43] transition-colors shadow-xs"
          >
            <svg className="w-4 h-4 text-[#C26D43]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Follow @CafeOne60Perth on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
