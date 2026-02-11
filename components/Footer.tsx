"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative border-t border-pagani-gold/10 bg-pagani-black">
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-pagani-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-6 border border-pagani-gold/50 rotate-45 flex items-center justify-center">
                                <div className="w-2 h-2 bg-pagani-gold" />
                            </div>
                            <span className="font-orbitron text-sm tracking-[0.3em] font-bold">
                                McLAREN
                            </span>
                        </div>
                        <p className="font-rajdhani text-sm text-white/30 leading-relaxed tracking-wide max-w-xs">
                            Pushing the boundaries of what is possible. The McLaren Speedtail represents the pinnacle of automotive engineering and design.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-orbitron text-[10px] tracking-[0.4em] text-pagani-gold/50 uppercase mb-6">
                            Explore
                        </h4>
                        <div className="space-y-3">
                            {["Heritage", "Design", "Performance", "Configure", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block font-rajdhani text-sm tracking-wider text-white/30 hover:text-pagani-gold transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-orbitron text-[10px] tracking-[0.4em] text-pagani-gold/50 uppercase mb-6">
                            Inquiries
                        </h4>
                        <div className="space-y-3">
                            <p className="font-rajdhani text-sm text-white/30 tracking-wider">
                                McLaren Automotive Ltd
                            </p>
                            <p className="font-rajdhani text-sm text-white/30 tracking-wider">
                                McLaren Technology Centre
                            </p>
                            <p className="font-rajdhani text-sm text-white/30 tracking-wider">
                                Woking, Surrey, UK
                            </p>
                            <motion.a
                                href="mailto:speedtail@mclaren.com"
                                whileHover={{ x: 4 }}
                                className="inline-block font-orbitron text-xs tracking-[0.2em] text-pagani-gold/60 hover:text-pagani-gold transition-colors mt-2"
                            >
                                speedtail@mclaren.com →
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-pagani-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/20">
                        © 2024 McLAREN AUTOMOTIVE LIMITED
                    </span>
                    <div className="flex items-center gap-6">
                        <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/20">
                            PRIVACY
                        </span>
                        <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/20">
                            TERMS
                        </span>
                        <span className="font-orbitron text-[9px] tracking-[0.3em] text-white/20">
                            COOKIES
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
