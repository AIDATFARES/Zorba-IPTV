import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Zorba IPTV - Flexible IPTV Pricing Plans & Subscriptions | 4K & FHD",
  description: "Choose your Zorba IPTV subscription plan. Access 50,000+ live 4K channels, 200,000+ VODs, zero contracts & multi-device options. Instant activation within 3 minutes!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Zorba IPTV - Flexible IPTV Pricing Plans & Subscriptions | 4K & FHD",
    description: "Choose your Zorba IPTV subscription plan. Access 50,000+ live 4K channels, 200,000+ VODs, zero contracts & multi-device options. Instant activation within 3 minutes!",
    url: "https://www.zorba-iptv.store/pricing",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4 bg-[#F5F6F3]">
      <PricingPageContent />
    </main>
  );
}
