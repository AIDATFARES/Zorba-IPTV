"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, Star, Play, Volume2, Sliders } from "lucide-react";

export default function WebPlayerMockup() {
  const [selectedCategory, setSelectedCategory] = useState("Sports 4K");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Sports 4K", "Cinema", "News", "Kids"];

  const channels = [
    { id: 1, name: "Sky Sports Main Event 4K", category: "Sports 4K", nowPlaying: "Premier League Live", isFav: true, status: "4K 60FPS" },
    { id: 2, name: "TNT Sports 1 HD", category: "Sports 4K", nowPlaying: "UEFA Champions League", isFav: true, status: "FHD" },
    { id: 3, name: "BeIN Sports 1 Premium", category: "Sports 4K", nowPlaying: "La Liga Matchday", isFav: false, status: "4K" },
    { id: 4, name: "HBO Ultra Movies", category: "Cinema", nowPlaying: "Oppenheimer (2023)", isFav: false, status: "4K HDR" },
    { id: 5, name: "Discovery Science HD", category: "News", nowPlaying: "How It's Made 2026", isFav: true, status: "FHD" },
  ];

  return (
    <div className="relative w-full max-w-[720px] mx-auto group">
      {/* Outer Ambient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#F28C18]/25 via-[#F7A034]/20 to-[#F28C18]/25 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Browser Player Outer Frame */}
      <div className="relative bg-[#1A140F] border border-[#F28C18]/30 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Browser Top Navigation Bar */}
        <div className="bg-[#140F0B] px-4 py-3 border-b border-[#F28C18]/15 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full max-w-[340px]">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F7A034]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            {/* Fake URL Bar */}
            <div className="w-full bg-[#1E1712] px-3 py-1 rounded-md text-[11px] font-mono text-[#A8988A] flex items-center gap-1.5 border border-[#F28C18]/20 truncate">
              <span className="text-[#F7A034] text-[10px]">https://</span>web.zorba-iptv.store/player
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#F7A034] bg-[#F28C18]/15 px-2 py-0.5 rounded border border-[#F28C18]/25">
              WEB APP v3.0
            </span>
          </div>
        </div>

        {/* Browser Player Grid Layout */}
        <div className="grid grid-cols-12 min-h-[360px] bg-[#140F0B]">
          
          {/* Left Channel & Category Sidebar */}
          <div className="col-span-5 border-r border-[#F28C18]/15 p-3 bg-[#1A140F] flex flex-col justify-between">
            <div>
              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#A8988A]" />
                <input
                  type="text"
                  placeholder="Search 50,000+ channels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#140F0B] text-xs text-white placeholder-[#A8988A] pl-8 pr-2 py-1.5 rounded-md border border-[#F28C18]/20 focus:outline-none focus:border-[#F28C18]"
                />
              </div>

              {/* Categories Pills */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mb-3 pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap transition-colors shrink-0 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-[#F28C18] to-[#F7A034] text-[#171717] font-black shadow-sm"
                        : "bg-[#140F0B] text-[#D5C9BD] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Channel List */}
              <div className="space-y-1.5">
                {channels.map((ch) => (
                  <div
                    key={ch.id}
                    className={`p-2 rounded-lg text-left transition-all border flex items-center justify-between cursor-pointer ${
                      ch.id === 1
                        ? "bg-[#2A1F16] border-[#F28C18]/40 text-white shadow-[0_0_10px_rgba(242,140,24,0.18)]"
                        : "bg-[#1A140F]/60 border-white/[0.03] text-[#D5C9BD] hover:border-[#F28C18]/25"
                    }`}
                  >
                    <div className="truncate pr-1">
                      <div className="text-[11px] font-bold text-white flex items-center gap-1 truncate">
                        {ch.isFav && <Star className="w-2.5 h-2.5 fill-[#F7A034] text-[#F7A034] shrink-0" />}
                        {ch.name}
                      </div>
                      <div className="text-[9px] text-[#9E8E80] truncate">{ch.nowPlaying}</div>
                    </div>
                    <span className="text-[8px] font-extrabold bg-[#F28C18]/15 text-[#F7A034] px-1.5 py-0.5 rounded shrink-0">
                      {ch.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#A8988A]">
              <span>EPG Connected</span>
              <span className="text-[#F7A034] font-bold">0ms Delay</span>
            </div>
          </div>

          {/* Right Main Video Viewport */}
          <div className="col-span-7 p-3 flex flex-col justify-between bg-[#1A140F] relative">
            {/* Screen Header */}
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-extrabold text-white text-xs">Sky Sports Main Event 4K</span>
              </div>
              <span className="text-[10px] bg-[#F28C18]/15 text-[#F7A034] border border-[#F28C18]/25 px-2 py-0.5 rounded font-bold">
                HEVC H.265
              </span>
            </div>

            {/* Video Canvas Area */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10 flex items-center justify-center group/screen">
              {/* Screen Content */}
              <Image
                src="/zorba-web-multisport-2026.webp"
                alt="Zorba IPTV Web Player Stream"
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 600px"
                loading="lazy"
                className="object-cover object-center brightness-95 group-hover/screen:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between text-[10px] text-gray-300">
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-[#F7A034] text-[#F7A034]" />
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="text-[9px] text-[#A8988A]">LIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Player Status Bar */}
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#A8988A]">
              <span className="text-[#D5C9BD]">Stream: 4K 60FPS Bitrate: 32Mbps</span>
              <span className="text-[#F7A034] font-bold">Anti-Freeze Active</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
