import React from "react";
import IndustriesSection from "../../common/IndustriesSection";
import Commercial from "../../../assets/PEB/commercial.jpeg";

const industries = [
  {
    id: 1,
    title: "Manufacturing & Industrial",
    desc: "Manufacturing and industrial facilities designed for fast operations.",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Warehousing & Logistics",
    desc: "Warehousing and logistics hubs optimized for supply chain efficiency.",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Automotive & Workshops",
    desc: "Automotive and engineering workshops built for precision work.",
    image: "https://images.pexels.com/photos/1087083/pexels-photo-1087083.jpeg",
  },
  {
    id: 4,
    title: "Commercial & Retail",
    desc: "Commercial and retail spaces combining functionality with modern aesthetics.",
    image: Commercial,
  },
  {
    id: 5,
    title: "Infrastructure & Public",
    desc: "Infrastructure and public projects like airports, railways, and defence facilities.",
    image: "https://images.pexels.com/photos/6245523/pexels-photo-6245523.jpeg",
  },
];

const PEBIndustriesServed = () => {
  return (
    <IndustriesSection
      title="Supporting Diverse Sectors"
      subtitle="Industries We Serve"
      description="Our PEB structures support diverse sectors with reliable, scalable solutions."
      footerText="We deliver tailored buildings that meet the specific demands of each industry."
      accentColor="#BB2929"
      items={industries}
      gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
      shape="square"
    />
  );
};

export default PEBIndustriesServed;
