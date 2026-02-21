import React from "react";
import PortfolioSliderSection from "../../common/PortfolioSliderSection";
import "./PortfolioSlider.css";
import FunctionalFabrics from "../../../assets/images/Textile/knit-fabric-structure.jpeg";
import EcoFriendly from "../../../assets/images/Textile/knitted-fabric.png";

const PortfolioSlider = () => {
  const slides = [
    {
      id: 1,
      tag: "Structures",
      title: "Premium Knit Structures",
      description:
        "Classic single jersey, interlock, and rib structures — soft, breathable, and durable. The perfect base for everyday tees, polos, innerwear, and casual layers. Key Specs: GSM 120–220 | Excellent shape retention | Ready for printing/dyeing.",
      image:
        "https://images.pexels.com/photos/6276068/pexels-photo-6276068.jpeg",
    },
    {
      id: 2,
      tag: "Performance",
      title: "Advanced Performance Blends",
      description:
        "Cotton-polyester and cotton-spandex blends engineered for movement and comfort. Superior stretch recovery, moisture-wicking, and quick-dry properties make them ideal for sportswear, gym wear, and corporate uniforms. Key Specs: GSM 140–260 | Colour fastness 4–5 | Pilling resistance",
      image:
        "https://images.pexels.com/photos/7717488/pexels-photo-7717488.jpeg",
    },
    {
      id: 3,
      tag: "Technical",
      title: "Enhanced Functional Fabrics",
      description:
        "Piqué, honeycomb, waffle, and pointelle structures for premium texture and visual appeal. Raised surfaces add grip, style, and durability — perfect for polo shirts, outerwear, and fashion casuals. Key Specs: GSM 160–280 | Good stitch definition | Stable after washing",
      image: FunctionalFabrics,
    },
    {
      id: 4,
      tag: "Sustainability",
      title: "Eco Friendly Solutions",
      description:
        "Recycled polyester, organic cotton, and bamboo blends using low-impact dyes. Soft, breathable, and strong — sustainable fabrics that meet eco standards without sacrificing performance or comfort. Key Specs: GSM 130–250 | Low-impact dyes | Water-efficient processing.",
      image: EcoFriendly,
    },
    {
      id: 5,
      tag: "Customization",
      title: "Tailored Specifications",
      description:
        "Custom GSM (120–300+), widths, constructions, and finishes (anti-microbial, moisture-wicking, anti-pilling) to match your exact brand needs. Quick sampling and scalable production for private labels. Key Specs: Flexible GSM & width | Custom treatments | Reliable lead times.",
      image: Specifications,
    },
  ];

  return (
    <PortfolioSliderSection
      subtitle={
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#BB2929] text-lg tracking-widest font-['EireneSansRegular']">
            Versatile Range
          </span>
        </div>
      }
      title="Our Fabric Portfolio"
      description="We produce a diverse range of knitted fabrics tailored for apparel, activewear, casual wear, and performance needs all with consistent quality and reliability."
      slides={slides}
      accentColor="#BB2929"
      imageBorderRadius="rounded-[160px]"
      titleClassName="text-4xl lg:text-5xl"
      tagClassName="!bg-[#BB2929] !text-white !rounded-[2px] !border-none shadow-md"
    />
  );
};

export default PortfolioSlider;
