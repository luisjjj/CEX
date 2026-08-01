"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, ChartLineUp, Lightning, ArrowSquareOut } from "@phosphor-icons/react";

export default function MetaTraderWebTerminal() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Web Platform
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                MetaTrader WebTerminal
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade MT5 directly from your browser. Full platform functionality without any downloads.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                <ArrowSquareOut size={18} />
                Launch WebTerminal
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Browser Trading Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Globe size={28} className="text-brand-dark" />, title: "Any Device", desc: "Access from Windows, Mac, Linux, or Chromebook — any device with a modern browser." },
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "No Installation", desc: "Skip the download. Just log in to your account and start trading instantly." },
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "Full MT5 Power", desc: "80+ indicators, 21 timeframes, and all order types — everything the desktop version offers." },
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
              What You Can Do
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Execute all order types (Market, Limit, Stop, Trailing Stop)",
                "Analyze charts with 80+ technical indicators",
                "Use Expert Advisors for automated trading",
                "Monitor real-time price quotes",
                "View account history and reports",
                "Manage multiple watchlists",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Ready to Trade?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and launch the MT5 WebTerminal in your browser.
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
