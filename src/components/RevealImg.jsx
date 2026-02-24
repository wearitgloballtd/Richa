import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* VIDEO */
import videoSource from "../assets/videos/richa_video.mp4";

gsap.registerPlugin(ScrollTrigger);

/* ======================
   MOBILE CHECK
====================== */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isMobile;
};

/* ======================
   PARALLAX TEXT
====================== */
const ParallaxText = ({ children, baseVelocity = -4 }) => {
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    x.current += (baseVelocity * delta) / 10;
  });

  return (
    <motion.div
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        transform: `translateX(${x.current}px)`,
      }}
    >
      {children}
      {children}
    </motion.div>
  );
};

/* ======================
   REVEAL COVER
====================== */
const RevealCover = () => (
  <motion.div
    style={{
      position: "absolute",
      inset: 0,
      background: "#fff",
      zIndex: 5,
    }}
    initial={{ scaleX: 1 }}
    whileInView={{ scaleX: 0 }}
    transformOrigin="left"
    transition={{
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
    }}
    viewport={{ once: true }}
  />
);

/* ======================
   IMAGE ANIMATION
====================== */
const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

/* ======================
   MAIN COMPONENT
====================== */
const RevealImg = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null); // Used for video container
  const mainRef = useRef(null); // Used for GSAP context

  const titleText = "One Ecosystem. One Discipline. One Future.";

  useEffect(() => {
    let cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".revealTitle",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 3,
          markers: false,
        },
      });

      gsap.set(".revealTitle .char", { opacity: 0.1 });

      tl.to(".revealTitle .char", {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, mainRef);

    return () => cxt.revert();
  }, []);

  return (
    <section ref={mainRef} className="w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-[120px]">
        {/* Title Section */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-[#BB2929] font-EireneSansRegular text-sm sm:text-base md:text-lg tracking-[0.1em] md:tracking-[0.2em] mb-2 sm:mb-3">
            From Fabrics to Structures
          </p>
          <h1 className="revealTitle text-4xl sm:text-5xl md:text-6xl lg:text-7xl !font-KuraleRegular text-black leading-tight md:leading-[0.95] tracking-tight">
            {titleText.split("").map((char, index) => (
              <span key={index} className="char">
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* VIDEO */}
        <div
          ref={containerRef}
          className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] overflow-hidden rounded-xl"
        >
          <RevealCover />

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
            onViewportEnter={() => {
              if (videoRef.current) {
                videoRef.current.play().catch((e) => {
                  console.error("Autoplay failed:", e);
                });
              }
            }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src={videoSource}
              className="w-full h-full object-cover"
              style={{
                border: "3px groove #BB2929",
                borderRadius: "12px",
              }}
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevealImg;
