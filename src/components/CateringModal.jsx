import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Coffee
} from 'lucide-react';
import { CATERING_PACKAGES } from '../data/cafeData';

export default function CateringModal({ isOpen, onClose, initialPackage }) {
  if (!isOpen) return null;

  const [selectedPackage, setSelectedPackage] = useState(
    initialPackage?.id || CATERING_PACKAGES[0].id
  );
  const [guestCount, setGuestCount] = useState(initialPackage?.guestCount || 15);
  const [includeCoffee, setIncludeCoffee] = useState(initialPackage?.includeCoffee ?? true);
  const [deliveryDate, setDeliveryDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [deliveryTime, setDeliveryTime] = useState("11:45 AM");
  const [companyName, setCompanyName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState("");

  const currentPkg = CATERING_PACKAGES.find(p => p.id === selectedPackage) || CATERING_PACKAGES[0];
  const pricePerPerson = currentPkg.pricePerPerson + (includeCoffee ? 4.50 : 0);
  const estimatedTotal = pricePerPerson * guestCount;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "O60-CAT" + Math.floor(1000 + Math.random() * 9000);
    setQuoteRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0EA] text-[#C26D43] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Perth CBD Corporate Catering</h3>
              <p className="text-xs text-stone-500">Boardroom Platters, Morning Teas & Executive Lunches</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Select Catering Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CATERING_PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-[#C26D43] bg-[#FAF0EA] ring-2 ring-[#C26D43]/20'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="font-serif font-bold text-sm text-stone-900">{pkg.name}</div>
                        <span className="text-xs font-bold text-[#C26D43]">${pkg.pricePerPerson.toFixed(2)}/pp</span>
                      </div>
                      <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">{pkg.badge}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Count & Coffee Station */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Number of Attendees: {guestCount}</span>
                  </label>
                  <input
                    type="number"
                    min="8"
                    max="200"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 cursor-pointer w-full text-xs">
                    <input
                      type="checkbox"
                      checked={includeCoffee}
                      onChange={(e) => setIncludeCoffee(e.target.checked)}
                      className="w-4 h-4 text-[#C26D43] accent-[#C26D43] rounded"
                    />
                    <div>
                      <span className="font-semibold text-stone-800 block">Include Coffee & Tea</span>
                      <span className="text-[10px] text-stone-500">+$4.50 / person thermos station</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Delivery Timing & CBD Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Delivery Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Desired Delivery Time</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 11:45 AM (for 12pm meeting)"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  />
                </div>
              </div>

              {/* Company & Office Details */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rio Tinto / KPMG / Legal Chambers"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">CBD Building & Floor</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Level 18, 125 St Georges Terrace"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Coordinator Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 123 456"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="ea@company.com.au"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Dietary Requirements Breakdown</label>
                  <input
                    type="text"
                    placeholder="e.g. 2x Gluten-free, 3x Vegetarian, 1x Halal required"
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                  />
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="p-4 rounded-2xl bg-[#181513] text-white flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider">Estimated Order Total</div>
                  <div className="font-serif text-2xl font-bold">${estimatedTotal.toFixed(2)} <span className="text-xs font-sans text-stone-400">+ GST</span></div>
                  <div className="text-[11px] text-stone-400">Complimentary CBD Delivery included</div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#C26D43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a65832] transition-colors shadow"
                >
                  Submit Catering Request
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C26D43]">
                  Catering Request Lodged
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  Thank you, {contactName}
                </h3>
                <div className="text-xs text-stone-500 font-mono mt-1">
                  Quote ID: <strong className="text-stone-900">{quoteRef}</strong>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Package:</span>
                  <span className="font-semibold text-stone-900">{currentPkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Attendees:</span>
                  <span className="font-semibold text-stone-900">{guestCount} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Destination:</span>
                  <span className="font-semibold text-stone-900">{companyName} ({deliveryAddress})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date & Delivery:</span>
                  <span className="font-semibold text-stone-900">{deliveryDate} at {deliveryTime}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200">
                  <span className="font-bold text-stone-700">Estimated Total:</span>
                  <span className="font-serif font-bold text-stone-900 text-sm">${estimatedTotal.toFixed(2)} + GST</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Our catering manager will review and confirm availability within 2 business hours via email to <strong>{contactEmail}</strong>.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

