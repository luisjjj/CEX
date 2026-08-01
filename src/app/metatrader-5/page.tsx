"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChartLineUp, Code, Brain, Desktop, Download, Check } from "@phosphor-icons/react";

export default function MetaTrader5() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Platform
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                MetaTrader 5
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The next-generation trading platform with advanced charting, algorithmic trading, and multi-asset capabilities.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
                >
                  <Download size={18} />
                  Download MT5
                </Link>
                <Link
                  href="/metatrader-webterminal"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-brand-dark font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Launch Web Terminal
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "Advanced Charting", desc: "21 timeframes, 80+ technical indicators, and 44 analytical tools." },
                { icon: <Code size={28} className="text-brand-dark" />, title: "Algorithmic Trading", desc: "Expert Advisors (EAs) with MQL5 programming language for automated strategies." },
                { icon: <Brain size={28} className="text-brand-dark" />, title: "Multi-Asset", desc: "Trade forex, stocks, futures, bonds, and options from a single platform." },
                { icon: <Desktop size={28} className="text-brand-dark" />, title: "Depth of Market", desc: "View real-time order book depth for better decision making." },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl">
                  <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center mb-4">
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
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              MT5 vs MT4
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-semibold text-white">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-brand-yellow">MT5</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-400">MT4</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Timeframes", mt5: "21", mt4: "9" },
                    { feature: "Technical Indicators", mt5: "80+", mt4: "50+" },
                    { feature: "Order Types", mt5: "6", mt4: "4" },
                    { feature: "Economic Calendar", mt5: "Built-in", mt4: "Not available" },
                    { feature: "Multi-Asset", mt5: "Yes", mt4: "Forex only" },
                    { feature: "Programming Language", mt5: "MQL5", mt4: "MQL4" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-4 px-6 text-gray-300">{item.feature}</td>
                      <td className="py-4 px-6 text-white font-semibold">{item.mt5}</td>
                      <td className="py-4 px-6 text-gray-400">{item.mt4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Download MT5
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { platform: "Windows", desc: "Full-featured desktop application for Windows." },
                { platform: "macOS", desc: "Native Mac application with full functionality." },
                { platform: "Mobile", desc: "Trade on the go with iOS and Android apps." },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl text-center">
                  <Desktop size={32} className="text-brand-dark mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-dark mb-2">{item.platform}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow text-brand-dark font-medium rounded-lg hover:bg-brand-yellow/90 transition-colors text-sm"
                  >
                    <Download size={16} />
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Ready to Trade on MT5?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and get instant access to MetaTrader 5.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open MT5 Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
