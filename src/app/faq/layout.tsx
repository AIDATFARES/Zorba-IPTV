import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zorba IPTV - Frequently Asked Questions & Complete Help Center",
  description:
    "Have questions about Zorba IPTV? Find answers about compatible devices, 4K streaming quality, free trials, channel packages, and automated instant activation.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Zorba IPTV - Frequently Asked Questions & Complete Help Center",
    description:
      "Have questions about Zorba IPTV? Find answers about compatible devices, 4K streaming quality, free trials, channel packages, and automated instant activation.",
    url: "https://www.zorba-iptv.store/faq",
    siteName: "Zorba IPTV",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
