import Image from "next/image";
import CatalystReels from "./CatalystReels";

export const metadata = { title: "Catalyst By Buddhika | Premium Hair & Beauty Salon, Ja-Ela" };

export default function CatalystSalon() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: "#0A0A0A", color: "#F5F0EB" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#C9A96E]/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/catalyst/logo.jpg" alt="Catalyst By Buddhika" width={140} height={40} className="h-6 md:h-8 w-auto" />
          </div>
          <div className="hidden md:flex gap-8 text-sm text-[#F5F0EB]/60">
            <a href="#services" className="hover:text-[#C9A96E] transition">Services</a>
            <a href="#gallery" className="hover:text-[#C9A96E] transition">Gallery</a>
            <a href="#reels" className="hover:text-[#C9A96E] transition">Reels</a>
            <a href="#founder" className="hover:text-[#C9A96E] transition">Our Story</a>
            <a href="#contact" className="hover:text-[#C9A96E] transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:0771780811" className="md:hidden w-9 h-9 rounded-full border border-[#C9A96E]/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            </a>
            <a href="#booking" className="bg-gradient-to-r from-[#C9A96E] to-[#B8963E] text-[#0A0A0A] text-xs md:text-sm px-4 md:px-6 py-2 rounded-sm hover:opacity-90 transition font-medium tracking-wide">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-14 md:pt-16 min-h-[90vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C9A96E 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-[#C9A96E]/20 text-[#C9A96E] text-[10px] md:text-xs font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-sm mb-5 md:mb-8 tracking-[0.2em] uppercase">
              Premium Hair & Beauty
            </div>
            <h1 className="text-3xl md:text-6xl font-light mb-4 md:mb-6 leading-tight tracking-wide">
              Where <span className="font-normal" style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3, #C9A96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Confidence</span>
              <br />Meets Style
            </h1>
            <p className="text-[#F5F0EB]/50 text-sm md:text-lg mb-6 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience the art of transformation at Ja-Ela's most trusted salon. From stunning hair makeovers to bridal perfection, we bring out the best version of you.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
              <a href="#booking" className="bg-gradient-to-r from-[#C9A96E] to-[#B8963E] text-[#0A0A0A] px-6 md:px-10 py-3 md:py-3.5 rounded-sm text-xs md:text-sm font-medium tracking-wider uppercase hover:opacity-90 transition">
                Book Appointment
              </a>
              <a href="tel:0771780811" className="border border-[#C9A96E]/30 text-[#C9A96E] px-5 md:px-8 py-3 md:py-3.5 rounded-sm text-xs md:text-sm font-medium tracking-wider uppercase hover:bg-[#C9A96E]/5 transition flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                Call Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
              <div className="space-y-2 md:space-y-3">
                <div className="rounded-lg overflow-hidden border border-[#C9A96E]/10">
                  <Image src="/catalyst/work2.jpg" alt="Hair styling" width={400} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-[#C9A96E]/10 hidden lg:block">
                  <Image src="/catalyst/work5.jpg" alt="Hair coloring" width={400} height={500} className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3 mt-4 lg:mt-8">
                <div className="rounded-lg overflow-hidden border border-[#C9A96E]/10">
                  <Image src="/catalyst/work3.jpg" alt="Red hair transformation" width={400} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-[#C9A96E]/10 hidden lg:block">
                  <Image src="/catalyst/work4.jpg" alt="Burgundy curls" width={400} height={500} className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="space-y-2 md:space-y-3 mt-8 lg:hidden">
                <div className="rounded-lg overflow-hidden border border-[#C9A96E]/10">
                  <Image src="/catalyst/work5.jpg" alt="Hair coloring" width={400} height={500} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-0 md:-bottom-6 md:-left-6 bg-[#131313] border border-[#C9A96E]/20 rounded-lg p-3 md:p-4 shadow-2xl">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#B8963E] flex items-center justify-center text-[#0A0A0A] text-[10px] md:text-xs font-bold">
                  CB
                </div>
                <div>
                  <div className="text-xs md:text-sm font-medium text-[#F5F0EB]">Featured in</div>
                  <div className="text-[10px] md:text-xs text-[#C9A96E]">Daily Mirror &bull; The Sun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reels */}
      <section id="reels" className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-[#C9A96E] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Watch Us Work</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">Video Reels</h2>
            <p className="text-[#F5F0EB]/40 mt-2 md:mt-4 text-sm md:text-base max-w-md mx-auto">See the magic happen. Watch our styling process and stunning results on video.</p>
          </div>
          <CatalystReels />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[#C9A96E]/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1000+", label: "Happy Clients" },
            { value: "8+", label: "Expert Stylists" },
            { value: "Ja-Ela", label: "Prime Location" },
            { value: "5 Star", label: "Rated Salon" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-light tracking-wide" style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
              <div className="text-sm text-[#F5F0EB]/40 mt-2 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#C9A96E] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">What We Offer</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { icon: "&#9986;", name: "Hair Styling", desc: "Cuts, blowouts, and styling for all hair types", price: "From Rs. 500" },
              { icon: "&#127912;", name: "Hair Coloring", desc: "Balayage, highlights, global coloring, and custom blending", price: "From Rs. 3,000" },
              { icon: "&#128142;", name: "Bridal Packages", desc: "Complete bridal makeovers including hair, makeup, and dressing", price: "From Rs. 15,000" },
              { icon: "&#10024;", name: "Hair Treatments", desc: "Keratin, deep conditioning, scalp care, and damage repair", price: "From Rs. 2,000" },
              { icon: "&#128132;", name: "Makeup Services", desc: "Professional makeup for events, photoshoots, and everyday glam", price: "From Rs. 2,500" },
              { icon: "&#128134;", name: "Grooming for Men", desc: "Premium haircuts, beard trimming, facials, and grooming", price: "From Rs. 400" },
            ].map((service) => (
              <div key={service.name} className="group flex items-center gap-4 bg-[#111] border border-[#C9A96E]/10 rounded-lg px-5 py-4 hover:border-[#C9A96E]/30 transition-all duration-300">
                <div className="text-2xl shrink-0" dangerouslySetInnerHTML={{ __html: service.icon }} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm md:text-base tracking-wide text-[#F5F0EB]">{service.name}</h3>
                  <p className="text-xs text-[#F5F0EB]/40 leading-relaxed mt-0.5 hidden md:block">{service.desc}</p>
                </div>
                <span className="text-[10px] md:text-xs text-[#C9A96E] font-medium tracking-wider shrink-0">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 tracking-wide">Transformations</h2>
            <p className="text-[#F5F0EB]/40 mt-4 max-w-md mx-auto">Every client walks out feeling like the best version of themselves. Here are some of our recent creations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/catalyst/work1.jpg", alt: "Caramel highlights with blue streaks" },
              { src: "/catalyst/work2.jpg", alt: "Blonde balayage styling" },
              { src: "/catalyst/work3.jpg", alt: "Bold red hair transformation" },
              { src: "/catalyst/work4.jpg", alt: "Burgundy curls" },
              { src: "/catalyst/work5.jpg", alt: "Warm caramel highlights back view" },
              { src: "/catalyst/buddhika-working.jpg", alt: "Buddhika styling a client" },
            ].map((img) => (
              <div key={img.src} className="group relative rounded-lg overflow-hidden border border-[#C9A96E]/10 hover:border-[#C9A96E]/30 transition-all duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-xs text-[#F5F0EB]/80">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">The Story</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 tracking-wide">Meet Buddhika</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-[#C9A96E]/10">
                <Image src="/catalyst/founder.jpg" alt="Buddhika, Founder of Salon Catalyst" width={600} height={750} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#131313] border border-[#C9A96E]/20 rounded-lg p-4">
                <div className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Featured In</div>
                <div className="text-sm font-medium">Daily Mirror &bull; The Sun</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[#F5F0EB]/60 leading-relaxed text-lg">
                From a small town in Kegalle to building one of Ja-Ela's most respected salons, Buddhika's journey is one of pure passion and determination.
              </p>
              <p className="text-[#F5F0EB]/50 leading-relaxed">
                It all started when a young Buddhika watched stylists transform people's confidence through their craft. That spark turned into a calling. He sold everything he had, moved to Colombo, and spent years learning from the best in the industry.
              </p>
              <p className="text-[#F5F0EB]/50 leading-relaxed">
                Today, Catalyst By Buddhika stands as a space where artistry meets genuine human connection. Every client who sits in his chair gets more than a haircut. They get care, attention, and a transformation that goes beyond appearance.
              </p>
              <blockquote className="border-l-2 border-[#C9A96E] pl-6 py-2">
                <p className="text-[#C9A96E]/80 italic text-lg leading-relaxed">
                  "When they look in the mirror and smile, it becomes something deeper than appearance. It is about how they feel inside."
                </p>
                <cite className="text-[#F5F0EB]/40 text-sm mt-3 block not-italic">Buddhika, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 tracking-wide">The Catalyst Family</h2>
            <p className="text-[#F5F0EB]/40 mt-4 max-w-md mx-auto">A talented team of stylists and beauty experts dedicated to making you look and feel incredible.</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C9A96E]/10">
            <Image src="/catalyst/team.jpg" alt="The Catalyst By Buddhika team" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden border border-[#C9A96E]/10">
            <Image src="/catalyst/opening.jpg" alt="Catalyst Salon grand opening" width={800} height={533} className="w-full h-auto" />
          </div>
          <div>
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">A New Chapter</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 mb-6 tracking-wide">The Grand Opening</h2>
            <p className="text-[#F5F0EB]/50 leading-relaxed mb-4">
              Catalyst By Buddhika opened its doors in Ja-Ela with a vision to bring world-class hair and beauty services to the local community. What started as a dream is now a reality.
            </p>
            <p className="text-[#F5F0EB]/50 leading-relaxed">
              Located on Negombo Road, our salon is designed to be a space where you can relax, unwind, and leave looking your absolute best. Modern interiors, premium products, and a team that truly cares about your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">Reserve Your Spot</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 tracking-wide">Book an Appointment</h2>
            <p className="text-[#F5F0EB]/40 mt-4">Fill out the form below and we will confirm your appointment via WhatsApp or call.</p>
          </div>
          <div className="bg-[#111] border border-[#C9A96E]/10 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Full Name</label>
                <input placeholder="Your name" className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/20 focus:border-[#C9A96E]/40 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Phone / WhatsApp</label>
                <input placeholder="07X XXX XXXX" className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/20 focus:border-[#C9A96E]/40 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB]/40 focus:border-[#C9A96E]/40 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Preferred Time</label>
                <select className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB]/40 focus:border-[#C9A96E]/40 focus:outline-none transition">
                  <option>Select a time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Service</label>
                <select className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB]/40 focus:border-[#C9A96E]/40 focus:outline-none transition">
                  <option>Select a service</option>
                  <option>Hair Styling</option>
                  <option>Hair Coloring / Balayage</option>
                  <option>Bridal Package</option>
                  <option>Hair Treatment / Keratin</option>
                  <option>Makeup Services</option>
                  <option>Men&apos;s Grooming</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-[#C9A96E] tracking-wider uppercase mb-2">Special Requests</label>
                <textarea rows={3} placeholder="Tell us anything we should know..." className="w-full px-4 py-3.5 bg-[#0A0A0A] border border-[#C9A96E]/10 rounded-lg text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/20 focus:border-[#C9A96E]/40 focus:outline-none transition resize-none" />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-gradient-to-r from-[#C9A96E] to-[#B8963E] text-[#0A0A0A] py-4 rounded-lg font-medium tracking-wider uppercase hover:opacity-90 transition text-sm">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-[#C9A96E] text-xs font-medium tracking-[0.3em] uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 mb-8 tracking-wide">Visit Our Salon</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F5F0EB] mb-1">Address</h4>
                  <p className="text-sm text-[#F5F0EB]/40">280/1, Negombo Road,<br />Weligampitiya Church Road,<br />Ja-Ela 11350, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F5F0EB] mb-1">Phone</h4>
                  <p className="text-sm text-[#F5F0EB]/40">077 1 780 811</p>
                  <p className="text-sm text-[#F5F0EB]/40">076 2 800 811</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F5F0EB] mb-1">Email</h4>
                  <p className="text-sm text-[#F5F0EB]/40">catalystbybuddhika@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F5F0EB] mb-1">Hours</h4>
                  <p className="text-sm text-[#F5F0EB]/40">Monday to Saturday: 9:00 AM to 7:00 PM</p>
                  <p className="text-sm text-[#F5F0EB]/40">Sunday: By appointment only</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a href="https://www.facebook.com/CatalystSalon/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center hover:bg-[#C9A96E]/20 transition">
                <svg className="w-5 h-5 text-[#C9A96E]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://wa.me/94771780811" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center hover:bg-[#C9A96E]/20 transition">
                <svg className="w-5 h-5 text-[#C9A96E]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#C9A96E]/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4!2d79.8934703!3d7.0699303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMTEuNyJOIDc5wrA1MyczNi41IkU!5e0!3m2!1sen!2slk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#C9A96E]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/catalyst/logo.jpg" alt="Catalyst By Buddhika" width={120} height={35} className="h-7 w-auto" />
          <p className="text-[#F5F0EB]/30 text-sm">
            &copy; 2025 Catalyst By Buddhika. All rights reserved.
          </p>
          <p className="text-[#F5F0EB]/20 text-xs">
            Website by <a href="https://moriahsystems.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A96E]/40 hover:text-[#C9A96E] transition">Moriah Systems</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
