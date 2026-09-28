
interface BrandLogoProps {
  compact?: boolean;
  light?: boolean;
}

export default function BrandLogo({ compact = false, light = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none font-sans ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Stream Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#F28C18] via-[#F7A034] to-[#DF790E] p-[1.5px] shadow-[0_4px_14px_rgba(242,140,24,0.3)]">
        <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F28C18]/10 via-[#F7A034]/10 to-[#F28C18]/15" />
          <svg
            className="w-4 h-4 text-[#F28C18] relative z-10 translate-x-[1px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className={`text-xl sm:text-2xl font-black tracking-tight ${light ? "text-white" : "text-[#171717]"}`}>
          Zorba<span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#F28C18] bg-clip-text text-transparent ml-1">IPTV</span>
        </span>
        <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25">
          4K
        </span>
      </div>
    </div>
  );
}
