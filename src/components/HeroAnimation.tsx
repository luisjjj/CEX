"use client";

import { useState, useEffect } from "react";

const TRADES = [
  { type: "buy" as const, pair: "BTC/USDT", amount: "0.45", price: "62,706", change: "+0.20%" },
  { type: "sell" as const, pair: "ETH/USDT", amount: "12.5", price: "1,857", change: "-0.30%" },
  { type: "buy" as const, pair: "SOL/USDT", amount: "85.0", price: "71.67", change: "+1.20%" },
  { type: "sell" as const, pair: "BNB/USDT", amount: "3.2", price: "576.30", change: "-0.80%" },
  { type: "buy" as const, pair: "XRP/USDT", amount: "5000", price: "0.08", change: "+0.45%" },
  { type: "buy" as const, pair: "BTC/USDT", amount: "1.2", price: "62,710", change: "+0.22%" },
  { type: "sell" as const, pair: "DOGE/USDT", amount: "100000", price: "0.07", change: "-1.50%" },
  { type: "buy" as const, pair: "ADA/USDT", amount: "2500", price: "0.45", change: "+0.80%" },
  { type: "sell" as const, pair: "AVAX/USDT", amount: "45", price: "35.20", change: "-0.60%" },
  { type: "buy" as const, pair: "LINK/USDT", amount: "120", price: "14.85", change: "+0.95%" },
];

export default function HeroAnimation() {
  const [visibleTrades, setVisibleTrades] = useState<(typeof TRADES)[0][]>([]);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setVisibleTrades((v) => [TRADES[idx % TRADES.length], ...v].slice(0, 5));
      idx++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] lg:h-[520px] flex flex-col justify-center items-center">
      <div className="w-full max-w-[340px] space-y-2.5 px-4">
        {visibleTrades.map((trade, i) => {
          const isBuy = trade.type === "buy";
          return (
            <div
              key={`${trade.pair}-${i}-${trade.amount}`}
              className="bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-between animate-[slideUp_0.35s_ease-out]"
              style={{ opacity: 1 - i * 0.18 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: isBuy ? "#16a34a" : "#dc2626" }}
                >
                  {isBuy ? "B" : "S"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{trade.pair}</p>
                  <p className="text-[11px] text-gray-400">
                    {isBuy ? "Buy" : "Sell"} {trade.amount}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900 tabular-nums">${trade.price}</p>
                <p
                  className="text-[11px] font-medium tabular-nums"
                  style={{ color: isBuy ? "#16a34a" : "#dc2626" }}
                >
                  {trade.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
