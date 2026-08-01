"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Lock, Bank, Users, Check } from "@phosphor-icons/react";

export default function ClientProtection() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Your Security
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Client Protection
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your security is our top priority. We have multiple layers of protection to keep your funds and data safe.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Protection Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <ShieldCheck size={32} className="text-brand-dark" />,
                  title: "Negative Balance Protection",
                  desc: "You can never lose more than your account balance. If market conditions cause your account to go negative, we will reset it to zero at no cost to you.",
                },
                {
                  icon: <Bank size={32} className="text-brand-dark" />,
                  title: "Segregated Funds",
                  desc: "Client funds are held in segregated accounts separate from company funds at tier-1 international banks. Your money is never used for company operations.",
                },
                {
                  icon: <Users size={32} className="text-brand-dark" />,
                  title: "Compensation Fund",
                  desc: "Eligible clients are covered by our compensation fund of up to €20,000 per client in the event of company insolvency.",
                },
                {
                  icon: <Lock size={32} className="text-brand-dark" />,
                  title: "Data Encryption",
                  desc: "All personal and financial data is protected with 256-bit SSL encryption. We use industry-standard security protocols to safeguard your information.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-8 rounded-xl">
                  <div className="w-14 h-14 bg-brand-yellow/30 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                { step: "1", title: "Registration", desc: "When you open an account, your funds are immediately placed in segregated client accounts at a tier-1 bank." },
                { step: "2", title: "Trading", desc: "Your funds remain segregated during all trading activity. Company funds are kept completely separate." },
                { step: "3", title: "Protection", desc: "Negative balance protection ensures you never owe more than your balance. The compensation fund covers eligible claims." },
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
              Additional Safeguards
            </h2>
            <div className="space-y-4">
              {[
                "Regular independent audits of financial statements",
                "Compliance with international anti-money laundering (AML) regulations",
                "Two-factor authentication (2FA) for account access",
                "Real-time monitoring of suspicious activity",
                "Secure withdrawal process with verification",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-brand-bg rounded-lg">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade With Confidence
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Your security is built into everything we do. Open an account today and trade with peace of mind.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Secure Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
