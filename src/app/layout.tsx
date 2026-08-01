import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trade Online with a Leading Trading Broker | cextradevip",
  description:
    "Trade on cextradevip: the leading online trading platform with the best spreads on gold and oil. Online trading is risky. T&Cs apply.",
  openGraph: {
    title: "Trade Online with a Leading Trading Broker | cextradevip",
    description:
      "Trade on cextradevip: the leading online trading platform with the best spreads on gold and oil. Online trading is risky. T&Cs apply.",
    url: "https://cextradx.com",
    siteName: "cextradevip",
    images: [
      {
        url: "https://d33vw3iu5hs0zi.cloudfront.net/media/cextradevip_epw_og_image_e19c404be1.png",
        width: 1200,
        height: 630,
        alt: "cextradevip",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Online with a Leading Trading Broker | cextradevip",
    description:
      "Trade on cextradevip: the leading online trading platform with the best spreads on gold and oil. Online trading is risky. T&Cs apply.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
