import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import videoBg from '../../../assets/videos/peb-background.mov';
import hookImage from '../../../assets/crane.png';

const ConstructionHero = () => {
    return (
        <div className="w-full relative bg-white overflow-hidden min-h-[140vh] pb-20 ">
            {/* Background Section with Multi-point Angled Clip Path */}
            <div
                className="relative z-20 w-full h-[110vh]"
                style={{
                    // Polygon points: Top-Left, Top-Right, Bottom-Right (Higher), Bottom-Pivot (Low), Bottom-Left (Higher)
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 10% 100%, 0 85%)'
                }}
            >
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={videoBg} type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto -mt-32">

                    {/* Vision Label */}
                    <div className="flex items-center gap-4 text-white uppercase tracking-[0.2em] text-sm font-medium mb-4">
                        <span>Our Vision</span>
                        <div className="w-16 h-[1px] bg-white opacity-50"></div>
                    </div>

                    {/* Main Headline */}
                    <div className="flex flex-col mb-8">
                        <h1 className="text-white text-6xl md:text-7xl lg:text-7xl font-bold font-FoundersGroteskCondensed uppercase leading-[0.8] drop-shadow-lg">
                            Quality Construction
                        </h1>
                        <h1
                            className="text-transparent text-6xl md:text-7xl lg:text-7xl font-bold font-FoundersGroteskCondensed uppercase leading-[0.8] drop-shadow-lg"
                            style={{ WebkitTextStroke: '2px white' }}
                        >
                            & Honest Service
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="font-['NeueMontreal'] text-gray-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                        We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
                    </p>

                    {/* Call to Action Button */}


                </div>

                {/* Large Outlined Text Background "CONSTRUCT" */}
                {/* Rotated to match the slope from 25% (100%h) to 100% (85%h) */}
                <div
                    className="absolute bottom-[3%] right-[10%] z-0 select-none opacity-20 pointer-events-none"
                    style={{ transform: 'rotate(-4deg)' }}
                >
                    <h1
                        className="text-[10rem] md:text-[18rem] font-bold text-transparent font-FoundersGroteskCondensed uppercase tracking-tighter leading-none"
                        style={{ WebkitTextStroke: '2px white' }}
                    >
                        R I L'S   P E B
                    </h1>
                </div>

            </div>

            {/* Floating Crane Hook Image */}
            {/* Hanging from the pivot point at 25% left, 100% of the image height (which is 110vh) */}
            {/* Adjusted position to align exactly with the cut vertex and appear behind */}
            <div
                className="absolute left-[10%] z-10 w-24 md:w-40 lg:w-48 origin-top animate-[float_4s_ease-in-out_infinite]"
                style={{
                    top: 'calc(97vh - 50px)', // Align with the bottom tip (110vh) and pull up slightly to tuck wires behind
                    transform: 'translateX(-50%)' // Center horizontally on the point
                }}
            >
                <img
                    src={hookImage}
                    alt="Crane Hook"
                    className="w-full h-auto drop-shadow-2xl"
                    style={{ marginTop: '-10%' }} // Pull up slightly so the wire connects
                />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(20px); }
                }
            `}</style>
        </div>
    );
};

export default ConstructionHero;
