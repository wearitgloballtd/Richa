import React from "react";
import PortfolioSliderSection from "../../common/PortfolioSliderSection";
import "./PEBPortfolioSlider.css";

// Using consistent high-quality placeholder images for PEB context
const slides = [
  {
    id: 1,
    tag: "Industrial",
    title: "Industrial Warehouses",
    description:
      "Industrial warehouses, factories, and manufacturing sheds designed for maximum efficiency and durability.",
    image: "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg",
  },
  {
    id: 2,
    tag: "Commercial",
    title: "Commercial Structures",
    description:
      "Commercial structures, including showrooms, malls, and multi-level car parks that combine aesthetics with structural integrity.",
    image:
      "https://images.pexels.com/photos/27398530/pexels-photo-27398530.jpeg",
  },
  {
    id: 3,
    tag: "Infrastructure",
    title: "Infrastructure Projects",
    description:
      "Infrastructure projects such as rail over bridges, metro stations, and hangars built for critical networks.",
    image:
      "https://images.pexels.com/photos/11918704/pexels-photo-11918704.jpeg",
  },
  {
    id: 4,
    tag: "Specialised",
    title: "Specialised Buildings",
    description:
      "Specialised buildings like indoor stadiums, auditoriums, and high-rise steel structures engineered for unique requirements.",
    image: "https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg",
  },
  {
    id: 5,
    tag: "Custom Solutions",
    title: "Custom Designs",
    description:
      "Custom designs with clear spans up to large widths, mezzanines, and crane integrations tailored to your specific needs.",
    image:
      "https://images.pexels.com/photos/15947586/pexels-photo-15947586.jpeg",
  },
];

const PEBPortfolioSlider = () => {
  return (
    <PortfolioSliderSection
      subtitle={
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#BB2929] text-lg tracking-widest font-EireneSansRegular">
            Our PEB Portfolio
          </span>
        </div>
      }
      title="Versatile Solutions"
      description="We offer a versatile range of Pre-Engineered Building solutions customised for various applications. These solutions provide flexibility in size, layout, and functionality."
      slides={slides}
      accentColor="#BB2929"
      imageBorderRadius="rounded-[160px]"
      titleClassName="text-4xl lg:text-5xl"
      tagClassName="!bg-[#BB2929] !text-white !rounded-[2px] !border-none shadow-md"
    />
  );
};

export default PEBPortfolioSlider;
