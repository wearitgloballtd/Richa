import { useEffect } from "react";
import "../../css/style.min.css";
import textileVideo from "../../../assets/videos/Textile_Division.mp4";
import textileImage from "../../../assets/images/Textile/textile-division.png";
import infrastructureBg from "../../../assets/images/Textile/Our-Infrastructure.jpeg";
import { motion } from "framer-motion";
import {
  FaEye,
  FaRocket,
  FaUsers,
  FaCogs,
  FaMedal,
  FaLeaf,
  FaIndustry,
  FaWater,
  FaFlask,
  FaArrowRight,
  FaLayerGroup,
  FaRecycle,
} from "react-icons/fa";
import { GiSewingString, GiFactory } from "react-icons/gi";
import CustomSection from "./CustomSection";
import PortfolioSlider from "./PortfolioSlider";
import IndustriesWeServe from "./IndustriesWeServe";
import Certifications from "./Certifications";
import ScrollTimeline from "./ScrollTimeline";
import PulseSteps from "./PulseSteps";

const VideoWave = () => {
  useEffect(() => {
    // Preloader fade out
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      const preloaderBg = document.querySelector(".preloader-bg");
      if (preloader) preloader.style.display = "none";
      if (preloaderBg) preloaderBg.style.display = "none";

      // Show borders
      document.querySelectorAll(".the-borders").forEach((el) => {
        el.classList.add("show");
      });

      // Show wave
      const wave = document.getElementById("wave");
      if (wave) wave.classList.add("show");

      // Show video background
      const videoBg = document.querySelector(".hero-bg");
      if (videoBg) videoBg.classList.add("show");
    }, 1000);

    // Wave animation
    const canvas = document.getElementById("wave");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const points = [];
      const config = {
        count: 15,
        range: { x: 20, y: 80 },
        duration: { min: 20, max: 40 },
        thickness: 10,
        strokeColor: "#fff",
        level: 0.15,
      };

      const random = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      class Point {
        constructor(config) {
          this.anchorX = config.x;
          this.anchorY = config.y;
          this.x = config.x;
          this.y = config.y;
          this.setTarget();
        }

        setTarget() {
          this.initialX = this.x;
          this.initialY = this.y;
          this.targetX =
            this.anchorX + random(0, config.range.x * 2) - config.range.x;
          this.targetY =
            this.anchorY + random(0, config.range.y * 2) - config.range.y;
          this.tick = 0;
          this.duration = random(config.duration.min, config.duration.max);
        }

        update() {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (Math.abs(dist) <= 0) {
            this.setTarget();
          } else {
            this.y = easeInOutQuad(
              this.tick,
              this.initialY,
              this.targetY - this.initialY,
              this.duration,
            );
            this.x = easeInOutQuad(
              this.tick,
              this.initialX,
              this.targetX - this.initialX,
              this.duration,
            );
            this.tick++;
          }
        }
      }

      const spacing = (canvas.width + config.range.x * 2) / (config.count - 1);
      for (let i = 0; i < config.count + 2; i++) {
        points.push(
          new Point({
            x: spacing * (i - 1) - config.range.x,
            y: canvas.height - canvas.height * config.level,
          }),
        );
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach((point) => point.update());

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        // Close the path to create a solid fill from wave to bottom
        ctx.lineTo(
          canvas.width + config.range.x + config.thickness,
          canvas.height + config.thickness,
        );
        ctx.lineTo(
          -config.range.x - config.thickness,
          canvas.height + config.thickness,
        );
        ctx.closePath();

        // Fill with solid white color
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
      };
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="wave-container relative w-full h-screen overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        {/* Preloader */}
        <div className="preloader-bg"></div>
        <div id="preloader">
          <div id="preloader-status">
            <div className="preloader-position loader">
              <span></span>
            </div>
          </div>
        </div>

        {/* Video Background */}
        <div className="hero-fullscreen">
          <div className="hero-bg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={textileVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h2 className="text-6xl md:text-8xl font-FoundersGroteskCondensed tracking-wider uppercase text-center drop-shadow-lg mb-2 text-[#BB2929]">
            RICHA's
          </h2>
          <h1 className="text-white text-6xl md:text-8xl font-FoundersGroteskCondensed tracking-wider uppercase text-center drop-shadow-lg">
            Textile Division
          </h1>
        </div>

        {/* Borders */}
        <div className="the-borders border-top"></div>
        <div className="the-borders border-left"></div>
        <div className="the-borders border-right"></div>
        <div className="the-borders border-bottom"></div>

        {/* Wave Canvas */}
        <canvas id="wave" className="absolute inset-0"></canvas>
      </div>

      {/* Textile Division Section */}
      <div className="w-full bg-white py-20 px-8 lg:px-20 relative font-['NeueMontreal']">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h1 className="text-5xl lg:text-7xl !font-KuraleRegular mb-4 text-black leading-[0.95] tracking-tight">
                Textile Division
              </h1>
              <h3 className="text-xl font-semibold tracking-wider mb-6 text-[#BB2929] font-EireneSansRegular">
                Premium Knitted Fabrics – Made with Precision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-['EireneSansRegular']">
                At Richa Industries, our Textile Division specializes in
                producing high-quality knitted fabrics for apparel, activewear,
                and industrial applications. We focus on knitting, dyeing,
                processing, and finishing — delivering consistent colour,
                superior performance, and fabrics that meet real market demands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-['EireneSansRegular']">
                With advanced machinery and a disciplined approach, we ensure
                every batch is precise, efficient, and environmentally
                responsible. Our team handles everything from single jersey and
                Lycra blends to structured knits and performance fabrics, always
                with the same commitment quality you can trust.
              </p>
            </div>

            <div className="flex gap-6 mt-4">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#BB2929] text-white p-6 rounded-xl flex flex-col gap-4 w-1/2 shadow-lg"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <GiSewingString className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-EireneSansRegular">
                    Knitting Capacity
                  </h4>
                  <p className="text-white text-sm">200 Tons / Month</p>
                </div>
                <p className="text-xs text-white mt-2">
                  High volume production with precision.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#BB2929] text-[white] p-6 rounded-xl flex flex-col gap-4 w-1/2 shadow-lg"
              >
                <div className="w-12 h-12 bg-[#443C42]/10 rounded-full flex items-center justify-center">
                  <GiFactory className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-EireneSansRegular">
                    Processing Capacity
                  </h4>
                  <p className="text-white text-sm">600 Tons / Month</p>
                </div>
                <p className="text-xs text-white mt-2">
                  Sustainable dyeing & finishing.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div
              className="aspect-square w-full max-w-[500px] mx-auto relative overflow-hidden"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <img
                src={textileImage}
                alt="Textile Division"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto mt-20 bg-[#f5f5f5] rounded-3xl p-10 flex flex-wrap justify-between gap-8 items-center">
          <motion.div
            whileHover={{ scale: 1.1, color: "#BB2929" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <FaUsers className="text-4xl text-[#333] mb-4 group-hover:text-[#BB2929] transition-colors" />
            <h3 className="text-4xl font-bold text-[#333] mb-1 font-EireneSansRegular group-hover:text-[#BB2929] transition-colors">
              100+
            </h3>
            <p className="text-gray-500 font-medium group-hover:text-[#BB2929] transition-colors">
              Trusted Clients
            </p>
          </motion.div>
          <div className="h-16 w-[2px] bg-gray-300 hidden md:block"></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <FaLeaf className="text-4xl text-[#333] mb-4 group-hover:text-[#BB2929] transition-colors" />
            <h3 className="text-4xl font-bold text-[#333] mb-1 font-EireneSansRegular group-hover:text-[#BB2929] transition-colors">
              Eco-Friendly
            </h3>
            <p className="text-gray-500 font-medium group-hover:text-[#BB2929] transition-colors">
              Sustainable Processes
            </p>
          </motion.div>
          <div className="h-16 w-[2px] bg-gray-300 hidden md:block"></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <FaMedal className="text-4xl text-[#333] mb-4 group-hover:text-[#BB2929] transition-colors" />
            <h3 className="text-4xl font-bold text-[#333] mb-1 font-EireneSansRegular group-hover:text-[#BB2929] transition-colors">
              Certified
            </h3>
            <p className="text-gray-500 font-medium group-hover:text-[#BB2929] transition-colors">
              Quality Standards
            </p>
          </motion.div>
          <div className="h-16 w-[2px] bg-gray-300 hidden md:block"></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img src="/high.svg" alt="High" className="w-10 h-10 mb-4" />
            <h3 className="text-4xl font-bold text-[#333] mb-1 font-EireneSansRegular group-hover:text-[#BB2929] transition-colors">
              High
            </h3>
            <p className="text-gray-500 font-medium group-hover:text-[#BB2929] transition-colors">
              Volume Capable
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infrastructure Section */}
      <div
        className="w-full relative bg-[#4A4453] text-white py-32 -mt-20 z-0 mb-4"
        style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={infrastructureBg}
            alt="Infrastructure Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10 font-['NeueMontreal']">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
            <div className="max-w-4xl">
              <h4 className="text-gray-400 tracking-widest mb-4 font-EireneSansRegular text-lg">
                Our Infrastructure
              </h4>
              <h2 className="text-5xl lg:text-6xl mb-8 font-KuraleRegular leading-tight">
                State-of-the-Art Textile Facility
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-['EireneSansRegular']">
                Richa Industries operates a fully integrated knitting and
                processing plant designed for high-quality knitted fabrics. From
                circular knitting machines to advanced dyeing and finishing
                lines, everything is set up for precision, consistency, and
                scalability — exactly what apparel and activewear brands need.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mb-10 text-center lg:text-left">
            <h3 className="text-4xl lg:text-5xl font-KuraleRegular text-white">
              Our Key Strengths
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaIndustry />,
                title: "High Volume Knitting",
                desc: "200+ Tons / Month. Equipped with latest circular knitting machines for single jersey, interlock, Lycra blends, and structured fabrics producing uniform rolls with minimal defects.",
              },
              {
                icon: <FaLayerGroup />,
                title: "Dedicated Dyeing & Finishing Zones",
                desc: "600 Tons / Month. Separate zones for dyeing, soft flow processing, and finishing to avoid cross contamination, ensuring vibrant colours, excellent fastness, and soft hand feel every time.",
              },
              {
                icon: <FaRecycle />,
                title: "Advanced Utilities & Sustainability",
                desc: "Water recycling plants + energy efficient systems. We reuse water in dyeing and maintain low impact processes to keep environmental footprint low while delivering consistent fabric quality.",
              },
              {
                icon: <FaFlask />,
                title: "In-House Quality & Innovation Labs",
                desc: "Continuous testing and development. On site labs test GSM, shrinkage, colour fastness, pilling, and stretch plus R&D for new blends and performance fabrics that meet brand specifications.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                className={`relative p-8 rounded-2xl border ${index === 0 ? "bg-white/10 border-transparent shadow-xl" : "border-white/20 hover:bg-white/5"} transition-all duration-300 flex flex-col h-full group overflow-hidden`}
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#4A4453] flex items-center justify-center text-xl mb-6 shadow-md relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-EireneSansRegular relative z-10">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed flex-grow relative z-10">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-xl text-white/60 font-medium italic font-['EireneSansRegular']">
              "These features build trust by showcasing our physical
              capabilities and dedication to superior manufacturing standards."
            </p>
          </div>
        </div>
      </div>

      <CustomSection />
      <PortfolioSlider />
      <IndustriesWeServe />
      <Certifications />
      <ScrollTimeline />
      <PulseSteps />
    </div>
  );
};

export default VideoWave;
