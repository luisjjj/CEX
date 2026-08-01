"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownRight, TrendUp, Clock } from "@phosphor-icons/react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { CoinPrice } from "@/lib/coingecko";

const GOLD = "#FFDE02";

const FALLBACK_COINS: CoinPrice[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", image: "", current_price: 62706, price_change_percentage_24h: 0.2, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", image: "", current_price: 1857.52, price_change_percentage_24h: 0.3, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
  { id: "binancecoin", symbol: "BNB", name: "BNB", image: "", current_price: 576.30, price_change_percentage_24h: -1.2, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
  { id: "solana", symbol: "SOL", name: "Solana", image: "", current_price: 71.67, price_change_percentage_24h: -0.6, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", image: "", current_price: 0.07, price_change_percentage_24h: 1.5, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
  { id: "ripple", symbol: "XRP", name: "XRP", image: "", current_price: 0.08, price_change_percentage_24h: 0.4, market_cap: 0, total_volume: 0, high_24h: 0, low_24h: 0 },
];

function formatPrice(price: number) {
  if (price >= 1000) return price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}

export default function DashboardHome() {
  const [coins, setCoins] = useState<CoinPrice[]>(FALLBACK_COINS);
  const [balance] = useState(0);
  const [tab, setTab] = useState<"crypto" | "forex" | "commodities" | "stocks">("crypto");

  useEffect(() => {
    fetch("/api/prices")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setCoins(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", overflowX: "hidden", width: "100%" }}>
      <style>{`
        .home-balance-card { display: flex; align-items: center; justify-content: space-between; }
        .home-tabs { display: flex; gap: 4px; background-color: #111620; border-radius: 12px; padding: 4px; border: 1px solid rgba(255,255,255,0.05); width: fit-content; overflow-x: auto; }
        .home-coin-header { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; color: #d1d5dc; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .home-coin-header .chg-col { display: none; }
        .home-coin-row { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); align-items: center; cursor: pointer; }
        .home-coin-row .chg-col { display: none; }
        @media (min-width: 640px) {
          .home-coin-header { grid-template-columns: 1fr auto auto; gap: 16px; padding: 12px 24px; }
          .home-coin-header .chg-col { display: block; }
          .home-coin-row { grid-template-columns: 1fr auto auto; gap: 16px; padding: 16px 24px; }
          .home-coin-row .chg-col { display: block; }
        }
        @media (max-width: 639px) {
          .home-balance-card { flex-direction: column; align-items: stretch; gap: 12px; }
          .home-tabs { width: 100%; }
          .home-tabs button { flex: 1; min-width: 0; padding: 8px 12px; font-size: 13px; }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, overflowX: "hidden", width: "100%" }}>
        {/* Balance card */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, padding: 20, border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="home-balance-card">
            <div>
              <p style={{ fontSize: 13, color: "#d1d5dc", marginBottom: 4 }}>Total Balance</p>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", margin: 0 }}>${balance.toFixed(2)}</h2>
              <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>≈ ${balance.toFixed(2)}</p>
            </div>
            <Link
              href="/dashboard/wallet"
              style={{
                padding: "10px 24px",
                backgroundColor: GOLD,
                color: "#000000",
                fontWeight: 600,
                borderRadius: 8,
                fontSize: 14,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Deposit
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="home-tabs">
          {(["crypto", "forex", "commodities", "stocks"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: tab === t ? GOLD : "#d1d5dc",
                backgroundColor: tab === t ? "rgba(255,222,2,0.15)" : "transparent",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Coin list */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          {/* Header */}
          <div className="home-coin-header">
            <span>Name</span>
            <span style={{ textAlign: "right" }}>Price</span>
            <span className="chg-col" style={{ textAlign: "right" }}>24h</span>
          </div>

          {/* Rows */}
          {coins.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            return (
              <div key={coin.id} className="home-coin-row">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {coin.image ? (
                    <Image src={coin.image} alt={coin.name} width={32} height={32} style={{ borderRadius: "50%" }} />
                  ) : (
                    <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "rgba(255,222,2,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                      {coin.symbol.slice(0, 2)}
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p style={{ color: "#ffffff", fontWeight: 600, fontSize: 14, margin: 0, whiteSpace: "nowrap" }}>
                      {coin.symbol.toUpperCase()} <span style={{ color: "#9ca3af", fontWeight: 400 }}>/USDT</span>
                    </p>
                    <p style={{ color: "#9ca3af", fontSize: 12, margin: 0, whiteSpace: "nowrap" }}>{coin.name}</p>
                  </div>
                </div>

                <span style={{ color: "#ffffff", fontWeight: 500, fontSize: 14, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                  {formatPrice(coin.current_price)}
                </span>

                <div className="chg-col">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "4px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      color: isPositive ? "#34d399" : "#f87171",
                      backgroundColor: isPositive ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
