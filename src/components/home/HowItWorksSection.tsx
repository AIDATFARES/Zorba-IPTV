import { CreditCard, Mail, PlayCircle, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Select Your Zorba Plan",
      description: "Choose your preferred subscription tier (1, 3, 6, 12, or 24 Months) that best fits your household streaming needs.",
      icon: CreditCard,
    },
    {
      number: "02",
      title: "Receive Automated Credentials",
      description: "Get your login credentials, Xtream Codes API key, and M3U playlist link delivered instantly via email and WhatsApp.",
      icon: Mail,
    },
    {
      number: "03",
      title: "Start 4K Streaming",
      description: "Log into your preferred player app (TiviMate, Smarters Pro, IBO) or Zorba IPTV Web Player and enjoy live TV instantly.",
      icon: PlayCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10 border-t border-[#E4E5E1] bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-4 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <span>SIMPLE 3-STEP SETUP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#171717]">
            How <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Zorba IPTV</span> Works
          </h2>
          <p className="text-[#626262] text-base sm:text-lg mt-4">
            Fast, automated subscription setup with instant credentials delivery in under 3 minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="zorba-card p-8 rounded-2xl relative flex flex-col justify-between overflow-hidden group"
              >
                {/* Large Background Step Number (Decorative) */}
                <div aria-hidden="true" className="absolute top-2 right-4 text-7xl font-black text-[#F28C18]/[0.08] group-hover:text-[#F28C18]/15 transition-colors select-none font-mono pointer-events-none">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F28C18] to-[#F7A034] p-[1px] mb-6 shadow-xs">
                    <div className="w-full h-full bg-[#FAF6F1] rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#F28C18]" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#F28C18] mb-2">STEP {step.number}</div>
                  
                  <h3 className="text-2xl font-bold text-[#171717] tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#626262] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-[#F28C18]/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
