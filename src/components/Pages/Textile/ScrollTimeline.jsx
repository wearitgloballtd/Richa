import React from "react";
import { motion } from "framer-motion";
import ProcessTimelineSection from "../../common/ProcessTimelineSection";

const timelineData = [
  {
    subtitle: "WATER CONSERVATION",
    title: "Low liquor-ratio dyeing",
    desc: "Implementing advanced dyeing techniques to cut water usage by up to 50%, significantly reducing our freshwater footprint.",
    align: "left",
  },
  {
    subtitle: "ECO-FRIENDLY TREATMENTS",
    title: "Enzyme-based pre-treatments",
    desc: "Utilizing enzyme-based pre-treatments and biodegradable auxiliaries to minimize chemical impact and ensure safety.",
    align: "right",
  },
  {
    subtitle: "WASTE MANAGEMENT",
    title: "Wastewater treatment & recycling",
    desc: "Comprehensive wastewater treatment and recycling systems to ensure zero discharge of harmful effluents.",
    align: "left",
  },
  {
    subtitle: "CERTIFIED COMPLIANCE",
    title: "GOTS & bluesign® approved",
    desc: "Strict use of GOTS-approved or bluesign®-certified chemicals where applicable, ensuring global safety standards.",
    align: "right",
  },
  {
    subtitle: "ENERGY EFFICIENCY",
    title: "Machinery with heat recovery",
    desc: "Deploying energy-efficient machinery equipped with heat recovery systems to maximize energy utilization.",
    align: "left",
  },
];

const ScrollTimeline = () => {
  return (
    <ProcessTimelineSection
      accentColor="#bb2929"
      data={timelineData}
      headerContent={
        <>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#bb2929] tracking-widest mb-3 font-['EireneSansRegular'] text-lg"
          >
            Our Commitment to Sustainable Practices
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl !font-KuraleRegular text-black mb-6 leading-[0.9] tracking-relaxed"
          >
            Prioritising the Planet <br /> Alongside Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['EireneSansRegular']"
          >
            These efforts reduce our environmental footprint while delivering
            high-performance, responsibly produced fabrics.
          </motion.p>
        </>
      }
      renderItemContent={(item) => (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 font-['EireneSansRegular'] !text-[#bb2929]">
            {item.subtitle}
          </h4>
          <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-6 font-['FoundersGroteskCondensed'] text-black uppercase">
            {item.title}
          </h2>
          <p className="text-sm lg:text-base text-gray-700 font-['EireneSansRegular'] leading-relaxed max-w-sm ml-auto lg:ml-auto lg:mr-0">
            {item.desc}
          </p>
        </>
      )}
    />
  );
};

export default ScrollTimeline;
