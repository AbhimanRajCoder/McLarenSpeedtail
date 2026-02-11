"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Features() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-pagani-gold/40" />
                    <span className="font-orbitron text-[10px] tracking-[0.5em] text-pagani-gold/50 uppercase">
                        Innovation
                    </span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-pagani-gold/40" />
                </div>
                <h2 className="font-orbitron text-3xl md:text-5xl font-bold tracking-wider text-gold-gradient">
                    TECHNOLOGY
                </h2>
            </div>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {carData.features.map((feature) => (
                    <motion.div
                        key={feature.title}
                        variants={cardVariants}
                        className="relative p-8 border border-pagani-gold/10 bg-carbon-gray/20 hover:bg-carbon-gray/40 hover:border-pagani-gold/25 transition-all duration-500 group cursor-default"
                    >
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />
                        <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />
                        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />

                        {/* Icon */}
                        <div className="mb-6 text-3xl text-pagani-gold/60 group-hover:text-pagani-gold transition-colors duration-500">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="font-orbitron text-sm tracking-[0.2em] text-white/90 uppercase mb-3">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="font-rajdhani text-sm text-white/40 leading-relaxed tracking-wide group-hover:text-white/60 transition-colors duration-500">
                            {feature.description}
                        </p>

                        {/* Bottom reveal line */}
                        <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-pagani-gold/40 to-bright-gold/20 transition-all duration-700" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
