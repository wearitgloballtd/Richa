import React from "react";
import { motion } from "framer-motion";
import ProcessTimelineSection from "../../common/ProcessTimelineSection";
import Deying from "../../../assets/images/Textile/deying.jpg";
import cooling from "../../../assets/images/Textile/cooling.jpeg";
import Enzyme from "../../../assets/images/Textile/enzyme.jpeg";
import wasteManagement from "../../../assets/images/Textile/waste-management.jpeg";

const timelineData = [
  {
    subtitle: "WATER CONSERVATION",
    title: "Low liquor ratio dyeing",
    desc: "We use advanced jet machines with low liquor ratios (1:6–1:8), cutting water usage by up to 50% saving freshwater without affecting colour uniformity.",
    align: "left",
    image: Deying,
  },
  {
    subtitle: "ECO-FRIENDLY TREATMENTS",
    title: "Enzyme based pre treatments",
    desc: "We use bio-enzymes for scouring and softening instead of harsh chemicals  lowering environmental load and ensuring safer, softer fabrics.",
    align: "right",
    image: Enzyme,
  },
  {
    subtitle: "WASTE MANAGEMENT",
    title: "Wastewater treatment & recycling",
    desc: "On-site effluent treatment plants (ETP) recycle process water, achieving near-zero discharge of harmful effluents to meet compliance norms.",
    align: "left",
    image: wasteManagement,
  },
  {
    subtitle: "CERTIFIED COMPLIANCE",
    title: "OEKO-TEX & ISO standards",
    desc: "We select low-impact dyes and auxiliaries compliant with OEKO-TEX and ISO 14001 ensuring fabrics are skin-safe and eco-responsible.",
    align: "right",
    image:
      "https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg",
  },
  {
    subtitle: "ENERGY EFFICIENCY",
    title: "Machinery with heat recovery",
    desc: "Our dyeing and finishing lines feature heat recovery systems and efficient motors  reducing energy consumption while keeping production consistent.",
    align: "left",
    image: cooling,
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
            className="text-[#bb2929] tracking-widest mb-3 font-['EireneSansRegular'] text-xs sm:text-sm lg:text-lg uppercase font-bold"
          >
            Our Commitment to Sustainable Practices
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl !font-KuraleRegular text-black mb-4 sm:mb-6 leading-tight tracking-normal"
          >
            Prioritising the Planet <br className="hidden sm:block" /> Alongside
            Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['EireneSansRegular'] px-4 sm:px-0"
          >
            These efforts reduce our environmental footprint while delivering
            high performance, responsibly produced fabrics.
          </motion.p>
        </>
      }
      renderItemContent={(item, isLeft) => (
        <>
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-['EireneSansRegular'] !text-[#bb2929] break-words">
            {item.subtitle}
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4 sm:mb-6 font-['EireneSansRegular'] text-black uppercase break-words">
            {item.title}
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-base text-gray-700 font-['EireneSansRegular'] leading-relaxed max-w-full sm:max-w-sm ${isLeft ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}
          >
            {item.desc}
          </p>
        </>
      )}
    />
  );
};

export default ScrollTimeline;
