import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import textileImage from "../assets/images/featureSection/TEXTILE.jpg";
import SlideButton from "./common/SlideButton";

gsap.registerPlugin(ScrollTrigger);

function Featured() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  useEffect(() => {
    let cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".featuredTitle",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 3,
          markers: false,
        },
      });

      gsap.set(".featuredTitle .char", { opacity: 0.1 });

      tl.to(".featuredTitle .char", {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, containerRef);

    return () => cxt.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container w-full sm:pt-20 pt-10 bg-white"
    >
      <div className="w-full border-b-[2px] border-[#bb2929] pb-5">
        <h1 className="featuredTitle text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight">
          {"Our Businesses".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          onClick={() => navigate("/peb")}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide text-black font-EireneSansRegular">
            <span className="w-2 h-2 bg-[#bb2929] rounded-full"></span>
            PEB - Pre-Engineered Buildings
          </h1>
          <h1 className="absolute text-[#fbeb45] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl !font-KuraleRegular leading-none tracking-tighter">
            {"PEB".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block font-KuraleRegular"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://images.pexels.com/photos/15947587/pexels-photo-15947587.jpeg"
              alt="PEB"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          onClick={() => navigate("/textiles")}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide text-black font-EireneSansRegular">
            <span className="w-2 h-2 bg-[#bb2929] rounded-full"></span> TEXTILES
            - Knitted Fabrics & Processing
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#fbeb45] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl !font-KuraleRegular leading-none tracking-tighter">
            {"TEXTILE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block font-KuraleRegular"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://images.pexels.com/photos/31850032/pexels-photo-31850032.jpeg"
              alt="TEXTILE"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center mt-10">
        <SlideButton
          showStartArrow={true}
          className="py-4 tracking-[0.2em] text-sm md:text-base border-[1.5px]"
        >
          CLICK TO EXPLORE
        </SlideButton>
      </div>
    </div>
  );
}

export default Featured;
