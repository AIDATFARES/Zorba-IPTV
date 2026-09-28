"use client";

import { useState } from "react";
import { ChevronDown, Mail, MessageCircle, Send, Clock3 } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What is Zorba IPTV?",
    answer: (
      <>
        Zorba IPTV is an elite IPTV streaming service delivering 50,000+ live TV channels, 200,000+ VOD movies, television series, and live sports in true 4K and FHD quality over the internet with anti-freeze server stability.
      </>
    ),
  },
  {
    question: "Is Zorba IPTV compatible with my streaming devices?",
    answer: (
      <>
        Yes! Zorba IPTV works seamlessly across Smart TVs (Samsung Tizen, LG webOS, Sony Android TV), Amazon Firestick, Android boxes, Apple TV, iOS, Windows, Mac, MAG boxes, and web browsers via our native Web Player.
      </>
    ),
  },
  {
    question: "What channels and content are included with Zorba IPTV?",
    answer: (
      <>
        Zorba IPTV includes over 50,000 live channels across sports, news, entertainment, and kids programming from 150+ countries, alongside 200,000+ VOD movies and daily updated series collections.
      </>
    ),
  },
  {
    question: "Can I watch live sports and PPV events on Zorba IPTV?",
    answer: (
      <>
        Yes! Zorba IPTV includes all premium pay-per-view sports networks (NFL Sunday Ticket, NBA League Pass, MLB, NHL, UFC PPV, Boxing, F1, Premier League, and Champions League) with zero extra fees.
      </>
    ),
  },
  {
    question: "How fast is activation after ordering?",
    answer: (
      <>
        Activation is instant and fully automated. Your Zorba IPTV login credentials and M3U playlist details are sent to your email and WhatsApp immediately after payment confirmation.
      </>
    ),
  },
  {
    question: "Do I need a VPN to stream Zorba IPTV?",
    answer: (
      <>
        A VPN is not strictly required because our cloud servers use encrypted stream tunnels. However, Zorba IPTV is 100% VPN-friendly if your local ISP throttles streaming connections.
      </>
    ),
  },
  {
    question: "Can I test Zorba IPTV before committing to a plan?",
    answer: (
      <>
        Yes! We offer 24-hour trial options so you can experience channel quality, stream stability, and server performance before purchasing a long-term plan. Contact our WhatsApp VIP team to get your trial.
      </>
    ),
  },
  {
    question: "Are there any hidden fees or contracts with Zorba IPTV?",
    answer: (
      <>
        No contracts and no hidden fees. You only pay for the Zorba IPTV plan duration you choose (1, 3, 6, 12, or 24 months).
      </>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello Zorba IPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/447882781998?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-28 bg-[#F5F6F3] text-[#171717] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      <div className="mx-auto max-w-[1140px] relative z-10">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#F28C18]/10 text-[#F28C18] font-bold text-xs tracking-widest uppercase mb-4 border border-[#F28C18]/20 shadow-[0_2px_12px_rgba(242,140,24,0.08)]">
            ZORBA IPTV HELP CENTER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#626262]">
            Find answers to common questions about Zorba IPTV setups, channel lineups, device compatibility, and subscription plans.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const contentId = `faq-item-${index}`;

            return (
              <div 
                key={index} 
                className="zorba-card rounded-xl overflow-hidden"
              >
                <button
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-[#171717] focus:outline-none hover:text-[#F28C18] transition-colors"
                >
                  <span className="text-sm md:text-base">{faq.question}</span>
                  <span className={`text-[#F28C18] shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={contentId}
                    className="p-5 pt-0 text-xs sm:text-sm leading-relaxed text-[#626262] border-t border-[#E2D7CC] pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <section className="mt-20 border-t border-[#E2D7CC] pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-[#171717]">Get in Touch with Zorba Support</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#626262]">We&apos;re here 24/7 to assist with playlist setup and technical questions.</p>
          </header>
          
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="zorba-card p-5 text-center flex flex-col items-center justify-center rounded-2xl" href="mailto:support@zorba-iptv.store">
                <div className="w-10 h-10 rounded-xl bg-[#F28C18]/10 border border-[#F28C18]/25 text-[#F28C18] flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-[#171717]">Email Us</span>
                <span className="mt-1 block text-xs text-[#626262]">support@zorba-iptv.store</span>
              </a>

              <a className="zorba-card p-5 text-center flex flex-col items-center justify-center rounded-2xl" href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Zorba%20IPTV." target="_blank" rel="noreferrer">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-[#171717]">WhatsApp</span>
                <span className="mt-1 block text-xs text-emerald-700 font-bold">Start Live Chat</span>
              </a>

              <div className="zorba-card p-5 text-center flex flex-col items-center justify-center rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#F28C18]/10 border border-[#F28C18]/25 text-[#F28C18] flex items-center justify-center mb-3">
                  <Clock3 className="h-5 w-5" />
                </div>
                <span className="block text-sm font-bold text-[#171717]">Response Time</span>
                <span className="mt-1 block text-xs text-[#626262]">Under 15 minutes</span>
              </div>
            </div>

            <div className="zorba-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#171717] mb-6">Send us a message</h3>
              <form action={sendSupportMessage} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-[#E2D7CC] bg-[#FAF6F1] px-4 py-3 text-sm text-[#171717] placeholder:text-[#626262]/60 outline-none focus:border-[#F28C18]" name="name" placeholder="John Doe" required />
                  <input className="w-full rounded-xl border border-[#E2D7CC] bg-[#FAF6F1] px-4 py-3 text-sm text-[#171717] placeholder:text-[#626262]/60 outline-none focus:border-[#F28C18]" name="email" placeholder="john@example.com" required type="email" />
                </div>
                <input className="w-full rounded-xl border border-[#E2D7CC] bg-[#FAF6F1] px-4 py-3 text-sm text-[#171717] placeholder:text-[#626262]/60 outline-none focus:border-[#F28C18]" name="subject" placeholder="How can we help?" />
                <textarea className="min-h-32 w-full resize-y rounded-xl border border-[#E2D7CC] bg-[#FAF6F1] px-4 py-3 text-sm text-[#171717] placeholder:text-[#626262]/60 outline-none focus:border-[#F28C18]" name="message" placeholder="Describe your question..." required />
                <button className="btn-primary-zorba w-full py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg" type="submit">
                  <Send className="h-4 w-4" /> Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
