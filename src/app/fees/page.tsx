"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Info, Check } from "@phosphor-icons/react";

const spreadData = [
  { pair: "EUR/USD", spread: "1.0", description: "Euro / US Dollar" },
  { pair: "GBP/USD", spread: "1.2", description: "British Pound / US Dollar" },
  { pair: "USD/JPY", spread: "1.1", description: "US Dollar / Japanese Yen" },
  { pair: "AUD/USD", spread: "1.3", description: "Australian Dollar / US Dollar" },
  { pair: "USD/CAD", spread: "1.4", description: "US Dollar / Canadian Dollar" },
  { pair: "EUR/GBP", spread: "1.5", description: "Euro / British Pound" },
  { pair: "NZD/USD", spread: "1.6", description: "New Zealand Dollar / US Dollar" },
  { pair: "USD/CHF", spread: "1.3", description: "US Dollar / Swiss Franc" },
];

export default function Fees() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Transparent Pricing
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Fees
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in transparent pricing with no hidden costs. Know exactly what you pay before you trade.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Typical Spreads — Major Pairs
            </h2>
            <p className="text-gray-600 mb-8">
              Standard account spreads. Spreads are variable and may widen during volatile market conditions.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Instrument</th>
                    <th className="text-left py-4 px-6 font-semibold">Description</th>
                    <th className="text-left py-4 px-6 font-semibold">Typical Spread (pips)</th>
                  </tr>
                </thead>
                <tbody>
                  {spreadData.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.pair}</td>
                      <td className="py-4 px-6 text-gray-600">{item.description}</td>
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
              Fee Structure by Account Type
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Standard Account</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">Spreads from 1.0 pips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No commission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No deposit fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No withdrawal fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No inactivity fees</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Pro Account</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">Raw spreads from 0.0 pips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">$3.50 commission per lot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No deposit fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No withdrawal fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 mt-0.5" />
                    <span className="text-gray-700">No inactivity fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Swap Rates
            </h2>
            <div className="bg-brand-bg rounded-xl p-8">
              <p className="text-gray-600 mb-4">
                Swap rates are applied to positions held overnight and vary by instrument and direction (long/short). Swap rates are derived from interbank rates and may change daily.
              </p>
              <p className="text-gray-600 mb-4">
                Triple swap is applied on Wednesday for forex pairs to account for the weekend settlement period. For other instruments, triple swap may apply on different days.
              </p>
              <div className="flex items-start gap-2 mt-4">
                <Info size={18} className="text-brand-link mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  Check the Trading Conditions page in your client portal for current swap rates on all instruments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              No Hidden Fees Guarantee
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We are committed to full transparency. What you see is what you pay — no surprises, no hidden charges.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Start Trading Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
