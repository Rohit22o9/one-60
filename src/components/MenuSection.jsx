import React, { useState, useMemo } from 'react';
import { 
  MENU_CATEGORIES, 
  DIETARY_FILTERS, 
  MENU_ITEMS 
} from '../data/cafeData';
import { 
  Search, 
  Plus, 
  Sparkles, 
  Clock, 
  Check, 
  Eye, 
  Filter, 
  Flame,
  Camera
} from 'lucide-react';

export default function MenuSection({ onAddToCart, onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDietary, setActiveDietary] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedId, setAddedId] = useState(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      
      // Dietary match
      const matchesDietary = activeDietary === "all" || 
        item.dietary.some((tag) => tag.toLowerCase().includes(activeDietary.toLowerCase()));

      // Search match
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#404D3C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Cabinet & All-Day Kitchen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            The ONE60 Kitchen Menu
          </h2>
          <div className="w-16 h-0.5 bg-[#404D3C] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg">
            Prepared fresh each morning using premium Western Australian ingredients, artisan sourdough, and European baking traditions.
          </p>
        </div>

        {/* Photography in progress announcement callout (per owner feedback) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="p-3.5 rounded-2xl bg-[#EBF0E9]/70 border border-[#C5D5C2] flex items-center justify-center gap-2 text-xs text-[#344431] text-center">
            <Camera className="w-4 h-4 text-[#404D3C] shrink-0" />
            <span>
              <strong>Authentic In-Store Cabinet Selections:</strong> Real photos from our Perth display cabinet. Additional high-definition dish photos are being progressively added.
            </span>
          </div>
        </div>

        {/* Controls: Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#404D3C] text-[#FAF8F5] shadow-md'
                    : 'bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar & Dietary Filter Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/90 p-4 rounded-2xl border border-stone-200 shadow-xs backdrop-blur-xs">
            
            {/* Dietary Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-stone-500 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Dietary:</span>
              </span>
              {DIETARY_FILTERS.map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setActiveDietary(diet.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
                    activeDietary === diet.id
                      ? 'bg-[#404D3C] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {diet.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search breakfast, paninis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#404D3C]/40 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#181513]/90 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-400" />
                      <span>Popular</span>
                    </div>
                  )}

                  {/* Prep Time */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-300" />
                    <span>{item.prepTime}</span>
                  </div>

                  {/* Quick View Pill on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-stone-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Name & Price */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#404D3C] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#181513] shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Dietary Tags */}
                    {item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.dietary.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-[#F4EFEB] text-stone-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">
                      Freshly prepared in-house
                    </span>

                    <button
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        addedId === item.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#404D3C] text-white hover:bg-[#2f392c]'
                      }`}
                      aria-label={`Add ${item.name} to bag`}
                    >
                      {addedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200">
            <p className="text-stone-500 text-sm">No items found matching your filters.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveDietary("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#404D3C] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
