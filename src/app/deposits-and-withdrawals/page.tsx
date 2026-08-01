"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CreditCard, CurrencyBtc, Clock, ShieldCheck } from "@phosphor-icons/react";

const paymentMethods = [
  { name: "Visa / Mastercard", type: "Card", depositTime: "Instant", withdrawTime: "1-3 business days", fee: "Free" },
  { name: "Bitcoin (BTC)", type: "Crypto", depositTime: "~10 minutes", withdrawTime: "Within 24 hours", fee: "Free" },
  { name: "Tether (USDT)", type: "Crypto", depositTime: "~5 minutes", withdrawTime: "Within 24 hours", fee: "Free" },
  { name: "Bank Transfer", type: "Bank", depositTime: "1-3 business days", withdrawTime: "1-5 business days", fee: "Free" },
  { name: "Ethereum (ETH)", type: "Crypto", depositTime: "~5 minutes", withdrawTime: "Within 24 hours", fee: "Free" },
  { name: "Skrill", type: "E-Wallet", depositTime: "Instant", withdrawTime: "Within 24 hours", fee: "Free" },
];

export default function DepositsAndWithdrawals() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Payments
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Deposits & Withdrawals
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fast, secure, and fee-free funding options. Deposit and withdraw using your preferred method.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Payment Methods
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Method</th>
                    <th className="text-left py-4 px-6 font-semibold">Type</th>
                    <th className="text-left py-4 px-6 font-semibold">Deposit Time</th>
                    <th className="text-left py-4 px-6 font-semibold">Withdrawal Time</th>
                    <th className="text-left py-4 px-6 font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((method, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{method.name}</td>
                      <td className="py-4 px-6 text-gray-600">{method.type}</td>
                      <td className="py-4 px-6 text-gray-600">{method.depositTime}</td>
                      <td className="py-4 px-6 text-gray-600">{method.withdrawTime}</td>
                      <td className="py-4 px-6 text-green-600 font-medium">{method.fee}</td>
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
              Why Fund With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Clock size={28} className="text-brand-dark" />, title: "Instant Deposits", desc: "Card and crypto deposits are processed instantly so you can start trading right away." },
                { icon: <ShieldCheck size={28} className="text-brand-dark" />, title: "Secure Payments", desc: "All transactions are encrypted and processed through regulated payment providers." },
                { icon: <CurrencyBtc size={28} className="text-brand-dark" />, title: "Crypto Friendly", desc: "Deposit and withdraw using Bitcoin, Ethereum, Tether, and other popular cryptocurrencies." },
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
              Important Information
            </h2>
            <div className="bg-brand-bg rounded-xl p-8 space-y-4">
              <p className="text-gray-600">
                <strong>Minimum Deposit:</strong> $10 for standard accounts, $500 for professional accounts.
              </p>
              <p className="text-gray-600">
                <strong>Currency:</strong> Accounts are available in USD, EUR, and GBP. Currency conversion fees may apply.
              </p>
              <p className="text-gray-600">
                <strong>Withdrawals:</strong> Withdrawals are processed to the same method used for deposit where possible. Processing times may vary during peak periods.
              </p>
              <p className="text-gray-600">
                <strong>Verification:</strong> Identity verification is required before your first withdrawal.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
              >
                Open Account & Fund
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
