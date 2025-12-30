"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-coral/20 blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-sage/20 blur-[100px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-warning/10 blur-[80px]"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
