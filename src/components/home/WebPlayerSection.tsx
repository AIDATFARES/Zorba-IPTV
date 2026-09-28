import Link from "next/link";
import { Laptop, CheckCircle2, ArrowRight } from "lucide-react";
import WebPlayerMockup from "./WebPlayerMockup";

export default function WebPlayerSection() {
  return (
    <section className="py-20 sm:py-28 relative z-10 border-t border-[#E4E5E1] bg-[#F8F8F5] overflow-hidden">
      
      {/* Soft blurred ambient orange glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F28C18]/6 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-6 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
              <Laptop className="w-3.5 h-3.5 text-[#F28C18]" />
              <span>INSTANT WEB PLAYER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-[#171717] leading-[1.15]">
              Watch Anywhere directly from your <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Browser</span>
            </h2>

            <p className="text-base sm:text-lg text-[#626262] mt-6 leading-relaxed font-normal">
              No downloads or <Link href="/installation" className="text-[#F28C18] hover:underline font-semibold">app installations</Link> required. Simply log into our browser-based Zorba IPTV web player to access all <Link href="/channels" className="text-[#F28C18] hover:underline font-semibold">50,000+ live IPTV channels</Link>, EPG guide, and VOD cinema library instantly on any PC, Mac, Laptop, or Tablet.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3.5 mt-8 text-sm sm:text-base text-[#171717] font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C18]" />
                </div>
                <span>Zero app installation required for web streaming</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C18]" />
                </div>
                <span>Integrated EPG program schedule &amp; channel search</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F28C18]" />
                </div>
                <span>Adaptive HLS/HEVC 4K ultra-low-latency player</span>
              </div>
            </div>

            {/* Launch Button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20test%20the%20Zorba%20IPTV%20Web%20Player."
                target="_blank"
                rel="noreferrer"
                className="btn-primary-zorba px-8 py-4 text-xs uppercase tracking-widest font-extrabold flex items-center gap-2.5 shadow-lg"
              >
                <span>LAUNCH WEB PLAYER</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/pricing"
                className="btn-secondary-zorba px-6 py-4 text-xs uppercase tracking-widest font-extrabold"
              >
                VIEW IPTV PLANS
              </Link>
            </div>
          </div>

          {/* Right Column: Web Player Interactive Mockup */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <WebPlayerMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
