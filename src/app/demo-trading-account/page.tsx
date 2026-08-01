"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Play, CurrencyDollar, ChartLineUp, Gear, CheckCircle } from "@phosphor-icons/react";

export default function DemoTradingAccount() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Risk-Free Practice
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Demo Trading Account
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Practice trading with virtual funds in real market conditions. No risk, no deposit required.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Open Demo Account
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <CurrencyDollar size={28} className="text-brand-dark" />, title: "$10,000 Virtual Funds", desc: "Trade with $10,000 in virtual money to test strategies without financial risk." },
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "All Instruments", desc: "Access the full range of 300+ trading instruments including forex, stocks, and crypto." },
                { icon: <Gear size={28} className="text-brand-dark" />, title: "Real Market Conditions", desc: "Live spreads and pricing so your practice mirrors real trading environments." },
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
              How to Start
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Sign Up", desc: "Create your free account in under 2 minutes." },
                { step: "2", title: "Choose Demo", desc: "Select the demo account option during setup." },
                { step: "3", title: "Set Preferences", desc: "Choose your leverage, virtual balance, and platform." },
                { step: "4", title: "Start Trading", desc: "Begin practicing with virtual funds immediately." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-brand-dark text-xl">
                    {item.step}
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
              Benefits of Demo Trading
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Test trading strategies risk-free",
                "Learn the platform before going live",
                "Practice with real market conditions",
                "Build confidence without financial pressure",
                "Explore all order types and features",
                "Switch to live trading anytime",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-brand-bg rounded-lg">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Open Free Demo Account
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
