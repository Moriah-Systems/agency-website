import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Header from "./Header";
import TmobileReels from "./TmobileReels";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Tmobile Phone Shop · Ja-Ela | Genuine Apple & Android Phones",
  description:
    "Ja-Ela's most trusted phone shop. Genuine Apple, Samsung, Google Pixel, Xiaomi, Realme and more. Real warranties, easy installments, fast service. 4.4★ on Google · Open until 8 PM.",
};

const PHONE_NUMBER = "+94778989111";
const PHONE_DISPLAY = "077 898 9111";
const LANDLINE = "+94114506341";
const LANDLINE_DISPLAY = "011 450 6341";
const WHATSAPP_NUMBER = "94717981796";
const WHATSAPP_DISPLAY = "071 798 1796";
const EMAIL = "tmobilejaela@gmail.com";
const FB_URL = "https://www.facebook.com/jaelatmobile";
const ADDRESS = "108/D Old Negombo Rd, Ja-Ela 11350";
const MAPS_QUERY = "108%2FD+Old+Negombo+Rd%2C+Ja-Ela+11350";

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const phones = [
  {
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    spec: "256GB · 6.9\" · A18 Pro · 5G",
    price: 485000,
    image: "/tmobile-ja-ela/phones/apple-iphone-16-pro-max.jpg",
    span: "md:col-span-2 lg:col-span-4",
    badge: "Flagship",
    hero: true,
  },
  {
    brand: "Xiaomi",
    model: "Xiaomi 14",
    spec: "512GB · 6.36\" · Leica · 5G",
    price: 325600,
    image: "/tmobile-ja-ela/phones/xiaomi-14.jpg",
    span: "lg:col-span-2",
    badge: "Pro Camera",
    hero: false,
  },
  {
    brand: "Nothing",
    model: "Phone (2a)",
    spec: "256GB · 6.7\" · Glyph LED",
    price: 99900,
    image: "/tmobile-ja-ela/phones/nothing-phone-2a.jpg",
    span: "lg:col-span-2",
    badge: "Trending",
    hero: false,
  },
  {
    brand: "Samsung",
    model: "Galaxy Z Flip6",
    spec: "256GB · 6.7\" Foldable · 5G",
    price: 215000,
    image: "/tmobile-ja-ela/phones/samsung-galaxy-z-flip6.jpg",
    span: "",
    badge: "Foldable",
    hero: false,
  },
  {
    brand: "Google",
    model: "Pixel 9",
    spec: "128GB · 6.3\" · Tensor G4",
    price: 201000,
    image: "/tmobile-ja-ela/phones/google-pixel-9.jpg",
    span: "",
    badge: "AI Powered",
    hero: false,
  },
  {
    brand: "Samsung",
    model: "Galaxy A55 5G",
    spec: "256GB · 6.6\" · 5G · IP67",
    price: 103500,
    image: "/tmobile-ja-ela/phones/samsung-galaxy-a55.jpg",
    span: "",
    badge: "Best Value",
    hero: false,
  },
  {
    brand: "Realme",
    model: "Realme GT 7",
    spec: "256GB · 6.78\" · 120W Charge",
    price: 127100,
    image: "/tmobile-ja-ela/phones/realme-gt-7.jpg",
    span: "",
    badge: "New",
    hero: false,
  },
];

const services = [
  {
    title: "New Phones",
    desc: "Genuine Apple and Android, sealed boxes, full warranty.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    ),
  },
  {
    title: "Repairs & Battery",
    desc: "Screen replacement, battery service, charging port — fast turnaround.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    ),
  },
  {
    title: "Accessories",
    desc: "Cases, tempered glass, chargers, earbuds, cables — genuine brands only.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    ),
  },
  {
    title: "Trade-in & Buy-back",
    desc: "Sell or trade your old phone for instant value off your new one.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    ),
  },
];

const brands = [
  { name: "Apple", file: "/tmobile-ja-ela/brands/apple.svg" },
  { name: "Samsung", file: "/tmobile-ja-ela/brands/samsung.svg" },
  { name: "Google", file: "/tmobile-ja-ela/brands/google.svg" },
  { name: "Xiaomi", file: "/tmobile-ja-ela/brands/xiaomi.svg" },
  { name: "OPPO", file: "/tmobile-ja-ela/brands/oppo.svg" },
  { name: "Vivo", file: "/tmobile-ja-ela/brands/vivo.svg" },
  { name: "Huawei", file: "/tmobile-ja-ela/brands/huawei.svg" },
  { name: "Honor", file: "/tmobile-ja-ela/brands/honor.svg" },
  { name: "Nokia", file: "/tmobile-ja-ela/brands/nokia.svg" },
];

const customerPosts = [
  "https://www.facebook.com/jaelatmobile/posts/pfbid02vy4eHar2X2rWFU14sFCToqkbPk72io9LvfqoHf9RUWnEex8EA7oqnemp3ngMDRZFl",
  "https://www.facebook.com/jaelatmobile/posts/pfbid0uKWHoUMPdW827Wk2622XAKCLXa35ea1f7bckEKkehnAHbvGinwCssvfn2Ds3MFwrl",
  "https://www.facebook.com/jaelatmobile/posts/pfbid02fYrKt95P2cHtaPRtTcJW7889jPZtWoiWVyBvqzA5NUKVEncgfyQEGguES8satztLl",
];

const stats = [
  { value: "10+", label: "Years in Ja-Ela" },
  { value: "3,213", label: "Facebook Followers" },
  { value: "4.4 ★", label: "Google Rating" },
  { value: "11+", label: "Brands Available" },
];

const formatPrice = (n: number) => `Rs. ${n.toLocaleString("en-LK")}`;

type IconProps = { className?: string; style?: React.CSSProperties };

const PhoneIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const PinIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5", style }: IconProps) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ArrowIcon = ({ className = "w-4 h-4", style }: IconProps) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function TmobileJaEla() {
  return (
    <div
      className={`${spaceGrotesk.variable} min-h-screen overflow-x-hidden`}
      style={{
        background: "#FAFAFA",
        color: "#1F2937",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        maxWidth: "100vw",
      }}
    >
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -30px); }
          50% { transform: translate(-20px, 40px); }
          75% { transform: translate(-40px, -20px); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-50px, 30px); }
          66% { transform: translate(30px, -40px); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(225, 29, 46, 0.55); }
          70% { box-shadow: 0 0 0 18px rgba(225, 29, 46, 0); }
          100% { box-shadow: 0 0 0 0 rgba(225, 29, 46, 0); }
        }
        @keyframes pulse-ring-green {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55); }
          70% { box-shadow: 0 0 0 18px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tm-orb { animation: drift 18s ease-in-out infinite; }
        .tm-orb-2 { animation: drift-2 22s ease-in-out infinite; }
        .tm-pulse-red { animation: pulse-ring 2.4s ease-out infinite; }
        .tm-pulse-green { animation: pulse-ring-green 2.4s ease-out infinite; }
        .tm-fade-up { animation: fade-up 0.7s ease-out both; }
        .tm-display { font-family: var(--font-space-grotesk), system-ui, sans-serif; font-feature-settings: "ss01", "tnum"; }
        .tm-tnum { font-feature-settings: "tnum"; }
        .tm-grain {
          background-image: radial-gradient(rgba(225, 29, 46, 0.045) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .tm-brand-logo { transition: opacity 0.3s ease, transform 0.3s ease; opacity: 0.55; }
        .tm-brand-logo:hover { opacity: 1; transform: scale(1.08); }
        .tm-card-hover { transition: transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .tm-card-hover:hover { transform: translateY(-4px); box-shadow: 0 24px 48px -16px rgba(225, 29, 46, 0.18); border-color: rgba(225, 29, 46, 0.35); }
        @media (prefers-reduced-motion: reduce) {
          .tm-orb, .tm-orb-2, .tm-pulse-red, .tm-pulse-green, .tm-fade-up { animation: none !important; }
        }
      `}</style>

      {/* ===================== HEADER ===================== */}
      <Header />

      {/* ===================== HERO ===================== */}
      <section id="top" className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden" style={{ scrollMarginTop: "92px" }}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full tm-orb"
               style={{ background: "radial-gradient(circle, rgba(225, 29, 46, 0.18), transparent 70%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full tm-orb-2"
               style={{ background: "radial-gradient(circle, rgba(245, 158, 11, 0.14), transparent 70%)" }} />
          <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full tm-orb"
               style={{ background: "radial-gradient(circle, rgba(185, 28, 28, 0.12), transparent 70%)", animationDelay: "-6s" }} />
          <div className="absolute inset-0 tm-grain" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 tm-fade-up">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                 style={{ borderColor: "rgba(225, 29, 46, 0.25)", color: "#E11D2E", background: "rgba(225, 29, 46, 0.05)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
              Open today · Until 8 PM
            </div>
            <h1 className="tm-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-700 mt-6 leading-[1.05] tracking-tight">
              Ja-Ela's most <br className="hidden sm:block" />
              <span style={{ background: "linear-gradient(135deg, #E11D2E 0%, #B91C1C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                trusted phone shop.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "#475569" }}>
              Genuine Apple and Android phones, real warranties, real after-sales service. Walk in, message us on WhatsApp, or call any time before 8 PM.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#phones"
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full text-white transition hover:opacity-95"
                style={{ background: "linear-gradient(135deg, #E11D2E 0%, #B91C1C 100%)", boxShadow: "0 12px 30px -10px rgba(225, 29, 46, 0.6)" }}
              >
                Browse Phones
                <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href={wa("Hi! I'd like to inquire about a phone.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full transition hover:bg-white"
                style={{ background: "white", color: "#1F2937", border: "1px solid rgba(31, 41, 55, 0.12)", boxShadow: "0 4px 14px -4px rgba(0,0,0,0.06)" }}
              >
                <WhatsAppIcon className="w-4 h-4" style={{ color: "#10B981" }} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: "#64748B" }}>
              <div className="flex items-center gap-2">
                <div className="flex" style={{ color: "#F59E0B" }}>
                  {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  <StarIcon className="w-4 h-4" />
                </div>
                <span className="font-semibold tm-tnum" style={{ color: "#1F2937" }}>4.4</span>
                <span>· 71 Google reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <FacebookIcon className="w-4 h-4" style={{ color: "#1877F2" }} />
                <span className="tm-tnum font-semibold" style={{ color: "#1F2937" }}>3,213</span>
                <span>followers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" style={{ color: "#10B981" }} />
                <span>10+ years in Ja-Ela</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative tm-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-3xl overflow-hidden"
                 style={{ background: "linear-gradient(135deg, #FEE2E2 0%, #FFFFFF 60%, #FEF3C7 100%)", border: "1px solid rgba(31, 41, 55, 0.06)", boxShadow: "0 30px 80px -30px rgba(225, 29, 46, 0.35)" }}>
              <Image
                src="/tmobile-ja-ela/phones/apple-iphone-16-pro-max.jpg"
                alt="iPhone 16 Pro Max"
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-contain p-10"
                priority
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white"
                   style={{ background: "#1F2937" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981" }} />
                In Stock Now
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 backdrop-blur-md"
                   style={{ background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(255, 255, 255, 0.6)" }}>
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#64748B" }}>Featured · Apple</div>
                <div className="tm-display text-xl font-700 mt-0.5" style={{ color: "#1F2937" }}>iPhone 16 Pro Max</div>
                <div className="flex items-end justify-between mt-2">
                  <div className="text-xs" style={{ color: "#64748B" }}>256GB · Natural Titanium</div>
                  <div className="tm-display tm-tnum text-lg font-700" style={{ color: "#E11D2E" }}>{formatPrice(485000)}</div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-5 -right-5 rounded-2xl p-4"
                 style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.08)", boxShadow: "0 12px 30px -10px rgba(0,0,0,0.15)" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FEE2E2, #FECDD3)" }}>
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em]" style={{ color: "#64748B" }}>Call Now</div>
                  <div className="text-xs md:text-sm font-semibold tm-tnum" style={{ color: "#1F2937" }}>{PHONE_DISPLAY}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK ACTION BAR ===================== */}
      <section className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto -mt-2 mb-12 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-2xl"
               style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)", boxShadow: "0 12px 30px -12px rgba(0,0,0,0.08)" }}>
            <a href={`tel:${PHONE_NUMBER}`}
               className="group flex items-center gap-3 p-4 rounded-xl transition hover:bg-[#FEF2F2]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                   style={{ background: "linear-gradient(135deg, #E11D2E, #B91C1C)" }}>
                <PhoneIcon />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: "#64748B" }}>Call Direct</div>
                <div className="text-sm md:text-base font-semibold tm-tnum truncate" style={{ color: "#1F2937" }}>{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={wa("Hi! I'd like to inquire about a phone.")}
               target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-3 p-4 rounded-xl transition hover:bg-[#F0FDF4]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                   style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                <WhatsAppIcon />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: "#64748B" }}>WhatsApp</div>
                <div className="text-sm md:text-base font-semibold tm-tnum truncate" style={{ color: "#1F2937" }}>{WHATSAPP_DISPLAY}</div>
              </div>
            </a>
            <a href={`https://www.google.com/maps?q=${MAPS_QUERY}`}
               target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-3 p-4 rounded-xl transition hover:bg-[#FFFBEB]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                   style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}>
                <PinIcon />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: "#64748B" }}>Visit · Get Directions</div>
                <div className="text-sm md:text-base font-semibold truncate" style={{ color: "#1F2937" }}>108/D Old Negombo Rd</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== REELS ===================== */}
      <section id="reels" className="px-4 md:px-6 py-10 md:py-16" style={{ scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6 md:mb-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>
                Watch us in action
              </span>
              <h2 className="tm-display text-2xl sm:text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
                Real customers. Real handoffs.
              </h2>
              <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: "#475569" }}>
                Snippets from our Facebook page — new arrivals, customer purchases and what a typical day in the shop looks like.
              </p>
            </div>
            <a href="https://www.facebook.com/jaelatmobile" target="_blank" rel="noopener noreferrer"
               className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "#E11D2E" }}>
              See more on Facebook
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <TmobileReels />
        </div>
      </section>

      {/* ===================== HAPPY CUSTOMERS ===================== */}
      <section id="customers" className="px-4 md:px-6 py-12 md:py-20" style={{ scrollMarginTop: "92px", background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>
              Our happy customers
            </span>
            <h2 className="tm-display text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
              Real handoffs, real smiles.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: "#475569" }}>
              Customers picking up their new phones, posted live to our Facebook page. Tap any card to see the original post.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {customerPosts.map((url, i) => (
              <div
                key={url}
                className="rounded-3xl overflow-hidden flex justify-center"
                style={{
                  background: "white",
                  border: "1px solid rgba(31, 41, 55, 0.06)",
                  boxShadow: "0 12px 32px -16px rgba(0, 0, 0, 0.12)",
                  minHeight: 0,
                }}
              >
                <iframe
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=false&width=500&adapt_container_width=true`}
                  height={620}
                  style={{ border: "none", overflow: "hidden", display: "block", width: "100%", maxWidth: "100%" }}
                  scrolling="no"
                  loading="lazy"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Happy customer ${i + 1} — Tmobile Phone Shop Ja-Ela`}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <a
              href="https://www.facebook.com/jaelatmobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full text-white transition hover:opacity-95"
              style={{ background: "#1877F2", boxShadow: "0 12px 30px -10px rgba(24, 119, 242, 0.55)" }}
            >
              <FacebookIcon className="w-4 h-4" />
              See more happy customers on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PHONES BENTO ===================== */}
      <section id="phones" className="px-4 md:px-6 py-12 md:py-20" style={{ scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>This week's hot phones</span>
              <h2 className="tm-display text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
                Pick yours, walk out today.
              </h2>
            </div>
            <a href={wa("Hi! I'd like to see your full phone catalogue.")} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "#E11D2E" }}>
              See all phones via WhatsApp <ArrowIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {phones.map((phone) => {
              const cardClass = `group tm-card-hover relative rounded-2xl md:rounded-3xl overflow-hidden ${phone.hero ? "flex flex-col lg:flex-row" : "flex flex-col"} ${phone.hero ? "col-span-2" : ""} ${phone.span}`;
              const cardStyle = {
                background: "white",
                border: "1px solid rgba(31, 41, 55, 0.06)",
                boxShadow: "0 4px 14px -4px rgba(0,0,0,0.04)",
              };
              return (
                <a
                  key={phone.model}
                  href={wa(`Hi! I'm interested in the ${phone.brand} ${phone.model} (${formatPrice(phone.price)}). Is it available?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  style={cardStyle}
                >
                  <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 z-10 inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.12em] uppercase px-2 md:px-2.5 py-0.5 md:py-1 rounded-full"
                       style={{ background: "rgba(245, 158, 11, 0.15)", color: "#B45309" }}>
                    {phone.badge}
                  </div>
                  <div className="absolute top-2.5 right-2.5 md:top-4 md:right-4 z-10 text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.12em] uppercase" style={{ color: "#94A3B8" }}>
                    {phone.brand}
                  </div>

                  <div
                    className={`relative flex items-center justify-center ${
                      phone.hero
                        ? "p-6 md:p-8 h-[260px] md:h-[340px] lg:h-auto lg:min-h-[420px] lg:flex-1"
                        : "p-3 md:p-7 h-[150px] md:h-[240px]"
                    }`}
                    style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)" }}
                  >
                    <Image
                      src={phone.image}
                      alt={`${phone.brand} ${phone.model}`}
                      width={600}
                      height={600}
                      className={`w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${
                        phone.hero ? "h-full max-h-[220px] md:max-h-[300px] lg:max-h-[360px]" : "h-full"
                      }`}
                    />
                  </div>

                  <div
                    className={`border-t ${
                      phone.hero
                        ? "p-5 md:p-8 lg:p-10 lg:border-t-0 lg:border-l lg:flex-1 lg:flex lg:flex-col lg:justify-center"
                        : "p-3 md:p-5"
                    }`}
                    style={{ borderColor: "rgba(31, 41, 55, 0.06)", background: "white" }}
                  >
                    {phone.hero && (
                      <div className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full self-start mb-4"
                           style={{ background: "rgba(225, 29, 46, 0.08)", color: "#E11D2E" }}>
                        ★ Editor's pick · Apple
                      </div>
                    )}
                    <div className={`tm-display font-700 leading-tight ${
                      phone.hero ? "text-xl md:text-3xl lg:text-4xl" : "text-sm md:text-lg"
                    }`} style={{ color: "#1F2937" }}>
                      {phone.model}
                    </div>
                    <div className={`mt-1 ${
                      phone.hero ? "text-xs md:text-base" : "text-[11px] md:text-xs truncate"
                    }`} style={{ color: "#64748B" }}>{phone.spec}</div>
                    {phone.hero && (
                      <p className="hidden lg:block text-base mt-4 leading-relaxed" style={{ color: "#475569" }}>
                        Apple's most advanced iPhone — titanium frame, A18 Pro chip, the Camera Control button. In stock at our shop today.
                      </p>
                    )}
                    <div className={`flex items-end justify-between gap-2 ${phone.hero ? "mt-3 md:mt-4 lg:mt-6" : "mt-2 md:mt-3"}`}>
                      <div className={`tm-display tm-tnum font-700 ${
                        phone.hero ? "text-xl md:text-3xl lg:text-4xl" : "text-sm md:text-xl"
                      }`} style={{ color: "#E11D2E" }}>
                        {formatPrice(phone.price)}
                      </div>
                      <div className="hidden md:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] px-2 py-1 rounded-md"
                           style={{ background: "#F0FDF4", color: "#15803D" }}>
                        <CheckIcon className="w-3 h-3" /> In Stock
                      </div>
                      <div className="md:hidden inline-flex items-center justify-center w-6 h-6 rounded-md shrink-0"
                           style={{ background: "#F0FDF4", color: "#15803D" }} title="In Stock">
                        <CheckIcon className="w-3 h-3" />
                      </div>
                    </div>
                    {phone.hero && (
                      <div className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold mt-6 px-5 py-3 rounded-full text-white self-start transition group-hover:gap-3"
                           style={{ background: "linear-gradient(135deg, #E11D2E 0%, #B91C1C 100%)" }}>
                        <WhatsAppIcon className="w-4 h-4" /> WhatsApp to inquire <ArrowIcon className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>

          <p className="text-center mt-10 text-sm" style={{ color: "#64748B" }}>
            Looking for a specific model? <a href={wa("Hi! Do you have ")} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-2 decoration-[#E11D2E]/30 underline-offset-4 hover:decoration-[#E11D2E]" style={{ color: "#E11D2E" }}>Message us on WhatsApp</a> — we stock 100+ models.
          </p>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="px-4 md:px-6 py-12 md:py-20"
               style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)", scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>What we do</span>
            <h2 className="tm-display text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
              More than just selling phones.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: "#475569" }}>
              We're a full-service phone shop. Walk in for any of these — or drop a WhatsApp first to check availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s) => (
              <a key={s.title}
                 href={wa(`Hi! I'd like to inquire about ${s.title.toLowerCase()}.`)}
                 target="_blank" rel="noopener noreferrer"
                 className="group tm-card-hover p-6 md:p-7 rounded-2xl flex flex-col gap-4"
                 style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)", boxShadow: "0 4px 14px -4px rgba(0,0,0,0.04)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #FEE2E2, #FECDD3)", color: "#E11D2E" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="tm-display text-lg md:text-xl font-700" style={{ color: "#1F2937" }}>{s.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "#64748B" }}>{s.desc}</p>
                </div>
                <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition group-hover:gap-2.5" style={{ color: "#E11D2E" }}>
                  Inquire on WhatsApp <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BRANDS ===================== */}
      <section id="brands" className="px-4 md:px-6 py-12 md:py-16" style={{ scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>Authorized for</span>
            <h2 className="tm-display text-2xl md:text-3xl font-600 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
              Every major brand, under one roof.
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6 md:gap-8 items-center justify-items-center">
            {brands.map((b) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.name}
                src={b.file}
                alt={b.name}
                className="tm-brand-logo h-7 md:h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-14"
             style={{ background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)", color: "#FAFAFA" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="tm-display tm-tnum text-4xl md:text-6xl font-700 leading-none"
                     style={{ background: "linear-gradient(135deg, #E11D2E 0%, #F59E0B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div className="text-xs md:text-sm mt-3 uppercase tracking-[0.18em]" style={{ color: "#94A3B8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EMI CALLOUT ===================== */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden"
             style={{ background: "linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)", border: "1px solid rgba(245, 158, 11, 0.2)" }}>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30"
               style={{ background: "radial-gradient(circle at right, rgba(225, 29, 46, 0.15), transparent 70%)" }} />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                   style={{ background: "white", color: "#B45309" }}>
                <CheckIcon className="w-3.5 h-3.5" /> Easy Payments
              </div>
              <h3 className="tm-display text-2xl md:text-4xl font-700 mt-4 tracking-tight" style={{ color: "#1F2937" }}>
                Pay over 6, 12 or 24 months.
              </h3>
              <p className="mt-3 text-base md:text-lg" style={{ color: "#475569" }}>
                Easy installment plans available with leading Sri Lankan banks. Walk in with your NIC and walk out with your phone.
              </p>
            </div>
            <div className="md:text-right">
              <a href={wa("Hi! I'd like to know more about EMI / installment plans.")}
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full text-white transition hover:opacity-95"
                 style={{ background: "linear-gradient(135deg, #E11D2E 0%, #B91C1C 100%)", boxShadow: "0 12px 30px -10px rgba(225, 29, 46, 0.5)" }}>
                Ask about EMI plans <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LIVE FACEBOOK ===================== */}
      <section id="latest" className="px-4 md:px-6 py-12 md:py-20"
               style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)", scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>Live from our shop</span>
              <h2 className="tm-display text-3xl md:text-5xl lg:text-6xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
                See what our customers are picking up.
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "#475569" }}>
                Our Facebook page updates every day with new arrivals, customer purchases, repair work and special offers. 3,200+ followers already keeping up — join them.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full text-white transition hover:opacity-95"
                   style={{ background: "#1877F2" }}>
                  <FacebookIcon className="w-4 h-4" />
                  Follow on Facebook
                </a>
                <a href={wa("Hi! I'd like to see what's in stock today.")}
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition"
                   style={{ background: "white", color: "#1F2937", border: "1px solid rgba(31, 41, 55, 0.12)" }}>
                  <WhatsAppIcon className="w-4 h-4" style={{ color: "#10B981" }} /> Ask on WhatsApp
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
                <div className="text-center p-4 rounded-xl" style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)" }}>
                  <div className="tm-display tm-tnum text-2xl font-700" style={{ color: "#1877F2" }}>3,213</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: "#64748B" }}>Followers</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)" }}>
                  <div className="tm-display tm-tnum text-2xl font-700" style={{ color: "#E11D2E" }}>Daily</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: "#64748B" }}>Updates</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)" }}>
                  <div className="tm-display tm-tnum text-2xl font-700" style={{ color: "#10B981" }}>Live</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: "#64748B" }}>Stock</div>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3 mt-10 px-4 py-3 rounded-xl"
                   style={{ background: "rgba(225, 29, 46, 0.04)", border: "1px dashed rgba(225, 29, 46, 0.2)" }}>
                <div className="relative flex shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E11D2E" }} />
                  <span className="absolute inset-0 w-2.5 h-2.5 rounded-full tm-pulse-red" style={{ background: "#E11D2E", opacity: 0.5 }} />
                </div>
                <div className="text-sm" style={{ color: "#475569" }}>
                  <span className="font-semibold" style={{ color: "#1F2937" }}>Live feed →</span> embedded directly from Facebook. Posts update automatically.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full lg:flex lg:justify-end">
              <div className="w-full max-w-[500px] mx-auto lg:mx-0 rounded-3xl overflow-hidden"
                   style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.06)", boxShadow: "0 16px 40px -16px rgba(0,0,0,0.1)" }}>
                <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: "rgba(31, 41, 55, 0.06)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "#1877F2" }}>
                    <FacebookIcon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate" style={{ color: "#1F2937" }}>Tmobile Phone Shop · Ja-Ela</div>
                    <div className="text-xs" style={{ color: "#64748B" }}>facebook.com/jaelatmobile</div>
                  </div>
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                     className="text-xs font-semibold px-3 py-1.5 rounded-full transition hover:bg-[#EFF6FF] shrink-0"
                     style={{ color: "#1877F2" }}>
                    Open ↗
                  </a>
                </div>
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_URL)}&tabs=timeline&width=500&height=560&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`}
                  height={560}
                  style={{ border: "none", overflow: "hidden", display: "block", width: "100%", maxWidth: "100%" }}
                  scrolling="no"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Tmobile Phone Shop Ja-Ela on Facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section id="reviews" className="px-4 md:px-6 py-12 md:py-20" style={{ scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>From our customers</span>
            <h2 className="tm-display text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
              4.4 stars. 71 reviews. Real Ja-Ela people.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 p-8 md:p-10 rounded-3xl flex flex-col justify-between"
                 style={{ background: "linear-gradient(135deg, #1F2937 0%, #0F172A 100%)", color: "#FAFAFA", boxShadow: "0 16px 40px -16px rgba(0,0,0,0.3)" }}>
              <div>
                <div className="flex items-center gap-1 mb-5" style={{ color: "#F59E0B" }}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                </div>
                <p className="tm-display text-xl md:text-2xl font-500 leading-relaxed">
                  "If you are looking for a reliable phone shop with exceptional service, look no further. I recently visited this store and was thoroughly impressed. They really go above and beyond."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                     style={{ background: "linear-gradient(135deg, #E11D2E, #B91C1C)" }}>
                  N
                </div>
                <div>
                  <div className="text-sm font-semibold">Nipu &amp; Norah Diaries</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>Verified Google review · Recently</div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="p-6 rounded-2xl flex flex-col justify-center text-center"
                   style={{ background: "linear-gradient(135deg, #FEE2E2 0%, #FFFFFF 100%)", border: "1px solid rgba(225, 29, 46, 0.15)" }}>
                <div className="tm-display tm-tnum text-5xl font-700" style={{ color: "#E11D2E" }}>4.4</div>
                <div className="flex justify-center gap-0.5 mt-2" style={{ color: "#F59E0B" }}>
                  {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  <StarIcon className="w-4 h-4" />
                </div>
                <div className="text-xs mt-3 uppercase tracking-[0.15em] font-semibold" style={{ color: "#475569" }}>71 Google Reviews</div>
              </div>
              <a href="https://www.google.com/maps/place/T-mobile+phone+shop+jaela/@7.0699,79.8935"
                 target="_blank" rel="noopener noreferrer"
                 className="group p-6 rounded-2xl flex flex-col justify-center transition hover:bg-[#FAFAFA]"
                 style={{ background: "white", border: "1px solid rgba(31, 41, 55, 0.08)" }}>
                <div className="text-sm font-semibold flex items-center gap-2" style={{ color: "#1F2937" }}>
                  Read all 71 reviews
                  <ArrowIcon className="w-4 h-4 transition group-hover:translate-x-1" />
                </div>
                <div className="text-xs mt-1" style={{ color: "#64748B" }}>Open on Google Maps</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VISIT US ===================== */}
      <section id="visit" className="px-4 md:px-6 py-12 md:py-20"
               style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)", scrollMarginTop: "92px" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="rounded-3xl overflow-hidden min-h-[380px] lg:min-h-[480px]"
               style={{ border: "1px solid rgba(31, 41, 55, 0.08)", boxShadow: "0 16px 40px -16px rgba(0,0,0,0.1)" }}>
            <iframe
              src={`https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "380px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="T-Mobile Phone Shop Ja-Ela location"
            />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#E11D2E" }}>Find us</span>
            <h2 className="tm-display text-3xl md:text-5xl font-700 mt-2 tracking-tight" style={{ color: "#1F2937" }}>
              Drop in. <br className="hidden md:block" /> We'll take care of you.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #FEE2E2, #FECDD3)", color: "#E11D2E" }}>
                  <PinIcon />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#64748B" }}>Address</div>
                  <div className="text-base font-medium mt-0.5" style={{ color: "#1F2937" }}>{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #FEE2E2, #FECDD3)", color: "#E11D2E" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#64748B" }}>Hours</div>
                  <div className="text-base font-medium mt-0.5" style={{ color: "#1F2937" }}>Open daily until 8:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #FEE2E2, #FECDD3)", color: "#E11D2E" }}>
                  <PhoneIcon />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#64748B" }}>Call us</div>
                  <div className="text-base font-medium mt-0.5 tm-tnum" style={{ color: "#1F2937" }}>
                    <a href={`tel:${PHONE_NUMBER}`} className="hover:text-[#E11D2E] transition">{PHONE_DISPLAY}</a>
                    {" · "}
                    <a href={`tel:${LANDLINE}`} className="hover:text-[#E11D2E] transition">{LANDLINE_DISPLAY}</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #DCFCE7, #BBF7D0)", color: "#10B981" }}>
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#64748B" }}>WhatsApp</div>
                  <a href={wa("Hi! I'd like to inquire about a phone.")} target="_blank" rel="noopener noreferrer"
                     className="text-base font-medium mt-0.5 tm-tnum hover:text-[#10B981] transition" style={{ color: "#1F2937" }}>
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #FEF3C7, #FDE68A)", color: "#B45309" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "#64748B" }}>Email</div>
                  <a href={`mailto:${EMAIL}`} className="text-base font-medium mt-0.5 hover:text-[#E11D2E] transition" style={{ color: "#1F2937" }}>
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href={`tel:${PHONE_NUMBER}`}
                 className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full text-white transition hover:opacity-95"
                 style={{ background: "linear-gradient(135deg, #E11D2E, #B91C1C)" }}>
                <PhoneIcon className="w-4 h-4" /> Call now
              </a>
              <a href={wa("Hi! I'd like to inquire about a phone.")} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full text-white transition hover:opacity-95"
                 style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`https://www.google.com/maps?q=${MAPS_QUERY}`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition hover:bg-[#FFFBEB]"
                 style={{ background: "white", color: "#1F2937", border: "1px solid rgba(31, 41, 55, 0.12)" }}>
                <PinIcon className="w-4 h-4" /> Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="px-4 md:px-6 pt-12 pb-28 md:pb-12" style={{ background: "#1F2937", color: "#94A3B8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div>
              <div className="flex items-center gap-3">
                <Image src="/tmobile-ja-ela/logo.jpg" alt="Tmobile Phone Shop Ja-Ela" width={48} height={48} className="h-12 w-12 rounded-lg object-contain" style={{ background: "white", padding: "4px" }} />
                <div>
                  <div className="tm-display text-base font-700" style={{ color: "#FAFAFA" }}>Tmobile Phone Shop</div>
                  <div className="text-[11px] uppercase tracking-[0.2em]">Ja-Ela</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                Ja-Ela's most trusted phone shop. Genuine Apple and Android phones, real warranties, and after-sales service that actually shows up.
              </p>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 mt-5 text-sm font-semibold transition hover:text-white"
                 style={{ color: "#FAFAFA" }}>
                <FacebookIcon className="w-4 h-4" /> Follow on Facebook
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#FAFAFA" }}>Explore</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="#phones" className="hover:text-white transition">Phones</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#brands" className="hover:text-white transition">Brands</a></li>
                <li><a href="#latest" className="hover:text-white transition">Latest Posts</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#visit" className="hover:text-white transition">Visit us</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "#FAFAFA" }}>Contact</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>{ADDRESS}</li>
                <li className="tm-tnum"><a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition">{PHONE_DISPLAY}</a></li>
                <li className="tm-tnum"><a href={`tel:${LANDLINE}`} className="hover:text-white transition">{LANDLINE_DISPLAY}</a></li>
                <li className="tm-tnum"><a href={wa("Hi!")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp · {WHATSAPP_DISPLAY}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition">{EMAIL}</a></li>
                <li>Open daily until 8:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <div>&copy; {new Date().getFullYear()} Tmobile Phone Shop · Ja-Ela. All rights reserved.</div>
            <div>Crafted by <a href="https://moriahsystems.com" target="_blank" rel="noopener noreferrer" className="font-semibold transition hover:text-white" style={{ color: "#E11D2E" }}>Moriah Systems</a></div>
          </div>
        </div>
      </footer>

      {/* ===================== FLOATING WHATSAPP + CALL ===================== */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
        <a href={`tel:${PHONE_NUMBER}`}
           aria-label="Call us"
           className="tm-pulse-red w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition hover:scale-105"
           style={{ background: "linear-gradient(135deg, #E11D2E, #B91C1C)", boxShadow: "0 12px 30px -8px rgba(225, 29, 46, 0.6)" }}>
          <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href={wa("Hi! I'd like to inquire about a phone.")} target="_blank" rel="noopener noreferrer"
           aria-label="WhatsApp us"
           className="tm-pulse-green w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition hover:scale-105"
           style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 12px 30px -8px rgba(37, 211, 102, 0.6)" }}>
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </div>
    </div>
  );
}
