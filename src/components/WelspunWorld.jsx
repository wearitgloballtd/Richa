import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideButton from "./common/SlideButton";

gsap.registerPlugin(ScrollTrigger);

const WelspunWorld = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // SVG Icons for stat cards
  const GlobeIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2.5" />
      <path
        d="M4 24h40M24 4c5.5 3.5 10 9.5 10 20s-4.5 16.5-10 20c-5.5-3.5-10-9.5-10-20S18.5 7.5 24 4z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M12 8c2 4 4 8 4 12s-2 8-4 12M36 8c-2 4-4 8-4 12s2 8 4 12M12 40c2-4 4-8 4-12s-2-8-4-12M36 40c-2-4-4-8-4-12s2-8 4-12"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );

  const TeamIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="16" r="6" fill="white" />
      <circle cx="34" cy="16" r="6" fill="white" />
      <circle cx="24" cy="24" r="7" fill="white" />
      <path
        d="M8 32c0-3.5 2.5-6.5 6-6.5M40 32c0-3.5-2.5-6.5-6-6.5M16 34c0-2.5 2.5-5 8-5s8 2.5 8 5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  const GraphIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="2"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M10 34L16 24L22 28L28 14L38 22"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="10" cy="34" r="2.5" fill="white" />
      <circle cx="16" cy="24" r="2.5" fill="white" />
      <circle cx="22" cy="28" r="2.5" fill="white" />
      <circle cx="28" cy="14" r="2.5" fill="white" />
      <circle cx="38" cy="22" r="2.5" fill="white" />
    </svg>
  );

  const statCards = [
    {
      icon: <GlobeIcon />,
      label: "We have presence in over",
      value: "15 Countries",
    },
    {
      icon: <TeamIcon />,
      label: "Strong team of",
      value: "1000+ Employees",
    },
    {
      icon: <GraphIcon />,
      label: "Group revenue",
      value: "₹1 Billion",
    },
  ];

  useEffect(() => {
    let cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".welspunTitle",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 3,
          markers: false,
        },
      });

      gsap.set(".welspunTitle .char", { opacity: 0.1 });

      tl.to(".welspunTitle .char", {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, containerRef);

    return () => cxt.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-white py-20 md:py-10"
    >
      <div className="max-w-full mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#BB2929] font-EireneSansRegular  text-xs md:text-lg  tracking-[0.15em] mb-5 md:mb-5"
        >
          A Group Built on Manufacturing Discipline
        </motion.p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 mb-20 md:mb-24">
          {/* Left Side - Headline */}
          <div className="flex flex-col">
            <h1 className="welspunTitle text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight">
              {["Where Experience", "Meets", "Execution"].map((line, index) => (
                <span key={index} className="block">
                  {line.split("").map((char, charIndex) => (
                    <span key={charIndex} className="char">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.7] mb-6 font-EireneSansRegular">
              Richa Industries Limited is an integrated industrial group with
              strong roots in manufacturing and engineering-led businesses. Our
              operations are driven by structured processes, controlled quality
              systems, and a clear focus on execution certainty.
            </p>
            <div className="text-base md:text-lg lg:text-xl text-[#666666] leading-[1.7] mb-4 font-EireneSansRegular">
              <p className="mb-5">The group operates two core verticals:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#BB2929] font-semibold mt-1">1.</span>
                  <div>
                    <span className="font-semibold text-black">
                      Richa Textiles
                    </span>{" "}
                    – Yarn and textile manufacturing
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#BB2929] font-semibold mt-1">2.</span>
                  <div>
                    <span className="font-semibold text-black">Richa PEB</span>{" "}
                    – Pre-Engineered Building solutions
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileTap={{ scale: 0.98 }}
            >
              <SlideButton
                onClick={() => navigate("/about-us")}
                className="py-4 tracking-[0.2em] text-sm md:text-base border-[1.5px]"
              >
                Explore
              </SlideButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#BB2929] p-5 md:p-6 lg:p-7  flex flex-row items-center gap-4 md:gap-5 rounded-2xl shadow-lg w-full"
            >
              <div className="flex-shrink-0">{card.icon}</div>
              <div className="flex-1">
                <p className="text-white text-xs md:text-sm mb-2 opacity-90 font-medium leading-relaxed font-EireneSansRegular">
                  {card.label}
                </p>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelspunWorld;
