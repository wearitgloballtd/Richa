import React from 'react';
import { motion } from 'framer-motion';

const PulseDot = ({ isActive, onClick }) => {
    return (
        <div className="relative flex items-center justify-center cursor-pointer group w-12 h-12" onClick={onClick}>
            {/* Pulse Ring - Only visible when NOT active */}
            {!isActive && (
                <motion.div
                    animate={{
                        scale: [1, 2.5],
                        opacity: [0.6, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-full h-full rounded-full bg-[#bb2929]"
                />
            )}

            {/* Core Dot - Visible always */}
            <div className={`relative z-10 w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 shadow-lg ${isActive ? 'bg-[#bb2929] scale-110' : 'bg-[#bb2929] group-hover:bg-golden'}`}></div>

            {/* Active Glow/Ring */}
            {isActive && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-50 w-full h-full animate-pulse"></div>
            )}

            {/* Hover Glow */}
            <div className={`absolute inset-0 rounded-full blur-md bg-blue-400/50 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}></div>
        </div>
    );
};

export default PulseDot;
