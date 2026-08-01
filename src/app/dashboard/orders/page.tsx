"use client";

import { useState } from "react";
import { ClipboardText, Clock, CheckCircle, XCircle, Funnel } from "@phosphor-icons/react";

const MOCK_ORDERS = [
  { id: "ORD-001", pair: "BTC/USDT", side: "buy", type: "Market", amount: 500, price: 62706, status: "filled", time: "2 min ago" },
  { id: "ORD-002", pair: "ETH/USDT", side: "sell", type: "Limit", amount: 200, price: 1900, status: "open", time: "15 min ago" },
  { id: "ORD-003", pair: "SOL/USDT", side: "buy", type: "Market", amount: 100, price: 71.67, status: "cancelled", time: "1 hr ago" },
  { id: "ORD-004", pair: "BNB/USDT", side: "buy", type: "Stop", amount: 300, price: 570, status: "open", time: "3 hr ago" },
];

const GOLD = "#FFDE02";

export default function OrdersPage() {
  const [filter, setFilter] = useState<"all" | "open" | "filled" | "cancelled">("all");

  const filtered = filter === "all" ? MOCK_ORDERS : MOCK_ORDERS.filter((o) => o.status === filter);

  const statusIcon = (s: string) => {
    if (s === "filled") return <CheckCircle size={14} style={{ color: "#34d399" }} />;
    if (s === "open") return <Clock size={14} style={{ color: "#facc15" }} />;
    return <XCircle size={14} style={{ color: "#9ca3af" }} />;
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", margin: 0 }}>Orders</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#d1d5dc" }}>
            <ClipboardText size={14} />
            {MOCK_ORDERS.length} total
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8 }}>
          {(["all", "open", "filled", "cancelled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: filter === f ? GOLD : "#d1d5dc",
                backgroundColor: filter === f ? "rgba(255,222,2,0.1)" : "rgba(255,255,255,0.05)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Orders table */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto auto auto", gap: 16, padding: "12px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 12, color: "#d1d5dc", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 500, alignItems: "center" }}>
            <span></span>
            <span>Pair</span>
            <span>Side</span>
            <span>Amount</span>
            <span>Price</span>
            <span>Status</span>
          </div>
          {filtered.length === 0 ? (
            <div style={{ padding: "48px 24px", textAlign: "center", color: "#9ca3af" }}>
              <ClipboardText size={32} style={{ margin: "0 auto 12px", opacity: 0.5, display: "block" }} />
              <p>No orders found</p>
            </div>
          ) : (
            filtered.map((order) => (
              <div
                key={order.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto auto auto",
                  gap: 16,
                  padding: "16px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  alignItems: "center",
                }}
              >
                {statusIcon(order.status)}
                <div>
                  <p style={{ color: "#ffffff", fontSize: 14, fontWeight: 500, margin: 0 }}>{order.pair}</p>
                  <p style={{ color: "#9ca3af", fontSize: 12, margin: 0 }}>{order.type} · {order.time}</p>
                </div>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 500,
                    color: order.side === "buy" ? "#34d399" : "#f87171",
                    backgroundColor: order.side === "buy" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                  }}
                >
                  {order.side.toUpperCase()}
                </span>
                <span style={{ color: "#ffffff", fontSize: 14 }}>${order.amount}</span>
                <span style={{ color: "#ffffff", fontSize: 14, fontVariantNumeric: "tabular-nums" }}>${order.price.toLocaleString()}</span>
                <span style={{ fontSize: 14, color: "#d1d5dc", textTransform: "capitalize" }}>{order.status}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
