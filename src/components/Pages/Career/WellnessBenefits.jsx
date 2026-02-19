import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiGlobe,
  FiSmile,
} from "react-icons/fi";
import {
  SiLinkedin,
  SiUdemy,
  SiCoursera,
  SiSlack,
  SiZoom,
  SiGooglemeet,
  SiInstagram,
  SiX,
  SiTiktok,
  SiNotion,
  SiAsana,
  SiTrello,
  SiSpotify,
  SiDiscord,
  SiYoutube,
} from "react-icons/si";

const benefits = [
  {
    id: "growth",
    label: "Real Growth Opportunities",
    icon: <FiTrendingUp className="text-xl" />,
    content: {
      icons: [
        { Icon: SiLinkedin, color: "#0077B5" }, // Networking
        { Icon: SiUdemy, color: "#A435F0" }, // Learning
        { Icon: SiCoursera, color: "#0056D2" }, // Courses
      ],
      text: "You actually get to grow here. We provide training, help you acquire new skills, and offer real promotion paths so you're never stagnant.",
    },
  },
  {
    id: "team",
    label: "No Silos, No Ego",
    icon: <FiUsers className="text-xl" />,
    content: {
      icons: [
        { Icon: SiSlack, color: "#4A154B" },
        { Icon: SiZoom, color: "#2D8CFF" },
        { Icon: SiGooglemeet, color: "#00897B" },
      ],
      text: "Teams help each other. We have no silos and strictly no ego games. Collaboration is our default state.",
    },
  },
  {
    id: "wins",
    label: "Celebrating Every Win",
    icon: <FiAward className="text-xl" />,
    content: {
      icons: [
        { Icon: SiInstagram, color: "#E4405F" },
        { Icon: SiX, color: "#000000" },
        { Icon: SiTiktok, color: "#000000" },
      ],
      text: "We celebrate wins—small ones and big ones. Whether it's shipping a feature or hitting a milestone, recognition is part of our DNA.",
    },
  },
  {
    id: "sustainability",
    label: "Living Sustainability",
    icon: <FiGlobe className="text-xl" />,
    content: {
      icons: [
        { Icon: SiNotion, color: "#000000" }, // Paperless
        { Icon: SiAsana, color: "#F06A6A" }, // Efficiency
        { Icon: SiTrello, color: "#0052CC" }, // Organization
      ],
      text: "Sustainability isn’t just a buzzword; we live it in our processes. We aim to be efficient, paperless where possible, and mindful of our impact.",
    },
  },
  {
    id: "vibe",
    label: "Warm & Fun Culture",
    icon: <FiSmile className="text-xl" />,
    content: {
      icons: [
        { Icon: SiSpotify, color: "#1DB954" },
        { Icon: SiDiscord, color: "#5865F2" },
        { Icon: SiYoutube, color: "#FF0000" },
      ],
      text: "The vibe is warm, open, and surprisingly fun for a manufacturing company 😄. We take our work seriously, but not ourselves.",
    },
  },
];

const WellnessBenefits = () => {
  const [activeTab, setActiveTab] = useState("growth");

  return (
    <section className="w-full py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl text-[#0a192f] text-center mb-20 !font-KuraleRegular leading-[0.95]">
          Wellness and Benefits
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          {/* Left Sidebar (Navigation) */}
          <div className="w-full md:w-1/3 flex flex-col space-y-4">
            {benefits.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left group
                  ${
                    activeTab === item.id
                      ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 text-gray-900"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <span
                  className={`transition-colors duration-300 ${activeTab === item.id ? "text-[#BB2929]" : "text-black group-hover:text-[#BB2929]"}`}
                >
                  {item.icon}
                </span>
                <span
                  className={`font-medium text-lg ${activeTab === item.id ? "font-semibold font-EireneSansRegular" : ""}`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              {benefits.map(
                (item) =>
                  item.id === activeTab && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Tool Icons Grid - Overlapping Style */}
                      {item.content.icons.length > 0 && (
                        <div className="flex items-center -space-x-6 mb-8 py-4">
                          {item.content.icons.map((IconObj, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8, x: -20 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-0 hover:z-10 transition-all duration-300 hover:scale-110"
                            >
                              <IconObj.Icon size={42} color={IconObj.color} />
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Content Text */}
                      <div className="max-w-2xl">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-EireneSansRegular">
                          {item.content.text}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessBenefits;
