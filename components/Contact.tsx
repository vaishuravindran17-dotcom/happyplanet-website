const AIRBNB_LINKS = [
  {
    label: "Book Room 1 on Airbnb",
    url: "https://www.airbnb.co.in/rooms/39516063?source_impression_id=p3_1778338929_P3b4wykn1XZxAkwu",
  },
  {
    label: "Book Room 2 on Airbnb",
    url: "https://www.airbnb.co.in/rooms/914472374713076008?source_impression_id=p3_1778338928_P3G59icQKpjhhhKr",
  },
];

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
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919944331313"
                      className="text-[#2c2416] hover:text-[#3d5a3e] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      +91 99443 31313
                    </a>
                    <a
                      href="tel:+919597664743"
                      className="text-[#2c2416] hover:text-[#3d5a3e] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      +91 95976 64743
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919944331313?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20at%20Happy%20Planet%20Farmstay."
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
                href="tel:+919944331313"
                className="flex items-center gap-2 border border-[#3d5a3e] text-[#3d5a3e] px-6 py-3 hover:bg-[#3d5a3e] hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                Call Now
              </a>
            </div>

            {/* Airbnb booking */}
            <div className="mt-10">
              <p
                className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Book Directly on Airbnb
              </p>
              <div className="flex flex-col gap-3">
                {AIRBNB_LINKS.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-[#e8e0d5] px-5 py-3 hover:border-[#ff5a5f] hover:text-[#ff5a5f] transition-colors group"
                  >
                    <svg className="w-5 h-5 text-[#ff5a5f] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.24 0 2.25 1.01 2.25 2.25S13.24 9 12 9 9.75 7.99 9.75 6.75 10.76 4.5 12 4.5zM18 18H6v-1.5c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z" />
                    </svg>
                    <span
                      className="text-sm text-[#2c2416] group-hover:text-[#ff5a5f] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-[#c4a882] group-hover:text-[#ff5a5f] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image + check-in info */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#e8e0d5] flex items-center justify-center overflow-hidden">
              <img
                src="/images/contact.jpeg"
                alt="Happy Planet Farm"
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
