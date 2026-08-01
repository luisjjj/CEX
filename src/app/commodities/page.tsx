"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, TrendUp, Drop, Flame } from "@phosphor-icons/react";

const commodities = [
  { name: "Gold (XAU/USD)", spread: "0.20", description: "Spot Gold", category: "Metals" },
  { name: "Silver (XAG/USD)", spread: "0.03", description: "Spot Silver", category: "Metals" },
  { name: "WTI Crude Oil", spread: "0.03", description: "US Oil", category: "Energy" },
  { name: "Brent Crude Oil", spread: "0.04", description: "UK Oil", category: "Energy" },
  { name: "Natural Gas", spread: "0.005", description: "NG Spot", category: "Energy" },
  { name: "Platinum", spread: "2.00", description: "XPT/USD", category: "Metals" },
  { name: "Copper", spread: "0.003", description: "XCU/USD", category: "Metals" },
];

export default function Commodities() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Commodities
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Commodities CFD Trading
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade gold, oil, silver, and other commodities with competitive spreads. Diversify your portfolio with hard and soft commodities.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Trade Commodities
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Available Commodities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Instrument</th>
                    <th className="text-left py-4 px-6 font-semibold">Description</th>
                    <th className="text-left py-4 px-6 font-semibold">Category</th>
                    <th className="text-left py-4 px-6 font-semibold">Spread</th>
                  </tr>
                </thead>
                <tbody>
                  {commodities.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.name}</td>
                      <td className="py-4 px-6 text-gray-600">{item.description}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${item.category === "Metals" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                          {item.category}
                        </span>
                      </td>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Why Trade Commodities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "Hedge Inflation", desc: "Gold and other commodities traditionally act as a hedge against inflation and currency devaluation." },
                { icon: <Drop size={28} className="text-brand-dark" />, title: "Portfolio Diversification", desc: "Add commodities to your portfolio to reduce overall risk through diversification." },
                { icon: <Flame size={28} className="text-brand-dark" />, title: "High Volatility", desc: "Commodity price movements create frequent trading opportunities across sessions." },
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

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Trading Conditions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-bg p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">1:500</div>
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

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Trading Commodities
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Open an account and trade gold, oil, and more with competitive spreads and fast execution.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Commodity Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
