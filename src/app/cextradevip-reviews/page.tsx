"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Star } from "@phosphor-icons/react";

const reviews = [
  {
    name: "Michael T.",
    location: "United Kingdom",
    rating: 5,
    text: "I have been trading with cextradevip for over 3 years. The execution speed is incredible and the spreads are very competitive. Customer support is always helpful and responsive.",
    date: "March 2025",
  },
  {
    name: "Sarah K.",
    location: "Germany",
    rating: 5,
    text: "The MT5 platform works flawlessly. I appreciate the negative balance protection and the fact that my funds are held in segregated accounts. Very professional broker.",
    date: "February 2025",
  },
  {
    name: "David L.",
    location: "Australia",
    rating: 5,
    text: "Started with a demo account and was impressed by the real market conditions. Moved to live trading and have been happy with the tight spreads and fast deposits.",
    date: "January 2025",
  },
  {
    name: "Emma R.",
    location: "Canada",
    rating: 4,
    text: "Great range of instruments. I trade both forex and crypto CFDs. The mobile app is excellent for monitoring positions on the go. Withdrawal process is smooth.",
    date: "December 2024",
  },
];

export default function CexTradeVIPReviews() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Reviews
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Client Reviews
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                See what our clients say about trading with cextradevip. Real reviews from real traders.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex items-center gap-6 mb-10">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-dark">4.8</div>
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} className={s <= 4 ? "text-brand-yellow fill-brand-yellow" : "text-gray-300"} />
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-1">Average Rating</div>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-dark">12,450+</div>
                <div className="text-sm text-gray-500 mt-1">Total Reviews</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-brand-bg p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} className={s <= review.rating ? "text-brand-yellow fill-brand-yellow" : "text-gray-300"} />
                    ))}
                  </div>
                  <Star size={24} className="text-brand-yellow/30 mb-2" />
                  <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-brand-dark">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}</div>
                    </div>
                    <div className="text-xs text-gray-400">{review.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Satisfied Clients
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Experience the quality that thousands of traders rate 5 stars.
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
