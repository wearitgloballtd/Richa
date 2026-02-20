import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutUsVideo from "../../../assets/videos/warehouse2.mp4";
import aboutUsImage from "../../../assets/images/AboutUs.jpg";
import RichaLogo from "../../../assets/images/richa logo.png";
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
              {["Don't Just", "Build", "Create"].map((item, index) => (
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl !font-KuraleRegular text-black leading-tight mb-4">
              Who We Are?
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-8"></div>
            <p className="text-[#BB2929] font-EireneSansRegular text-lg md:text-lg font-semibold  tracking-[0.15em] mb-6">
              A Group Built on Manufacturing Discipline and Renewed Vision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.8] font-EireneSansRegular">
              Richa Industries Limited is a manufacturing company shaped by over
              30 years of industrial experience and strengthened by renewed
              strategic leadership. From precision knitted fabrics to
              engineering-led pre-engineered buildings, we operate with clear
              processes, strict quality discipline, and a deep commitment to
              execution. Our purpose is simple: deliver reliable, scalable
              solutions that support long-term business growth for our partners.
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
              How We Built a Dual Strength Manufacturing Company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl !font-KuraleRegular text-black mb-20 leading-tight">
                A Journey Rooted In Execution
              </h3>
              <div className="w-full h-auto mt-8">
                <img
                  src={RichaLogo}
                  alt="A Journey Rooted In Execution"
                  className="w-1/2 md:w-2/3 lg:w-1/2 h-auto object-contain ml-8 md:ml-12 lg:ml-16"
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
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                We started in 1993 in Faridabad with a small but determined
                focus on quality manufacturing. Early years were about mastering
                engineering and processes first in industrial structures then
                expanding into precision textile production.
              </p>
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                Over three decades we invested in people, equipment, and
                systems:
              </p>
              <ul className="list-disc pl-5 text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular space-y-2">
                <li>
                  Built integrated facilities that allowed textiles and PEB to
                  share infrastructure and discipline.
                </li>
                <li>
                  Earned trust through consistent on-time delivery and
                  zero-shortcut quality.
                </li>
                <li>
                  Survived industry changes by staying focused on what works
                  long term, not quick volume.
                </li>
              </ul>
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                Today, under renewed leadership, we continue the same core:
                disciplined execution, reliable output, and real partnerships.
                From knitted fabrics that perform to PEB buildings that stand
                strong it's the same mindset since day one.
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
                  not promises. - "Mr. Narendra Kumar Srivastava"
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
