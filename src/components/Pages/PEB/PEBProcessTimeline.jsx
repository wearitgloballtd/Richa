import React from "react";
import { motion } from "framer-motion";
import ProcessTimelineSection from "../../common/ProcessTimelineSection";

const timelineData = [
  {
    title: "Design & Engineering",
    subtitle: "Precision from Concept to Reality",
    desc: "Design and engineering form the foundation of every PEB project, in which custom requirements are translated into optimised structural solutions using advanced software.",
    bullets: [
      "Utilise sophisticated tools like STAAD.Pro, Tekla Structures, and 3D modelling for accurate framing, load analysis, and detailing",
      "Optimised primary framing (columns, rafters) and secondary members (purlins, girts) to match stress distribution and reduce material usage",
      "Customisation for clear spans, mezzanines, crane provisions, and multi-storey configurations",
      "Compliance with international codes and seismic/wind considerations for safety and performance",
    ],
    footer:
      "This phase ensures efficient, economical designs that accelerate project timelines.",
  },
  {
    title: "Fabrication",
    subtitle: "Precision Manufacturing of Core Components",
    desc: "Fabrication transforms engineered designs into high-strength steel components in a controlled factory environment.",
    bullets: [
      "CNC plasma/oxy-fuel cutting machines for precise shaping of plates and sections",
      "Automated punching, drilling, and high-precision welding systems for consistent quality",
      "Assembly of primary (built-up sections) and secondary members with rigorous dimensional checks",
      "Surface preparation, priming, and painting lines for corrosion protection and longevity",
    ],
    footer:
      "These processes deliver components with superior strength, minimal waste, and ready-for-site assembly.",
  },
  {
    title: "Cladding & Accessories",
    subtitle: "Enhancing Functionality and Aesthetics",
    desc: "Cladding and accessories complete the building envelope, providing weatherproofing, insulation, and custom features.",
    bullets: [
      "Profiled roof and wall panels with insulated sandwich options for thermal efficiency",
      "Accessories, including doors, windows, ventilators, louvres, and flashing, for complete sealing",
      "Integration of skylights, mezzanine floors, and crane systems as per project needs",
      "High-quality coatings and sealants to ensure durability against environmental factors",
    ],
    footer:
      "This results in buildings that are functional, energy-efficient, and visually appealing.",
  },
  {
    title: "Erection",
    subtitle: "Swift On-Site Assembly",
    desc: "Erection involves precise on-site assembly, leveraging prefabricated components to achieve rapid completion.",
    bullets: [
      "Foundation bolt placement and alignment, followed by main frame erection",
      "Installation of secondary members, bracing, and cladding with torque-controlled bolting",
      "Safety-focused processes with minimal on-site welding for faster, cleaner construction",
      "Final inspections and handover, ensuring structural integrity and client satisfaction",
    ],
    footer:
      "Our approach achieves 30-50% faster completion compared to conventional methods.",
  },
];

const PEBProcessTimeline = () => {
  return (
    <ProcessTimelineSection
      accentColor="#BB2929"
      data={timelineData}
      backgroundImage={null} // No bg image for PEB
      headerContent={
        <>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#BB2929] font-bold uppercase tracking-widest mb-3 font-FoundersGroteskCondensed text-sm"
          >
            Project Lifecycle
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-FoundersGroteskCondensed text-black mb-6  leading-[0.95]"
          >
            From Concept to <br /> Completion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed "
          >
            Our streamlined process ensures precision, speed, and quality at
            every stage of your building's creation.
          </motion.p>
        </>
      }
      renderItemContent={(item, isLeft) => (
        <>
          <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-[#BB2929] mb-2 font-['FoundersGroteskCondensed']">
            {item.subtitle}
          </h4>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 font-['FoundersGroteskCondensed'] text-black uppercase">
            {item.title}
          </h2>
          <p className="text-base text-gray-700 font-['NeueMontreal'] leading-relaxed mb-6">
            {item.desc}
          </p>
          {/* Bullets */}
          <ul
            className={`text-sm text-gray-600 space-y-2 mb-6 ${isLeft ? "lg:pl-8" : "lg:pr-8"} list-disc list-inside lg:list-outside marker:text-[#BB2929]`}
          >
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <p
            className={`text-sm font-semibold text-gray-800 italic ${isLeft ? "lg:border-r-4 lg:pr-4 lg:border-l-0 border-l-4 pl-4" : "border-l-4 pl-4"} border-[#BB2929]`}
          >
            {item.footer}
          </p>
        </>
      )}
    />
  );
};

export default PEBProcessTimeline;
