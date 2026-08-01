"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, DeviceMobile, ChartLineUp, Bell, Briefcase, Download } from "@phosphor-icons/react";

export default function MetaTrader4App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Mobile Platform
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                MetaTrader 4 Mobile
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The world's most popular mobile trading app. Trade forex, access your account, and manage positions on the go.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-colors">
                  <Download size={18} />
                  iOS App
                </Link>
                <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-colors">
                  <Download size={18} />
                  Android App
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Mobile Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "Live Charts", desc: "Real-time price charts with 3 timeframes and zoom functionality." },
                { icon: <Briefcase size={28} className="text-brand-dark" />, title: "Trade Execution", desc: "Execute market, limit, and stop orders with one-click trading." },
                { icon: <Bell size={28} className="text-brand-dark" />, title: "Push Alerts", desc: "Receive notifications for price alerts and account activity." },
                { icon: <DeviceMobile size={28} className="text-brand-dark" />, title: "Account Management", desc: "View balance, equity, margin, and trade history on the go." },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl flex gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trade on the Go with MT4
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Download MetaTrader 4 mobile and access forex markets from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg">
                <Download size={20} />
                Download MT4 Mobile
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
