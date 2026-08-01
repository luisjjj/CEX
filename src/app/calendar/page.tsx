"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, Warning, ArrowUp, ArrowDown, Minus } from "@phosphor-icons/react";

const events = [
  { date: "Aug 01", time: "10:00", event: "US Non-Farm Payrolls", impact: "high", previous: "272K", forecast: "185K" },
  { date: "Aug 01", time: "10:00", event: "US Unemployment Rate", impact: "high", previous: "4.0%", forecast: "4.1%" },
  { date: "Aug 01", time: "13:00", event: "FOMC Member Speech", impact: "medium", previous: "-", forecast: "-" },
  { date: "Aug 02", time: "07:00", event: "UK Services PMI", impact: "medium", previous: "55.2", forecast: "55.0" },
  { date: "Aug 02", time: "09:00", event: "Euro Zone Retail Sales", impact: "medium", previous: "0.1%", forecast: "0.2%" },
  { date: "Aug 05", time: "03:30", event: "RBA Interest Rate Decision", impact: "high", previous: "4.35%", forecast: "4.35%" },
  { date: "Aug 05", time: "10:00", event: "US ISM Services PMI", impact: "high", previous: "48.8", forecast: "51.0" },
  { date: "Aug 06", time: "01:30", event: "AU Trade Balance", impact: "low", previous: "5.6B", forecast: "6.2B" },
  { date: "Aug 07", time: "07:00", event: "DE Factory Orders", impact: "low", previous: "-0.4%", forecast: "0.5%" },
  { date: "Aug 08", time: "13:30", event: "CA Employment Change", impact: "high", previous: "-0.1K", forecast: "20.0K" },
];

const impactColors: Record<string, string> = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
};

export default function CalendarPage() {
  const [selectedImpact, setSelectedImpact] = useState<string>("all");

  const filteredEvents = selectedImpact === "all"
    ? events
    : events.filter((e) => e.impact === selectedImpact);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Resources
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Economic Calendar
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay ahead of the markets with our real-time economic calendar. Track high-impact events that move the markets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-sm font-medium text-gray-700">Filter by impact:</span>
              {["all", "high", "medium", "low"].map((impact) => (
                <button
                  key={impact}
                  onClick={() => setSelectedImpact(impact)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    selectedImpact === impact
                      ? "bg-brand-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {impact === "all" ? "All Events" : impact.charAt(0).toUpperCase() + impact.slice(1)}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold">Date</th>
                    <th className="text-left py-4 px-6 font-semibold">Time</th>
                    <th className="text-left py-4 px-6 font-semibold">Event</th>
                    <th className="text-left py-4 px-6 font-semibold">Impact</th>
                    <th className="text-left py-4 px-6 font-semibold">Previous</th>
                    <th className="text-left py-4 px-6 font-semibold">Forecast</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
                      <td className="py-4 px-6 font-medium text-brand-dark">{event.date}</td>
                      <td className="py-4 px-6 text-gray-600">{event.time}</td>
                      <td className="py-4 px-6 font-medium text-brand-dark">{event.event}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${impactColors[event.impact]}`}>
                          {event.impact}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{event.previous}</td>
                      <td className="py-4 px-6 text-gray-600">{event.forecast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-bg">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              Understanding the Calendar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Warning size={20} className="text-red-500" />
                  <span className="font-semibold text-brand-dark">High Impact</span>
                </div>
                <p className="text-sm text-gray-600">Major economic events that typically cause significant market volatility. Examples: NFP, GDP, Interest Rate decisions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Warning size={20} className="text-yellow-500" />
                  <span className="font-semibold text-brand-dark">Medium Impact</span>
                </div>
                <p className="text-sm text-gray-600">Events that can move markets but with less intensity. Examples: PMI data, retail sales, employment figures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Warning size={20} className="text-green-500" />
                  <span className="font-semibold text-brand-dark">Low Impact</span>
                </div>
                <p className="text-sm text-gray-600">Minor events with limited market impact. Examples: minor economic indicators, minor central bank speeches.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4" style={{ color: "white" }}>
              Trade Smarter
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Combine the economic calendar with our analytical tools for better trading decisions.
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
