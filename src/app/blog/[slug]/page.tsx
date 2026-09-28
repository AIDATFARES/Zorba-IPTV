import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Zorba IPTV - Post Not Found' };
  }

  const title = post.title.includes('Zorba IPTV')
    ? post.title
    : `Zorba IPTV - ${post.title}`;

  return {
    title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description: post.description,
      url: `https://www.zorba-iptv.store/blog/${post.slug}`,
      siteName: "Zorba IPTV",
      locale: "en_US",
      type: "article",
    },
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ node, ...props }: any) => <h2 className="text-2xl sm:text-3xl font-black mt-12 mb-6 text-[#171717]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-[#171717]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ node, ...props }: any) => <p className="mb-6 leading-relaxed text-[#626262]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[#626262]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#626262]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ node, ...props }: any) => <a className="text-[#F28C18] hover:underline font-bold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ node, ...props }: any) => <strong className="text-[#171717] font-black" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-[#F28C18] pl-4 py-2 mb-6 italic bg-[#F8F8F5] rounded-r text-[#626262]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ node, ...props }: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse text-[#626262]" {...props} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ node, ...props }: any) => <th className="border-b border-[#E4E5E1] py-3 px-4 font-bold text-[#171717] bg-[#F8F8F5]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ node, ...props }: any) => <td className="border-b border-[#E4E5E1] py-3 px-4" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ node, alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="rounded-xl max-w-full shadow-md border border-[#E4E5E1]" {...props} />
        {alt && <span className="text-xs text-center block mt-2 text-[#626262]">{alt}</span>}
      </span>
    ),
    cta: () => <div className="not-prose my-12"><BlogOfferCard /></div>,
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return (
    <main className="flex-grow pt-28 pb-24 px-5 sm:px-8 max-w-[1024px] mx-auto w-full relative z-10 bg-[#F5F6F3] text-[#171717] overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F28C18]/[0.06] blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[300px] bg-[#F28C18]/[0.04] blur-[100px] rounded-full" />

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="relative z-10">
        <Link href="/blog" className="inline-flex items-center text-[#F28C18] hover:text-[#E57E0E] mb-8 transition-colors group font-bold tracking-wider uppercase text-xs">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <article className="zorba-card p-6 sm:p-12 rounded-3xl shadow-sm">
          <header className="mb-10 text-center">
            <span className="inline-block px-3 py-1 bg-[#F28C18]/10 text-[#F28C18] rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border border-[#F28C18]/20">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[#626262] font-bold uppercase tracking-wider text-xs">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>

          {post.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden relative w-full h-[300px] md:h-[480px] border border-[#E2D7CC] shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-[#626262] 
            prose-headings:text-[#171717] prose-headings:font-black 
            prose-a:text-[#F28C18] hover:prose-a:underline prose-a:font-bold
            prose-strong:text-[#171717] prose-strong:font-black
            prose-code:text-[#F28C18] prose-code:bg-[#FAF6F1] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#1A1A1A] prose-pre:text-white prose-pre:border prose-pre:border-[#E2D7CC]
            prose-blockquote:border-l-[#F28C18] prose-blockquote:bg-[#FAF6F1] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-[#626262]
            prose-img:rounded-xl
            prose-th:text-[#171717] prose-th:border-b prose-th:border-[#E2D7CC] prose-th:py-3
            prose-td:border-b prose-td:border-[#E2D7CC] prose-td:py-3"
          >
            {beforeFaq.split("<cta></cta>").map((section, index, array) => (
              <React.Fragment key={index}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {section}
                </ReactMarkdown>
                {index < array.length - 1 && (
                  <div className="not-prose my-12 w-full"><BlogOfferCard /></div>
                )}
              </React.Fragment>
            ))}

            {faqs.length > 0 && (
              <div className="mt-12 mb-8">
                <h2 className="text-2xl font-black mb-6 text-[#171717]">Frequently Asked Questions</h2>
                <ArticleFAQAccordion faqs={faqs} />
              </div>
            )}

            {afterFaq && (
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {afterFaq}
              </ReactMarkdown>
            )}
          </div>
        </article>

        {/* Related Articles Section */}
        {(() => {
          const relatedPosts = blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 3);
          if (relatedPosts.length === 0) return null;
          return (
            <section className="mt-16 pt-12 border-t border-[#E2D7CC]">
              <h2 className="text-2xl font-black text-[#171717] mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relPost) => (
                  <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                    <article className="zorba-card p-0 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="h-40 relative overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={relPost.title}
                          src={relPost.coverImage || "/blog/zorba-iptv-internet-speed-guide.jpg"}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-[10px] text-[#F28C18] font-extrabold tracking-widest uppercase mb-2">{relPost.category}</span>
                        <h3 className="text-sm font-bold text-[#171717] mb-2 line-clamp-2 group-hover:text-[#F28C18] transition-colors leading-snug">
                          {relPost.title}
                        </h3>
                        <p className="text-[10px] text-[#626262] font-bold tracking-widest uppercase mt-auto pt-3 border-t border-[#E2D7CC]">
                          {relPost.date}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}
      </div>
    </main>
  );
}
