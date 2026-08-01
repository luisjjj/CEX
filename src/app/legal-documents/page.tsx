"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, Download } from "@phosphor-icons/react";

const documents = [
  { title: "Terms & Conditions", description: "The legal agreement governing your use of cextradevip services and platforms.", lastUpdated: "June 2025", size: "245 KB" },
  { title: "Privacy Policy", description: "How we collect, use, and protect your personal information.", lastUpdated: "May 2025", size: "180 KB" },
  { title: "Risk Disclosure", description: "Important information about the risks associated with CFD and leveraged trading.", lastUpdated: "June 2025", size: "120 KB" },
  { title: "Order Execution Policy", description: "How we execute your orders and achieve the best possible results.", lastUpdated: "April 2025", size: "95 KB" },
  { title: "Cookie Policy", description: "How we use cookies and similar technologies on our website.", lastUpdated: "March 2025", size: "65 KB" },
  { title: "Conflict of Interest Policy", description: "How we identify, prevent, and manage conflicts of interest.", lastUpdated: "February 2025", size: "88 KB" },
  { title: "Complaints Procedure", description: "How to file a complaint and our process for resolving disputes.", lastUpdated: "January 2025", size: "72 KB" },
  { title: "Fee Schedule", description: "Complete breakdown of all fees, commissions, and charges.", lastUpdated: "June 2025", size: "55 KB" },
];

export default function LegalDocuments() {
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
                Legal Documents
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Access all legal documents, policies, and agreements that govern our services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Documents
            </h2>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div key={i} className="bg-brand-bg p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText size={22} className="text-brand-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-dark mb-1">{doc.title}</h3>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                      <span>Updated: {doc.lastUpdated}</span>
                      <span>Size: {doc.size}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-brand-dark font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm flex-shrink-0">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Questions About Our Policies?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Contact our compliance team for any questions about our legal documents.
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
