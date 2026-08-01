"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendUp, CurrencyDollar } from "@phosphor-icons/react";

const majorPairs = [
  { pair: "EUR/USD", spread: "1.0", description: "Euro / US Dollar" },
  { pair: "GBP/USD", spread: "1.2", description: "British Pound / US Dollar" },
  { pair: "USD/JPY", spread: "1.1", description: "US Dollar / Japanese Yen" },
  { pair: "AUD/USD", spread: "1.3", description: "Australian Dollar / US Dollar" },
  { pair: "USD/CHF", spread: "1.3", description: "US Dollar / Swiss Franc" },
  { pair: "USD/CAD", spread: "1.4", description: "US Dollar / Canadian Dollar" },
  { pair: "NZD/USD", spread: "1.6", description: "New Zealand Dollar / US Dollar" },
];

const minorPairs = [
  { pair: "EUR/GBP", spread: "1.5", description: "Euro / British Pound" },
  { pair: "EUR/JPY", spread: "1.7", description: "Euro / Japanese Yen" },
  { pair: "GBP/JPY", spread: "2.5", description: "British Pound / Japanese Yen" },
  { pair: "AUD/JPY", spread: "2.0", description: "Australian Dollar / Japanese Yen" },
  { pair: "EUR/AUD", spread: "1.8", description: "Euro / Australian Dollar" },
  { pair: "GBP/AUD", spread: "2.8", description: "British Pound / Australian Dollar" },
];

export default function Forex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Forex
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Forex CFD Trading
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade over 40 currency pairs with tight spreads and fast execution. The largest and most liquid market in the world.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Start Forex Trading
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Major Pairs
            </h2>
            <p className="text-gray-600 mb-8">The most traded currency pairs in the world with the tightest spreads.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Pair</th>
                    <th className="text-left py-4 px-6 font-semibold">Description</th>
                    <th className="text-left py-4 px-6 font-semibold">Spread (pips)</th>
                  </tr>
                </thead>
                <tbody>
                  {majorPairs.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.pair}</td>
                      <td className="py-4 px-6 text-gray-600">{item.description}</td>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.spread}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Minor Pairs
            </h2>
            <p className="text-gray-600 mb-8">Cross-currency pairs without the US Dollar, offering diverse trading opportunities.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Pair</th>
                    <th className="text-left py-4 px-6 font-semibold">Description</th>
                    <th className="text-left py-4 px-6 font-semibold">Spread (pips)</th>
                  </tr>
                </thead>
                <tbody>
                  {minorPairs.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-white" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.pair}</td>
                      <td className="py-4 px-6 text-gray-600">{item.description}</td>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.spread}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Why Trade Forex With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "High Liquidity", desc: "Trade with deep liquidity and minimal slippage across all major pairs." },
                { icon: <CurrencyDollar size={28} className="text-brand-dark" />, title: "Leverage Up to 1:2000", desc: "Maximize your trading potential with high leverage options." },
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "24/5 Market Access", desc: "Trade around the clock, five days a week across global sessions." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Trade Forex?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Open an account in minutes and access 40+ forex pairs with spreads from 1.0 pip.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Forex Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
