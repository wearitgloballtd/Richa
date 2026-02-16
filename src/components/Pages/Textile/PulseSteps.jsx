import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PulseDot from './PulseDot';
import RevealContent from './RevealContent';

const stepsData = [
    {
        id: 1,
        title: "Why Choose Richa Industries?",
        points: [
            "Integrated end-to-end production for faster turnaround and consistent quality",
            "High monthly capacities: 200 tons knitting + 600 tons processing",
            "Customisation expertise from fibre selection to special finishes",
            "Sustainable, cost-effective solutions with world-class technology",
            "Revitalised under new ownership, focused on innovation and client success"
        ]
    },
    {
        id: 2,
        title: "Our Vision",
        desc: "To constitute a significant portion of the Indian textile economy by delivering premium products and fostering long-term relationships through trust and reliability."
    },
    {
        id: 3,
        title: "Sustainable Manufacturing",
        desc: "Implementing advanced eco-friendly dyes, waste water management, and energy conservation techniques to minimize our carbon footprint."
    },
    {
        id: 4,
        title: "Global Reach",
        desc: "We are expanding our horizons globally, catering to international fashion brands by aligning with global standards of quality and ethical manufacturing."
    }
];

const PulseSteps = () => {
    const [activeDots, setActiveDots] = useState([]);

    const handleDotClick = (index) => {
        // Toggle the dot state allowing multiple to be open
        setActiveDots(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };


    return (
        <>
            {/* Header Section - Moved Completely Outside */}
            <div className="w-full bg-white py-16 font-['NeueMontreal']">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#bb2929] font-bold uppercase tracking-widest mb-3 font-FoundersGroteskCondensed text-sm"
                    >
                        Reveal More
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-bold font-FoundersGroteskCondensed text-black mb-6 uppercase leading-none"
                    >
                        Why Choose Richa Industries?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore our integrated production, sustainable practices, and global standards that make us a preferred partner in the textile industry.
                    </motion.p>
                </div>
            </div>

            {/* Steps Container Section - Full Width Background */}
            <div className="relative w-full overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-50"
                    >
                        {/* Using a reliable direct link for the pink fabric video */}
                        <source src="https://www.pexels.com/download/video/30183205/" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content */}
                <section className="relative z-10 w-full py-32">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stepsData.map((step, index) => {
                                const isActive = activeDots.includes(index);
                                return (
                                    <div
                                        key={step.id}
                                        className={`relative flex flex-col items-center justify-center min-h-[500px] transition-all duration-500 rounded-3xl p-4 md:p-6 group cursor-pointer ${isActive ? 'bg-white shadow-xl' : 'hover:scale-[1.02]'}`}
                                        onClick={() => handleDotClick(index)}
                                    >
                                        {/* Large Background Number - Centered Absolute */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl z-0">
                                            <span className={`text-[12rem] lg:text-[14rem] font-bold leading-none font-FoundersGroteskCondensed transition-all duration-500 ${isActive ? 'text-gray-100 scale-110' : 'text-gray-200'}`}>
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Interactive Layout - Flex Column Center */}
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">

                                            {/* Title - Reveals Above */}
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="text-center"
                                                    >
                                                        <h3 className="text-2xl font-bold uppercase font-FoundersGroteskCondensed leading-none text-gray-900 mx-auto max-w-[240px]">
                                                            {step.title}
                                                        </h3>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Dot - The Anchor */}
                                            <div className="shrink-0 z-20 py-2">
                                                <PulseDot
                                                    isActive={isActive}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDotClick(index);
                                                    }}
                                                />
                                            </div>

                                            {/* Description / Points - Reveals Below */}
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="text-center"
                                                    >
                                                        {step.points ? (
                                                            <ul className="text-left space-y-2 text-sm max-w-[260px] mx-auto text-gray-600 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                                                                {step.points.map((p, i) => (
                                                                    <li key={i} className="flex gap-2 leading-relaxed">
                                                                        <span className="text-blue-500 font-bold shrink-0 mt-[2px]">›</span>
                                                                        {p}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-gray-600 text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
                                                                {step.desc}
                                                            </p>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PulseSteps;
