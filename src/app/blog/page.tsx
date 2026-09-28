"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="flex-grow pt-28 pb-24 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full relative z-10 bg-[#F5F6F3] text-[#171717] overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      {/* Header */}
      <header className="mb-16 text-center md:text-left relative z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#F28C18]/10 text-[#F28C18] font-bold text-xs tracking-widest uppercase mb-4 border border-[#F28C18]/20 shadow-[0_2px_12px_rgba(242,140,24,0.08)]">
          STREAMING INSIGHTS &amp; GUIDES
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171717] mb-4">
          Latest News &amp; <span className="bg-gradient-to-r from-[#F28C18] via-[#E57E0E] to-[#F7A034] bg-clip-text text-transparent">Streaming Tips</span>
        </h1>
        <p className="text-base sm:text-lg text-[#626262] max-w-2xl">
          Stay updated with 4K IPTV technology, channel setup guides, app tutorials, and streaming tips for Zorba IPTV.
        </p>
      </header>

      {/* Empty State */}
      {blogPosts.length === 0 && (
        <section className="text-center py-20 zorba-card rounded-2xl mb-16 relative z-10">
          <p className="text-xl font-bold text-[#171717] mb-2">No Articles Available Right Now</p>
          <p className="text-sm text-[#626262]">New IPTV streaming guides and tutorials are coming soon!</p>
        </section>
      )}

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20 relative z-10">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="zorba-featured-card rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-500">
              <div className="md:w-3/5 h-64 md:h-[450px] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={featuredPost.title}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative">
                <span className="inline-block px-3 py-1 bg-[#F28C18]/10 text-[#F28C18] rounded-full text-[10px] font-black tracking-widest uppercase mb-4 w-max border border-[#F28C18]/20">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#171717] mb-4 group-hover:text-[#F28C18] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-[#626262] text-xs sm:text-sm mb-8 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-[#F28C18] font-extrabold text-xs uppercase tracking-wider">Read Article</span>
                  <ArrowRight className="text-[#F28C18] w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="zorba-card p-0 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="h-52 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={post.title}
                  src={post.coverImage || ""}
                />
                <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md text-[#F28C18] rounded-full font-black text-[9px] tracking-widest uppercase border border-[#E2D7CC] shadow-xs">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#171717] mb-3 group-hover:text-[#F28C18] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#626262] mb-6 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-[#626262]/80 text-[10px] font-bold tracking-wider uppercase border-t border-[#E2D7CC] pt-4">
                  <span>{post.date}</span>
                  <span className="text-[#F28C18] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="zorba-card p-8 md:p-14 text-center rounded-3xl relative overflow-hidden relative z-10 shadow-sm">
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="w-10 h-10 text-[#F28C18] mb-4 mx-auto" />
          <h2 className="text-3xl font-black text-[#171717] mb-3">Never Miss a Streaming Update</h2>
          <p className="text-[#626262] text-sm mb-8">
            Subscribe for the latest IPTV streaming tips, device setup updates, and channel additions delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-[#FAF6F1] border border-[#E2D7CC] rounded-xl px-5 py-3.5 text-sm text-[#171717] placeholder:text-[#626262]/60 focus:outline-none focus:border-[#F28C18] w-full sm:w-80 shadow-xs"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="btn-primary-zorba px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap shadow-sm"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
