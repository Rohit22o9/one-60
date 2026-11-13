import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  MapPin,
  Utensils
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}) {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState("pickup");
  const [pickupTime, setPickupTime] = useState("15 mins");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.calculatedPrice || item.price;
    return acc + price * item.quantity;
  }, 0);

  const gst = subtotal * 0.10;
  const total = subtotal;

  const handleCheckout = (e) => {
    e.preventDefault();
    const ref = "O60-ORD" + Math.floor(100 + Math.random() * 900);
    setOrderRef(ref);
    setOrderConfirmed(true);
  };

  const handleResetOrder = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C26D43]" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Your Takeaway Bag</h3>
            <span className="text-xs bg-stone-200 text-stone-700 font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {!orderConfirmed ? (
            cartItems.length > 0 ? (
              <div className="space-y-4">
                
                {/* Order Type Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOrderType("pickup")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      orderType === "pickup" ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Takeaway Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("dine-in")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      orderType === "dine-in" ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Dine-In at Table
                  </button>
                </div>

                {/* Items List */}
                <div className="divide-y divide-stone-100">
                  {cartItems.map((item, idx) => {
                    const price = item.calculatedPrice || item.price;
                    return (
                      <div key={idx} className="py-3 flex gap-3 items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 bg-stone-100"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-bold text-sm text-stone-900 truncate">
                            {item.name}
                          </h4>
                          {item.selectedAddons && item.selectedAddons.length > 0 && (
                            <div className="text-[10px] text-[#C26D43] truncate">
                              +{item.selectedAddons.map(a => a.name).join(", ")}
                            </div>
                          )}
                          <div className="font-serif text-sm font-semibold text-stone-800 mt-1">
                            ${(price * item.quantity).toFixed(2)}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 border border-stone-200 rounded-lg p-1 bg-stone-50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-stone-200 rounded text-stone-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-200 rounded text-stone-600"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-stone-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Pickup Time Selection */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Estimated Ready Time:</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {["15 mins", "30 mins", "45 mins"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setPickupTime(time)}
                        className={`py-2 rounded-lg border font-medium ${
                          pickupTime === time 
                            ? 'bg-[#FAF0EA] border-[#C26D43] text-stone-900 font-semibold' 
                            : 'border-stone-200 hover:bg-stone-50 text-stone-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Contact */}
                <div className="space-y-2 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (for order callout)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (for SMS pickup alert)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-stone-800">Your bag is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Browse our all-day breakfast, crêpes, paninis, and specialty coffee to add items.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Explore Menu
                </button>
              </div>
            )
          ) : (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C26D43]">
                  Order Received!
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  We're preparing your order
                </h3>
                <div className="mt-2 text-xs text-stone-500 font-mono">
                  Order Reference: <strong className="text-stone-900">{orderRef}</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Pickup Counter:</span>
                  <span className="font-semibold text-stone-900">160 Murray Street Mall</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Ready in:</span>
                  <span className="font-semibold text-[#C26D43]">~{pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Customer Name:</span>
                  <span className="font-semibold text-stone-900">{customerName || "Takeaway Guest"}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200">
                  <span className="text-stone-700 font-bold">Total Paid:</span>
                  <span className="font-serif font-bold text-stone-900 text-sm">${total.toFixed(2)} AUD</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500">
                You will receive an SMS alert at <strong>{customerPhone || "your mobile"}</strong> when your coffee and food are ready on the pass.
              </p>

              <button
                onClick={handleResetOrder}
                className="w-full py-3 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {!orderConfirmed && cartItems.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal (incl. GST):</span>
                <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400 text-[11px]">
                <span>Includes 10% Australian GST:</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-serif font-bold text-[#181513] pt-2 border-t border-stone-200">
                <span>Total:</span>
                <span>${total.toFixed(2)} AUD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={!customerName && !customerPhone}
              className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                !customerName || !customerPhone
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-[#C26D43] text-white hover:bg-[#a65832]'
              }`}
            >
              <span>{(!customerName || !customerPhone) ? 'Enter Name & Phone to Order' : 'Confirm & Send Order to Kitchen'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

