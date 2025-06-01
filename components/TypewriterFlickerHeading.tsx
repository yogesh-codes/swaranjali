// components/TypewriterFlickerHeading.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TypewriterFlickerHeadingProps = {
    headingText: string;
    headingClassName: string;
};

export default function TypewriterFlickerHeading({
    headingText,
    headingClassName,
}: TypewriterFlickerHeadingProps) {
    // Split the text into an array of characters
    const letters = Array.from(headingText);

    // Parent variant: stagger children
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, // 50ms between letters
            },
        },
    };

    // Child variant: each letter fades in, with a short flicker at start
    const child = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0, 1, 0.6, 1], // quick flicker: 0 → 1 → 0.8 → 1
            transition: {
                times: [0, 0.2, 0.4, 1],
                duration: 1.5,
                ease: "ease-in",
            },
        },
    };

    return (
        <div className="flex items-center justify-center py-20">
            <motion.h1
                variants={container}
                initial="hidden"
                animate="visible"
                className={cn(
                    "text-6xl font text-ndark tracking-tight",
                    headingClassName
                )}
            >
                {letters.map((char, idx) => (
                    <motion.span
                        key={idx}
                        variants={child}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}
