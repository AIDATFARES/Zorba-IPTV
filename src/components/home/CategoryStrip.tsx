"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "SPORTS 4K", color: "bg-[#F28C18]" },
    { name: "CINEMA & VOD", color: "bg-[#F7A034]" },
    { name: "NEWS LIVE", color: "bg-[#DF790E]" },
    { name: "DOCUMENTARIES", color: "bg-[#F28C18]" },
    { name: "KIDS & FAMILY", color: "bg-[#F7A034]" },
    { name: "MUSIC CHANNELS", color: "bg-[#DF790E]" },
    { name: "INTERNATIONAL TV", color: "bg-[#F28C18]" },
    { name: "LIFESTYLE", color: "bg-[#F7A034]" },
    { name: "PPV EVENTS", color: "bg-[#F28C18]" },
    { name: "4K ULTRA HD", color: "bg-[#F7A034]" },
    { name: "SERIES & SHOWS", color: "bg-[#DF790E]" },
  ];

  // Duplicate categories to create a seamless infinite marquee scroll
  const duplicatedCategories = [...categories, ...categories, ...categories];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-6 border-y border-[#E4E5E1] bg-[#FFFFFF] relative group">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative flex items-center">
        
        {/* Left Arrow Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF6F1] border border-[#E2D7CC] text-[#171717] hover:bg-[#F28C18] hover:text-white hover:border-[#F28C18] transition-all shadow-md opacity-90 hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Container with Marquee Animation */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          <div className="flex items-center gap-3 w-max animate-marquee-infinite hover:[animation-play-state:paused]">
            {duplicatedCategories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-black tracking-wider text-[#171717] hover:text-[#F28C18] hover:border-[#F28C18]/50 hover:bg-[#FAF6F1] transition-all cursor-pointer whitespace-nowrap shrink-0 border border-[#E2D7CC] bg-[#EFE8E0] shadow-xs"
              >
                <span className={`w-2 h-2 rounded-full ${cat.color} shadow-[0_0_8px_rgba(242,140,24,0.4)]`} />
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF6F1] border border-[#E2D7CC] text-[#171717] hover:bg-[#F28C18] hover:text-white hover:border-[#F28C18] transition-all shadow-md opacity-90 hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}
