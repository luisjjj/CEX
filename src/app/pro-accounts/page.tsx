"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Lightning, ChartLineUp, Money, Check } from "@phosphor-icons/react";

export default function ProAccounts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-dark py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-sm font-medium rounded-full mb-4">
                Professional
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Professional Accounts
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Built for experienced traders who demand raw spreads, ultra-fast execution, and professional-grade trading conditions.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Apply for Pro Account
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Professional Account Features
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold">Pro Account</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Raw Spreads</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">From 0.0 pips</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Commission</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">$3.50 per lot round-turn</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Minimum Deposit</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">$500</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Maximum Leverage</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">Up to 1:500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Execution</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">ECN Execution</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Instruments</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">300+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Lot Size</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">0.01 lots</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Platform</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">MetaTrader 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Pro Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "Raw Spreads", desc: "Access interbank spreads from 0.0 pips with transparent commission pricing." },
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "ECN Execution", desc: "Direct market access with no dealing desk intervention." },
                { icon: <Money size={28} className="text-brand-dark" />, title: "Low Commission", desc: "Competitive $3.50 per lot round-turn, ideal for high-volume traders." },
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
              Requirements
            </h2>
            <div className="bg-brand-bg rounded-xl p-8">
              <p className="text-gray-600 mb-6">
                Professional accounts are designed for experienced traders who meet at least two of the following criteria:
              </p>
              <ul className="space-y-3">
                {[
                  "Trading experience of 1+ years in financial markets",
                  "Portfolio of financial instruments exceeding €500,000",
                  "Worked in the financial sector in a professional capacity",
                  "Made at least 10 transactions of significant size per quarter",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Apply for Pro Account
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
