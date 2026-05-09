export default function Retreats() {
  return (
    <section id="retreats" className="py-24 bg-[#e8e0d0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Retreats &amp; Offsites
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c2416] mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Presence Over
              <br />
              <span className="italic">Performance</span>
            </h2>
            <p
              className="text-[#5a4a35] text-lg font-light leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Happy Planet is a sanctuary for clarity. Removed from the noise of the city, we provide the silence and space required for wellness retreats, creative workshops, and corporate resets. Our &ldquo;unhurried&rdquo; philosophy allows groups to disconnect from the digital world and reconnect with their own pace.
            </p>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl text-[#2c2416] mb-3 font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Work &amp; Focus Spaces
                </h3>
                <ul className="space-y-2">
                  {[
                    "Dual-Lawn Flexibility: Main sessions (200 cap) + breakout workshops (100 cap)",
                    "Morning light hitting the pond — natural studio for movement & breathwork",
                    "Quiet corners for deep reflection and creative resets",
                    "Distraction-free environment for writing, art, and strategic planning",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#5a4a35]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#8b6914] rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl text-[#2c2416] mb-3 font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Team Bonding &amp; Discovery
                </h3>
                <ul className="space-y-2">
                  {[
                    "Cricket on our 100×100 ground, traditional village pumpset pool",
                    "Evening of board games and authentic play",
                    "Cultural hub: Tranquebar Danish Fort, Pichavaram Mangrove Forest",
                    "Regional history exploration from your peaceful base",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#5a4a35]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#3d5a3e] rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Wellness retreat"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📶", label: "High-speed Wi-Fi" },
                { icon: "🔌", label: "Inverter Backup" },
                { icon: "🛏️", label: "AC Group Rooms" },
                { icon: "🔒", label: "24/7 CCTV" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-4 flex items-center gap-3 border border-[#e8e0d5]"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span
                    className="text-xs tracking-wide text-[#2c2416]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
