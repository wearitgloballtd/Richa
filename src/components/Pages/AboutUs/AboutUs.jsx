import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutUsVideo from "../../../assets/videos/warehouse2.mp4";
import aboutUsImage from "../../../assets/images/AboutUs.jpg";
import ownerPhoto from "../../../assets/images/Leadership/Narender_Sir.png";

const AboutUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-us-page" className="w-full bg-white">
      {/* Hero Section */}
      <section
        id="about-hero"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.3"
        className="relative w-full min-h-screen overflow-hidden bg-black"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video
            src={aboutUsVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container w-full min-h-screen flex flex-col justify-center">
          <div className="textstructure py-[10vh] mt-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
            >
              {["About", "Us"].map((item, index) => (
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
                    <h1 className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[10vw] text-[13vw] uppercase whitespace-nowrap leading-none h-full text-white">
                      {item}
                    </h1>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-10 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[#BB2929] font-EireneSansRegular text-lg md:text-lg font-semibold  tracking-[0.15em] mb-6">
              A Group Built on Manufacturing Discipline and Renewed Vision
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl !font-KuraleRegular text-black leading-tight mb-8">
              Richa Industries Limited
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.8] font-EireneSansRegular">
              Richa Industries Limited is a diversified manufacturing group
              shaped by decades of industrial experience and strengthened by a
              renewed strategic direction. From engineering led structures to
              precision driven textile manufacturing, the group operates with a
              clear purpose to create reliable, scalable solutions that support
              long-term business growth.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.8] font-EireneSansRegular">
              What defines Richa is not just what we manufacture, but how we
              manufacture. Every operation is guided by structured processes,
              quality discipline, and a deep understanding of execution
              realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-10 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl !font-KuraleRegular text-black leading-tight mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-8"></div>
            <p className="text-[#BB2929] font-EireneSansRegular text-lg md:text-lg tracking-[0.15em]">
              From Industrial Foundations to Integrated Manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl !font-KuraleRegular text-black mb-6 leading-tight">
                A Journey Rooted In Execution
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                Richa Industries began its journey with a strong foundation in
                manufacturing and engineering. Over the years, the group
                developed capabilities across multiple industrial domains,
                building infrastructure, skills, and systems that enabled it to
                operate at scale.
              </p>
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                As industries evolved, Richa expanded into specialized verticals
                such as Textiles and Pre-Engineered Buildings (PEB). Each
                business was developed with a clear focus on operational
                efficiency, compliance, and long term relevance rather than
                short term volume.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Chapter Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="relative w-full py-8 md:py-12 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutUsImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl !font-KuraleRegular text-white leading-tight mb-4">
              A New Chapter Of Leadership
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-8"></div>
            <p className="text-white font-EireneSansRegular text-sm md:text-base font-semibold tracking-[0.15em]">
              Revival with Purpose, Not Just Ownership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mt-0 rounded-lg overflow-hidden">
                <img
                  src={ownerPhoto}
                  alt="Leadership"
                  className="h-full w-full rounded-lg transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl !font-KuraleRegular text-white mb-6 leading-tight">
                Strengthening What Works, Building What's Next
              </h3>
              <p className="text-base md:text-lg text-white leading-[1.8] font-EireneSansRegular">
                The acquisition of Richa Industries under new ownership marked a
                strategic revival rather than a simple transition. Backed by
                experienced industrial leadership, the group entered a new phase
                focused on restoring operational strength, improving
                productivity, and repositioning Richa as a future-ready
                manufacturing enterprise.
              </p>
              <p className="text-base md:text-lg text-white leading-[1.8] font-EireneSansRegular mb-8">
                This renewed leadership brings a disciplined approach to:
              </p>
              <div className="space-y-4">
                {[
                  "Operational stability",
                  "Financial prudence",
                  "Process-driven growth",
                  "Long-term value creation",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-[#bb2929] font-bold text-xl mt-1">
                      0{index + 1}
                    </span>
                    <p className="text-base md:text-lg text-white leading-[1.8] font-EireneSansRegular flex-1">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-6 pt-6 border-t border-[#BB2929]"
              >
                <p className="text-base md:text-lg text-white/90 italic leading-[1.8] font-EireneSansRegular">
                  The emphasis is on building credibility through performance,
                  not promises.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-8">
              <div className="w-32 h-1 bg-[#bb2929] mx-auto"></div>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-KuraleRegular text-black leading-[1.4] max-w-3xl mx-auto italic ">
              Building credibility through performance, not promises.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
