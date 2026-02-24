import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import richaLogo from "../../assets/images/richa logo.png";

gsap.registerPlugin(ScrollTrigger);

const ProcessTimelineSection = ({
  headerContent,
  data = [],
  accentColor = "#BB2929",
  backgroundImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  renderItemContent, // Optional function (item, isLeft) => ReactNode
}) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;

    // Clear any existing triggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Initial Setup
    const sections = gsap.utils.toArray(".timeline-section");

    // Animate the line drawing down based on scroll
    gsap.to(line, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 55%",
        end: "bottom center",
        scrub: 0,
      },
    });

    // Animate each section
    sections.forEach((section, index) => {
      // Content animation (Fade In + Up)
      const content = section.querySelector(".timeline-content");

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Dot animation (Scale/Morph logic)
      const dot = dotRefs.current[index];
      if (dot) {
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: accentColor,
          boxShadow: `0 0 20px ${accentColor}66`, // Adding 66 for opacity
          duration: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Image Reveal animation syncing exactly with the scrolling line
      const imageWrapper = section.querySelector(".timeline-image-wrapper");
      if (imageWrapper) {
        gsap.fromTo(
          imageWrapper,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 55%",
              end: "bottom 55%",
              scrub: 0,
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [accentColor]);

  return (
    <div className="w-full bg-white font-['NeueMontreal']">
      {/* Header Section */}
      {headerContent && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-8 sm:pb-12 text-center ">
          {headerContent}
        </div>
      )}

      {/* Timeline Section */}
      <section
        ref={containerRef}
        className="relative w-full bg-[#f9f9f9] text-black py-16 sm:py-24 overflow-hidden rounded-t-3xl rounded-b-3xl mb-10 sm:mb-20"
        style={{ minHeight: "100vh" }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9] via-transparent to-[#f9f9f9]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-10">
          {/* Timeline Line Container (Desktop & Mobile) */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-[2px] lg:w-px -ml-[1px] lg:-ml-[0.5px] h-full bg-gray-200 lg:bg-gray-300">
            {/* Animated Progress Line */}
            <div
              ref={lineRef}
              className="w-full absolute top-0 left-0"
              style={{ backgroundColor: accentColor, height: "0%" }}
            >
              {/* Moving Logo (Desktop Only) */}
              <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md border border-gray-100">
                <img
                  src={richaLogo}
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Timeline Sections */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-48 py-10 lg:py-20">
            {data.map((item, index) => {
              const isLeft = item.align
                ? item.align === "left"
                : index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-section relative flex flex-col lg:flex-row w-full items-start lg:items-center ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
                >
                  {/* Dot on the center line */}
                  <div
                    className="absolute left-4 sm:left-6 lg:left-1/2 -ml-[5px] w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 z-20 top-0 mt-6 lg:mt-0 lg:top-1/2 lg:-translate-y-1/2"
                    ref={(el) => (dotRefs.current[index] = el)}
                  ></div>

                  {/* Image Block */}
                  {item.image && (
                    <div
                      className={`timeline-image-container relative w-full h-[250px] sm:h-[350px] mb-8 lg:mb-0 pl-10 sm:pl-12 lg:pl-0 lg:absolute lg:top-0 lg:bottom-0 lg:w-[40%] lg:h-auto ${isLeft ? "lg:right-0" : "lg:left-0"}`}
                    >
                      <div
                        className="timeline-image-wrapper w-full h-full overflow-hidden rounded-2xl lg:rounded-[2rem] shadow-xl"
                        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
                      >
                        <img
                          src={item.image}
                          alt={item.title || "Timeline image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content Block */}
                  <div
                    className={`timeline-content w-full lg:w-[40%] pl-10 sm:pl-12 lg:pl-0 ${isLeft ? "lg:text-right lg:pr-12 xl:pr-24" : "lg:text-left lg:pl-12 xl:pl-24"}`}
                  >
                    {renderItemContent ? (
                      renderItemContent(item, isLeft)
                    ) : (
                      <>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 sm:mb-4 font-['FoundersGroteskCondensed'] break-words">
                          {item.subtitle}
                        </h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4 sm:mb-6 font-['FoundersGroteskCondensed'] text-black uppercase break-words">
                          {item.title}
                        </h2>
                        <p
                          className={`text-sm sm:text-base text-gray-700 font-['NeueMontreal'] leading-relaxed max-w-sm lg:max-w-md ${isLeft ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"} mx-auto lg:mx-0`}
                        >
                          {item.desc}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessTimelineSection;
