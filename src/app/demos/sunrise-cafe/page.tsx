export const metadata = { title: "Sunrise Cafe — Melbourne's Favourite Brunch Spot" };

export default function SunriseCafe() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: "#FFFBF0", color: "#2D2016" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
            <span className="font-semibold text-lg text-amber-900">Sunrise Cafe</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-amber-800">
            <a href="#menu" className="hover:text-amber-600 transition">Menu</a>
            <a href="#about" className="hover:text-amber-600 transition">About</a>
            <a href="#reviews" className="hover:text-amber-600 transition">Reviews</a>
            <a href="#contact" className="hover:text-amber-600 transition">Visit Us</a>
          </div>
          <a href="#contact" className="bg-amber-500 text-white text-sm px-5 py-2 rounded-full hover:bg-amber-600 transition font-medium">Book a Table</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: "linear-gradient(135deg, #FFF7E6 0%, #FFECD2 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">Est. 2018 — Melbourne, VIC</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6 leading-tight text-amber-950">
              Start Your Day<br />the <span className="text-amber-500">Right Way</span>
            </h1>
            <p className="text-amber-800/70 text-lg mb-8 max-w-md leading-relaxed">
              Fresh, locally sourced brunch and specialty coffee in the heart of Fitzroy.
              Every dish made with love, every cup brewed to perfection.
            </p>
            <div className="flex gap-4">
              <a href="#menu" className="bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-amber-600 transition">View Menu</a>
              <a href="#contact" className="border-2 border-amber-300 text-amber-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-amber-50 transition">Find Us</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { bg: "#F59E0B", label: "Avocado Toast", h: "h-48" },
              { bg: "#D97706", label: "Flat White", h: "h-36" },
              { bg: "#B45309", label: "Acai Bowl", h: "h-36" },
              { bg: "#92400E", label: "Eggs Benedict", h: "h-48" },
            ].map((item, i) => (
              <div key={i} className={`${item.h} rounded-2xl flex items-end p-4 ${i % 2 === 1 ? "mt-8" : ""}`} style={{ background: `linear-gradient(135deg, ${item.bg}33, ${item.bg}22)` }}>
                <span className="text-sm font-medium text-amber-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "4.8", label: "Google Rating" },
            { value: "500+", label: "Reviews" },
            { value: "7", label: "Years Serving" },
            { value: "100%", label: "Locally Sourced" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-sm text-amber-800/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Our Menu</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-amber-950">Brunch Favourites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Classic Smashed Avo", desc: "Sourdough, feta, cherry tomatoes, poached eggs, dukkah", price: "$22", tag: "Best Seller" },
              { name: "Big Sunrise Brekkie", desc: "Free-range eggs, bacon, mushrooms, hash brown, toast, relish", price: "$26", tag: "Popular" },
              { name: "Acai Power Bowl", desc: "Organic acai, granola, seasonal fruits, coconut, honey drizzle", price: "$19", tag: "Healthy" },
              { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, smoked salmon, English muffin", price: "$24", tag: "" },
              { name: "Banana Pancakes", desc: "Fluffy buttermilk pancakes, caramelised banana, maple syrup", price: "$20", tag: "Kids Love It" },
              { name: "Flat White", desc: "Double shot, locally roasted beans, silky steamed milk", price: "$5.50", tag: "Signature" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-amber-950">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-amber-800/60 leading-relaxed">{item.desc}</p>
                {item.tag && (
                  <span className="inline-block mt-3 px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">{item.tag}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6" style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A33 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-amber-950">A Passion for Good Food</h2>
            <p className="text-amber-800/70 leading-relaxed mb-4">
              Sunrise Cafe started in 2018 with a simple idea: serve honest, delicious food made from the best local
              ingredients. What began as a tiny corner shop on Brunswick Street has grown into one of Fitzroy&apos;s most
              loved brunch spots.
            </p>
            <p className="text-amber-800/70 leading-relaxed mb-8">
              We partner with local farmers, roast our coffee beans in-house, and bake our sourdough fresh every morning.
              Every dish tells a story of quality and care.
            </p>
            <div className="flex gap-6">
              {["Mon-Fri: 7am - 3pm", "Sat-Sun: 7am - 4pm"].map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-amber-700">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-2xl bg-amber-200/50" />
            <div className="h-64 rounded-2xl bg-amber-300/40 mt-8" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-amber-950">What Our Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Best brunch in Fitzroy, hands down. The smashed avo is incredible and the coffee is always perfect. We come here every weekend!", rating: 5 },
              { name: "James T.", text: "Lovely atmosphere and amazing food. The big brekkie is huge and so fresh. Staff are always friendly and welcoming.", rating: 5 },
              { name: "Emily R.", text: "Found this gem on Google and so glad we did. The acai bowl was beautiful and delicious. Already planning our next visit!", rating: 5 },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 border border-amber-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-amber-800/70 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-xs font-bold text-amber-600">{review.name[0]}</div>
                  <span className="text-sm font-medium text-amber-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p className="text-amber-200/80 mb-8 leading-relaxed">
              We&apos;re located in the heart of Fitzroy, just off Brunswick Street. Walk-ins welcome, or book ahead for weekends.
            </p>
            <div className="space-y-4 text-amber-100/90">
              <div className="flex items-center gap-3"><span className="text-amber-400">&#9679;</span> 142 Brunswick Street, Fitzroy VIC 3065</div>
              <div className="flex items-center gap-3"><span className="text-amber-400">&#9679;</span> (03) 9417 2200</div>
              <div className="flex items-center gap-3"><span className="text-amber-400">&#9679;</span> hello@sunrisecafe.com.au</div>
            </div>
          </div>
          <div className="bg-amber-800/50 rounded-2xl p-8">
            <h3 className="font-semibold mb-4">Book a Table</h3>
            <div className="space-y-4">
              <input placeholder="Your Name" className="w-full px-4 py-3 bg-amber-800/50 rounded-lg border border-amber-700 text-white placeholder:text-amber-400/50 text-sm" />
              <input placeholder="Phone Number" className="w-full px-4 py-3 bg-amber-800/50 rounded-lg border border-amber-700 text-white placeholder:text-amber-400/50 text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full px-4 py-3 bg-amber-800/50 rounded-lg border border-amber-700 text-amber-400/50 text-sm" />
                <input placeholder="Guests" className="w-full px-4 py-3 bg-amber-800/50 rounded-lg border border-amber-700 text-white placeholder:text-amber-400/50 text-sm" />
              </div>
              <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition">Reserve Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-950 text-amber-400/60 text-center text-sm">
        <p>&copy; 2025 Sunrise Cafe. All rights reserved. | Website by Moriah Systems</p>
      </footer>
    </div>
  );
}
