"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  House,
  ChartLineUp,
  ArrowsLeftRight,
  ClipboardText,
  Wallet,
  SignOut,
  Headphones,
  Gear,
  List,
  X,
} from "@phosphor-icons/react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const navItems = [
  { label: "Home", href: "/dashboard", icon: House },
  { label: "Market", href: "/dashboard/market", icon: ChartLineUp },
  { label: "Trade", href: "/dashboard/trade", icon: ArrowsLeftRight },
  { label: "Orders", href: "/dashboard/orders", icon: ClipboardText },
  { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
];

const SIDEBAR_BG = "#111620";
const SIDEBAR_BORDER = "rgba(255,255,255,0.05)";
const NAV_ACTIVE = "rgba(255,222,2,0.15)";
const GOLD = "#FFDE02";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = createClient();
    if (!client) {
      router.push("/login");
      return;
    }

    client.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    });

    const { data: sub } = client.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    const client = createClient();
    if (!client) return;
    await client.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0a0d11", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 32, height: 32, border: `2px solid rgba(255,222,2,0.2)`, borderTopColor: GOLD, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      </div>
    );
  }

  const navContent = (onNavClick?: () => void) => (
    <>
      <nav style={{ flex: 1, padding: "16px 10px" }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                marginBottom: 4,
                color: isActive ? GOLD : "#e5e7eb",
                backgroundColor: isActive ? NAV_ACTIVE : "transparent",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <Icon size={18} weight={isActive ? "fill" : "regular"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div style={{ padding: "10px", borderTop: `1px solid ${SIDEBAR_BORDER}` }}>
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 12px",
            borderRadius: 12,
            color: "#ffffff",
            width: "100%",
            fontSize: 14,
            fontWeight: 500,
            transition: "all 0.2s",
          }}
        >
          <SignOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0d11", display: "flex" }}>
      {/* Sidebar - Desktop */}
      <aside
        className="hidden lg:flex"
        style={{
          flexDirection: "column",
          width: 220,
          backgroundColor: SIDEBAR_BG,
          borderRight: `1px solid ${SIDEBAR_BORDER}`,
          position: "fixed",
          height: "100%",
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 16px",
            height: 56,
            borderBottom: `1px solid ${SIDEBAR_BORDER}`,
          }}
        >
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" style={{ flexShrink: 0 }} />
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>cextradevip</span>
        </div>
        {navContent()}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden" style={{ position: "fixed", inset: 0, zIndex: 50 }}>
          <div
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={() => setSidebarOpen(false)}
          />
          <aside
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 240,
              backgroundColor: SIDEBAR_BG,
              borderRight: `1px solid ${SIDEBAR_BORDER}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                height: 56,
                borderBottom: `1px solid ${SIDEBAR_BORDER}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
                <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>cextradevip</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} style={{ color: "#9ca3af" }}>
                <X size={20} />
              </button>
            </div>
            {navContent(() => setSidebarOpen(false))}
          </aside>
        </div>
      )}

      {/* Main content */}
      <div style={{ flex: 1, marginLeft: 220, minHeight: "100vh", display: "flex", flexDirection: "column" }} className="lg:ml-[220px]">
        {/* Top bar */}
        <header
          style={{
            height: 56,
            backgroundColor: "rgba(17,22,32,0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid ${SIDEBAR_BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
              style={{ color: "#e5e7eb" }}
            >
              <List size={20} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#e5e7eb" }}>
              <Headphones size={15} />
              <span className="hidden sm:inline">Support 24/7</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={{ color: "#e5e7eb", transition: "color 0.2s" }}>
              <Gear size={18} />
            </button>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "rgba(255,222,2,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: GOLD,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {user?.email?.[0]?.toUpperCase() || "U"}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: 20 }} className="lg:p-6">{children}</main>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
