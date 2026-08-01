"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Lightning, Bell, Briefcase, ChartLineUp, DeviceMobile } from "@phosphor-icons/react";

export default function CexTradeVIPTradeApp() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Mobile App
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                cextradevip Trade App
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trade anywhere, anytime. Our mobile app puts the full power of cextradevip in your pocket.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-colors">
                  App Store
                </Link>
                <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-dark/90 transition-colors">
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              App Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "One-Tap Trading", desc: "Execute trades instantly with a single tap. No delays, no missed opportunities." },
                { icon: <Bell size={28} className="text-brand-dark" />, title: "Real-Time Alerts", desc: "Get instant notifications for price movements, trade executions, and market events." },
                { icon: <Briefcase size={28} className="text-brand-dark" />, title: "Portfolio Management", desc: "Monitor all your positions, P&L, and account balance in real-time." },
                { icon: <ChartLineUp size={28} className="text-brand-dark" />, title: "Advanced Charts", desc: "Interactive charts with 100+ indicators and multiple timeframes." },
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Download the cextradevip Trade App
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Available on iOS and Android. Get the full trading experience on your mobile device with instant access to all markets and account features.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/signup" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    <DeviceMobile size={20} />
                    Download for iOS
                  </Link>
                  <Link href="/signup" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    <DeviceMobile size={20} />
                    Download for Android
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  {["300+ Trading Instruments", "Real-Time Market Data", "Secure Biometric Login", "Multi-Account Support", "Deposit & Withdraw on the Go"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade on the Go
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and start trading from your mobile device today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
