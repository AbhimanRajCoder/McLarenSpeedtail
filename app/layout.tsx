import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});

const rajdhani = Rajdhani({
    variable: "--font-rajdhani",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "McLaren Speedtail | Hyper-GT",
    description:
        "Experience the McLaren Speedtail — the ultimate hyper-GT. A 1,055 HP hybrid masterpiece engineered for 250 mph.",
    keywords: [
        "McLaren",
        "Speedtail",
        "Hyper-GT",
        "Supercar",
        "Luxury",
        "Hybrid",
    ],
};

export const viewport = {
    themeColor: "#0a0a0a",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
            <body className="bg-pagani-black text-white antialiased font-rajdhani">
                {children}
            </body>
        </html>
    );
}
