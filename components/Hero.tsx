"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/home1%20.jpeg", alt: "Happy Planet Farmstay" },
  { src: "/images/home%202.jpeg", alt: "Lush farmland at Happy Planet" },
  { src: "/images/home%203.jpeg", alt: "Farm life at Happy Planet" },
  { src: "/images/home%204.jpeg", alt: "Peaceful surroundings at Happy Planet" },
];

// Tiny earthy gradient SVG — shown instantly while real image loads
const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2Q1YTNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMmMyNDE2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  // Track which slides have been reached so we only load them progressively
  const [revealed, setRevealed] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setRevealed((r) => new Set([...r, next]));
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {/* Only mount the Image once the slide has been reached (Option D) */}
          {revealed.has(i) && (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              // First slide loads eagerly with highest priority (Option B)
              priority={i === 0}
              // Slides 2-4 load lazily in the background (Option D)
              loading={i === 0 ? "eager" : "lazy"}
              // Show earthy gradient until real image is ready (Option C)
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              // Serve the right resolution per viewport (Option B)
              sizes="100vw"
              quality={80}
            />
          )}
        </div>
      ))}

      {/* Layered gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
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
            href="https://wa.me/919944331313?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20at%20Happy%20Planet%20Farmstay."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/70 hover:border-white text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-colors flex items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setRevealed((r) => new Set([...r, i]));
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
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
