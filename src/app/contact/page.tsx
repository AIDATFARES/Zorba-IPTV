"use client";

import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Support request").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello Zorba IPTV Support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/447882781998?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow pt-28 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10 bg-[#F5F6F3] text-[#171717] overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      <div className="mx-auto mb-14 max-w-3xl text-center relative z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#F28C18]/10 text-[#F28C18] font-bold text-xs tracking-widest uppercase mb-6 border border-[#F28C18]/20 shadow-[0_2px_12px_rgba(242,140,24,0.08)]">
          24/7 ZORBA IPTV SUPPORT CENTER
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#171717]">
          Get in Touch with <span className="bg-gradient-to-r from-[#F28C18] via-[#E57E0E] to-[#F7A034] bg-clip-text text-transparent">Zorba IPTV</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#626262]">
          We are here to assist with subscription setup, device configuration, or channel inquiries. Send us a message and our technical team will respond quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="zorba-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#F28C18]/10 border border-[#F28C18]/25 flex items-center justify-center text-[#F28C18] mb-4 shadow-xs">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-[#171717] mb-2">Email Support</h2>
            <p className="text-xs text-[#626262] mb-6">For general inquiries and account assistance.</p>
            <a
              className="text-[#F28C18] font-bold text-sm hover:underline"
              href="mailto:support@zorba-iptv.store"
            >
              support@zorba-iptv.store
            </a>
          </div>

          <div className="zorba-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-[#171717] mb-2">WhatsApp Live Support</h2>
            <p className="text-xs text-[#626262] mb-6">
              Fastest response time for instant setup help.
            </p>
            <a
              className="text-emerald-700 font-bold text-sm hover:underline flex items-center gap-1.5"
              href="https://wa.me/447882781998?text=Hello,%20I%20need%20support%20for%20Zorba%20IPTV."
              target="_blank"
              rel="noreferrer"
            >
              Start Live Chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="zorba-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-[#F28C18]/10 border border-[#F28C18]/25 flex items-center justify-center text-[#F28C18] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-[#171717] mb-2">Response Time</h2>
            <p className="text-xs text-[#626262]">
              Average response time: <strong className="text-[#171717]">Under 15 minutes</strong> on WhatsApp.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="zorba-card p-8 md:p-12 rounded-2xl h-full">
            <h2 className="text-2xl font-bold text-[#171717] mb-8 border-b border-[#E2D7CC] pb-6">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#626262]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-[#FAF6F1] border border-[#E2D7CC] focus:border-[#F28C18] rounded-xl px-5 py-4 text-[#171717] placeholder:text-[#626262]/60 focus:outline-none transition-all text-sm"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#626262]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-[#FAF6F1] border border-[#E2D7CC] focus:border-[#F28C18] rounded-xl px-5 py-4 text-[#171717] placeholder:text-[#626262]/60 focus:outline-none transition-all text-sm"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#626262]" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-[#FAF6F1] border border-[#E2D7CC] focus:border-[#F28C18] rounded-xl px-5 py-4 text-[#171717] placeholder:text-[#626262]/60 focus:outline-none transition-all text-sm"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#626262]" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-[#FAF6F1] border border-[#E2D7CC] focus:border-[#F28C18] rounded-xl px-5 py-4 text-[#171717] placeholder:text-[#626262]/60 focus:outline-none transition-all resize-none text-sm"
                  id="message"
                  name="message"
                  placeholder="Describe your question or setup request..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="btn-primary-zorba px-8 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg"
                  type="submit"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
