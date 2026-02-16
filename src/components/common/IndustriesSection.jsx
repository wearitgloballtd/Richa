import React from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = ({
    title,
    subtitle,
    description,
    footerText,
    accentColor = "#BB2929",
    items = [],
    gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}) => {
    return (
        <section className="w-full bg-white py-20 px-8 lg:px-20 font-['NeueMontreal'] overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold uppercase tracking-wider mb-3 font-FoundersGroteskCondensed"
                    style={{ color: accentColor }}
                >
                    {subtitle}
                </motion.h3>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-black text-5xl lg:text-7xl font-bold uppercase tracking-tight font-FoundersGroteskCondensed mb-6"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                    {description}
                </motion.p>
            </div>

            <div className={`max-w-7xl mx-auto relative ${items.length > 4 ? 'px-4 lg:px-0 max-w-[90rem]' : ''}`}>
                {/* Connecting Line (Dashed) - Hidden on mobile */}
                <div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] border-t-2 border-dashed border-gray-300 -z-0"></div>

                <div className={`grid ${gridClassName} gap-8 lg:gap-12 relative z-10`}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            {/* Circle Wrapper with Rotating Dashed Border */}
                            <div className="relative mb-8 w-[220px] h-[220px] flex items-center justify-center">
                                {/* Rotating Outer Dashed Circle */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-[2px] border-dashed"
                                    style={{ borderColor: accentColor }}
                                ></motion.div>

                                {/* Inner Solid Circle with Image */}
                                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl relative z-10 bg-white group-hover:scale-105 transition-transform duration-300 border-4 border-white">
                                    <div className="w-full h-full relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay gradient for text readability if needed, or subtle tint */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                </div>

                                {/* Badge Number - Positioned Top Left (approx 10:00 position) */}
                                <div
                                    className="absolute top-[20px] left-[20px] w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg z-20"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    <span className="font-bold font-FoundersGroteskCondensed text-xl">0{item.id}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl text-black font-bold uppercase font-FoundersGroteskCondensed mb-3 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                                style={{ '--hover-color': accentColor }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed px-4">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mt-20">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-gray-500 font-medium italic"
                >
                    "{footerText}"
                </motion.p>
            </div>
        </section>
    );
};

export default IndustriesSection;
