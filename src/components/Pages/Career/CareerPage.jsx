import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCoffee, FiHeart, FiSun } from "react-icons/fi"; // Using Feather icons for a clean look
import CareerStats from "./CareerStats";
import SparkValues from "./SparkValues";
import WellnessBenefits from "./WellnessBenefits";
import WhyWorkWithUs from "./WhyWorkWithUs";
import SportsWear from "../../../assets/images/Textile/sportsWear.png";
import Growth from "../../../assets/career/growth.jpeg";
import HandShake from "../../../assets/career/handshake.jpeg";
import Meeting from "../../../assets/career/meeting.jpeg";
import Strength from "../../../assets/career/employee-strength.png";
import richaBuilding from "../../../assets/career/richaBuilding.jpeg";

const CareerPage = () => {
  const [index, setIndex] = useState(0);
  const words = ["हमारे साथ", "With Us", "Together"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: "https://images.pexels.com/photos/6276068/pexels-photo-6276068.jpeg",
      alt: "Team member",
      classname: "w-64 h-80 rounded-2xl object-cover",
      offset: "translate-y-0",
      icon: null,
    },
    {
      src: SportsWear,
      alt: "Office pet",
      classname: "w-60 h-72 rounded-3xl object-cover",
      offset: "translate-y-12",
      icon: null,
    },
    {
      src: Growth,
      alt: "Gaming break",
      classname: "w-64 h-64 rounded-2xl object-cover",
      offset: "translate-y-4",
      icon: (
        <FiHeart className="text-black text-2xl absolute -top-8 -right-8" />
      ),
    },
    {
      src: Meeting,
      alt: "Nature retreat",
      classname: "w-60 h-80 rounded-t-3xl rounded-b-lg object-cover",
      offset: "translate-y-16",
      icon: null,
    },
    {
      src: HandShake,
      alt: "Sunset view",
      classname: "w-64 h-80 rounded-xl object-cover",
      offset: "translate-y-0",
      icon: <FiSun className="text-black text-2xl absolute -top-6 -right-6" />,
    },
    {
      src: Strength,
      alt: "Adventure",
      classname: "w-72 h-96 rounded-2xl object-cover",
      offset: "translate-y-8",
      icon: null,
    },
    {
      src: richaBuilding,
      alt: "Richa Building",
      classname: "w-64 h-80 rounded-2xl object-cover",
      offset: "translate-y-8",
      icon: null,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black py-20 flex flex-col justify-center overflow-hidden">
      {/* Title Section */}
      <div className="container mx-auto px-4 text-center mb-20 mt-16">
        <h1 className="text-6xl md:text-6xl text-[#0a192f] leading-relaxed !font-KuraleRegular tracking-relaxed">
          Come Grow
          <span className="inline-block relative h-[1.4em] w-[280px] align-bottom overflow-hidden text-[#BB2929] font-semibold ">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="text-[#BB2929] at-richa !font-KuraleRegular">
            at Richa Industries!
          </span>
          {/* <span className="text-5xl align-middle">🇮🇳</span> */}
        </h1>

        <div className="mt-12 max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed !font-EireneSansRegular">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            If you’ve landed here, chances are you’re curious about what it’s
            really like to work at Richa.
            <br />
            <span className="font-semibold text-[#BB2929] !font-KuraleRegular">
              Spoiler: It’s pretty awesome.
            </span>
          </motion.p>
          <p className="!font-EireneSansRegular">
            We’re in the middle of an exciting new chapter under fresh
            ownership, and we’re building stronger, happier teams across
            Pre-Engineered Buildings and Textiles. Whether you love designing
            smart steel structures, crafting beautiful high-quality fabrics, or
            supporting the people who make it all happen, there’s probably a
            spot here with your name on it.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full relative flex overflow-hidden py-10">
        {/* Helper to duplicate content for seamless loop */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
            className="flex flex-shrink-0 items-center gap-8 pr-8"
          >
            {images.map((img, index) => (
              <div key={index} className={`relative group ${img.offset}`}>
                <div className="relative w-fit">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`${img.classname} shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
                  />
                  {/* Render Icon if present */}
                  {img.icon && img.icon}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* Career Stats Section */}
      {/* <CareerStats /> */}

      {/* SPARK Values Section */}
      <SparkValues />

      {/* Wellness & Benefits Section */}
      <WellnessBenefits />

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />
    </div>
  );
};

export default CareerPage;
