import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutUsImage from "../assets/images/AboutUs.jpg";
import SlideButton from "./common/SlideButton";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleText =
    "Richa Industries Limited is a company that provides services to the Pre Engineering Building and Textile Industry.";

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
              Our approach at Richa Industries Limited is customised to empower
              the Pre Engineering Building and Textile Industry by providing
              services to the industry. Also we are a team of professionals who
              are experts in the field of Pre Engineering Building and Textile
              Industry.
            </p>
            <SlideButton onClick={() => navigate("/about-us")} className="mt-4">
              Read more
            </SlideButton>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src={aboutUsImage}
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
