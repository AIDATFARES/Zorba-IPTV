"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CHANNELS", href: "/channels" },
    { name: "PRICING", href: "/pricing" },
    { name: "SETUP", href: "/installation" },
    { name: "RESELLER", href: "/reseller" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F6F3]/95 backdrop-blur-xl border-b border-[#E4E5E1] py-3 shadow-[0_4px_20px_rgba(23,23,23,0.04)]"
          : "bg-[#F5F6F3]/85 backdrop-blur-md border-b border-[#E4E5E1]/80 py-4"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between relative">
        
        {/* BRAND LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* CENTER CAPSULE NAVIGATION BAR */}
        <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#E4E5E1] bg-white/95 p-1.5 backdrop-blur-md shadow-[0_2px_12px_rgba(23,23,23,0.04)]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#F28C18] text-white shadow-[0_2px_10px_rgba(242,140,24,0.3)] font-black"
                    : "text-[#171717] hover:text-[#F28C18] hover:bg-[#FEF7ED] font-bold"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTON */}
        <div className="hidden sm:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20get%20started%20with%20Zorba%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#F28C18] hover:from-[#DF790E] hover:to-[#F28C18] text-white text-xs font-black uppercase tracking-wider px-7 py-3 shadow-[0_4px_16px_rgba(242,140,24,0.35)] hover:shadow-[0_6px_22px_rgba(242,140,24,0.45)] transition-all duration-300 active:scale-[0.98]"
          >
            GET STARTED
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#171717] p-2.5 rounded-full bg-[#FEF7ED] hover:bg-[#FDEBD2] border border-[#E4E5E1] transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#F28C18]" /> : <Menu className="w-6 h-6 text-[#F28C18]" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F6F3]/98 border-b border-[#E4E5E1] px-6 py-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#F28C18] to-[#F7A034] text-white font-black"
                      : "text-[#171717] hover:bg-[#FEF7ED] font-bold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E4E5E1]">
            <a
              href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20get%20started%20with%20Zorba%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full block text-center rounded-full bg-gradient-to-r from-[#F28C18] to-[#F7A034] text-white text-xs font-black uppercase tracking-wider py-3 shadow-md"
            >
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
