import React from "react";
import { motion } from "framer-motion";
import ProcessTimelineSection from "../../common/ProcessTimelineSection";

const timelineData = [
  {
    subtitle: "WATER CONSERVATION",
    title: "Low liquor ratio dyeing",
    desc: "We use advanced jet machines with low liquor ratios (1:6–1:8), cutting water usage by up to 50% — saving freshwater without affecting colour uniformity.",
    align: "left",
  },
  {
    subtitle: "ECO-FRIENDLY TREATMENTS",
    title: "Enzyme based pre treatments",
    desc: "We use bio-enzymes for scouring and softening instead of harsh chemicals — lowering environmental load and ensuring safer, softer fabrics.",
    align: "right",
  },
  {
    subtitle: "WASTE MANAGEMENT",
    title: "Wastewater treatment & recycling",
    desc: "On-site effluent treatment plants (ETP) recycle process water, achieving near-zero discharge of harmful effluents to meet compliance norms.",
    align: "left",
  },
  {
    subtitle: "CERTIFIED COMPLIANCE",
    title: "OEKO-TEX & ISO standards",
    desc: "We select low-impact dyes and auxiliaries compliant with OEKO-TEX and ISO 14001 — ensuring fabrics are skin-safe and eco-responsible.",
    align: "right",
  },
  {
    subtitle: "ENERGY EFFICIENCY",
    title: "Machinery with heat recovery",
    desc: "Our dyeing and finishing lines feature heat recovery systems and efficient motors — reducing energy consumption while keeping production consistent.",
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
            high performance, responsibly produced fabrics.
          </motion.p>
        </>
      }
      renderItemContent={(item) => (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 font-['EireneSansRegular'] !text-[#bb2929]">
            {item.subtitle}
          </h4>
          <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-6 font-['EireneSansRegular'] text-black uppercase">
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
