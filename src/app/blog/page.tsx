"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, ArrowUpRight } from "@phosphor-icons/react";

const posts = [
  {
    title: "How to Build a Winning Trading Strategy in 2025",
    excerpt: "A step-by-step guide to creating a trading plan that accounts for risk management, entry criteria, and position sizing.",
    category: "Strategy",
    date: "Jul 28, 2025",
    readTime: "8 min read",
  },
  {
    title: "Understanding Support and Resistance Levels",
    excerpt: "Learn how to identify key support and resistance zones and use them to time your entries and exits more effectively.",
    category: "Technical Analysis",
    date: "Jul 21, 2025",
    readTime: "6 min read",
  },
  {
    title: "Top 5 Mistakes New Traders Make",
    excerpt: "Avoid these common pitfalls that cause most beginner traders to lose money. Learn from the mistakes of others.",
    category: "Education",
    date: "Jul 14, 2025",
    readTime: "5 min read",
  },
  {
    title: "What Moves the Forex Market?",
    excerpt: "An in-depth look at the economic factors, central bank policies, and geopolitical events that drive currency prices.",
    category: "Market Analysis",
    date: "Jul 7, 2025",
    readTime: "10 min read",
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "bg-blue-100 text-blue-700",
  "Technical Analysis": "bg-purple-100 text-purple-700",
  Education: "bg-green-100 text-green-700",
  "Market Analysis": "bg-orange-100 text-orange-700",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Blog
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Blog
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trading insights, market analysis, and educational content to help you become a better trader.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Latest Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <article key={i} className="bg-brand-bg rounded-xl overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-brand-dark to-brand-muted" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-link transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <Link href="/signup" className="flex items-center gap-1 text-sm font-medium text-brand-link hover:underline">
                        Read More <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Trading Journey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Apply what you learn. Open an account and start trading today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
