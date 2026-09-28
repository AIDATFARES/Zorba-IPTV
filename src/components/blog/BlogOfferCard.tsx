import { Gift, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="w-full bg-[#EFE8E0] rounded-2xl p-6 md:p-8 my-10 border border-[#E2D7CC] relative overflow-hidden group shadow-sm transition-all duration-300">
      {/* Subtle Warm Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F28C18]/[0.04] via-transparent to-[#F7A034]/[0.04] opacity-80 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#F28C18]/[0.08] blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#F7A034]/[0.06] blur-[90px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F28C18]/10 text-[#F28C18] text-xs font-black uppercase tracking-wider border border-[#F28C18]/20 shadow-xs">
              <Gift className="w-3.5 h-3.5" />
              24-Hour Free Trial
            </span>
          </div>
          
          {/* Headline */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#171717] mb-2 tracking-tight">
            Get Your Zorba IPTV <span className="bg-gradient-to-r from-[#F28C18] via-[#E57E0E] to-[#F7A034] bg-clip-text text-transparent">Free Trial</span>
          </h3>
          
          {/* Subtitle / Description */}
          <p className="text-[#626262] text-sm md:text-base mb-4 max-w-2xl leading-relaxed">
            Test our premium anti-freeze 4K IPTV service for 24 hours with zero commitment. Instant setup to watch over 50,000+ live channels, sports, and 200,000+ VODs on any device!
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#626262]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F28C18]" /> Instant WhatsApp Setup
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F28C18]" /> No Credit Card Needed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F28C18]" /> All 4K Channels Included
            </span>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto mt-2 lg:mt-0">
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024-hour%20trial%20for%20Zorba%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-zorba inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <span>Get Free Trial Now</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
