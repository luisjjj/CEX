"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesBanner from "@/components/FeaturesBanner";
import InstrumentsSection from "@/components/InstrumentsSection";
import FeatureSection from "@/components/FeatureSection";
import PodcastCTA from "@/components/PodcastCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesBanner />
        <InstrumentsSection />
        <FeatureSection
          title="Seize every opportunity"
          description="Trade online anytime, anywhere. On web, mobile and desktop."
          links={[
            { label: "MetaTrader 5", href: "/metatrader-5" },
            { label: "cextradevip Terminal", href: "/cextradevip-terminal" },
            { label: "cextradevip Trade App", href: "/cextradevip-trade-app" },
          ]}
          imagePosition="right"
          imageUrl="/images/trading-chart.svg"
          imageAlt="Trade on any device"
        />
        <FeatureSection
          title="Your security is our priority"
          description="From secure payments to negative balance protection, you are covered from every angle."
          links={[
            { label: "Client Protection", href: "/client-protection" },
            { label: "Why cextradevip", href: "/why-cextradevip" },
          ]}
          imagePosition="left"
          imageUrl="/images/security.jpg"
          imageAlt="Your funds are protected"
        />
        <PodcastCTA />
      </main>
      <Footer />
    </>
  );
}
