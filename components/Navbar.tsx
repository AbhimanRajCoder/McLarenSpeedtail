"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-8 h-8 border border-pagani-gold/60 rotate-45 flex items-center justify-center">
                            <div className="w-3 h-3 bg-pagani-gold rotate-0" />
                        </div>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-orbitron text-sm font-bold tracking-[0.3em] text-white">
                            McLAREN
                        </span>
                        <span className="text-[10px] tracking-[0.5em] text-pagani-gold/80 uppercase">
                            Speedtail
                        </span>
                    </div>
                </div>

                {/* Nav Links (hidden on mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    {["Heritage", "Design", "Performance", "Configure"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-rajdhani text-xs tracking-[0.25em] uppercase text-white/60 hover:text-pagani-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group px-6 py-2.5 border border-pagani-gold/50 hover:border-pagani-gold transition-all duration-300"
                >
                    <span className="font-orbitron text-[10px] tracking-[0.3em] text-pagani-gold group-hover:text-bright-gold transition-colors">
                        INQUIRE
                    </span>
                    <div className="absolute inset-0 bg-pagani-gold/5 group-hover:bg-pagani-gold/10 transition-colors" />
                    {/* Corner indicators */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pagani-gold" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pagani-gold" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pagani-gold" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pagani-gold" />
                </motion.button>
            </div>
        </motion.nav>
    );
}
