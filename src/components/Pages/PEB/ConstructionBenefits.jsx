const benefits = [
  {
    id: "01",
    title: "END TO END SOLUTIONS",
    description:
      "Comprehensive solutions from design to erection for faster project delivery.",
  },
  {
    id: "02",
    title: "STATE OF THE ART FACILITY",
    description:
      "Advanced infrastructure with proven expertise in diverse PEB applications.",
  },
  {
    id: "03",
    title: "CUSTOMISATION CAPABILITIES",
    description:
      "Tailored to meet unique structural and functional requirements.",
  },
  {
    id: "04",
    title: "SUSTAINABLE ENGINEERING",
    description:
      "Cost effective, sustainable buildings designed with world class engineering.",
  },
  {
    id: "05",
    title: "REVITALISED LEADERSHIP",
    description:
      "Under new ownership, committed to innovation, quality, and client success.",
  },
];

const ConstructionBenefits = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 font-['NeueMontreal'] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left Column: Heading and Image */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#BB2929] font-EireneSansRegular text-lg  tracking-widest">
              <span>Key Advantages</span>
            </div>
            <h2 className="text-4xl md:text-6xl !font-KuraleRegular leading-[0.95] text-black">
              Why Choose Richa Industries?
            </h2>
          </div>

          {/* Truck Image */}
          <div className="w-full mt-4">
            <img
              src="https://images.pexels.com/photos/29224552/pexels-photo-29224552.jpeg"
              alt="Heavy Machinery"
              className="w-full max-w-md lg:max-w-lg object-contain  contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Column: Benefits List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="flex gap-6 items-start py-4 cursor-default transition-all duration-300"
              style={{ paddingLeft: `${index * 3}rem` }} // Reduced indent multiplier for 5 items
            >
              {/* Number with Hover Effect */}
              <div className="group relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 hover:translate-x-2">
                {/* Hover Background Square */}
                <div className="absolute top-4 left-0 w-16 h-16 bg-[#FFE5E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <span className="text-5xl md:text-7xl font-bold font-FoundersGroteskCondensed text-gray-200 group-hover:text-[#BB2929] transition-colors duration-300">
                  {benefit.id}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 pt-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-tight leading-none">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical BENEFIT Text Background - Consolidated */}
      <div className="absolute top-1/2 right-[-2%] transform -translate-y-1/2 rotate-180 pointer-events-none select-none z-0 opacity-[0.06] hidden lg:block">
        <h1
          className="text-[12rem] xl:text-[20rem] font-bold font-FoundersGroteskCondensed uppercase text-[#BB2929]"
          style={{ writingMode: "vertical-rl" }}
        >
          BENEFITS
        </h1>
      </div>
    </section>
  );
};

export default ConstructionBenefits;
