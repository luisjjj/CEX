"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CurrencyBtc, Clock, Wallet, TrendUp } from "@phosphor-icons/react";

const cryptos = [
  { symbol: "BTC/USD", name: "Bitcoin", spread: "25.0", marketCap: "#1" },
  { symbol: "ETH/USD", name: "Ethereum", spread: "1.5", marketCap: "#2" },
  { symbol: "SOL/USD", name: "Solana", spread: "0.8", marketCap: "#5" },
  { symbol: "XRP/USD", name: "Ripple", spread: "0.004", marketCap: "#6" },
  { symbol: "DOGE/USD", name: "Dogecoin", spread: "0.001", marketCap: "#8" },
  { symbol: "ADA/USD", name: "Cardano", spread: "0.003", marketCap: "#9" },
  { symbol: "AVAX/USD", name: "Avalanche", spread: "0.5", marketCap: "#10" },
  { symbol: "DOT/USD", name: "Polkadot", spread: "0.02", marketCap: "#12" },
];

export default function Crypto() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Cryptocurrency
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Crypto CFD Trading
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade Bitcoin, Ethereum, and 20+ crypto CFDs. No wallet needed — profit from price movements in both directions.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Start Crypto Trading
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Available Cryptocurrencies
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Pair</th>
                    <th className="text-left py-4 px-6 font-semibold">Name</th>
                    <th className="text-left py-4 px-6 font-semibold">Market Rank</th>
                    <th className="text-left py-4 px-6 font-semibold">Spread</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptos.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.symbol}</td>
                      <td className="py-4 px-6 text-gray-600">{item.name}</td>
                      <td className="py-4 px-6 text-gray-600">{item.marketCap}</td>
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
              Why Trade Crypto CFDs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Clock size={28} className="text-brand-yellow" />, title: "24/7 Trading", desc: "Crypto markets never sleep. Trade Bitcoin and other cryptos around the clock, 7 days a week." },
                { icon: <Wallet size={28} className="text-brand-yellow" />, title: "No Wallet Needed", desc: "Trade price movements directly without needing to set up wallets or worry about storage security." },
                { icon: <TrendUp size={28} className="text-brand-yellow" />, title: "Go Long or Short", desc: "Profit from both rising and falling crypto prices with long and short positions." },
                { icon: <CurrencyBtc size={28} className="text-brand-yellow" />, title: "High Volatility", desc: "Cryptocurrency markets offer significant price movements, creating frequent trading opportunities." },
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
                <div className="text-3xl font-bold text-brand-dark mb-2">1:10</div>
                <div className="text-sm text-gray-600">Max Leverage</div>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">0.01</div>
                <div className="text-sm text-gray-600">Min Lot Size</div>
              </div>
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">24/7</div>
                <div className="text-sm text-gray-600">Trading Hours</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade Crypto Today
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and access 20+ crypto CFDs with competitive spreads and 24/7 trading.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Crypto Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
