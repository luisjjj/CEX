"use client";

import Link from "next/link";
import Image from "next/image";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";

interface FeatureSectionProps {
  title: string;
  description: string;
  links: { label: string; href: string }[];
  imagePosition?: "left" | "right";
  imageUrl: string;
  imageAlt: string;
}

export default function FeatureSection({
  title,
  description,
  links,
  imagePosition = "right",
  imageUrl,
  imageAlt,
}: FeatureSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            !isRight ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Content */}
          <div className={`${!isRight ? "lg:order-2" : ""}`}>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight text-brand-dark mb-5">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-[480px]">
              {description}
            </p>

            <div className="space-y-3">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group flex items-center gap-3 text-base font-medium text-brand-dark hover:text-brand-link transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors duration-200">
                    <CaretRight
                      size={16}
                      className="text-brand-dark group-hover:text-brand-link transition-colors duration-200"
                    />
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${!isRight ? "lg:order-1" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden bg-brand-bg aspect-[4/3]">
              {imageUrl ? (
                imageUrl.endsWith(".svg") ? (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                )
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-brand-bg flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-yellow/20 flex items-center justify-center">
                      <ChartLineUp size={36} weight="light" className="text-brand-dark" />
                    </div>
                    <p className="text-sm font-medium text-brand-muted">
                      {imageAlt}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
