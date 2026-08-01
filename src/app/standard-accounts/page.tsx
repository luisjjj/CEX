"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, TrendUp, Shield, Globe, Lightning } from "@phosphor-icons/react";

export default function StandardAccounts() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Standard Account
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Standard Accounts
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Start trading with competitive spreads, fast execution, and access to over 300 instruments. Perfect for traders at every level.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                Open Standard Account
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Account Features
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold">Standard Account</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Minimum Deposit</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">$10</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Spreads</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">From 1.0 pips</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Commission</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">None</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Maximum Leverage</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">Up to 1:2000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Instruments</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">300+</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Execution</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">Market Execution</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Margin Call</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">100%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Stop Out</td>
                    <td className="py-4 px-6 font-semibold text-brand-dark">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Why Choose Standard Account
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <TrendUp size={28} className="text-brand-dark" />, title: "Competitive Spreads", desc: "Tight spreads from 1.0 pips on major pairs with no hidden fees." },
                { icon: <Shield size={28} className="text-brand-dark" />, title: "Negative Balance Protection", desc: "You will never lose more than your account balance." },
                { icon: <Globe size={28} className="text-brand-dark" />, title: "300+ Instruments", desc: "Trade forex, commodities, stocks, indices, and crypto CFDs." },
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "Fast Execution", desc: "99.5% of orders executed in under 1 second." },
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
              How to Open a Standard Account
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Register", desc: "Complete the online registration form with your basic details." },
                { step: "2", title: "Verify", desc: "Upload your ID and proof of address for verification." },
                { step: "3", title: "Fund & Trade", desc: "Deposit from $10 and start trading 300+ instruments." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 font-bold text-brand-dark">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Open Your Standard Account
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
