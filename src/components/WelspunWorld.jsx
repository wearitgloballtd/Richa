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
    <img
      src="/reliability.svg"
      width="42"
      height="42"
      alt="Reliable Execution"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );

  const TeamIcon = () => (
    <img
      src="/team.svg"
      width="42"
      height="42"
      alt="Strong Team"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );

  const GraphIcon = () => (
    <img
      src="/legacy.svg"
      width="42"
      height="42"
      alt="Manufacturing Legacy"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );

  const statCards = [
    ,
    {
      icon: <GraphIcon />,
      label: "Manufacturing legacy",
      value: "30+ Years",
    },
    {
      icon: <TeamIcon />,
      label: "Strong team of",
      value: "1000+ Employees",
    },
    {
      icon: <GlobeIcon />,
      label: "Execution Reliability",
      value: "99%",
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
      className="w-full bg-white py-10 md:py-20"
    >
      <div className="container">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-20 md:mb-24">
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
              Richa Industries Limited is an integrated manufacturing company
              with strong roots in textiles and engineering. We run our
              operations with clear processes, strong quality checks, and a real
              focus on getting things done right and on time.
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
                    – Knitting, Dyeing, and Finishing of Fabrics
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
                <p className="text-white text-sm md:text-base mb-2 opacity-90 font-medium leading-relaxed font-EireneSansRegular">
                  {card.label}
                </p>
                <p className="text-white text-xl md:text-2xl lg:text-3xl leading-tight">
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
