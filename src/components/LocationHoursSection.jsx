import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  Train, 
  Car, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function LocationHoursSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    }, 4000);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C26D43] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Finding Us in Perth CBD</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#181513]">
            Location & Trading Hours
          </h2>
          <div className="w-16 h-0.5 bg-[#C26D43] mx-auto mt-4 mb-4"></div>
          <p className="text-stone-600 font-light text-base sm:text-lg">
            Situated on the pedestrian thoroughfare of 160 Murray Street Mall, steps away from Perth Station and Forrest Chase.
          </p>
        </div>

        {/* 2-Column Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Hours & Location Details Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0EA] text-[#C26D43] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Trading Hours</h3>
                  <p className="text-xs text-stone-500">Open 7 days a week for breakfast & lunch</p>
                </div>
              </div>

              <div className="space-y-3">
                {CAFE_INFO.hours.map((h, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-stone-800">{h.days}</span>
                    <div className="text-right">
                      <span className="font-semibold text-stone-900">{h.time}</span>
                      {h.note && (
                        <span className="block text-[10px] text-[#C26D43] font-medium">{h.note}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Transit Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#181513] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Address & Transit</h3>
                  <p className="text-xs text-stone-500">{CAFE_INFO.address}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-[#C26D43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">By Train & Bus:</strong>
                    <p className="text-stone-500 font-light mt-0.5">2-minute walk from Perth Station and Perth Underground Station.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#C26D43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Parking:</strong>
                    <p className="text-stone-500 font-light mt-0.5">CPP Murray St Car Park & Cultural Centre Car Park within 200m.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=160+Murray+Street+Mall+Perth+WA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:bg-stone-200 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CAFE_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Message Us Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-md">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-light mb-6">
              Have a question about group reservations, catering packages, or commercial kitchen hire with The Daily Drop? Reach out to Shaun and Shabnam’s team.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-emerald-950">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out to Cafe One 60. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Inquiry Topic</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  >
                    <option value="General Inquiry">General Cafe Question</option>
                    <option value="Corporate Catering">Corporate Catering for Perth Office</option>
                    <option value="Commercial Kitchen Hire">Commercial Kitchen Shift / Facility Hire</option>
                    <option value="Private Event">Private Venue / Evening Event Hire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, dietary questions, or kitchen hire needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C26D43]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#181513] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C26D43] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

