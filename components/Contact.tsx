export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f8f4ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c2416] mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Plan Your Stay
              <br />
              <span className="italic">at Happy Planet</span>
            </h2>
            <p
              className="text-[#5a4a35] text-lg font-light leading-relaxed mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Whether you are planning a quiet family getaway, a grand celebration, or a team retreat, we would love to help you make it unforgettable. Reach out and we will get back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3d5a3e] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#8b6914] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-[#2c2416]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Near Mayiladuthurai, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3d5a3e] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#8b6914] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-[#2c2416] hover:text-[#3d5a3e] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3d5a3e] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#8b6914] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:stay@happyplanetfarm.com"
                    className="text-[#2c2416] hover:text-[#3d5a3e] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    stay@happyplanetfarm.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20at%20Happy%20Planet%20Farmstay."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 hover:bg-[#1ebe58] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 border border-[#3d5a3e] text-[#3d5a3e] px-6 py-3 hover:bg-[#3d5a3e] hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Map placeholder / image */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#e8e0d5] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533086881232-f9e60b3a21b7?w=800&q=80"
                alt="Farm at sunset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#3d5a3e] p-6 text-white">
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-medium">Check-in:</span> 2:00 PM &nbsp;|&nbsp;{" "}
                <span className="font-medium">Check-out:</span> 11:00 AM
              </p>
              <p
                className="text-white/70 text-xs mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Early check-in and late check-out available subject to availability. Please contact us in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
