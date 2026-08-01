"use client";

import Link from "next/link";
import Image from "next/image";
import { Headphones } from "@phosphor-icons/react";

export default function PodcastCTA() {
  return (
    <section className="relative bg-[#141D22] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <Image
          src="/images/podcast-desktop.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 hidden md:block"
          priority={false}
        />
        <Image
          src="/images/podcast-mobile.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 md:hidden"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141D22] via-[#141D22]/80 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20 lg:py-28">
        <div className="max-w-[600px]">
          <div className="w-14 h-14 rounded-2xl bg-brand-yellow/15 flex items-center justify-center mb-6">
            <Headphones size={28} weight="light" className="text-brand-yellow" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-white mb-5">
            cextradevip Born to Trade podcast
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Hear from the pros on mastering emotions, building discipline, and
            staying focused.
          </p>
          <Link
            href="/podcasts"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-brand-yellow rounded-lg hover:bg-brand-yellow-hover transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Explore the episodes
          </Link>
        </div>
      </div>
    </section>
  );
}
