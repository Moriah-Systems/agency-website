import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Moriah Systems, our mission, story, and why businesses trust us with their digital presence.",
};

const values = [
  {
    title: "Precision",
    description: "Every pixel matters. We build with meticulous attention to detail, ensuring your digital presence is polished and professional.",
    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Speed",
    description: "We deliver fast without cutting corners. What takes others weeks, we accomplish in days. Your time is valuable.",
    icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Reliability",
    description: "When we say your site will be online, it stays online. 24/7 monitoring, regular backups, and proactive maintenance.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Partnership",
    description: "We don't just build and leave. We become your long-term technology partner, growing alongside your business.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center subpage-hero-content">
          <div className="overline-decorated mb-6">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">About Us</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide mb-8">
            Built on Faith. Driven by Excellence.
          </h1>
          <p className="text-muted/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Named after Mount Moriah, the place of faith and the foundation
            of Solomon&apos;s temple. We build digital foundations for businesses with the same
            commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-premium rounded-2xl p-8 lg:p-14 scroll-reveal">
            <h2 className="font-heading text-2xl md:text-3xl font-light tracking-wide mb-8">Our Story</h2>
            <div className="space-y-5 text-muted/70 leading-relaxed font-light">
              <p>
                Moriah Systems was founded with a simple observation: too many businesses are invisible online.
                Restaurants with incredible food, shops with quality products, professionals with years of experience,
                all missing out because they don&apos;t have a digital presence.
              </p>
              <p>
                We saw an opportunity to change that. Using modern technology and smart development practices,
                we can deliver in days what traditionally takes weeks. Not by cutting corners,
                but by working smarter with the best tools available.
              </p>
              <p>
                Our mission is straightforward: bring businesses online with professional, fast, and affordable digital solutions.
                We handle the full stack (design, development, hosting, maintenance, content, SEO) so our clients
                can focus on what they do best: running their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Moriah */}
      <div className="section-divider" />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-heading text-2xl md:text-3xl font-light tracking-wide">Why &quot;Moriah&quot;?</h2>
          </div>
          <div className="card-premium rounded-2xl p-8 lg:p-14 border-gold/15 scroll-reveal">
            <p className="text-muted/70 leading-relaxed text-lg text-center font-light">
              Mount Moriah is where Abraham&apos;s faith was tested and proven.
              It&apos;s where Solomon built his temple, one of the most magnificent structures in history.
              The name represents <span className="text-gold font-normal">faith</span>,{" "}
              <span className="text-gold font-normal">foundation</span>, and{" "}
              <span className="text-gold font-normal">building something that endures</span>.
              That&apos;s exactly what we do for every client: build digital foundations that last.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <div className="section-divider" />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <div className="overline-decorated mb-6">
              <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">What Drives Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal">
            {values.map((value) => (
              <div key={value.title} className="card-premium p-8 rounded-xl text-center group cursor-default">
                <div className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 icon-glow">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-normal mb-3 tracking-wide">{value.title}</h3>
                <p className="text-muted/60 text-sm leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-8">Let&apos;s Build Together</h2>
          <p className="text-muted/70 text-base md:text-lg mb-12 font-light leading-relaxed">
            Your business deserves a strong digital foundation. Let&apos;s start building it today.
          </p>
          <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
