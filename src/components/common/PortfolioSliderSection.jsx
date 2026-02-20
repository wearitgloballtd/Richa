import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Default settings
const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: false,
};

const PortfolioSliderSection = ({
  subtitle, // String or React Node
  title,
  description,
  slides = [],
  settings = {},
  accentColor = "#BB2929",
  imageBorderRadius = "rounded-[20px]", // Default match Textile
  tagClassName = "", // Extra classes for the tag
  titleClassName = "text-4xl lg:text-6xl", // Default title size
  slideClassName = "portfolio-slide-item", // Base class for slide styling triggers if needed
}) => {
  const sliderSettings = { ...defaultSettings, ...settings };

  return (
    <div className="w-full bg-white py-20 font-['NeueMontreal']">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="mb-20">
          {typeof subtitle === "string" ? (
            <h3
              className="text-xl tracking-wider mb-2 font-EireneSansRegular"
              style={{ color: accentColor }}
            >
              {subtitle}
            </h3>
          ) : (
            subtitle
          )}

          <h1 className="text-5xl lg:text-7xl leading-tight font-KuraleRegular mb-6 text-black ">
            {title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            <p className="text-lg text-gray-700 leading-relaxed font-['EireneSansRegular'] lg:w-2/3">
              {description}
            </p>
          </div>
        </div>

        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full focus:outline-none">
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${slideClassName}`}
              >
                {/* Left Side: Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full aspect-[4/3] relative">
                    <div
                      className={`w-full h-full relative overflow-hidden ${imageBorderRadius}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 text-left pl-0 lg:pl-8">
                  <span
                    className={`inline-block py-1 px-3 border border-black/20 rounded-full font-['EireneSansRegular'] tracking-wider text-sm mb-2 bg-white text-black ${tagClassName}`}
                  >
                    {slide.tag}
                  </span>
                  <h2
                    className={`${titleClassName} font-bold leading-tight mb-2 font-['EireneSansRegular'] text-black`}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-['EireneSansRegular']">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Styles for Dots Overrides - scoped loosely or inline */}
      <style>{`
                .slick-dots li.slick-active button:before {
                    color: ${accentColor} !important;
                    opacity: 1 !important;
                }
                .slick-dots li button:before {
                    color: black !important;
                    opacity: 0.2 !important;
                    font-size: 12px !important;
                }
            `}</style>
    </div>
  );
};

export default PortfolioSliderSection;
