const activities = [
  {
    icon: "🏏",
    title: "100×100 Cricket Ground",
    description: "A full-size cricket ground for friendly matches under open skies.",
  },
  {
    icon: "🏊",
    title: "Traditional Farm Pool",
    description: "An authentic village-style pumpset pool — cool, refreshing, and uniquely Happy Planet.",
  },
  {
    icon: "🏓",
    title: "Ping Pong",
    description: "Unwind with a game of table tennis in between farm adventures.",
  },
  {
    icon: "♟️",
    title: "Indoor Board Games",
    description: "A curated collection of board games for evenings with family and friends.",
  },
  {
    icon: "🐾",
    title: "Pet-Friendly Farm",
    description: "Acres of open space for your furry friends to roam, explore, and play.",
  },
  {
    icon: "🏛️",
    title: "Heritage Day Trips",
    description: "Explore Tranquebar, Pichavaram, Chidambaram, and more — all within reach.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-[#f8f4ef]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Farm Life
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2c2416] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Activities &amp; Farm Experience
          </h2>
          <p
            className="text-[#5a4a35] max-w-xl mx-auto text-lg font-light leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            There is always something to do — or nothing at all. Both are perfectly welcome at Happy Planet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#e8e0d5]">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-[#f8f4ef] p-8 hover:bg-white transition-colors group"
            >
              <span className="text-3xl mb-4 block">{activity.icon}</span>
              <h3
                className="text-xl text-[#2c2416] mb-3 group-hover:text-[#3d5a3e] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {activity.title}
              </h3>
              <p
                className="text-sm text-[#5a4a35] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pet friendly callout */}
        <div className="mt-16 bg-[#3d5a3e] text-white p-10 md:p-14 flex flex-col md:flex-row items-center gap-8">
          <div className="text-5xl">🐾</div>
          <div className="flex-1">
            <h3
              className="text-3xl font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Pet-Friendly Farm Living
            </h3>
            <p
              className="text-white/80 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At Happy Planet, we believe family moments aren&apos;t complete without your furry friends. We are a proud pet-friendly farm stay, offering plenty of open space to explore. Pets are welcome as long as they are friendly and comfortable with our farm animals and birds. We ask that pet parents remain mindful to ensure a harmonious experience for all guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
