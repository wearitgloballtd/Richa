import React from "react";
import { motion } from "framer-motion";

const IndustriesSection = ({
  title,
  subtitle,
  description,
  footerText,
  accentColor = "#BB2929",
  items = [],
  gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  shape = "circle", // 'circle' or 'square'
}) => {
  return (
    <section className="w-full bg-white py-20 px-8 lg:px-20 font-['EireneSansRegular'] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl  tracking-wider mb-3 font-EireneSansRegular"
          style={{ color: accentColor }}
        >
          {subtitle}
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black text-5xl lg:text-7xl tracking-tight !font-KuraleRegular mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      <div
        className={`max-w-7xl mx-auto relative ${items.length > 4 ? "px-4 lg:px-0 max-w-[90rem]" : ""}`}
      >
        {/* Connecting Line (Cotton Thread Wave) - Hidden on mobile */}
        {shape === "circle" && (
          <div className="hidden lg:block absolute top-[100px] left-1/2 -translate-x-1/2 w-screen h-[20px] overflow-hidden z-0 pointer-events-none">
            <style>
              {`
                            @keyframes waveMove {
                                from { background-position-x: 0px; }
                                to { background-position-x: 100px; }
                            }
                        `}
            </style>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M 0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23991b1b' stroke-width='3' stroke-linecap='round' /%3E%3Cpath d='M 0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23bb2929' stroke-width='2.5' stroke-linecap='round' /%3E%3Cpath d='M 0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='white' stroke-width='1' stroke-opacity='0.25' stroke-dasharray='1 2' stroke-linecap='round' /%3E%3C/svg%3E")`,
                backgroundSize: "100px 20px",
                backgroundRepeat: "repeat-x",
                animation: "waveMove 4s linear infinite",
                filter: "drop-shadow(0px 4px 3px rgba(0,0,0,0.2))",
              }}
            />
          </div>
        )}

        <div className={`grid ${gridClassName} gap-8 lg:gap-12 relative z-10`}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circle Wrapper with Rotating Dashed Border */}
              <div className="relative mb-8 w-[220px] h-[220px] flex items-center justify-center">
                {/* Rotating Outer Dashed Circle */}
                <motion.div
                  animate={shape === "circle" ? { rotate: 360 } : {}}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute inset-0 border-[2px] border-dashed ${shape === "square" ? "rounded-[30px]" : "rounded-full"}`}
                  style={{ borderColor: accentColor }}
                ></motion.div>

                {/* Inner Solid Circle with Image */}
                <div
                  className={`w-48 h-48 overflow-hidden shadow-xl relative z-10 bg-white group-hover:scale-105 transition-transform duration-300 border-4 border-white ${shape === "square" ? "rounded-[24px]" : "rounded-full"}`}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient for text readability if needed, or subtle tint */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Badge Number - Positioned Top Left (approx 10:00 position) */}
                <div
                  className="absolute top-[20px] left-[20px] w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg z-20"
                  style={{ backgroundColor: accentColor }}
                >
                  <span className="font-bold font-FoundersGroteskCondensed text-xl">
                    0{item.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3
                className="text-2xl text-black font-bold uppercase font-EireneSansRegular mb-3 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                style={{ "--hover-color": accentColor }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed px-4 font-EireneSansRegular">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-500 font-medium italic font-EireneSansRegular"
        >
          "{footerText}"
        </motion.p>
      </div>
    </section>
  );
};

export default IndustriesSection;
