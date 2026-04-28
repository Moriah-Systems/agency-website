import Image from "next/image";
import { Space_Grotesk, Inter } from "next/font/google";
import SmartMobileReels from "./SmartMobileReels";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Smart Mobile · Ja-Ela | Phones, Accessories, Repairs & Unlocking — Since 2009",
  description:
    "Ja-Ela's trusted phone shop since 2009. Genuine smartphones (Samsung, Apple, Honor & more), accessories, repairs and unlocking. 4.4★ on Google · Koko & Installment Plans · Open daily till 8 PM.",
};

const PHONE_NUMBER = "+94777969144";
const PHONE_DISPLAY = "077 796 9144";
const LANDLINE = "+94112239257";
const LANDLINE_DISPLAY = "011 223 9257";
const ALT_MOBILE = "+94740903703";
const ALT_MOBILE_DISPLAY = "074 090 3703";
const WHATSAPP_NUMBER = "94777969144";
const EMAIL = "smartmobile.sam@hotmail.com";
const FB_URL = "https://www.facebook.com/SmartMobile4u/";
const ADDRESS = "35 Old Negombo Road, Ja-Ela 11350";
const MAPS_DIR_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Smart Mobile, 35 Old Negombo Rd, Ja-Ela");
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Smart+Mobile/@7.0739,79.892,17z";

// Brand palette (sourced from logo)
// RED  #D7172A  (logo red)
// BLUE #1B2D6B  (logo deep blue)

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const offers = [
  {
    id: "s26-ultra",
    image: "/smart-mobile-jaela/products/samsung-s26-ultra.png",
    brand: "Samsung",
    product: "Galaxy S26 Ultra",
    headline: "2-Year 2-Times Front & Back Break-Free",
    chips: ["Break-Free Offer", "In stock now"],
    bullets: [
      "2 Year, 2 Times Front & Back break-free coverage",
      "Visit the store for unbeatable in-store offers",
      "Talk to us about installments or Koko payment",
    ],
    fbUrl: "https://www.facebook.com/share/p/1J3aykVVns/",
    accent: "from-[#1B2D6B] to-[#3B4F9C]",
    waMsg: "Hi Smart Mobile, I'm interested in the Samsung Galaxy S26 Ultra Break-Free offer.",
  },
  {
    id: "iphone-17-pmax",
    image: "/smart-mobile-jaela/products/iphone-17-pro-max.png",
    brand: "Apple",
    product: "iPhone 17 Pro Max — Deep Blue",
    headline: "Koko Payment & Installment Plans available",
    chips: ["Koko ✓", "Installment ✓", "Sealed unit"],
    bullets: [
      "iPhone 17 Pro Max in Deep Blue, available now",
      "Pay with Koko buy-now-pay-later",
      "Or split it across an easy installment plan",
    ],
    fbUrl: "https://www.facebook.com/share/p/18VXd45TfJ/",
    accent: "from-[#0F172A] to-[#475569]",
    waMsg: "Hi Smart Mobile, I'm interested in the iPhone 17 Pro Max Deep Blue.",
  },
  {
    id: "honor-x9d",
    image: "/smart-mobile-jaela/products/honor-x9d.png",
    brand: "Honor",
    product: "Honor X9D 5G",
    headline: "Free Honor Choice Watch 2i + Earbuds",
    chips: ["Free Watch + Buds", "1-Yr Warranty", "Koko ✓"],
    bullets: [
      "108MP camera with AI",
      "8300 mAh battery",
      "IP69k water resistance · 2.5 m drop resistance",
      "1-Year display & water-resistance warranty",
    ],
    fbUrl: "https://www.facebook.com/share/p/1LBFMxpq7s/",
    accent: "from-[#D7172A] to-[#F25060]",
    waMsg: "Hi Smart Mobile, I'm interested in the Honor X9D 5G with the free watch & earbuds offer.",
  },
];

// Captions sourced verbatim from each Smart Mobile FB post (with contact lines trimmed)
const happyCustomers = [
  {
    image: "/smart-mobile-jaela/posts/post-1.jpg",
    productLine: "Samsung Galaxy S26 Ultra",
    quote: "2 Year 2 Times Front & Back Break Free Offer. We make you happy. Thank you for choosing us.",
    fbUrl: "https://www.facebook.com/share/p/1J3aykVVns/",
  },
  {
    image: "/smart-mobile-jaela/posts/post-4.jpg",
    productLine: "iPhone 17 Pro Max — Deep Blue",
    quote: "Thank you for choosing us. We make you happy. Visit our store and get unbelievable offers. Koko Payment ✓ Installment plan ✓",
    fbUrl: "https://www.facebook.com/share/p/18VXd45TfJ/",
  },
  {
    image: "/smart-mobile-jaela/posts/post-5.jpg",
    productLine: "Honor X9D 5G",
    quote: "Free Honor Choice Watch 2i & Earbuds. 108MP camera, 8300 mAh battery, IP69k water-resistance, 1-Year display & water-resistance warranty.",
    fbUrl: "https://www.facebook.com/share/p/1LBFMxpq7s/",
  },
  {
    image: "/smart-mobile-jaela/posts/post-6.jpg",
    productLine: "Honor 400 — 12/512GB",
    quote: "200MP Clear AI Camera. FREE Honor Buds with every unit. Happy customer — we make you happy. Koko Payment ✓ Installment plan ✓",
    fbUrl: "https://www.facebook.com/share/p/1HMhhV98UW/",
  },
  {
    image: "/smart-mobile-jaela/posts/post-2.jpg",
    productLine: "Samsung Galaxy S26 Ultra",
    quote: "2 Year 2 Times Front & Back Break Free Offer. Visit our store and get unbelievable offers.",
    fbUrl: "https://www.facebook.com/share/p/1B2SRmwstW/",
  },
  {
    image: "/smart-mobile-jaela/posts/post-3.jpg",
    productLine: "Samsung Galaxy S26 Ultra",
    quote: "Thank you for choosing us. We make you happy. Break-Free coverage, in-store now.",
    fbUrl: "https://www.facebook.com/share/p/14bhc4Lhjgy/",
  },
];

const services = [
  {
    name: "Phone Sales",
    desc: "Genuine smartphones from the brands you trust — flagships, mid-range and everyday devices, with honest advice.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: "Accessories",
    desc: "Cases, screen protectors, cables, chargers, power banks, earbuds — picked to actually last.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Mobile Repairs",
    desc: "Display replacements, battery swaps, charging-port and back-glass repairs. Diagnosed in front of you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Phone Unlocking",
    desc: "Network and software unlocking, done in-store. Quick turnaround, fair price, no nonsense.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const brands = ["Samsung", "Apple", "Honor"];

const reviews = [
  {
    name: "Sayuru Muthuruwan",
    meta: "3 reviews · 8 photos · 9 months ago",
    text: "Really good service. Fast. Reasonable price. Recommended.",
    initials: "SM",
  },
  {
    name: "Kumari Fenando",
    meta: "1 review · 10 months ago",
    text: "Best service and good price. Thank you for your service.",
    initials: "KF",
  },
  {
    name: "Kishanthan Rajasegar",
    meta: "1 review · 2 photos · 2 years ago",
    text: "Excellent service and reasonable price. Highly recommend.",
    initials: "KR",
  },
  {
    name: "Nuwan Fernando",
    meta: "6 reviews · 2 photos · 2 years ago",
    text: "I highly recommend Smart Mobile to anyone in search of an affordable smartphone.",
    initials: "NF",
  },
  {
    name: "Dew Perera",
    meta: "1 review · 2 years ago",
    text: "Friendly service and reasonable price.",
    initials: "DP",
  },
  {
    name: "Ashanthan Rajasekaran",
    meta: "1 review · 2 years ago",
    text: "Good service. Highly recommended.",
    initials: "AR",
  },
];

const stats = [
  { value: "Since 2009", label: "Serving Ja-Ela" },
  { value: "4.4 ★", label: "32 Google reviews" },
  { value: "AC + Parking", label: "Air-conditioned showroom" },
  { value: "Till 8 PM", label: "Open daily" },
];

function Star({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

function CheckBadge({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function SmartMobileJaela() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen`}
      style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", background: "#FFFFFF", color: "#0F172A" }}
    >
      {/* Sticky Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#0F172A]/8 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 ring-[#D7172A]/15 bg-white">
              <Image src="/smart-mobile-jaela/logo.jpg" alt="Smart Mobile logo" width={80} height={80} className="w-full h-full object-cover" priority />
            </div>
            <div className="leading-tight">
              <div className="text-sm md:text-base font-bold tracking-tight text-[#1B2D6B]" style={{ fontFamily: "var(--font-space-grotesk)" }}>SMART MOBILE</div>
              <div className="text-[10px] md:text-xs text-[#475569] -mt-0.5">Ja-Ela &middot; Since 2009</div>
            </div>
          </a>
          <div className="hidden md:flex gap-6 lg:gap-7 text-sm text-[#334155] font-medium">
            <a href="#offers" className="hover:text-[#D7172A] transition">Offers</a>
            <a href="#reels" className="hover:text-[#D7172A] transition">Reels</a>
            <a href="#services" className="hover:text-[#D7172A] transition">Services</a>
            <a href="#customers" className="hover:text-[#D7172A] transition">Customers</a>
            <a href="#reviews" className="hover:text-[#D7172A] transition">Reviews</a>
            <a href="#visit" className="hover:text-[#D7172A] transition">Visit</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE_NUMBER}`} className="md:hidden w-9 h-9 rounded-full border border-[#D7172A]/30 flex items-center justify-center" aria-label="Call Smart Mobile">
              <svg className="w-4 h-4 text-[#D7172A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="bg-[#D7172A] hover:bg-[#B61222] text-white text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-md transition font-semibold tracking-wide shadow-[0_4px_18px_-4px_rgba(215,23,42,0.5)]">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-14 md:pt-16 min-h-[88vh] md:min-h-screen flex items-center overflow-hidden bg-white">
        {/* decorative diagonal red wedge — echoes the red panels of the logo */}
        <div className="absolute top-0 right-0 w-[55vw] h-full pointer-events-none opacity-[0.04]" style={{ background: "linear-gradient(135deg, #D7172A 0%, #D7172A 60%, transparent 60%)", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }} />
        {/* soft blue gradient halo */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #1B2D6B, transparent 70%)" }} />
        {/* subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #1B2D6B 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#D7172A]/8 text-[#D7172A] text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-5 md:mb-7 tracking-[0.2em] uppercase">
              <CheckBadge className="w-3.5 h-3.5" />
              Your Lifetime Mobile Partner
            </div>
            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold mb-5 md:mb-7 leading-[1.02] tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Ja-Ela&rsquo;s most loved
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1B2D6B]">phone shop</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-[#D7172A]/15 -z-0 rounded-sm" />
              </span>
              <span className="text-[#0F172A]"> since 2009.</span>
            </h1>
            <p className="text-[#475569] text-base md:text-lg mb-7 md:mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Genuine smartphones, honest repairs, real warranties. From Samsung and iPhone flagships to everyday Honor 5G devices &mdash; come down to 35 Old Negombo Rd and we&rsquo;ll sort you out.
            </p>

            {/* Rating chip */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-7 md:mb-9 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white border border-[#0F172A]/10 rounded-full pl-3 pr-4 py-2 shadow-sm">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5" />)}
                </div>
                <span className="text-sm font-bold ml-1 text-[#0F172A]">4.4</span>
                <span className="text-xs text-[#475569]">on Google &middot; 32 reviews</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-[#D7172A] hover:bg-[#B61222] text-white px-7 md:px-9 py-3.5 rounded-md text-sm font-bold tracking-wide transition flex items-center gap-2 shadow-[0_8px_28px_-8px_rgba(215,23,42,0.55)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                {PHONE_DISPLAY}
              </a>
              <a href={wa("Hi Smart Mobile, I'd like to ask about a phone.")} target="_blank" rel="noopener noreferrer" className="bg-[#1B2D6B] hover:bg-[#152355] text-white px-6 md:px-7 py-3.5 rounded-md text-sm font-semibold tracking-wide transition flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-xs text-[#475569]">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D7172A]" /> Koko buy-now-pay-later</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#1B2D6B]" /> Easy installment plans</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D7172A]" /> Real warranties</span>
            </div>
          </div>

          {/* Hero showcase: single big product on a brand-blue panel */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1B2D6B] via-[#243786] to-[#1B2D6B] aspect-[4/5] md:aspect-[5/6] shadow-[0_30px_80px_-30px_rgba(27,45,107,0.55)]">
                {/* radial sheen */}
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle, #D7172A, transparent 70%)" }} />
                <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #00C2FF, transparent 70%)" }} />
                {/* dot grid */}
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "24px 24px" }} />

                {/* Top label */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 bg-[#D7172A] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Featured offer
                  </div>
                  <div className="text-[10px] tracking-widest uppercase font-semibold opacity-80">Samsung</div>
                </div>

                {/* Product render */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full h-full">
                    <Image
                      src="/smart-mobile-jaela/products/samsung-s26-ultra.png"
                      alt="Samsung Galaxy S26 Ultra"
                      fill
                      sizes="(max-width: 1024px) 80vw, 35vw"
                      className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)]"
                      priority
                    />
                  </div>
                </div>

                {/* Bottom card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-3.5 md:p-4 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-[#D7172A]">This week</div>
                      <div className="text-sm md:text-base font-bold text-[#0F172A] truncate" style={{ fontFamily: "var(--font-space-grotesk)" }}>Galaxy S26 Ultra</div>
                      <div className="text-[11px] text-[#475569] truncate">2-Yr 2-Times Break-Free Offer</div>
                    </div>
                    <a href="#offers" className="shrink-0 text-[10px] font-bold uppercase tracking-widest bg-[#1B2D6B] text-white px-3 py-2 rounded-md hover:bg-[#152355] transition">
                      See offers
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating badge: rating — sits outside the clipped panel so stars never get cut off */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl ring-1 ring-[#0F172A]/5 px-3 py-2.5 hidden sm:flex items-center gap-2 z-10">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3 h-3" />)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A] leading-none">4.4</div>
                  <div className="text-[9px] text-[#475569] leading-none mt-0.5">Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#F8FAFC] border-y border-[#0F172A]/8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: i % 2 === 0 ? "#1B2D6B" : "#D7172A", fontFamily: "var(--font-space-grotesk)" }}>{s.value}</div>
              <div className="text-xs md:text-sm text-[#475569] mt-1.5 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reels */}
      <section id="reels" className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">From our Facebook</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Walk-in moments &amp; new arrivals</h2>
            <p className="text-[#475569] mt-2 md:mt-4 text-sm md:text-base max-w-md mx-auto">Real customers, real handovers, the latest devices &mdash; straight from our Facebook page.</p>
          </div>
          <SmartMobileReels />
          <div className="text-center mt-8">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#1B2D6B] hover:text-[#D7172A] font-semibold transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Follow Smart Mobile on Facebook for daily drops
            </a>
          </div>
        </div>
      </section>

      {/* Latest Offers */}
      <section id="offers" className="py-14 md:py-24 px-4 md:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Live now</span>
              <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>This week&rsquo;s offers</h2>
            </div>
            <p className="text-[#475569] text-sm md:text-base md:max-w-sm md:text-right">Lifted directly from our latest Facebook posts. Walk in or call us &mdash; we will sort you out.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {offers.map((offer) => (
              <article key={offer.id} className="group bg-white rounded-2xl overflow-hidden ring-1 ring-[#0F172A]/8 hover:ring-[#D7172A]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl">
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${offer.accent}`}>
                  <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <Image src={offer.image} alt={`${offer.brand} ${offer.product}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-[#0F172A] shadow-sm">{offer.brand}</div>
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{offer.product}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#D7172A]">{offer.headline}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {offer.chips.map((chip) => (
                      <span key={chip} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#1B2D6B]/8 text-[#1B2D6B] font-bold">{chip}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 text-sm text-[#475569] leading-relaxed">
                    {offer.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <svg className="w-4 h-4 mt-0.5 text-[#D7172A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-auto pt-2">
                    <a href={wa(offer.waMsg)} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#D7172A] hover:bg-[#B61222] text-white py-2.5 rounded-md text-xs font-bold tracking-wide transition text-center shadow-[0_4px_14px_-4px_rgba(215,23,42,0.5)]">
                      Ask on WhatsApp
                    </a>
                    <a href={offer.fbUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 rounded-md ring-1 ring-[#0F172A]/10 hover:ring-[#1877F2]/40 hover:bg-[#1877F2]/5 transition flex items-center justify-center text-[#1877F2]" aria-label="View on Facebook">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">What we do</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Sales, accessories, repairs &amp; unlocking</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s, i) => (
              <div key={s.name} className="group bg-white ring-1 ring-[#0F172A]/8 rounded-2xl p-6 hover:ring-[#D7172A]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: i % 2 === 0 ? "rgba(215,23,42,0.08)" : "rgba(27,45,107,0.08)",
                    color: i % 2 === 0 ? "#D7172A" : "#1B2D6B",
                  }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold tracking-tight mb-2 text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{s.name}</h3>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Payment options strip */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div className="bg-gradient-to-r from-[#D7172A]/8 via-[#D7172A]/4 to-transparent ring-1 ring-[#D7172A]/15 rounded-2xl p-5 md:p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D7172A]/10 flex items-center justify-center text-[#D7172A] shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
              </div>
              <div>
                <div className="text-sm md:text-base font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Koko Buy-Now-Pay-Later</div>
                <div className="text-xs md:text-sm text-[#475569] mt-0.5">Take the phone home today, pay in instalments through Koko.</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#1B2D6B]/8 via-[#1B2D6B]/4 to-transparent ring-1 ring-[#1B2D6B]/15 rounded-2xl p-5 md:p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1B2D6B]/10 flex items-center justify-center text-[#1B2D6B] shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
              </div>
              <div>
                <div className="text-sm md:text-base font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Easy Installment Plans</div>
                <div className="text-xs md:text-sm text-[#475569] mt-0.5">Talk to us in store about a plan that fits your budget.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-7">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Brands you can ask about</span>
            <h2 className="text-xl md:text-2xl font-bold mt-2 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Featured in our latest stock</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {brands.map((b) => (
              <div key={b} className="aspect-[3/1] md:aspect-[4/1] rounded-xl bg-white ring-1 ring-[#0F172A]/8 flex items-center justify-center text-lg md:text-xl font-bold tracking-tight text-[#1B2D6B] hover:ring-[#D7172A]/30 hover:text-[#D7172A] transition shadow-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {b}
              </div>
            ))}
            <div className="aspect-[3/1] md:aspect-[4/1] rounded-xl ring-1 ring-dashed ring-[#1B2D6B]/30 flex items-center justify-center text-sm md:text-base text-[#475569] hover:ring-[#D7172A]/40 hover:text-[#D7172A] transition">
              &amp; many more &mdash; just ask
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <section id="customers" className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Thank you for choosing us</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Happy customers, real handovers</h2>
            <p className="text-[#475569] mt-3 md:mt-4 text-sm md:text-base max-w-lg mx-auto">Every photo and caption below is a real Smart Mobile Facebook post &mdash; click any card to see the original.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {happyCustomers.map((c) => (
              <a
                key={c.image}
                href={c.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden ring-1 ring-[#0F172A]/8 hover:ring-[#D7172A]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
              >
                <div className="relative aspect-[526/701] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={c.image}
                    alt={`Smart Mobile customer with ${c.productLine}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#1B2D6B] shadow-sm">
                    Customer story
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center opacity-90 group-hover:opacity-100 transition shadow-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{c.productLine}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed flex-1">&ldquo;{c.quote}&rdquo;</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#0F172A]/5">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#475569]">From Facebook</span>
                    <span className="text-xs font-semibold text-[#1877F2] group-hover:underline">View post &rarr;</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-[#475569] mt-10 italic">
            &ldquo;We make you happy.&rdquo; <span className="not-italic text-[#475569]/70">&mdash; from every Smart Mobile post.</span>
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-14 md:py-24 px-4 md:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Real customers, real Google reviews</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>What our customers are saying</h2>
            <div className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full bg-white ring-1 ring-[#0F172A]/8 shadow-sm">
              <div className="flex items-center gap-0.5 text-[#F59E0B]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4" />)}
              </div>
              <span className="text-base font-bold text-[#0F172A]">4.4</span>
              <span className="text-xs text-[#475569]">based on 32 reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {reviews.map((r, i) => (
              <article key={r.name} className="bg-white ring-1 ring-[#0F172A]/8 rounded-2xl p-5 md:p-6 hover:ring-[#D7172A]/25 transition-all duration-300 flex flex-col gap-3 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: i % 2 === 0 ? "#D7172A" : "#1B2D6B" }}
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate text-[#0F172A]">{r.name}</div>
                    <div className="text-[10px] text-[#475569] truncate">{r.meta}</div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5" />)}
                  </div>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#1B2D6B] hover:text-[#D7172A] font-semibold transition bg-white ring-1 ring-[#0F172A]/8 hover:ring-[#D7172A]/30 rounded-full px-5 py-2.5 shadow-sm">
              Read all 32 reviews on Google
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative">
            <div className="rounded-2xl overflow-hidden ring-1 ring-[#0F172A]/8 aspect-[4/5] relative">
              <Image src="/smart-mobile-jaela/photos/storefront.jpg" alt="The Smart Mobile storefront on Old Negombo Road, Ja-Ela" fill sizes="(max-width: 1024px) 80vw, 30vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#1B2D6B] text-white rounded-xl p-4 shadow-lg">
              <div className="text-[10px] tracking-widest uppercase mb-1 opacity-80">Established</div>
              <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>2009</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-[#D7172A] text-white rounded-xl px-4 py-2.5 shadow-lg">
              <div className="text-[10px] tracking-widest uppercase font-bold">No. 35</div>
              <div className="text-xs font-semibold opacity-95">Old Negombo Rd</div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Our story</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 mb-5 md:mb-6 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              A Ja-Ela name &mdash;<br className="hidden md:block" /> built one happy customer at a time.
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4 text-sm md:text-base">
              Smart Mobile has been on Old Negombo Road since 2009 &mdash; a family-run shop that has grown alongside the neighbourhood. Phones, accessories, repairs and unlocking, all under one air-conditioned roof, with parking right outside.
            </p>
            <p className="text-[#475569] leading-relaxed mb-6 text-sm md:text-base">
              Whether it is your first smartphone or your fifth flagship, the answer to &ldquo;is this the right phone for me?&rdquo; should never be a sales pitch. We&rsquo;ll talk you through the trade-offs, sort out an honest price, and back the device with a real warranty.
            </p>
            <blockquote className="border-l-[3px] border-[#D7172A] pl-5 py-2 text-[#0F172A] text-base md:text-lg">
              <span className="italic">&ldquo;We make you happy.&rdquo;</span>
              <cite className="block text-xs text-[#475569] mt-2 not-italic">From every Smart Mobile post &mdash; and meant every time.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-14 md:py-24 px-4 md:px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#D7172A] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Come say hi</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 md:mt-3 tracking-tight text-[#0F172A]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Visit the shop</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-[#0F172A]/8 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#D7172A]/10 flex items-center justify-center shrink-0 text-[#D7172A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#D7172A] tracking-wider uppercase mb-1 font-bold">Address</div>
                  <div className="text-sm md:text-base text-[#0F172A]">{ADDRESS}, Sri Lanka</div>
                  <div className="text-xs text-[#475569] mt-1">Plus code: 3VJR+JH Ja-Ela</div>
                  <a href={MAPS_DIR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#1B2D6B] hover:text-[#D7172A] font-semibold mt-2 transition">
                    Get directions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-[#0F172A]/8 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#1B2D6B]/10 flex items-center justify-center shrink-0 text-[#1B2D6B]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#1B2D6B] tracking-wider uppercase mb-1 font-bold">Call us</div>
                  <a href={`tel:${PHONE_NUMBER}`} className="block text-sm md:text-base text-[#0F172A] hover:text-[#D7172A] transition">{PHONE_DISPLAY} <span className="text-[#475569] text-xs">(hotline)</span></a>
                  <a href={`tel:${LANDLINE}`} className="block text-sm md:text-base text-[#0F172A] hover:text-[#D7172A] transition mt-0.5">{LANDLINE_DISPLAY} <span className="text-[#475569] text-xs">(shop)</span></a>
                  <a href={`tel:${ALT_MOBILE}`} className="block text-sm md:text-base text-[#0F172A] hover:text-[#D7172A] transition mt-0.5">{ALT_MOBILE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-[#0F172A]/8 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#D7172A]/10 flex items-center justify-center shrink-0 text-[#D7172A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#D7172A] tracking-wider uppercase mb-1 font-bold">Email</div>
                  <a href={`mailto:${EMAIL}`} className="text-sm md:text-base text-[#0F172A] hover:text-[#D7172A] transition break-all">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white ring-1 ring-[#0F172A]/8 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#1B2D6B]/10 flex items-center justify-center shrink-0 text-[#1B2D6B]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#1B2D6B] tracking-wider uppercase mb-1 font-bold">Hours</div>
                  <div className="text-sm md:text-base text-[#0F172A]">Open daily &middot; closes 8 PM</div>
                  <div className="text-xs text-[#475569] mt-1">Air-conditioned showroom &middot; parking on site</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-md bg-[#1877F2] hover:bg-[#166FE5] text-white text-sm font-bold transition flex items-center justify-center gap-2 shadow-[0_4px_14px_-4px_rgba(24,119,242,0.5)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Facebook
                </a>
                <a href={wa("Hi Smart Mobile, I'd like to ask about a phone.")} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-md bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold transition flex items-center justify-center gap-2 shadow-[0_4px_14px_-4px_rgba(37,211,102,0.5)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden ring-1 ring-[#0F172A]/8 min-h-[400px] lg:min-h-full bg-white">
              <iframe
                src="https://maps.google.com/maps?q=35%20Old%20Negombo%20Rd%2C%20Ja-Ela&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                title="Smart Mobile Ja-Ela location on map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-6 bg-[#1B2D6B] text-white pb-24 md:pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/20 bg-white">
              <Image src="/smart-mobile-jaela/logo.jpg" alt="Smart Mobile logo" width={64} height={64} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>SMART MOBILE &middot; Ja-Ela</span>
          </div>
          <p className="text-white/55 text-xs md:text-sm">
            &copy; 2026 Smart Mobile, 35 Old Negombo Rd, Ja-Ela. All rights reserved.
          </p>
          <p className="text-white/45 text-xs">
            Website by{" "}
            <a href="https://moriahsystems.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline-offset-2 hover:underline transition">
              Moriah Systems
            </a>
          </p>
        </div>
      </footer>

      {/* Mobile sticky bottom action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#0F172A]/10 grid grid-cols-3 text-center text-[10px] uppercase tracking-widest font-bold shadow-[0_-2px_12px_-4px_rgba(15,23,42,0.1)]">
        <a href={`tel:${PHONE_NUMBER}`} className="py-3 flex flex-col items-center gap-1 text-[#D7172A] hover:bg-[#D7172A]/5 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
          Call
        </a>
        <a href={wa("Hi Smart Mobile, I have a question.")} target="_blank" rel="noopener noreferrer" className="py-3 flex flex-col items-center gap-1 text-[#25D366] hover:bg-[#25D366]/5 transition border-x border-[#0F172A]/10">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp
        </a>
        <a href={MAPS_DIR_URL} target="_blank" rel="noopener noreferrer" className="py-3 flex flex-col items-center gap-1 text-[#1B2D6B] hover:bg-[#1B2D6B]/5 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
          Directions
        </a>
      </div>
    </div>
  );
}
