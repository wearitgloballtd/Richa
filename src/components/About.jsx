import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextileImage from "../assets/images/Textile/textile-deying.png";
import SlideButton from "./common/SlideButton";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const titleText =
    "We are manufacturers of knitted fabrics and pre-engineered buildings since 1993..";

  // You can mix both imported files and external URLs here
  const images = [
    TextileImage,
    "https://images.pexels.com/photos/29224626/pexels-photo-29224626.jpeg",
    // Add more URLs or local image imports as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    let cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutTitle",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 3,
          markers: false,
        },
      });

      gsap.set(".aboutTitle .char", { opacity: 0.1 });

      tl.to(".aboutTitle .char", {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, containerRef);

    return () => cxt.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-white rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="aboutTitle text-4xl sm:text-5xl text-black !font-KuraleRegular leading-[1.1] mb-10 border-b-[2px] border-[#bb2929] pb-10 tracking-tight">
          {titleText.split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4 text-[#bb2929] font-KuraleRegular ">
              Our approach:
            </h1>
            <p className="text-base sm:text-xl tracking-wide text-black font-EireneSansRegular">
              We build long term trust by sticking to discipline in every step.
              Whether it's producing performance fabrics for apparel or fast
              build PEB warehouses and factories, we deliver reliable results
              that last.
            </p>
            <SlideButton onClick={() => navigate("/about-us")} className="mt-4">
              Know Our Journey
            </SlideButton>
          </div>
          <div className="relative w-full rounded-3xl mt-10 md:w-[60vw] md:mt-0 overflow-hidden aspect-[4/3]">
            {images.map((img, index) => (
              <img
                key={index}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                src={img}
                alt={`about us slider element ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
