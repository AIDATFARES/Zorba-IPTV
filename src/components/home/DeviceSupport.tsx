import Link from "next/link";
import { Tv, Flame, Smartphone, Laptop, Monitor, HardDrive, Check, ArrowRight } from "lucide-react";

export default function DeviceSupport() {
  const devices = [
    { name: "Smart TV", desc: "Samsung Tizen, LG webOS, Sony Android TV", icon: Tv, tag: "Native App Support" },
    { name: "Amazon Firestick", desc: "Fire TV Stick 4K Max, Cube, All Generations", icon: Flame, tag: "1-Click Sideload" },
    { name: "Android TV / Box", desc: "NVIDIA Shield, Chromecast, Android 8+", icon: Monitor, tag: "TiviMate Compatible" },
    { name: "Apple TV & iOS", desc: "Apple TV 4K, iPhone, iPad (IPTVX, GSE)", icon: Smartphone, tag: "AirPlay 2 Supported" },
    { name: "Windows PC & Mac", desc: "Browser Web Player, VLC, IPTV Smarters Pro", icon: Laptop, tag: "Browser Native" },
    { name: "MAG & Formuler", desc: "MAG 322/424/524, Z10/Z11 Stalker Portal", icon: HardDrive, tag: "MAC Address Portal" },
  ];

  return (
    <section id="devices" className="py-24 relative z-10 border-t border-[#E4E5E1] bg-[#F8F8F5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-4 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <span>UNIVERSAL IPTV COMPATIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#171717]">
            Watch Zorba IPTV on <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Any Device</span>
          </h2>
          <p className="text-[#626262] text-base sm:text-lg mt-4">
            Zorba IPTV works seamlessly across all major operating systems, smart televisions, Firestick, and third-party IPTV player apps. View our detailed <Link href="/installation" className="text-[#F28C18] hover:underline font-semibold">IPTV Installation Tutorials</Link>.
          </p>
        </div>

        {/* 6 Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((dev, idx) => {
            const IconComponent = dev.icon;
            return (
              <div
                key={idx}
                className="zorba-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center text-[#F28C18] group-hover:scale-105 transition-transform shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 px-2.5 py-1 rounded-full">
                      {dev.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#171717] mb-2 group-hover:text-[#F28C18] transition-colors">
                    {dev.name}
                  </h3>

                  <p className="text-sm text-[#626262] leading-relaxed">
                    {dev.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2D7CC] flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Tested 100% Buffer-Free</span>
                  </div>
                  <Link
                    href="/installation"
                    className="text-[#F28C18] hover:text-[#DF790E] font-bold transition-colors"
                  >
                    Setup Guide →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/installation"
            className="btn-primary-zorba px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Open All Installation Tutorials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
