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
            href="https://wa.me/919944331313?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Happy%20Planet%20Farmstay."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#1ebe58] transition-colors flex items-center gap-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
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
            href="https://wa.me/919944331313?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Happy%20Planet%20Farmstay."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 text-center hover:bg-[#1ebe58] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
