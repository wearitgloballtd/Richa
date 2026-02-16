import React from 'react';
import { FaPhoneAlt, FaPlay, FaArrowRight } from 'react-icons/fa';

import pebWorker from '../../../assets/images/featureSection/PEB.jpg';
import concreteWorker from '../../../assets/images/qualityAssurence.png'; // Placeholder for concrete worker
import profilePic from '../../../assets/images/TeamMembers/bhudev.png';

const ConstructionAbout = () => {
    return (
        <section className="w-full bg-white px-6 md:px-20 font-['NeueMontreal'] text-black overflow-hidden relative z-30">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">

                {/* Left Column Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 z-10">
                    {/* About Us Label */}
                    <div className="flex items-center gap-2 text-[#BB2929] font-semibold text-sm uppercase tracking-widest">
                        <span>PEB Division</span>
                        <span className="text-lg">↘</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-6xl font-bold font-FoundersGroteskCondensed leading-[1] max-w-xl">
                        High Performance Steel Structures
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed max-w-lg text-lg">
                        At Richa Industries Limited, our Pre-Engineered Buildings (PEB) Division delivers innovative, high performance steel structures tailored for industrial, commercial, and infrastructure needs.
                    </p>

                    {/* List Items */}
                    <div className="flex flex-col gap-4 mt-2">
                        {[
                            "Specialised design, fabrication, supply, and erection",
                            "End-to-end solutions: Speed, cost-efficiency, durability"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded-full border-2 border-[#BB2929] flex items-center justify-center">
                                    <div className="w-1.5 h-[1px] bg-[#BB2929]"></div>
                                </div>
                                <span className="text-black font-medium text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact & Signature Row */}
                    <div className="flex flex-wrap items-center gap-8 mt-6">
                        {/* Contact Box */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#BB2929] flex items-center justify-center text-white text-xl rounded-sm">
                                <FaPhoneAlt />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">+91 123 456 7890</span>
                                <span className="text-gray-500 text-sm">Need Help?</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-12 bg-gray-300 hidden sm:block"></div>

                        {/* Signature Block */}
                        <div className="flex items-center gap-4">
                            <img src={profilePic} alt="Founder" className="w-12 h-12 rounded-full object-cover grayscale" />
                            <div className="flex flex-col">
                                {/* Placeholder Signature using script font if available or italic */}
                                <span className="font-serif italic text-2xl leading-none text-gray-800">Richa Industries</span>
                                <span className="text-gray-500 text-xs">Excellence in Construction</span>
                            </div>
                        </div>
                    </div>

                    {/* Video Thumbnail (Bottom Left) */}
                    <div className="relative mt-12 w-full max-w-lg aspect-video overflow-hidden rounded-sm group cursor-pointer">
                        <img src={concreteWorker} alt="Worker smoothing concrete" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#BB2929] pl-1">
                                    <FaPlay className="text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-20">

                    {/* Angled Image */}
                    <div className="relative w-full max-w-md ml-auto">
                        <div
                            className="w-full aspect-[3/4] object-cover bg-gray-200 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 70% 0, 100% 20%, 100% 100%, 0 100%)' }} // Angled top-right corner
                        >
                            <img src={pebWorker} alt="Construction Worker" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Bottom Text & Button */}
                    <div className="flex flex-col gap-6 max-w-md ml-auto mt-4">
                        <p className="text-gray-500 leading-relaxed text-sm text-justify">
                            Equipped with state-of-the-art manufacturing facilities and advanced engineering technologies, our operations ensure precision, quality, and sustainability. Our PEB plant in Kashipur, Uttarakhand, supports large-scale production, enabling us to meet diverse project demands while upholding excellence in every structure delivered under our renewed ownership.
                        </p>

                        <button className="bg-[#BB2929] hover:bg-[#9b2222] text-white px-8 py-4 flex items-center justify-between gap-4 uppercase font-bold text-sm tracking-widest transition-all w-full sm:w-auto rounded-sm">
                            <span>DISCOVER PROJECTS</span>
                            <FaArrowRight className="text-xs -rotate-45" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ConstructionAbout;
