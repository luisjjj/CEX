"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/navigation";

const footerSections = [
  { title: "Trading", links: footerLinks.trading },
  { title: "Markets", links: footerLinks.markets },
  { title: "Platforms", links: footerLinks.platforms },
  { title: "Resources", links: footerLinks.resources },
  { title: "Company", links: footerLinks.company },
  { title: "Legal", links: footerLinks.legal },
];

export default function Footer() {
  const yearRef = useRef(new Date().getFullYear());
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(yearRef.current); }, []);
  return (
    <footer className="bg-[#141D22] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 pt-16 pb-10">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/images/logo.svg"
              alt="cextradevip"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-yellow transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
          {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map(
            (social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-gray-300 hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200"
                aria-label={social}
              >
                {social[0]}
              </a>
            )
          )}
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 leading-relaxed space-y-4 mb-8">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              Registration: CEXTRADEVIP, No. 000001317, Financial Services
              Commission, Securities Industry Act 2021, license 000102/31.
              Address: The Bentley, #16 Cor A Street &amp; Princess Margaret
              Drive, Belize City, Belize. Excluded: North Korea, Iran, Myanmar,
              Yemen.
            </li>
            <li>
              Payment processor: HDC Technologies Ltd., Reg. HE 370778,
              Limassol, Cyprus. Contact: support@cextradevip.com
            </li>
            <li>
              Trading on margin carries a high level of risk and may not be
              suitable for all investors. Before deciding to trade, you should
              carefully consider your investment objectives, level of experience,
              and risk appetite. There is a possibility that you could sustain a
              loss of some or all of your initial investment, and therefore you
              should not invest money that you cannot afford to lose. You should
              be aware of all the risks associated with trading and seek advice
              from an independent financial advisor if you have any doubts.
            </li>
          </ol>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500">
            &copy; {year} CEXTRADEVIP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/risk"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Risk Warning
            </Link>
            <Link
              href="/legal-documents"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Legal Documents
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
