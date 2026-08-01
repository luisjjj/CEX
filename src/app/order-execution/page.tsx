"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Lightning, Clock, Target, CheckCircle } from "@phosphor-icons/react";

export default function OrderExecution() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Execution Quality
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Order Execution
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lightning-fast execution with no requotes. 99.5% of orders filled in under 1 second.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Execution Stats
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Target size={32} className="text-brand-dark" />, stat: "99.5%", label: "Fill Rate", desc: "Virtually all orders are executed successfully." },
                { icon: <Lightning size={32} className="text-brand-dark" />, stat: "< 1ms", label: "Avg. Execution", desc: "Orders are processed in under 1 millisecond." },
                { icon: <Clock size={32} className="text-brand-dark" />, stat: "0", label: "Requotes", desc: "We guarantee no requotes on all order types." },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-8 rounded-xl text-center">
                  <div className="w-14 h-14 bg-brand-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-brand-dark mb-1">{item.stat}</div>
                  <div className="font-semibold text-brand-dark mb-2">{item.label}</div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Order Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Market Orders", desc: "Execute immediately at the best available market price. Ideal for entering or exiting positions at current market conditions." },
                { title: "Limit Orders", desc: "Set your entry or exit price and the order executes only when the market reaches your specified level. Great for precise entries." },
                { title: "Stop Orders", desc: "Protect your positions with stop-loss orders that automatically close trades at predetermined levels to limit potential losses." },
                { title: "Trailing Stops", desc: "Dynamic stop-loss orders that follow price movement in your favor, locking in profits while protecting against reversals." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Our Execution Promise
            </h2>
            <div className="space-y-4">
              {[
                "No requotes — every order is executed at the best available price",
                "No hidden markups — transparent pricing at all times",
                "No restrictions on trading strategies — scalp, hedge, and use EAs freely",
                "Consistent execution quality during high-volatility periods",
                "Direct market access with no dealing desk intervention",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-brand-bg rounded-lg">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Experience Superior Execution
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account today and trade with the execution quality you deserve.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Start Trading Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
