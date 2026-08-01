"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Newspaper, Trophy, Medal, Star } from "@phosphor-icons/react";

const press = [
  { outlet: "Finance Magnates", title: "cextradevip Expands Global Reach with New License", date: "June 2025", type: "Article" },
  { outlet: "Forex Peace Army", title: "cextradevip Named Best Broker 2024", date: "December 2024", type: "Award" },
  { outlet: "Investing.com", title: "cextradevip Launches Crypto CFD Trading", date: "March 2025", type: "Article" },
  { outlet: "Bloomberg", title: "Retail Trading Platform Sees Record Growth", date: "January 2025", type: "Mention" },
  { outlet: "Reuters", title: "cextradevip Reports 3 Million Client Milestone", date: "April 2025", type: "Article" },
];

const awards = [
  { year: "2024", title: "Best Trading Platform", issuer: "Global Finance Awards" },
  { year: "2024", title: "Best Customer Service", issuer: "Forex Awards" },
  { year: "2023", title: "Most Innovative Broker", issuer: "International Finance Magazine" },
  { year: "2023", title: "Best Mobile Trading App", issuer: "Online Trading Awards" },
  { year: "2022", title: "Fastest Growing Broker", issuer: "World Finance Awards" },
];

export default function Media() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Press
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                cextradevip in the Media
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Industry recognition and press coverage from leading financial media outlets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Press Coverage
            </h2>
            <div className="space-y-4">
              {press.map((item, i) => (
                <div key={i} className="bg-brand-bg p-5 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper size={22} className="text-brand-dark" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-dark">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.outlet} · {item.date}</div>
                  </div>
                  <span className="px-3 py-1 bg-white text-xs font-medium text-gray-600 rounded-full">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy size={20} className="text-brand-yellow" />
                    <span className="text-sm text-gray-400">{award.year}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-400">{award.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade With an Award-Winning Broker
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Experience the quality that industry experts recognize.
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
