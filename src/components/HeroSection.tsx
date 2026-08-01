"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Check } from "@phosphor-icons/react";

const HeroAnimation = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-[480px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl animate-pulse" />
  ),
});

export default function HeroSection() {
  const trustItems = [
    "3 million+ active traders",
    "Multiple regulatory licenses",
    "24/7 customer support",
    "PCI DSS certified",
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="py-16 md:py-20 lg:py-28 xl:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.08] tracking-tight text-brand-dark mb-5">
                Upgrade the way you trade
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-[560px]">
                Trade with the world&apos;s largest retail broker and benefit from{" "}
                <strong className="text-brand-dark font-semibold">
                  better-than-market
                </strong>{" "}
                conditions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
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

              {/* Trust indicators */}
              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trustItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                        <Check size={14} className="text-brand-dark" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-brand-dark">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Animation */}
            <div className="hidden lg:block">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
