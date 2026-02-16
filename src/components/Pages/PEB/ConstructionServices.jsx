import React, { useState } from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { BsArrowRight, BsArrowDownRight } from 'react-icons/bs';
import bgImage from '../../../assets/images/AboutUs.jpg';
import serviceImg1 from '../../../assets/images/qualityAssurence.png';
import serviceImg2 from '../../../assets/images/featureSection/PEB.jpg';
import serviceImg3 from '../../../assets/images/featureSection/TEXTILE.jpg';

const infrastructureFeatures = [
    {
        id: "01",
        title: "Production Optimization",
        description: "Sprawling production area optimised for large-scale fabrication and assembly, ensuring we can meet high-volume demands without compromising on speed or quality.",
        bullet: "Optimised for large-scale fabrication",
        image: serviceImg1
    },
    {
        id: "02",
        title: "Dedicated Workflows",
        description: "Dedicated zones for cutting, welding, assembly, painting, and quality control to maintain contamination-free and streamlined workflows throughout the manufacturing process.",
        bullet: "Contamination-free and streamlined workflows",
        image: serviceImg2
    },
    {
        id: "03",
        title: "Advanced Utilities",
        description: "Equipped with advanced utilities, including energy-efficient systems and material handling equipment, reducing our carbon footprint while maximizing operational output.",
        bullet: "Energy-efficient systems and material handling",
        image: serviceImg3
    },
    {
        id: "04",
        title: "Innovation Labs",
        description: "In-house engineering, design studios, and testing labs allow for continuous innovation and strict compliance with international standards.",
        bullet: "Innovation and compliance",
        image: serviceImg1
    },
];

const ConstructionServices = () => {
    const [activeFeature, setActiveFeature] = useState(infrastructureFeatures[0]);

    return (
        <section className="relative w-full py-20 px-6 md:px-20 font-['NeueMontreal'] bg-gray-50 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center gap-2 text-[#BB2929] font-semibold text-sm uppercase tracking-widest">
                        <span>INFRASTRUCTURE</span>
                        <span className="text-lg">↘</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-FoundersGroteskCondensed leading-tight text-black max-w-4xl">
                        Our State of the Art Infrastructure
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                        Richa Industries operates a modern, fully integrated PEB manufacturing facility designed for efficient, high-quality production of steel building components.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">

                    {/* Left Column: Feature List */}
                    <div className="flex flex-col w-full lg:w-1/3 gap-4">
                        {infrastructureFeatures.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature)}
                                className={`flex items-center justify-between px-6 py-5 rounded-sm transition-all duration-300 group text-left ${activeFeature.id === feature.id
                                    ? 'bg-[#BB2929] text-white shadow-lg scale-[1.02]'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:pl-7'
                                    }`}
                            >
                                <span className={`font-semibold text-sm md:text-base ${activeFeature.id === feature.id ? 'font-bold' : ''}`}>
                                    {feature.title}
                                </span>
                                {activeFeature.id === feature.id ? (
                                    <FaArrowRight className="text-xs" />
                                ) : (
                                    <BsArrowDownRight className="text-xs text-gray-400 group-hover:text-[#BB2929]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Center Column: Image Card */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="relative bg-[#1A1A1A] w-full max-w-md aspect-[3/4] p-6 flex flex-col justify-between rounded-sm shadow-xl">
                            {/* Inner Image Container */}
                            <div className="w-full h-3/4 overflow-hidden relative border border-white/10">
                                <img
                                    key={activeFeature.id}
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                />
                                {/* Red Dot Decoration */}
                                <div className="absolute top-2 right-2 w-1 h-1 bg-red-500 rounded-full"></div>
                            </div>

                            {/* Card Footer Info */}
                            <div className="flex items-end justify-between text-white/40 font-FoundersGroteskCondensed mt-4">
                                <span className="text-sm tracking-widest uppercase">FACILITY</span>
                                <span className="text-5xl md:text-6xl leading-none text-white/20 font-bold">{activeFeature.id}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6 lg:pl-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-black font-FoundersGroteskCondensed">
                            Facility Highlights
                        </h3>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">{activeFeature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {activeFeature.description}
                            </p>

                            <div className="flex items-start gap-3 mb-8">
                                <div className="w-4 h-4 rounded-full border-2 border-[#BB2929] flex items-center justify-center mt-1 flex-shrink-0">
                                    <div className="w-1.5 h-[1px] bg-[#BB2929]"></div>
                                </div>
                                <span className="text-black font-medium text-sm">{activeFeature.bullet}</span>
                            </div>

                            <button className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-4 flex items-center gap-3 uppercase font-bold text-xs tracking-widest transition-all w-fit rounded-sm group">
                                VIEW FACILITIES
                                <BsArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ConstructionServices;
