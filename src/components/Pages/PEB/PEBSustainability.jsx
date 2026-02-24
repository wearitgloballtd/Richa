import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaIndustry, FaRecycle, FaShieldAlt } from "react-icons/fa";
import CenterImage from "../../../assets/images/Peb-Building.png";

const features = [
  {
    id: 1,
    title: "Optimised Material Usage",
    desc: "Optimised material usage to reduce steel consumption.",
    icon: <FaRecycle />,
    align: "right",
  },
  {
    id: 2,
    title: "Factory-Controlled Processes",
    desc: "Factory-controlled processes minimise on-site waste.",
    icon: <FaIndustry />,
    align: "right",
  },
  {
    id: 3,
    title: "Energy-Efficient Designs",
    desc: "Energy-efficient designs and recyclable steel components.",
    icon: <FaLeaf />,
    align: "left",
  },
  {
    id: 4,
    title: "Low-Maintenance",
    desc: "Low-maintenance structures with long service life.",
    icon: <FaShieldAlt />,
    align: "left",
  },
];

const PEBSustainability = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6 sm:px-8 lg:px-20 font-['NeueMontreal'] relative overflow-hidden">
      {/* Background Text "Sustainability" */}
      <div className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 select-none z-0 w-full text-center overflow-hidden pointer-events-none">
        <h1 className="text-[15vw] md:text-[12vw] lg:text-[10rem] font-bold text-black uppercase tracking-wider opacity-5 whitespace-nowrap">
          Sustainability
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#BB2929] text-sm md:text-base tracking-widest mb-3 font-EireneSansRegular">
            <span>We focus on eco responsible construction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black !font-KuraleRegular leading-tight">
            Our Commitment to <br className="hidden sm:block" /> Sustainable
            Practices
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 xl:gap-0">
          {/* Left Column (Items 1 & 2) */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 lg:flex lg:flex-col gap-4 sm:gap-6 lg:gap-14 lg:pr-6 xl:pr-10 order-2 lg:order-1">
            {features.slice(0, 2).map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.id * 0.2, duration: 0.5 }}
                className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-end text-center lg:text-right gap-3 lg:gap-6 group"
              >
                <div className="flex-1 flex flex-col items-center lg:items-end w-full">
                  <h3 className="text-[16px] sm:text-[18px] md:text-xl xl:text-2xl font-bold text-black font-FoundersGroteskCondensed uppercase mb-1 sm:mb-2 group-hover:text-[#BB2929] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] sm:text-sm md:text-base leading-relaxed w-full">
                    {feature.desc}
                  </p>
                </div>
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#BB2929] flex items-center justify-center text-[#BB2929] text-xl md:text-3xl bg-white shadow-lg shrink-0 group-hover:bg-[#BB2929] group-hover:text-white transition-all duration-300 mx-auto lg:mx-0">
                  {feature.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center relative order-1 lg:order-2 mb-4 lg:mb-0">
            {/* Display PNG image directly without background/border */}
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none lg:w-[450px] xl:w-[500px] aspect-[4/5] lg:aspect-auto lg:h-[550px] flex items-center justify-center mx-auto">
              <img
                src={CenterImage}
                alt="Sustainable Construction"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column (Items 3 & 4) */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 lg:flex lg:flex-col gap-4 sm:gap-6 lg:gap-14 lg:pl-6 xl:pl-10 order-3 lg:order-3">
            {features.slice(2, 4).map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.id * 0.2, duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-center lg:text-left gap-3 lg:gap-6 group"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#BB2929] flex items-center justify-center text-[#BB2929] text-xl md:text-3xl bg-white shadow-lg shrink-0 group-hover:bg-[#BB2929] group-hover:text-white transition-all duration-300 mx-auto lg:mx-0">
                  {feature.icon}
                </div>
                <div className="flex-1 flex flex-col items-center lg:items-start w-full">
                  <h3 className="text-[16px] sm:text-[18px] md:text-xl xl:text-2xl font-bold text-black font-FoundersGroteskCondensed uppercase mb-1 sm:mb-2 group-hover:text-[#BB2929] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] sm:text-sm md:text-base leading-relaxed w-full">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16 md:mt-20 px-4">
          <p className="text-base md:text-lg text-gray-500 font-medium italic max-w-3xl mx-auto border-t border-gray-200 pt-8">
            "These practices lower environmental impact while providing durable,
            cost-effective buildings."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PEBSustainability;
