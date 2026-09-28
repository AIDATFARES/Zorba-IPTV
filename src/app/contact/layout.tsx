import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zorba IPTV - 24/7 Customer Support | WhatsApp & Email Assistance",
  description:
    "Need help with your Zorba IPTV subscription or setup? Contact our 24/7 technical team on WhatsApp or email for instant support in under 15 minutes.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Zorba IPTV - 24/7 Customer Support | WhatsApp & Email Assistance",
    description:
      "Need help with your Zorba IPTV subscription or setup? Contact our 24/7 technical team on WhatsApp or email for instant support in under 15 minutes.",
    url: "https://www.zorba-iptv.store/contact",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
