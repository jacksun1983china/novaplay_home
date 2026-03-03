import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import GamesSection from "@/components/GamesSection";
import AboutSection from "@/components/AboutSection";
import PartnershipSection from "@/components/PartnershipSection";
import CustomDevSection from "@/components/CustomDevSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    useEffect(() => {
      document.title = "NovaPlay | Premium Game Lobby Platform Developer";
      let l = document.querySelector('meta[name="keywords"]');
      return (
        l ||
          ((l = document.createElement("meta")),
          l.setAttribute("name", "keywords"),
          document.head.appendChild(l)),
        l.setAttribute(
          "content",
          "game lobby development, gaming platform developer, online casino platform, slot game lobby, fish game platform, NovaPlay, white label gaming, game hall development, Southeast Asia gaming, custom game development"
        ),
        () => {
          document.title = "NovaPlay - Premium Gaming Platform Developer";
        }
      );
    }, []),
    (
      <div className="min-h-screen bg-background text-foreground">
        {<Navbar />}
        {<HeroSection />}
        {<ShowcaseSection />}
        {<GamesSection />}
        {<AboutSection />}
        {<PartnershipSection />}
        {<CustomDevSection />}
        {<ContactSection />}
        {<Footer />}
      </div>
    )
  );
}
