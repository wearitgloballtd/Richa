import React, { useEffect } from "react";
import SEO from "../../SEO";
import ConstructionHero from "./ConstructionHero";
import { motion } from "framer-motion";

import ConstructionAbout from "./ConstructionAbout";
import ConstructionServices from "./ConstructionServices";
import ConstructionBenefits from "./ConstructionBenefits";
import PEBPortfolioSlider from "./PEBPortfolioSlider";
import PEBIndustriesServed from "./PEBIndustriesServed";
import PEBProcessTimeline from "./PEBProcessTimeline";
import PEBCertifications from "./PEBCertifications";
import PEBSustainability from "./PEBSustainability";

const PEB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      <SEO
        title="ISO Certified PEB Manufacturer in Faridabad (India)"
        description="Richa Industries is the leading PEB manufacturer delivering steel structure for warehouses, industrial sheds & factory buildings. Call 9711269111"
        keywords="peb manufacturers, peb structure manufacturer, peb manufacturers in delhi ncr, peb building manufacturer, peb manufacturers in faridabad, peb manufacturers in india"
        href="https://richa.in/peb-manufacturers"
        alternateHref="https://richa.in/peb-manufacturers"
        hreflang="en-IN"
        image="https://richa-eight.vercel.app/assets/richa%20logo-DhkSn1gJ.png"
        facebookUrl="https://www.facebook.com/richaindustriesltd/"
      />
      <ConstructionHero />
      <ConstructionAbout />
      <ConstructionServices />
      <ConstructionBenefits />
      <PEBPortfolioSlider />
      <PEBIndustriesServed />
      <PEBProcessTimeline />
      <PEBCertifications />
      <PEBSustainability />
    </div>
  );
};

export default PEB;
