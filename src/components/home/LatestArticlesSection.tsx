import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LatestArticlesSection() {
  // Select the 3 newest articles
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 relative z-10 border-t border-[#E4E5E1] bg-[#FFFFFF] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F28C18]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F28C18]/10 text-[#F28C18] border border-[#F28C18]/25 mb-4 shadow-[0_2px_12px_rgba(242,140,24,0.1)]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ZORBA IPTV GUIDES &amp; NEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#171717] tracking-tight mb-4">
            Latest IPTV <span className="bg-gradient-to-r from-[#F28C18] via-[#F7A034] to-[#DF790E] bg-clip-text text-transparent">Articles &amp; Tutorials</span>
          </h2>
          <p className="text-[#626262] text-base sm:text-lg">
            Stay up to date with the latest Zorba IPTV streaming guides, network optimization tips, and device installation insights.
          </p>
        </div>

        <div className={`grid gap-8 mb-14 ${displayPosts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="zorba-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={post.title}
                    src={post.coverImage || "/blog/zorba-iptv-internet-speed-guide.jpg"}
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[#F28C18] rounded-full text-xs font-black border border-[#F28C18]/30 shadow-xs">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-[#171717] group-hover:text-[#F28C18] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#626262] text-xs sm:text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-auto text-[#8E8E8A] text-xs font-medium flex items-center justify-between border-t border-[#E2D7CC] pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-[#F28C18] group-hover:translate-x-1 transition-transform font-bold text-xs">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn-secondary-zorba px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View All IPTV Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
