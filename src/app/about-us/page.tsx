"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Globe, Headphones, Trophy, Target, Heart } from "@phosphor-icons/react";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                About cextradevip
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering traders worldwide with innovative technology, competitive conditions, and unwavering support since 2015.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2015, cextradevip was built with a clear mission: to make financial markets accessible to everyone. We started as a small team of traders and developers who believed that retail traders deserved the same quality of service as institutional clients.
                  </p>
                  <p>
                    Today, we serve over 3 million clients across 150+ countries, providing access to 300+ trading instruments across forex, commodities, stocks, indices, and cryptocurrencies.
                  </p>
                  <p>
                    Our commitment to transparency, fast execution, and client protection has earned us the trust of traders worldwide.
                  </p>
                </div>
              </div>
              <div className="bg-brand-bg rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Users size={28} className="text-brand-dark" />, stat: "3M+", label: "Clients Worldwide" },
                    { icon: <Globe size={28} className="text-brand-dark" />, stat: "150+", label: "Countries Served" },
                    { icon: <Headphones size={28} className="text-brand-dark" />, stat: "24/7", label: "Client Support" },
                    { icon: <Trophy size={28} className="text-brand-dark" />, stat: "50+", label: "Industry Awards" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-brand-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                        {item.icon}
                      </div>
                      <div className="text-2xl font-bold text-brand-dark">{item.stat}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Target size={28} className="text-brand-yellow" />, title: "Innovation", desc: "We continuously improve our platforms and services to stay ahead of market needs." },
                { icon: <Heart size={28} className="text-brand-yellow" />, title: "Client First", desc: "Every decision we make starts with the question: how does this benefit our clients?" },
                { icon: <Trophy size={28} className="text-brand-yellow" />, title: "Excellence", desc: "We set the highest standards for execution quality, support, and transparency." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Join 3 Million+ Traders
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Experience the cextradevip difference. Open an account in minutes.
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
