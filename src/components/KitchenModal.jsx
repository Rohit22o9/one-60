import React, { useState } from 'react';
import { 
  X, 
  UtensilsCrossed, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function KitchenModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookingType, setBookingType] = useState("kitchen-shift");
  const [shiftDuration, setShiftDuration] = useState("Morning Prep (6am - 12pm)");
  const [desiredDate, setDesiredDate] = useState(() => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 3);
    return nextWeek.toISOString().split('T')[0];
  });
  const [applicantName, setApplicantName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "O60-KTCH" + Math.floor(1000 + Math.random() * 9000);
    setInquiryRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-[#181513] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C5A059] flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-white">Commercial Kitchen Hire</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Daily Drop Synergy
                </span>
              </div>
              <p className="text-xs text-stone-300">160 Murray St Mall • HACCP Registered Production Space</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Select Booking Requirement
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setBookingType("kitchen-shift")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      bookingType === "kitchen-shift" ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    Commercial Kitchen Shift
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("venue-hire")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      bookingType === "venue-hire" ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    Private Venue / Event Hire
                  </button>
                </div>
              </div>

              {/* Shift / Slot Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Shift / Time Window</span>
                  </label>
                  <select
                    value={shiftDuration}
                    onChange={(e) => setShiftDuration(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  >
                    <option value="Morning Prep (6am - 12pm)">Morning Prep Shift (6am – 12pm)</option>
                    <option value="Afternoon Prep (12pm - 6pm)">Afternoon Shift (12pm – 6pm)</option>
                    <option value="Evening Prep / Dark Kitchen (6pm - 12am)">Evening Production (6pm – 12am)</option>
                    <option value="Overnight Bake Shift (10pm - 6am)">Overnight Bake (10pm – 6am)</option>
                    <option value="Private Evening Event (5:30pm - 10:30pm)">Private Event (5:30pm – 10:30pm)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Proposed Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={desiredDate}
                    onChange={(e) => setDesiredDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  />
                </div>
              </div>

              {/* Applicant Info */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Applicant Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Chef / Operator Name"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Business / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Artisan Bakery WA / Pop-up Kitchen"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="0412 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="chef@culinary.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Production Details / Equipment Needed</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your production (e.g. bakery prep, combi ovens needed, walk-in coolroom pallet space, or private dining setup)"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                  />
                </div>
              </div>

              {/* Certification note */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-[#FAF0EA] border border-[#E8CFC2] text-xs text-[#A64B24]">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Requires valid Food Safety Supervisor Certificate & Public Liability Insurance prior to kitchen access.
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Submit Kitchen Booking Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C26D43]">
                  Inquiry Dispatched
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  Kitchen Shift Inquiry Logged
                </h3>
                <div className="text-xs text-stone-500 font-mono mt-1">
                  Reference: <strong className="text-stone-900">{inquiryRef}</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Applicant:</span>
                  <span className="font-semibold text-stone-900">{applicantName} ({businessName || "Private"})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Booking Type:</span>
                  <span className="font-semibold text-stone-900">{shiftDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Target Date:</span>
                  <span className="font-semibold text-stone-900">{desiredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Facility:</span>
                  <span className="font-semibold text-stone-900">Cafe One 60 & The Daily Drop Hub</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                The kitchen manager will reach out within 24 hours to coordinate shift induction and induction paperwork.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

