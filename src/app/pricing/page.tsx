import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for website development and monthly maintenance packages.",
};

const setupPackages = [
  {
    name: "Starter",
    price: "Rs. 49,000",
    usd: "$149",
    description: "Perfect for small businesses that need a professional online presence.",
    features: [
      "3-5 page website",
      "Mobile responsive design",
      "Contact form",
      "Location map integration",
      "Basic SEO setup",
      "Social media links",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "Rs. 95,000",
    usd: "$299",
    description: "For growing businesses that need more features and content.",
    features: [
      "5-10 page website",
      "Everything in Starter",
      "Blog/news section",
      "Product/service showcase",
      "Advanced SEO optimization",
      "Website analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Rs. 175,000+",
    usd: "$549+",
    description: "Custom websites and software tailored to your business needs.",
    features: [
      "Unlimited pages",
      "Everything in Business",
      "Custom functionality",
      "Booking/appointment system",
      "Database integration",
      "Desktop application",
      "Priority support",
    ],
    highlighted: false,
  },
];

const retainerPackages = [
  {
    name: "Basic Care",
    price: "Rs. 5,000",
    usd: "$19",
    period: "/month",
    features: [
      "Hosting & domain management",
      "SSL certificate",
      "Uptime monitoring",
      "Minor text & image updates",
      "Monthly backup",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "Rs. 12,000",
    usd: "$39",
    period: "/month",
    features: [
      "Everything in Basic Care",
      "2 SEO blog posts/month",
      "Website analytics report",
      "Performance optimization",
      "Security patches",
      "Priority email support",
    ],
  },
  {
    name: "Full Service",
    price: "Rs. 25,000",
    usd: "$79",
    period: "/month",
    features: [
      "Everything in Growth",
      "4 blog posts/month",
      "Monthly strategy call",
      "New feature additions",
      "Website redesign updates",
      "Same-day priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center subpage-hero-content">
          <div className="overline-decorated mb-6">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Pricing</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide mb-8">Transparent Pricing</h1>
          <p className="text-muted/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            No hidden fees. No surprises. Choose a setup package and a monthly retainer
            that fits your business.
          </p>
        </div>
      </section>

      {/* Setup Packages */}
      <section className="pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <div className="overline-decorated mb-6">
              <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">One-Time</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide">Website Setup</h2>
            <p className="text-muted/60 mt-4 font-light">One-time fee to design and build your website</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
            {setupPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative card-premium p-10 rounded-2xl flex flex-col ${
                  pkg.highlighted ? "scale-[1.02] border-gold/30" : ""
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold/15 text-gold text-xs font-light rounded-full uppercase tracking-[0.15em] border border-gold/20">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-normal mb-2 tracking-wide">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="font-heading text-3xl font-light text-gold">{pkg.price}</span>
                  <p className="text-muted/40 text-xs font-light mt-1">{pkg.usd} USD</p>
                </div>
                <p className="text-muted/60 text-sm mb-8 font-light leading-relaxed">{pkg.description}</p>
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-muted/60 font-light">
                      <svg className="w-4 h-4 text-gold-muted shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?package=${pkg.name}`}
                  className={`block text-center py-3.5 mt-10 text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                    pkg.highlighted
                      ? "btn-premium"
                      : "border border-white/10 text-muted/70 hover:border-gold/30 hover:text-gold"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Retainers */}
      <div className="section-divider" />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <div className="overline-decorated mb-6">
              <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Ongoing</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide">Monthly Retainer</h2>
            <p className="text-muted/60 mt-4 font-light">Ongoing care to keep your site running and growing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
            {retainerPackages.map((pkg) => (
              <div key={pkg.name} className="card-premium p-10 rounded-2xl flex flex-col">
                <h3 className="font-heading text-xl font-normal mb-2 tracking-wide">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="font-heading text-3xl font-light text-gold">{pkg.price}</span>
                  <span className="text-muted/50 text-sm font-light">{pkg.period}</span>
                  <p className="text-muted/40 text-xs font-light mt-1">{pkg.usd}{pkg.period} USD</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-muted/60 font-light">
                      <svg className="w-4 h-4 text-gold-muted shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-8">Not Sure Which Package?</h2>
          <p className="text-muted/70 text-base md:text-lg mb-12 font-light leading-relaxed">
            Every business is different. Contact us for a free consultation and
            we&apos;ll recommend the right package for your needs and budget.
          </p>
          <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
            Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
