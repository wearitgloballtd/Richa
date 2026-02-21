import { FaPhoneAlt, FaPlay, FaArrowRight } from "react-icons/fa";
import profilePic from "../../../assets/images/TeamMembers/bhudev.png";

const ConstructionAbout = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 font-['NeueMontreal'] text-black overflow-hidden relative z-30 mb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
        {/* Left Column Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 z-10">
          {/* About Us Label */}
          <div className="flex items-center gap-2 text-[#BB2929] text-lg tracking-widest">
            <span>PEB Division</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl !font-KuraleRegular leading-[0.95] max-w-xl">
            High Performance Steel Structures
          </h2>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed max-w-lg text-lg !font-EireneSansRegular">
            At Richa Industries Limited, our PEB Division designs, fabricates,
            supplies, and erects pre-engineered steel buildings tailored for
            industrial, commercial, and infrastructure projects.
          </p>

          {/* List Items */}
          <div className="flex flex-col gap-4 mt-2">
            {[
              "Specialised design, precision fabrication, and on-site erection",
              "End-to-end execution: speed, cost-efficiency, durability",
              "Optimised steel usage and clear-span capabilities for large-scale facilities.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-[#BB2929] flex items-center justify-center">
                  <div className="w-1.5 h-[1px] bg-[#BB2929]"></div>
                </div>
                <span className="text-black font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Contact & Signature Row */}
          <div className="flex flex-wrap items-center gap-8 mt-6">
            {/* Contact Box */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#BB2929] flex items-center justify-center text-white text-xl rounded-sm">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">+91 97112-69111</span>
                <span className="text-gray-500 text-sm">Need Help?</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-12 bg-gray-300 hidden sm:block"></div>

            {/* Signature Block */}
            <div className="flex items-center gap-4">
              <img
                src={profilePic}
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover grayscale"
              />
              <div className="flex flex-col">
                {/* Placeholder Signature using script font if available or italic */}
                <span className="font-serif italic text-2xl leading-none text-gray-800">
                  Richa PEB
                </span>
                <span className="text-gray-500 text-xs">info@richa.in</span>
              </div>
            </div>
          </div>

          {/* Video Thumbnail (Bottom Left) */}
          <div className="relative mt-12 w-full max-w-full aspect-video overflow-hidden rounded-2xl group cursor-pointer">
            <video
              src="https://www.pexels.com/download/video/1197802/"
              alt="Worker smoothing concrete"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        {/* Right Column Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-20">
          {/* Angled Image */}
          <div className="relative w-full max-w-md ml-auto">
            <div
              className="w-full aspect-[3/4] object-cover bg-gray-200 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 70% 0, 100% 20%, 100% 100%, 0 100%)",
              }} // Angled top-right corner
            >
              <img
                src="https://images.pexels.com/photos/17728784/pexels-photo-17728784.jpeg"
                alt="Construction Worker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Text & Button */}
          <div className="flex flex-col gap-6 max-w-md ml-auto mt-4 mb-10">
            <p className="text-gray-500 leading-relaxed text-base text-justify !font-EireneSansRegular">
              Equipped with state-of-the-art manufacturing facilities and
              advanced engineering technologies, our PEB plant in Kashipur,
              Uttarakhand, supports large-scale production. This enables us to
              meet diverse project demands while upholding excellence in every
              structure delivered under our renewed ownership.
            </p>

            {/* <button className="bg-[#BB2929] hover:bg-[#9b2222] text-white px-8 py-4 flex items-center justify-between gap-4 uppercase font-bold text-sm tracking-widest transition-all w-full sm:w-auto rounded-sm">
              <span>DISCOVER PROJECTS</span>
              <FaArrowRight className="text-xs -rotate-45" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAbout;
