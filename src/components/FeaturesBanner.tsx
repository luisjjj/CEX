"use client";

import Image from "next/image";

const leftFeatures = [
  {
    chip: "Deposits & Withdrawals",
    title: "Seamless Transactions",
    description: "Funds sent within seconds with seamless transactions.",
  },
  {
    chip: "Spreads",
    title: "Unmatched spreads",
    description:
      "Trade with spreads that remain tight and stable, even during market news.",
  },
  {
    chip: "Support",
    title: "24/7 live support",
    description: "Get answers in minutes via phone, live chat or emails.",
  },
];

const rightFeatures = [
  {
    chip: "Swaps",
    title: "Swap-free trading",
    description:
      "Hold overnight positions for free on most popular assets. T&Cs apply.",
  },
  {
    chip: "Execution speed",
    title: "More speed, less slippage",
    description: "Trade with the most precise execution in the market.",
  },
  {
    chip: "Account security",
    title: "Best-in-class security",
    description:
      "Trade knowing your funds are kept safe in separate client accounts, with ironclad data protection.",
  },
];

function FeatureCard({
  chip,
  title,
  description,
}: {
  chip: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center px-4">
      <span className="inline-block px-4 py-1.5 text-xs font-medium text-white/80 border border-white/20 rounded-full mb-3">
        {chip}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed max-w-[260px] mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesBanner() {
  return (
    <section className="bg-[#141D22] py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-12">
            {leftFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* Center phone */}
          <div className="relative w-[280px] h-[560px] flex-shrink-0">
            <Image
              src="/images/phone-chart.svg"
              alt="Trading platform on mobile"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-12">
            {rightFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-10 items-center">
            {/* Phone */}
            <div className="relative w-[220px] h-[440px] flex-shrink-0">
              <Image
                src="/images/phone-chart.svg"
                alt="Trading platform on mobile"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* All features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[...leftFeatures, ...rightFeatures].map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
