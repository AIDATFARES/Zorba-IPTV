import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zorba IPTV - IPTV Blog, Streaming Guides & Tech Tutorials (2026)",
  description:
    "Stay ahead with Zorba IPTV tutorials, Firestick app reviews, Smart TV installation guides, internet speed tests & 4K streaming optimization tips.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
