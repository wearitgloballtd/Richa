import React, { useEffect } from "react";
import SEO from "./SEO";
import HeroSection from "./HeroSection";
import WelspunWorld from "./WelspunWorld";
import Featured from "./Featured";
import About from "./About";
import CompanyAbout from "./CompanyAbout/CompanyAbout";
import LegacyLeadership from "./LegacyLeadership";
import RevealImg from "./RevealImg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-white">
      <SEO
        title="Richa Industries Limited"
        description="Richa Industries Limited is a leading PEB and knit fabric manufacturing company. With 30+ years of experience delivering high-quality projects."
        keywords="Manufacturing company, PEB and textile manufacturer, knitted fabric manufacturer, PEB manufacturer."
        href="https://richa.in/"
        alternateHref="https://richa.in/"
        hreflang="en-IN"
        image="https://richa-eight.vercel.app/assets/richa%20logo-DhkSn1gJ.png"
        facebookUrl="https://www.facebook.com/richaindustriesltd/"
      />
      <HeroSection />
      <WelspunWorld />
      <Featured />
      <About />
      <CompanyAbout />
      <LegacyLeadership />
      <RevealImg />
    </div>
  );
}

export default Home;
