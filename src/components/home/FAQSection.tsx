"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Zorba IPTV and how does it work?",
      a: "Zorba IPTV is a premium IPTV streaming service delivering over 50,000 live TV channels and 200,000+ VOD movies directly over the internet. Instead of traditional satellite or cable, Zorba IPTV streams content securely to your Smart TV, Firestick, smartphone, or PC using high-speed cloud servers.",
    },
    {
      q: "Which devices are compatible with Zorba IPTV?",
      a: "Zorba IPTV supports virtually all connected devices, including Samsung Tizen, LG webOS Smart TVs, Amazon Firestick, Android TV boxes, Apple TV, iPhone, Android phones, Windows, Mac, MAG boxes, and web browsers via our native Web Player.",
    },
    {
      q: "How do I install and set up Zorba IPTV?",
      a: "Setting up Zorba IPTV takes under 3 minutes. Once you subscribe, you receive your Xtream Codes login credentials and M3U playlist URL via email and WhatsApp. Simply download your preferred IPTV player app (such as TiviMate, IPTV Smarters Pro, or IBO Player), enter your credentials, and start watching immediately.",
    },
    {
      q: "Can I watch live sports and pay-per-view events?",
      a: "Yes! All Zorba IPTV plans include full access to major sports networks (NFL Sunday Ticket, NBA League Pass, MLB, NHL, Premier League, Champions League, UFC PPV, F1, and Box Office events) in 4K HDR at 60 FPS with zero extra fees.",
    },
    {
      q: "How fast is activation after ordering?",
      a: "Activation is fully automated. Your Zorba IPTV login credentials and setup guide are dispatched to your email address and WhatsApp instantly upon payment confirmation.",
    },
    {
      q: "Is a trial pass available to test Zorba IPTV?",
      a: "Yes, we offer trial options so you can evaluate channel quality, stream stability, and server performance before purchasing a long-term plan. Contact support on WhatsApp to request your Zorba IPTV trial.",
    },
    {
      q: "Can I use Zorba IPTV on multiple devices simultaneously?",
      a: "Yes, depending on your selected plan. Multi-device Zorba IPTV plans support 2 to 3 simultaneous connections across different devices in your home network.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative z-10 border-t border-[#E4E5E1] bg-[#F8F8F5]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-4 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ZORBA IPTV HELP &amp; QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#171717]">
            Got <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Questions?</span> We Have Answers
          </h2>
          <p className="text-[#626262] text-base sm:text-lg mt-4">
            Everything you need to know about Zorba IPTV subscription plans, setup instructions, device compatibility, and 4K server performance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="zorba-card rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#171717] text-base sm:text-lg hover:text-[#F28C18] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F28C18] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#626262] leading-relaxed border-t border-[#E2D7CC] pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA Link */}
        <div className="mt-12 text-center text-sm text-[#626262]">
          Still have questions?{" "}
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Zorba%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="text-[#F28C18] font-bold hover:underline inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Speak with 24/7 Zorba VIP Support
          </a>
        </div>

      </div>
    </section>
  );
}
