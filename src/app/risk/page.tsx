"use client";

import Link from "next/link";
import { ArrowRight, Warning, TrendDown, Crown, ChartLineDown, Info } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Risk() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-4">
                Important Notice
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Risk Warning
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trading CFDs carries a high level of risk and may not be suitable for all investors. Please read this warning carefully before trading.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            <div className="space-y-8">
              {[
                {
                  icon: <Warning size={24} className="text-red-500" />,
                  title: "High Risk of Loss",
                  content: "Trading on margin involves a high level of risk and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.",
                },
                {
                  icon: <TrendDown size={24} className="text-red-500" />,
                  title: "Losses Can Exceed Deposits",
                  content: "There is a possibility that you could sustain a loss of some or all of your initial investment, and therefore you should not invest money that you cannot afford to lose. You should be aware that you may lose more than your initial deposit in leveraged trading.",
                },
                {
                  icon: <Crown size={24} className="text-red-500" />,
                  title: "Margin Trading Risks",
                  content: "Margin trading magnifies both profits and losses. A small movement in the market can result in a significant loss relative to your initial margin deposit. You may be called upon to deposit additional margin at short notice. If you fail to do so, your position may be liquidated at a loss.",
                },
                {
                  icon: <ChartLineDown size={24} className="text-red-500" />,
                  title: "Market Volatility",
                  content: "Financial markets can be highly volatile. Rapid price movements can result in significant losses in a short period. Events such as economic data releases, geopolitical events, and central bank announcements can cause sudden and unpredictable price gaps.",
                },
                {
                  icon: <Info size={24} className="text-red-500" />,
                  title: "Product Complexity",
                  content: "CFDs are complex instruments. You should ensure that you understand how CFDs work and the risks involved before trading. Past performance is not indicative of future results. You should seek independent financial advice if you are unsure about the suitability of CFD trading.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Warning size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-red-800 leading-relaxed">
                  <strong>Regulatory Warning:</strong> CFDs are complex instruments. 74-89% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-6">
                By opening an account, you acknowledge that you have read and understood the risks involved in CFD trading.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
              >
                I Understand the Risks — Open Account
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
