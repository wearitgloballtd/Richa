import React from 'react';
import { motion } from 'framer-motion';

const RevealContent = ({ data }) => {
    if (!data) return null;

    return (
        <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100"
        >
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 font-['FoundersGroteskCondensed'] uppercase leading-none">{data.title}</h3>

            {data.points ? (
                <ul className="text-left space-y-4 inline-block max-w-3xl mx-auto">
                    {data.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-gray-700 text-lg md:text-xl font-['NeueMontreal'] leading-relaxed">
                            <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-700 text-xl font-['NeueMontreal'] leading-relaxed max-w-3xl mx-auto">{data.desc}</p>
            )}

        </motion.div>
    );
};

export default RevealContent;
