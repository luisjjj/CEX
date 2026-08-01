"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Tree, Users, Heart, ChartLineUp } from "@phosphor-icons/react";

export default function SocialResponsibility() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Community
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Community & Social Responsibility
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in giving back. Our commitment extends beyond trading to making a positive impact in communities worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8">
              Our Initiatives
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <GraduationCap size={32} className="text-brand-dark" />,
                  title: "Education Programs",
                  desc: "We provide free financial literacy resources to underserved communities. Our trading education platform has helped over 100,000 people learn about financial markets.",
                  stat: "100K+ Students",
                },
                {
                  icon: <Tree size={32} className="text-brand-dark" />,
                  title: "Environmental Impact",
                  desc: "We are committed to reducing our carbon footprint. Our offices run on renewable energy, and we offset 100% of company travel emissions.",
                  stat: "Carbon Neutral",
                },
                {
                  icon: <Users size={32} className="text-brand-dark" />,
                  title: "Community Support",
                  desc: "We partner with local organizations to support youth programs, STEM education, and financial inclusion initiatives in the countries where we operate.",
                  stat: "50+ Partners",
                },
                {
                  icon: <Heart size={32} className="text-brand-dark" />,
                  title: "Charitable Giving",
                  desc: "A portion of every trade goes to our charitable fund. We have donated over $2 million to education and poverty alleviation programs.",
                  stat: "$2M+ Donated",
                },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg p-8 rounded-xl">
                  <div className="w-14 h-14 bg-brand-yellow/30 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full">
                    {item.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "$2M+", label: "Charitable Donations" },
                { stat: "100K+", label: "Students Educated" },
                { stat: "50+", label: "Community Partners" },
                { stat: "100%", label: "Carbon Offset" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">{item.stat}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              Trade With Purpose
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Every trade contributes to our social impact initiatives.
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
