"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80",
    alt: "Lush green farmland at dawn",
  },
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80",
    alt: "Misty countryside landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=1600&q=80",
    alt: "Traditional farmhouse at sunset",
  },
  {
    url: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=1600&q=80",
    alt: "Peaceful farmstay environment",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#c4a882] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Five Acres · Near Mayiladuthurai · Tamil Nadu
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Happy Planet
          <br />
          <span className="italic font-extralight">Farmstay</span>
        </h1>
        <p
          className="text-lg md:text-xl font-light max-w-2xl text-white/85 mb-10 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Experience Slow Living in Our Traditional Cottages &amp; Spacious Farm Rooms
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#rooms"
            className="bg-[#3d5a3e] hover:bg-[#2c4a2d] text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore Rooms
          </a>
          <a
            href="#contact"
            className="border border-white/70 hover:border-white text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <span
          className="text-white/60 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
