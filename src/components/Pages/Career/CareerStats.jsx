import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGlobeAmericas } from "react-icons/fa";

const CareerStats = () => {
    const containerRef = useRef(null);
    const tl = useRef(null);

    useGSAP(
        () => {
            // Set initial state for hidden avatars: pushed down and invisible
            gsap.set(".avatar-hidden", { opacity: 0, y: 60, scale: 0.5 });

            // Create the timeline
            tl.current = gsap.timeline({ paused: true })
                .to(".avatar-hidden", {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "back.out(1.7)"
                });
        },
        { scope: containerRef }
    );

    return (
        <div className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-semibold text-[#0a192f] mb-6 font-['FoundersGroteskCondensed'] tracking-tight leading-tight">
                        What makes Richa feel different?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-['Neue_Montreal']">
                        It’s the people. The energy. The way we actually care about each other and the work we do.
                        <br className="hidden md:block" />
                        We laugh in meetings (yes, really), we cheer when someone nails a tough deadline, we share knowledge like it’s free coffee, and we genuinely want everyone to go home feeling good about their day.
                    </p>
                    <button className="bg-[#e5e5e5] text-black px-8 py-3 rounded-full font-medium hover:bg-[#d4d4d4] transition-colors duration-300 font-['Neue_Montreal']">
                        All openings
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Card 1: Team Members - Hover Animation */}
                    <div
                        ref={containerRef}
                        onMouseEnter={() => tl.current.play()}
                        onMouseLeave={() => tl.current.reverse()}
                        className="bg-[#f4f4f5] rounded-3xl p-8 relative min-h-[400px] overflow-hidden flex flex-col justify-between cursor-pointer group"
                    >
                        <h3 className="text-3xl font-medium text-[#0a192f] font-['Neue_Montreal'] z-10 transition-transform duration-300 group-hover:-translate-y-2">
                            40+ team <br /> members
                        </h3>

                        {/* Avatars Container */}
                        <div className="absolute inset-0 top-24 pointer-events-none">
                            {/* Static Visible Avatars (Initial Group) */}
                            <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full absolute bottom-8 left-8 border-2 border-white z-10" alt="Avatar 1" />
                            <img src="https://i.pravatar.cc/100?img=3" className="w-14 h-14 rounded-full absolute bottom-12 left-28 border-2 border-white z-10" alt="Avatar 3" />
                            <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full absolute bottom-16 left-48 border-2 border-white z-10" alt="Avatar 5" />
                            <img src="https://i.pravatar.cc/100?img=6" className="w-16 h-16 rounded-full absolute bottom-10 right-10 border-2 border-white z-10" alt="Avatar 6" />
                            <img src="https://i.pravatar.cc/100?img=9" className="w-12 h-12 rounded-full absolute bottom-20 right-32 border-2 border-white z-10" alt="Avatar 9" />
                            <img src="https://i.pravatar.cc/100?img=11" className="w-14 h-14 rounded-full absolute bottom-8 left-1/2 -translate-x-1/2 border-2 border-white z-10" alt="Avatar 11" />

                            {/* Animated Hidden Avatars (Appear on Hover) */}
                            <img src="https://i.pravatar.cc/100?img=2" className="avatar-hidden w-10 h-10 rounded-full absolute bottom-24 left-16 border-2 border-white grayscale opacity-70" alt="Hidden 2" />
                            <img src="https://i.pravatar.cc/100?img=4" className="avatar-hidden w-10 h-10 rounded-full absolute bottom-32 left-8 border-2 border-white grayscale opacity-60" alt="Hidden 4" />
                            <img src="https://i.pravatar.cc/100?img=8" className="avatar-hidden w-10 h-10 rounded-full absolute bottom-36 right-16 border-2 border-white grayscale opacity-80" alt="Hidden 8" />
                            <img src="https://i.pravatar.cc/100?img=10" className="avatar-hidden w-8 h-8 rounded-full absolute bottom-4 right-28 border-2 border-white grayscale" alt="Hidden 10" />
                            <img src="https://i.pravatar.cc/100?img=12" className="avatar-hidden w-10 h-10 rounded-full absolute bottom-28 left-[45%] border-2 border-white grayscale opacity-50" alt="Hidden 12" />

                            {/* Extra Hidden Avatars for nicer "filling in" effect */}
                            <img src="https://i.pravatar.cc/100?img=15" className="avatar-hidden w-9 h-9 rounded-full absolute bottom-36 left-36 border-2 border-white" alt="Hidden 15" />
                            <img src="https://i.pravatar.cc/100?img=20" className="avatar-hidden w-11 h-11 rounded-full absolute bottom-44 right-44 border-2 border-white" alt="Hidden 20" />
                            <img src="https://i.pravatar.cc/100?img=25" className="avatar-hidden w-8 h-8 rounded-full absolute bottom-40 left-1/4 border-2 border-white opacity-80" alt="Hidden 25" />
                        </div>

                        {/* Green line decoration */}
                        <div className="absolute top-[85px] left-[230px] right-0 h-[1px] bg-gradient-to-r from-green-400 to-transparent opacity-50 hidden md:block"></div>
                    </div>

                    {/* Card 2: Countries */}
                    <div className="bg-[#f4f4f5] rounded-3xl p-8 relative min-h-[400px] flex flex-col overflow-hidden group">
                        <h3 className="text-3xl font-medium text-[#0a192f] font-['Neue_Montreal'] leading-tight mb-8 relative z-10">
                            8 countries
                            <br />
                            represented
                            <br />
                            (so far)
                        </h3>
                        {/* Green Line */}
                        <div className="absolute top-[85px] left-[220px] right-0 h-[1px] bg-gradient-to-r from-green-400 to-transparent opacity-50 hidden md:block"></div>

                        {/* Content area for pills */}
                        <div className="flex-1 relative flex flex-col justify-end pb-8">
                            {/* Background Map Placeholder */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain grayscale pointer-events-none"></div>

                            {/* Row 1 - Marquee Left */}
                            <div className="flex gap-4 mb-4 overflow-hidden mask-linear-fade relative z-10 w-full">
                                <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee paused group-hover:running">
                                    {["Mexico 🇲🇽", "Canada 🇨🇦", "Brazil 🇧🇷", "India 🇮🇳", "Philippines 🇵🇭"].map((item, i) => (
                                        <span key={i} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                    {["Mexico 🇲🇽", "Canada 🇨🇦", "Brazil 🇧🇷", "India 🇮🇳", "Philippines 🇵🇭"].map((item, i) => (
                                        <span key={`dup-${i}`} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee paused group-hover:running" aria-hidden="true">
                                    {["Mexico 🇲🇽", "Canada 🇨🇦", "Brazil 🇧🇷", "India 🇮🇳", "Philippines 🇵🇭"].map((item, i) => (
                                        <span key={i} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                    {["Mexico 🇲🇽", "Canada 🇨🇦", "Brazil 🇧🇷", "India 🇮🇳", "Philippines 🇵🇭"].map((item, i) => (
                                        <span key={`dup-${i}`} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Row 2 - Marquee Right (or Slower Left) */}
                            <div className="flex gap-4 overflow-hidden mask-linear-fade relative z-10 w-full">
                                <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee-slower paused group-hover:running">
                                    <span className="bg-[#e5e5e5] px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                        More to come <FaGlobeAmericas className="text-gray-500" />
                                    </span>
                                    {["Italy 🇮🇹", "Canada 🇨🇦", "Philippines 🇵🇭", "USA 🇺🇸", "UK 🇬🇧"].map((item, i) => (
                                        <span key={i} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                    <span className="bg-[#e5e5e5] px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                        More to come <FaGlobeAmericas className="text-gray-500" />
                                    </span>
                                    {["Italy 🇮🇹", "Canada 🇨🇦", "Philippines 🇵🇭", "USA 🇺🇸", "UK 🇬🇧"].map((item, i) => (
                                        <span key={`dup-${i}`} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee-slower paused group-hover:running" aria-hidden="true">
                                    <span className="bg-[#e5e5e5] px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                        More to come <FaGlobeAmericas className="text-gray-500" />
                                    </span>
                                    {["Italy 🇮🇹", "Canada 🇨🇦", "Philippines 🇵🇭", "USA 🇺🇸", "UK 🇬🇧"].map((item, i) => (
                                        <span key={i} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                    <span className="bg-[#e5e5e5] px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                        More to come <FaGlobeAmericas className="text-gray-500" />
                                    </span>
                                    {["Italy 🇮🇹", "Canada 🇨🇦", "Philippines 🇵🇭", "USA 🇺🇸", "UK 🇬🇧"].map((item, i) => (
                                        <span key={`dup-${i}`} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-['Neue_Montreal'] text-gray-700 whitespace-nowrap">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CareerStats;
