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

  const sidebarNavContent = (onNavClick?: () => void) => (
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
      {/* Sidebar - Desktop only */}
      <aside
        className="dash-sidebar-desktop"
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
          <img src="/images/logo.svg" alt="Logo" style={{ height: 32, width: "auto", flexShrink: 0 }} />
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>cextradevip</span>
        </div>
        {sidebarNavContent()}
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="dash-sidebar-mobile-overlay" style={{ position: "fixed", inset: 0, zIndex: 50 }}>
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
                <img src="/images/logo.svg" alt="Logo" style={{ height: 32, width: "auto" }} />
                <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>cextradevip</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} style={{ color: "#9ca3af", background: "none", border: "none", cursor: "pointer" }}>
                <X size={20} />
              </button>
            </div>
            {sidebarNavContent(() => setSidebarOpen(false))}
          </aside>
        </div>
      )}

      {/* Main content area */}
      <div className="dash-main-content" style={{ flex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
            padding: "0 16px",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => setSidebarOpen(true)}
              className="dash-hamburger"
              style={{ color: "#e5e7eb", background: "none", border: "none", cursor: "pointer", padding: 4 }}
            >
              <List size={20} />
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#e5e7eb" }}>
              <Headphones size={15} />
              <span className="dash-support-text">Support 24/7</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={{ color: "#e5e7eb", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer" }}>
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
        <main style={{ flex: 1, padding: 16 }} className="dash-main-padding">{children}</main>
      </div>

      {/* Bottom Navigation - Mobile only */}
      <nav className="dash-bottom-nav" style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 64,
        backgroundColor: SIDEBAR_BG,
        borderTop: `1px solid ${SIDEBAR_BORDER}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 40,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: "6px 12px",
                borderRadius: 8,
                color: isActive ? GOLD : "#9ca3af",
                textDecoration: "none",
                fontSize: 10,
                fontWeight: isActive ? 600 : 400,
                transition: "color 0.2s",
                minWidth: 56,
              }}
            >
              <Icon size={20} weight={isActive ? "fill" : "regular"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* Desktop: show sidebar, hide bottom nav & hamburger */
        .dash-sidebar-desktop { display: flex; }
        .dash-bottom-nav { display: none !important; }
        .dash-hamburger { display: none !important; }
        .dash-support-text { display: inline; }
        .dash-main-content { margin-left: 220px; }
        .dash-main-padding { padding: 24px; }

        /* Mobile: hide sidebar, show bottom nav & hamburger */
        @media (max-width: 1023px) {
          .dash-sidebar-desktop { display: none !important; }
          .dash-bottom-nav { display: flex !important; }
          .dash-hamburger { display: block !important; }
          .dash-support-text { display: none; }
          .dash-main-content { margin-left: 0 !important; padding-bottom: 72px !important; }
          .dash-main-padding { padding: 16px !important; }
          .dash-sidebar-mobile-overlay { display: block; }
        }
      `}</style>
    </div>
  );
}
