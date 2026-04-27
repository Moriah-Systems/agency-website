"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "+94778989111";
const PHONE_DISPLAY = "077 898 9111";
const LANDLINE = "+94114506341";
const LANDLINE_DISPLAY = "011 450 6341";
const WHATSAPP_NUMBER = "94717981796";
const WHATSAPP_DISPLAY = "071 798 1796";

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const navLinks = [
  { href: "#phones", label: "Phones" },
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#latest", label: "Latest" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || open ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.85)",
          borderBottom: "1px solid rgba(31, 41, 55, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 6px 24px -12px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-[68px] md:h-[84px] flex items-center justify-between gap-2 sm:gap-3">
          <a href="#top" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink" onClick={close}>
            <Image
              src="/tmobile-ja-ela/logo.jpg"
              alt="Tmobile Phone Shop Ja-Ela"
              width={96}
              height={96}
              className="h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="tm-display text-sm sm:text-base md:text-xl font-700 tracking-tight whitespace-nowrap" style={{ color: "#E11D2E" }}>
                Tmobile<span style={{ color: "#1F2937" }}> Phone Shop</span>
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.22em]" style={{ color: "#64748B" }}>
                Ja-Ela
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" style={{ color: "#334155" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#E11D2E] transition">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Call us"
              className="hidden md:inline-flex w-11 h-11 rounded-full items-center justify-center border transition hover:bg-[#FEF2F2]"
              style={{ borderColor: "rgba(225, 29, 46, 0.25)", color: "#E11D2E" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>

            <a
              href={wa("Hi! I saw your website and I'd like to make an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className="sm:hidden inline-flex w-11 h-11 rounded-full items-center justify-center text-white transition hover:opacity-95 shrink-0"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 6px 16px -6px rgba(37, 211, 102, 0.55)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>

            <a
              href={wa("Hi! I saw your website and I'd like to make an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 md:px-5 py-2.5 rounded-full text-white transition hover:opacity-95"
              style={{
                background: "linear-gradient(135deg, #E11D2E 0%, #B91C1C 100%)",
                boxShadow: "0 8px 20px -8px rgba(225, 29, 46, 0.55)",
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Visit Us
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex w-11 h-11 rounded-full items-center justify-center border transition shrink-0"
              style={{
                borderColor: open ? "rgba(225, 29, 46, 0.4)" : "rgba(31, 41, 55, 0.12)",
                background: open ? "rgba(225, 29, 46, 0.06)" : "white",
                color: open ? "#E11D2E" : "#1F2937",
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 17.25h16.5" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            className="lg:hidden absolute top-full inset-x-0 border-t"
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderTopColor: "rgba(31, 41, 55, 0.06)",
              boxShadow: "0 24px 60px -20px rgba(0,0,0,0.18)",
              maxHeight: "calc(100vh - 68px)",
              overflowY: "auto",
            }}
          >
            <nav className="px-4 pt-3 pb-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl transition hover:bg-[#FEF2F2]"
                  style={{ color: "#1F2937" }}
                >
                  <span className="text-base font-medium">{link.label}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#94A3B8" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              ))}
            </nav>

            <div className="px-4 py-4 border-t" style={{ borderTopColor: "rgba(31, 41, 55, 0.06)" }}>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "#64748B" }}>
                Get in touch
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={close}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #E11D2E, #B91C1C)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call
                </a>
                <a
                  href={wa("Hi! I'd like to inquire about a phone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-1.5 text-xs" style={{ color: "#64748B" }}>
                <div className="flex items-center justify-between">
                  <span>Mobile · {PHONE_DISPLAY}</span>
                  <span className="font-semibold" style={{ color: "#10B981" }}>Open until 8 PM</span>
                </div>
                <div>Landline · {LANDLINE_DISPLAY}</div>
                <div>WhatsApp · {WHATSAPP_DISPLAY}</div>
              </div>
            </div>
          </div>
        )}
      </header>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: "rgba(15, 23, 42, 0.4)", top: "68px" }}
          onClick={close}
          aria-hidden
        />
      )}
    </>
  );
}
