"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, TrendUp, Headphones, Desktop, GraduationCap, Check } from "@phosphor-icons/react";

export default function WhyCexTradeVIP() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Why Us
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Why Choose cextradevip
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover why over 3 million traders trust cextradevip as their trading partner.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              The cextradevip Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <ShieldCheck size={28} className="text-brand-dark" />, title: "Regulated & Secure", desc: "Licensed by the Financial Services Commission. Client funds held in segregated accounts." },
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "Competitive Spreads", desc: "Tight spreads from 0.0 pips on Pro accounts, from 1.0 pip on Standard accounts." },
                { icon: <Headphones size={28} className="text-brand-dark" />, title: "24/7 Support", desc: "Multilingual support team available around the clock via live chat, email, and phone." },
                { icon: <Desktop size={28} className="text-brand-dark" />, title: "Multiple Platforms", desc: "Trade on MT4, MT5, or our proprietary web and mobile platforms." },
                { icon: <GraduationCap size={28} className="text-brand-dark" />, title: "Free Education", desc: "Access trading courses, webinars, tutorials, and market analysis at no cost." },
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "Fast Execution", desc: "99.5% of orders executed in under 1 second with no requotes." },
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
              Compare Accounts
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-semibold text-white">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-brand-yellow">Standard</th>
                    <th className="text-left py-4 px-6 font-semibold text-brand-yellow">Pro</th>
                    <th className="text-left py-4 px-6 font-semibold text-brand-yellow">Demo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Min Deposit", standard: "$10", pro: "$500", demo: "Free" },
                    { feature: "Spreads", standard: "From 1.0", pro: "From 0.0", demo: "From 1.0" },
                    { feature: "Commission", standard: "None", pro: "$3.50/lot", demo: "None" },
                    { feature: "Max Leverage", standard: "1:2000", pro: "1:500", demo: "1:2000" },
                    { feature: "Execution", standard: "Market", pro: "ECN", demo: "Market" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-4 px-6 text-gray-300">{item.feature}</td>
                      <td className="py-4 px-6 text-white">{item.standard}</td>
                      <td className="py-4 px-6 text-white">{item.pro}</td>
                      <td className="py-4 px-6 text-white">{item.demo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Start Trading With Us
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Join millions of traders who chose cextradevip. Open your account today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
