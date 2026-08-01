"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Headphones, Clock } from "@phosphor-icons/react";

const episodes = [
  {
    number: 12,
    title: "Building a Trading Plan That Works",
    description: "Learn how to create a structured trading plan that accounts for risk management, entry/exit criteria, and psychological discipline.",
    duration: "42 min",
    date: "Jul 25, 2025",
  },
  {
    number: 11,
    title: "Understanding Market Sentiment",
    description: "We break down how to read market sentiment, use the COT report, and combine sentiment analysis with technical indicators.",
    duration: "38 min",
    date: "Jul 18, 2025",
  },
  {
    number: 10,
    title: "Risk Management Strategies for 2025",
    description: "Essential risk management techniques every trader should know. Position sizing, stop-losses, and portfolio protection.",
    duration: "45 min",
    date: "Jul 11, 2025",
  },
  {
    number: 9,
    title: "Trading Psychology: Managing Emotions",
    description: "How to stay disciplined during volatile markets. Practical tips for managing fear, greed, and overconfidence.",
    duration: "36 min",
    date: "Jul 4, 2025",
  },
];

export default function Podcasts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Podcast
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Born to Trade Podcast
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Weekly insights, strategies, and interviews from professional traders. Listen and learn from the experts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Latest Episodes
            </h2>
            <div className="space-y-6">
              {episodes.map((ep, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-yellow font-bold text-lg">#{ep.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-dark text-lg mb-1">{ep.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{ep.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {ep.duration}
                      </span>
                      <span>{ep.date}</span>
                    </div>
                  </div>
                  <button className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-yellow/80 transition-colors">
                    <Play size={20} className="text-brand-dark ml-0.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Subscribe & Never Miss an Episode
                </h2>
                <p className="text-gray-400 mb-6">
                  Available on all major podcast platforms. New episodes every Friday.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Apple Podcasts", "Spotify", "YouTube", "Google Podcasts"].map((platform) => (
                    <span key={platform} className="px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-300">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <Headphones size={48} className="text-brand-yellow mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Episodes Published</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Start Trading Today
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Apply what you learn. Open an account and start your trading journey.
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
