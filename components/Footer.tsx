export default function Footer() {
  return (
    <footer className="bg-[#1a160e] text-[#a89880] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl font-light text-white mb-2 tracking-widest"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HAPPY PLANET
            </h3>
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#c4a882] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Farmstay
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              Five acres of slow living, soulful lodging, and nature&apos;s quiet near Mayiladuthurai, Tamil Nadu.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-white/60 mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "Rooms & Cottages", href: "#rooms" },
                { label: "Events & Celebrations", href: "#events" },
                { label: "Retreats & Offsites", href: "#retreats" },
                { label: "Activities", href: "#activities" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#c4a882] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-white/60 mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-[#c4a882] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:stay@happyplanetfarm.com"
                  className="text-sm hover:text-[#c4a882] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  stay@happyplanetfarm.com
                </a>
              </li>
              <li className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Near Mayiladuthurai,
                <br />
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3d3020] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Happy Planet Farmstay. All rights reserved.
          </p>
          <p
            className="text-xs italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Come as you are. Stay as long as you need.
          </p>
        </div>
      </div>
    </footer>
  );
}
