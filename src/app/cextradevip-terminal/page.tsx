"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, ChartLineUp, Lightning, Shield, ArrowSquareOut } from "@phosphor-icons/react";

export default function CexTradeVIPTerminal() {
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
                cextradevip Terminal
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade directly from your browser. No downloads required — just log in and start trading.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                <ArrowSquareOut size={18} />
                Launch Terminal
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Why Use the Web Terminal
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Globe size={28} className="text-brand-dark" />, title: "No Download", desc: "Access directly from any modern browser without installing software." },
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "Instant Access", desc: "Log in from any computer with internet access and start trading immediately." },
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "Full Features", desc: "Advanced charting, all order types, and real-time data — all in your browser." },
                { icon: <Shield size={28} className="text-brand-dark" />, title: "Secure", desc: "Bank-grade encryption protects your data and transactions." },
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
              Terminal Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "30+ technical indicators",
                "Multiple chart types and timeframes",
                "One-click and instant execution",
                "Economic calendar integration",
                "Watchlists and price alerts",
                "Trade history and reporting",
                "Multi-language support",
                "Responsive design for any screen size",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Start Trading Now
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and launch the web terminal in seconds.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Account & Trade
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
