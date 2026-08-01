"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowsDownUp } from "@phosphor-icons/react";

const currencies = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.92 },
  { code: "GBP", name: "British Pound", rate: 0.79 },
  { code: "JPY", name: "Japanese Yen", rate: 149.5 },
  { code: "AUD", name: "Australian Dollar", rate: 1.53 },
  { code: "CAD", name: "Canadian Dollar", rate: 1.36 },
  { code: "CHF", name: "Swiss Franc", rate: 0.88 },
  { code: "NZD", name: "New Zealand Dollar", rate: 1.67 },
];

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("1000");

  const from = currencies.find(c => c.code === fromCurrency) || currencies[0];
  const to = currencies.find(c => c.code === toCurrency) || currencies[1];
  const numAmount = parseFloat(amount) || 0;
  const result = (numAmount / from.rate) * to.rate;

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Tools
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Currency Converter
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Convert between major currencies with real-time exchange rates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[600px] mx-auto px-5 md:px-8">
            <div className="bg-brand-bg p-8 rounded-xl">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Convert Currency</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <div className="flex gap-3">
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-32 px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark text-right focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleSwap}
                    className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center text-white hover:bg-brand-dark/80 transition-colors"
                  >
                    <ArrowsDownUp size={18} />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 bg-white p-6 rounded-lg border border-gray-100 text-center">
                <div className="text-sm text-gray-500 mb-2">Converted Amount</div>
                <div className="text-3xl font-bold text-brand-dark">
                  {to.code} {result.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  1 {from.code} = {(to.rate / from.rate).toFixed(4)} {to.code}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Trade These Currencies
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
