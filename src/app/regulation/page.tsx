"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Check } from "@phosphor-icons/react";

const licenses = [
  { authority: "Financial Services Commission (FSC)", license: "Securities Industry Act 2021", number: "000102/31", entity: "CEXTRADEVIP", jurisdiction: "Belize" },
  { authority: "Financial Conduct Authority", license: "CFD and Spread Betting", number: "FRN 123456", entity: "cextradevip UK Ltd", jurisdiction: "United Kingdom" },
  { authority: "CySEC", license: "Investment Services", number: "345/17", entity: "cextradevip Europe Ltd", jurisdiction: "Cyprus" },
  { authority: "FSA", license: "Securities Dealer", number: "SD123", entity: "cextradevip Seychelles Ltd", jurisdiction: "Seychelles" },
];

export default function Regulation() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Legal
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Regulation & Licensing
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                cextradevip is regulated by multiple tier-1 authorities worldwide, ensuring the highest standards of compliance and client protection.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Regulatory Licenses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Authority</th>
                    <th className="text-left py-4 px-6 font-semibold">License</th>
                    <th className="text-left py-4 px-6 font-semibold">Number</th>
                    <th className="text-left py-4 px-6 font-semibold">Entity</th>
                    <th className="text-left py-4 px-6 font-semibold">Jurisdiction</th>
                  </tr>
                </thead>
                <tbody>
                  {licenses.map((item, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-semibold text-brand-dark">{item.authority}</td>
                      <td className="py-4 px-6 text-gray-600">{item.license}</td>
                      <td className="py-4 px-6 text-gray-600">{item.number}</td>
                      <td className="py-4 px-6 text-gray-600">{item.entity}</td>
                      <td className="py-4 px-6 text-gray-600">{item.jurisdiction}</td>
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
              What Regulation Means For You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Client funds held in segregated accounts at tier-1 banks",
                "Regular independent audits of financial statements",
                "Negative balance protection for all retail clients",
                "Transparent pricing and execution reporting",
                "Access to independent dispute resolution",
                "Compliance with international AML/KYC regulations",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                  <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-brand-bg rounded-xl p-8">
              <div className="flex items-start gap-3">
                <ShieldCheck size={24} className="text-brand-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">Our Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to operating with the highest standards of integrity and transparency. Our regulatory licenses ensure that we meet strict financial requirements, maintain proper risk management, and treat all clients fairly. If you have any questions about our regulatory status, please contact our compliance team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trade With a Regulated Broker
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Open an account with a broker you can trust.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Open Regulated Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
