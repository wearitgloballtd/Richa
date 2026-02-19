import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

// Sparkle Effect Component
const Sparkles = ({ color }) => {
  const particles = Array.from({ length: 20 }); // Generate 20 particles
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {particles.map((_, i) => {
        const angle = (i * 360) / 20; // Spread in a circle
        const radius = Math.random() * 80 + 60; // Random distance
        const delay = Math.random() * 0.2;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor:
                "#" +
                Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, "0"),
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
            }}
            variants={{
              hover: {
                x: [0, Math.cos((angle * Math.PI) / 180) * radius],
                y: [0, Math.sin((angle * Math.PI) / 180) * radius],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 0.5,
                  delay: delay,
                  ease: "easeOut",
                },
              },
              rest: { opacity: 0, x: 0, y: 0 },
            }}
          />
        );
      })}
    </div>
  );
};

const values = [
  {
    letter: "S",
    title: "Strength",
    description:
      "The unbreakable power of teamwork. We win together, lift each other up, and know that the best results come when we combine our strengths.",
    color: "#BB2929", // Brand Red
  },
  {
    letter: "P",
    title: "Passion",
    description:
      "The fire we bring to quality. We don't just make things; we pour heart into every fabric roll, every steel beam, every detail that leaves our facility.",
    color: "#0a192f", // Dark Navy
  },
  {
    letter: "A",
    title: "Accountability & Action",
    description:
      "We own what we do, and we move fast. No excuses, just clear responsibility and the drive to get things done right, on time.",
    color: "#BB2929",
  },
  {
    letter: "R",
    title: "Respect",
    description:
      "For all. Every person, every idea, every background matters here. We listen, we value differences, and we treat everyone like family.",
    color: "#0a192f",
  },
  {
    letter: "K",
    title: "Kindness",
    description:
      "The simple, powerful choice to be thoughtful, supportive, and human with each other, every day.",
    color: "#BB2929",
  },
];

const SparkValues = () => {
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveValue(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro Content */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
          <h2 className="text-4xl md:text-6xl text-[#0a192f] !font-KuraleRegular ">
            What makes Richa feel different?
          </h2>
          <div className="text-lg md:text-xl text-gray-700 leading-1 font-EireneSansRegular space-y-6">
            <p>
              It’s the people. The energy. The way we actually care about each
              other and the work we do.
            </p>
            <p>
              We laugh in meetings (yes, really), we cheer when someone nails a
              tough deadline, we share knowledge like it’s free coffee, and we
              genuinely want everyone to go home feeling good about their day.
            </p>
            <p className="font-medium text-[#0a192f]">
              And right at the heart of how we roll is something we call{" "}
              <span className="text-[#BB2929] font-bold !font-KuraleRegular">
                SPARK
              </span>
              , and it's honestly how we try to show up every single day:
            </p>
          </div>
        </div>

        {/* Interactive SPARK Letters */}
        <div className="flex justify-center items-center gap-2 md:gap-8 perspective-1000 flex-wrap md:flex-nowrap">
          {values.map((item, index) => (
            <motion.div
              key={item.letter}
              className="relative cursor-pointer flex flex-col items-center justify-center group"
              onClick={() => setActiveValue(item)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap="tap"
              variants={{
                rest: { scale: 1, y: 0, zIndex: 1 },
                hover: { scale: 1.1, y: -10, zIndex: 50 },
                tap: { scale: 0.95, zIndex: 50 },
              }}
            >
              {/* Sparkles Effect from Behind */}
              <Sparkles color={item.color} />

              <h1
                className={`text-[5rem] md:text-[10rem] font-black leading-none transition-colors duration-300 select-none
                   ${activeValue?.letter === item.letter ? "text-transparent stroke-text" : "text-[#e2e8f0]"}
                `}
                style={{
                  WebkitTextStroke:
                    activeValue?.letter === item.letter
                      ? `2px ${item.color}`
                      : "none",
                  color:
                    activeValue?.letter === item.letter
                      ? "transparent"
                      : "#cbd5e1", // Slate-300 inactive
                }}
              >
                {item.letter}
              </h1>

              {/* Overlay Letter for Hover/Active State to give it color */}
              <motion.h1
                className="absolute inset-0 flex items-center justify-center text-[5rem] md:text-[10rem] font-black leading-none pointer-events-none select-none"
                style={{ color: item.color }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeValue?.letter === item.letter ? 1 : 0,
                  y: activeValue?.letter === item.letter ? -5 : 0,
                }}
                variants={{
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              >
                {item.letter}
              </motion.h1>

              {/* Full Title on Hover */}
              <motion.span
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -bottom-12 md:-bottom-16 text-lg md:text-2xl font-bold whitespace-nowrap pointer-events-none"
                style={{ color: item.color }}
              >
                {item.title}
              </motion.span>

              {/* "Click to Expand" Blurred Text Hint */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                variants={{
                  rest: { opacity: 0, filter: "blur(8px)", scale: 0.8 },
                  hover: { opacity: 1, filter: "blur(0px)", scale: 1 },
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 bg-white/90 px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap font-EireneSansRegular">
                  Click to see value
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Split-Layout Floating Card */}
      <AnimatePresence>
        {activeValue && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setActiveValue(null)}
            />

            {/* 3D Card Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
              <motion.div
                layoutId={`card-${activeValue.letter}`}
                className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col md:flex-row min-h-[500px]"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
              >
                {/* Left Side: Visual Anchor (Color Block) */}
                <div
                  className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden text-white"
                  style={{ backgroundColor: activeValue.color }}
                >
                  {/* Circle Pattern Decoration */}
                  <div className="absolute top-[-50%] left-[-50%] w-[100%] h-[100%] rounded-full border border-white/10 scale-150"></div>
                  <div className="absolute top-[-40%] left-[-40%] w-[80%] h-[80%] rounded-full border border-white/10 scale-150"></div>

                  {/* Giant Watermark Letter */}
                  <span className="absolute -bottom-16 -right-16 text-[20rem] font-black opacity-10 leading-none select-none font-sans">
                    {activeValue.letter}
                  </span>

                  <div className="relative z-10">
                    <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-70 border-b border-white/30 pb-2 inline-block mb-4">
                      Our Values
                    </span>
                    <h2 className="text-8xl md:text-9xl font-black mt-2 leading-none">
                      {activeValue.letter}
                    </h2>
                  </div>

                  <div className="relative z-10 hidden md:block">
                    <div className="w-16 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-16 relative flex flex-col justify-center bg-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveValue(null);
                    }}
                    className="absolute top-6 right-6 p-2 md:p-3 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-all z-20 group"
                  >
                    <FiX
                      size={24}
                      className="group-hover:rotate-90 transition-transform duration-300"
                    />
                  </button>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <h3
                      className="text-4xl md:text-6xl font-bold mb-8 font-FoundersGroteskCondensed leading-tight"
                      style={{ color: activeValue.color }}
                    >
                      {activeValue.title}
                    </h3>
                    <div
                      className="text-lg md:text-2xl text-gray-600 leading-relaxed font-NueueMontreal border-l-4 pl-6"
                      style={{ borderColor: activeValue.color + "40" }}
                    >
                      <p>{activeValue.description}</p>
                    </div>
                  </motion.div>

                  {/* Bottom decorative fading text */}
                  <div className="absolute bottom-6 right-8 text-gray-100 text-6xl font-black select-none pointer-events-none -z-0 hidden md:block opacity-50">
                    RICHA
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SparkValues;
