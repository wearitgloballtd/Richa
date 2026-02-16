import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function HeroSection() {

  // Different text arrays for each image
  const texts = [
    ["Don't Just", "Build", "Create"], // Image 1
  ];

  
  // Use first text array since we're not cycling through images anymore
  const currentTexts = texts[0];

  return (
    <div
      id="hero-section"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./src/assets/videos/Untitled design.mp4" type="video/mp4" />
          {/* Add additional source formats if needed */}
          {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      

      {/* Content on top */}
      <div className="relative z-10 container w-full min-h-screen flex flex-col justify-between">
        <div className="textstructure py-[10vh] mt-28">
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
            >
              {currentTexts.map((item, index) => (
                <div key={index} className="masker">
                  <div className="w-fit flex items-center overflow-hidden">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "16vw" }}
                        transition={{
                          ease: [0.76, 0, 0.24, 1],
                          duration: 1,
                          delay: 0.3,
                        }}
                        className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[4vw] sm:mt-5 mr-5 rounded-md bg-[#bb2929]"
                      ></motion.div>
                    )}
                    <h1 className=" font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[10vw]  text-[13vw] uppercase whitespace-nowrap leading-none h-full">
                      {item}
                    </h1>
                  </div>
                </div>
              ))}
            </motion.div>
          {/* </AnimatePresence> */}
        </div>
      </div>
      
      {/* Full width bottom section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full flex items-center justify-between border-t-[1px] border-zinc-800/50 py-5 font-NueueMontreal backdrop-blur-sm bg-black/20 px-4 sm:px-8">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base font-light leading-none hidden sm:block"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4">
          <div className="rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-light whitespace-nowrap uppercase">
            Start the Project
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
