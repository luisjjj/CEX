"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Download, Database, Clock, File } from "@phosphor-icons/react";

const dataAvailability = [
  { category: "Forex Majors", pairs: "28+", depth: "Level 2", granularity: "Tick-by-tick", format: "CSV, MT4" },
  { category: "Forex Minors", pairs: "20+", depth: "Level 2", granularity: "Tick-by-tick", format: "CSV, MT4" },
  { category: "Commodities", pairs: "8+", depth: "Level 1", granularity: "1-min OHLC", format: "CSV" },
  { category: "Stocks", pairs: "100+", depth: "Level 1", granularity: "1-min OHLC", format: "CSV" },
  { category: "Indices", pairs: "15+", depth: "Level 1", granularity: "1-min OHLC", format: "CSV" },
  { category: "Crypto", pairs: "20+", depth: "Level 1", granularity: "1-min OHLC", format: "CSV" },
];

export default function TickHistory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Data
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Tick History
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Access historical tick data and OHLC price data for backtesting strategies and market analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Data Availability
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Category</th>
                    <th className="text-left py-4 px-6 font-semibold">Instruments</th>
                    <th className="text-left py-4 px-6 font-semibold">Depth</th>
                    <th className="text-left py-4 px-6 font-semibold">Granularity</th>
                    <th className="text-left py-4 px-6 font-semibold">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAvailability.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.category}</td>
                      <td className="py-4 px-6 text-gray-600">{item.pairs}</td>
                      <td className="py-4 px-6 text-gray-600">{item.depth}</td>
                      <td className="py-4 px-6 text-gray-600">{item.granularity}</td>
                      <td className="py-4 px-6 text-gray-600">{item.format}</td>
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
              How to Access
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Database size={28} className="text-brand-dark" />, title: "Request Data", desc: "Submit a data request through your client portal or contact support." },
                { icon: <Download size={28} className="text-brand-dark" />, title: "Download", desc: "Receive data in CSV format compatible with most backtesting platforms." },
                { icon: <File size={28} className="text-brand-dark" />, title: "Backtest", desc: "Import data into MetaTrader Strategy Tester or third-party tools." },
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
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Start Backtesting
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and request historical data for your trading strategies.
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
