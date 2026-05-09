const venues = [
  {
    name: "The Grand Event Lawn",
    capacity: "100–200 Guests",
    size: "100×100",
    description:
      "Our premier open-air venue for grand gatherings. This expansive green canvas is perfect for majestic outdoor setups, festive buffets, and large-scale celebrations.",
    icon: "🌿",
  },
  {
    name: "Heritage Garden Lawn",
    capacity: "80–100 Guests",
    size: "Mid-size",
    description:
      "A versatile space designed for mid-sized gatherings. Community-focused atmosphere ideal for ceremonies, birthday parties, or festive family brunches.",
    icon: "🌸",
  },
  {
    name: "Intimate Heritage Hall",
    capacity: "Family Gatherings",
    size: "Indoor",
    description:
      "A warm, sheltered indoor space perfect for heritage rituals and shared family meals — a haven away from the sun.",
    icon: "🏡",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#f8f4ef]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Weddings &amp; Celebrations
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2c2416] mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Rooted in Nature,
            <br />
            <span className="italic">Made for Milestones</span>
          </h2>
          <p
            className="text-[#5a4a35] text-lg font-light leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Celebrations at Happy Planet do not feel staged; they feel rooted. Spanning five acres of private farmland, our property provides the space and steadiness needed for life&apos;s most significant milestones. From intimate family gatherings to starlit receptions, the land lends itself to moments that are meant to be remembered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Venues */}
          <div className="space-y-6">
            <h3
              className="text-xl tracking-wide text-[#2c2416] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Signature Venues
            </h3>
            {venues.map((venue) => (
              <div key={venue.name} className="border border-[#e8e0d5] p-6 hover:border-[#c4a882] transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{venue.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4
                        className="text-lg text-[#2c2416]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {venue.name}
                      </h4>
                      <span
                        className="text-xs text-[#8b6914] bg-[#f0e8d8] px-3 py-1 tracking-wide"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {venue.capacity}
                      </span>
                    </div>
                    <p
                      className="text-sm text-[#5a4a35] leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {venue.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event features */}
          <div className="space-y-8">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                alt="Celebration at Happy Planet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="bg-[#3d5a3e] text-white p-8">
              <h3
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                The Happy Planet Touch
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: "🐾", text: "Pet-Friendly Celebrations — Your furry family members are part of the guest list." },
                  { icon: "🚗", text: "Ample on-site parking for all your guests." },
                  { icon: "👤", text: "Dedicated caretaker support throughout your event." },
                  { icon: "👨‍👩‍👧‍👦", text: "Up to 200 guests for grand outdoor receptions." },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <p
                      className="text-white/80 leading-relaxed text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
