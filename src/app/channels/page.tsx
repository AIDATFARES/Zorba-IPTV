"use client";

import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  Radio,
  CirclePlay
} from "lucide-react";
import Link from "next/link";
import BrandMarquee from "@/components/home/BrandMarquee";
import ChannelListExplorer from "@/components/channels/ChannelListExplorer";

const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+120,000 Films & Series"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 relative overflow-hidden bg-[#F5F6F3]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#F28C18]/25 bg-[#F28C18]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F28C18] mb-6 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <Radio className="w-3.5 h-3.5 mr-2 text-[#F28C18] animate-pulse inline" />
            <span>50,000+ LIVE CHANNELS · 200,000+ VOD MOVIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#171717]">
            Zorba IPTV <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Live Channels &amp; VOD Lineup</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#626262] leading-relaxed">
            Explore the complete Zorba IPTV channel lineup featuring live sports, 4K movies, global news, premium entertainment, and on-demand series from over 150+ countries. Check our <Link href="/pricing" className="text-[#F28C18] hover:underline font-semibold">subscription plans</Link> or <Link href="/installation" className="text-[#F28C18] hover:underline font-semibold">setup guides</Link> to start watching.
          </p>
        </div>

        {/* Category Cards Grid */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="zorba-card p-6 rounded-2xl flex flex-col justify-between relative group"
                >
                  {category.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#F28C18]/10 border border-[#F28C18]/25 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#F28C18]">
                      {category.tag}
                    </span>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FEF7ED] border border-[#F28C18]/30 flex items-center justify-center text-[#F28C18] mb-4 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="text-xl font-bold text-[#171717] tracking-wide mb-4 group-hover:text-[#F28C18] transition-colors">
                      {category.title}
                    </h2>

                    <ul className="w-full space-y-2.5 mb-6">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#626262] leading-tight">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F28C18]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full pt-4 border-t border-[#E2D7CC] flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E8A]">Total Available</span>
                    <span className="text-xs font-bold text-[#F28C18]">{category.count}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Interactive Channel Explorer */}
        <ChannelListExplorer />

        {/* Marquee Strip */}
        <section className="mb-16 rounded-2xl overflow-hidden border border-[#E2D7CC]">
          <BrandMarquee />
        </section>

        {/* Quick Links Bar */}
        <div className="mb-16 p-6 rounded-2xl bg-[#EFE8E0] border border-[#E2D7CC] flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-[#626262] shadow-[0_4px_20px_rgba(23,23,23,0.03)]">
          <span>Need help setting up these channels on your device?</span>
          <div className="flex items-center gap-4">
            <Link href="/installation" className="text-[#F28C18] hover:underline">Device Setup Guide →</Link>
            <Link href="/faq" className="text-[#F28C18] hover:underline">Frequently Asked Questions →</Link>
            <Link href="/reseller" className="text-[#F28C18] hover:underline">Reseller Program →</Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="zorba-card p-8 sm:p-12 text-center rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#EFE8E0] via-[#F5EFE9] to-[#EAE1D7] border border-[#E2D7CC]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-[#F28C18] mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black text-[#171717]">Ready to Experience Zorba IPTV Live TV?</h2>
            <p className="mt-3 text-[#626262] text-sm sm:text-base leading-relaxed">
              Select your preferred Zorba IPTV subscription plan to receive instant activation credentials via email and WhatsApp within seconds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary-zorba px-8 py-3.5 text-xs uppercase tracking-wider font-extrabold shadow-lg"
              >
                View Zorba IPTV Plans
              </Link>
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Zorba%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-zorba px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
