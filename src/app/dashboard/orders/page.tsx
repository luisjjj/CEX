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
    <div style={{ maxWidth: 1000, margin: "0 auto", overflowX: "hidden", width: "100%" }}>
      <style>{`
        .orders-filters { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
        .orders-filters button { flex-shrink: 0; }
        .orders-table-header { display: none; }
        .orders-table-row { display: none; }
        .orders-card-list { display: flex; flex-direction: column; gap: 8px; }
        .orders-card {
          background-color: #111620;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .orders-card-top { display: flex; align-items: center; justify-content: space-between; }
        .orders-card-pair { display: flex; align-items: center; gap: 10px; }
        .orders-card-details { display: flex; justify-content: space-between; font-size: 13px; }
        @media (min-width: 640px) {
          .orders-card-list { display: none; }
          .orders-table-header {
            display: grid;
            grid-template-columns: auto 1fr auto auto auto auto;
            gap: 16px;
            padding: 12px 24px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            font-size: 12px;
            color: #d1d5dc;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 500;
            align-items: center;
          }
          .orders-table-row {
            display: grid;
            grid-template-columns: auto 1fr auto auto auto auto;
            gap: 16px;
            padding: 16px 24px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            align-items: center;
          }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, overflowX: "hidden", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", margin: 0 }}>Orders</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#d1d5dc" }}>
            <ClipboardText size={14} />
            {MOCK_ORDERS.length} total
          </div>
        </div>

        {/* Filters */}
        <div className="orders-filters">
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

        {/* Orders container */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          {/* Desktop table header */}
          <div className="orders-table-header">
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
            <>
              {/* Mobile cards */}
              <div className="orders-card-list" style={{ padding: 8 }}>
                {filtered.map((order) => (
                  <div key={order.id} className="orders-card">
                    <div className="orders-card-top">
                      <div className="orders-card-pair">
                        {statusIcon(order.status)}
                        <div>
                          <p style={{ color: "#ffffff", fontSize: 14, fontWeight: 500, margin: 0 }}>{order.pair}</p>
                          <p style={{ color: "#9ca3af", fontSize: 12, margin: 0 }}>{order.type} · {order.time}</p>
                        </div>
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
                    </div>
                    <div className="orders-card-details">
                      <span style={{ color: "#9ca3af" }}>Amount</span>
                      <span style={{ color: "#ffffff" }}>${order.amount}</span>
                    </div>
                    <div className="orders-card-details">
                      <span style={{ color: "#9ca3af" }}>Price</span>
                      <span style={{ color: "#ffffff", fontVariantNumeric: "tabular-nums" }}>${order.price.toLocaleString()}</span>
                    </div>
                    <div className="orders-card-details">
                      <span style={{ color: "#9ca3af" }}>Status</span>
                      <span style={{ color: "#d1d5dc", textTransform: "capitalize" }}>{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table rows */}
              {filtered.map((order) => (
                <div key={order.id} className="orders-table-row">
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
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
