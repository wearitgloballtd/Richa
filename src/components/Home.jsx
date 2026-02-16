import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import WelspunWorld from "./WelspunWorld";
import Featured from "./Featured";
import About from "./About";
import CompanyAbout from "./CompanyAbout/CompanyAbout";
import LegacyLeadership from "./LegacyLeadership";
import RevealImg from "./RevealImg";

function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-white text-white">
      <HeroSection />
      {/* <Marquee /> */}
      <WelspunWorld />
      <Featured />
      <About />
      {/* <Eyes /> */}
      <CompanyAbout />
      <LegacyLeadership />
      <RevealImg />
      {/* <SupportSection /> */}
      {/* <Cards /> */}
    </div>
  );
}

export default Home;

