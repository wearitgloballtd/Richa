import React from "react";
import Logo from "../assets/images/richa logo.png";
import { FaArrowUpLong, FaPhone, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-fit bg-zinc-300 border-t border-zinc-400">
      <div className="max-w-screen-2xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="lg:w-1/4 flex flex-col gap-6">
            <div className="flex items-center gap-4 bg-zinc-200/50 px-4 py-3 rounded-md w-fit backdrop-blur-sm">
              <img
                src={Logo}
                className="w-14 md:w-16 object-contain drop-shadow"
                alt="Richa logo"
              />
              <div className="leading-tight">
                <p className="font-OnStageSerial font-bold text-xl md:text-2xl text-[#c1272d] tracking-[0.08em]">
                  RICHA INDUSTRIES LIMITED
                </p>
                <p className="text-xs uppercase font-bold text-zinc-900">
                  Don't Just Build... Create!
                </p>
              </div>
            </div>
            <p className="font-NueueMontreal text-sm text-zinc-700 leading-relaxed max-w-xs">
              Building the future with sustainable and innovative engineering
              solutions.
            </p>
          </div>

          {/* Addresses Section */}
          <div className="lg:w-2/4">
            <h3 className="font-NueueMontreal text-lg text-black font-bold uppercase tracking-wider mb-6 border-b border-zinc-500 pb-2 w-fit">
              Our Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Address 1 */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[#c1272d] text-base">
                  Corporate Office
                </h4>
                <p className="text-sm font-NueueMontreal text-zinc-800 leading-relaxed">
                  Plot No-29, DLF Industrial Area , Phase-II , Faridabad-121013,
                  Haryana India.
                </p>
              </div>
              {/* Address 2 */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[#c1272d] text-base">
                  Textile Plant
                </h4>
                <p className="text-sm font-NueueMontreal text-zinc-800 leading-relaxed">
                  VPO Kanwara, Kheri Jasana Road, Sec-95, Faridabad -121101,
                  Haryana, India
                </p>
              </div>
              {/* Address 3 */}
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[#c1272d] text-base">
                  PEB Plant
                </h4>
                <p className="text-sm font-NueueMontreal text-zinc-800 leading-relaxed">
                  7th km Stone, NH-121, Ram Nagar Road, Kashipur - 244713,
                  Uttarakhand, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="lg:w-1/4 flex flex-col gap-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-NueueMontreal text-lg font-bold uppercase tracking-wider border-b border-zinc-500 pb-2 w-fit text-black">
                Get in Touch
              </h3>
              <div className="flex items-center gap-3 text-zinc-800">
                <FaPhone className="text-[#c1272d] text-sm" />
                <p className="text-sm font-NueueMontreal font-medium hover:text-[#c1272d] transition-colors cursor-pointer">
                  +91 97112-69111
                </p>
              </div>
              <div className="flex items-center gap-3 text-zinc-800">
                <FaEnvelope className="text-[#c1272d] text-sm" />
                <p className="text-sm font-NueueMontreal font-medium hover:text-[#c1272d] transition-colors cursor-pointer">
                  info@richa.in
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h3 className="font-NueueMontreal text-lg font-bold uppercase tracking-wider border-b border-zinc-500 pb-2 w-fit text-black">
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "Facebook",
                    link: "https://www.facebook.com/richaindustriesltd/",
                  },
                  {
                    name: "Youtube",
                    link: "https://www.youtube.com/@RichaIndustriesLimited",
                  },
                  {
                    name: "Instagram",
                    link: "https://www.instagram.com/richaindustries.ltd?igsh=emk3c2k0NWVtM3hy",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/company/richa-industries-limited/",
                  },
                ].map((item, index) => (
                  <a
                    className="flex items-center gap-1 text-sm font-NueueMontreal font-medium text-zinc-800 hover:text-[#c1272d] transition-colors group"
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <FaArrowUpLong className="rotate-45 text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-NueueMontreal text-zinc-600">
          <p>
            © {new Date().getFullYear()} Richa Industries Limited. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c1272d] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#c1272d] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
