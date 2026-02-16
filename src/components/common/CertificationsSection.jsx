import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CertificationsSection = ({
    imageSrc,
    isoText = "ISO Certified",
    subtitle = "Quality & Standards",
    title,
    description,
    listItems = [],
    footerText,
    accentColor = "#BB2929",
    pinLineClass = "w-[180px] -left-[180px]", // Default match Textile
    buttonText = "View Certification",
    onButtonClick
}) => {
    return (
        <section className="w-full bg-[#f1f1f1] py-24 px-8 lg:px-20 font-['NeueMontreal'] border-t border-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side: Image Content */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="w-full aspect-[4/3] overflow-hidden relative shadow-2xl rounded-lg">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    {/* Decorative Year/Tag */}
                    <div className="absolute -left-16 lg:-left-20 top-0 hidden lg:flex flex-col items-center gap-4 h-full justify-center">
                        <span className="text-xs font-bold uppercase tracking-widest -rotate-90 text-gray-400 whitespace-nowrap">
                            {isoText}
                        </span>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col lg:pl-16">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest font-FoundersGroteskCondensed" style={{ color: accentColor }}>
                            {subtitle}
                        </h4>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-semibold uppercase leading-[0.9] mb-8 font-FoundersGroteskCondensed text-black relative">
                        {/* Pin Line */}
                        <div className={`absolute top-[60%] h-[1px] bg-[#333] hidden lg:flex items-center ${pinLineClass}`}>
                            <div className="w-3 h-3 rounded-full border border-[#333] absolute -left-1.5 bg-transparent"></div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: title }} />
                    </h1>

                    <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>{description}</p>

                        <div
                            className="pl-4 border-l-[1px] space-y-3"
                            style={{ borderColor: accentColor }}
                        >
                            {listItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }}></span>
                                    <p className="m-0 text-base">{item}</p>
                                </div>
                            ))}
                        </div>

                        {footerText && (
                            <p className="font-medium text-black pt-2">
                                {footerText}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <div className="mt-10">
                        <button
                            className="flex items-center gap-6 px-6 py-2 border border-black/30 rounded-full group hover:bg-black/30 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
                            onClick={onButtonClick}
                        >
                            <span
                                className="font-medium text-black group-hover:text-[var(--accent-color)] transition-colors duration-300"
                                style={{ '--accent-color': accentColor }}
                            >
                                {buttonText}
                            </span>
                            <div
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-white group-hover:text-[var(--accent-color)] transition-colors duration-300"
                                style={{ '--accent-color': accentColor }}
                            >
                                <FaArrowRight className="text-xs transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CertificationsSection;
