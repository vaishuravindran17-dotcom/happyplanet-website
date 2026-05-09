"use client";
import { useState } from "react";

const faqs = [
  { q: "What is the total guest capacity?", a: "Happy Planet can comfortably host up to 25 overnight guests across all six rooms." },
  { q: "Are all rooms air-conditioned?", a: "Yes, all rooms are air-conditioned and have inverter power backup to ensure uninterrupted comfort." },
  { q: "Is Happy Planet pet-friendly?", a: "Absolutely. Pets are welcome as long as they are friendly with other farm animals and birds on campus. We ask pet parents to remain present and mindful during the stay." },
  { q: "What food options are available?", a: "Swiggy and Zomato delivery is available. There are also restaurants within 5 km. Our resident caretaker can assist with food arrangements. A basic kitchen with utensils is available for guests at an additional charge." },
  { q: "How is security handled?", a: "The property is fully gated with 24/7 CCTV surveillance and an on-site resident caretaker available at all times." },
  { q: "Is parking available on-site?", a: "Yes, we have ample on-site parking for all guests and event attendees." },
  { q: "Is high-speed Wi-Fi available?", a: "Yes, high-speed Wi-Fi is available throughout the property." },
  { q: "What is the event capacity?", a: "Our Grand Event Lawn can host up to 200 guests for large celebrations, while the Heritage Garden Lawn accommodates 80–100 guests." },
  { q: "What is the Farm Pool?", a: "Our traditional farm pool is an authentic village-style swimming pool powered by a pumpset — a unique, refreshing experience that captures the spirit of rural Tamil Nadu." },
  { q: "Where is Happy Planet located?", a: "Happy Planet is located near Mayiladuthurai, Tamil Nadu — a strategic hub for exploring heritage destinations like Tranquebar, Chidambaram, Karaikal, and more." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#2c2416]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#c4a882] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Questions
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Quick Answers
          </h2>
        </div>

        {/* Quick info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#3d3020] mb-16">
          {[
            { label: "Capacity", value: "25 Guests" },
            { label: "A/C", value: "All Rooms" },
            { label: "Power", value: "Inverter Backup" },
            { label: "Pets", value: "Welcome" },
            { label: "Security", value: "24/7 CCTV" },
            { label: "Parking", value: "On-site" },
            { label: "Wi-Fi", value: "High-speed" },
            { label: "Events", value: "200 Max" },
          ].map((item) => (
            <div key={item.label} className="bg-[#2c2416] p-5 text-center">
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#c4a882] mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="text-lg text-white font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#3d3020]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className="text-white/90 group-hover:text-[#c4a882] transition-colors pr-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`text-[#c4a882] text-xl flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-[#a89880] leading-relaxed text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
