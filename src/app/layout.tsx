import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moriah Systems | Digital Solutions That Matter",
    template: "%s | Moriah Systems",
  },
  description:
    "We build professional websites and custom software for businesses. From design to deployment, we handle everything so you can focus on what matters.",
  keywords: [
    "web development",
    "website design",
    "custom software",
    "digital solutions",
    "Moriah Systems",
    "business website",
    "affordable web development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Moriah Systems",
    title: "Moriah Systems | Digital Solutions That Matter",
    description:
      "We build professional websites and custom software for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Moriah Systems",
              url: "https://moriahsystems.com",
              description:
                "We build professional websites and custom software for businesses.",
              email: "moriahsystems@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
              },
              sameAs: [],
              serviceType: [
                "Website Development",
                "Web Hosting",
                "SEO",
                "Custom Software Development",
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
