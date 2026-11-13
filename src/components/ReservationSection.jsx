import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  Phone,
  Mail,
  User
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function ReservationSection() {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState("11:30 AM");
  const [seatingArea, setSeatingArea] = useState("Main Dining Room");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const timeSlots = [
    { time: "8:00 AM", meal: "Breakfast" },
    { time: "9:30 AM", meal: "Breakfast" },
    { time: "11:00 AM", meal: "Brunch" },
    { time: "11:30 AM", meal: "Lunch" },
    { time: "12:30 PM", meal: "Lunch" },
    { time: "1:30 PM", meal: "Lunch" },
    { time: "2:30 PM", meal: "Coffee & Crêpes" },
    { time: "3:30 PM", meal: "Afternoon" }
  ];

  const seatingOptions = [
    { id: "main", name: "Main Dining Room", desc: "Warm European atmosphere, natural light" },
    { id: "alfresco", name: "Murray St Mall Alfresco", desc: "Outdoor Parisian-style café seating" },
    { id: "bar", name: "Espresso Counter Bar", desc: "Front row to barista craft & quick bites" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = "O60-" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  return (
    <section id="reservations" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Reserve Your Experience at Cafe One 60
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
            Whether for a morning coffee meeting, relaxed weekend brunch, or working lunch, reserve your preferred seating in advance. Walk-ins are always welcomed.
          </p>
        </div>

        {/* Reservation Card Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* Step 1: Party Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C26D43]" />
                  <span>1. Select Number of Guests</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, "8+"].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setPartySize(num)}
                      className={`py-3 rounded-2xl text-sm font-semibold transition-all ${
                        partySize === num
                          ? 'bg-[#181513] text-white shadow-md'
                          : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#C26D43]" />
                    <span>2. Select Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C26D43]" />
                    <span>3. Preferred Seating Time</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  >
                    {timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts.time}>
                        {ts.time} — {ts.meal}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Seating Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C26D43]" />
                  <span>4. Seating Area Preference</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {seatingOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSeatingArea(opt.name)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        seatingArea === opt.name
                          ? 'border-[#C26D43] bg-[#FAF0EA] ring-2 ring-[#C26D43]/20'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                      }`}
                    >
                      <div className="font-serif font-bold text-sm text-stone-900">{opt.name}</div>
                      <div className="text-[11px] text-stone-500 mt-1">{opt.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C26D43]" />
                  <span>5. Guest Contact Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Mobile Phone (for SMS)</label>
                    <input
                      type="tel"
                      required
                      placeholder="0412 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">Special Notes / Dietary Requirements (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Business lunch, quiet corner, pram space, gluten intolerance"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Instant reservation confirmation • Free cancellation</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#181513] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-all shadow-md"
                >
                  Confirm Table Reservation
                </button>
              </div>

            </form>
          ) : (
            <div className="p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C26D43]">
                  Reservation Confirmed!
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900 mt-1">
                  We look forward to welcoming you, {fullName}
                </h3>
                <div className="mt-2 text-xs text-stone-500 font-mono">
                  Booking Reference: <strong className="text-stone-800 text-sm">{bookingRef}</strong>
                </div>
              </div>

              {/* Summary Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-left space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-500">Party Size:</span>
                  <span className="font-semibold text-stone-900">{partySize} {partySize === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date & Time:</span>
                  <span className="font-semibold text-stone-900">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Seating Area:</span>
                  <span className="font-semibold text-stone-900">{seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Venue:</span>
                  <span className="font-semibold text-stone-900">160 Murray Street Mall, Perth CBD</span>
                </div>
                {notes && (
                  <div className="flex justify-between pt-2 border-t border-stone-200 text-xs">
                    <span className="text-stone-500">Notes:</span>
                    <span className="text-stone-700 italic">{notes}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                A confirmation SMS & calendar invite have been sent to <strong>{phone}</strong> and <strong>{email}</strong>.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-200 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

