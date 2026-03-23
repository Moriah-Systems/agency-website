import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, hosting, SEO, and custom software solutions for your business.",
};

const services = [
  {
    title: "Website Development",
    description: "We design and build professional websites that look stunning on every device. Fast loading, SEO-friendly, and built with modern technology that scales with your business.",
    features: ["Custom responsive design", "Mobile-first approach", "Fast page load speeds", "SEO optimized structure", "Content management", "Analytics integration"],
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Maintenance & Hosting",
    description: "Your website needs to stay online, fast, and secure. We handle hosting, regular updates, security monitoring, and backups so you never have to worry about the technical side.",
    features: ["99.9% uptime guarantee", "Daily backups", "Security monitoring", "Regular updates", "Performance optimization", "SSL certificates"],
    icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z",
  },
  {
    title: "Content & SEO",
    description: "A beautiful website means nothing if no one can find it. We create optimized content and implement SEO strategies that get your business found on Google by the right customers.",
    features: ["Keyword research", "SEO-optimized blog posts", "Google Business Profile setup", "Monthly analytics reports", "Social media content", "Local SEO optimization"],
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    title: "Custom Software",
    description: "When off-the-shelf solutions don't cut it, we build custom applications tailored to your exact needs. Inventory systems, booking platforms, management dashboards. If you can imagine it, we can build it.",
    features: ["Desktop applications", "Inventory management", "Booking systems", "Custom dashboards", "Database design", "API development"],
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center subpage-hero-content">
          <div className="overline-decorated mb-6">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">What We Do</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide mb-8">Our Services</h1>
          <p className="text-muted/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Everything your business needs to establish and grow its digital presence,
            all handled by one team.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 border border-gold/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-light tracking-wide mb-4">{service.title}</h2>
                <p className="text-muted/80 leading-relaxed mb-6 font-light">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted/60 font-light">
                      <svg className="w-4 h-4 text-gold-muted shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`card-premium rounded-2xl p-12 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <svg className="w-24 h-24 text-gold/15" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-8">Need Something Specific?</h2>
          <p className="text-muted/70 text-base md:text-lg mb-12 font-light leading-relaxed">
            Every business is unique. Let&apos;s discuss your specific needs and build the right solution.
          </p>
          <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
