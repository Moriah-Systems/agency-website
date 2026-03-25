export const metadata = { title: "Brighton Dental — Family Dentistry in Brighton, UK" };

export default function BrightonDental() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: "#F8FBFF", color: "#1A2B4A" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">B</div>
            <div>
              <span className="font-semibold text-blue-900 block leading-tight">Brighton Dental</span>
              <span className="text-[10px] text-blue-400 tracking-wide">FAMILY DENTISTRY</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-blue-800/70">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#team" className="hover:text-blue-600 transition">Our Team</a>
            <a href="#reviews" className="hover:text-blue-600 transition">Reviews</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Book Appointment</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6" style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Accepting New NHS &amp; Private Patients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-950">
              Your Smile,<br />Our <span className="text-blue-600">Priority</span>
            </h1>
            <p className="text-blue-800/60 text-lg mb-8 max-w-md leading-relaxed">
              Gentle, modern dentistry for the whole family. From routine check-ups to cosmetic treatments,
              we provide exceptional care in a relaxing environment.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">Book Now</a>
              <a href="tel:01onal" className="border-2 border-blue-200 text-blue-700 px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                01273 555 123
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200/60 flex items-center justify-center">
              <svg className="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-blue-50">
              <div className="text-2xl font-bold text-blue-600">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <div className="text-xs text-blue-400 mt-1">320+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-500 text-sm font-medium tracking-wide uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-blue-950">Comprehensive Dental Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🦷", name: "Check-ups & Cleanings", desc: "Regular examinations, professional cleaning, and preventive care for healthy teeth and gums.", tag: "NHS Available" },
              { icon: "✨", name: "Teeth Whitening", desc: "Professional in-surgery and take-home whitening treatments for a brighter, more confident smile.", tag: "Popular" },
              { icon: "🔧", name: "Fillings & Repairs", desc: "White composite fillings and restoration work to repair damaged or decayed teeth.", tag: "NHS Available" },
              { icon: "👑", name: "Crowns & Bridges", desc: "Custom-made porcelain crowns and bridges to restore function and aesthetics.", tag: "" },
              { icon: "📐", name: "Invisalign", desc: "Clear aligner therapy for discreet, comfortable teeth straightening. Free consultation available.", tag: "Free Consult" },
              { icon: "🛡️", name: "Emergency Care", desc: "Same-day emergency appointments for toothache, broken teeth, and urgent dental issues.", tag: "Same Day" },
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 border border-blue-50 hover:shadow-lg hover:border-blue-100 transition group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-blue-950 mb-2">{service.name}</h3>
                <p className="text-sm text-blue-800/50 leading-relaxed">{service.desc}</p>
                {service.tag && (
                  <span className="inline-block mt-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">{service.tag}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Your Dentists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Mitchell", role: "Principal Dentist", quals: "BDS (Hons), MJDF RCS", years: "15+ years experience" },
              { name: "Dr. James Cooper", role: "Associate Dentist", quals: "BDS, MSc Prosthodontics", years: "10+ years experience" },
              { name: "Dr. Priya Patel", role: "Orthodontist", quals: "BDS, MOrth RCS", years: "8+ years experience" },
            ].map((doc) => (
              <div key={doc.name} className="text-center">
                <div className="w-32 h-32 bg-blue-800/50 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-blue-400/40">
                  {doc.name.split(" ").slice(-1)[0][0]}
                </div>
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-blue-400 text-sm mt-1">{doc.role}</p>
                <p className="text-blue-300/50 text-xs mt-2">{doc.quals}</p>
                <p className="text-blue-300/40 text-xs mt-1">{doc.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-500 text-sm font-medium tracking-wide uppercase">Patient Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-blue-950">Trusted by Families Across Brighton</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rebecca L.", text: "Dr. Mitchell is absolutely wonderful. I used to be terrified of the dentist but she made me feel completely at ease. The whole team is fantastic." },
              { name: "David W.", text: "Had an emergency appointment for a broken tooth and they saw me the same day. Professional, gentle, and the repair looks perfect. Highly recommend." },
              { name: "Amara K.", text: "My children love coming here! The staff are so patient and kind. The surgery is modern and spotlessly clean. Best dental practice in Brighton." },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 border border-blue-50">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-blue-800/60 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <span className="text-sm font-medium text-blue-900">{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6" style={{ background: "linear-gradient(135deg, #EBF4FF, #DBEAFE)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Book Your Appointment</h2>
            <p className="text-blue-800/60 mb-8 leading-relaxed">
              New patients welcome. We offer both NHS and private appointments.
              Call us or fill in the form and we&apos;ll get back to you within 2 hours.
            </p>
            <div className="space-y-4 text-blue-800/70">
              <div className="flex items-center gap-3">📍 48 Western Road, Brighton BN1 2EB</div>
              <div className="flex items-center gap-3">📞 01273 555 123</div>
              <div className="flex items-center gap-3">✉️ reception@brightondental.co.uk</div>
              <div className="flex items-center gap-3">🕐 Mon-Fri: 8am - 6pm | Sat: 9am - 1pm</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-50">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" className="w-full px-4 py-3 bg-blue-50/50 rounded-lg border border-blue-100 text-sm placeholder:text-blue-300" />
                <input placeholder="Last Name" className="w-full px-4 py-3 bg-blue-50/50 rounded-lg border border-blue-100 text-sm placeholder:text-blue-300" />
              </div>
              <input placeholder="Phone Number" className="w-full px-4 py-3 bg-blue-50/50 rounded-lg border border-blue-100 text-sm placeholder:text-blue-300" />
              <input placeholder="Email Address" className="w-full px-4 py-3 bg-blue-50/50 rounded-lg border border-blue-100 text-sm placeholder:text-blue-300" />
              <select className="w-full px-4 py-3 bg-blue-50/50 rounded-lg border border-blue-100 text-sm text-blue-300">
                <option>Select Service</option>
                <option>Check-up &amp; Cleaning</option>
                <option>Teeth Whitening</option>
                <option>Invisalign Consultation</option>
                <option>Emergency</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">Request Appointment</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-blue-950 text-blue-400/50 text-center text-sm">
        <p>&copy; 2025 Brighton Dental Practice. All rights reserved. | Website by Moriah Systems</p>
      </footer>
    </div>
  );
}
