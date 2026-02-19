import React, { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FaPeopleGroup,
  FaLayerGroup,
  FaHandshake,
  FaHeart,
  FaUserCheck,
  FaBolt,
  FaRocket,
} from "react-icons/fa6";

const WhyWorkWithUs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -450 : 450;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const cards = [
    {
      title: "Passionate People",
      description:
        "We love connecting with individuals who care about meaningful work and positive collaboration. If you’re curious, driven, and enjoy growing alongside others, you’ll feel right at home at Richa.",
      icon: <FaPeopleGroup size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "All Levels Welcome",
      description:
        "Whether you’re highly experienced or just starting out, your perspective matters here. We believe learning never stops, and everyone deserves a space where they can grow with confidence.",
      icon: <FaLayerGroup size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Reach Out Anytime",
      description:
        "You don’t have to wait for a job listing to connect. If our culture resonates with you, simply share your story and how you see yourself growing with us.",
      icon: <FaHandshake size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Share Your Passion",
      description:
        "Tell us what kind of role excites you and what made Richa stand out. Understanding your goals helps us discover opportunities that feel natural and rewarding.",
      icon: <FaHeart size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Personally Reviewed",
      description:
        "Every submission is read carefully by our team. We value real connections and make sure every message gets genuine attention.",
      icon: <FaUserCheck size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Quick Response",
      description:
        "If your profile feels like the right fit, we’ll get back to you soon with clear and friendly communication.",
      icon: <FaBolt size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    },
    {
      title: "Start Your Journey",
      description:
        "Whenever you’re ready, fill out the form and introduce yourself. It could be the beginning of something exciting with the Richa family.",
      icon: <FaRocket size={48} className="text-[#BB2929]" />,
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c434c67b?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="text-[#BB2929] text-lg  tracking-wide mb-2 pl-1 font-EireneSansRegular">
              Our Advantages
            </div>
            <h2 className="text-5xl md:text-6xl text-[#0a192f] leading-tight !font-KuraleRegular">
              Ready to See If We’re a Match?
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-[#1a202c] hover:bg-[#1a202c] hover:text-white transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <FiArrowLeft
                size={24}
                className="transition-transform group-hover:-translate-x-1"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-[#1a202c] hover:bg-[#1a202c] hover:text-white transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <FiArrowRight
                size={24}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Cards Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[350px] md:w-[410px] h-[400px] relative rounded-lg overflow-hidden p-10 flex flex-col items-center justify-center text-center snap-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.01] group`}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
              </div>

              <div className="relative z-10 mb-8 transform scale-125">
                {card.icon}
              </div>

              <h3 className="relative z-10 text-2xl md:text-3xl font-semibold mb-6 text-white font-FoundersGroteskCondensed tracking-wide">
                {card.title}
              </h3>

              <p className="relative z-10 text-gray-200 leading-relaxed text-lg font-NueueMontreal px-2">
                {card.description}
              </p>
            </div>
          ))}

          {/* Padding div for right side scrolling */}
          <div className="min-w-[20px] h-full flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
