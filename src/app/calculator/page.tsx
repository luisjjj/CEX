"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calculator as CalcIcon } from "@phosphor-icons/react";

const instruments = [
  { name: "EUR/USD", pipValue: 10, pipSize: 0.0001 },
  { name: "GBP/USD", pipValue: 10, pipSize: 0.0001 },
  { name: "USD/JPY", pipValue: 6.67, pipSize: 0.01 },
  { name: "Gold (XAU/USD)", pipValue: 10, pipSize: 0.01 },
  { name: "US500", pipValue: 10, pipSize: 0.01 },
  { name: "BTC/USD", pipValue: 1, pipSize: 1 },
];

export default function TradingCalculator() {
  const [selectedInstrument, setSelectedInstrument] = useState(instruments[0]);
  const [volume, setVolume] = useState("1");
  const [leverage, setLeverage] = useState("100");

  const lotSize = parseFloat(volume) || 0;
  const lev = parseFloat(leverage) || 100;
  const marginRequired = (lotSize * 100000 * selectedInstrument.pipSize) / lev;
  const pipValue = lotSize * selectedInstrument.pipValue;

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
                Trading Calculator
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Calculate your margin requirements, pip values, and potential profits before placing a trade.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            <div className="bg-brand-bg p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <CalcIcon size={24} className="text-brand-dark" />
                <h2 className="text-xl font-bold text-brand-dark">Calculate Your Trade</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instrument</label>
                  <select
                    value={selectedInstrument.name}
                    onChange={(e) => setSelectedInstrument(instruments.find(i => i.name === e.target.value) || instruments[0])}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                  >
                    {instruments.map((inst) => (
                      <option key={inst.name} value={inst.name}>{inst.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Volume (Lots)</label>
                  <input
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    min="0.01"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Leverage</label>
                  <select
                    value={leverage}
                    onChange={(e) => setLeverage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                  >
                    {[10, 20, 50, 100, 200, 500, 1000, 2000].map((lev) => (
                      <option key={lev} value={lev}>1:{lev}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Margin Required</div>
                  <div className="text-2xl font-bold text-brand-dark">${marginRequired.toFixed(2)}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Pip Value</div>
                  <div className="text-2xl font-bold text-brand-dark">${pipValue.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Start Trading
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
