"use client";

import { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Copy,
  Eye,
  EyeSlash,
  X,
  CheckCircle,
  Clock,
  CurrencyBtc,
  CurrencyDollar,
  Key,
  Warning,
} from "@phosphor-icons/react";

const GOLD = "#FFDE02";

const ASSETS = [
  { symbol: "USDT", name: "Tether", balance: 0, usdValue: 0, color: "#26A17B" },
  { symbol: "BTC", name: "Bitcoin", balance: 0, usdValue: 0, color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", balance: 0, usdValue: 0, color: "#627EEA" },
  { symbol: "BNB", name: "BNB", balance: 0, usdValue: 0, color: "#F3BA2F" },
  { symbol: "SOL", name: "Solana", balance: 0, usdValue: 0, color: "#9945FF" },
];

const DEPOSIT_METHODS = [
  { id: "usdt-trc20", label: "USDT (TRC20)", icon: CurrencyDollar, min: 1 },
  { id: "usdt-erc20", label: "USDT (ERC20)", icon: CurrencyDollar, min: 10 },
  { id: "btc", label: "Bitcoin", icon: CurrencyBtc, min: 0.0001 },
  { id: "eth", label: "Ethereum", icon: CurrencyBtc, min: 0.001 },
];

const MOCK_ADDRESS = "TXyz1234567890abcdefXXXXXXXXXXXXX";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0f1318",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "12px 16px",
  color: "#ffffff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  color: "#e5e7eb",
  marginBottom: 8,
  fontWeight: 500,
};

export default function WalletPage() {
  const [showBalances, setShowBalances] = useState(true);
  const [depositOpen, setDepositOpen] = useState(false);
  const [depositMethod, setDepositMethod] = useState(DEPOSIT_METHODS[0]);
  const [depositAmount, setDepositAmount] = useState("");
  const [depositStep, setDepositStep] = useState<"form" | "confirm" | "success">("form");
  const [copied, setCopied] = useState(false);

  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawAsset, setWithdrawAsset] = useState(ASSETS[0]);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [withdrawPin, setWithdrawPin] = useState("");
  const [withdrawStep, setWithdrawStep] = useState<"form" | "confirm" | "success">("form");

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeposit = () => {
    if (depositStep === "form") setDepositStep("confirm");
    else if (depositStep === "confirm") setDepositStep("success");
  };

  const closeDeposit = () => {
    setDepositOpen(false);
    setDepositStep("form");
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (withdrawStep === "form") setWithdrawStep("confirm");
    else if (withdrawStep === "confirm") setWithdrawStep("success");
  };

  const closeWithdraw = () => {
    setWithdrawOpen(false);
    setWithdrawStep("form");
    setWithdrawAmount("");
    setWithdrawAddress("");
    setWithdrawPin("");
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", overflowX: "hidden", width: "100%" }}>
      <style>{`
        .wallet-balance-card { display: flex; align-items: center; justify-content: space-between; }
        .wallet-balance-buttons { display: flex; gap: 12px; margin-top: 16px; }
        .wallet-asset-header { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; color: #d1d5dc; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
        .wallet-asset-header .val-col { display: none; }
        .wallet-asset-row { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); align-items: center; }
        .wallet-asset-row .val-col { display: none; }
        .wallet-withdraw-assets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; }
        @media (min-width: 640px) {
          .wallet-asset-header { grid-template-columns: 1fr auto auto; gap: 16px; padding: 12px 24px; }
          .wallet-asset-header .val-col { display: block; }
          .wallet-asset-row { grid-template-columns: 1fr auto auto; gap: 16px; padding: 16px 24px; }
          .wallet-asset-row .val-col { display: block; }
        }
        @media (max-width: 639px) {
          .wallet-balance-card { flex-direction: column; align-items: stretch; gap: 12px; }
          .wallet-balance-buttons { flex-direction: column; }
          .wallet-balance-buttons button { width: 100%; justify-content: center; }
        }
        @media (min-width: 480px) {
          .wallet-withdraw-assets { grid-template-columns: repeat(5, 1fr); }
        }
        @media (max-width: 420px) {
          .wallet-deposit-methods { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", margin: 0 }}>Wallet</h1>
          <button onClick={() => setShowBalances(!showBalances)} style={{ color: "#d1d5dc", background: "none", border: "none", cursor: "pointer" }}>
            {showBalances ? <Eye size={18} /> : <EyeSlash size={18} />}
          </button>
        </div>

        {/* Total balance */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, padding: 20, border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="wallet-balance-card">
            <div>
              <p style={{ fontSize: 13, color: "#d1d5dc", margin: "0 0 4px 0" }}>Total Balance</p>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {showBalances ? "$0.00" : "****"}
              </h2>
            </div>
            <div className="wallet-balance-buttons">
              <button onClick={() => setDepositOpen(true)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 20px", backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer" }}>
                <ArrowDownLeft size={16} /> Deposit
              </button>
              <button onClick={() => setWithdrawOpen(true)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 20px", backgroundColor: "rgba(255,255,255,0.05)", color: "#ffffff", fontWeight: 500, borderRadius: 8, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                <ArrowUpRight size={16} /> Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Assets list */}
        <div style={{ backgroundColor: "#111620", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <div className="wallet-asset-header">
            <span>Asset</span>
            <span style={{ textAlign: "right" }}>Balance</span>
            <span className="val-col" style={{ textAlign: "right" }}>Value</span>
          </div>
          {ASSETS.map((asset) => (
            <div key={asset.symbol} className="wallet-asset-row">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: asset.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#ffffff", flexShrink: 0 }}>
                  {asset.symbol.slice(0, 2)}
                </div>
                <div>
                  <p style={{ color: "#ffffff", fontSize: 14, fontWeight: 500, margin: 0 }}>{asset.symbol}</p>
                  <p style={{ color: "#9ca3af", fontSize: 12, margin: 0 }}>{asset.name}</p>
                </div>
              </div>
              <span style={{ color: "#ffffff", fontSize: 14, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                {showBalances ? asset.balance.toFixed(4) : "****"}
              </span>
              <span className="val-col" style={{ color: "#ffffff", fontSize: 14, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                {showBalances ? `$${asset.usdValue.toFixed(2)}` : "****"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Modal */}
      {depositOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} onClick={closeDeposit} />
          <div style={{ position: "relative", backgroundColor: "#1a1f2e", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", width: "100%", maxWidth: 420, padding: 20, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {depositStep === "success" ? "Deposit Submitted" : "Deposit"}
              </h2>
              <button onClick={closeDeposit} style={{ color: "#9ca3af", background: "none", border: "none", cursor: "pointer" }}><X size={20} /></button>
            </div>

            {depositStep === "form" && (
              <>
                <label style={labelStyle}>Payment Method</label>
                <div className="wallet-deposit-methods" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {DEPOSIT_METHODS.map((m) => {
                    const Icon = m.icon;
                    return (
                      <button key={m.id} onClick={() => setDepositMethod(m)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, fontSize: 14, fontWeight: 500, color: depositMethod.id === m.id ? GOLD : "#d1d5dc", backgroundColor: depositMethod.id === m.id ? "rgba(255,222,2,0.1)" : "rgba(255,255,255,0.05)", border: depositMethod.id === m.id ? "1px solid rgba(255,222,2,0.3)" : "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                        <Icon size={16} /> {m.label}
                      </button>
                    );
                  })}
                </div>
                <label style={labelStyle}>Amount</label>
                <div style={{ position: "relative", marginBottom: 8 }}>
                  <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} placeholder={`Min. ${depositMethod.min}`} style={{ ...inputStyle, paddingRight: 60, fontSize: 18 }} />
                  <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 14 }}>USD</span>
                </div>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 16px 0" }}>Minimum deposit: ${depositMethod.min}</p>
                <label style={labelStyle}>Deposit Address</label>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <div style={{ flex: 1, backgroundColor: "#0f1318", borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#d1d5dc", fontFamily: "monospace", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{MOCK_ADDRESS}</div>
                  <button onClick={handleCopy} style={{ padding: 12, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, color: "#d1d5dc", border: "none", cursor: "pointer", flexShrink: 0 }}>
                    {copied ? <CheckCircle size={16} style={{ color: "#34d399" }} /> : <Copy size={16} />}
                  </button>
                </div>
                <button onClick={handleDeposit} disabled={!depositAmount || parseFloat(depositAmount) < depositMethod.min} style={{ width: "100%", padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer", opacity: !depositAmount || parseFloat(depositAmount) < depositMethod.min ? 0.4 : 1 }}>Continue</button>
              </>
            )}

            {depositStep === "confirm" && (
              <>
                <div style={{ backgroundColor: "#0f1318", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                  {([["Method", depositMethod.label], ["Amount", `$${depositAmount}`], ["Address", MOCK_ADDRESS.slice(0, 12) + "..."], ["Network", depositMethod.label]] as [string, string][]).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ color: "#d1d5dc" }}>{k}</span>
                      <span style={{ color: "#ffffff" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>
                  <Clock size={14} style={{ marginTop: 2, flexShrink: 0 }} />
                  <p style={{ margin: 0 }}>Deposits typically confirm within 1-3 network confirmations. Processing may take 5-30 minutes.</p>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => setDepositStep("form")} style={{ flex: 1, padding: 12, backgroundColor: "rgba(255,255,255,0.05)", color: "#ffffff", fontWeight: 500, borderRadius: 8, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>Back</button>
                  <button onClick={handleDeposit} style={{ flex: 1, padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer" }}>Confirm Deposit</button>
                </div>
              </>
            )}

            {depositStep === "success" && (
              <>
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <div style={{ width: 64, height: 64, margin: "0 auto 16px", borderRadius: "50%", backgroundColor: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={32} style={{ color: "#34d399" }} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>Deposit Request Received</h3>
                  <p style={{ fontSize: 14, color: "#d1d5dc", margin: "0 0 4px 0" }}>
                    Send <span style={{ color: "#ffffff", fontWeight: 600 }}>${depositAmount}</span> in {depositMethod.label} to:
                  </p>
                  <p style={{ fontSize: 12, color: "#e5e7eb", fontFamily: "monospace", backgroundColor: "#0f1318", borderRadius: 8, padding: "8px 12px", margin: "8px 0 16px", wordBreak: "break-all" }}>{MOCK_ADDRESS}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af" }}>Your balance will update once the transaction is confirmed on the network.</p>
                </div>
                <button onClick={closeDeposit} style={{ width: "100%", padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer" }}>Done</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {withdrawOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} onClick={closeWithdraw} />
          <div style={{ position: "relative", backgroundColor: "#1a1f2e", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", width: "100%", maxWidth: 420, padding: 20, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: 0 }}>
                {withdrawStep === "success" ? "Withdrawal Submitted" : "Withdraw"}
              </h2>
              <button onClick={closeWithdraw} style={{ color: "#9ca3af", background: "none", border: "none", cursor: "pointer" }}><X size={20} /></button>
            </div>

            {withdrawStep === "form" && (
              <>
                <label style={labelStyle}>Select Asset</label>
                <div className="wallet-withdraw-assets">
                  {ASSETS.map((a) => (
                    <button key={a.symbol} onClick={() => setWithdrawAsset(a)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 8px", borderRadius: 12, fontSize: 12, fontWeight: 500, color: withdrawAsset.symbol === a.symbol ? GOLD : "#d1d5dc", backgroundColor: withdrawAsset.symbol === a.symbol ? "rgba(255,222,2,0.1)" : "rgba(255,255,255,0.05)", border: withdrawAsset.symbol === a.symbol ? "1px solid rgba(255,222,2,0.3)" : "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: a.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#ffffff" }}>{a.symbol.slice(0, 2)}</div>
                      {a.symbol}
                    </button>
                  ))}
                </div>
                <label style={labelStyle}>Amount</label>
                <div style={{ position: "relative", marginBottom: 8 }}>
                  <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} placeholder="0.00" style={{ ...inputStyle, paddingRight: 80, fontSize: 18 }} />
                  <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 14 }}>{withdrawAsset.symbol}</span>
                </div>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 16px 0" }}>Available: {withdrawAsset.balance.toFixed(4)} {withdrawAsset.symbol}</p>
                <label style={labelStyle}>Withdrawal Address</label>
                <input type="text" value={withdrawAddress} onChange={(e) => setWithdrawAddress(e.target.value)} placeholder="Enter wallet address" style={{ ...inputStyle, fontFamily: "monospace", marginBottom: 16 }} />
                <label style={labelStyle}>Withdraw PIN</label>
                <div style={{ position: "relative", marginBottom: 20 }}>
                  <Key size={16} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                  <input type="password" value={withdrawPin} onChange={(e) => setWithdrawPin(e.target.value)} placeholder="Enter your 4-digit PIN" maxLength={6} style={{ ...inputStyle, paddingLeft: 40, letterSpacing: "0.15em" }} />
                </div>
                <button onClick={handleWithdraw} disabled={!withdrawAmount || !withdrawAddress || !withdrawPin || withdrawPin.length < 4} style={{ width: "100%", padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer", opacity: !withdrawAmount || !withdrawAddress || !withdrawPin || withdrawPin.length < 4 ? 0.4 : 1 }}>Continue</button>
              </>
            )}

            {withdrawStep === "confirm" && (
              <>
                <div style={{ backgroundColor: "#0f1318", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                  {([["Asset", withdrawAsset.symbol], ["Amount", `${withdrawAmount} ${withdrawAsset.symbol}`], ["To Address", withdrawAddress], ["Network Fee", "~$1.00"]] as [string, string][]).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ color: "#d1d5dc" }}>{k}</span>
                      <span style={{ color: "#ffffff", fontFamily: k === "To Address" ? "monospace" : "inherit", fontSize: k === "To Address" ? 12 : 14, maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 12, display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "#d1d5dc" }}>You Receive</span>
                    <span style={{ color: "#ffffff", fontWeight: 600 }}>~{(parseFloat(withdrawAmount) - 1).toFixed(2)} USD</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>
                  <Warning size={14} style={{ marginTop: 2, flexShrink: 0, color: "#eab308" }} />
                  <p style={{ margin: 0 }}>Double-check the withdrawal address. Transactions cannot be reversed once confirmed on the blockchain.</p>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => setWithdrawStep("form")} style={{ flex: 1, padding: 12, backgroundColor: "rgba(255,255,255,0.05)", color: "#ffffff", fontWeight: 500, borderRadius: 8, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>Back</button>
                  <button onClick={handleWithdraw} style={{ flex: 1, padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer" }}>Confirm Withdrawal</button>
                </div>
              </>
            )}

            {withdrawStep === "success" && (
              <>
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <div style={{ width: 64, height: 64, margin: "0 auto 16px", borderRadius: "50%", backgroundColor: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={32} style={{ color: "#34d399" }} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", margin: "0 0 8px 0" }}>Withdrawal Submitted</h3>
                  <p style={{ fontSize: 14, color: "#d1d5dc", margin: "0 0 16px 0" }}>
                    Your withdrawal of <span style={{ color: "#ffffff", fontWeight: 600 }}>{withdrawAmount} {withdrawAsset.symbol}</span> is being processed.
                  </p>
                  <div style={{ backgroundColor: "#0f1318", borderRadius: 12, padding: 16, textAlign: "left", display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ color: "#d1d5dc" }}>Status</span>
                      <span style={{ color: "#facc15", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> Processing</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ color: "#d1d5dc" }}>To</span>
                      <span style={{ color: "#ffffff", fontFamily: "monospace", fontSize: 12, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{withdrawAddress}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ color: "#d1d5dc" }}>Est. Time</span>
                      <span style={{ color: "#ffffff" }}>5-30 minutes</span>
                    </div>
                  </div>
                </div>
                <button onClick={closeWithdraw} style={{ width: "100%", padding: 12, backgroundColor: GOLD, color: "#000000", fontWeight: 600, borderRadius: 8, fontSize: 14, border: "none", cursor: "pointer", marginTop: 16 }}>Done</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
