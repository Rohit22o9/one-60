import React from 'react';
import { TESTIMONIALS } from '../data/cafeData';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Critic Acclaim</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            What Perth is Saying About One 60
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg">
            From CBD executives and morning regulars to catering clients and weekend brunch seekers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C26D43]/30" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-stone-800 text-base sm:text-lg italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-stone-500">{item.role}</p>
                </div>
                <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

