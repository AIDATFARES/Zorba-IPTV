import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zorba IPTV - DMCA Copyright Policy & Legal Disclaimer",
  description:
    "Official DMCA copyright guidelines, service disclaimer, and intellectual property notices for Zorba IPTV streaming platform.",
  alternates: {
    canonical: "/dmca",
  },
  openGraph: {
    title: "Zorba IPTV - DMCA Copyright Policy & Legal Disclaimer",
    description:
      "Official DMCA copyright guidelines, service disclaimer, and intellectual property notices for Zorba IPTV streaming platform.",
    url: "https://www.zorba-iptv.store/dmca",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    title: "No Legal Advice",
    content: [
      "Nothing presented on this website or in our communications serves as legal or compliance counsel. If you have questions about IPTV legality in your jurisdiction, consult a qualified attorney.",
    ],
  },
  {
    title: "Content Ownership and Hosting",
    content: [
      "Zorba IPTV does not possess, manage, upload, store, or distribute copyrighted materials. All streams available via your account are sourced from external parties on the public internet. Mentions of channels, logos, or trademarks are solely for identification purposes and are owned by their respective entities.",
    ],
  },
  {
    title: "Availability and Service Changes",
    content: [
      <>Channel and VOD options may vary in availability, quality (including 4K/FHD/HD), features, plans, and <Link className="font-semibold text-[#F28C18] hover:underline" href="/pricing">pricing</Link>, and can be modified or removed by region without prior notification. We do not assure the availability of any particular <Link className="font-semibold text-[#F28C18] hover:underline" href="/channels">channel</Link>, event, or title.</>,
    ],
  },
  {
    title: "User Responsibility and Compliance",
    content: [
      "You are entirely accountable for your account usage and for following all relevant local laws and regulations. Avoid any actions with the service that could infringe on third-party rights. If you are uncertain about the legality of your usage, obtain independent legal counsel prior to proceeding.",
    ],
  },
  {
    title: "Third-Party Links and Services",
    content: [
      "Our site could have links to third-party websites, applications, or services. We do not oversee and are not responsible for the content, policies, or practices of these third-party entities. Utilizing third-party services is at your own risk.",
    ],
  },
  {
    title: "No Warranties",
    content: [
      "THE SERVICE AND WEBSITE ARE OFFERED ON AN -AS IS- AND -AS AVAILABLE- BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THIS INCLUDES, BUT IS NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not guarantee uninterrupted, error-free, or secure operation.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Zorba IPTV, its owners, affiliates, employees, and agents shall not be liable to the fullest extent permitted by law for any indirect, incidental, special, exemplary, or punitive damages, or for loss of data, profits, or goodwill connected to your use of the site or service.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and shield Zorba IPTV from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) related to your use of the service or any infringement of this disclaimer or applicable law.",
    ],
  },
];

export default function DmcaPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-28 sm:px-8 text-format-legal bg-[#F5F6F3] text-[#171717] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      <article className="mx-auto max-w-4xl relative z-10">
        <header className="border-b border-[#E4E5E1] pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-[#F28C18]/20 bg-[#F28C18]/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F28C18] shadow-[0_2px_12px_rgba(242,140,24,0.08)]">Legal Disclaimer</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-[#171717]">Terms of Use &amp; DMCA</span>
            <span className="mt-1 block bg-gradient-to-r from-[#F28C18] via-[#E57E0E] to-[#F7A034] bg-clip-text text-transparent">Official Disclaimer</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#626262]">Last adjusted: 2026</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-[#626262]">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-[#171717]">{section.title}</h2>
              {section.content.map((paragraph, index) => <p className="mt-4" key={index}>{paragraph}</p>)}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-[#171717]">DMCA Notice Submission</h2>
            <p className="mt-4">If you believe your intellectual property rights have been affected, please submit a formal notice to our <Link className="font-semibold text-[#F28C18] hover:underline" href="/contact">compliance team</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
