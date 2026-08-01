"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Envelope, Phone, ChatCircle } from "@phosphor-icons/react";

export default function HelplinePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-[720px] mx-auto px-5 md:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Help Center
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Need assistance? Our support team is available 24/7 to help you.
          </p>

          <div className="grid gap-6">
            <a
              href="mailto:support@cextradevip.com"
              className="flex items-center gap-5 p-6 bg-brand-bg rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Envelope size={22} className="text-brand-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Email Support</h3>
                <p className="text-sm text-gray-500">support@cextradevip.com</p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 bg-brand-bg rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-brand-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Phone Support</h3>
                <p className="text-sm text-gray-500">+357 25030959</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-brand-bg rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <ChatCircle size={22} className="text-brand-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1">Live Chat</h3>
                <p className="text-sm text-gray-500">Available 24/7 on our platform</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="text-sm text-brand-link hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
