import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState("12:00 PM");
  const [seatingArea, setSeatingArea] = useState("Main Dining Room");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", "2:30 PM", "3:30 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "O60-RES" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
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
        <div className="p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0EA] text-[#C26D43] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Reserve a Table</h3>
              <p className="text-xs text-stone-500">160 Murray Street Mall, Perth CBD</p>
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
              
              {/* Party Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C26D43]" />
                  <span>Number of Guests: {partySize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setPartySize(num)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        partySize === num
                          ? 'bg-[#181513] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C26D43]" />
                    <span>Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C26D43]" />
                  <span>Seating Preference</span>
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["Main Dining Room", "Murray St Alfresco", "Espresso Bar"].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setSeatingArea(area)}
                      className={`p-2.5 rounded-xl border text-center font-medium ${
                        seatingArea === area
                          ? 'bg-[#FAF0EA] border-[#C26D43] text-stone-900 font-semibold'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Taylor"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Mobile Phone (for SMS)</label>
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
                      placeholder="jessica@perth.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Special Notes / Dietary (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Highchair needed, business meeting table, dairy-free"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation</span>
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
                  Booking Confirmed!
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  See you soon, {fullName}
                </h3>
                <div className="text-xs text-stone-500 font-mono mt-1">
                  Reference: <strong className="text-stone-900">{bookingRef}</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Party:</span>
                  <span className="font-semibold text-stone-900">{partySize} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date & Time:</span>
                  <span className="font-semibold text-stone-900">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Area:</span>
                  <span className="font-semibold text-stone-900">{seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Address:</span>
                  <span className="font-semibold text-stone-900">160 Murray Street Mall</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                We've sent an instant SMS to <strong>{phone}</strong> and email confirmation to <strong>{email}</strong>.
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

