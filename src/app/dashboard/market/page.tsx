"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChartLineUp,
  ArrowsLeftRight,
  TrendUp,
  TrendDown,
  Star,
  Clock,
} from "@phosphor-icons/react";

const GOLD = "#FFDE02";

const SYMBOLS = [
  { pair: "BTC/USDT", name: "Bitcoin", coinId: "bitcoin" },
  { pair: "ETH/USDT", name: "Ethereum", coinId: "ethereum" },
  { pair: "BNB/USDT", name: "BNB", coinId: "binancecoin" },
  { pair: "SOL/USDT", name: "Solana", coinId: "solana" },
  { pair: "XRP/USDT", name: "XRP", coinId: "ripple" },
  { pair: "DOGE/USDT", name: "Dogecoin", coinId: "dogecoin" },
  { pair: "ADA/USDT", name: "Cardano", coinId: "cardano" },
  { pair: "AVAX/USDT", name: "Avalanche", coinId: "avalanche-2" },
];

function TradingViewWidget({ symbol }: { symbol: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const coinName = symbol.split("/")[0].toLowerCase();
    const tvSymbol =
      coinName === "bnb"
        ? "BINANCE:BNBUSDT"
        : coinName === "xrp"
        ? "BINANCE:XRPUSDT"
        : `BINANCE:${coinName.toUpperCase()}USDT`;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: tvSymbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "#111620",
      gridColor: "#1e2533",
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", minHeight: 500, borderRadius: 12, overflow: "hidden" }} />
  );
}

export default function MarketPage() {
  const [selected, setSelected] = useState(SYMBOLS[0]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", margin: 0 }}>Market</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#d1d5dc" }}>
          <Clock size={14} />
          Live prices via CoinGecko
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }} className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* Symbol list */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", padding: 12, maxHeight: 600, overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", fontSize: 12, color: "#d1d5dc", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, fontWeight: 500 }}>
            <Star size={12} />
            Watchlist
          </div>
          {SYMBOLS.map((s) => (
            <button
              key={s.pair}
              onClick={() => setSelected(s)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                color: selected.pair === s.pair ? GOLD : "#d1d5dc",
                backgroundColor: selected.pair === s.pair ? "rgba(255,222,2,0.1)" : "transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
                  {s.pair.slice(0, 2)}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{s.pair}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{s.name}</p>
                </div>
              </div>
              <TrendUp size={14} />
            </button>
          ))}
        </div>

        {/* Chart */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: 0 }}>{selected.pair}</h2>
              <p style={{ fontSize: 14, color: "#d1d5dc", margin: 0 }}>{selected.name}</p>
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                backgroundColor: GOLD,
                color: "#000000",
                fontWeight: 600,
                borderRadius: 8,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
              }}
            >
              <ArrowsLeftRight size={16} />
              Trade
            </button>
          </div>
          <TradingViewWidget symbol={selected.pair} />
        </div>
      </div>
    </div>
  );
}
