export const metadata = { title: "Peak Plumbing — Reliable Plumber in Sydney" };

export default function PeakPlumbing() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: "#FAFAFA", color: "#1A1A2E" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 text-xs border-b border-white/10">
            <div className="flex gap-6 text-slate-300">
              <span>📞 0412 345 678</span>
              <span>✉️ info@peakplumbing.com.au</span>
            </div>
            <span className="text-green-400 font-medium">24/7 Emergency Service Available</span>
          </div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">P</div>
              <div>
                <span className="font-bold text-lg block leading-tight">Peak Plumbing</span>
                <span className="text-[10px] text-slate-400 tracking-wider">LICENSED &amp; INSURED</span>
              </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm text-slate-300">
              <a href="#services" className="hover:text-orange-400 transition">Services</a>
              <a href="#why" className="hover:text-orange-400 transition">Why Us</a>
              <a href="#reviews" className="hover:text-orange-400 transition">Reviews</a>
              <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
            </div>
            <a href="#contact" className="bg-orange-500 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-orange-600 transition font-medium">Get a Free Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              Licence #: 12345C | ABN: 12 345 678 901
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Sydney&apos;s Most Trusted<br /><span className="text-orange-500">Plumbing Service</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Fast, reliable, and honest plumbing for homes and businesses across Greater Sydney.
              No call-out fees. No hidden charges. Just quality work, guaranteed.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#contact" className="bg-orange-500 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition">Get a Free Quote</a>
              <a href="tel:0412345678" className="border-2 border-slate-600 text-slate-300 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition">Call Now</a>
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Same Day Service</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Lifetime Warranty</span>
              <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Upfront Pricing</span>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "Jobs Completed", value: "5,000+" },
              { label: "Years Experience", value: "18+" },
              { label: "Google Rating", value: "4.9 ★" },
              { label: "Response Time", value: "< 1 Hour" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Fix</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔧", name: "General Plumbing", desc: "Tap repairs, pipe replacements, toilet fixes, and all general plumbing maintenance.", price: "From $99" },
              { icon: "🚿", name: "Hot Water Systems", desc: "Installation, repair, and replacement of gas, electric, and solar hot water systems.", price: "From $149" },
              { icon: "🚰", name: "Blocked Drains", desc: "CCTV drain inspections and high-pressure jet blasting to clear stubborn blockages.", price: "From $129" },
              { icon: "🏠", name: "Bathroom Renovations", desc: "Complete bathroom fitouts from design to installation. Licensed and insured.", price: "Free Quote" },
              { icon: "⚡", name: "Gas Fitting", desc: "Licensed gas fitter for cooktop installation, gas leak detection, and compliance certificates.", price: "From $149" },
              { icon: "🆘", name: "Emergency Plumbing", desc: "24/7 emergency callouts for burst pipes, flooding, gas leaks, and sewage overflows.", price: "No Call-Out Fee" },
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-orange-100 transition group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.desc}</p>
                <span className="text-orange-500 text-sm font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Not Your Average Plumber</h2>
            <div className="space-y-6">
              {[
                { title: "Upfront, Honest Pricing", desc: "We quote before we start. No surprises on your bill, ever." },
                { title: "On Time, Every Time", desc: "We respect your time. If we're late, the first hour is free." },
                { title: "Lifetime Labour Warranty", desc: "We stand behind our work with a lifetime warranty on all labour." },
                { title: "Clean as We Go", desc: "We treat your home like our own. We always leave the site spotless." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-orange-500">4.9</div>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-2">Based on 280+ Google Reviews</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Quality of Work", pct: 98 },
                { label: "Punctuality", pct: 96 },
                { label: "Value for Money", pct: 95 },
                { label: "Communication", pct: 97 },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600">{bar.label}</span>
                    <span className="text-orange-500 font-medium">{bar.pct}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{ width: `${bar.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mark S.", suburb: "Bondi", text: "Called at 6am with a burst pipe and they were at my door by 7. Fixed it quickly, cleaned up everything, and the price was exactly what they quoted. Absolute legends." },
              { name: "Lisa T.", suburb: "Parramatta", text: "Had our whole bathroom renovated by Peak Plumbing. The attention to detail was incredible. On budget, on time, and the result is stunning. Can not recommend enough." },
              { name: "Chris M.", suburb: "Manly", text: "Finally found a plumber I can trust. Upfront about costs, explains everything clearly, and does quality work. They have a customer for life." },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{review.name}</span>
                  <span className="text-xs text-slate-400">{review.suburb}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-semibold mb-4">Servicing All of Greater Sydney</h3>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            {["Sydney CBD", "Eastern Suburbs", "Inner West", "North Shore", "Northern Beaches", "Western Sydney", "Sutherland Shire", "Hills District", "Parramatta", "Canterbury-Bankstown"].map((area) => (
              <span key={area} className="px-3 py-1.5 bg-slate-800 rounded-full">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Tell us about your plumbing issue and we&apos;ll get back to you within 30 minutes with a no-obligation quote.
              Emergency? Call us directly for immediate assistance.
            </p>
            <div className="space-y-4 text-slate-600">
              <div className="flex items-center gap-3">📞 0412 345 678</div>
              <div className="flex items-center gap-3">✉️ info@peakplumbing.com.au</div>
              <div className="flex items-center gap-3">📍 Serving all of Greater Sydney</div>
              <div className="flex items-center gap-3">🕐 24/7 Emergency | Mon-Sat: 7am - 6pm</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm placeholder:text-slate-300" />
                <input placeholder="Phone" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm placeholder:text-slate-300" />
              </div>
              <input placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm placeholder:text-slate-300" />
              <input placeholder="Suburb" className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm placeholder:text-slate-300" />
              <select className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-300">
                <option>Select Service Needed</option>
                <option>General Plumbing</option>
                <option>Blocked Drain</option>
                <option>Hot Water System</option>
                <option>Gas Fitting</option>
                <option>Bathroom Renovation</option>
                <option>Emergency</option>
              </select>
              <textarea placeholder="Describe your issue..." rows={3} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 text-sm placeholder:text-slate-300 resize-none" />
              <button className="w-full bg-orange-500 text-white py-3.5 rounded-lg font-medium hover:bg-orange-600 transition">Get My Free Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-500 text-center text-sm">
        <p>&copy; 2025 Peak Plumbing Pty Ltd. All rights reserved. Licence #12345C | ABN: 12 345 678 901 | Website by Moriah Systems</p>
      </footer>
    </div>
  );
}
