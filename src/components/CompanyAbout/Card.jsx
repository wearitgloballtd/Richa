import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const Card = ({ cardData }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      document.querySelectorAll(".companyAboutCard").forEach((e) => {
        gsap.set(e, {
          width: "90%",
        });
        gsap.to(e, {
          backgroundColor: "white",
          color: "black",
          width: "100%",
          scrollTrigger: {
            trigger: e,
            markers: false,
            start: "10% 58%",
            end: "60% 58%",
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="companyAboutCardContainer w-full h-full pt-10 lg:pt-[55vh] pb-[10vh] lg:pr-[11vw] flex flex-col gap-6 lg:gap-8 items-center">
        {cardData.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="companyAboutCard w-full md:w-[90%] h-auto min-h-[180px] p-6 md:px-10 md:py-6 border border-[#bb2929] flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-10 bg-white"
          >
            <div>
              <h1 className="text-xl mb-4 font-semibold">{title}</h1>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              <div className="cards__icon w-16 h-16 md:w-20 md:h-20 shrink-0">
                <div className="svg w-full h-full flex items-center justify-center">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
