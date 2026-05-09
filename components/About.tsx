export default function About() {
  return (
    <section className="py-24 px-6 bg-[#f8f4ef]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight text-[#2c2416] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A Sanctuary That
              <br />
              <span className="italic">Settles Into You</span>
            </h2>
            <p
              className="text-[#5a4a35] leading-relaxed mb-6 text-lg font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Happy Planet is a sanctuary that settles into you gently. Spanning five acres of lush farmland near Mayiladuthurai, our property is rooted in wabi-sabi simplicity—where beauty is found in natural textures, soft morning light, and the quiet sounds of the farm.
            </p>
            <blockquote
              className="border-l-2 border-[#c4a882] pl-6 italic text-[#5a4a35] text-lg leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;Made for shared moments and unhurried days, Happy Planet invites you to come as you are, stay as long as you need, and find comfort in simple moments with family and friends.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/About.jpeg"
                alt="Happy Planet Farm"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#3d5a3e] text-white p-6 flex flex-col justify-center">
                <span
                  className="text-4xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  5
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#a8c4a9]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Acres of Farmland
                </span>
              </div>
              <div className="bg-[#c4a882] text-[#2c2416] p-6 flex flex-col justify-center">
                <span
                  className="text-4xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  25
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#5a4a35]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Guests Capacity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage destinations */}
        <div className="mt-20 text-center">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Strategic Heritage Hub
          </p>
          <p
            className="text-lg font-light text-[#5a4a35] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A perfect base for exploring the rich heritage of{" "}
            <span className="text-[#3d5a3e]">Thirukkadaiyur</span>,{" "}
            <span className="text-[#3d5a3e]">Tranquebar</span>,{" "}
            <span className="text-[#3d5a3e]">Karaikal</span>,{" "}
            <span className="text-[#3d5a3e]">Sirkali</span>,{" "}
            <span className="text-[#3d5a3e]">Vaitheswarankoil</span>, and{" "}
            <span className="text-[#3d5a3e]">Chidambaram</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
