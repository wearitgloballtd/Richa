import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CompanyAbout = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let cxt = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: leftRef.current,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".companyAboutTitle",
          markers: false,
          start: "top 95%",
          end: "bottom 60%",
          scrub: 3,
        },
      });
      gsap.set(".companyAboutPara span", {
        opacity: 0.1,
      });
      gsap.set(".companyAboutTitle span", { opacity: 0.1 });
      tl.to(".companyAboutPara span", {
        opacity: 1,
        stagger: 0.01,
      });
      tl.to(".companyAboutTitle span", {
        opacity: 1,
        stagger: 0.1,
      });
    });

    return () => cxt.revert();
  }, []);

  const cardData = [
    {
      title: "Multi decade manufacturing experience",
      description:
        "We have been manufacturing knitted fabrics and pre-engineered buildings since 1993. Over 30 years of consistent quality, disciplined processes, and on time delivery.",
      icon: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g clipRule="evenodd" fillRule="evenodd">
              <path
                d="m283.4 399.4 42.2 73.1 24.2-29.6 43.7 6.9-47.9-82.8zm-54.9 0-42.2 73.1-24.2-29.6-43.7 6.9 47.9-82.9z"
                fill="#cccc31"
              />
              <path
                d="m283.4 399.4 17 29.4c22.7-8.2 42.4-22.7 57.1-41.2l-11.9-20.6zm-71.8 29.4c-22.7-8.2-42.4-22.7-57.1-41.2l11.9-20.6 62.2 32.5z"
                fill="#a5a636"
              />
              <path
                d="m256 186.7c66.4 0 120.2 53.8 120.2 120.2s-53.8 120.3-120.2 120.3-120.3-53.8-120.3-120.2 53.9-120.3 120.3-120.3z"
                fill="#e6e6e6"
              />
              <path
                d="m256 236.2c39.1 0 70.8 31.7 70.8 70.8s-31.7 70.8-70.8 70.8-70.8-31.7-70.8-70.8 31.7-70.8 70.8-70.8z"
                fill="#cccc31"
              />
            </g>
            <path
              d="m256 228.2c21.8 0 41.5 8.8 55.7 23.1 14.3 14.3 23.1 34 23.1 55.7s-8.8 41.4-23.1 55.7-34 23.1-55.7 23.1-41.4-8.8-55.7-23.1-23.1-34-23.1-55.7c0-21.8 8.8-41.5 23.1-55.7 14.2-14.3 33.9-23.1 55.7-23.1zm44.4 34.4c-11.3-11.3-27-18.4-44.4-18.4-17.3 0-33.1 7-44.4 18.4-11.4 11.4-18.4 27.1-18.4 44.4s7 33 18.4 44.4c11.3 11.4 27 18.4 44.4 18.4 17.3 0 33.1-7 44.4-18.4 11.4-11.4 18.4-27 18.4-44.4s-7.1-33.1-18.4-44.4z"
              fill="#fdb614"
            />
            <g clipRule="evenodd" fillRule="evenodd">
              <path
                d="m85.8 112 16.7 34.7 38.1 5.2-27.8 26.6 6.8 37.9-33.9-18.2-33.9 18.2 6.8-37.9-27.6-26.7 38.1-5.2zm170.2-72.6 16.7 34.7 38.1 5.2-27.8 26.6 6.8 37.9-33.8-18.2-33.9 18.2 6.8-37.9-27.8-26.6 38.1-5.2zm170.1 72.6 16.7 34.7 38.1 5.2-27.8 26.6 6.8 37.9-33.9-18.2-33.9 18.2 6.8-37.9-27.8-26.6 38.1-5.2z"
                fill="#fdb614"
              />
              <path
                d="m85.8 198.1-33.9 18.2 6.9-37.9-27.8-26.6 38.1-5.2 16.7-34.6z"
                fill="#e6a624"
              />
              <path
                d="m346.7 368.8c-14.4 18.9-34.2 33.4-57.2 41.1-12.1 4.1-25 6.3-38.5 6.3-10.3 0-20.4-1.3-30-3.8-23.5-6-44.2-19-59.9-36.5-6.7-7.5-12.4-15.8-17.1-24.8 3.9 9.9 9.1 19.2 15.4 27.7 14.2 19.1 34 33.8 56.9 41.8 12.4 4.3 25.7 6.7 39.6 6.7s27.2-2.4 39.6-6.7c22.9-8 42.6-22.7 56.9-41.8 14.9-20 23.8-44.9 23.8-71.8 0-19.9-4.8-38.6-13.4-55.1 5.4 13.7 8.4 28.5 8.4 44.1 0 27.4-9.1 52.6-24.5 72.8z"
                fill="#b3b4b4"
              />
              <g fill="#e6a624">
                <path d="m256 125.6-33.9 18.2 6.8-37.9-27.8-26.6 38.2-5.2 16.7-34.7z" />
                <path d="m426.1 198.1-33.9 18.2 6.9-37.9-27.8-26.6 38.1-5.2 16.7-34.6z" />
              </g>
            </g>
            <path
              d="m217.5 310.5c-2.2-3.8-.9-8.7 2.9-10.9s8.7-.9 10.9 2.9l10.5 18.2 37.3-37.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-44.7 44.7c-.5.5-1 .9-1.6 1.3-3.8 2.2-8.7.9-10.9-2.9z"
              fill="#a5a636"
            />
            <path
              d="m214.5 301c-2.2-3.8-.9-8.7 2.9-10.9s8.7-.9 10.9 2.9l10.5 18.2 37.3-37.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-44.7 44.7c-.5.5-1 .9-1.6 1.3-3.8 2.2-8.7.9-10.9-2.9z"
              fill="#fff"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Engineering led approach across businesses",
      description:
        "We see a need and deliver a solution. From knitting, dyeing and finishing fabrics to designing, fabricating and erecting PEB structures – our engineering and processes integrate seamlessly.",
      icon: (
        <img
          src="/engineering.svg"
          className="w-full h-full object-contain"
          alt="Engineering"
        />
      ),
    },
    {
      title: "Process driven quality and compliance systems",
      description:
        "Strict checks from start to finish. Trustworthy fabrics and durable PEB. We team up with people who value real reliability – just like us.",
      icon: (
        <img
          src="/compilance.svg"
          className="w-full h-full object-contain"
          alt="Engineering"
        />
      ),
    },
    {
      title: "Rapid Execution & On Time Delivery",
      description:
        "We deliver PEB projects fast – no compromise on quality. Our streamlined design to erection process beats conventional timelines, while keeping safety and durability rock solid.",
      icon: (
        <img
          src="/execution.svg"
          className="w-full h-full object-contain"
          alt="Engineering"
        />
      ),
    },
    {
      title: "Reliable Long Term Partner",
      description:
        "One company. Two verticals. Disciplined focus.We choose clients who want consistent quality and long-term support. We build real relationships – delivering reliable fabrics and PEB year after year.",
      icon: (
        <img
          src="/agreement.svg"
          className="w-full h-full object-contain"
          alt="Engineering"
        />
      ),
    },
  ];
  return (
    <>
      <div
        ref={containerRef}
        data-bgcolor="cyan"
        className="section w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row px-5 md:px-10 py-10 lg:py-[10vh] relative overflow-hidden"
      >
        <div className="basis-full lg:basis-1/2">
          <div ref={leftRef} className="w-full">
            <p className="companyAboutPara w-full lg:w-[37vw] font-medium text-3xl md:text-4xl text-[#bb2929] font-EireneSansRegular">
              {"Why Richa Industries Limited?"
                .split("")
                .map((letter, index) => {
                  return (
                    <span key={index} className="font-EireneSansRegular">
                      {letter}
                    </span>
                  );
                })}
              <br />
              {"What Sets Us Apart?".split("").map((letter, index) => (
                <span key={index} className="font-EireneSansRegular">
                  {letter}
                </span>
              ))}
            </p>
            <h1 className="companyAboutTitle text-4xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight w-full lg:w-[35vw] my-6 lg:my-10">
              {"Consistency Over Claims".split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </h1>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 mt-10 lg:mt-0">
          <Card cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default CompanyAbout;
