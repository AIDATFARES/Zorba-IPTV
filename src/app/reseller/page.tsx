import type { Metadata } from "next";
import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata: Metadata = {
  title: "Zorba IPTV - IPTV Reseller Program | High-Margin Xtream Codes Panel",
  description:
    "Start your profitable IPTV business with Zorba IPTV. Full reseller control panel, non-expiring credits, 99.9% anti-freeze servers & 24/7 dedicated VIP support.",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "Zorba IPTV - IPTV Reseller Program | High-Margin Xtream Codes Panel",
    description:
      "Start your profitable IPTV business with Zorba IPTV. Full reseller control panel, non-expiring credits, 99.9% anti-freeze servers & 24/7 dedicated VIP support.",
    url: "https://www.zorba-iptv.store/reseller",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4 bg-[#F5F6F3]">
      <ResellerPageContent />
    </main>
  );
}
