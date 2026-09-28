import { ArrowRight, Sparkles, Tv } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-28 relative z-10 overflow-hidden border-t border-[#E4E5E1] bg-[#F5F6F3]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl p-10 lg:p-20 text-center overflow-hidden bg-gradient-to-br from-[#EFE8E0] via-[#F5EFE9] to-[#EAE1D7] border border-[#E2D7CC] shadow-lg">
          
          {/* Subtle Warm Accent Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F28C18]/15 via-[#F7A034]/10 to-[#F28C18]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-6 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
              <Sparkles className="w-4 h-4 text-[#F28C18]" />
              <span>UNLIMITED 4K IPTV ENTERTAINMENT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#171717] leading-tight">
              Ready to Upgrade Your <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">IPTV Experience?</span>
            </h2>

            <p className="text-base sm:text-xl text-[#626262] mt-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied Zorba IPTV subscribers watching live sports, movies, and TV shows in 4K HDR. Instant account activation in under 3 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
              <a
                href="#pricing"
                className="btn-primary-zorba px-9 py-4 text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg"
              >
                <span>Get Zorba IPTV Access</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Zorba%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-zorba px-9 py-4 text-sm font-semibold flex items-center gap-2"
              >
                <Tv className="w-4 h-4 text-[#F28C18]" />
                <span>Request Trial Pass</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
