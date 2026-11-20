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
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>The Visual Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Moments at ONE60
          </h2>
          <div className="w-16 h-0.5 bg-[#404D3C] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg">
            A glimpse into the daily rhythm of our kitchen, barista bar, and Murray Street Mall atmosphere.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#404D3C] text-[#FAF8F5] shadow-xs'
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
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200">
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

      </div>
    </section>
  );
}
