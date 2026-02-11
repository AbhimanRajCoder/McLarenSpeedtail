"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ZondaScrollCanvas from "@/components/ZondaScrollCanvas";
import ZondaExperience from "@/components/ZondaExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { carData } from "@/data/carData";

export default function Home() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main className="bg-pagani-black">
            <Navbar />

            {/* Scroll-driven section */}
            <section ref={containerRef} className="h-[500vh] relative">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* Canvas layer (z-0) */}
                    <div className="absolute inset-0 z-0">
                        <ZondaScrollCanvas
                            scrollYProgress={scrollYProgress}
                            totalFrames={carData.sequence.totalFrames}
                            imageFolderPath={carData.sequence.folderPath}
                            filenamePattern={carData.sequence.filenamePattern}
                            extension={carData.sequence.extension}
                            padLength={carData.sequence.padLength}
                        />
                    </div>

                    {/* HUD overlay (z-10) */}
                    <ZondaExperience scrollYProgress={scrollYProgress} />
                </div>
            </section>

            {/* Below-fold content */}
            <div className="relative z-20 bg-pagani-black">
                <SpecsGrid />
                <Features />
                <Footer />
            </div>
        </main>
    );
}
