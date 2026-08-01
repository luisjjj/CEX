"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendUp, Globe } from "@phosphor-icons/react";

const indices = [
  { symbol: "US500", name: "S&P 500", spread: "0.4", description: "Top 500 US companies" },
  { symbol: "USTEC", name: "NASDAQ 100", spread: "1.0", description: "Top 100 tech companies" },
  { symbol: "US30", name: "Dow Jones 30", spread: "1.5", description: "30 major US companies" },
  { symbol: "UK100", name: "FTSE 100", spread: "1.0", description: "100 UK companies" },
  { symbol: "GER40", name: "DAX 40", spread: "1.0", description: "40 German companies" },
  { symbol: "JP225", name: "Nikkei 225", spread: "8.0", description: "225 Japanese companies" },
  { symbol: "FRA40", name: "CAC 40", spread: "1.0", description: "40 French companies" },
  { symbol: "AUS200", name: "ASX 200", spread: "1.0", description: "200 Australian companies" },
];

export default function Indices() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Indices
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Indices CFD Trading
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade the world's major stock indices. Gain exposure to entire markets with a single trade.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Start Index Trading
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Major Global Indices
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Symbol</th>
                    <th className="text-left py-4 px-6 font-semibold">Index</th>
                    <th className="text-left py-4 px-6 font-semibold">Description</th>
                    <th className="text-left py-4 px-6 font-semibold">Spread</th>
                  </tr>
                </thead>
                <tbody>
                  {indices.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.symbol}</td>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.name}</td>
                      <td className="py-4 px-6 text-gray-600">{item.description}</td>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.spread}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why Trade Indices
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Globe size={28} className="text-brand-yellow" />, title: "Diversified Exposure", desc: "Gain instant exposure to hundreds of stocks in a single trade, reducing individual stock risk." },
                { icon: <TrendUp size={28} className="text-brand-yellow" />, title: "High Liquidity", desc: "Major indices are among the most liquid instruments, ensuring tight spreads and fast execution." },
                { icon: <TrendUp size={28} className="text-brand-yellow" />, title: "Economic Barometer", desc: "Indices reflect overall market sentiment, making them ideal for macro-based trading strategies." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Trading Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">1:200</div>
                <div className="text-sm text-gray-600">Max Leverage</div>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">0.01</div>
                <div className="text-sm text-gray-600">Min Lot Size</div>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">24/5</div>
                <div className="text-sm text-gray-600">Trading Hours</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade Global Indices
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and access major indices from the US, Europe, Asia, and more.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Index Trading Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
