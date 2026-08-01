"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendUp, ChartLineUp } from "@phosphor-icons/react";

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", sector: "Technology" },
  { symbol: "TSLA", name: "Tesla Inc.", sector: "Automotive" },
  { symbol: "AMZN", name: "Amazon.com Inc.", sector: "E-Commerce" },
  { symbol: "GOOGL", name: "Alphabet Inc.", sector: "Technology" },
  { symbol: "MSFT", name: "Microsoft Corp.", sector: "Technology" },
  { symbol: "META", name: "Meta Platforms", sector: "Technology" },
  { symbol: "NVDA", name: "NVIDIA Corp.", sector: "Semiconductors" },
  { symbol: "NFLX", name: "Netflix Inc.", sector: "Entertainment" },
  { symbol: "AMD", name: "Advanced Micro Devices", sector: "Semiconductors" },
  { symbol: "UBER", name: "Uber Technologies", sector: "Transportation" },
  { symbol: "BA", name: "Boeing Co.", sector: "Aerospace" },
  { symbol: "V", name: "Visa Inc.", sector: "Financial Services" },
];

export default function Stocks() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Stocks
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Stocks CFD Trading
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade top global stocks as CFDs. Go long or short on Apple, Tesla, Amazon, and 100+ more companies.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Start Stock Trading
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Popular Stocks
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stocks.map((stock, i) => (
                <div key={i} className="bg-brand-bg p-5 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-brand-dark">{stock.symbol}</div>
                    <div className="text-sm text-gray-600">{stock.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{stock.sector}</div>
                  </div>
                  <ChartLineUp size={20} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Stock CFD Advantages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <TrendUp size={28} className="text-brand-yellow" />, title: "Go Long or Short", desc: "Profit from both rising and falling stock prices by taking long or short positions." },
                { icon: <ChartLineUp size={28} className="text-brand-yellow" />, title: "Leverage Trading", desc: "Control larger positions with a smaller capital outlay using leverage up to 1:20." },
                { icon: <TrendUp size={28} className="text-brand-yellow" />, title: "No Share Ownership", desc: "Trade price movements without the complexities of owning underlying shares." },
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
              Trading Conditions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-bg p-6 rounded-xl">
                <h3 className="font-semibold text-brand-dark mb-3">Commission</h3>
                <p className="text-gray-600">Competitive commissions from $0 per lot on standard accounts. Raw spreads available on Pro accounts.</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl">
                <h3 className="font-semibold text-brand-dark mb-3">Leverage</h3>
                <p className="text-gray-600">Up to 1:20 leverage on stock CFDs, allowing you to control larger positions with less capital.</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl">
                <h3 className="font-semibold text-brand-dark mb-3">Trading Hours</h3>
                <p className="text-gray-600">Trade during market hours and extended sessions for popular stocks like Tesla and Apple.</p>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl">
                <h3 className="font-semibold text-brand-dark mb-3">No Custody Fees</h3>
                <p className="text-gray-600">No charges for holding positions. You only pay the spread or commission per trade.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade Top Stocks Today
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and access 100+ stock CFDs from the world's largest exchanges.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Stock Trading Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
