"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { carData } from "@/data/carData";

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

/* ─── Phase Component ─── */
function PhaseWrapper({
    children,
    scrollYProgress,
    start,
    end,
}: {
    children: React.ReactNode;
    scrollYProgress: MotionValue<number>;
    start: number;
    end: number;
}) {
    const opacity = useTransform(scrollYProgress, [start, start + 0.04, end - 0.04, end], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <div className="pointer-events-auto">{children}</div>
        </motion.div>
    );
}

/* ─── HUD Corner Borders ─── */
function HudCorners({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-pagani-gold/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-pagani-gold/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-pagani-gold/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-pagani-gold/40" />
        </div>
    );
}

/* ─── Decorative Scanline ─── */
function Scanline() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
            <div className="absolute inset-0 bg-repeating-linear-gradient" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,175,55,0.1) 2px, rgba(212,175,55,0.1) 4px)"
            }} />
        </div>
    );
}

/* ─── HERO Phase (0% – 33%) ─── */
function HeroPhase({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const y = useTransform(scrollYProgress, [0, 0.33], [0, -60]);
    const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

    return (
        <PhaseWrapper scrollYProgress={scrollYProgress} start={0} end={0.33}>
            <motion.div style={{ y }} className="text-center px-6 max-w-4xl">
                {/* Top HUD line */}
                <motion.div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-pagani-gold/50" />
                    <span className="font-orbitron text-[10px] tracking-[0.5em] text-pagani-gold/70 uppercase">
                        {carData.hero.subtitle}
                    </span>
                    <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-pagani-gold/50" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    style={{ scale: titleScale }}
                    className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gold-gradient leading-none"
                >
                    {carData.hero.title}
                </motion.h1>

                {/* Subtitle line */}
                <div className="mt-6 mb-8">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent" />
                </div>

                {/* Description */}
                <p className="font-rajdhani text-sm md:text-base text-white/50 tracking-widest uppercase max-w-xl mx-auto leading-relaxed">
                    {carData.hero.description}
                </p>

                {/* Price Badge */}
                <div className="mt-10 inline-flex items-center gap-6">
                    <div className="relative px-8 py-3 border border-pagani-gold/30">
                        <HudCorners />
                        <span className="font-orbitron text-lg md:text-xl tracking-wider text-pagani-gold">
                            {carData.price}
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: "rgba(212,175,55,0.8)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative px-10 py-3.5 border border-pagani-gold/40 bg-pagani-gold/5 hover:bg-pagani-gold/15 transition-all duration-500 group"
                    >
                        <span className="font-orbitron text-xs tracking-[0.3em] text-pagani-gold group-hover:text-bright-gold transition-colors">
                            {carData.hero.cta.toUpperCase()}
                        </span>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-pagani-gold transition-all duration-500" />
                    </motion.button>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-14 flex flex-col items-center gap-2 opacity-40"
                >
                    <span className="font-rajdhani text-[10px] tracking-[0.4em] uppercase text-white/40">
                        Scroll to explore
                    </span>
                    <div className="w-px h-8 bg-gradient-to-b from-pagani-gold/60 to-transparent" />
                </motion.div>
            </motion.div>
        </PhaseWrapper>
    );
}

/* ─── DESIGN Phase (33% – 66%) ─── */
function DesignPhase({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const x = useTransform(scrollYProgress, [0.33, 0.5], [-40, 0]);

    return (
        <PhaseWrapper scrollYProgress={scrollYProgress} start={0.33} end={0.66}>
            <motion.div style={{ x }} className="px-6 md:px-16 max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-pagani-gold" />
                            <span className="font-orbitron text-[10px] tracking-[0.5em] text-pagani-gold/70">
                                02 / 03
                            </span>
                        </div>
                        <h2 className="font-orbitron text-4xl md:text-6xl font-bold tracking-wider text-gold-gradient mb-6">
                            {carData.design.title}
                        </h2>
                        <h3 className="font-orbitron text-sm md:text-base tracking-[0.3em] text-pagani-gold/60 uppercase mb-6">
                            {carData.design.subtitle}
                        </h3>
                        <p className="font-rajdhani text-base md:text-lg text-white/50 leading-relaxed tracking-wide">
                            {carData.design.description}
                        </p>
                    </div>

                    {/* Right: Highlights */}
                    <div className="relative">
                        <div className="relative p-8 border border-pagani-gold/15 bg-pagani-black/50 backdrop-blur-sm">
                            <HudCorners />
                            <Scanline />
                            <h4 className="font-orbitron text-xs tracking-[0.4em] text-pagani-gold/60 uppercase mb-6">
                                Key Features
                            </h4>
                            <div className="space-y-4">
                                {carData.design.highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-2 h-2 rotate-45 border border-pagani-gold/50 group-hover:bg-pagani-gold/50 transition-colors" />
                                        <span className="font-rajdhani text-sm tracking-[0.2em] text-white/60 uppercase group-hover:text-white/90 transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Decorative data */}
                            <div className="mt-8 pt-4 border-t border-pagani-gold/10">
                                <div className="flex justify-between">
                                    <span className="font-orbitron text-[10px] text-pagani-gold/30 tracking-widest">
                                        AERO.SYS
                                    </span>
                                    <span className="font-orbitron text-[10px] text-pagani-gold/30 tracking-widest">
                                        v5.2.0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </PhaseWrapper>
    );
}

/* ─── ENGINE Phase (66% – 100%) ─── */
function EnginePhase({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const x = useTransform(scrollYProgress, [0.66, 0.8], [40, 0]);

    return (
        <PhaseWrapper scrollYProgress={scrollYProgress} start={0.66} end={1.0}>
            <motion.div style={{ x }} className="px-6 md:px-16 max-w-6xl w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
                    {/* Left: Heading */}
                    <div className="md:max-w-xs">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-pagani-gold" />
                            <span className="font-orbitron text-[10px] tracking-[0.5em] text-pagani-gold/70">
                                03 / 03
                            </span>
                        </div>
                        <h2 className="font-orbitron text-4xl md:text-6xl font-bold tracking-wider text-gold-gradient mb-4">
                            {carData.engine.title}
                        </h2>
                        <h3 className="font-orbitron text-sm tracking-[0.3em] text-pagani-gold/60 uppercase">
                            {carData.engine.subtitle}
                        </h3>
                    </div>

                    {/* Right: Specs Grid */}
                    <div className="relative p-8 border border-pagani-gold/15 bg-pagani-black/50 backdrop-blur-sm min-w-[320px] md:min-w-[420px]">
                        <HudCorners />
                        <Scanline />
                        <div className="space-y-5">
                            {Object.entries(carData.engine.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center border-b border-pagani-gold/10 pb-3">
                                    <span className="font-orbitron text-[10px] tracking-[0.3em] text-white/40 uppercase">
                                        {key}
                                    </span>
                                    <span className="font-orbitron text-sm md:text-base tracking-wider text-pagani-gold font-semibold">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Decorative data */}
                        <div className="mt-6 pt-4 border-t border-pagani-gold/10">
                            <div className="flex justify-between">
                                <span className="font-orbitron text-[10px] text-pagani-gold/30 tracking-widest">
                                    PWR.UNIT
                                </span>
                                <span className="font-orbitron text-[10px] text-bright-gold/40 tracking-widest animate-pulse-gold">
                                    ● ACTIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </PhaseWrapper>
    );
}

/* ─── Main Export ─── */
export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    return (
        <div className="absolute inset-0 z-10">
            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-pagani-black/80 via-transparent to-pagani-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-pagani-black/30 via-transparent to-pagani-black/30 pointer-events-none" />

            {/* HUD Phases */}
            <HeroPhase scrollYProgress={scrollYProgress} />
            <DesignPhase scrollYProgress={scrollYProgress} />
            <EnginePhase scrollYProgress={scrollYProgress} />

            {/* Bottom HUD bar */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pagani-gold/60 rounded-full" />
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/30">
                        McLAREN SPEEDTAIL — HYPER-GT
                    </span>
                </div>
                <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/20">
                    {carData.year}
                </span>
            </div>
        </div>
    );
}
