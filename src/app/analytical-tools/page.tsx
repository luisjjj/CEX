"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChartLineUp, MagnifyingGlass, Brain, TrendUp } from "@phosphor-icons/react";

export default function AnalyticalTools() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Research
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Analytical Tools
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Make informed trading decisions with our comprehensive suite of analytical tools and market research.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Available Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <ChartLineUp size={32} className="text-brand-dark" />,
                  title: "Technical Analysis",
                  desc: "Access real-time technical analysis for all instruments. Get buy/sell signals based on moving averages, RSI, MACD, and other indicators.",
                  features: ["Auto-generated signals", "Multiple timeframes", "All major instruments", "Updated in real-time"],
                },
                {
                  icon: <MagnifyingGlass size={32} className="text-brand-dark" />,
                  title: "Autochartist",
                  desc: "Automated pattern recognition tool that scans the markets for trading opportunities. Identify chart patterns, Fibonacci patterns, and key price levels.",
                  features: ["Pattern recognition", "Volatility analysis", "Key levels identification", "Custom alerts"],
                },
                {
                  icon: <Brain size={32} className="text-brand-dark" />,
                  title: "Trading Central",
                  desc: "Professional market research and analysis. Get expert opinions, trading ideas, and in-depth market commentary from seasoned analysts.",
                  features: ["Expert analysis", "Trading ideas", "Market commentary", "Research reports"],
                },
                {
                  icon: <TrendUp size={32} className="text-brand-dark" />,
                  title: "Market Sentiment",
                  desc: "See how other cextradevip clients are positioned. Gauge market sentiment to identify potential reversal points and trend continuations.",
                  features: ["Client positioning data", "Real-time updates", "Historical data", "Sentiment indicators"],
                },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-8 rounded-xl">
                  <div className="w-14 h-14 bg-brand-yellow/30 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Upgrade Your Trading
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Access all analytical tools with a free cextradevip account.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Free Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
