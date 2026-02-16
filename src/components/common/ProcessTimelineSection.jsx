import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimelineSection = ({
    headerContent,
    data = [],
    accentColor = "#BB2929",
    backgroundImage = "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    renderItemContent // Optional function (item, isLeft) => ReactNode
}) => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const dotRefs = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const line = lineRef.current;

        // Clear any existing triggers
        ScrollTrigger.getAll().forEach(st => st.kill());

        // Initial Setup
        const sections = gsap.utils.toArray('.timeline-section');

        // Animate the line drawing down based on scroll
        gsap.to(line, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top 55%',
                end: 'bottom center',
                scrub: 0,
            }
        });

        // Animate each section
        sections.forEach((section, index) => {
            // Content animation (Fade In + Up)
            const content = section.querySelector('.timeline-content');

            gsap.fromTo(content,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Dot animation (Scale/Morph logic)
            const dot = dotRefs.current[index];
            if (dot) {
                gsap.to(dot, {
                    scale: 1.5,
                    backgroundColor: accentColor,
                    boxShadow: `0 0 20px ${accentColor}66`, // Adding 66 for opacity
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: section,
                        start: 'center center',
                        end: 'bottom center',
                        toggleActions: 'play none none reverse'
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [accentColor]);

    return (
        <div className="w-full bg-white font-['NeueMontreal']">
            {/* Header Section */}
            {headerContent && (
                <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12 text-center">
                    {headerContent}
                </div>
            )}

            {/* Timeline Section */}
            <section
                ref={containerRef}
                className="relative w-full bg-[#f9f9f9] text-black py-24 overflow-hidden rounded-t-3xl rounded-b-3xl mb-20"
                style={{ minHeight: '100vh' }}
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-white/60 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9] via-transparent to-[#f9f9f9]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-10">

                    {/* Center Line Container (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -ml-[0.5px] h-full bg-gray-300">
                        {/* Animated Progress Line */}
                        <div
                            ref={lineRef}
                            className="w-full absolute top-0 left-0"
                            style={{ backgroundColor: accentColor, height: '0%' }}
                        ></div>
                    </div>

                    {/* Mobile Left Line - Fallback for mobile */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px h-full bg-gray-200"></div>


                    {/* Timeline Sections */}
                    <div className="flex flex-col gap-24 lg:gap-48 py-20">
                        {data.map((item, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`timeline-section relative flex flex-col lg:flex-row w-full items-start lg:items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}
                                >
                                    {/* Dot on the center line - Desktop */}
                                    <div
                                        className="hidden lg:block absolute left-1/2 -ml-[4px] w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 z-20"
                                        ref={el => dotRefs.current[index] = el}
                                        style={{ top: '50%', transform: "translateY(-50%)" }}
                                    ></div>

                                    {/* Dot - Mobile */}
                                    <div
                                        className="lg:hidden absolute left-6 w-3 h-3 rounded-full z-20 -ml-[5px] mt-2"
                                        style={{ backgroundColor: accentColor }}
                                    ></div>

                                    {/* Content Block */}
                                    <div className={`timeline-content w-full lg:w-[40%] pl-12 lg:pl-0 ${isLeft ? 'lg:text-right lg:pr-24' : 'lg:text-left lg:pl-24'}`}>
                                        {renderItemContent ? renderItemContent(item, isLeft) : (
                                            <>
                                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 font-['FoundersGroteskCondensed']">
                                                    {item.subtitle}
                                                </h4>
                                                <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-6 font-['FoundersGroteskCondensed'] text-black uppercase">
                                                    {item.title}
                                                </h2>
                                                <p className="text-sm lg:text-base text-gray-700 font-['NeueMontreal'] leading-relaxed max-w-sm ml-auto mr-auto lg:mx-0">
                                                    {item.desc}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProcessTimelineSection;
