import React from 'react';
import PortfolioSliderSection from '../../common/PortfolioSliderSection';
import './PortfolioSlider.css'; // Keeping CSS for any specific overrides if needed, though we moved most to props

const PortfolioSlider = () => {
    const slides = [
        {
            id: 1,
            tag: "Structures",
            title: "Premium Knit Structures",
            description: "Single jersey, interlock, and rib structures designed for versatility and durability.",
            image: "https://images.pexels.com/photos/4614243/pexels-photo-4614243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            tag: "Performance",
            title: "Advanced Performance Blends",
            description: "Performance blends (cotton-polyester, cotton-spandex) perfect for activewear and corporate uniforms.",
            image: "https://images.pexels.com/photos/3755700/pexels-photo-3755700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            tag: "Technical",
            title: "Enhanced Functional Fabrics",
            description: "Technical fabrics engineered with enhanced properties like moisture-wicking, antimicrobial, and flame-retardant finishes.",
            image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            tag: "Sustainability",
            title: "Eco-Friendly Solutions",
            description: "Sustainable options utilizing recycled yarns and low-impact dyes for a greener future.",
            image: "https://images.pexels.com/photos/5202958/pexels-photo-5202958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            tag: "Customization",
            title: "Tailored Specifications",
            description: "Custom weights, widths, and constructions (GSM 120–300+) availability to meet specific requirements.",
            image: "https://images.pexels.com/photos/4614216/pexels-photo-4614216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <PortfolioSliderSection
            subtitle={
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#BB2929] text-lg tracking-widest font-['EireneSansRegular']">Versatile Range</span>
                </div>
            }
            title="Our Fabric Portfolio"
            description="We produce a diverse range of knitted fabrics tailored for industrial, commercial, and apparel needs, ensuring versatility and high performance."
            slides={slides}
            accentColor="#BB2929"
            imageBorderRadius="rounded-[160px]"
            titleClassName="text-4xl lg:text-5xl"
            tagClassName="!bg-[#BB2929] !text-white !rounded-[2px] !border-none shadow-md"
        />
    );
};

export default PortfolioSlider;
