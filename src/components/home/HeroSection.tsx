import Link from "next/link";
import { Zap, Tv, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import IPTVHeroMockup from "./IPTVHeroMockup";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Subtle ambient orange glow behind hero */}
      <div className="absolute top-12 left-10 w-[520px] h-[520px] bg-[#F28C18]/7 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-24 right-5 w-[420px] h-[420px] bg-[#F28C18]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-6 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
              <Zap className="w-3.5 h-3.5 text-[#F28C18] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-black">ZORBA IPTV NEXT-GEN STREAMING NETWORK</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.05] text-[#171717]">
              Zorba IPTV — Premium 4K IPTV Service Built for{" "}
              <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">
                Live TV, Sports &amp; Cinema
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#626262] font-normal mt-6 max-w-[620px] leading-relaxed">
              Experience high-performance streaming with Zorba IPTV. Access over <Link href="/channels" className="text-[#F28C18] hover:underline font-semibold">50,000 live international channels</Link>, 200,000+ VOD movies, and high-bitrate live sports in ultra-crisp 4K/FHD with zero-freeze server stability.
            </p>

            {/* CTAs with Animations */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9 w-full sm:w-auto">
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%2024-hour%20free%20trial%20for%20Zorba%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-primary-zorba btn-primary-pulse btn-shimmer-effect px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-black flex items-center justify-center gap-2.5 group shadow-xl active:scale-95 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-white animate-sparkle-twinkle shrink-0" />
                <span>START 24H FREE TRIAL</span>
                <ArrowRight className="w-4 h-4 text-white animate-arrow-slide group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
              </a>

              <Link
                href="/pricing"
                className="btn-secondary-zorba btn-secondary-float btn-secondary-shimmer px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-extrabold flex items-center justify-center gap-2.5 group active:scale-95 transition-all duration-300"
              >
                <Tv className="w-4 h-4 text-[#F28C18] animate-tv-bounce group-hover:scale-125 transition-transform duration-300 shrink-0" />
                <span>VIEW ALL IPTV PLANS</span>
              </Link>
            </div>

            {/* Trust / Benefit Points */}
            <div className="grid grid-cols-2 sm:flex items-center gap-5 mt-10 pt-8 border-t border-[#E4E5E1] w-full text-xs font-semibold text-[#626262]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C18] shrink-0" />
                <span>4K Ultra HD Streaming</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C18] shrink-0" />
                <Link href="/installation" className="hover:text-[#F28C18] transition-colors">Multi-Device Support</Link>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C18] shrink-0" />
                <Link href="/how-it-works" className="hover:text-[#F28C18] transition-colors">Instant Automated Setup</Link>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C18] shrink-0" />
                <Link href="/contact" className="hover:text-[#F28C18] transition-colors">24/7 Zorba VIP Support</Link>
              </div>
            </div>

          </div>

          {/* Right Column: Original IPTV Interface Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <IPTVHeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
