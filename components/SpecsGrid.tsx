"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function SpecsGrid() {
    return (
        <section id="performance" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-pagani-gold/40" />
                    <span className="font-orbitron text-[10px] tracking-[0.5em] text-pagani-gold/50 uppercase">
                        Technical Data
                    </span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-pagani-gold/40" />
                </div>
                <h2 className="font-orbitron text-3xl md:text-5xl font-bold tracking-wider text-gold-gradient">
                    SPECIFICATIONS
                </h2>
            </div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {carData.specifications.map((spec) => (
                    <motion.div
                        key={spec.category}
                        variants={cardVariants}
                        className="relative p-6 border border-pagani-gold/10 bg-carbon-gray/30 hover:border-pagani-gold/30 transition-all duration-500 group"
                    >
                        {/* Corner indicators */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-pagani-gold/30 group-hover:border-pagani-gold/60 transition-colors" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-pagani-gold/30 group-hover:border-pagani-gold/60 transition-colors" />

                        <h3 className="font-orbitron text-[11px] tracking-[0.4em] text-pagani-gold/60 uppercase mb-6">
                            {spec.category}
                        </h3>

                        <div className="space-y-4">
                            {spec.items.map((item) => (
                                <div key={item.label} className="flex justify-between items-baseline">
                                    <span className="font-rajdhani text-xs tracking-wider text-white/40 uppercase">
                                        {item.label}
                                    </span>
                                    <span className="font-orbitron text-sm text-white/80 font-medium tracking-wide">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-pagani-gold/50 to-transparent transition-all duration-700" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
