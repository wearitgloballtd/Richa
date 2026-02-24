import videoBg from "../../../assets/videos/peb-background.mov";
import hookImage from "../../../assets/crane.png";

const ConstructionHero = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden min-h-[100vh] md:min-h-[140vh] pb-10 md:pb-20">
      {/* Background Section with Multi-point Angled Clip Path */}
      <div
        className="relative z-20 w-full h-[80vh] md:h-[110vh]"
        style={{
          // Polygon points: Top-Left, Top-Right, Bottom-Right (Higher), Bottom-Pivot (Low), Bottom-Left (Higher)
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 10% 100%, 0 85%)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-24 md:pt-0 md:-mt-32">
          {/* Vision Label */}
          <div className="flex items-center gap-4 text-white font-EireneSansRegular uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-4">
            <span>Our Vision</span>
            <div className="w-12 md:w-16 h-[1px] bg-white opacity-50"></div>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col mb-6 md:mb-8">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold font-FoundersGroteskCondensed uppercase leading-[1.1] md:leading-[0.8] drop-shadow-lg">
              Quality Construction
            </h1>
            <h1 className="text-[#BB2929] text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold font-FoundersGroteskCondensed uppercase leading-[1.1] md:leading-[0.8] drop-shadow-lg mt-1 md:mt-2 text-stroke-mobile md:text-stroke-desktop">
              & RELIABLE EXECUTION
            </h1>
          </div>

          {/* Description */}
          <p className="font-['EireneSansRegular'] text-gray-200 text-base md:text-lg lg:text-xl max-w-sm md:max-w-lg mb-8 md:mb-10 leading-relaxed font-light">
            We design, fabricate and erect High Performance Pre-Engineered
            Buildings (PEB) Engineered for speed, durability and cost
            efficiency.
          </p>

          {/* Call to Action Button */}
        </div>

        {/* Large Outlined Text Background "RICHA P E B" */}
        {/* Rotated to match the slope from 25% (100%h) to 100% (85%h) */}
        <div
          className="absolute bottom-[5%] md:bottom-[3%] right-[-10%] md:right-[10%] z-0 select-none opacity-20 pointer-events-none"
          style={{ transform: "rotate(-4deg)" }}
        >
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem] font-bold text-transparent font-FoundersGroteskCondensed uppercase leading-none whitespace-nowrap text-stroke-mobile md:text-stroke-desktop">
            RICHA P E B
          </h1>
        </div>
      </div>

      {/* Floating Crane Hook Image */}
      {/* Hanging exactly from the clip-path's lowest vertex (bottom-left at 10%) */}
      <div className="absolute top-0 left-0 w-full h-[80vh] md:h-[110vh] pointer-events-none z-10">
        <div
          className="absolute left-[10%] w-20 sm:w-24 md:w-40 lg:w-48 origin-top animate-[float_4s_ease-in-out_infinite]"
          style={{
            top: "calc(100% - 2rem)", // pull up slightly to tuck wires behind
          }}
        >
          <img
            src={hookImage}
            alt="Crane Hook"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -5%);
          }
          50% {
            transform: translate(-50%, calc(-5% + 15px));
          }
        }
        .text-stroke-mobile {
          -webkit-text-stroke: 1px white;
        }
        @media (min-width: 768px) {
          .md\\:text-stroke-desktop {
            -webkit-text-stroke: 2px white;
          }
        }
      `}</style>
    </div>
  );
};

export default ConstructionHero;
