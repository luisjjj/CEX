"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Check, Info } from "@phosphor-icons/react";

export default function CompensationFund() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Protection
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Compensation Fund
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your funds are protected by our compensation fund of up to €20,000 per eligible client.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                  Coverage Details
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Compensation Fund provides protection to eligible clients in the unlikely event that cextradevip is unable to meet its financial obligations.
                  </p>
                  <p>
                    Each eligible client is covered for up to €20,000 from the Compensation Fund, in addition to any funds held in segregated accounts.
                  </p>
                  <p>
                    The fund is maintained independently and is used exclusively for compensating eligible clients.
                  </p>
                </div>
              </div>
              <div className="bg-brand-bg rounded-2xl p-8">
                <div className="text-center mb-6">
                  <ShieldCheck size={48} className="text-brand-dark mx-auto mb-4" />
                  <div className="text-5xl font-bold text-brand-dark">€20,000</div>
                  <div className="text-gray-600 mt-2">Maximum Coverage Per Client</div>
                </div>
                <div className="space-y-3">
                  {[
                    "Covers eligible retail clients",
                    "Additional to segregated funds",
                    "Independent fund management",
                    "No action required from clients",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Automatic Coverage", desc: "All eligible retail clients are automatically covered by the Compensation Fund. No enrollment required." },
                { step: "2", title: "Claim Process", desc: "If a claim event occurs, eligible clients will be notified and provided with a simple claim form." },
                { step: "3", title: "Compensation", desc: "Valid claims are processed and compensated up to the maximum coverage amount of €20,000." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-brand-dark text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
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
                The Compensation Fund covers <strong>retail clients</strong> who hold accounts with cextradevip. Professional clients and institutional accounts are not eligible for compensation from the Fund.
              </p>
              <p className="text-gray-600">
                Coverage applies in the event of <strong>company insolvency</strong> or inability to return client funds held in segregated accounts.
              </p>
              <div className="flex items-start gap-2 mt-4">
                <Info size={18} className="text-brand-link mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  For full details, please refer to the Compensation Fund section in our Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Your Funds Are Protected
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Open an account and trade with the confidence of compensation fund coverage.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Protected Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
