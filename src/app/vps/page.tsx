"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, DesktopTower, Clock, Shield, Check, Lightning } from "@phosphor-icons/react";

export default function VPS() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Infrastructure
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                VPS Hosting
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Run your Expert Advisors 24/7 on our Virtual Private Servers. Free for qualifying accounts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              VPS Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <DesktopTower size={28} className="text-brand-dark" />, title: "Free for Qualifying Accounts", desc: "Accounts with $5,000+ balance or $50+ monthly commission qualify for a free VPS." },
                { icon: <Clock size={28} className="text-brand-dark" />, title: "24/7 Uptime", desc: "Your EAs run continuously without interruptions from power outages or internet disconnections." },
                { icon: <Lightning size={28} className="text-brand-dark" />, title: "Low Latency", desc: "Servers located in the same data center as our trade servers for minimal latency." },
                { icon: <Shield size={28} className="text-brand-dark" />, title: "Secure Environment", desc: "Enterprise-grade security with dedicated resources and regular backups." },
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
              VPS Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="font-semibold text-white mb-4">Standard VPS</h3>
                <ul className="space-y-3">
                  {["1 vCPU", "1 GB RAM", "25 GB SSD Storage", "Windows Server 2019", "1 dedicated IP"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <Check size={16} className="text-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="font-semibold text-white mb-4">Premium VPS</h3>
                <ul className="space-y-3">
                  {["2 vCPU", "2 GB RAM", "50 GB SSD Storage", "Windows Server 2022", "1 dedicated IP", "Priority support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <Check size={16} className="text-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Eligibility
            </h2>
            <div className="bg-brand-bg rounded-xl p-8 space-y-4">
              <p className="text-gray-600">
                <strong>Free VPS:</strong> Available to accounts maintaining a minimum balance of $5,000 or generating $50+ in monthly commissions.
              </p>
              <p className="text-gray-600">
                <strong>Discounted VPS:</strong> Accounts with lower balance/commission qualify for a 50% discount on VPS hosting.
              </p>
              <p className="text-gray-600">
                <strong>Paid VPS:</strong> Available to all clients at competitive monthly rates starting from $9.99/month.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Get Your Free VPS
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open a qualifying account and get access to a free VPS for your EAs.
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
