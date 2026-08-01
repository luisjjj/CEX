"use client";

import Link from "next/link";
import {
  CurrencyCircleDollar,
  Leaf,
  ChartLineUp,
  GlobeSimple,
  CurrencyBtc,
} from "@phosphor-icons/react";

const instruments = [
  {
    name: "Forex",
    pairs: "70+",
    description: "Major, minor and exotic currency pairs",
    Icon: CurrencyCircleDollar,
  },
  {
    name: "Commodities",
    pairs: "30+",
    description: "Gold, oil, silver and more",
    Icon: Leaf,
  },
  {
    name: "Stocks",
    pairs: "100+",
    description: "Global equity CFDs",
    Icon: ChartLineUp,
  },
  {
    name: "Indices",
    pairs: "20+",
    description: "Major world indices",
    Icon: GlobeSimple,
  },
  {
    name: "Crypto",
    pairs: "40+",
    description: "Bitcoin, Ethereum and top altcoins",
    Icon: CurrencyBtc,
  },
];

export default function InstrumentsSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-brand-dark mb-4">
            Trade assets from global markets
          </h2>
          <p className="text-lg text-gray-600 max-w-[560px] mx-auto">
            Capitalize on every opportunity with the world&apos;s most popular
            assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-12">
          {instruments.map((inst, i) => {
            const Icon = inst.Icon;
            return (
              <div
                key={i}
                className="group bg-brand-bg rounded-xl p-6 text-center hover:bg-brand-dark transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-yellow/15 flex items-center justify-center group-hover:bg-brand-yellow/25 transition-colors duration-300">
                  <Icon
                    size={28}
                    weight="light"
                    className="text-brand-dark group-hover:text-brand-yellow transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-white mb-1 transition-colors duration-300">
                  {inst.name}
                </h3>
                <p className="text-2xl font-bold text-brand-yellow mb-1">
                  {inst.pairs}
                </p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 mb-2 transition-colors duration-300">
                  instruments
                </p>
                <p className="text-xs text-brand-muted group-hover:text-gray-300 transition-colors duration-300">
                  {inst.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-brand-yellow rounded-lg hover:bg-brand-yellow-hover transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-brand-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
