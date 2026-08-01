"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChartLineUp, Code, Users, Desktop, Download } from "@phosphor-icons/react";

export default function MetaTrader4() {
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
                MetaTrader 4
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The world's most popular trading platform. Trusted by millions of traders for its reliability and extensive features.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
                >
                  <Download size={18} />
                  Download MT4
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
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "50+ Indicators", desc: "Comprehensive technical analysis with built-in and custom indicators." },
                { icon: <Code size={28} className="text-brand-dark" />, title: "Expert Advisors", desc: "Automate your trading strategies with MQL4-based Expert Advisors." },
                { icon: <Users size={28} className="text-brand-dark" />, title: "Multi-Language", desc: "Available in 30+ languages to serve traders worldwide." },
                { icon: <Desktop size={28} className="text-brand-dark" />, title: "Flexible Charts", desc: "9 timeframes, 3 chart types, and customizable templates." },
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
              Why Choose MT4
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Battle-tested platform with 15+ years of reliability",
                "Massive library of custom indicators and EAs",
                "Lightweight and runs on any hardware",
                "One-click trading for fast execution",
                "Built-in hedging capabilities",
                "Advanced risk management tools",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="w-6 h-6 bg-brand-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-yellow text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Download MT4
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { platform: "Windows", desc: "Full desktop application for Windows." },
                { platform: "macOS", desc: "Native Mac application." },
                { platform: "Mobile", desc: "iOS and Android trading apps." },
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
              Open an MT4 Account
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Join millions of traders using MetaTrader 4. Open your account today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open MT4 Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
