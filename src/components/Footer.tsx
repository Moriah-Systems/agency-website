import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/5">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start leading-none mb-4">
              <span className="gold-shimmer font-heading text-xl tracking-[0.15em] font-normal">MORIAH</span>
              <span className="text-white/50 text-[10px] tracking-[0.35em] font-light uppercase mt-0.5">Systems</span>
            </div>
            <p className="text-muted/70 text-sm leading-relaxed font-light">
              Building digital solutions that elevate your business. From websites to custom software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-5">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted/60 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-5">Services</h4>
            <ul className="space-y-2">
              {["Website Development", "Maintenance & Hosting", "Content & SEO", "Custom Software"].map((item) => (
                <li key={item} className="text-muted/60 text-sm font-light">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-muted font-light text-xs uppercase tracking-[0.2em] mb-5">Get in Touch</h4>
            <ul className="space-y-2 text-muted/60 text-sm font-light">
              <li>contact@moriahsystems.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/40 text-sm font-light">
            &copy; {new Date().getFullYear()} Moriah Systems. All rights reserved.
          </p>
          <p className="text-muted/30 text-xs font-light tracking-wide">
            Built with precision. Maintained with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
