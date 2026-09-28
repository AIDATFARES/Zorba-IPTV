import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zorba IPTV - Refund Policy & 7-Day Money-Back Guarantee",
  description:
    "Review Zorba IPTV's transparent refund policy and 7-day risk-free satisfaction guarantee. Fair, simple, and straightforward terms for all subscribers.",
  alternates: {
    canonical: "/refund-policy",
  },
  openGraph: {
    title: "Zorba IPTV - Refund Policy & 7-Day Money-Back Guarantee",
    description:
      "Review Zorba IPTV's transparent refund policy and 7-day risk-free satisfaction guarantee. Fair, simple, and straightforward terms for all subscribers.",
    url: "https://www.zorba-iptv.store/refund-policy",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    title: "Our Commitment to You",
    content: [
      "At Zorba IPTV, we uphold the standard of our IPTV subscription service. This policy specifies when refunds may be applicable, ensuring that we maintain a transparent and just process for every customer.",
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You could be entitled to a total or partial refund in the following cases:"],
    items: [
      "Technical Failures: Service is completely non-functional on your compatible device for 72+ consecutive hours due to a fault on our side.",
      "Duplicate Payments: Accidental duplicate charge for the same subscription period.",
      "Initial 7 Day Window for new customers: Request within 7 days of first purchase after attempting support-led troubleshooting.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: ["To seek a refund, kindly follow these steps:"],
    items: [
      <>Connect with our support team using our <Link className="font-semibold text-[#F28C18] hover:underline" href="/contact">Contact page</Link> or WhatsApp.</>,
      "Please use the subject: 'Refund Request'.",
      "Please provide your complete name, the email linked to your subscription, and the purpose of your inquiry.",
    ],
  },
  {
    title: "Sample Refund Request Message",
    content: [
      <>Contact: Send a message via our <Link className="font-semibold text-[#F28C18] hover:underline" href="/contact">Contact page</Link></>,
      "Message Title: Refund Request",
      "Hello,",
      "I am writing to ask for a refund regarding my Zorba IPTV subscription.",
      "My Name: [Your Full Name]",
      "My Email: [Your Subscription Email]",
      "Reason for Refund: [Concise explanation of your concern, for example, technical errors, billing duplicates, etc.]",
      "Thank you.",
    ],
  },
  {
    title: "What We Need to Process Your Refund",
    content: [],
    items: [
      "Account email used at checkout",
      "Order/transaction ID from Payment Gateway",
      "Brief reason and steps already tried with support",
      "Device/app details (e.g., Firestick + TiviMate / IPTV Smarters)",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-28 sm:px-8 text-format-legal bg-[#F5F6F3] text-[#171717] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      <article className="mx-auto max-w-4xl relative z-10">
        <header className="border-b border-[#E4E5E1] pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-[#F28C18]/20 bg-[#F28C18]/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F28C18] shadow-[0_2px_12px_rgba(242,140,24,0.08)]">Customer Guarantee</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-[#171717]">Refund Policy &amp; Terms</span>
            <span className="mt-1 block bg-gradient-to-r from-[#F28C18] via-[#E57E0E] to-[#F7A034] bg-clip-text text-transparent">7-Day Guarantee</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#626262]">Last adjusted: 2026</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-[#626262]">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-[#171717]">{section.title}</h2>
              {section.content.map((paragraph, index) => <p className="mt-4" key={index}>{paragraph}</p>)}
              {section.items && <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#F28C18]">{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-[#171717]">Assistance &amp; Questions</h2>
            <p className="mt-4">If you have any questions about this refund policy, please <Link className="font-semibold text-[#F28C18] hover:underline" href="/contact">contact Zorba support</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
