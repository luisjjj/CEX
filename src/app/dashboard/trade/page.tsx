"use client";

import { useState } from "react";
import {
  ArrowsLeftRight,
  TrendUp,
  TrendDown,
  Warning,
  Info,
} from "@phosphor-icons/react";

const GOLD = "#FFDE02";

const PAIRS = [
  "BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT", "XRP/USDT",
  "DOGE/USDT", "ADA/USDT", "AVAX/USDT", "DOT/USDT", "LINK/USDT",
];

export default function TradePage() {
  const [pair, setPair] = useState("BTC/USDT");
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState("market");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [leverage, setLeverage] = useState("1");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#0f1318",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "#ffffff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <style>{`
        .trade-leverage-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
        @media (max-width: 480px) {
          .trade-leverage-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", margin: 0 }}>Trade</h1>

        {/* Pair selector */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", padding: 20 }}>
          <label style={{ display: "block", fontSize: 14, color: "#d1d5dc", marginBottom: 8, fontWeight: 500 }}>Trading Pair</label>
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            style={{ ...inputStyle, appearance: "auto" as const }}
          >
            {PAIRS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Buy/Sell toggle */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
            <button
              onClick={() => setSide("buy")}
              style={{
                padding: 12,
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                color: "#ffffff",
                backgroundColor: side === "buy" ? "#16a34a" : "rgba(255,255,255,0.05)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <TrendUp style={{ display: "inline", marginRight: 8 }} size={16} />
              Buy / Long
            </button>
            <button
              onClick={() => setSide("sell")}
              style={{
                padding: 12,
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                color: "#ffffff",
                backgroundColor: side === "sell" ? "#dc2626" : "rgba(255,255,255,0.05)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <TrendDown style={{ display: "inline", marginRight: 8 }} size={16} />
              Sell / Short
            </button>
          </div>

          {/* Order type */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {["market", "limit", "stop"].map((t) => (
              <button
                key={t}
                onClick={() => setOrderType(t)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: orderType === t ? GOLD : "#d1d5dc",
                  backgroundColor: orderType === t ? "rgba(255,222,2,0.1)" : "rgba(255,255,255,0.05)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Form fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {orderType !== "market" && (
              <div>
                <label style={{ display: "block", fontSize: 14, color: "#d1d5dc", marginBottom: 6, fontWeight: 500 }}>Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  style={inputStyle}
                />
              </div>
            )}

            <div>
              <label style={{ display: "block", fontSize: 14, color: "#d1d5dc", marginBottom: 6, fontWeight: 500 }}>Amount (USDT)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 14, color: "#d1d5dc", marginBottom: 6, fontWeight: 500 }}>Leverage</label>
              <div className="trade-leverage-grid">
                {["1", "5", "10", "25", "50", "100"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLeverage(l)}
                    style={{
                      padding: "8px 0",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 500,
                      color: leverage === l ? GOLD : "#d1d5dc",
                      backgroundColor: leverage === l ? "rgba(255,222,2,0.1)" : "rgba(255,255,255,0.05)",
                      border: leverage === l ? `1px solid rgba(255,222,2,0.3)` : "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                    }}
                  >
                    {l}x
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div style={{ backgroundColor: "#0f1318", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "#d1d5dc" }}>Margin Required</span>
                <span style={{ color: "#ffffff" }}>
                  {amount ? `$${(parseFloat(amount) / parseInt(leverage)).toFixed(2)}` : "$0.00"}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "#d1d5dc" }}>Fee (0.1%)</span>
                <span style={{ color: "#ffffff" }}>
                  {amount ? `$${(parseFloat(amount) * 0.001).toFixed(2)}` : "$0.00"}
                </span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                color: "#ffffff",
                backgroundColor: side === "buy" ? "#16a34a" : "#dc2626",
                border: "none",
                cursor: "pointer",
              }}
            >
              {side === "buy" ? "Buy / Long" : "Sell / Short"} {pair}
            </button>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#9ca3af" }}>
          <Warning size={14} style={{ marginTop: 2, flexShrink: 0 }} />
          <p style={{ margin: 0 }}>Trading involves significant risk. You could lose your entire investment.</p>
        </div>
      </div>
    </div>
  );
}
