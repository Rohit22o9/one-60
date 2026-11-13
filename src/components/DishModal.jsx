import React, { useState } from 'react';
import { X, Plus, Minus, Check, Clock, Flame, Sparkles } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const possibleAddons = [
    { name: "Extra Avocado Smash", price: 4.00 },
    { name: "Grilled Halloumi (2 pcs)", price: 4.50 },
    { name: "Gluten-Free Bread Substitution", price: 2.50 },
    { name: "House Chilli Jam / Relish", price: 2.00 },
    { name: "Oat / Almond Milk (for drinks)", price: 0.80 },
  ];

  const toggleAddon = (addon) => {
    if (selectedAddons.find(a => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter(a => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const itemTotal = (dish.price + addonsTotal) * quantity;

  const handleAdd = () => {
    onAddToCart({
      ...dish,
      quantity,
      selectedAddons,
      specialInstructions,
      calculatedPrice: dish.price + addonsTotal
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/9] w-full bg-stone-100">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {dish.dietary?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-2xl font-bold leading-tight">{dish.name}</h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          
          {/* Price & Description */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C26D43]">
                {dish.category}
              </span>
              <span className="font-serif text-2xl font-bold text-[#181513]">
                ${dish.price.toFixed(2)}
              </span>
            </div>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Add-ons / Customization */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
              Customize / Add Extras
            </label>
            <div className="space-y-2">
              {possibleAddons.map((addon, idx) => {
                const isSelected = !!selectedAddons.find(a => a.name === addon.name);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleAddon(addon)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                      isSelected 
                        ? 'bg-[#FAF0EA] border-[#C26D43] text-stone-900 font-medium' 
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        isSelected ? 'bg-[#C26D43] border-[#C26D43] text-white' : 'border-stone-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className="font-semibold text-stone-900">+${addon.price.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
              Special Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Dressing on the side, extra hot, no butter"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
            />
          </div>

          {/* Quantity & Add to Cart */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
            {/* Quantity Controller */}
            <div className="flex items-center border border-stone-300 rounded-full p-1 bg-stone-50">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-700 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-sm font-bold text-stone-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-700 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-6 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-colors shadow-md flex items-center justify-between"
            >
              <span>Add to Takeaway Bag</span>
              <span className="font-serif text-sm font-bold">${itemTotal.toFixed(2)}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

