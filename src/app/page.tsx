import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import PricingSection from "@/components/home/PricingSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SportsSection from "@/components/home/SportsSection";
import DeviceSupport from "@/components/home/DeviceSupport";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

const WebPlayerSection = dynamic(() => import("@/components/home/WebPlayerSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <CategoryStrip />
      <WebPlayerSection />
      <PricingSection />
      <FeaturesSection />
      <SportsSection />
      <DeviceSupport />
      <HowItWorksSection />
      <FAQSection />
      <LatestArticlesSection />
      <SupportCtaSection />
      <FinalCtaSection />
    </main>
  );
}
