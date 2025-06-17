"use client";
import { cn } from "@/app/(auth)/_lib/utils";
import { motion } from "motion/react";
import React from "react";

type FlyinHeadingProps = {
    headingText: string;
    headingClassName?: string;
};

const FlyinHeading = ({ headingText, headingClassName }: FlyinHeadingProps) => {
    return (
        <motion.h1
            className={cn("text-center", headingClassName)}
            // 1) Start off invisible and a bit lower (y: 20px)
            initial={{ opacity: 0, y: 20 }}
            // 2) Animate to fully visible and y: 0
            animate={{ opacity: 1, y: 0 }}
            // 3) Customize timing/easing
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <span className={`${headingText} text-6xl`}>{headingText} </span>
            2025
        </motion.h1>
    );
};

export default FlyinHeading;
