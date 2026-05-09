"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms & Cottages", href: "#rooms" },
  { label: "Events", href: "#events" },
  { label: "Retreats", href: "#retreats" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f8f4ef]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`text-2xl font-light tracking-widest transition-colors duration-300 ${
              scrolled ? "text-[#2c2416]" : "text-white"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            HAPPY PLANET
          </span>
          <span
            className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
              scrolled ? "text-[#8b6914]" : "text-[#c4a882]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Farmstay
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#8b6914] ${
                scrolled ? "text-[#2c2416]" : "text-white/90"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="bg-[#3d5a3e] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#2c4a2d] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-[#2c2416]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f8f4ef] border-t border-[#e8e0d5] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-[#2c2416] hover:text-[#8b6914] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="bg-[#3d5a3e] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 text-center hover:bg-[#2c4a2d] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
