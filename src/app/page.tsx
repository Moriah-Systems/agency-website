import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Professional, responsive websites built with modern technology. Fast, secure, and optimized for search engines.",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Maintenance & Hosting",
    description: "Your site stays online, fast, and secure. We handle hosting, updates, security patches, and performance monitoring.",
    icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z",
  },
  {
    title: "Content & SEO",
    description: "Get found on Google. We create optimized content, blog posts, and SEO strategies that drive real traffic to your business.",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    title: "Custom Software",
    description: "Need more than a website? We build custom applications, management systems, and digital tools tailored to your business.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 hero-grid" />

        {/* Primary radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,155,45,0.08) 0%, rgba(184,155,45,0.03) 40%, transparent 70%)" }}
        />

        {/* Floating orbs */}
        <div
          className="hero-orb w-[300px] h-[300px] top-[10%] left-[5%]"
          style={{ background: "radial-gradient(circle, rgba(184,155,45,0.04) 0%, transparent 70%)" }}
        />
        <div
          className="hero-orb w-[200px] h-[200px] bottom-[15%] right-[10%]"
          style={{ background: "radial-gradient(circle, rgba(184,155,45,0.05) 0%, transparent 70%)", animationDelay: "-7s", animationDuration: "25s" }}
        />
        <div
          className="hero-orb w-[150px] h-[150px] top-[60%] left-[65%]"
          style={{ background: "radial-gradient(circle, rgba(184,155,45,0.03) 0%, transparent 70%)", animationDelay: "-13s", animationDuration: "18s" }}
        />

        {/* Geometric accent rings */}
        <div className="hero-geo-ring w-[500px] h-[500px] top-1/2 left-1/2" style={{ animationDirection: "reverse" }} />
        <div className="hero-geo-ring w-[700px] h-[700px] top-1/2 left-1/2" />

        {/* Particle dots */}
        <div className="hero-particle left-[15%] bottom-0" style={{ animationDuration: "12s", animationDelay: "0s" }} />
        <div className="hero-particle left-[30%] bottom-0" style={{ animationDuration: "15s", animationDelay: "-3s" }} />
        <div className="hero-particle left-[50%] bottom-0" style={{ animationDuration: "10s", animationDelay: "-7s" }} />
        <div className="hero-particle left-[70%] bottom-0" style={{ animationDuration: "14s", animationDelay: "-2s" }} />
        <div className="hero-particle left-[85%] bottom-0" style={{ animationDuration: "11s", animationDelay: "-5s" }} />
        <div className="hero-particle left-[25%] bottom-0" style={{ animationDuration: "16s", animationDelay: "-9s" }} />
        <div className="hero-particle left-[60%] bottom-0" style={{ animationDuration: "13s", animationDelay: "-4s" }} />
        <div className="hero-particle left-[42%] bottom-0" style={{ animationDuration: "17s", animationDelay: "-11s" }} />

        {/* Edge lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

        {/* Angled accent lines */}
        <div
          className="absolute top-[20%] left-0 w-[1px] h-[200px] origin-top"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(184,155,45,0.15), transparent)", transform: "rotate(15deg)" }}
        />
        <div
          className="absolute top-[30%] right-0 w-[1px] h-[200px] origin-top"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(184,155,45,0.1), transparent)", transform: "rotate(-15deg)" }}
        />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="overline-decorated mb-8 animate-fade-up">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Moriah Systems</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-wide leading-[1.15] mb-8 animate-fade-up-delay-1">
            <span className="block text-white">Your business</span>
            <span className="block gold-shimmer mt-3">deserves to be found.</span>
          </h1>

          <p className="text-muted/80 text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed font-light animate-fade-up-delay-2">
            We design, build, and maintain websites and software that bring real customers to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up-delay-3">
            <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="link-underline inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-light py-4">
              See Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
          <span className="text-muted/40 text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
          <div className="scroll-indicator">
            <svg className="w-4 h-4 text-gold/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="section-divider" />
      <section className="py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="overline-decorated mb-6">
              <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">What We Do</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-premium p-8 rounded-xl group cursor-default scroll-reveal">
                <div className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center mb-6 icon-glow">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-heading font-normal text-xl mb-3 tracking-wide">{service.title}</h3>
                <p className="text-muted/70 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="overline-decorated mb-6">
              <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Our Work</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide">Featured Project</h2>
          </div>
          <div className="card-premium rounded-2xl overflow-hidden scroll-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light mb-4">Case Study</span>
                <h3 className="font-heading text-2xl md:text-3xl font-light tracking-wide mb-4">Dimuthu Electronics</h3>
                <p className="text-muted/70 leading-relaxed mb-6 font-light">
                  A complete digital solution for a leading electronics retailer. Professional website with product showcase,
                  appointment booking, customer reviews, and a full desktop inventory management application.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "React", "Tailwind CSS", "Supabase", "Electron"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-light bg-black/30 text-gold-muted border border-gold/10 rounded-full tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href="/portfolio" className="link-underline inline-flex items-center gap-2 font-light text-sm tracking-wide">
                  View Full Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gold/5 to-gold/10 p-8 lg:p-14 flex items-center justify-center min-h-[300px]">
                <div className="w-full max-w-md bg-black/50 rounded-xl border border-gold/10 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gold/15 rounded w-3/4" />
                    <div className="h-3 bg-gold/8 rounded w-full" />
                    <div className="h-3 bg-gold/8 rounded w-5/6" />
                    <div className="h-8 bg-gold/15 rounded w-1/3 mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide mb-8">
            Ready to Take Your Business <span className="gold-shimmer">Online?</span>
          </h2>
          <p className="text-muted/70 text-base md:text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Your competitors are already online. Don&apos;t let potential customers find them instead of you.
            Let&apos;s build something great together.
          </p>
          <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
