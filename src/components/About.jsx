import React from "react";
import aboutUsImage from "../assets/images/AboutUs.jpg";
import SlideButton from "./common/SlideButton";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-white rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl text-black font-KuraleRegular sm:leading-normal font-medium mb-10 border-b-[2px] border-[#bb2929] pb-10">
          Richa Industries Limited is a company that provides services to the Pre Engineering Building and Textile Industry.
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4 text-[#bb2929] font-KuraleRegular ">Our approach:</h1>
            <p className="text-base sm:text-xl tracking-wide text-black font-EireneSansRegular">
              Our approach at Richa Industries Limited is tailored to empower the Pre Engineering Building and Textile Industry by providing services to the industry.And also we are a team of professionals who are experts in the field of Pre Engineering Building and Textile Industry.
            </p>
            <SlideButton className="mt-4">
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
