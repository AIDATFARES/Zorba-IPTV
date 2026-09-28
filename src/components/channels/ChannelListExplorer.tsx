"use client";

import { useState, useMemo } from "react";
import { Search, Tv, Globe, Film, Trophy, Radio } from "lucide-react";

interface Channel {
  id: string;
  name: string;
  category: string;
  country: string;
  quality: "4K" | "FHD" | "HD";
  fps?: string;
  popular?: boolean;
}

const ALL_CHANNELS: Channel[] = [
  // Sports Channels
  { id: "s1", name: "Sky Sports Main Event 4K", category: "Sports 4K", country: "UK", quality: "4K", fps: "60FPS", popular: true },
  { id: "s2", name: "Sky Sports Premier League", category: "Sports 4K", country: "UK", quality: "4K", fps: "60FPS", popular: true },
  { id: "s3", name: "TNT Sports 1 4K HDR", category: "Sports 4K", country: "UK", quality: "4K", fps: "60FPS", popular: true },
  { id: "s4", name: "TNT Sports 2 HD", category: "Sports 4K", country: "UK", quality: "FHD" },
  { id: "s5", name: "BeIN Sports 1 Premium 4K", category: "Sports 4K", country: "MENA", quality: "4K", fps: "60FPS", popular: true },
  { id: "s6", name: "BeIN Sports Global HD 1-8", category: "Sports 4K", country: "MENA", quality: "FHD" },
  { id: "s7", name: "DAZN 1 Bar HD", category: "Sports 4K", country: "Germany", quality: "FHD", popular: true },
  { id: "s8", name: "DAZN 2 Bar HD", category: "Sports 4K", country: "Germany", quality: "FHD" },
  { id: "s9", name: "ESPN 1 4K Ultra", category: "Sports 4K", country: "USA", quality: "4K", fps: "60FPS", popular: true },
  { id: "s10", name: "ESPN 2 HD", category: "Sports 4K", country: "USA", quality: "FHD" },
  { id: "s11", name: "Fox Sports 1 (FS1) 4K", category: "Sports 4K", country: "USA", quality: "4K", fps: "60FPS" },
  { id: "s12", name: "Canal+ Foot 4K", category: "Sports 4K", country: "France", quality: "4K", popular: true },
  { id: "s13", name: "Canal+ Sport 360", category: "Sports 4K", country: "France", quality: "FHD" },
  { id: "s14", name: "RMC Sport 1 4K", category: "Sports 4K", country: "France", quality: "4K" },
  { id: "s15", name: "Movistar+ LaLiga 4K", category: "Sports 4K", country: "Spain", quality: "4K", fps: "60FPS", popular: true },
  { id: "s16", name: "Movistar+ Liga de Campeones", category: "Sports 4K", country: "Spain", quality: "FHD" },
  { id: "s17", name: "Sky Sport Uno 4K", category: "Sports 4K", country: "Italy", quality: "4K" },
  { id: "s18", name: "SuperSport Premier League 4K", category: "Sports 4K", country: "South Africa", quality: "4K" },
  { id: "s19", name: "Eurosport 1 4K", category: "Sports 4K", country: "Global", quality: "4K" },
  { id: "s20", name: "UFC Fight Pass Live", category: "Sports 4K", country: "USA", quality: "4K", popular: true },

  // USA & UK Entertainment & Cinema
  { id: "e1", name: "HBO HD East", category: "Entertainment", country: "USA", quality: "FHD", popular: true },
  { id: "e2", name: "HBO Max Cinema 4K", category: "Entertainment", country: "USA", quality: "4K", popular: true },
  { id: "e3", name: "Cinemax Action HD", category: "Entertainment", country: "USA", quality: "FHD" },
  { id: "e4", name: "Showtime East 4K", category: "Entertainment", country: "USA", quality: "4K" },
  { id: "e5", name: "Starz Edge 4K", category: "Entertainment", country: "USA", quality: "4K" },
  { id: "e6", name: "BBC One London 4K", category: "Entertainment", country: "UK", quality: "4K", popular: true },
  { id: "e7", name: "BBC Two HD", category: "Entertainment", country: "UK", quality: "FHD" },
  { id: "e8", name: "ITV 1 4K", category: "Entertainment", country: "UK", quality: "4K" },
  { id: "e9", name: "Channel 4 HD", category: "Entertainment", country: "UK", quality: "FHD" },
  { id: "e10", name: "Sky Atlantic 4K HDR", category: "Entertainment", country: "UK", quality: "4K", popular: true },
  { id: "e11", name: "Sky Cinema Premiere 4K", category: "Movies & VOD", country: "UK", quality: "4K", popular: true },
  { id: "e12", name: "Sky Cinema Action", category: "Movies & VOD", country: "UK", quality: "FHD" },
  { id: "e13", name: "ABC East HD", category: "Entertainment", country: "USA", quality: "FHD" },
  { id: "e14", name: "CBS HD", category: "Entertainment", country: "USA", quality: "FHD" },
  { id: "e15", name: "NBC HD", category: "Entertainment", country: "USA", quality: "FHD" },
  { id: "e16", name: "FOX 4K Network", category: "Entertainment", country: "USA", quality: "4K" },

  // News & Documentaries
  { id: "n1", name: "CNN International 4K", category: "News & Docs", country: "USA", quality: "4K" },
  { id: "n2", name: "BBC News HD", category: "News & Docs", country: "UK", quality: "FHD" },
  { id: "n3", name: "Sky News UK 4K", category: "News & Docs", country: "UK", quality: "4K" },
  { id: "n4", name: "Al Jazeera English HD", category: "News & Docs", country: "Global", quality: "FHD" },
  { id: "n5", name: "CNBC HD", category: "News & Docs", country: "USA", quality: "FHD" },
  { id: "n6", name: "Bloomberg TV 4K", category: "News & Docs", country: "USA", quality: "4K" },
  { id: "d1", name: "National Geographic 4K", category: "News & Docs", country: "Global", quality: "4K", popular: true },
  { id: "d2", name: "Discovery Channel 4K", category: "News & Docs", country: "USA", quality: "4K", popular: true },
  { id: "d3", name: "Animal Planet HD", category: "News & Docs", country: "USA", quality: "FHD" },
  { id: "d4", name: "History Channel 4K", category: "News & Docs", country: "USA", quality: "4K" },

  // International & Regional
  { id: "i1", name: "Canal+ Cinema France 4K", category: "International", country: "France", quality: "4K" },
  { id: "i2", name: "TF1 HD France", category: "International", country: "France", quality: "FHD" },
  { id: "i3", name: "M6 HD France", category: "International", country: "France", quality: "FHD" },
  { id: "i4", name: "Movistar Estrenos 4K", category: "International", country: "Spain", quality: "4K" },
  { id: "i5", name: "Antena 3 HD", category: "International", country: "Spain", quality: "FHD" },
  { id: "i6", name: "Rai 1 4K Italy", category: "International", country: "Italy", quality: "4K" },
  { id: "i7", name: "Ziggo Sport Select 4K", category: "International", country: "Netherlands", quality: "4K" },
  { id: "i8", name: "OSN Movies First 4K", category: "International", country: "MENA", quality: "4K", popular: true },
  { id: "i9", name: "MBC 1 HD", category: "International", country: "MENA", quality: "FHD" },
  { id: "i10", name: "Rotana Cinema HD", category: "International", country: "MENA", quality: "FHD" },

  // Kids & Family
  { id: "k1", name: "Disney Channel 4K", category: "Kids & Family", country: "Global", quality: "4K" },
  { id: "k2", name: "Cartoon Network HD", category: "Kids & Family", country: "USA", quality: "FHD" },
  { id: "k3", name: "Nickelodeon HD", category: "Kids & Family", country: "USA", quality: "FHD" },
  { id: "k4", name: "Boomerang HD", category: "Kids & Family", country: "Global", quality: "FHD" },
  { id: "k5", name: "CBeebies UK 4K", category: "Kids & Family", country: "UK", quality: "4K" },

  // VOD Movies & Streaming Hits
  { id: "v1", name: "4K VOD: Latest Box Office Cinema", category: "Movies & VOD", country: "Global", quality: "4K", popular: true },
  { id: "v2", name: "Netflix 4K Original Series Collection", category: "Movies & VOD", country: "Global", quality: "4K", popular: true },
  { id: "v3", name: "Disney+ Pixar & Marvel 4K Collection", category: "Movies & VOD", country: "Global", quality: "4K", popular: true },
  { id: "v4", name: "Amazon Prime Video Hits 4K", category: "Movies & VOD", country: "Global", quality: "4K" },
  { id: "v5", name: "Apple TV+ Series 4K", category: "Movies & VOD", country: "Global", quality: "4K" },
];

const CATEGORIES = [
  "All Categories",
  "Sports 4K",
  "Entertainment",
  "Movies & VOD",
  "News & Docs",
  "International",
  "Kids & Family",
];

export default function ChannelListExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [qualityFilter, setQualityFilter] = useState<"All" | "4K" | "FHD">("All");

  const filteredChannels = useMemo(() => {
    return ALL_CHANNELS.filter((ch) => {
      const matchesCategory =
        selectedCategory === "All Categories" || ch.category === selectedCategory;

      const matchesSearch =
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesQuality =
        qualityFilter === "All" || ch.quality === qualityFilter;

      return matchesCategory && matchesSearch && matchesQuality;
    });
  }, [selectedCategory, searchQuery, qualityFilter]);

  return (
    <section className="w-full my-16">
      {/* Header & Controls */}
      <div className="zorba-card p-6 sm:p-10 rounded-3xl mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-3 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
              <Tv className="w-3.5 h-3.5" />
              INTERACTIVE CHANNEL EXPLORER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#171717]">
              Search &amp; Explore <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Live Channels Lineup</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#626262] mt-1">
              Showing <strong className="text-[#171717]">{filteredChannels.length}</strong> channels from our active 50,000+ lineup.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-[#8E8E8A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channel or country..."
              className="w-full rounded-xl bg-[#FAF6F1] border border-[#E2D7CC] pl-11 pr-4 py-3 text-xs text-[#171717] placeholder-[#8E8E8A] focus:border-[#F28C18] focus:outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2D7CC] pt-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#F28C18] text-white shadow-xs font-black"
                    : "bg-[#FAF6F1] border border-[#E2D7CC] text-[#171717] hover:text-[#F28C18] hover:border-[#F28C18]/40 hover:bg-[#EFE8E0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quality Filter */}
          <div className="flex items-center gap-2 bg-[#FAF6F1] p-1 rounded-full border border-[#E2D7CC]">
            <span className="text-[10px] font-bold text-[#8E8E8A] uppercase px-3">Resolution:</span>
            {(["All", "4K", "FHD"] as const).map((q) => (
              <button
                key={q}
                onClick={() => setQualityFilter(q)}
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase transition-all ${
                  qualityFilter === q
                    ? "bg-[#F28C18] text-white shadow-xs"
                    : "text-[#626262] hover:text-[#171717]"
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Grid */}
      {filteredChannels.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="bg-[#FAF6F1] border border-[#E2D7CC] hover:border-[#F28C18]/50 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 group hover:shadow-[0_4px_18px_rgba(242,140,24,0.12)]"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2D7CC] flex items-center justify-center text-[#F28C18] shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Radio className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-black text-[#171717] truncate group-hover:text-[#F28C18] transition-colors">
                      {channel.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-[#626262] uppercase">
                      {channel.country}
                    </span>
                    <span className="text-[10px] text-[#8E8E8A]">•</span>
                    <span className="text-[10px] text-[#626262]">
                      {channel.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0">
                <span
                  className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                    channel.quality === "4K"
                      ? "bg-[#F28C18]/15 text-[#F28C18] border border-[#F28C18]/30 shadow-xs"
                      : "bg-[#F7A034]/15 text-[#DF790E] border border-[#F7A034]/30"
                  }`}
                >
                  {channel.quality} {channel.fps || ""}
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  LIVE
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="zorba-card p-12 text-center rounded-3xl">
          <p className="text-sm font-bold text-[#626262]">
            No channels found matching &quot;{searchQuery}&quot;. Try adjusting your search query or category filter.
          </p>
        </div>
      )}

      {/* Package Breakdown Summary */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="zorba-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-[#F28C18]">
            <Trophy className="w-5 h-5" />
            <h3 className="text-base font-bold text-[#171717]">50,000+ Live Channels</h3>
          </div>
          <p className="text-xs text-[#626262] leading-relaxed">
            Includes premium sports networks, 24/7 live events, local news, and regional broadcasts from over 150+ countries.
          </p>
        </div>

        <div className="zorba-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-[#F28C18]">
            <Film className="w-5 h-5" />
            <h3 className="text-base font-bold text-[#171717]">200,000+ VOD Movies &amp; Series</h3>
          </div>
          <p className="text-xs text-[#626262] leading-relaxed">
            Full on-demand library featuring blockbusters, Netflix originals, HBO classics, Disney+ hits, and multi-language subtitles.
          </p>
        </div>

        <div className="zorba-card p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-3 text-[#F28C18]">
            <Globe className="w-5 h-5" />
            <h3 className="text-base font-bold text-[#171717]">99.9% Server Uptime</h3>
          </div>
          <p className="text-xs text-[#626262] leading-relaxed">
            Powered by high-bandwidth CDN anti-freeze servers ensuring buffer-free streaming during major live sports events.
          </p>
        </div>
      </div>
    </section>
  );
}
