import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See our work. Professional websites and software solutions built for real businesses.",
};

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center subpage-hero-content">
          <div className="overline-decorated mb-6">
            <span className="text-gold-muted text-xs tracking-[0.3em] uppercase font-light">Our Work</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide mb-8">Portfolio</h1>
          <p className="text-muted/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Real solutions for real businesses. Every project is built with precision,
            speed, and attention to detail.
          </p>
        </div>
      </section>

      {/* Dimuthu Electronics Case Study */}
      <section className="pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-premium rounded-2xl overflow-hidden scroll-reveal">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-gold/5 to-gold/10 p-8 lg:p-12 border-b border-gold/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <span className="inline-block px-4 py-1.5 text-xs font-light bg-gold/10 text-gold-muted border border-gold/15 rounded-full tracking-[0.15em] uppercase mb-4">
                    Featured Project
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide">Dimuthu Electronics</h2>
                  <p className="text-muted/60 mt-2 font-light">Full Digital Transformation: Website + Desktop Application</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Electron"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-light bg-black/30 text-gold-muted border border-gold/10 rounded-full tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Screenshots */}
            <div className="p-8 lg:p-12 border-b border-gold/10">
              <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-6">Screenshots</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { src: "/projects/dimuthu-electronics.png", alt: "Homepage — hero section and storefront" },
                  { src: "/projects/dimuthu-products.png", alt: "Products — catalog with pricing" },
                  { src: "/projects/dimuthu-booking.png", alt: "Book Appointment — scheduling form" },
                  { src: "/projects/dimuthu-reviews.png", alt: "Reviews — Google reviews integration" },
                  { src: "/projects/dimuthu-electronics2.png", alt: "Workshop — video reels gallery" },
                  { src: "/projects/dimuthu-desktop-app.png", alt: "Desktop App — business manager dashboard" },
                ].map((img) => (
                  <div key={img.src} className="group relative rounded-lg overflow-hidden border border-gold/10 bg-black/30">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={800}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-light text-white/80">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Overview */}
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <h3 className="font-heading text-xl font-normal mb-3 text-gold-muted tracking-wide">The Challenge</h3>
                    <p className="text-muted/80 leading-relaxed font-light">
                      Dimuthu Electronics, a leading electronics retailer, needed a complete digital presence.
                      They had no website, no online product catalog, and managed their inventory manually.
                      They needed to be found by customers online and streamline their business operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-normal mb-3 text-gold-muted tracking-wide">The Solution</h3>
                    <p className="text-muted/80 leading-relaxed font-light">
                      We delivered a comprehensive digital solution in record time:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Professional website with product showcase and service listings",
                        "Online appointment booking system for customers",
                        "Customer review and rating system",
                        "SEO optimization for local search visibility",
                        "Desktop inventory management application with Electron",
                        "Real-time database integration with Supabase",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted/60 text-sm font-light">
                          <svg className="w-4 h-4 text-gold-muted shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-normal mb-3 text-gold-muted tracking-wide">The Result</h3>
                    <p className="text-muted/80 leading-relaxed font-light">
                      Dimuthu Electronics went from zero online presence to a fully functional digital ecosystem.
                      Customers can now discover the business online, browse products, book appointments, and leave reviews.
                      The desktop app streamlines internal operations and inventory management.
                    </p>
                  </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                  <div className="card-premium rounded-xl p-6">
                    <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-5">Project Details</h4>
                    <dl className="space-y-4">
                      {[
                        { label: "Client", value: "Dimuthu Electronics" },
                        { label: "Industry", value: "Electronics Retail" },
                        { label: "Deliverables", value: "Website + Desktop App" },
                        { label: "Timeline", value: "Rapid Delivery" },
                        { label: "Platform", value: "Web + Desktop" },
                      ].map((item) => (
                        <div key={item.label}>
                          <dt className="text-xs text-muted/50 uppercase tracking-[0.15em] font-light">{item.label}</dt>
                          <dd className="text-sm font-light mt-1 text-white/80">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="card-premium rounded-xl p-6">
                    <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-5">Key Pages</h4>
                    <ul className="space-y-2.5 text-sm text-muted/60 font-light">
                      {["Home", "Products", "Services", "Book Appointment", "Reviews", "Contact", "About"].map((page) => (
                        <li key={page} className="flex items-center gap-2.5">
                          <div className="w-1 h-1 bg-gold-muted rounded-full" />
                          {page}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Coming */}
      <div className="section-divider" />
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-8">More Projects Coming Soon</h2>
          <p className="text-muted/70 text-base md:text-lg mb-12 font-light leading-relaxed">
            We&apos;re building digital solutions for more businesses every month.
            Want to be our next success story?
          </p>
          <Link href="/contact" className="btn-premium px-12 py-4 text-xs tracking-[0.15em]">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
