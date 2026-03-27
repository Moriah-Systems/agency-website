import Image from "next/image";

export const metadata = { title: "Port of Pool Club | Colombo's Premier Billiards & Pool Venue" };

export default function PortOfPoolClub() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: "#0A0A0A", color: "#F5F0EB" }}>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#D4AF37]/40 bg-[#166534]/20 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
              PP
            </div>
            <span className="text-sm md:text-base font-medium tracking-wide text-[#F5F0EB]">
              Port of Pool <span className="text-[#F5F0EB]/40 font-light">Club</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-[#F5F0EB]/60">
            <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition">Gallery</a>
            <a href="#amenities" className="hover:text-[#D4AF37] transition">Amenities</a>
            <a href="#pricing" className="hover:text-[#D4AF37] transition">Pricing</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/94000000000" target="_blank" rel="noopener noreferrer" className="md:hidden w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#booking" className="bg-gradient-to-r from-[#D4AF37] to-[#B8963E] text-[#0A0A0A] text-xs md:text-sm px-4 md:px-6 py-2 rounded-sm hover:opacity-90 transition font-semibold tracking-wide">
              Book a Table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-14 md:pt-16 min-h-[70vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/port-of-pool/hero.webp"
            alt="Port of Pool Club interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] md:text-xs font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-sm mb-4 md:mb-8 tracking-[0.2em] uppercase">
              &#127931; Colombo&apos;s Premier Pool Destination
            </div>
            <h1 className="text-4xl md:text-7xl font-light mb-3 md:mb-6 leading-tight tracking-wide">
              Where <span className="font-semibold" style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Champions</span>
              <br />Play
            </h1>
            <p className="text-[#F5F0EB]/50 text-sm md:text-lg mb-2 md:mb-3 max-w-lg leading-relaxed">
              Step into Colombo&apos;s most vibrant billiards and pool club. Professional tables, electric atmosphere, and a community that lives for the game.
            </p>
            <div className="inline-flex items-center gap-2 mb-5 md:mb-10">
              <span className="w-8 border-t border-[#D4AF37]/40" />
              <span className="text-[#D4AF37]/60 text-xs italic tracking-widest">&ldquo;Stroke it Don&apos;t Poke It&rdquo;</span>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#booking" className="bg-gradient-to-r from-[#D4AF37] to-[#B8963E] text-[#0A0A0A] px-6 md:px-10 py-3 md:py-3.5 rounded-sm text-xs md:text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition">
                Book a Table
              </a>
              <a href="#gallery" className="border border-[#D4AF37]/30 text-[#D4AF37] px-5 md:px-8 py-3 md:py-3.5 rounded-sm text-xs md:text-sm font-medium tracking-wider uppercase hover:bg-[#D4AF37]/5 transition">
                View Gallery
              </a>
            </div>
          </div>
        </div>
        {/* Floating badge — desktop only */}
        <div className="absolute bottom-10 right-12 hidden md:block">
          <div className="bg-[#111]/90 border border-[#D4AF37]/20 rounded-xl p-4 backdrop-blur-sm text-center">
            <div className="text-2xl font-bold text-[#D4AF37]">4.8</div>
            <div className="flex gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <div className="text-[#F5F0EB]/40 text-[10px] mt-1">Rated by Players</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-16 border-y border-[#D4AF37]/10" style={{ background: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
          {[
            { value: "12+", label: "Pool Tables" },
            { value: "6+", label: "Years Open" },
            { value: "500+", label: "Regular Members" },
            { value: "30+", label: "Tournaments Hosted" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-4xl font-light tracking-wide" style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[#F5F0EB]/40 mt-2 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/10">
              <Image src="/port-of-pool/about.webp" alt="Port of Pool Club interior" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#131313] border border-[#D4AF37]/20 rounded-xl p-3 md:p-4 shadow-2xl">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#166534] to-[#14532d] flex items-center justify-center text-[#D4AF37] text-base">
                  &#127381;
                </div>
                <div>
                  <div className="text-xs md:text-sm font-medium text-[#F5F0EB]">Events & Tournaments</div>
                  <div className="text-[10px] md:text-xs text-[#D4AF37]/70">Hosted year-round</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Our Story</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 mb-4 md:mb-6 tracking-wide leading-snug">
              Colombo&apos;s Most Exciting<br />
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Billiards Destination</span>
            </h2>
            <p className="text-[#F5F0EB]/55 leading-relaxed mb-4 text-sm md:text-base">
              Port of Pool Club was built for one purpose — to give pool and billiards players in Colombo a world-class venue to play, compete, and connect. From casual evenings with friends to serious league tournaments, we&apos;ve got a table ready for you.
            </p>
            <p className="text-[#F5F0EB]/40 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Our venue features professionally maintained tables, mood lighting, and an atmosphere that makes every shot feel like it counts. Whether you&apos;re a beginner picking up a cue for the first time or a seasoned player chasing the championship — Port of Pool is your place.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Professional Tables", "Competitive Events", "Social Lounge", "Gaming Zone"].map((tag) => (
                <span key={tag} className="border border-[#D4AF37]/20 text-[#D4AF37]/70 text-[10px] md:text-xs px-3 py-1.5 rounded-sm tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10 md:py-24 px-4 md:px-6" style={{ background: "#080808" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-14">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Inside The Club</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">The Atmosphere</h2>
            <p className="text-[#F5F0EB]/40 mt-2 md:mt-4 text-sm md:text-base max-w-md mx-auto">See the tables, the crowd, and the energy that makes Port of Pool Club the talk of Colombo.</p>
          </div>
          {/* Mobile: clean 2-col grid, no spanning. Desktop: 3-col with featured spans */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {[
              { src: "/port-of-pool/hero.webp",      alt: "Pool room interior",                span: "" },
              { src: "/port-of-pool/action1.webp",   alt: "Game in action",                    span: "" },
              { src: "/port-of-pool/gallery1.webp",  alt: "Players competing",                 span: "" },
              { src: "/port-of-pool/community.webp", alt: "Group of players at the club",      span: "" },
              { src: "/port-of-pool/action2.webp",   alt: "Concentrated shot in play",         span: "" },
              { src: "/port-of-pool/interior.webp",  alt: "Pool table with signature branding",span: "" },
              { src: "/port-of-pool/gallery2.webp",  alt: "Elegant table setup",               span: "" },
              { src: "/port-of-pool/events.webp",    alt: "Group event at Port of Pool",       span: "" },
              { src: "/port-of-pool/gaming.webp",    alt: "Gaming zone at the club",           span: "hidden md:block" },
            ].map((img) => (
              <div key={img.src} className={`group relative rounded-lg md:rounded-xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 ${img.span}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-full h-36 sm:h-44 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <p className="text-xs text-[#F5F0EB]/80">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-10 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-14">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">What We Offer</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">Club Amenities</h2>
            <p className="text-[#F5F0EB]/40 mt-2 md:mt-4 text-sm max-w-md mx-auto">Everything you need for the perfect session — from tables to entertainment.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: "&#127381;", name: "Pool Tables", desc: "Professionally maintained full-size pool tables with premium felt and lighting" },
              { icon: "&#127379;", name: "Snooker Tables", desc: "Full-size snooker tables for serious competitive play and practice" },
              { icon: "&#127918;", name: "Gaming Zone", desc: "FIFA and arcade gaming stations for when you want a break from the cue" },
              { icon: "&#127942;", name: "Tournaments & Events", desc: "Regular competitions, league nights, and special events throughout the year" },
              { icon: "&#127775;", name: "Social Lounge", desc: "Chill-out area to hang with friends, watch matches, and enjoy the vibe" },
              { icon: "&#127891;", name: "Coaching Available", desc: "Learn from experienced players — beginner lessons and advanced coaching sessions" },
            ].map((item) => (
              <div key={item.name} className="group bg-[#111] border border-[#D4AF37]/10 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/30 hover:bg-[#131313] transition-all duration-300">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="font-medium text-sm md:text-base tracking-wide text-[#F5F0EB] mb-2">{item.name}</h3>
                <p className="text-xs md:text-sm text-[#F5F0EB]/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-10 md:py-24 px-4 md:px-6" style={{ background: "#080808" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-14">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Simple & Affordable</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">Table Rates</h2>
            <p className="text-[#F5F0EB]/40 mt-3 md:mt-4 text-sm max-w-md mx-auto">Straightforward pricing — no hidden fees. Just pick up a cue and play.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                name: "Per Hour",
                price: "Rs. 300",
                per: "/ hour",
                highlight: false,
                features: ["1–2 players", "Any available table", "Walk-in welcome", "All equipment included"],
              },
              {
                name: "Group Package",
                price: "Rs. 1,200",
                per: "/ 4 hrs",
                highlight: true,
                features: ["Up to 6 players", "Reserved table", "Discounted hourly rate", "Great for groups & parties"],
              },
              {
                name: "Tournament Entry",
                price: "Rs. 500",
                per: "/ entry",
                highlight: false,
                features: ["Competitive format", "Prize pool available", "All skill levels", "Registration required"],
              },
            ].map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-5 md:p-7 border transition-all duration-300 ${plan.highlight ? "border-[#D4AF37]/40 bg-gradient-to-b from-[#166534]/10 to-[#111]" : "border-[#D4AF37]/10 bg-[#111] hover:border-[#D4AF37]/25"}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#B8963E] text-[#0A0A0A] text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <div className="mb-5 md:mb-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[#F5F0EB]/50 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-semibold text-[#F5F0EB]">{plan.price}</span>
                    <span className="text-xs text-[#F5F0EB]/40">{plan.per}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6 md:mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs md:text-sm text-[#F5F0EB]/60">
                      <span className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: plan.highlight ? "#D4AF37" : "#D4AF3740" }}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke={plan.highlight ? "#D4AF37" : "#D4AF3799"} strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`block text-center py-3 rounded-lg text-xs font-semibold tracking-widest uppercase transition ${plan.highlight ? "bg-gradient-to-r from-[#D4AF37] to-[#B8963E] text-[#0A0A0A] hover:opacity-90" : "border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"}`}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-14">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">What Players Say</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">From Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Kasun Perera", role: "Regular Member", review: "Best pool venue in Colombo, no question. The tables are always in perfect condition, lighting is great, and the crowd is friendly. Come here almost every weekend." },
              { name: "Dilshan Fernando", role: "Tournament Player", review: "Competed in three tournaments here and the experience keeps getting better. Well organised, great prizes, and the atmosphere on tournament nights is electric." },
              { name: "Nishani Wijesinghe", role: "Casual Player", review: "Brought my friends here for a birthday outing and we had a blast. The gaming zone is a nice bonus. Super chill place and very affordable for a full evening out." },
            ].map((t) => (
              <div key={t.name} className="bg-[#111] border border-[#D4AF37]/10 rounded-xl p-5 md:p-6 hover:border-[#D4AF37]/25 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-[#F5F0EB]/55 text-sm leading-relaxed mb-5 italic">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#166534]/30 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#F5F0EB]">{t.name}</div>
                    <div className="text-[10px] text-[#D4AF37]/60 tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-10 md:py-24 px-4 md:px-6" style={{ background: "#080808" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Reserve Your Spot</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 tracking-wide">Book a Table</h2>
            <p className="text-[#F5F0EB]/40 mt-3 text-sm max-w-sm mx-auto">Tap your booking type and we&apos;ll open WhatsApp with everything ready — just hit send.</p>
          </div>

          {/* Quick-tap booking options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            {[
              {
                icon: "&#127381;",
                name: "Per Hour",
                desc: "1–2 players · Walk-in or reserved",
                msg: "Hi Port of Pool Club! I'd like to book a table per hour. Please let me know availability. 🎱",
              },
              {
                icon: "&#128101;",
                name: "Group Package",
                desc: "Up to 6 players · Great for hangouts",
                msg: "Hi Port of Pool Club! We're a group and would like to book the group package. Please let me know the details. 🎱",
              },
              {
                icon: "&#127942;",
                name: "Tournament / Event",
                desc: "Competitive entry · Private events",
                msg: "Hi Port of Pool Club! I'm interested in joining a tournament or booking for a private event. Please send me more info. 🎱",
              },
            ].map((opt) => (
              <a
                key={opt.name}
                href={`https://wa.me/94000000000?text=${encodeURIComponent(opt.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 bg-[#111] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:bg-[#131313] rounded-2xl p-5 transition-all duration-300"
              >
                <div className="text-2xl" dangerouslySetInnerHTML={{ __html: opt.icon }} />
                <div>
                  <div className="font-semibold text-sm text-[#F5F0EB] mb-1">{opt.name}</div>
                  <div className="text-xs text-[#F5F0EB]/40 leading-relaxed">{opt.desc}</div>
                </div>
                <div className="mt-auto flex items-center gap-2 text-[#25D366] text-xs font-medium">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book via WhatsApp
                </div>
              </a>
            ))}
          </div>

          {/* Or just chat */}
          <div className="text-center">
            <p className="text-[#F5F0EB]/30 text-xs mb-3">or just say hi</p>
            <a
              href={`https://wa.me/94000000000?text=${encodeURIComponent("Hi Port of Pool Club! I'd like to make a booking 🎱")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#166534]/20 border border-[#25D366]/30 hover:bg-[#166534]/30 transition rounded-xl px-6 py-4"
            >
              <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-sm font-medium text-[#F5F0EB]">Open WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">Find Us</span>
            <h2 className="text-2xl md:text-4xl font-light mt-2 md:mt-3 mb-6 md:mb-8 tracking-wide">Visit the Club</h2>
            <div className="space-y-5 md:space-y-6">
              {[
                {
                  icon: <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>,
                  title: "Location",
                  lines: ["Colombo, Sri Lanka"],
                },
                {
                  icon: <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>,
                  title: "Phone & WhatsApp",
                  lines: ["Call us to book or enquire"],
                },
                {
                  icon: <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
                  title: "Opening Hours",
                  lines: ["Daily: 10:00 AM – 12:00 Midnight"],
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#F5F0EB] mb-1">{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-[#F5F0EB]/40">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 bg-[#166534]/20 border border-[#166534]/40 hover:bg-[#166534]/30 transition rounded-xl px-5 py-4 w-full md:w-auto"
            >
              <svg className="w-6 h-6 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <div>
                <div className="text-sm font-semibold text-[#F5F0EB]">Chat on WhatsApp</div>
                <div className="text-xs text-[#F5F0EB]/40">Quick replies, bookings, and enquiries</div>
              </div>
              <svg className="w-4 h-4 text-[#F5F0EB]/30 ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </a>

            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/Portofpoollk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37]/20 transition">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/10 h-[300px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.87083764862!2d79.7964979!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1"
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
      <footer className="py-8 md:py-10 px-4 md:px-6 border-t border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border border-[#D4AF37]/40 bg-[#166534]/20 flex items-center justify-center text-[#D4AF37] font-bold text-[10px]">PP</div>
            <span className="text-sm font-medium text-[#F5F0EB]/60">Port of Pool Club</span>
          </div>
          <p className="text-[#F5F0EB]/25 text-xs">
            &copy; 2025 Port of Pool Club. All rights reserved.
          </p>
          <p className="text-[#F5F0EB]/20 text-xs">
            Website by{" "}
            <a href="https://moriahsystems.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37]/40 hover:text-[#D4AF37] transition">
              Moriah Systems
            </a>
          </p>
        </div>
      </footer>

    </div>
  );
}
