"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Lock, Eye, Share, Shield, User, Envelope } from "@phosphor-icons/react";

export default function Privacy() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Last updated: June 2025. This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            <div className="space-y-12">
              {[
                {
                  icon: <Eye size={24} className="text-brand-dark" />,
                  title: "Data Collection",
                  content: "We collect personal information you provide during registration (name, email, phone, address), identity verification documents (passport, utility bills), financial information (bank details, payment methods), and technical data (IP address, browser type, device information). We also collect trading data and platform usage information to improve our services.",
                },
                {
                  icon: <Lock size={24} className="text-brand-dark" />,
                  title: "Data Usage",
                  content: "Your data is used to: verify your identity and comply with regulatory requirements (AML/KYC), process your deposits and withdrawals, execute your trades and maintain your account, provide customer support and send important account notifications, improve our platforms and services, and send marketing communications (with your consent).",
                },
                {
                  icon: <Share size={24} className="text-brand-dark" />,
                  title: "Data Sharing",
                  content: "We do not sell your personal data. We may share your information with: regulated financial institutions for payment processing, identity verification providers for KYC checks, regulatory authorities as required by law, technology service providers who support our platforms, and our affiliated entities for operational purposes.",
                },
                {
                  icon: <Shield size={24} className="text-brand-dark" />,
                  title: "Data Security",
                  content: "We implement industry-standard security measures including 256-bit SSL encryption, secure server infrastructure with firewalls, access controls and authentication protocols, regular security audits and penetration testing, and employee training on data protection. While we cannot guarantee absolute security, we take all reasonable measures to protect your data.",
                },
                {
                  icon: <User size={24} className="text-brand-dark" />,
                  title: "Your Rights",
                  content: "Under applicable data protection laws, you have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to regulatory retention requirements), object to processing of your data for marketing purposes, and request transfer of your data to another provider.",
                },
                {
                  icon: <Envelope size={24} className="text-brand-dark" />,
                  title: "Contact Us",
                  content: "For any questions about this Privacy Policy or to exercise your data rights, contact our Data Protection Officer at privacy@cextradevip.com. We will respond to all requests within 30 days.",
                },
              ].map((section, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-4">
                    {section.icon}
                    <h2 className="text-xl font-bold text-brand-dark">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-9">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Contact our Data Protection Officer for any privacy-related inquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors text-lg"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
