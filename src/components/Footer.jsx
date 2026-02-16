import React from "react";
import Logo from "../assets/images/richa logo.png";
import { FaArrowUpLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-fit bg-zinc-300">
      <div className="container md:flex-row flex flex-col py-10">
        <div className="md:w-1/2 w-full flex flex-col gap-8 justify-between">
          <div className="flex items-center gap-4  px-4 py-3 rounded-md w-fit">
            <img
              src={Logo}
              className="w-14 md:w-16 object-contain drop-shadow"
              alt="Richa logo"
            />
            <div className="leading-tight">
              <p className="font-OnStageSerial font-bold text-xl md:text-2xl text-[#c1272d] tracking-[0.08em]">
                RICHA INDUSTRIES LIMITED
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-900">
                Excellence in engineering & manufacturing
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-between gap-5">
          <div className="links flex flex-col font-NueueMontreal mt-10 md:mt-0">
            <h1 className="font-NueueMontreal text-black text-3xl md:text-4xl mb-4 border-b-[1px] border-zinc-700 pb-4">
              Connect with us
            </h1>
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (item, index) => (
                <a
                  className="flex items-center gap-2 underline underline-offset-4 decoration-slate-500 text-black"
                  key={index}
                >
                  {item}{" "}
                  <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px] text-sm text-black" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
