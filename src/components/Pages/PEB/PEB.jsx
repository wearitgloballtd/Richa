import React, { useEffect } from 'react';
import ConstructionHero from './ConstructionHero';
import { motion } from 'framer-motion';

import ConstructionAbout from './ConstructionAbout';
import ConstructionServices from './ConstructionServices';
import ConstructionBenefits from './ConstructionBenefits';
import PEBPortfolioSlider from './PEBPortfolioSlider';
import PEBIndustriesServed from './PEBIndustriesServed';
import PEBProcessTimeline from './PEBProcessTimeline';
import PEBCertifications from './PEBCertifications';
import PEBSustainability from './PEBSustainability';

const PEB = () => {
    useEffect(() => {
        document.title = "PEB | Richa Industries";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white min-h-screen">
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
