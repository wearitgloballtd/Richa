import React from "react";
import IndustriesSection from "../../common/IndustriesSection";

// Replace these with actual image imports or URLs as needed
const industries = [
  {
    id: 1,
    title: "Apparel & Fashion",
    desc: "T-shirts, polos, innerwear, casual tops, and dresses.",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Activewear & Sportswear",
    desc: "Gym wear, leggings, running gear, and performance athleisure.",
    image:
      "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Workwear & Uniforms",
    desc: "Corporate shirts, industrial uniforms, hospitality attire, and safety wear.",
    image:
      "https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Home Textiles & Technical",
    desc: "Bedding, towels, upholstery, filtration, and industrial applications.",
    image:
      "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const IndustriesWeServe = () => {
  return (
    <IndustriesSection
      title="Our fabrics power success"
      subtitle="Industries We Serve"
      description="Our knitted fabrics deliver consistent quality, comfort, and performance across diverse sectors — helping brands and businesses succeed with reliable materials."
      footerText="We cater to a broad clientele, ensuring our fabrics meet the unique demands of each industry without compromising on quality."
      accentColor="#BB2929"
      items={industries}
      gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    />
  );
};

export default IndustriesWeServe;
