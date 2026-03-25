import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, hosting, SEO, and custom software solutions for your business.",
};

/* ── Visual illustrations for each service ── */

function WebDevVisual() {
  return (
    <div className="w-full max-w-sm">
      {/* Browser chrome */}
      <div className="rounded-xl border border-gold/15 bg-black/40 overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gold/10 bg-black/60">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-3 h-5 bg-white/5 rounded-md" />
        </div>
        <div className="p-5 space-y-4">
          {/* Nav */}
          <div className="flex items-center justify-between">
            <div className="w-16 h-3 bg-gold/20 rounded" />
            <div className="flex gap-3">
              <div className="w-10 h-2 bg-white/10 rounded" />
              <div className="w-10 h-2 bg-white/10 rounded" />
              <div className="w-10 h-2 bg-white/10 rounded" />
            </div>
          </div>
          {/* Hero */}
          <div className="bg-gradient-to-r from-gold/8 to-gold/3 rounded-lg p-4 space-y-2">
            <div className="w-3/4 h-4 bg-gold/20 rounded" />
            <div className="w-1/2 h-3 bg-white/8 rounded" />
            <div className="w-20 h-6 bg-gold/25 rounded-md mt-3" />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-md p-2.5 space-y-1.5">
                <div className="w-6 h-6 bg-gold/15 rounded-md" />
                <div className="w-full h-2 bg-white/8 rounded" />
                <div className="w-2/3 h-2 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HostingVisual() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Server panel */}
      <div className="rounded-xl border border-gold/15 bg-black/40 p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-light text-gold-muted tracking-[0.2em] uppercase">Server Status</span>
          <span className="flex items-center gap-1.5 text-[10px] text-green-400/80 font-light">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Online
          </span>
        </div>
        {/* Uptime bar */}
        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-[10px] text-muted/50 mb-1">
              <span>Uptime</span>
              <span>99.9%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[99.9%] bg-gradient-to-r from-gold/40 to-gold/60 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-muted/50 mb-1">
              <span>Response Time</span>
              <span>42ms</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[15%] bg-gradient-to-r from-green-500/40 to-green-500/60 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-muted/50 mb-1">
              <span>CPU Usage</span>
              <span>12%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[12%] bg-gradient-to-r from-blue-500/40 to-blue-500/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Backups", value: "Daily" },
          { label: "SSL", value: "Active" },
          { label: "CDN", value: "Global" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-gold/10 bg-black/40 p-3 text-center">
            <div className="text-xs font-light text-white/70">{stat.value}</div>
            <div className="text-[9px] text-muted/40 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SEOVisual() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Search bar */}
      <div className="rounded-xl border border-gold/15 bg-black/40 p-5 shadow-2xl">
        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 mb-4 border border-white/10">
          <svg className="w-4 h-4 text-muted/40 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="text-xs text-white/40 font-light">your business near me</span>
        </div>
        {/* Search results */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-gold/5 rounded-lg p-3 border border-gold/15">
            <span className="text-gold-muted text-xs font-light mt-0.5">#1</span>
            <div className="flex-1">
              <div className="w-3/4 h-3 bg-gold/25 rounded mb-1.5" />
              <div className="w-full h-2 bg-white/8 rounded" />
              <div className="w-2/3 h-2 bg-white/5 rounded mt-1" />
            </div>
          </div>
          <div className="flex items-start gap-3 opacity-40 p-3">
            <span className="text-muted/50 text-xs font-light mt-0.5">#2</span>
            <div className="flex-1">
              <div className="w-2/3 h-3 bg-white/10 rounded mb-1.5" />
              <div className="w-full h-2 bg-white/5 rounded" />
            </div>
          </div>
          <div className="flex items-start gap-3 opacity-25 p-3">
            <span className="text-muted/50 text-xs font-light mt-0.5">#3</span>
            <div className="flex-1">
              <div className="w-1/2 h-3 bg-white/10 rounded mb-1.5" />
              <div className="w-3/4 h-2 bg-white/5 rounded" />
            </div>
          </div>
        </div>
      </div>
      {/* Analytics mini chart */}
      <div className="rounded-lg border border-gold/10 bg-black/40 p-3 flex items-end justify-between gap-1.5 h-16">
        {[30, 45, 35, 55, 50, 65, 60, 75, 70, 85, 80, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-gold/30 to-gold/10 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function CustomSoftwareVisual() {
  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-gold/15 bg-black/40 overflow-hidden shadow-2xl">
        {/* Editor tab bar */}
        <div className="flex items-center gap-0 border-b border-gold/10 bg-black/60">
          <div className="px-4 py-2 text-[10px] text-gold-muted font-light border-b border-gold/30 bg-black/40">app.tsx</div>
          <div className="px-4 py-2 text-[10px] text-muted/30 font-light">api.ts</div>
          <div className="px-4 py-2 text-[10px] text-muted/30 font-light">db.ts</div>
        </div>
        {/* Code lines */}
        <div className="p-4 space-y-1.5 font-mono">
          {[
            { num: "1", indent: 0, segments: [{ w: "w-12", c: "bg-purple-400/30" }, { w: "w-20", c: "bg-blue-400/20" }] },
            { num: "2", indent: 1, segments: [{ w: "w-16", c: "bg-green-400/20" }, { w: "w-24", c: "bg-white/8" }] },
            { num: "3", indent: 2, segments: [{ w: "w-10", c: "bg-gold/25" }, { w: "w-16", c: "bg-white/8" }, { w: "w-8", c: "bg-cyan-400/20" }] },
            { num: "4", indent: 2, segments: [{ w: "w-14", c: "bg-orange-400/20" }, { w: "w-20", c: "bg-white/8" }] },
            { num: "5", indent: 1, segments: [{ w: "w-6", c: "bg-purple-400/30" }] },
            { num: "6", indent: 0, segments: [] },
            { num: "7", indent: 0, segments: [{ w: "w-16", c: "bg-purple-400/30" }, { w: "w-14", c: "bg-gold/25" }] },
            { num: "8", indent: 1, segments: [{ w: "w-20", c: "bg-green-400/20" }, { w: "w-10", c: "bg-white/8" }] },
          ].map((line) => (
            <div key={line.num} className="flex items-center gap-3">
              <span className="text-[10px] text-muted/20 w-4 text-right shrink-0">{line.num}</span>
              <div className="flex items-center gap-1.5" style={{ paddingLeft: `${line.indent * 12}px` }}>
                {line.segments.map((seg, i) => (
                  <div key={i} className={`h-2.5 ${seg.w} ${seg.c} rounded-sm`} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Terminal */}
        <div className="border-t border-gold/10 bg-black/60 p-3">
          <div className="flex items-center gap-2 text-[10px] font-light">
            <span className="text-green-400/60">$</span>
            <span className="text-muted/40">build successful</span>
            <span className="text-green-400/50">&#10003;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const serviceVisuals = [WebDevVisual, HostingVisual, SEOVisual, CustomSoftwareVisual];

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
              <div className={`card-premium rounded-2xl p-8 lg:p-12 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {(() => { const Visual = serviceVisuals[index]; return <Visual />; })()}
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
