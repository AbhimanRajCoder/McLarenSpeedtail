"use client";

import { useRef, useEffect, useCallback } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
    filenamePattern?: string;
    extension?: string;
    padLength?: number;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
    filenamePattern = "ezgif-frame-",
    extension = ".jpg",
    padLength = 3,
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const loadedCountRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    // Build filename for a given index (1-based)
    const getFramePath = useCallback(
        (index: number) => {
            const num = String(index).padStart(padLength, "0");
            return `${imageFolderPath}/${filenamePattern}${num}${extension}`;
        },
        [imageFolderPath, filenamePattern, extension, padLength]
    );

    // Draw a frame on canvas with proper scaling
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[frameIndex];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const dpr = window.devicePixelRatio || 1;
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;

        // Only resize canvas buffer if needed
        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
            ctx.scale(dpr, dpr);
        }

        ctx.clearRect(0, 0, displayWidth, displayHeight);

        // object-fit: cover logic
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = displayWidth / displayHeight;

        let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

        if (imgRatio > canvasRatio) {
            // Image is wider — fit by height, crop sides
            drawHeight = displayHeight;
            drawWidth = displayHeight * imgRatio;
            offsetX = (displayWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Image is taller — fit by width, crop top/bottom
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;
            offsetX = 0;
            offsetY = (displayHeight - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    // Preload all images
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        loadedCountRef.current = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCountRef.current++;
                // Draw first frame once it's loaded
                if (i === 1) {
                    drawFrame(0);
                }
            };
            images.push(img);
        }

        imagesRef.current = images;

        // Handle resize
        const handleResize = () => {
            drawFrame(currentFrameRef.current);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [totalFrames, getFramePath, drawFrame]);

    // Listen to scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(
            Math.floor(latest * totalFrames),
            totalFrames - 1
        );

        if (frameIndex !== currentFrameRef.current) {
            currentFrameRef.current = frameIndex;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                drawFrame(frameIndex);
            });
        }
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
        />
    );
}
