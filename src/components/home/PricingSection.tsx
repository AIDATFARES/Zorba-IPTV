import { CheckCircle2, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "1 Month",
      price: "$14.99",
      period: "Billed once for 30 Days",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "1 Device Connection",
        "Instant Email & WhatsApp Setup",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Zorba%20IPTV%201-Month%20Plan%20($14.99).",
    },
    {
      name: "3 Months",
      price: "$35.00",
      period: "Billed $35.00 every 3 Months (Save 22%)",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "1 Device Connection",
        "Instant Email & WhatsApp Setup",
        "7-Day Money Back Guarantee",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Zorba%20IPTV%203-Month%20Plan%20($35.00).",
    },
    {
      name: "6 Months",
      price: "$49.99",
      period: "Billed $49.99 every 6 Months (Save 44%)",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "2 Simultaneous Connections",
        "Instant Email & WhatsApp Setup",
        "Full EPG TV Guide",
        "7-Day Money Back Guarantee",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Zorba%20IPTV%206-Month%20Plan%20($49.99).",
    },
    {
      name: "12 Months",
      price: "$69.99",
      period: "Billed $69.99 every 12 Months (Save 61%)",
      popular: true,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "3 Simultaneous Connections",
        "Priority VIP Server Routing",
        "Instant Email & WhatsApp Setup",
        "Full EPG TV Guide & Catchup",
        "7-Day Money Back Guarantee",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Zorba%20IPTV%2012-Month%20Most%20Popular%20Plan%20($69.99).",
    },
    {
      name: "24 Months",
      price: "$120.00",
      period: "Billed $120.00 every 2 Years (Save 67%)",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "3 Simultaneous Connections",
        "Instant Automated Activation",
        "Free Adult Content Switch",
        "Lifetime VIP Technical Support",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Zorba%20IPTV%202-Year%20Best%20Value%20Plan%20($120.00).",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 border-t border-[#E4E5E1] bg-[#FFFFFF] overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#F28C18]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-4 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <Zap className="w-3.5 h-3.5" />
            <span>FLEXIBLE ZORBA IPTV SUBSCRIPTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#171717]">
            Choose Your <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Zorba IPTV Plan</span>
          </h2>
          <p className="text-[#626262] text-base sm:text-lg mt-4">
            Transparent pricing options with instant automated activation, 50,000+ live channels, 200,000+ VODs, and zero contract commitments.
          </p>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between relative pricing-card-interactive group cursor-pointer ${
                plan.popular
                  ? "zorba-featured-card pricing-card-featured scale-105 z-20"
                  : "zorba-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 bg-gradient-to-r from-[#F28C18] to-[#F7A034] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-[0_4px_14px_rgba(242,140,24,0.35)] flex items-center gap-1 whitespace-nowrap animate-popular-badge z-30">
                  <Sparkles className="w-3 h-3 text-white animate-sparkle-twinkle" /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#171717] group-hover:text-[#F28C18] transition-colors duration-300">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#171717] group-hover:scale-105 transition-transform duration-300 origin-left inline-block">{plan.price}</span>
                </div>
                <div className="text-[11px] text-[#626262] mt-1 font-medium">{plan.period}</div>

                <div className="my-6 border-t border-[#E2D7CC]" />

                <ul className="space-y-3 text-xs text-[#626262]">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 group/feat">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C18] shrink-0 mt-0.5 group-hover/feat:scale-125 transition-transform duration-200" />
                      <span className="group-hover/feat:text-[#171717] transition-colors">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/447882781998?text=${plan.whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 text-xs font-extrabold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary-zorba btn-shimmer-effect btn-primary-pulse shadow-lg"
                      : "btn-secondary-zorba group-hover:bg-[#F28C18] group-hover:text-white group-hover:border-[#F28C18] group-hover:shadow-[0_6px_20px_rgba(242,140,24,0.35)]"
                  }`}
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#EFE8E0] border border-[#E2D7CC] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-[0_4px_20px_rgba(45,30,20,0.04)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center text-[#F28C18] shrink-0 shadow-[0_2px_10px_rgba(242,140,24,0.12)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#171717]">100% Risk-Free Zorba IPTV Guarantee</h3>
              <p className="text-xs text-[#626262] mt-0.5">Enjoy premium 4K IPTV streaming or request assistance from our 24/7 technical team within 7 days.</p>
            </div>
          </div>

          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Zorba%20IPTV%20pricing."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-zorba px-6 py-2.5 text-xs whitespace-nowrap"
          >
            Have Questions? Chat Us
          </a>
        </div>

      </div>
    </section>
  );
}
