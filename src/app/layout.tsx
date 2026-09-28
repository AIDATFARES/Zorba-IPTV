import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zorba IPTV - #1 Ultra 4K IPTV Subscription | 50,000+ Channels & VOD",
  description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Zorba IPTV. Anti-freeze server technology, instant automated activation & 24/7 VIP support. Start today!",
  metadataBase: new URL("https://www.zorba-iptv.store"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icon.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.png?v=3",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zorba IPTV - #1 Ultra 4K IPTV Subscription | 50,000+ Channels & VOD",
    description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Zorba IPTV. Anti-freeze server technology, instant automated activation & 24/7 VIP support. Start today!",
    url: "https://www.zorba-iptv.store",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorba IPTV - #1 Ultra 4K IPTV Subscription | 50,000+ Channels & VOD",
    description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Zorba IPTV. Anti-freeze server technology, instant automated activation & 24/7 VIP support. Start today!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="global-grid-bg text-[#171717] min-h-screen flex flex-col antialiased selection:bg-[#F28C18] selection:text-white">
        {/* Header Navigation */}
        <Navbar />

        <div className="flex-grow flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-[#E4E5E1] bg-[#F8F8F5] text-[#171717]">
          <div className="max-w-[1400px] mx-auto px-6 py-16 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" aria-label="Zorba IPTV Homepage" className="inline-block">
                  <BrandLogo light={false} />
                </Link>
                <p className="text-sm text-[#626262] max-w-sm leading-relaxed">
                  Zorba IPTV is an elite global IPTV platform delivering ultra-high-bitrate live television, 4K sports passes, and on-demand cinema with 99.9% anti-freeze stability.
                </p>
                <div className="pt-2 text-xs text-[#8E8E8A]">
                  © 2026 Zorba IPTV (www.zorba-iptv.store). All rights reserved.
                </div>
              </div>

              {/* Product Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider">Product</h3>
                <ul className="space-y-2.5 text-sm text-[#626262]">
                  <li><Link href="/pricing" className="hover:text-[#F28C18] transition-colors">Plans &amp; Pricing</Link></li>
                  <li><Link href="/channels" className="hover:text-[#F28C18] transition-colors">Channel List</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-[#F28C18] transition-colors">How It Works</Link></li>
                  <li><Link href="/reseller" className="hover:text-[#F28C18] transition-colors">Reseller Panel</Link></li>
                </ul>
              </div>

              {/* Support Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider">Support</h3>
                <ul className="space-y-2.5 text-sm text-[#626262]">
                  <li><Link href="/installation" className="hover:text-[#F28C18] transition-colors">Install Guide</Link></li>
                  <li><Link href="/faq" className="hover:text-[#F28C18] transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-[#F28C18] transition-colors">Contact Us</Link></li>
                  <li>
                    <a 
                      href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Zorba%20IPTV." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-[#F28C18] transition-colors flex items-center gap-1.5"
                    >
                      <span>WhatsApp VIP Support</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company & Legal Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider">Company</h3>
                <ul className="space-y-2.5 text-sm text-[#626262]">
                  <li><Link href="/blog" className="hover:text-[#F28C18] transition-colors">Blog &amp; Guides</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#F28C18] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-[#F28C18] transition-colors">Refund Policy</Link></li>
                  <li><Link href="/dmca" className="hover:text-[#F28C18] transition-colors">DMCA Disclaimer</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

        {/* Global Floating WhatsApp Support Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
