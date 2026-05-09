const rooms = [
  {
    id: 1,
    name: "Traditional Hut House",
    subtitle: "Kudil — The Rustic Soul",
    bestFor: "Couples, Solo Travelers, and Seekers of Solitude",
    vibe: "Designed for reflection and a deep connection to the land.",
    features: [
      "Private Jacuzzi",
      "Open-to-sky shower",
      "Rustic open bathroom",
      "1 Double Bed + 1 Single Bed",
      "Air Conditioning",
    ],
    image: "/images/room%20kudil.jpeg",
    tag: "Signature",
    tagColor: "#8b6914",
  },
  {
    id: 2,
    name: "Large Family Room",
    subtitle: "The Heart of Group Stays",
    bestFor: "Large Families, Heritage Groups, and Milestone Celebrations",
    vibe: "Balances openness with comfort — the premier choice for group stays.",
    features: [
      "4 Double Beds",
      "Air Conditioning",
      "Spacious layout",
      "Group-friendly setup",
    ],
    image: "/images/room%20family.jpeg",
    tag: "Group Favourite",
    tagColor: "#3d5a3e",
  },
  {
    id: 3,
    name: "Double Bed Rooms",
    subtitle: "Morning Light & Greenery",
    bestFor: "Couples or Small Families",
    vibe:
      "Large windows open directly toward the greenery, letting in the soft farm sounds of the early morning.",
    features: [
      "Double Bed",
      "Air Conditioning",
      "Garden-facing windows",
      "Three rooms available",
    ],
    image: "/images/room%20double.jpeg",
    tag: "3 Rooms",
    tagColor: "#c4a882",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-[#2c2416]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#c4a882] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Where You Rest
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Rooms &amp; Cottages
          </h2>
          <p
            className="text-[#a89880] max-w-2xl mx-auto text-lg font-light leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Six air-conditioned rooms providing a restful base for up to 25 guests. Each space is crafted to bring you closer to the land.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0.5">
          {rooms.map((room) => (
            <div key={room.id} className="group relative overflow-hidden bg-[#1a160e]">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                />
              </div>

              {/* Tag */}
              <div
                className="absolute top-4 left-4 px-3 py-1 text-white text-xs tracking-[0.2em] uppercase"
                style={{ backgroundColor: room.tagColor, fontFamily: "'Inter', sans-serif" }}
              >
                {room.tag}
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <h3
                  className="text-2xl font-light text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {room.name}
                </h3>
                <p
                  className="text-sm italic text-[#c4a882] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {room.subtitle}
                </p>
                <p
                  className="text-xs text-white/70 mb-4 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Best for: {room.bestFor}
                </p>
                <ul className="space-y-1">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-white/60 flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-1 h-1 bg-[#c4a882] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-[#a89880] mt-8 text-sm italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          All rooms are air-conditioned with inverter power backup.
        </p>
      </div>
    </section>
  );
}
